import { dot, icon, line, path, rect, type Shape } from '../compiler/dsl.ts'

// A key from x1 to x2, cut out of the solid: one key when they're equal, the space bar otherwise
type Key = (x1: number, x2: number, y: number) => Shape
// 2-unit blocks like the squares in Heroicons' qr-code
const block: Key = (x1, x2, y) => rect(x1 - 0.25, y - 0.25, x2 - x1 + 0.5, 0.5).cut()
// At 16, pen dots like Heroicons' calculator buttons
const pen: Key = (x1, x2, y) => (x1 === x2 ? dot(x1, y) : line(x1, y, x2, y)).cut()

// Five keys, four staggered ones and a space bar between two keys, from the top left key and the
// spacing
const keys = (x: number, y: number, spacing: number, key: Key) => [
  ...[0, 1, 2, 3, 4].map((i) => key(x + i * spacing, x + i * spacing, y)),
  ...[0.5, 1.5, 2.5, 3.5].map((i) => key(x + i * spacing, x + i * spacing, y + spacing)),
  key(x, x, y + 2 * spacing),
  key(x + spacing, x + 3 * spacing, y + 2 * spacing),
  key(x + 4 * spacing, x + 4 * spacing, y + 2 * spacing),
]

export default icon({
  24: [
    // The outline's board is 1 away from the keys, corners concentric with theirs. The solid's
    // board is the outline's centerline, so its rim is 1.75 instead of the pen-grown 2.5.
    rect(3.25, 9.25, 17.5, 11.5, 2.5).outlineOnly(),
    rect(4, 10, 16, 10, 1.75).solidOnly(),
    path('M12 9.25V7.75a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 0 1.5-1.5V3'),
    ...keys(6, 12, 3, block),
  ],
  // A rim as wide as the gaps between keys, so the board's and keys' edges land on pixels
  20: [
    rect(2.75, 8.75, 14.5, 8.5, 1),
    path('M10 8V6.75a1.25 1.25 0 0 1 1.25-1.25h1.25a1.25 1.25 0 0 0 1.25-1.25V2.75'),
    ...keys(4, 10, 3, block),
  ],
  16: [rect(1.75, 3.75, 12.5, 8.5, 1), ...keys(3.5, 5.75, 2.25, pen)],
})
