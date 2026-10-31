import { icon, line, path, rect, scaled, type Shape } from '../compiler/dsl.ts'

// Heroicons' star
const star = path(
  'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
)

/** The left half of a star: the outline stops its strokes at the middle, the solid is cut there. */
const half = (shapes: Shape[], middle: number): Shape[] => [
  ...shapes,
  rect(middle, -2, 30, 30).trim(),
  // A closed cut also erases the pen around it
  rect(middle + 0.75, -2, 30, 30)
    .cut()
    .solidOnly(),
]

export default icon({
  // The line runs between where the star's centerline crosses the middle, at its top and bottom
  24: [...half([star], 12), line(12, 3.15, 12, 17.572).outlineOnly()],
  20: half(scaled([star], 29 / 36, 1 / 3, 1 / 3), 10),
  16: half(scaled([star], 25 / 36, -1 / 3, -1 / 3), 8),
})
