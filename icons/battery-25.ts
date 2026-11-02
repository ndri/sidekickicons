import { icon, line, path, polyline, rect, type Corner, type Shape } from '../compiler/dsl.ts'

/**
 * Heroicons' battery-50 and battery-100, charged to the given fraction: the body, its terminal and
 * the charge level. A charging battery has a lightning bolt inside instead.
 */
export function battery(level: number | 'charging') {
  const fraction = level === 'charging' ? 0 : level
  const charge = (shape: Shape, bolt: Corner[]) =>
    level === 'charging' ? polyline(...bolt) : shape
  return icon({
    24: [
      path('M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21'),
      path(
        'M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z'
      ).hollowed(),
      charge(rect(4.5, 10.5, 13.5 * fraction, 4.5), [
        [12.75, 9.75],
        [9.75, 12.75],
        [12.75, 12.75],
        [9.75, 15.75],
      ]),
    ],
    20: [
      rect(1.75, 5.75, 15.5, 8.5, 1.5).hollowed(),
      line(18.25, 9.25, 18.25, 10.75),
      charge(rect(4.75, 8.75, 9.5 * fraction, 2.5), [
        [10.75, 7.75],
        [8.5, 10],
        [10.75, 10],
        [8.5, 12.25],
      ]),
    ],
    16: [
      rect(1.75, 4.75, 11.5, 6.5, 1.5).hollowed(),
      line(14.25, 7.25, 14.25, 8.75),
      charge(rect(4.75, 7.75, 5.5 * fraction, 0.5), [
        [8.5, 6.5],
        [6.75, 8],
        [8.5, 8],
        [6.75, 9.5],
      ]),
    ],
  })
}

export default battery(1 / 4)
