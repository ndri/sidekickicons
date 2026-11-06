import { icon, path, polygon, rect, slash } from '../compiler/dsl.ts'

// Heroicons' computer-desktop, crossed out. The solid fills the screen's frame and chin and leaves
// the screen open, like Heroicons' solid. The mini and micro follow Heroicons' own: their solid
// outlines moved in by half a pen.
export default icon({
  24: [
    rect(3, 3, 18, 14.25, 2.25),
    path('M3 5.25V12a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 12V5.25').outlineOnly(),
    rect(4.5, 4.5, 15, 9, 0.75).cut().solidOnly(),
    path(
      'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25'
    ).outlineOnly(),
    path(
      'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25Z'
    ).solidOnly(),
    ...slash(24),
  ],
  20: [
    rect(2.75, 2.75, 14.5, 11.5, 1.5),
    rect(4.25, 4.25, 11.5, 7.5, 0).cut(),
    polygon([8, 14], [12, 14], [12.5, 17.25, 0.5], [7.5, 17.25, 0.5]),
    ...slash(20),
  ],
  16: [
    rect(2.75, 2.75, 10.5, 8.5, 1.5),
    rect(4.25, 4.25, 7.5, 5.5, 0).cut(),
    polygon([6, 11], [10, 11], [10.5, 13.25, 0.5], [5.5, 13.25, 0.5]),
    ...slash(16),
  ],
})
