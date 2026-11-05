import { icon, line, path, scaled } from '../compiler/dsl.ts'

// Two prongs on top of a rounded plug, with its cable running down
const plug = [
  line(9.75, 3, 9.75, 8.25),
  line(14.25, 3, 14.25, 8.25),
  path('M7.5 8.25h9v2.25a4.5 4.5 0 0 1-9 0Z'),
  line(12, 15, 12, 21),
]

export default icon({
  24: plug,
  20: scaled(plug, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(plug, 25 / 36, -1 / 3, -1 / 3),
})
