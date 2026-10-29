// Icons are drawn the way Heroicons are: every shape is a centerline traced with a round pen that
// is 1.5 units wide. The outline style strokes the centerlines. The solid styles fill each "body"
// shape and grow it by half the pen, then erase each "cut" shape with the same pen, in order.

export const PEN = 1.5

export type Style = 'outline' | 'solid'
export type Point = [number, number]
/** A polygon or polyline point, optionally with the radius its centerline is rounded by there. */
export type Corner = [x: number, y: number, radius?: number]

export class Shape {
  d: string
  closed: boolean
  /** How the shape was made, like `circle(12, 12, 9)`, to point at it in its definition. */
  label: string
  role: 'body' | 'cut' = 'body'
  hollow = false
  style: Style | undefined = undefined

  constructor(d: string, closed: boolean, label = '') {
    this.d = d
    this.closed = closed
    this.label = label
  }

  /** In solid styles, erase this shape from what was drawn before it instead of adding it. */
  cut(): this {
    this.role = 'cut'
    return this
  }

  /** In solid styles, use only the pen's trace and not the area the shape encloses. */
  hollowed(): this {
    this.hollow = true
    return this
  }

  /** Draw this shape only in the 24px outline style. */
  outlineOnly(): this {
    this.style = 'outline'
    return this
  }

  /** Draw this shape only in the solid styles. */
  solidOnly(): this {
    this.style = 'solid'
    return this
  }
}

/** Shapes for each size. 24 makes both the outline and solid style, 20 and 16 only solid. */
export type IconDefinition = {
  24?: Shape[]
  20?: Shape[]
  16?: Shape[]
}

export function icon(definition: IconDefinition): IconDefinition {
  return definition
}

/**
 * Scales shapes from the origin and then moves them, e.g. to start the 20 or 16 drawing from the 24
 * one. Smaller sizes often need adjusting afterwards, since Heroicons redraw them for their grid.
 * Many existing small sizes are the 24 scaled around the center: `scaled(drawing, 29 / 36, 1 / 3,
 * 1 / 3)` for 20 and `scaled(drawing, 25 / 36, -1 / 3, -1 / 3)` for 16.
 */
export function scaled(shapes: Shape[], factor: number, dx = 0, dy = 0): Shape[] {
  return shapes.map((shape) =>
    Object.assign(new Shape(transformPathData(shape.d, factor, dx, dy), shape.closed), {
      label: `${shape.label}, scaled`,
      role: shape.role,
      hollow: shape.hollow,
      style: shape.style,
    })
  )
}

export function n(value: number): string {
  return String(Math.round(value * 1000) / 1000 || 0)
}

/** Writes a call to a shape function, like `polygon([3, 7.5], [12, 2.25])`. */
function call(name: string, ...args: (number | Corner)[]): string {
  const format = (arg: number | Corner) =>
    typeof arg === 'number'
      ? n(arg)
      : `[${arg
          .filter((v) => v !== undefined)
          .map(n)
          .join(', ')}]`
  return `${name}(${args.map(format).join(', ')})`
}

export function line(x1: number, y1: number, x2: number, y2: number): Shape {
  return new Shape(`M${n(x1)} ${n(y1)}L${n(x2)} ${n(y2)}`, false, call('line', x1, y1, x2, y2))
}

export function polyline(...corners: Corner[]): Shape {
  return new Shape(cornerPathData(corners, false), false, call('polyline', ...corners))
}

export function polygon(...corners: Corner[]): Shape {
  return new Shape(cornerPathData(corners, true), true, call('polygon', ...corners))
}

/** Straight lines between the corners, with an arc of the given radius at each rounded corner. */
function cornerPathData(corners: Corner[], closed: boolean): string {
  const unit = (x: number, y: number) => [x / Math.hypot(x, y), y / Math.hypot(x, y)]
  return (
    corners
      .map(([x, y, radius], i) => {
        const command = i ? 'L' : 'M'
        const end = !closed && (i === 0 || i === corners.length - 1)
        if (!radius || end) return `${command}${n(x)} ${n(y)}`
        const [px, py] = corners[(i - 1 + corners.length) % corners.length]
        const [nx, ny] = corners[(i + 1) % corners.length]
        const [ax, ay] = unit(px - x, py - y)
        const [bx, by] = unit(nx - x, ny - y)
        // The arc touches both edges this far from the corner
        const reach = radius / Math.tan(Math.acos(ax * bx + ay * by) / 2)
        const sweep = ax * by - ay * bx < 0 ? 1 : 0
        return (
          `${command}${n(x + ax * reach)} ${n(y + ay * reach)}` +
          `A${n(radius)} ${n(radius)} 0 0 ${sweep} ${n(x + bx * reach)} ${n(y + by * reach)}`
        )
      })
      .join('') + (closed ? 'Z' : '')
  )
}

