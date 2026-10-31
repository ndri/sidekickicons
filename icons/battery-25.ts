import { icon, line, path, rect } from '../compiler/dsl.ts'

/**
 * Heroicons' battery-50 and battery-100, charged to the given fraction: the body, its terminal and
 * the charge level.
 */
export function battery(fraction: number) {
  return icon({
    24: [
      path('M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21'),
      path(
        'M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z'
      ).hollowed(),
      rect(4.5, 10.5, 13.5 * fraction, 4.5),
    ],
    20: [
      rect(1.75, 5.75, 15.5, 8.5, 1.5).hollowed(),
      line(18.25, 9.25, 18.25, 10.75),
      rect(4.75, 8.75, 9.5 * fraction, 2.5),
    ],
    16: [
      rect(1.75, 4.75, 11.5, 6.5, 1.5).hollowed(),
      line(14.25, 7.25, 14.25, 8.75),
      rect(4.75, 7.75, 5.5 * fraction, 0.5),
    ],
  })
}

export default battery(1 / 4)
