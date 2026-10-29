import { icon, path } from '../compiler/dsl.ts'

// The small sizes are symmetric, unlike the 24 whose right shoulder is drawn differently: a dipping
// arc from the top to each shoulder, then a round side down to the point at the bottom
export default icon({
  24: [
    path(
      'M12 2.671a11.959 11.959 0 0 1-8.402 3.286A11.99 11.99 0 0 0 3 9.706c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
    ),
  ],
  20: [
    path(
      'M10 2.728A12.697 12.697 0 0 1 2.821 5.524A11.25 11.25 0 0 0 10 17.317A11.25 11.25 0 0 0 17.179 5.524A12.697 12.697 0 0 1 10 2.728Z'
    ),
  ],
  16: [
    path(
      'M8 2.309A9.713 9.713 0 0 1 2.756 4.71A9.749 9.749 0 0 0 8 13.693A9.749 9.749 0 0 0 13.244 4.71A9.713 9.713 0 0 1 8 2.309Z'
    ),
  ],
})
