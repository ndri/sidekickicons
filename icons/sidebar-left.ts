import { icon, line, rect } from '../compiler/dsl.ts'

// The solid's gap sits left of the outline's divider, keeping the sidebar narrower than the content
export default icon({
  24: [
    rect(3, 4.5, 18, 15, 1.125),
    line(9, 4.5, 9, 19.5).outlineOnly(),
    line(8.25, 3, 8.25, 21).cut().solidOnly(),
  ],
  20: [rect(1.75, 3.75, 16.5, 12.5, 1.5), line(6.75, 2.25, 6.75, 17.75).cut()],
  16: [rect(1.75, 3.75, 12.5, 8.5, 0.75), line(5.417, 2.25, 5.417, 13.75).cut()],
})
