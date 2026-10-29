import { circle, dot, icon, polygon, scaled } from '../compiler/dsl.ts'

const drawing = [
  circle(12, 12, 9),
  polygon([7.5, 16.5], [10.5, 10.5], [16.5, 7.5], [13.5, 13.5]).outlineOnly(),
  dot(12, 12).outlineOnly(),
  // The solid needle is slimmer than the outline one
  polygon([16.5, 7.5], [13, 13], [7.5, 16.5], [11, 11]).cut().solidOnly(),
]

// The hub on top of the solid needle doesn't shrink as much as the rest
export default icon({
  24: [...drawing, circle(12, 12, 0.5).solidOnly()],
  20: [...scaled(drawing, 29 / 36, 1 / 3, 1 / 3), circle(10, 10, 0.25)],
  16: [...scaled(drawing, 25 / 36, -1 / 3, -1 / 3), dot(8, 8)],
})
