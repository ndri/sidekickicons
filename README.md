<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset=".github/logo-light.svg">
    <img alt="Sidekickicons" width="315" height="117" style="max-width: 100%" src=".github/logo-light.svg">
  </picture>
</p>

Fanmade icons to complement [Heroicons](https://github.com/tailwindlabs/heroicons).

Heroicons are amazing, but they don't include some icons I need. I've been creating these missing icons myself so they share a similar style, size and naming scheme.

Unfortunately, I can't contribute these icons to the Heroicons repository. From the README:

> We're not accepting contributions for new icons [...]. Instead we encourage you to release your own icons in your own library [...].

So I am sharing these icons in my own library as a Sidekick to the Hero.

Browse them at [sidekickicons.com](https://sidekickicons.com/).

## Examples of new icons

| Outline                                                      | Solid                                                      | Mini                                                       | Micro                                                      | Code             | Class               | Usage                      |
| ------------------------------------------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------- | ------------------- | -------------------------- |
| ![mask.svg](src/24/outline/mask.svg)                         | ![mask.svg](src/24/solid/mask.svg)                         | ![mask.svg](src/20/solid/mask.svg)                         | ![mask.svg](src/16/solid/mask.svg)                         | mask             | MaskIcon            | privacy, security          |
| ![floppy-disk.svg](src/24/outline/floppy-disk.svg)           | ![floppy-disk.svg](src/24/solid/floppy-disk.svg)           | ![floppy-disk.svg](src/20/solid/floppy-disk.svg)           | ![floppy-disk.svg](src/16/solid/floppy-disk.svg)           | floppy-disk      | FloppyDiskIcon      | save                       |
| ![microphone-slash.svg](src/24/outline/microphone-slash.svg) | ![microphone-slash.svg](src/24/solid/microphone-slash.svg) | ![microphone-slash.svg](src/20/solid/microphone-slash.svg) | ![microphone-slash.svg](src/16/solid/microphone-slash.svg) | microphone-slash | MicrophoneSlashIcon | mute                       |
| ![arc-third.svg](src/24/outline/arc-third.svg)               | ![arc-third.svg](src/24/solid/arc-third.svg)               | ![arc-third.svg](src/20/solid/arc-third.svg)               | ![arc-third.svg](src/16/solid/arc-third.svg)               | arc-third        | ArcThirdIcon        | loading, spinner           |
| ![chevron-down-up.svg](src/24/outline/chevron-down-up.svg)   | ![chevron-down-up.svg](src/24/solid/chevron-down-up.svg)   | ![chevron-down-up.svg](src/20/solid/chevron-down-up.svg)   | ![chevron-down-up.svg](src/16/solid/chevron-down-up.svg)   | chevron-down-up  | ChevronDownUpIcon   | collapse                   |
| ![robot.svg](src/24/outline/robot.svg)                       | ![robot.svg](src/24/solid/robot.svg)                       | ![robot.svg](src/20/solid/robot.svg)                       | ![robot.svg](src/16/solid/robot.svg)                       | robot            | RobotIcon           | bot, automation, system    |
| ![arrow-path-clock.svg](src/24/outline/arrow-path-clock.svg) | ![arrow-path-clock.svg](src/24/solid/arrow-path-clock.svg) | ![arrow-path-clock.svg](src/20/solid/arrow-path-clock.svg) | ![arrow-path-clock.svg](src/16/solid/arrow-path-clock.svg) | arrow-path-clock | ArrowPathClockIcon  | history                    |
| ![quotation-mark.svg](src/24/outline/quotation-mark.svg)     | ![quotation-mark.svg](src/24/solid/quotation-mark.svg)     | ![quotation-mark.svg](src/20/solid/quotation-mark.svg)     | ![quotation-mark.svg](src/16/solid/quotation-mark.svg)     | quotation-mark   | QuotationMarkIcon   | quote                      |
| ![cookie.svg](src/24/outline/cookie.svg)                     | ![cookie.svg](src/24/solid/cookie.svg)                     | ![cookie.svg](src/20/solid/cookie.svg)                     | ![cookie.svg](src/16/solid/cookie.svg)                     | cookie           | CookieIcon          | privacy, consent, tracking |
| ![computer-laptop.svg](src/24/outline/computer-laptop.svg)   | ![computer-laptop.svg](src/24/solid/computer-laptop.svg)   | ![computer-laptop.svg](src/20/solid/computer-laptop.svg)   | ![computer-laptop.svg](src/16/solid/computer-laptop.svg)   | computer-laptop  | ComputerLaptopIcon  | device, desktop            |
| ![pin.svg](src/24/outline/pin.svg)                           | ![pin.svg](src/24/solid/pin.svg)                           | ![pin.svg](src/20/solid/pin.svg)                           | ![pin.svg](src/16/solid/pin.svg)                           | pin              | PinIcon             | pin, focus, keep           |
| ![headphones.svg](src/24/outline/headphones.svg)             | ![headphones.svg](src/24/solid/headphones.svg)             | ![headphones.svg](src/20/solid/headphones.svg)             | ![headphones.svg](src/16/solid/headphones.svg)             | headphones       | HeadphonesIcon      | listen, undeafen           |

See the full list of new icons at https://sidekickicons.com/?iconset=Sidekickicons.

## Usage

These icons can be used exactly like Heroicons. You can copy the SVG source of an icon from [sidekickicons.com](https://sidekickicons.com/) and inline it directly into your HTML:

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

### Svelte

First, install [`@sidekickicons/svelte`](https://github.com/ndri/sidekickicons-svelte) from npm:

```bash
pnpm install @sidekickicons/svelte
```

Now each icon can be imported and used in Svelte components. Since there is no official Svelte package for Heroicons, the [`@sidekickicons/svelte`](https://github.com/ndri/sidekickicons-svelte) package includes Heroicons as well.

```svelte
<script lang="ts">
  import { CrownIcon, BeakerIcon } from '@sidekickicons/svelte/24/solid'
</script>

<div>
  <CrownIcon class="text-blue-500" />
  <BeakerIcon class="text-green-500" />
</div>
```

Import the icons from their respective directory:

- 24x24 outline: `@sidekickicons/svelte/24/outline`
- 24x24 solid: `@sidekickicons/svelte/24/solid`
- 20x20 solid: `@sidekickicons/svelte/20/solid`
- 16x16 solid: `@sidekickicons/svelte/16/solid`

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@sidekickicons/dist/svelte/24/outline/)

The imported components are simple Svelte components that accept the `class` prop. The component already includes the `size-6`, `size-5`, or `size-4` class, so the `class` adds any additional classes you want to apply.

### Rails

In Rails, you can use Heroicons and Sidekickicons using [Rails Icons](https://github.com/Rails-Designer/rails_icons).

First, add the gem:

```bash
bundle add rails_icons
```

Then, install the icons:

```bash
rails generate rails_icons:install --libraries=heroicons
rails generate rails_icons:install --libraries=sidekickicons
```

Now you can use the icons in your code. The default library is Heroicons and you need to specify Sidekickicons. The available variants are `outline` (default), `solid`, `mini`, and `micro`.

```ruby
# Heroicons beaker icon, outline 24px
icon "beaker"
# Heroicons beaker icon, solid 24px
icon "beaker", variant: "solid"
# Sidekickicons crown icon, outline 24px
icon "crown", library: "sidekickicons"
# Sidekickicons crown icon, mini 20px
icon "crown", library: "sidekickicons", variant: "mini"
```

## Contributing

Feel free to suggest icons in an issue or create a pull request with your own icons.

I will create a better contribution guide in the future.

## License

This library is MIT licensed.

The repository is forked from [Heroicons](https://github.com/tailwindlabs/heroicons) and the tooling from there is unchanged. The license for the files from that repository is included in the [HEROICONS-LICENSE](HEROICONS-LICENSE) file.

The icons themselves have been replaced and are not affiliated with Tailwind Labs, Inc. The license for the new icons is included in the [LICENSE](LICENSE) file.
