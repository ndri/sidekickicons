import { circle, ellipse, icon, line } from '../compiler/dsl.ts'

export default icon({
  24: [
    circle(12, 12, 9),
    ellipse(9.375, 9.75, 0.375, 0.75).cut(),
    ellipse(14.625, 9.75, 0.375, 0.75).cut(),
    line(8.818, 15.75, 15.182, 15.75).cut().outlineOnly(),
    line(9, 15.75, 15, 15.75).cut().solidOnly(),
  ],
  20: [
    circle(10, 10, 7.25),
    ellipse(8, 8.5, 0.25, 0.75).cut(),
    ellipse(12, 8.5, 0.25, 0.75).cut(),
    line(7, 13.5, 13, 13.5).cut(),
  ],
  16: [
    circle(8, 8, 6.25),
    ellipse(6, 6.5, 0.25, 0.75).cut(),
    ellipse(10, 6.5, 0.25, 0.75).cut(),
    line(5.25, 11.25, 10.75, 11.25).cut(),
  ],
})
