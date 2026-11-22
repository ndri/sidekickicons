import { icon, line, polygon, scaled, type Shape } from '../compiler/dsl.ts'

// Heroicons' play triangle: 15 wide and 16.5 tall, its corners rounded by 1.125
const [WIDTH, HEIGHT, ROUND] = [15, 16.5, 1.125]
// How far the rounded tip falls short of the corner it rounds
const SHORT = ROUND * (Math.hypot(WIDTH, HEIGHT / 2) / (HEIGHT / 2) - 1)
// The bar is a little shorter than the triangle's rounded corners reach
const BAR = HEIGHT - 3

// The outline's bar: 3 past the tip, or 3.75 behind the flat side, from line to line
const OUTLINE = { skip: 3, step: 3.75 }
// The solid's bar is wider, like the bars in Heroicons' solid play-pause, and the gap beside it
// gets relatively wider at smaller sizes, where the drawing is a little smaller to fit
const SOLID = {
  24: { bar: 2.25, skip: 1.25, step: 1.75, size: 1 },
  20: { bar: 2, skip: 1.5, step: 1.5, size: 0.97 },
  16: { bar: 1.5, skip: 1.5, step: 1.5, size: 0.95 },
}

/**
 * Heroicons' play triangle with a bar at its tip (`skip`, ▶|) or behind its flat side (`step`, |▶),
 * as in Lucide. The backward ones are mirror images of the forward ones.
 */
export function playBar(kind: 'skip' | 'step', direction: 'forward' | 'backward') {
  const flip = (x: number) => (direction === 'forward' ? x : 24 - x)

  /** The outline or solid for `size`, centered on the 24 grid before it's scaled down. */
  function drawing(size: 24 | 20 | 16, solid: boolean): Shape[] {
    const scale = { 24: 1, 20: 29 / 36, 16: 25 / 36 }[size]
    const { bar: barWidth, [kind]: gap, size: factor } = SOLID[size]
    const [width, height, barHeight] = [WIDTH, HEIGHT, BAR].map((v) => v * (solid ? factor : 1))
    const reach = width - SHORT
    // The bar's center and the drawing's left and right edges, from the triangle's flat side
    let bar: number, left: number, right: number
    if (!solid) {
      bar = kind === 'skip' ? reach + OUTLINE.skip : -OUTLINE.step
      ;[left, right] = [Math.min(0, bar), Math.max(reach, bar)]
    } else {
      // The solid grows by half a pen around the triangle, and the bar is barWidth wide, both once
      // scaled
      const apart = (1.5 + 2 * gap + barWidth) / 2 / scale
      const [triangle, half] = [0.75 / scale, barWidth / 2 / scale]
      bar = kind === 'skip' ? reach + apart : -apart
      ;[left, right] = kind === 'skip' ? [-triangle, bar + half] : [bar - half, reach + triangle]
    }
    const x = (at: number) => flip(12 - (left + right) / 2 + at)
    const [top, bottom] = [12 - height / 2, 12 + height / 2]
    const [barTop, barBottom] = [12 - barHeight / 2, 12 + barHeight / 2]
    // Drawn thinner than it ends up, since the solid grows it by half a pen on each side
    const core = solid ? (barWidth - 1.5) / scale / 2 : 0
    return [
      polygon([x(0), top, ROUND], [x(width), 12, ROUND], [x(0), bottom, ROUND]),
      core > 0
        ? polygon(
            [x(bar) - core, barTop],
            [x(bar) + core, barTop],
            [x(bar) + core, barBottom],
            [x(bar) - core, barBottom]
          )
        : line(x(bar), barTop, x(bar), barBottom),
    ]
  }

  return icon({
    24: [
      ...drawing(24, false).map((shape) => shape.outlineOnly()),
      ...drawing(24, true).map((shape) => shape.solidOnly()),
    ],
    20: scaled(drawing(20, true), 29 / 36, 1 / 3, 1 / 3),
    16: scaled(drawing(16, true), 25 / 36, -1 / 3, -1 / 3),
  })
}

export default playBar('skip', 'forward')
