import { icon, line, path, polyline, scaled } from '../compiler/dsl.ts'

/**
 * A fork on the left with three tines `spread` apart and `tines` long before they turn into its
 * handle at `fork` at slightly rounded corners, and a knife on the right with its blade curving up from its handle at `knife`.
 * The mini and micro spread the tines a little further and shorten them, so they don't run together.
 */
const forkKnife = (spread: number, tines: number, fork: number, knife: number) => [
  polyline(
    [fork - spread, 3],
    [fork - spread, 3 + tines + 1.5, 1],
    [fork + spread, 3 + tines + 1.5, 1],
    [fork + spread, 3]
  ),
  line(fork, 3, fork, 21),
  path(`M${knife} 3c1.875 1.125 3 3.375 3 6v4.5h-3Z`),
  line(knife, 3, knife, 21),
]

export default icon({
  // Closer together, around the middle
  24: forkKnife(2.25, 4.5, 8.625, 14.625),
  // The tines spread so their gaps are 0.75 wide after scaling, like the 24's
  20: scaled(forkKnife(2.8, 4.5, 7.5, 16.5), 29 / 36, 1 / 3, 1 / 3),
  16: scaled(forkKnife(3.25, 6, 7.5, 16.5), 25 / 36, -1 / 3, -1 / 3),
})
