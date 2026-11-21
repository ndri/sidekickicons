import { circle, icon, line, polyline, scaled, type Shape } from '../compiler/dsl.ts'

// A diamond-frame bicycle: the rear triangle and front triangle meet at the pedals, the fork runs
// from the handlebar to the front hub
const [R, F, B, S, H]: [number, number][] = [
  [6.375, 15.75],
  [17.625, 15.75],
  [11.25, 15.75],
  [9.75, 10.5],
  [15.375, 10.5],
]
const bicycle = (frame: Shape[]) => [
  circle(...R, 3.375).hollowed(),
  circle(...F, 3.375).hollowed(),
  ...frame,
  line(...B, ...S),
  polyline(F, H, [14.625, 7.5], [16.875, 7.5]),
  line(...S, 9.375, 8.25),
  line(8.25, 8.25, 10.875, 8.25),
]

export default icon({
  24: bicycle([polyline(R, S, H, B, R)]),
  20: scaled(bicycle([polyline(R, S, H, B, R)]), 29 / 36, 1 / 3, 1 / 3),
  // The frame's triangles clog at this size, so it drops the seat stay and top tube
  16: scaled(bicycle([polyline(R, B, H)]), 25 / 36, -1 / 3, -1 / 3),
})
