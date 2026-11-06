import { icon, line, path, rect } from '../compiler/dsl.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/** A plus, its arms half the span long. */
export const plus: Symbol = (x, y, span) => [
  line(x, y - span / 2, x, y + span / 2),
  line(x - span / 2, y, x + span / 2, y),
]

/**
 * Heroicons' calendar with a symbol in its body, like their calendar-days' dots. The solid fills
 * the header and leaves the body open around the symbol. The mini and micro follow Heroicons' own:
 * their solid outlines moved in by half a pen. The micro's body is too small to stay open, so its
 * symbol is cut out of a filled calendar.
 */
export function calendar(symbol: Symbol) {
  return icon({
    24: [
      line(6.75, 3, 6.75, 5.25),
      line(17.25, 3, 17.25, 5.25),
      rect(3, 5.25, 18, 15.75, 2.25),
      path('M3 18.75v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5').outlineOnly(),
      rect(4.5, 10.5, 15, 9, 0.75).cut().solidOnly(),
      ...symbol(12, 15, 5.25),
    ],
    20: [
      line(5.75, 2.75, 5.75, 4.75),
      line(14.25, 2.75, 14.25, 4.75),
      rect(2.75, 4.75, 14.5, 12.5, 2),
      rect(4.25, 8.25, 11.5, 7.5, 0.5).cut(),
      ...symbol(10, 12, 4),
    ],
    16: [
      line(4.75, 1.75, 4.75, 3.75),
      line(11.25, 1.75, 11.25, 3.75),
      rect(2.75, 3.75, 10.5, 9.5, 1.25),
      ...symbol(8, 9.25, 4).map((shape) => shape.cut()),
    ],
  })
}

export default calendar(plus)
