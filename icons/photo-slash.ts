import {
  circle,
  dot,
  icon,
  path,
  polygon,
  polyline,
  rect,
  slash,
  type Point,
} from '../compiler/dsl.ts'

// At 16 the ground's 45° edge is on the grid, so the mountains' centerline sits half a pen (0.75√2
// units) above it
const ridge16: Point[] = [
  [2.75, 9.189],
  [5, 6.939],
  [7, 8.939],
  [10, 5.939],
  [13.25, 9.189],
]

// Heroicons' photo, crossed out, drawn like icons/photo-plus.ts. The solid fills the frame, cuts out
// the ground below the mountains, and draws the frame and the mountains back on top.
export default icon({
  24: [
    rect(2.25, 4.5, 19.5, 15, 1.5),
    path(
      'M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0L14.25 14.25l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909V19.5H2.25Z'
    )
      .cut()
      .solidOnly(),
    rect(2.25, 4.5, 19.5, 15, 1.5).hollowed().solidOnly(),
    path('M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159'),
    path('M14.25 14.25l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909'),
    circle(14.25, 8.25, 0.375).cut(),
    dot(14.25, 8.25).outlineOnly(),
    ...slash(24),
  ],
  20: [
    rect(1.75, 3.75, 16.5, 12.5, 1.5),
    path(
      'M1.75 10.75l3.189-3.189a1.5 1.5 0 0 1 2.122 0L11.25 11.75l2.439-2.439a1.5 1.5 0 0 1 2.122 0l2.439 2.439V16.25H1.75Z'
    ).cut(),
    rect(1.75, 3.75, 16.5, 12.5, 1.5).hollowed(),
    path('M1.75 10.75l3.189-3.189a1.5 1.5 0 0 1 2.122 0l5.189 5.189'),
    path('M11.25 11.75l2.439-2.439a1.5 1.5 0 0 1 2.122 0l2.439 2.439'),
    circle(11, 7, 0.25).cut(),
    ...slash(20),
  ],
  16: [
    rect(2.75, 2.75, 10.5, 10.5, 1.25),
    polygon(...ridge16, [13.25, 13.25], [2.75, 13.25]).cut(),
    rect(2.75, 2.75, 10.5, 10.5, 1.25).hollowed(),
    polyline(...ridge16),
    circle(5, 5, 0.25).cut(),
    ...slash(16),
  ],
})
