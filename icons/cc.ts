import { icon, path, rect, scaled, type Shape } from '../compiler/dsl.ts'

/**
 * Letters in a rounded box like Heroicons' gif, cut out of the solid. `letters` is drawn on the 24
 * grid, 7.5 tall and centered on (12, 12), and scaled to each size's letter height.
 */
export function letterBox(letters: () => Shape[]) {
  const cut = (shapes: Shape[]) => shapes.map((shape) => shape.cut())
  // Scaled around the letters' center, to the height of gif's letters at each size
  const at = (height: number, center: number) => {
    const factor = height / 7.5
    return cut(scaled(letters(), factor, center - 12 * factor, center - 12 * factor))
  }
  return icon({
    24: [rect(2.25, 4.5, 19.5, 15, 2.25), ...cut(letters())],
    20: [rect(1.75, 3.75, 16.5, 12.5, 1.5), ...at(6.5, 10)],
    16: [rect(1.75, 3.75, 12.5, 8.5, 1.25), ...at(5.5, 8)],
  })
}

// The C from gif's G, without its bar
const c = (dx: number) =>
  scaled(
    [
      path(
        'M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0'
      ),
    ],
    1,
    dx
  )

// Two Cs for closed captions
export default letterBox(() => [...c(0.75), ...c(8.25)])
