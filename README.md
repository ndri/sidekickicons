<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset=".github/logo-light.svg">
    <img alt="Sidekickicons" width="315" height="117" style="max-width: 100%" src=".github/logo-light.svg">
  </picture>
</p>

Fanmade icons to complement [Heroicons](https://github.com/tailwindlabs/heroicons).

Heroicons is amazing, but it doesn't have some icons I need. I've been creating these missing icons myself so they share a similar style, size and naming scheme.

Unfortunately, I can't contribute these icons to the Heroicons repository. From the README:

> We're not accepting contributions for new icons [...]. Instead we encourage you to release your own icons in your own library [...].

So I am sharing these icons in my own library as a Sidekick to the Hero.

## List of available icons

| Outline                                                      | Solid                                                      | Mini                                                       | Micro                                                      | Code             | Class              | Usage                            |
| ------------------------------------------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------- | ------------------ | -------------------------------- |
| ![arrow-path-clock.svg](src/24/outline/arrow-path-clock.svg) | ![arrow-path-clock.svg](src/24/solid/arrow-path-clock.svg) | ![arrow-path-clock.svg](src/20/solid/arrow-path-clock.svg) | ![arrow-path-clock.svg](src/16/solid/arrow-path-clock.svg) | arrow-path-clock | ArrowPathClockIcon | history                          |
| ![compass.svg](src/24/outline/compass.svg)                   | ![compass.svg](src/24/solid/compass.svg)                   | ![compass.svg](src/20/solid/compass.svg)                   | ![compass.svg](src/16/solid/compass.svg)                   | compass          | CompassIcon        | explore                          |
| ![crown.svg](src/24/outline/crown.svg)                       | ![crown.svg](src/24/solid/crown.svg)                       | ![crown.svg](src/20/solid/crown.svg)                       | ![crown.svg](src/16/solid/crown.svg)                       | crown            | CrownIcon          | upgrade, pro, premium, subscribe |
| ![mask.svg](src/24/outline/mask.svg)                         | ![mask.svg](src/24/solid/mask.svg)                         | ![mask.svg](src/20/solid/mask.svg)                         | ![mask.svg](src/16/solid/mask.svg)                         | mask             | MaskIcon           | privacy, security                |

## Usage

These icons can be used exactly like Heroicons. There is no website like [heroicons.com](https://heroicons.com/) yet, but you can currently see the list of icons in this README and get the SVG files from the `optimized` directory (**not** the `src` directory!).

You can then add the SVG directly into your HTML:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
  data-slot="icon"
  class="size-6 text-gray-500"
>
  <path
    d="M12 5a.75.75 0 0 0-.643.363L8.145 10.7 3.408 7.621a.75.75 0 0 0-1.15.74l1.5 10A.75.75 0 0 0 4.5 19h15a.75.75 0 0 0 .742-.639l1.5-10a.75.75 0 0 0-1.15-.74L15.855 10.7l-3.212-5.336A.75.75 0 0 0 12 5Z"
  />
</svg>
```

If you use TailwindCSS, you need to add the `size-6` class to 24px icons, `size-5` to 20px icons, and `size-4` to 16px icons. You can also change the text color with `text-gray-500` or any other color class.

Otherwise, you need to use CSS or set the `width` and `height` attributes for the size and change the `color` attribute for the color.

### React

First, install `@sidekickicons/react` from npm:

```sh
npm install @sidekickicons/react
```

Now each icon can be used alongside Heroicons and imported individually as a React component:

```js
import { CrownIcon } from '@sidekickicons/react/24/solid'
import { BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <CrownIcon className="size-6 text-blue-500" />
      <BeakerIcon className="size-6 text-green-500" />
    </div>
  )
}
```

Import the icons from their respective directory:

- 24x24 outline: `@sidekickicons/react/24/outline`
- 24x24 solid: `@sidekickicons/react/24/solid`
- 20x20 solid: `@sidekickicons/react/20/solid`
- 16x16 solid: `@sidekickicons/react/16/solid`

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@sidekickicons/react/24/outline/)

### Vue

First, install `@sidekickicons/vue` from npm:

```sh
npm install @sidekickicons/vue
```

Now each icon can be used alongside Heroicons and imported individually as a Vue component:

```vue
<template>
  <div>
    <CrownIcon class="size-6 text-blue-500" />
    <BeakerIcon class="size-6 text-green-500" />
  </div>
</template>

<script setup>
import { CrownIcon } from '@sidekickicons/vue/24/solid'
import { BeakerIcon } from '@heroicons/vue/24/solid'
</script>
```

Import the icons from their respective directory:

- 24x24 outline: `@sidekickicons/vue/24/outline`
- 24x24 solid: `@sidekickicons/vue/24/solid`
- 20x20 solid: `@sidekickicons/vue/20/solid`
- 16x16 solid: `@sidekickicons/vue/16/solid`

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@sidekickicons/vue/24/outline/)

## Contributing

Feel free to suggest icons in an issue or create a pull request with your own icons.

I will create a better contribution guide in the future.

## License

This library is MIT licensed.
