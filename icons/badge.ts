import { icon, n, path } from '../compiler/dsl.ts'

// Eight round lobes of radius r with their centers on a circle of radius spread around the middle
const badge = (size: number, spread: number, r: number) => {
  const c = size / 2
  const half = Math.PI / 8
  const reach = spread * Math.cos(half) + Math.sqrt(r ** 2 - (spread * Math.sin(half)) ** 2)
  const notch = (k: number) => {
    const angle = (2 * k + 1) * half
    return `${n(c + reach * Math.cos(angle))} ${n(c + reach * Math.sin(angle))}`
  }
  const lobes = [1, 2, 3, 4, 5, 6, 7, 8].map((k) => `A${n(r)} ${n(r)} 0 0 1 ${notch(k)}`)
  return path(`M${notch(0)}${lobes.join('')}Z`)
}

export default icon({
  24: [badge(24, 5.25, 3.75)],
  20: [badge(20, 5, 2.25)],
  16: [badge(16, 4, 2.25)],
})
