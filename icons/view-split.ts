import { icon, line, rect } from '../compiler/dsl.ts'

// The solid splits the frame with a gap that runs through the frame's edges too
export default icon({
  24: [
    rect(3, 4.5, 18, 15, 1.125),
    line(12, 4.5, 12, 19.5).outlineOnly(),
    line(12, 3, 12, 21).cut().solidOnly(),
  ],
  20: [rect(1.75, 3.75, 16.5, 12.5, 1.5), line(10, 2.25, 10, 17.75).cut()],
  16: [rect(1.75, 3.75, 12.5, 8.5, 0.75), line(8, 2.25, 8, 13.75).cut()],
})
