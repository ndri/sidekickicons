import { circle, icon, line } from '../compiler/dsl.ts'

// A ring with four ticks out to the edges, for "use my location". The solid adds a dot in the
// middle, with a radius of `dot`.
const crosshair = (center: number, r: number, end: number, dot: number) => [
  circle(center, center, r).hollowed(),
  circle(center, center, dot - 0.75).solidOnly(),
  line(center, end, center, center - r),
  line(center, center + r, center, 2 * center - end),
  line(end, center, center - r, center),
  line(center + r, center, 2 * center - end, center),
]

export default icon({
  24: crosshair(12, 6, 2.75, 3),
  20: crosshair(10, 5, 2.75, 2.5),
  16: crosshair(8, 3.75, 1.75, 1.5),
})
