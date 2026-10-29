import { circle, icon } from '../compiler/dsl.ts'

// The dots are as big at every size, only their spacing changes
const dots = (size: number, spacing: number) =>
  [-1, 0, 1].flatMap((row) =>
    [-0.5, 0.5].map((column) => circle(size / 2 + column * spacing, size / 2 + row * spacing, 0.75))
  )

export default icon({
  24: dots(24, 6),
  20: dots(20, 5.5),
  16: dots(16, 4.5),
})
