import { icon } from '../compiler/dsl.ts'
import { xMark } from './calendar-x-mark.ts'
import { shields } from './shield.ts'

// The shield from icons/shield.ts with an x-mark where Heroicons' shield-check has its check, cut
// out of the solid
export default icon({
  24: [shields[24], ...xMark(12, 12, 6).map((shape) => shape.cut())],
  20: [shields[20], ...xMark(10, 9.75, 5.5).map((shape) => shape.cut())],
  16: [shields[16], ...xMark(8, 7.75, 4.5).map((shape) => shape.cut())],
})
