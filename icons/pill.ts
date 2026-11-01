import { icon, line, path, scaled } from '../compiler/dsl.ts'

// A capsule lying diagonally, split across its middle. The solid fills its top right half.
const pill = [
  path('m10.5 20.25 9.75-9.75a4.95 4.95 0 0 0-7-7L3.5 13.25a4.95 4.95 0 0 0 7 7Z').hollowed(),
  line(8.375, 8.375, 15.375, 15.375).outlineOnly(),
  path('M8.375 8.375 13.25 3.5a4.95 4.95 0 0 1 7 7l-4.875 4.875Z').solidOnly(),
]

export default icon({
  24: pill,
  20: scaled(pill, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(pill, 25 / 36, -1 / 3, -1 / 3),
})
