import { icon, polyline, scaled } from '../compiler/dsl.ts'

// The bind rune: a line down the middle with two arrowheads to the right, crossed by two diagonals
const bluetooth = [
  polyline(
    [7.5, 7.5],
    [16.5, 15.75, 0.75],
    [12, 20.25, 0.75],
    [12, 3.75, 0.75],
    [16.5, 8.25, 0.75],
    [7.5, 16.5]
  ),
]

export default icon({
  24: bluetooth,
  20: scaled(bluetooth, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(bluetooth, 25 / 36, -1 / 3, -1 / 3),
})
