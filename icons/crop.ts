import { icon, polyline, scaled } from '../compiler/dsl.ts'

// Two right angles overlapping, like crop marks
const crop = [
  polyline([6.75, 3], [6.75, 17.25, 1.5], [21, 17.25]),
  polyline([3, 6.75], [17.25, 6.75, 1.5], [17.25, 21]),
]

export default icon({
  24: crop,
  20: scaled(crop, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(crop, 25 / 36, -1 / 3, -1 / 3),
})
