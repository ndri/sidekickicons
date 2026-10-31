import { icon, polyline, type Shape } from '../compiler/dsl.ts'

// Each size's corner, how far the brackets reach and how much they're rounded, from the brackets
// of Heroicons' viewfinder-circle
const BRACKETS = {
  24: { corner: 3.75, end: 7.5, radius: 2.25 },
  20: { corner: 2.75, end: 6.25, radius: 1.5 },
  16: { corner: 2.75, end: 5.25, radius: 1 },
} as const

/** A bracket in each corner, pointing out to the corner or in towards the center. */
export function corners(pointing: 'out' | 'in') {
  const definition: Record<24 | 20 | 16, Shape[]> = { 24: [], 20: [], 16: [] }
  for (const size of [24, 20, 16] as const) {
    const { corner: c, end: e, radius: r } = BRACKETS[size]
    const vertex = pointing === 'out' ? c : e
    for (const [fx, fy] of [
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ]) {
      const x = (value: number) => (fx === 1 ? value : size - value)
      const y = (value: number) => (fy === 1 ? value : size - value)
      const [start, finish] = pointing === 'out' ? [e, e] : [c, c]
      definition[size].push(
        polyline([x(vertex), y(start)], [x(vertex), y(vertex), r], [x(finish), y(vertex)])
      )
    }
  }
  return icon(definition)
}

export default corners('out')
