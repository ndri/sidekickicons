import { circle, dot, icon, line, path, scaled } from '../compiler/dsl.ts'

// A circle of radius 9 around (12, 12), bitten by circles of radius 2.75 around (19, 10.5),
// (15, 9) and (13.5, 5)
const cookie = path(
  'M11.603 3.009A9 9 0 1 0 20.991 12.397A2.75 2.75 0 0 1 16.392 11.372' +
    'A2.75 2.75 0 0 1 12.628 7.608A2.75 2.75 0 0 1 11.603 3.009Z'
)

// The crumbs and chocolate chips keep their size at every size, and the solid ones are placed
// differently from the outline ones
export default icon({
  24: [
    cookie,
    dot(19, 9.5),
    dot(18, 6),
    dot(15.5, 8.5),
    dot(14.5, 5),
    ...[
      dot(8.5, 7.5),
      line(6.687, 10.214, 7.812, 11.214),
      dot(6.5, 14.5),
      line(9.5, 16, 10.75, 16),
      dot(11, 13),
      line(15.027, 15.76, 15.973, 14.76),
      dot(13, 18),
    ].map((shape) => shape.outlineOnly()),
    ...[
      dot(9.75, 7.5),
      circle(6.25, 9.5, 0.5),
      dot(5.75, 14),
      circle(9.75, 17, 0.5),
      dot(10.75, 13),
      circle(15.9, 14.8, 0.5),
      dot(14.5, 18.25),
    ].map((shape) => shape.cut().solidOnly()),
  ],
  20: [
    // The same cookie, a radius of 7.25 around (10, 10)
    ...scaled([cookie], 7.25 / 9, 1 / 3, 1 / 3),
    dot(16.25, 7.25),
    dot(15.25, 3.75),
    dot(13.25, 5.75),
    dot(7.25, 6.75).cut(),
    circle(5.75, 10.75, 0.5).cut(),
    dot(9.75, 10.75).cut(),
    circle(12.75, 13.25, 0.5).cut(),
    dot(8.25, 14.25).cut(),
  ],
  // Two bites of radius 2.25 around (12.5, 6) and (10, 3.5)
  16: [
    path(
      'M8.556 1.775A6.25 6.25 0 1 0 14.225 7.444A2.25 2.25 0 0 1 10.266 5.734A2.25 2.25 0 0 1 8.556 1.775Z'
    ),
    dot(13.75, 4.75),
    dot(12.75, 1.75),
    dot(11, 3.75),
    dot(5.75, 4.75).cut(),
    circle(4.75, 8.25, 0.5).cut(),
    dot(9, 8.25).cut(),
    dot(11.25, 10.75).cut(),
    dot(7.25, 12).cut(),
  ],
})
