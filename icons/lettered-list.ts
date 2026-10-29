import { icon, line, path, scaled } from '../compiler/dsl.ts'

const a = path('M3 6h2.5M3 7.75V4.5a1.25 1.25 0 0 1 1.25 -1.25A1.25 1.25 0 0 1 5.5 4.5v3.25')
const b = path(
  'M3 9.75v4.5h1.375A1.125 1.125 0 0 0 5.5 13.125A1.125 1.125 0 0 0 4.375 12H3.5h0.875A1.125 1.125 0 0 0 5.5 10.875A1.125 1.125 0 0 0 4.375 9.75Z'
).hollowed()
const c = path('M5.5 16.25h-1a1.5 1.5 0 0 0 -1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5h1')

export default icon({
  24: [a, b, c, path('M8.25 6h12M8.25 12h12M8.25 18h12')],
  // The handmade 20 letters are thinner (the B is 1.25). These are their centerlines with the
  // 1.5 pen, so the letters come out bolder with smaller counters.
  20: [
    path('M2.75 5.5V3a1 1 0 0 1 2 0v2.5'),
    line(2.75, 4.375, 4.75, 4.375),
    path(
      'M2.625 8.125v3.75H4a.875.875 0 0 0 .875-.875v-.125A.875.875 0 0 0 4 10a.875.875 0 0 0 .875-.875V9A.875.875 0 0 0 4 8.125Z'
    ).hollowed(),
    line(2.625, 10, 4, 10),
    path('M4.75 14.5h-.875a1.125 1.125 0 0 0-1.125 1.125v1.25a1.125 1.125 0 0 0 1.125 1.125h.875'),
    line(7.75, 3.75, 17.25, 3.75),
    line(7.75, 10, 17.25, 10),
    line(7.75, 16.25, 17.25, 16.25),
  ],
  // Three letters don't fit at 16 with the 1.5 pen, so it lists two, as big as at 24
  16: [
    ...scaled([a], 1, -0.5, -1.25),
    ...scaled([b], 1, -0.5, -0.25),
    line(7.75, 4.25, 13.5, 4.25),
    line(7.75, 11.75, 13.5, 11.75),
  ],
})
