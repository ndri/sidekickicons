import { icon, path, scaled } from '../compiler/dsl.ts'

// The section sign (§), as tall as pilcrow: two S curves that overlap in a loop in the middle
const section = [
  path('M15.75 6.25a3.75 2.5 0 0 0-7.5 0c0 3.25 7.5 2.5 7.5 5.75a3.75 2.5 0 0 1-7.5 0'),
  path('M8.25 17.75a3.75 2.5 0 0 0 7.5 0c0-3.25-7.5-2.5-7.5-5.75a3.75 2.5 0 0 1 7.5 0'),
]

export default icon({
  24: section,
  20: scaled(section, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(section, 25 / 36, -1 / 3, -1 / 3),
})
