import { circle, icon, line, rect } from '../compiler/dsl.ts'

const asterisk = (x: number, y: number) => [
  line(x - 1.299, y + 0.75, x + 1.299, y - 0.75).cut(),
  line(x + 1.299, y + 0.75, x - 1.299, y - 0.75).cut(),
  line(x, y - 1.5, x, y + 1.5).cut(),
]

export default icon({
  24: [
    rect(2.5, 7.75, 19, 8.5, 2.25).outlineOnly(),
    // The solid field is a little narrower
    rect(3, 7.75, 18, 8.5, 2.25).solidOnly(),
    ...asterisk(6.75, 12),
    ...asterisk(12, 12),
    ...asterisk(17.299, 12),
  ],
  // Small sizes show dots instead of asterisks
  20: [
    rect(2.75, 6.75, 14.5, 6.5, 1.75),
    circle(5.5, 10, 0.75).cut(),
    circle(10, 10, 0.75).cut(),
    circle(14.5, 10, 0.75).cut(),
  ],
  16: [
    rect(1.75, 5.25, 12.5, 5.5, 1.5),
    circle(4.25, 8, 0.5).cut(),
    circle(8, 8, 0.5).cut(),
    circle(11.75, 8, 0.5).cut(),
  ],
})
