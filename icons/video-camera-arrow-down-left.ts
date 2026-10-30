import { icon, line, path, polygon, polyline, rect, type Shape } from '../compiler/dsl.ts'

/** Draws a symbol centered on a point, spanning a square of the given width. */
export type Symbol = (x: number, y: number, span: number) => Shape[]

/**
 * Heroicons' video camera with a symbol inside its body, cut out of the solid. The symbol keeps a
 * pen-wide gap from the inside of the body.
 */
export function videoCamera(symbol: Symbol) {
  const cut = (x: number, y: number, span: number) => symbol(x, y, span).map((shape) => shape.cut())
  return icon({
    24: [
      path(
        'M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z'
      ).outlineOnly(),
      path(
        'm15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72'
      ).outlineOnly(),
      ...symbol(9, 12, 4.5).map((shape) => shape.outlineOnly()),
      // Heroicons' solid body is narrower, with a gap before the lens
      rect(2.25, 5.25, 12.75, 13.5, 2.25).solidOnly(),
      path(
        'M18 8.25 20.47 5.78a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53L18 15.75Z'
      ).solidOnly(),
      ...cut(8.625, 12, 4.5).map((shape) => shape.solidOnly()),
    ],
    20: [
      rect(1.75, 4.75, 10.5, 10.5, 1.5),
      polygon([15.25, 7.75], [18.25, 4.75], [18.25, 15.25], [15.25, 12.25]),
      ...cut(7, 10, 4),
    ],
    16: [
      rect(1.75, 4.75, 7.5, 6.5, 1.25),
      polygon([12.25, 6.75], [14.25, 4.75], [14.25, 11.25], [12.25, 9.25]),
      ...cut(5.5, 8, 3),
    ],
  })
}

/** An arrow pointing down and left, like phone-arrow-down-left's: a diagonal and its corner. */
export const arrowDownLeft: Symbol = (x, y, span) => {
  const half = span / 2
  const leg = span * (2 / 3)
  return [
    line(x + half, y - half, x - half, y + half),
    polyline([x - half, y + half - leg], [x - half, y + half], [x - half + leg, y + half]),
  ]
}

export default videoCamera(arrowDownLeft)
