import { icon, polyline } from '../compiler/dsl.ts'

export default icon({
  24: [
    polyline([5.25, 8.25], [9, 12], [5.25, 15.75]),
    polyline([18.75, 8.25], [15, 12], [18.75, 15.75]),
  ],
  20: [polyline([4, 6.75], [7.25, 10], [4, 13.25]), polyline([16, 6.75], [12.75, 10], [16, 13.25])],
  16: [polyline([3, 5.75], [5.25, 8], [3, 10.25]), polyline([13, 5.75], [10.75, 8], [13, 10.25])],
})
