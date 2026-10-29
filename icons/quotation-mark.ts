import { icon, path, scaled } from '../compiler/dsl.ts'

// The second mark is the first one moved right
const pair = (d: string, spacing: number) => {
  const mark = [path(d)]
  return [...mark, ...scaled(mark, 1, spacing)]
}

export default icon({
  24: pair(
    'M6.25 15.5c-1.837 -0.794 -2.5 -1.5 -2.5 -3.5S5 8.75 7 8.75S10.25 10 10.25 12c0 3.5 -1 4.75 -5 7.25c1 -1.75 1 -2.25 1 -3.75z',
    10
  ),
  20: pair(
    'M2.75 10a2.75 2.75 0 0 1 5.5 0C8.25 12.425 5.9 14.625 4 15.75C4.605 14.571 4.844 13.979 4.726 12.647C3.486 12.031 2.75 11.714 2.75 10Z',
    9
  ),
  16: pair(
    'M1.75 8a2.25 2.25 0 0 1 4.5 0C6.25 10.749 4.93 11.8 2.75 13.25C3.432 12.148 3.537 11.669 3.483 10.393C2.352 9.764 1.75 9.613 1.75 8Z',
    8
  ),
})
