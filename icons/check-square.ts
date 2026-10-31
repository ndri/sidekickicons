import { icon, path, rect, scaled } from '../compiler/dsl.ts'

// The square icon with a check, cut out of the solid
const check = path('M8.25 12.75 11.25 15.75 15.75 9').cut()

export default icon({
  24: [rect(3.75, 3.75, 16.5, 16.5, 2.25), check],
  20: [rect(2.75, 2.75, 14.5, 14.5, 1.5), ...scaled([check], 29 / 36, 1 / 3, 1 / 3)],
  16: [rect(2.75, 2.75, 10.5, 10.5, 1.25), ...scaled([check], 25 / 36, -1 / 3, -1 / 3)],
})
