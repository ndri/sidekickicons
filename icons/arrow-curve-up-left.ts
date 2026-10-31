import { icon, polyline, type Corner, type IconDefinition } from '../compiler/dsl.ts'

type Direction = 'up' | 'down' | 'left' | 'right'
const VECTORS: Record<Direction, [number, number]> = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0],
}

// Heroicons' arrow-turn-up-left with its corner rounded, like Heroicons 1's reply icon: up from
// the bottom right, then left to the arrowhead
const UP_LEFT: Record<16 | 20 | 24, { head: Corner[]; shaft: Corner[] }> = {
  24: {
    head: [
      [7.5, 4.5],
      [3.75, 8.25],
      [7.5, 12],
    ],
    shaft: [
      [20.25, 19.5],
      [20.25, 8.25, 7.5],
      [3.75, 8.25],
    ],
  },
  20: {
    head: [
      [6, 4.75],
      [2.75, 8],
      [6, 11.25],
    ],
    shaft: [
      [16.25, 16.25],
      [16.25, 8, 6],
      [2.75, 8],
    ],
  },
  16: {
    head: [
      [5, 3.75],
      [2.75, 6],
      [5, 8.25],
    ],
    shaft: [
      [13.25, 13.25],
      [13.25, 6, 4.75],
      [2.75, 6],
    ],
  },
}

/** The arrow going `first`, then curving to point `second`: the up-left one turned or mirrored. */
export function arrowCurve(first: Direction, second: Direction): IconDefinition {
  const [ax, ay] = VECTORS[first]
  const [bx, by] = VECTORS[second]
  const definition: IconDefinition = {}
  for (const size of [24, 20, 16] as const) {
    const c = size / 2
    // Up turns into `first` and left into `second`
    const map = ([x, y, radius]: Corner): Corner => [
      c - bx * (x - c) - ax * (y - c),
      c - by * (x - c) - ay * (y - c),
      radius,
    ]
    const { head, shaft } = UP_LEFT[size]
    definition[size] = [polyline(...head.map(map)), polyline(...shaft.map(map))]
  }
  return icon(definition)
}

export default arrowCurve('up', 'left')
