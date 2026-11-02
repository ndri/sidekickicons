import { icon, path, scaled } from '../compiler/dsl.ts'

// Heroicons' folder with an x-mark, like their folder-plus and folder-minus. The solid cuts the
// x-mark out of the folder.
const folderXMark = [
  path(
    'M13.06 6.31 10.94 4.19a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z'
  ),
  path('M9.75 11.25 14.25 15.75M14.25 11.25 9.75 15.75').cut(),
]

export default icon({
  24: folderXMark,
  20: scaled(folderXMark, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(folderXMark, 25 / 36, -1 / 3, -1 / 3),
})
