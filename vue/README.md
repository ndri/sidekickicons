<p align="center">
  <a href="https://heroicons.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ndri/sidekickicons/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/ndri/sidekickicons/HEAD/.github/logo-light.svg">
      <img alt="Heroicons" width="315" height="117" style="max-width: 100%" src="https://raw.githubusercontent.com/ndri/sidekickicons/HEAD/.github/logo-light.svg">
    </picture>
  </a>
</p>

Fanmade icons to complement [Heroicons](https://github.com/tailwindlabs/heroicons).

## Basic Usage

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

## License

This library is MIT licensed.
