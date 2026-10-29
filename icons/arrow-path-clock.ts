import { icon, path, scaled } from '../compiler/dsl.ts'

const drawing = [
  path(
    'M12.252 6v6h4.5M5.887 5.636A9 8.996 45 0 1 16.75 4.208a9 8.996 45 0 1 4.194 10.123a9 8.996 45 0 1 -8.69 6.667a9 8.996 45 0 1 -8.693 -6.67M5.888 5.636L3.38 8.143M3.363 3.15v5.013M3.363 8.163h5.013'
  ),
]

export default icon({
  24: drawing,
  20: scaled(drawing, 0.8062, 0.126, 0.327),
  16: scaled(drawing, 0.6959, -0.524, -0.349),
})
