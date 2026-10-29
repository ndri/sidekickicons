import { icon, line, path, scaled } from '../compiler/dsl.ts'

const drawing = [
  line(9, 15, 3, 21),
  path('M15 6l-1-1 2-2 5 5-2 2-1-1-4.5 4.5c1.5 1.5 1 4-.5 5.5l-8-8c1.5-1.5 4-2 5.5-.5z'),
]

export default icon({
  24: drawing,
  20: scaled(drawing, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(drawing, 25 / 36, -1 / 3, -1 / 3),
})
