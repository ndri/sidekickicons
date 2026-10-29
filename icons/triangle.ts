import { icon, n, path } from '../compiler/dsl.ts'

// An equilateral triangle with corners rounded by r, from the centers of its top and bottom corner arcs
const triangle = (cx: number, top: number, bottom: number, r: number) => {
  const half = (bottom - top) / Math.sqrt(3)
  const [dx, dy] = [(r * Math.sqrt(3)) / 2, r / 2]
  const to = (x: number, y: number) => `L${n(x)} ${n(y)}`
  const arc = (x: number, y: number) => `A${n(r)} ${n(r)} 0 0 0 ${n(x)} ${n(y)}`
  // Down the left side, along the bottom and up the right side, each followed by its corner
  const sides = [
    `M${n(cx - dx)} ${n(top - dy)}`,
    to(cx - half - dx, bottom - dy),
    arc(cx - half, bottom + r),
    to(cx + half, bottom + r),
    arc(cx + half + dx, bottom - dy),
    to(cx + dx, top - dy),
    arc(cx - dx, top - dy),
  ]
  return path(`${sides.join('')}Z`)
}

// The small sizes round their corners less than the 24
export default icon({
  24: [
    path(
      'M2.697 16.126c-.866 1.5.217 3.374 1.949 3.374h14.708c1.732 0 2.815-1.874 1.95-3.374L13.948 3.378c-.866-1.5-3.032-1.5-3.898 0z'
    ),
  ],
  20: [triangle(10, 3.37, 14.245, 1)],
  16: [triangle(8, 3, 12, 0.75)],
})
