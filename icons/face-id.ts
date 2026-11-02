import { icon, line, path, polyline, scaled } from '../compiler/dsl.ts'
import { corners } from './corners-pointing-out.ts'

const brackets = corners('out')

// A face filling the space inside corner brackets: two eyes, a nose and a smile
const face = [
  line(8.25, 8.25, 8.25, 10.5),
  line(15.75, 8.25, 15.75, 10.5),
  polyline([12, 8.25], [12, 13.5], [10.875, 13.5]),
  path('M8.625 16.125a4.773 4.773 0 0 0 6.75 0'),
]

export default icon({
  24: [...brackets[24]!, ...face],
  20: [...brackets[20]!, ...scaled(face, 29 / 36, 1 / 3, 1 / 3)],
  // Just eyes and a smile, closer together
  16: [
    ...brackets[16]!,
    line(6.25, 5.75, 6.25, 6.75),
    line(9.75, 5.75, 9.75, 6.75),
    path('M6.25 9.5a2.475 2.475 0 0 0 3.5 0'),
  ],
})
