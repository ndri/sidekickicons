import { circle, dot, icon, line, path, scaled } from '../compiler/dsl.ts'
import headphones from './headphones.ts'

// Smaller headphones with a microphone. At 24 its boom carries on down from the outermost point of
// the right ear cup and round to a round tip in the middle. The mini and micro simplify it to a
// straight line from the bottom of the ear cup to the middle, and the micro also drops the tip.
const headset = (boom: 'curved' | 'straight', tip: boolean) => [
  ...scaled(headphones[24]!, 0.875, 1.5),
  boom === 'curved'
    ? path('M19.448 13.989v1.761a4.5 4.5 0 0 1-4.5 4.5h-2.198')
    : line(17.25, 17.75, 12, 20.25),
  ...(tip ? [circle(12, 20.25, 0.75), dot(12, 20.25).outlineOnly()] : []),
]

export default icon({
  24: headset('curved', true),
  20: scaled(headset('straight', true), 29 / 36, 1 / 3, 1 / 3),
  16: scaled(headset('straight', false), 25 / 36, -1 / 3, -1 / 3),
})
