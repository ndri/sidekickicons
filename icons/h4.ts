import { icon, line, path, polyline } from '../compiler/dsl.ts'

export default icon({
  24: [
    path(
      'M21 19.5V9.75l-4.5 7h5.75M2.247 4.496v7.5M2.247 11.996v7.502M2.247 11.998h10.5M12.747 4.498v7.5M12.747 11.998v7.5'
    ),
  ],
  20: [
    line(2.75, 4.75, 2.75, 15.25),
    line(9.25, 4.75, 9.25, 15.25),
    line(2.75, 10, 9.25, 10),
    // The 24 drawing's 4 squashed to fit beside the H, so off the grid
    polyline([16.261, 15.25], [16.261, 8.75], [12.74, 13.416], [17.241, 13.416]),
  ],
  16: [
    line(1.75, 3.75, 1.75, 12.25),
    line(7.25, 3.75, 7.25, 12.25),
    line(1.75, 8, 7.25, 8),
    polyline([13.5, 12.25], [13.5, 6.75], [10.5, 11], [14.5, 11]),
  ],
})
