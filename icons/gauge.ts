import { circle, icon, line, path, scaled } from '../compiler/dsl.ts'

// A dial open at the bottom, with a needle pointing to the top right from a hub
const gauge = [
  path('M5.636 19.114A9 9 0 1 1 18.364 19.114').outlineOnly(),
  // The solid closes the dial along the bottom, its corners rounded by 1.5
  path(
    'M6.291 19.114H17.709A1.5 1.5 0 0 0 18.851 18.587A9 9 0 1 0 5.149 18.587A1.5 1.5 0 0 0 6.291 19.114Z'
  ).solidOnly(),
  circle(12, 12.75, 1.5).hollowed().cut().solidOnly(),
  line(13.06, 11.69, 16.5, 8.25).cut().solidOnly(),
  circle(12, 12.75, 1.5).outlineOnly(),
  line(13.06, 11.69, 16.5, 8.25).outlineOnly(),
]

export default icon({
  24: gauge,
  20: scaled(gauge, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(gauge, 25 / 36, -1 / 3, -1 / 3),
})
