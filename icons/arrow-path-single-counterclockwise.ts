import { icon, path, scaled } from '../compiler/dsl.ts'

const drawing = [
  path(
    'M5.637 5.634A9.002 8.997 60.506 0 1 16.5 4.206a9.002 8.997 60.506 0 1 4.194 10.125A9.002 8.997 60.506 0 1 12.003 21a9.002 8.997 60.506 0 1 -8.693 -6.673M5.637 5.634L3.13 8.14M3.113 3.146v5.015M3.113 8.161h5.013'
  ),
]

export default icon({
  24: drawing,
  20: scaled(drawing, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(drawing, 25 / 36, -1 / 3, -1 / 3),
})
