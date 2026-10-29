import { icon, path, scaled } from '../compiler/dsl.ts'

const drawing = [
  path(
    'M18.363 5.634A8.997 9.002 29.494 0 0 7.5 4.206A8.997 9.002 29.494 0 0 3.306 14.33A8.997 9.002 29.494 0 0 11.996 21a8.997 9.002 29.494 0 0 8.694 -6.673M18.363 5.634L20.87 8.14M20.887 3.146v5.015M20.887 8.161h-5.013'
  ),
]

export default icon({
  24: drawing,
  20: scaled(drawing, 0.8056, 0.333, 0.333),
  16: scaled(drawing, 0.6944, -0.333, -0.333),
})
