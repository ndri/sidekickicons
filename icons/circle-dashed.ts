import { icon, n, path } from '../compiler/dsl.ts'

// Eight arcs around a circle, each `degrees` long and centered between the compass points
function dashes(center: number, radius: number, degrees: number) {
  const point = (angle: number) => {
    const radians = (angle * Math.PI) / 180
    return `${n(center + radius * Math.sin(radians))} ${n(center - radius * Math.cos(radians))}`
  }
  return Array.from({ length: 8 }, (_, i) => {
    const [start, end] = [-1, 1].map((side) => point(22.5 + 45 * i + (side * degrees) / 2))
    return path(`M${start}A${n(radius)} ${n(radius)} 0 0 1 ${end}`)
  })
}

export default icon({
  24: dashes(12, 9, 23),
  20: dashes(10, 7.25, 20),
  16: dashes(8, 6.25, 15),
})
