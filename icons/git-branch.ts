import { circle, icon, line, path, scaled } from '../compiler/dsl.ts'

// A line down into a commit at the bottom, and a branch curving into it from a commit at the top right
const gitBranch = [
  line(6.75, 3.75, 6.75, 15.75),
  circle(6.75, 18, 2.25),
  circle(17.25, 6.75, 2.25),
  path('M17.25 9a8.25 9 0 0 1-8.25 9'),
]

export default icon({
  24: gitBranch,
  20: scaled(gitBranch, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(gitBranch, 25 / 36, -1 / 3, -1 / 3),
})
