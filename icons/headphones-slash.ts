import { PEN, icon, line, path, polygon, scaled } from '../compiler/dsl.ts'

// The solid draws the whole headphones from icons/headphones.ts and cuts a gap for the slash
const headphones = [
  path(
    'M7.11 12.822c-2.55.684-4.29 1.378-3.376 4.787.913 3.41 2.766 3.141 5.317 2.458l-.97-3.622z'
  ),
  path(
    'M16.89 12.822c2.55.684 4.29 1.378 3.376 4.787-.913 3.41-2.766 3.141-5.317 2.458l.97-3.622z'
  ),
  path(
    'M19.319 13.734a7.75 7.702 0 0 0-2.72-8.732 7.75 7.702 0 0 0-9.198 0 7.75 7.702 0 0 0-2.72 8.732'
  ),
].map((shape) => shape.solidOnly())

/** Erases the band a pen wide on both sides of the slash, across the whole icon. */
function gap(size: number) {
  const o = PEN / Math.SQRT2
  return polygon([o, -o], [size + o, size - o], [size - o, size + o], [-o, o])
    .cut()
    .solidOnly()
}

export default icon({
  24: [
    // The outline stops the headphones at the slash
    path(
      'M16.03 16.03l.86-3.208c2.55.684 4.29 1.378 3.376 4.787-.217.81-.487 1.413-.807 1.852' +
        'M19.319 13.734a7.75 7.702 0 0 0-2.72-8.732 7.75 7.702 0 0 0-9.198 0 7.75 7.702 0 0 0-1.253 1.15' +
        'M7.11 12.822c-2.55.684-4.29 1.378-3.376 4.787.913 3.41 2.766 3.141 5.317 2.458l-.97-3.622-.971-3.623' +
        'M4.677 8.682a7.75 7.702 0 0 0 .004 5.052' +
        'M16.402 20.402c-.455-.077-.94-.198-1.453-.335l.236-.881'
    ).outlineOnly(),
    ...headphones,
    gap(24),
    line(3, 3, 21, 21),
  ],
  20: [...scaled(headphones, 0.8527, -0.232, -0.233), gap(20), line(2.75, 2.75, 17.25, 17.25)],
  16: [...scaled(headphones, 0.7354, -0.825, -0.828), gap(16), line(2.75, 2.75, 13.25, 13.25)],
})
