import { icon, line, path, polyline, rect } from '../compiler/dsl.ts'

// The solid fills the box, cuts off everything above the box's top edge, then draws the lid over that
// and cuts the arrow out of the box. Its lid is thinner and its arrow lower than the outline's.
export default icon({
  24: [
    // In the outline, the box's closing edge lies under the lid
    path(
      'M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.246 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5Z'
    ),
    rect(0, 0, 24, 8.25).cut().solidOnly(),
    rect(2.25, 3.75, 19.5, 3.75, 1.125).outlineOnly(),
    rect(2.25, 3.75, 19.5, 3, 1.125).solidOnly(),
    line(12, 10.5, 12, 17.25).outlineOnly(),
    polyline([9, 13.5], [12, 10.5], [15, 13.5]).outlineOnly(),
    line(12, 11.25, 12, 18).cut().solidOnly(),
    polyline([9, 14.25], [12, 11.25], [15, 14.25]).cut().solidOnly(),
  ],
  20: [
    path(
      'M2.675 6.75L3.556 15.131A1.25 1.25 0 0 0 4.8 16.25h10.4a1.25 1.25 0 0 0 1.244-1.119L17.325 6.75Z'
    ),
    rect(0, 0, 20, 6.75).cut(),
    rect(1.75, 3.75, 16.5, 1.5, 0.25),
    line(10, 9.75, 10, 14.25).cut(),
    polyline([7.75, 12.25], [10, 9.75], [12.25, 12.25]).cut(),
  ],
  16: [
    path('M3.75 5.25V12a1.25 1.25 0 0 0 1.25 1.25h6A1.25 1.25 0 0 0 12.25 12V5.25Z'),
    rect(0, 0, 16, 5.25).cut(),
    rect(2.75, 2.75, 10.5, 1.5, 0.25),
    line(8, 7.75, 8, 12.25).cut(),
    polyline([5.5, 10.25], [8, 7.75], [10.5, 10.25]).cut(),
  ],
})
