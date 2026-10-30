import { icon, path, scaled } from '../compiler/dsl.ts'

// Heroicons' camera, without its flash, with Heroicons' arrow-path where its lens is
const body = path(
  'M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'
)
const arrows = path(
  'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
).cut()
const camera = [body, ...scaled([arrows], 1 / 2, 6, 6.75)]

export default icon({
  24: camera,
  20: scaled(camera, 29 / 36, 1 / 3, 1 / 3),
  // Heroicons' arrows clog at this size, so these are drawn for it: arcs on a circle of radius
  // 2.75 with a pen-wide gap between their ends (66°), each ending in one barb pointing away from
  // the circle, which can't run into its own arc
  16: [
    ...scaled([body], 25 / 36, -1 / 3, -1 / 3),
    path('M5.694 7.252A2.75 2.75 0 0 1 10.306 7.252L10.67 5.54').cut(),
    path('M10.306 10.248A2.75 2.75 0 0 1 5.694 10.248L5.33 11.96').cut(),
  ],
})
