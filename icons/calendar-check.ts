import { polyline } from '../compiler/dsl.ts'
import { calendar } from './calendar-plus.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/** Heroicons' document-check check, as wide as the span and centered on the point. */
export const check: Symbol = (x, y, span) => {
  const k = span / 6
  return [
    polyline([x - 3 * k, y + 0.375 * k], [x - 0.75 * k, y + 2.625 * k], [x + 3 * k, y - 2.625 * k]),
  ]
}

export default calendar(check)
