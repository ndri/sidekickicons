import { circle, icon, line, scaled } from '../compiler/dsl.ts'
import { arrowhead, spoke } from './gender-male.ts'

// A circle with arrows out to the top right and top left, the left one struck through, and a
// cross below it (⚧)
const trans = [
  circle(12, 12, 3.75).hollowed(),
  spoke([12, 12], 3.75, [20.25, 3.75]),
  arrowhead([20.25, 3.75], [1, -1], 3),
  spoke([12, 12], 3.75, [3.75, 3.75]),
  arrowhead([3.75, 3.75], [-1, -1], 3),
  line(6, 8.25, 8.25, 6),
  line(12, 15.75, 12, 21),
  line(9.75, 18.75, 14.25, 18.75),
]

export default icon({
  24: trans,
  20: scaled(trans, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(trans, 25 / 36, -1 / 3, -1 / 3),
})
