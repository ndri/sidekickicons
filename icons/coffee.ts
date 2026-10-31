import { icon, path, scaled } from '../compiler/dsl.ts'

// A mug with a handle and curls of steam, a pen-wide gap above it
const steam = (x: number) => path(`M${x} 7.25c-.6-.6-.6-1.0875 0-1.6875s.6-1.0875 0-1.6875`)
const mug = [
  path('M3.75 10.25h12V17a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3Z'),
  path('M15.75 11.75h1.5a2.625 2.625 0 0 1 0 5.25h-1.5'),
]
// Three curls run together when scaled down, so the small sizes have two, wider apart
const small = [...mug, steam(7.5), steam(12)]

export default icon({
  24: [...mug, steam(6.75), steam(9.75), steam(12.75)],
  20: scaled(small, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(small, 25 / 36, -1 / 3, -1 / 3),
})
