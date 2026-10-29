import { icon, line, path, polyline } from '../compiler/dsl.ts'

export default icon({
  24: [
    path('M15.25 3.75h2M12.25 20.25V3.75h3v16.5'),
    // The bowl is open in the outline and filled in the solid
    path('M12.25 3.75H10.5A3.75 3.75 0 0 0 6.75 7.5a3.75 3.75 0 0 0 3.75 3.75h1.75').outlineOnly(),
    path('M12.25 3.75H10.5a3.75 3.75 0 0 0 0 7.5h1.75Z').solidOnly(),
  ],
  20: [
    path('M10.25 2.75h-1.5a3.25 3.25 0 0 0 0 6.5h1.5Z'),
    polyline([10.25, 17.25], [10.25, 2.75], [13, 2.75], [13, 17.25]),
    line(13, 2.75, 14.5, 2.75),
  ],
  16: [
    path('M8.375 2.75h-1a2.25 2.25 0 0 0-2.25 2.25v.25a2.25 2.25 0 0 0 2.25 2.25h1Z'),
    polyline([8.375, 13.25], [8.375, 2.75], [10.875, 2.75], [10.875, 13.25]),
  ],
})
