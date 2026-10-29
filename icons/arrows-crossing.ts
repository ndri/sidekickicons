import { icon, line, path, polygon, polyline } from '../compiler/dsl.ts'

// The solid draws the second curve whole, then cuts out the crossing so that a pen-wide gap is left
// on either side of the first curve: its strands end flat along it instead of with round caps.
export default icon({
  24: [
    path('M17 16c-2.49 0-3.985-.612-5.035-1.498').outlineOnly(),
    path('M8.035 9.498C6.985 8.612 5.49 8 3 8').outlineOnly(),
    path('M3 8c9 0 5 8 14 8').solidOnly(),
    polygon([8.5, 11.5], [10.5, 8.5], [11.5, 12.5], [9.5, 15.5]).cut().solidOnly(),
    path('M17 8c-9 0-5 8-14 8'),
    line(17, 8, 21, 8),
    polyline([18.25, 5.25], [21, 8], [18.25, 10.75]),
    line(17, 16, 21, 16),
    polyline([18.25, 13.25], [21, 16], [18.25, 18.75]),
  ],
  20: [
    path('M3 6c9 0 4 8 11.25 8'),
    polygon([8, 9], [9.25, 6.375], [10.75, 10.75], [9, 13.75]).cut(),
    path('M14.25 6c-7.25 0-2.25 8-11.25 8'),
    line(14.25, 6, 17.25, 6),
    polyline([14.25, 3.25], [17.25, 6], [14.25, 8.75]),
    line(14.25, 14, 17.25, 14),
    polyline([14.25, 11.25], [17.25, 14], [14.25, 16.75]),
  ],
  16: [
    path('M2.75 4.75c6.25 0 1.25 6.5 8.5 6.5'),
    polygon([4.875, 7.5], [6.875, 4], [8.125, 8.875], [6.625, 12]).cut(),
    path('M11.25 4.75c-7.25 0-2.25 6.5-8.5 6.5'),
    line(11.25, 4.75, 13.25, 4.75),
    polyline([11.25, 2.75], [13.25, 4.75], [11.25, 6.75]),
    line(11.25, 11.25, 13.25, 11.25),
    polyline([11.25, 9.25], [13.25, 11.25], [11.25, 13.25]),
  ],
})
