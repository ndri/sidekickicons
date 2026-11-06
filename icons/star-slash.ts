import { icon, path, scaled, slash } from '../compiler/dsl.ts'

// Heroicons' star, crossed out. The micro is smaller than the usual scale, like Heroicons'.
const star = [
  path(
    'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
  ),
]

export default icon({
  24: [...star, ...slash(24)],
  20: [...scaled(star, 29 / 36, 1 / 3, 1 / 3), ...slash(20)],
  16: [...scaled(star, 5 / 8, 1 / 2, 5 / 8), ...slash(16)],
})
