import { icon, line, path } from '../compiler/dsl.ts'

// The screen's pen ring leaves its inside open in solid, the base is filled
export default icon({
  24: [
    line(10.5, 17.5, 13.5, 17.5),
    path(
      'M4.75 15l-1.302 1.632a.996.996 0 0 0 .779 1.618h15.546a.996.996 0 0 0 .778-1.618L19.25 15z'
    ),
    path('M7 5.75A2.25 2.25 0 0 0 4.75 8v7h14.5V8A2.25 2.25 0 0 0 17 5.75z').hollowed(),
  ],
  20: [
    path('M4 12.5l-1.05 1.23a.92.92 0 0 0 .7 1.52h12.7a.92.92 0 0 0 .7-1.52L16 12.5z'),
    path('M6 4.75A2 2 0 0 0 4 6.75v5.75h12V6.75a2 2 0 0 0-2-2z').hollowed(),
  ],
  16: [
    path('M3.5 9.75l-.6.8a.75.75 0 0 0 .6 1.2h9a.75.75 0 0 0 .6-1.2l-.6-.8z'),
    path('M5 4.25a1.5 1.5 0 0 0-1.5 1.5v4h9v-4a1.5 1.5 0 0 0-1.5-1.5z').hollowed(),
  ],
})
