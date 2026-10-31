import { circle, icon, line, scaled } from '../compiler/dsl.ts'

// Two rings and a slash, the same in outline and solid like Heroicons' divide and equals. The
// smaller sizes keep smaller rings, so their holes stay as wide as the gap to the slash, and a
// shorter slash that doesn't reach past them. The slash runs from `end` to 24 - `end`.
const percent = (r: number, end: number) => [
  circle(7.5, 7.5, r).hollowed(),
  circle(16.5, 16.5, r).hollowed(),
  line(24 - end, end, end, 24 - end),
]

export default icon({
  24: percent(2.625, 5.25),
  20: scaled(percent(1.875, 5.625), 29 / 36, 1 / 3, 1 / 3),
  16: scaled(percent(1.875, 5.625), 25 / 36, -1 / 3, -1 / 3),
})
