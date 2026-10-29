import { circle, dot, icon, line, rect, type Point } from '../compiler/dsl.ts'

// A plus-shaped d-pad
const pad = (x: number, y: number, arm: number) => [
  line(x - arm, y, x + arm, y),
  line(x, y - arm, x, y + arm),
]

// Where the four buttons sit, in a diamond
const diamond = (x: number, y: number): Point[] => [
  [x, y - 2.25],
  [x - 2.25, y],
  [x + 2.25, y],
  [x, y + 2.25],
]

export default icon({
  24: [
    rect(3, 6.75, 18, 10.5, 4).outlineOnly(),
    ...pad(8.25, 12, 2.25).map((shape) => shape.outlineOnly()),
    // The dot fills the pinhole the pen leaves in the middle of such a small circle
    ...diamond(15.75, 12).flatMap(([x, y]) => [
      circle(x, y, 0.5).outlineOnly(),
      dot(x, y).outlineOnly(),
    ]),
    // The solid body is shorter, and its d-pad and buttons sit further apart
    rect(3, 7.25, 18, 9.5, 4).solidOnly(),
    ...pad(7.5, 12, 2.25).map((shape) => shape.cut().solidOnly()),
    ...diamond(16, 12).map(([x, y]) => circle(x, y, 0.5).cut().solidOnly()),
  ],
  20: [
    rect(2.75, 5.75, 14.5, 8.5, 3.25),
    ...pad(6.5, 10, 1.75).map((shape) => shape.cut()),
    circle(14.75, 9, 0.5).cut(),
    circle(12.25, 11, 0.5).cut(),
  ],
  16: [
    rect(1.75, 4.75, 12.5, 6.5, 2.25),
    ...pad(5, 8, 1.5).map((shape) => shape.cut()),
    circle(11.875, 7.125, 0.375).cut(),
    circle(9.625, 8.875, 0.375).cut(),
  ],
})
