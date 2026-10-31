import { circle, icon, line, scaled } from '../compiler/dsl.ts'

// A circle with a cross below it (♀)
const female = [
  circle(12, 8.25, 5.25).hollowed(),
  line(12, 13.5, 12, 21),
  line(9, 17.25, 15, 17.25),
]

export default icon({
  24: female,
  20: scaled(female, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(female, 25 / 36, -1 / 3, -1 / 3),
})
