import { icon, path, scaled } from '../compiler/dsl.ts'

// One stroke through two loops of radius 3.75, crossing in the middle
const infinity = [
  path(
    'M12 12c-1.5-2.25-3.375-3.75-5.25-3.75a3.75 3.75 0 0 0 0 7.5c1.875 0 3.75-1.5 5.25-3.75s3.375-3.75 5.25-3.75a3.75 3.75 0 0 1 0 7.5c-1.875 0-3.75-1.5-5.25-3.75Z'
  ).hollowed(),
]

export default icon({
  24: infinity,
  20: scaled(infinity, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(infinity, 25 / 36, -1 / 3, -1 / 3),
})
