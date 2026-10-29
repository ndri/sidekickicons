import { icon, line, path, polyline } from '../compiler/dsl.ts'

// In solid, the second check's short arm stops at a pen-wide gap beside the first check's long arm:
// draw the second check, cut the gap (the long arm shifted right), then draw the first check on top.
export default icon({
  24: [
    polyline([10.5, 14.75], [13, 17.25], [21, 6.75]).solidOnly(),
    line(9.375, 17.25, 17.375, 6.75).cut().solidOnly(),
    polyline([3, 12.75], [7.5, 17.25], [15.5, 6.75]),
    path('M12 16.223l1 1.027l8-10.5').outlineOnly(),
  ],
  20: [
    polyline([8.75, 10.75], [11.75, 13.75], [16.75, 6.25]),
    line(8, 13.75, 13, 6.25).cut(),
    polyline([3.25, 10.75], [6.25, 13.75], [11.25, 6.25]),
  ],
  16: [
    polyline([7.25, 8.5], [9.75, 11], [13.75, 5]),
    line(6.55, 11, 10.55, 5).cut(),
    polyline([2.25, 8.5], [4.75, 11], [8.75, 5]),
  ],
})
