import { circle, icon, line, n, path, polyline, scaled, type Corner } from '../compiler/dsl.ts'

// The arms are an arc around (12, 12) that ends 20° below level on each side, where the curve
// heads up and out at 70°
const R = 8.25
const END = Math.PI / 9
const ends = [-1, 1].map((side) => [12 + side * R * Math.cos(END), 12 + R * Math.sin(END)])

// The flukes point a little further out than the arm ends, so that their two barb tips are as far
// from the arm's curve as each other
const POINT = (25.5 * Math.PI) / 180

/** A fluke: an arrowhead at an arm's end, pointing up and out. */
function fluke([x, y]: number[], side: number) {
  // Backwards from the fluke's point, the way its barbs go
  const [bx, by] = [-side * Math.sin(POINT), Math.cos(POINT)]
  const barb = (turn: number): Corner => {
    const [c, s] = [Math.cos(turn), Math.sin(turn)]
    return [x + 2.25 * (bx * c - by * s), y + 2.25 * (bx * s + by * c)]
  }
  return polyline(barb(Math.PI / 4), [x, y], barb(-Math.PI / 4))
}

// A ring on top of the shank, a stock across it, and arms curving up to a fluke on each side
const anchor = [
  circle(12, 5.25, 1.5).hollowed(),
  line(12, 6.75, 12, 20.25),
  line(8.25, 9.75, 15.75, 9.75),
  path(`M${n(ends[0][0])} ${n(ends[0][1])}A${R} ${R} 0 0 0 ${n(ends[1][0])} ${n(ends[1][1])}`),
  fluke(ends[0], -1),
  fluke(ends[1], 1),
]

export default icon({
  24: anchor,
  20: scaled(anchor, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(anchor, 25 / 36, -1 / 3, -1 / 3),
})
