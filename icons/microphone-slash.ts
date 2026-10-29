import { PEN, icon, line, path, polygon, rect } from '../compiler/dsl.ts'

/** Erases the band a pen wide on both sides of the slash, across the whole icon. */
function gap(size: number) {
  const o = PEN / Math.SQRT2
  return polygon([o, -o], [size + o, size - o], [size - o, size + o], [-o, o])
    .cut()
    .solidOnly()
}

// The solid draws the whole microphone, with a filled capsule, and cuts a gap for the slash
export default icon({
  24: [
    // The outline stops the capsule and stand at the slash
    path(
      'M9 9V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-.537 1.713M11.73 15.738a3 3 0 0 1-2.718-2.718' +
        'M12 18.75a6 6 0 0 1-6-6v-1.5M12 18.75a6 6 0 0 0 2.292-.455M16.601 16.6A6 6 0 0 0 18 12.75v-1.5'
    ).outlineOnly(),
    rect(9, 1.5, 6, 14.25, 3).solidOnly(),
    path('M6 11.25v1.5a6 6 0 0 0 12 0v-1.5').solidOnly(),
    line(12, 18.75, 12, 22.5),
    line(8.25, 22.5, 15.75, 22.5),
    gap(24),
    line(3, 3, 21, 21),
  ],
  20: [
    rect(7.75, 1.75, 4.5, 10.5, 2.25),
    path('M4.75 9.643V10a5.25 5.25 0 0 0 10.5 0v-.357'),
    line(10, 15.25, 10, 18.25),
    line(7.75, 18.25, 12.25, 18.25),
    gap(20),
    line(2.75, 2.75, 17.25, 17.25),
  ],
  16: [
    rect(6.75, 1.75, 2.5, 6.5, 1.25),
    path('M3.75 7a4.25 4.25 0 0 0 8.5 0'),
    line(8, 11.25, 8, 14.25),
    line(5.75, 14.25, 10.25, 14.25),
    gap(16),
    line(2.75, 2.75, 13.25, 13.25),
  ],
})
