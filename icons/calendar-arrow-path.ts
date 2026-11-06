import { n, path, scaled } from '../compiler/dsl.ts'
import { calendar } from './calendar-plus.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

// Heroicons' arrow-path, which spans 13 units with its heads. Its arcs start 15° later, which
// leaves more room between each arrow's tail and the other arrow's head when it's scaled down.
const heroicons = path(
  'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 12.979-1.71M4.855 7.875a8.25 8.25 0 0 1 12.979-1.71l3.181 3.182m0-4.991v4.99'
)

/**
 * Two arrows chasing each other around a circle. Where there's room it's Heroicons' arrow-path,
 * scaled to the span. Smaller spans clog with its heads, so there the arrows are arcs with a
 * pen-wide gap between their ends, each ending in one barb pointing away from the circle, like the
 * micro camera-rotate's.
 * The circle is a little wider than the span, which suits the same bases as the other marks.
 */
export const arrowPath: Symbol = (x, y, span) => {
  if (span >= 5.25) {
    const f = span / 13
    return scaled([heroicons], f, x - 12 * f, y - 12 * f)
  }
  const r = span / 2 + 0.375
  const barb = r * 0.64
  // Half the gap's angle, so the arcs' ends are a pen apart on both sides of the gap
  const gap = Math.asin(1.5 / r)
  return [0, Math.PI].map((turn) => {
    const [from, to] = [Math.PI + gap + turn, 2 * Math.PI - gap + turn]
    const point = (a: number) => [x + r * Math.cos(a), y + r * Math.sin(a)]
    const [x1, y1] = point(from)
    const [x2, y2] = point(to)
    // Back along the arc, turned 45° away from the circle
    const back = to - Math.PI / 4
    return path(
      `M${n(x1)} ${n(y1)}A${n(r)} ${n(r)} 0 0 1 ${n(x2)} ${n(y2)}` +
        `l${n(barb * Math.cos(back))} ${n(barb * Math.sin(back))}`
    )
  })
}

export default calendar(arrowPath)
