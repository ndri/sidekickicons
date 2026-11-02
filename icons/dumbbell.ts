import { icon, line, rect, scaled } from '../compiler/dsl.ts'

/**
 * A bar with a plate on each side and a smaller stopper against each plate, the stoppers' outer
 * sides `edge` from the sides of the 24 grid and the plates and stoppers `width` wide.
 */
const dumbbell = (edge: number, width: number) => [
  rect(edge, 9, width, 6, 1),
  rect(edge + width, 6.75, width, 10.5, 1),
  line(edge + 2 * width, 12, 24 - edge - 2 * width, 12),
  rect(24 - edge - 2 * width, 6.75, width, 10.5, 1),
  rect(24 - edge - width, 9, width, 6, 1),
]

// The solid's plates and stoppers are narrower, since the pen grows them
const styles = (edge: number) => [
  ...dumbbell(edge, 3).map((shape) => shape.outlineOnly()),
  ...dumbbell(edge, 2.25).map((shape) => shape.solidOnly()),
]

export default icon({
  // From side to side of the safe area
  24: styles(2.75),
  20: scaled(styles(3), 29 / 36, 1 / 3, 1 / 3),
  16: scaled(styles(3), 25 / 36, -1 / 3, -1 / 3),
})
