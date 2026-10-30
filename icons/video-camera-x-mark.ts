import { line } from '../compiler/dsl.ts'
import { videoCamera } from './video-camera-arrow-down-left.ts'

export default videoCamera((x, y, span) => [
  line(x - span / 2, y - span / 2, x + span / 2, y + span / 2),
  line(x + span / 2, y - span / 2, x - span / 2, y + span / 2),
])
