import { icon, line } from '../compiler/dsl.ts'

// Eight rays around the center, every 45°, from radius `inner` out to radius `outer`
function rays(center: number, inner: number, outer: number) {
  return Array.from({ length: 8 }, (_, i) => {
    const [dx, dy] = [Math.cos((i * Math.PI) / 4), Math.sin((i * Math.PI) / 4)]
    return line(center + inner * dx, center + inner * dy, center + outer * dx, center + outer * dy)
  })
}

export default icon({
  24: rays(12, 5.5, 9),
  20: rays(10, 4.25, 7.25),
  16: rays(8, 3.75, 6.25),
})
