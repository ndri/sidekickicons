import { circle, icon, path, scaled } from '../compiler/dsl.ts'

// Earpieces turned in at the top of a U-shaped tube, and a tube from its bottom curving round to the chest piece
const stethoscope = [
  path('M6.75 3H6a1.5 1.5 0 0 0-1.5 1.5v3.75a4.5 4.5 0 0 0 9 0V4.5A1.5 1.5 0 0 0 12 3h-.75'),
  path('M9 12.75v3a4.875 4.875 0 0 0 9.75 0v-1.5'),
  circle(18.75, 12, 2.25),
]

export default icon({
  24: stethoscope,
  20: scaled(stethoscope, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(stethoscope, 25 / 36, -1 / 3, -1 / 3),
})
