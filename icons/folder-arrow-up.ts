import { line, polyline } from '../compiler/dsl.ts'
import { folder } from './folder-x-mark.ts'

// Heroicons' folder-arrow-down, turned up
export default folder((x, y, span) => [
  line(x, y + span / 2, x, y - span / 2),
  polyline([x - span / 2, y], [x, y - span / 2], [x + span / 2, y]),
])
