import { icon, line, polygon, rect, scaled, type Corner } from '../compiler/dsl.ts'

const BOARD = () => rect(3, 6.75, 18, 6, 1.5)

/**
 * A construction barrier: a board with `count` stripes at 45°, evenly spaced and continuing into its
 * corners, on two posts that stick out above it. The solid fills the board and its posts, cuts the
 * stripes out and draws the board's rim back on top, which hides the cuts' round ends. The cuts
 * are as wide as the board between them once drawn at `scale`.
 */
const barrier = (count: number, scale: number) => {
  // Stripes cross the board's middle at x = 3 + i * spacing, including the corner ones at 3 and 21
  const spacing = 18 / (count + 1)
  const middles = Array.from({ length: count }, (_, i) => 3 + spacing * (i + 1))
  // How far each cut reaches along the board's edges beyond its centerline, besides the pen
  const k = Math.max(0, spacing / 4 - 1.5 / scale / Math.SQRT2)
  const band = (x: number): Corner[] => [
    [x + 3 - k, 6.75],
    [x + 3 + k, 6.75],
    [x - 3 + k, 12.75],
    [x - 3 - k, 12.75],
  ]
  return [
    BOARD().outlineOnly(),
    ...middles.map((x) => line(x + 3, 6.75, x - 3, 12.75).outlineOnly()),
    line(6, 6.75, 3, 9.75).outlineOnly(),
    line(21, 9.75, 18, 12.75).outlineOnly(),
    ...[7.5, 16.5].flatMap((x) => [
      line(x, 4.5, x, 6.75).outlineOnly(),
      line(x, 12.75, x, 20.25).outlineOnly(),
      line(x, 4.5, x, 20.25).solidOnly(),
    ]),
    BOARD().solidOnly(),
    ...middles.map((x) =>
      polygon(...band(x))
        .cut()
        .solidOnly()
    ),
    polygon([6 - k, 6.75], [6 + k, 6.75], [3, 9.75 + k], [3, 9.75 - k])
      .cut()
      .solidOnly(),
    polygon([21, 9.75 - k], [21, 9.75 + k], [18 + k, 12.75], [18 - k, 12.75])
      .cut()
      .solidOnly(),
    BOARD().hollowed().solidOnly(),
  ]
}

export default icon({
  24: barrier(3, 1),
  20: scaled(barrier(2, 29 / 36), 29 / 36, 1 / 3, 1 / 3),
  16: scaled(barrier(1, 25 / 36), 25 / 36, -1 / 3, -1 / 3),
})