export function ellipse(cx: number, cy: number, rx: number, ry: number): Shape {
  const arc = (dx: number) => `a${n(rx)} ${n(ry)} 0 1 0 ${n(dx)} 0`
  const d = `M${n(cx - rx)} ${n(cy)}${arc(2 * rx)}${arc(-2 * rx)}Z`
  return new Shape(d, true, call('ellipse', cx, cy, rx, ry))
}

export function circle(cx: number, cy: number, r: number): Shape {
  return Object.assign(ellipse(cx, cy, r, r), { label: call('circle', cx, cy, r) })
}

export function rect(x: number, y: number, width: number, height: number, radius = 0): Shape {
  const r = Math.min(radius, width / 2, height / 2)
  const corner = (dx: number, dy: number) => (r ? `a${n(r)} ${n(r)} 0 0 1 ${n(dx)} ${n(dy)}` : '')
  return new Shape(
    `M${n(x + r)} ${n(y)}h${n(width - 2 * r)}${corner(r, r)}v${n(height - 2 * r)}${corner(-r, r)}` +
      `h${n(2 * r - width)}${corner(-r, -r)}v${n(2 * r - height)}${corner(r, -r)}Z`,
    true,
    call('rect', x, y, width, height, ...(radius ? [radius] : []))
  )
}

/** A round dot as wide as the pen, drawn the way Heroicons draw them. */
export function dot(x: number, y: number): Shape {
  return new Shape(`M${n(x)} ${n(y)}h.008v.008h-.008Z`, true, call('dot', x, y))
}

/** Any SVG path data. Its subpaths must be either all closed or all open. */
export function path(d: string): Shape {
  const subpaths = d.trim().split(/(?=[Mm])/)
  const closed = subpaths.map((subpath) => /[Zz]\s*$/.test(subpath))
  if (closed.some((c) => c !== closed[0])) {
    throw new Error(`Split open and closed subpaths into separate shapes: ${d}`)
  }
  const start = d.trim().length > 40 ? `${d.trim().slice(0, 40)}…` : d.trim()
  return new Shape(d.trim(), closed[0], `path('${start}')`)
}

// How many numbers each SVG path command takes
const ARGUMENTS: Record<string, number> = {
  m: 2,
  l: 2,
  h: 1,
  v: 1,
  c: 6,
  s: 4,
  q: 4,
  t: 2,
  a: 7,
  z: 0,
}

function transformPathData(d: string, factor: number, dx: number, dy: number): string {
  let i = 0
  const skip = () => {
    while (i < d.length && /[\s,]/.test(d[i])) i++
  }
  const number = () => {
    skip()
    const match = /^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?/i.exec(d.slice(i))
    if (!match) throw new Error(`Expected a number at ${i} in ${d}`)
    i += match[0].length
    return parseFloat(match[0])
  }
  // Arc flags are single digits that compact path data doesn't separate, like "0 01-.19.87"
  const flag = () => {
    skip()
    return Number(d[i++] === '1')
  }

  let out = ''
  let command = ''
  for (skip(); i < d.length; skip()) {
    if (/[a-z]/i.test(d[i])) command = d[i++]
    else if (!command) throw new Error(`Expected a command at ${i} in ${d}`)
    const type = command.toLowerCase()
    if (!(type in ARGUMENTS)) throw new Error(`Unknown path command ${command} in ${d}`)
    const absolute = command !== type
    const x = (value: number) => value * factor + (absolute ? dx : 0)
    const y = (value: number) => value * factor + (absolute ? dy : 0)
    let values: number[] = []
    if (type === 'h') values = [x(number())]
    else if (type === 'v') values = [y(number())]
    else if (type === 'a') {
      const [rx, ry, rotation, large, sweep] = [number(), number(), number(), flag(), flag()]
      values = [rx * factor, ry * factor, rotation, large, sweep, x(number()), y(number())]
    } else {
      for (let k = 0; k < ARGUMENTS[type]; k += 2) values.push(x(number()), y(number()))
    }
    out += command + values.map(n).join(' ')
    // Numbers repeated after a moveto are linetos, and closepath takes none
    if (type === 'm') command = absolute ? 'L' : 'l'
    if (type === 'z') command = ''
  }
  return out
}
