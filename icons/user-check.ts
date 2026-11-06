import { circle, icon, path } from '../compiler/dsl.ts'
import { check } from './calendar-check.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/**
 * Heroicons' user-plus with another symbol where its plus is. The mini and micro follow Heroicons'
 * own: their solid outlines moved in by half a pen.
 */
export function user(symbol: Symbol) {
  return icon({
    24: [
      circle(9.375, 6.375, 3.375),
      path(
        'M3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
      ),
      ...symbol(18, 10.5, 6),
    ],
    20: [
      circle(7, 5, 2.25),
      path('M1.75 16a5.25 5.25 0 0 1 10.5 0A11.65 11.65 0 0 1 1.75 16Z'),
      ...symbol(15.5, 8.5, 5.5),
    ],
    16: [
      circle(6, 4.5, 1.75),
      path('M1.817 12.25A4.25 4.25 0 0 1 10.183 12.25Z'),
      ...symbol(12.5, 6, 3.5),
    ],
  })
}

export default user(check)
