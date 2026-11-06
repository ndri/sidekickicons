import { icon, path, scaled, slash } from '../compiler/dsl.ts'

// Heroicons' heart, crossed out. The micro is narrower than the usual scale, like Heroicons'.
const heart = [
  path(
    'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
  ),
]

export default icon({
  24: [...heart, ...slash(24)],
  20: [...scaled(heart, 29 / 36, 1 / 3, 1 / 3), ...slash(20)],
  16: [...scaled(heart, 7 / 12, 1, 1.25), ...slash(16)],
})
