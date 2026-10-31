import { circle, icon, n, path } from '../compiler/dsl.ts'

/**
 * A ring around a half disc. The solid's half disc has its straight side half a pen right of the
 * center, so the pen grows it to the center with round corners.
 */
const circleHalfFull = (center: number, ring: number, disc: number) => {
  const half = (x: number) => {
    const y = Math.sqrt(disc ** 2 - (x - center) ** 2)
    return `M${n(x)} ${n(center - y)}A${disc} ${disc} 0 0 1 ${n(x)} ${n(center + y)}Z`
  }
  return [
    circle(center, center, ring).hollowed(),
    path(half(center)).outlineOnly(),
    path(half(center + 0.75)).solidOnly(),
  ]
}

export default icon({
  24: circleHalfFull(12, 9, 5.25),
  20: circleHalfFull(10, 7.25, 4.25),
  16: circleHalfFull(8, 6.25, 3.5),
})
