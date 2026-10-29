import { PEN, circle, ellipse, icon, line, path, rect } from '../compiler/dsl.ts'

/** A plus, which the solid draws into a gap a pen wide erased around it. */
function plus(x: number, y: number, arm: number) {
  return [
    rect(x - PEN, y - arm - PEN, 2 * PEN, 2 * (arm + PEN), PEN)
      .cut()
      .solidOnly(),
    rect(x - arm - PEN, y - PEN, 2 * (arm + PEN), 2 * PEN, PEN)
      .cut()
      .solidOnly(),
    line(x, y - arm, x, y + arm),
    line(x - arm, y, x + arm, y),
  ]
}

export default icon({
  24: [
    // The outline stops the face at the plus
    path(
      'M20.863 10.437a9 9 0 0 1-4.707 9.546 9 9 0 0 1-10.52-1.619 9 9 0 0 1-1.62-10.52 9 9 0 0 1 9.547-4.707'
    ).outlineOnly(),
    circle(12, 12, 9).solidOnly(),
    ellipse(9.375, 9.75, 0.375, 0.75).cut(),
    ellipse(14.625, 9.75, 0.375, 0.75).cut(),
    path('M15.182 15.182a4.5 4.5 0 0 1-6.364 0').cut(),
    ...plus(18.5, 5.5, 2.5),
  ],
  20: [
    circle(10, 10, 7.25),
    ellipse(8, 9.5, 0.25, 0.75).cut(),
    ellipse(12, 9.5, 0.25, 0.75).cut(),
    path('M13.005 13.505a4.25 4.25 0 0 1-6.01 0').cut(),
    ...plus(15, 5, 2.25),
  ],
  16: [
    circle(8, 8, 6.25),
    ellipse(6, 8, 0.25, 0.75).cut(),
    ellipse(10, 8, 0.25, 0.75).cut(),
    path('M10.475 11.275a3.5 3.5 0 0 1-4.95 0').cut(),
    ...plus(12.5, 3.5, 1.75),
  ],
})
