import type { Symbol } from './video-camera-arrow-down-left.ts'
import { videoCamera } from './video-camera-arrow-down-left.ts'
import { line, polyline } from '../compiler/dsl.ts'

/** The down-left arrow turned around: its corner at the top right. */
const arrowUpRight: Symbol = (x, y, span) => {
  const half = span / 2
  const leg = span * (2 / 3)
  return [
    line(x - half, y + half, x + half, y - half),
    polyline([x + half - leg, y - half], [x + half, y - half], [x + half, y - half + leg]),
  ]
}

export default videoCamera(arrowUpRight)
