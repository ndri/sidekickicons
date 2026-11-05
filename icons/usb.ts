import { circle, icon, line, polygon, polyline, rect, scaled } from '../compiler/dsl.ts'

/**
 * The USB logo: a stem with an arrowhead on top and a dot at the bottom, a branch out and up to a
 * circle on the left and one to a square on the right. The solid's arrowhead, circle and square are
 * smaller, since it fills them.
 */
const usb = [
  polygon([12, 3.375], [10.125, 6.375], [13.875, 6.375]).outlineOnly(),
  polygon([12, 3.75], [10.5, 6], [13.5, 6]).solidOnly(),
  // From the arrowhead's base, which is higher in the solid
  line(12, 6.375, 12, 17.25).outlineOnly(),
  line(12, 6, 12, 17.25).solidOnly(),
  circle(12, 18.75, 1.5),
  polyline([12, 15, 1], [6.75, 11.25, 1], [6.75, 9.75]),
  circle(6.75, 8.5, 1.25).outlineOnly(),
  circle(6.75, 8.625, 0.75).solidOnly(),
  polyline([12, 13.5, 1], [17.25, 9.75, 1], [17.25, 8.25]),
  rect(16, 5.75, 2.5, 2.5).outlineOnly(),
  rect(16.5, 6.75, 1.5, 1.5).solidOnly(),
]

export default icon({
  24: usb,
  20: scaled(usb, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(usb, 25 / 36, -1 / 3, -1 / 3),
})
