import { circle, icon, line, polyline, scaled, type Shape } from '../compiler/dsl.ts'

type Point = [number, number]

/** A line from the edge of a circle out to `to`. */
export function spoke([cx, cy]: Point, r: number, [x, y]: Point): Shape {
  const length = Math.hypot(x - cx, y - cy)
  return line(cx + ((x - cx) * r) / length, cy + ((y - cy) * r) / length, x, y)
}

/** An arrowhead pointing diagonally out to `tip`, its barbs `barb` long. */
export function arrowhead([x, y]: Point, [dx, dy]: Point, barb: number): Shape {
  return polyline([x - dx * barb, y], [x, y], [x, y - dy * barb])
}

// A circle with an arrow out to the top right (♂)
const male = [
  circle(9.75, 14.25, 5.25),
  spoke([9.75, 14.25], 5.25, [19.5, 4.5]),
  arrowhead([19.5, 4.5], [1, -1], 4.5),
].map((shape) => shape.hollowed())

export default icon({
  24: male,
  20: scaled(male, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(male, 25 / 36, -1 / 3, -1 / 3),
})
