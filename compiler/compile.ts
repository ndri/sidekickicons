import type { CanvasKit, ContourMeasure, Path, PathOp } from 'canvaskit-wasm'
import { PEN, n, type IconDefinition, type Shape } from './dsl.ts'

export const variants = ['24/outline', '24/solid', '20/solid', '16/solid'] as const
export type Variant = (typeof variants)[number]

// Skia's stroker and path ops are tuned for pixel coordinates, so do the geometry at 100x
const SCALE = 100
// At 100x the stroker's default precision makes far more curves than an icon needs. This keeps the
// edges within about 0.01 units while making the solid SVGs about a fifth smaller.
const STROKE_PRECISION = 0.25

/** Compiles a definition to SVG files, keyed by variant. Sizes the definition leaves out are skipped. */
export function compileIcon(ck: CanvasKit, icon: IconDefinition): Partial<Record<Variant, string>> {
  const svgs: Partial<Record<Variant, string>> = {}
  for (const size of [24, 20, 16] as const) {
    const shapes = icon[size]
    if (!shapes) continue
    if (size === 24) {
      const d = outlinePathData(
        ck,
        shapes.filter((shape) => shape.style !== 'solid')
      )
      svgs['24/outline'] = svg(
        size,
        `fill="none" stroke="currentColor" stroke-width="${PEN}"`,
        `stroke-linecap="round" stroke-linejoin="round" d="${d}"`
      )
    }
    const d = solidPathData(
      ck,
      shapes.filter((shape) => shape.style !== 'outline')
    )
    svgs[`${size}/solid`] = svg(
      size,
      'fill="currentColor"',
      `fill-rule="evenodd" clip-rule="evenodd" d="${d}"`
    )
  }
  return svgs
}

function svg(size: number, svgAttributes: string, pathAttributes: string): string {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" ` +
    `viewBox="0 0 ${size} ${size}" ${svgAttributes}>\n  <path ${pathAttributes}/>\n</svg>\n`
  )
}

/** The centerlines of the shapes, each trim stopping the ones before it. */
function outlinePathData(ck: CanvasKit, shapes: Shape[]): string {
  let drawn: string[] = []
  for (const shape of shapes) {
    if (shape.role !== 'trim') {
      drawn.push(shape.d)
      continue
    }
    const area = scaledPath(ck, shape.d)
    drawn = drawn.map((d) => trimmed(ck, d, area))
    area.delete()
  }
  return drawn.join('')
}

// How far apart, in icon units, to test points along a centerline for whether a trim covers them
const TRIM_STEP = 0.02

/**
 * The parts of a centerline outside an area, cut along its curves. Unchanged when the area doesn't
 * touch it, so untouched shapes keep their own path data.
 */
function trimmed(ck: CanvasKit, d: string, area: Path): string {
  const path = scaledPath(ck, d)
  const iterator = new ck.ContourMeasureIter(path, false, 1)
  const kept: string[] = []
  let touched = false
  for (let contour = iterator.next(); contour; contour = iterator.next()) {
    const measure = contour
    const length = measure.length()
    const outside = (distance: number) => {
      const [x, y] = measure.getPosTan(distance)
      return !area.contains(x, y)
    }
    // Where the inside and outside meet, to well under a hundredth of a unit
    const edge = (from: number, to: number) => {
      const fromOutside = outside(from)
      for (let i = 0; i < 12; i++) {
        const middle = (from + to) / 2
        if (outside(middle) === fromOutside) from = middle
        else to = middle
      }
      return (from + to) / 2
    }
    const step = TRIM_STEP * SCALE
    let start = outside(0) ? 0 : undefined
    if (start === undefined) touched = true
    let previous = 0
    for (let distance = Math.min(step, length); ; distance = Math.min(distance + step, length)) {
      const out = outside(distance)
      if (!out) touched = true
      if (out && start === undefined) start = edge(previous, distance)
      if (!out && start !== undefined) {
        kept.push(segment(ck, measure, start, edge(previous, distance)))
        start = undefined
      }
      previous = distance
      if (distance === length) break
    }
    if (start !== undefined) kept.push(segment(ck, measure, start, length))
    measure.delete()
  }
  iterator.delete()
  path.delete()
  return touched ? kept.join('') : d
}

function segment(ck: CanvasKit, contour: ContourMeasure, from: number, to: number): string {
  const part = contour.getSegment(from, to, true)
  const d = pathData(ck, part)
  part.delete()
  return d
}

function solidPathData(ck: CanvasKit, shapes: Shape[]): string {
  let result = new ck.Path()
  for (const shape of shapes) {
    const op = shape.role === 'cut' ? ck.PathOp.Difference : ck.PathOp.Union
    result = combine(ck, result, shapeRegion(ck, shape, true), op)
  }
  const d = pathData(ck, result)
  result.delete()
  return d
}

/**
 * The area a shape covers, at 100x: the pen's trace, plus the area it encloses when it's filled. A
 * wider pen than usual finds shapes near a point too.
 */
