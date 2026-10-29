import { icon, line, path, rect } from '../compiler/dsl.ts'

// The solid cuts the shutter and label out as holes and draws its own, longer slot in the shutter
export default icon({
  24: [
    path(
      'M6 20.25h12A2.25 2.25 0 0 0 20.25 18V7.5L16.5 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25z'
    ),
    path('M15.75 3.75v5h-9.5v-5z').outlineOnly(),
    line(13, 5.5, 13, 7).outlineOnly(),
    rect(6.25, 11.25, 11.5, 6.5).outlineOnly(),
    rect(7, 5.25, 8, 3.5).cut().solidOnly(),
    rect(7, 13, 10, 5).cut().solidOnly(),
    line(13.25, 5.75, 13.25, 8.25).solidOnly(),
  ],
  20: [
    path(
      'M4.25 17.25h11.5a1.5 1.5 0 0 0 1.5-1.5V6.5L13.5 2.75H4.25a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5z'
    ),
    rect(5.75, 4.25, 6.75, 2.75).cut(),
    rect(5.75, 11, 8.5, 4.25).cut(),
    line(10.75, 4.75, 10.75, 6.5),
  ],
  16: [
    path(
      'M3 14.25h10a1.25 1.25 0 0 0 1.25-1.25V5.5L10.5 1.75H3A1.25 1.25 0 0 0 1.75 3v10A1.25 1.25 0 0 0 3 14.25z'
    ),
    rect(4.25, 3.25, 5.75, 2).cut(),
    rect(4.25, 8.75, 7.5, 3.5).cut(),
    line(8.5, 3.75, 8.5, 4.75),
  ],
})
