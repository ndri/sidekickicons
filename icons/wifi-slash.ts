import { icon, n, path, slash } from '../compiler/dsl.ts'

const S = Math.SQRT1_2

/** An arc a quarter turn long, centered above the point. */
function arc(x: number, y: number, r: number) {
  return `M${n(x - r * S)} ${n(y - r * S)}A${n(r)} ${n(r)} 0 0 1 ${n(x + r * S)} ${n(y - r * S)}`
}

/** A quarter of a ring between two radii, centered above the point. */
function band(x: number, y: number, inner: number, outer: number) {
  return path(
    `${arc(x, y, outer)}L${n(x + inner * S)} ${n(y - inner * S)}` +
      `A${n(inner)} ${n(inner)} 0 0 0 ${n(x - inner * S)} ${n(y - inner * S)}Z`
  )
}

/** The dot: a quarter of a disk pointing down at the arcs' center. */
function dot(x: number, y: number, r: number) {
  return path(
    `M${n(x)} ${n(y)}L${n(x - r * S)} ${n(y - r * S)}A${n(r)} ${n(r)} 0 0 1 ${n(x + r * S)} ${n(
      y - r * S
    )}Z`
  )
}

// Heroicons' wifi, crossed out. Heroicons' solid and mini arcs are thicker than the pen, so those
// are bands a pen wide less than Heroicons' arcs; the micro's arcs are a pen wide.
export default icon({
  24: [
    ...[5.25, 9.75, 14.25].map((r) => path(arc(12, 18.75, r)).outlineOnly()),
    ...[5.25, 9.75, 14.25].map((r) => band(12, 18.75, r - 0.75, r).solidOnly()),
    dot(12, 18.75, 0.75),
    ...slash(24),
  ],
  20: [...[4.25, 8.25, 12.25].map((r) => band(10, 16, r - 0.5, r)), dot(10, 16, 0.5), ...slash(20)],
  16: [...[3.5, 6.5, 9.5].map((r) => path(arc(8, 13.25, r))), dot(8, 13.25, 0.5), ...slash(16)],
})