function shapeRegion(ck: CanvasKit, shape: Shape, filled: boolean, pen = PEN): Path {
  const centerline = scaledPath(ck, shape.d)
  let region = centerline.makeStroked({
    width: pen * SCALE,
    cap: ck.StrokeCap.Round,
    join: ck.StrokeJoin.Round,
    precision: STROKE_PRECISION,
  })
  if (!region) throw new Error(`Couldn't stroke ${shape.d}`)
  if (filled && shape.closed && !shape.hollow) {
    const single = contours(ck, centerline).length === 1
    region = combine(ck, region, centerline, ck.PathOp.Union)
    // Skia's stroke of a curve tighter than the pen leaves a hole in the middle. A filled
    // single contour grown by the pen can't have holes, so fill them.
    if (single) region = withoutHoles(ck, region)
  } else centerline.delete()
  return region
}

/**
 * The shapes of a variant drawn at a point, or if none are, the ones within half a unit of it. In
 * drawing order, so the last one is on top.
 */
export function shapesAt(
  ck: CanvasKit,
  icon: IconDefinition,
  variant: Variant,
  [x, y]: [number, number]
): Shape[] {
  const outline = variant === '24/outline'
  const shapes = (icon[parseInt(variant) as 24 | 20 | 16] ?? []).filter(
    (shape) => shape.style !== (outline ? 'solid' : 'outline') && shape.role !== 'trim'
  )
  for (const pen of [PEN, PEN + 1]) {
    const found = shapes.filter((shape) => {
      const region = shapeRegion(ck, shape, !outline, pen)
      const inside = region.contains(x * SCALE, y * SCALE)
      region.delete()
      return inside
    })
    if (found.length) return found
  }
  return []
}

/** Combines two paths and deletes them, since Skia's objects live outside JS garbage collection. */
function combine(ck: CanvasKit, one: Path, two: Path, op: PathOp) {
  const combined = ck.Path.MakeFromOp(one, two, op)
  one.delete()
  two.delete()
  if (!combined) throw new Error('Path operation failed')
  return combined
}

/** Splits a path into its contours, each as path commands. */
function contours(ck: CanvasKit, path: Path): number[][] {
  const cmds = path.toCmds()
  const sizes: Record<number, number> = {
    [ck.MOVE_VERB]: 2,
    [ck.LINE_VERB]: 2,
    [ck.QUAD_VERB]: 4,
    [ck.CONIC_VERB]: 5,
    [ck.CUBIC_VERB]: 6,
    [ck.CLOSE_VERB]: 0,
  }
  const result: number[][] = []
  for (let i = 0; i < cmds.length; ) {
    const verb = cmds[i]
    const end = i + 1 + sizes[verb]
    if (verb === ck.MOVE_VERB) result.push([])
    result[result.length - 1].push(...cmds.subarray(i, end))
    i = end
  }
  return result
}

/** Keeps only the outermost contours of a path. */
function withoutHoles(ck: CanvasKit, path: Path): Path {
  const parts = contours(ck, path)
  const paths = parts.map((part) => ck.Path.MakeFromCmds(part)!)
  const outer = parts.filter(
    (part, i) => !paths.some((other, j) => j !== i && other.contains(part[1], part[2]))
  )
  paths.forEach((p) => p.delete())
  path.delete()
  const result = ck.Path.MakeFromCmds(outer.flat())
  if (!result) throw new Error('Path operation failed')
  return result
}

function scaledPath(ck: CanvasKit, d: string): Path {
  const path = ck.Path.MakeFromSVGString(d)
  if (!path) throw new Error(`Invalid path data: ${d}`)
  const scaled = new ck.PathBuilder(path).transform([SCALE, 0, 0, 0, SCALE, 0, 0, 0, 1])
  path.delete()
  return scaled.detachAndDelete()
}

/** Writes a path as SVG path data in icon units, turning Skia's conics into cubics. */
function pathData(ck: CanvasKit, path: Path): string {
  const cmds = path.toCmds()
  let i = 0
  const take = (count: number) => Array.from(cmds.subarray(i, (i += count)), (v) => v / SCALE)
  const command = (letter: string, values: number[]) => letter + values.map(n).join(' ')
  let d = ''
  let start = [0, 0]
  let current = start
  while (i < cmds.length) {
    const verb = cmds[i++]
    if (verb === ck.MOVE_VERB) {
      start = current = take(2)
      d += command('M', current)
    } else if (verb === ck.LINE_VERB) {
      current = take(2)
      d += command('L', current)
    } else if (verb === ck.QUAD_VERB) {
      const points = take(4)
      current = points.slice(2)
      d += command('Q', points)
    } else if (verb === ck.CONIC_VERB) {
      const [x1, y1, x2, y2] = take(4)
      const w = cmds[i++]
      const k = (4 * w) / (3 * (1 + w))
      const [x, y] = current
      current = [x2, y2]
      d += command('C', [
        x + k * (x1 - x),
        y + k * (y1 - y),
        x2 + k * (x1 - x2),
        y2 + k * (y1 - y2),
        x2,
        y2,
      ])
    } else if (verb === ck.CUBIC_VERB) {
      const points = take(6)
      current = points.slice(4)
      d += command('C', points)
    } else if (verb === ck.CLOSE_VERB) {
      current = start
      d += 'Z'
    }
  }
  return d
}
