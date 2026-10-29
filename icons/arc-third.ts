import { icon, path, scaled } from '../compiler/dsl.ts'

const drawing = [path('M12 3a9 9 0 0 1 7.794 4.5a9 9 0 0 1 0 9')]

export default icon({
  24: drawing,
  20: scaled(drawing, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(drawing, 25 / 36, -1 / 3, -1 / 3),
})
