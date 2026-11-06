import { line } from '../compiler/dsl.ts'
import { calendar } from './calendar-plus.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/** A minus, as long as a plus of the same span. */
export const minus: Symbol = (x, y, span) => [line(x - span / 2, y, x + span / 2, y)]

export default calendar(minus)
