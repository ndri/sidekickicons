import { icon, line, path, scaled } from '../compiler/dsl.ts'

/**
 * Heroicons' forward or backward made smaller, with a bar at its tip (⏭, ⏮). The two are mirror
 * images of each other.
 */
export function trackBar(direction: 'forward' | 'backward') {
  const triangles =
    direction === 'forward'
      ? scaled(
          [
            path(
              'M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z'
            ),
          ],
          0.8,
          0.25,
          1.8
        )
      : scaled(
          [
            path(
              'M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z'
            ),
          ],
          0.8,
          4.55,
          1.8
        )
  const bar = direction === 'forward' ? 20.25 : 3.75
  // Moved over to center the triangles and bar together
  const drawing = scaled(
    [...triangles, line(bar, 8.25, bar, 15.75)],
    1,
    direction === 'forward' ? 0.55 : -0.55
  )
  return icon({
    24: drawing,
    20: scaled(drawing, 29 / 36, 1 / 3, 1 / 3),
    16: scaled(drawing, 25 / 36, -1 / 3, -1 / 3),
  })
}

export default trackBar('forward')
