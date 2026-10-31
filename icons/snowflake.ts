import { icon, line, polyline, type Corner } from '../compiler/dsl.ts'

/**
 * Six arms from the center, each with a chevron opening outward: its point `vertex` from the
 * center, its ends `end` from the center and `spread` to each side. Neighboring chevrons stay at
 * least a pen apart.
 */
function snowflake(center: number, arm: number, vertex: number, end: number, spread: number) {
  return [-90, -30, 30, 90, 150, 210].flatMap((degrees) => {
    const [x, y] = [Math.cos((degrees * Math.PI) / 180), Math.sin((degrees * Math.PI) / 180)]
    const at = (along: number, across: number): Corner => [
      center + along * x - across * y,
      center + along * y + across * x,
    ]
    const [tipX, tipY] = at(arm, 0)
    return [
      line(center, center, tipX, tipY),
      polyline(at(end, spread), at(vertex, 0), at(end, -spread)),
    ]
  })
}

export default icon({
  24: snowflake(12, 9, 4.5, 6.5, 2),
  20: snowflake(10, 7.25, 4, 5.5, 1.5),
  // Closer in, the chevrons would run into each other
  16: snowflake(8, 6, 3.5, 5, 1.25),
})
