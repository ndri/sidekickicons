import { circle, dot, icon, scaled } from '../compiler/dsl.ts'

// Rings around a dot, a pen apart. The solid is a disc with two rings cut out of it, leaving two
// rings and a center as wide as each other.
const target = [
  circle(12, 12, 9),
  circle(12, 12, 6).outlineOnly(),
  circle(12, 12, 3).outlineOnly(),
  dot(12, 12).outlineOnly(),
  circle(12, 12, 6.75).hollowed().cut().solidOnly(),
  circle(12, 12, 3).hollowed().cut().solidOnly(),
]

export default icon({
  24: target,
  20: scaled(target, 29 / 36, 1 / 3, 1 / 3),
  // Two rings and a center 1.25 wide, a little narrower than the cuts between them
  16: [circle(8, 8, 6), circle(8, 8, 4.75).hollowed().cut(), circle(8, 8, 2).hollowed().cut()],
})
