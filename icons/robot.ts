import { circle, icon, line, path, rect } from '../compiler/dsl.ts'

// An ear on each side of the head, closed along the head's edge so the solid fills it
function ears(size: number, inner: number, outer: number, top: number, bottom: number, r: number) {
  const ear = (x: number, out: number, sweep: number) =>
    `M${x} ${top}H${out + (x > out ? r : -r)}A${r} ${r} 0 0 ${sweep} ${out} ${top + r}` +
    `V${bottom - r}A${r} ${r} 0 0 ${sweep} ${out + (x > out ? r : -r)} ${bottom}H${x}Z`
  return path(ear(inner, outer, 0) + ear(size - inner, size - outer, 1))
}

export default icon({
  24: [
    ears(24, 4.5, 2.25, 12.25, 17.25, 1.5),
    circle(12, 4.5, 1.5),
    line(12, 6, 12, 8),
    rect(4.5, 8.5, 15, 12.5, 3.75),
    // The solid face has bigger eyes set higher, and a shorter mouth
    line(8, 17.75, 16, 17.75).outlineOnly(),
    circle(9.25, 13.25, 1.5).outlineOnly(),
    circle(14.75, 13.25, 1.5).outlineOnly(),
    line(8.25, 17.75, 15.75, 17.75).cut().solidOnly(),
    circle(9.25, 12.75, 1).cut().solidOnly(),
    circle(14.75, 12.75, 1).cut().solidOnly(),
  ],
  20: [
    ears(20, 4.25, 2.75, 10.75, 13.25, 0.75),
    circle(10, 4.5, 0.75),
    line(10, 4.5, 10, 7.75),
    rect(4.25, 7.75, 11.5, 8.5, 3),
    line(7.5, 14, 12.5, 14).cut(),
    circle(8, 10.5, 0.5).cut(),
    circle(12, 10.5, 0.5).cut(),
  ],
  // The antenna loses its ball
  16: [
    ears(16, 3.25, 1.75, 8.25, 10.75, 0.75),
    line(8, 2.75, 8, 5.75),
    rect(3.25, 5.75, 9.5, 7.5, 2.25),
    line(5.5, 11.5, 10.5, 11.5).cut(),
    circle(6, 8, 0.5).cut(),
    circle(10, 8, 0.5).cut(),
  ],
})
