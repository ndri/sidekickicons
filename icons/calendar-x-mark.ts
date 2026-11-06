import { line } from '../compiler/dsl.ts'
import { calendar } from './calendar-plus.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/** An x-mark three quarters as wide as the span, so it looks as big as a plus of that span. */
export const xMark: Symbol = (x, y, span) => {
  const half = (span * 3) / 8
  return [
    line(x - half, y - half, x + half, y + half),
    line(x + half, y - half, x - half, y + half),
  ]
}

export default calendar(xMark)
