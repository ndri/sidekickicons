import { icon, line, path, scaled, slash } from '../compiler/dsl.ts'

// The pin from icons/pin.ts, crossed out
const pin = [
  line(9, 15, 3, 21),
  path('M15 6l-1-1 2-2 5 5-2 2-1-1-4.5 4.5c1.5 1.5 1 4-.5 5.5l-8-8c1.5-1.5 4-2 5.5-.5z'),
]

export default icon({
  24: [...pin, ...slash(24)],
  20: [...scaled(pin, 29 / 36, 1 / 3, 1 / 3), ...slash(20)],
  16: [...scaled(pin, 25 / 36, -1 / 3, -1 / 3), ...slash(16)],
})
