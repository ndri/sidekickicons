import { icon, path, slash } from '../compiler/dsl.ts'

// Heroicons' paint brush without its ferrule, where the slash runs between the bristles and the
// handle. The slash closes off the handle.
const handle =
  'M12.917 14.502a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763'

// The mini and micro follow Heroicons' own: their solid outlines moved in by half a pen. The
// bristles are three circles (the tuft, its flick and its belly), the handles end in the gap.
export default icon({
  24: [
    path(
      'M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Z'
    ),
    path(handle).outlineOnly(),
    // The solid fills the handle down to where the ferrule was, for the gap to cut flat
    path(`${handle}a6.776 6.776 0 0 1 3.42 3.42Z`).solidOnly(),
    ...slash(24),
  ],
  20: [
    path('M8.25 14A2.25 2.25 0 0 0 3.75 14A1.25 1.25 0 0 1 1.95 15.123A3.25 3.25 0 0 0 8.25 14Z'),
    path(
      'M16.451 1.978A1.12 1.12 0 0 1 18.022 3.549L13.992 8.819A12 12 0 0 1 10.128 12.109L7.892 9.873A12 12 0 0 1 11.181 6.008Z'
    ),
    ...slash(20),
  ],
  16: [
    path(
      'M7.25 10.5A1.75 1.75 0 0 0 3.75 10.5A1.25 1.25 0 0 1 2 11.646A2.75 2.75 0 0 0 7.25 10.5Z'
    ),
    path(
      'M13.03 1.881A.785.785 0 0 1 14.12 2.97L12.215 5.826A7.25 7.25 0 0 1 8.993 8.488L7.51 7.012A7.25 7.25 0 0 1 10.175 3.785Z'
    ),
    ...slash(16),
  ],
})
