import { icon, path, polyline, scaled } from '../compiler/dsl.ts'

// A y axis and an x axis meeting at a rounded corner
const AXES = polyline([3.75, 3.75], [3.75, 20.25, 1.5], [20.25, 20.25])

/**
 * Two axes with a line going up across them, its last stretch curving like the one in Heroicons'
 * presentation-chart-line, or flipped to go down.
 */
export function chartLine(direction: 'up' | 'down') {
  const line = path(
    direction === 'up'
      ? 'M6.75 16.5 10.5 12.75l3 3a16.5 16.5 0 0 1 6-7.5'
      : 'M6.75 6 10.5 9.75l3-3a16.5 16.5 0 0 0 6 7.5'
  )
  const chart = [AXES, line]
  return icon({
    24: chart,
    20: scaled(chart, 29 / 36, 1 / 3, 1 / 3),
    16: scaled(chart, 25 / 36, -1 / 3, -1 / 3),
  })
}

export default chartLine('up')
