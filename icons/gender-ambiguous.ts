import { circle, icon, line, scaled } from '../compiler/dsl.ts'
import { arrowhead, spoke } from './gender-male.ts'

// A circle with an arrow out to the top right and a cross below it (⚥)
const ambiguous = [
  circle(10.5, 11.25, 4.5).hollowed(),
  spoke([10.5, 11.25], 4.5, [18.75, 3]),
  arrowhead([18.75, 3], [1, -1], 3.75),
  line(10.5, 15.75, 10.5, 21),
  line(8.25, 18.75, 12.75, 18.75),
]

export default icon({
  24: ambiguous,
  20: scaled(ambiguous, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(ambiguous, 25 / 36, -1 / 3, -1 / 3),
})
