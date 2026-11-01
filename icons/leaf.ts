import { icon, line, path, scaled } from '../compiler/dsl.ts'

// A leaf pointing to the top right, symmetric about its midrib, with the stem running into it
const leaf = [
  path('M5.625 18.375C4.5 9 9.75 4.5 19.5 4.5c0 9.75-4.5 15-13.875 13.875Z'),
  line(3.75, 20.25, 13.5, 10.5).outlineOnly(),
  // The solid has the stem and cuts the midrib out of the leaf, round at both ends
  line(3.75, 20.25, 6.75, 17.25).solidOnly(),
  line(8.25, 15.75, 13.5, 10.5).cut().solidOnly(),
]

export default icon({
  24: leaf,
  20: scaled(leaf, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(leaf, 25 / 36, -1 / 3, -1 / 3),
})
