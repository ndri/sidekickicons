import { icon, line, polygon, scaled } from '../compiler/dsl.ts'

// An eraser tipped 45° onto a line, its rubber end marked off. The solid's cut runs past the
// eraser's edges so its round ends don't show.
const eraser = [
  polygon([7.5, 19.5], [3, 15, 1.5], [13.5, 4.5, 1.5], [20.25, 11.25, 1.5], [12, 19.5]),
  line(6.75, 11.25, 13.5, 18).outlineOnly(),
  line(5.25, 9.75, 15, 19.5).cut().solidOnly(),
  line(12, 19.5, 20.25, 19.5),
]

export default icon({
  24: eraser,
  20: scaled(eraser, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(eraser, 25 / 36, -1 / 3, -1 / 3),
})
