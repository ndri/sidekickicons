import { icon, line, rect } from '../compiler/dsl.ts'

// The solid's gap sits right of the outline's divider, keeping the sidebar narrower than the content
export default icon({
  24: [
    rect(3, 4.5, 18, 15, 1.125),
    line(15, 4.5, 15, 19.5).outlineOnly(),
    line(15.75, 3, 15.75, 21).cut().solidOnly(),
  ],
  20: [rect(1.75, 3.75, 16.5, 12.5, 1.5), line(13.25, 2.25, 13.25, 17.75).cut()],
  16: [rect(1.75, 3.75, 12.5, 8.5, 0.75), line(10.583, 2.25, 10.583, 13.75).cut()],
})
