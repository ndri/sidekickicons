import { PEN, icon, line, path, polygon, polyline, scaled } from '../compiler/dsl.ts'

/** Erases the band a pen wide on both sides of the slash, across the whole icon. */
function gap(size: number) {
  const o = PEN / Math.SQRT2
  return polygon([o, -o], [size + o, size - o], [size - o, size + o], [-o, o])
    .cut()
    .solidOnly()
}

// The pin from icons/pin.ts, which the solid draws whole before cutting a gap for the slash
const pin = [
  line(9, 15, 3, 21),
  path(
    'M15 6l-1-1 2-2 5 5-2 2-1-1-4.5 4.5c1.5 1.5 1 4-.5 5.5l-8-8c1.5-1.5 4-2 5.5-.5z'
  ).solidOnly(),
]

export default icon({
  24: [
    // The outline stops the pin at the slash
    polyline(
      [10.5, 10.5],
      [15, 6],
      [14, 5],
      [16, 3],
      [21, 8],
      [19, 10],
      [18, 9],
      [13.5, 13.5]
    ).outlineOnly(),
    path(
      'M13.853 17.851c-.225.419-.514.81-.853 1.149l-8-8c.34-.34.73-.628 1.149-.853'
    ).outlineOnly(),
    ...pin,
    gap(24),
    line(3, 3, 21, 21),
  ],
  20: [...scaled(pin, 29 / 36, 1 / 3, 1 / 3), gap(20), line(2.75, 2.75, 17.25, 17.25)],
  16: [...scaled(pin, 25 / 36, -1 / 3, -1 / 3), gap(16), line(2.75, 2.75, 13.25, 13.25)],
})
