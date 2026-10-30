import { icon, line, polyline, type Shape } from '../compiler/dsl.ts'

type Layout = {
  /** How far each side's top and bottom reach out, and how far from the top they start */
  arm: number
  top: number
  /** The arrows' ends nearest to and farthest from the middle, and the arrowheads' size */
  near: number
  far: number
  head: number
  /** Without one, the arrow is just its head, a chevron */
  shaft: boolean
}

// The arrows stop a pen-wide gap from the cells
const LAYOUTS: Record<24 | 20 | 16, Layout> = {
  24: { arm: 2.25, top: 5.25, near: 7.5, far: 3, head: 2.25, shaft: true },
  20: { arm: 2, top: 4.75, near: 5.5, far: 2.5, head: 2, shaft: true },
  // An arrow this short clogs into a blob, so the micro's are chevrons
  16: { arm: 1.25, top: 3.5, near: 3.5, far: 1.75, head: 1.75, shaft: false },
}

/**
 * Two cells' facing sides, ][, a pen-wide gap apart in the middle, and an arrow on each side,
 * pointing at the cells (merging them) or away from them (splitting them).
 */
export function cells(size: 24 | 20 | 16, arrows: 'in' | 'out'): Shape[] {
  const { arm, top, near, far, head, shaft } = LAYOUTS[size]
  const middle = size / 2
  const bottom = size - top
  // Draws the left half, mirrored for the right
  const half = (x: (value: number) => number) => {
    const side = x(middle - 1.5)
    const out = x(middle - 1.5 - arm)
    const [tip, toward] = arrows === 'in' ? [x(near), -1] : [x(far), 1]
    const back = tip + toward * (x(1) - x(0)) * head
    return [
      polyline([out, top], [side, top], [side, bottom], [out, bottom]),
      ...(shaft ? [line(x(far), middle, x(near), middle)] : []),
      polyline([back, middle - head], [tip, middle], [back, middle + head]),
    ]
  }
  return [...half((value) => value), ...half((value) => size - value)]
}

export default icon({
  24: cells(24, 'in'),
  20: cells(20, 'in'),
  16: cells(16, 'in'),
})
