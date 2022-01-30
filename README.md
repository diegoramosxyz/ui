# @ramosdiego/ui

Easily generate fully styled buttons, input elements and badges with any [default TailwindCSS color](https://tailwindcss.com/docs/customizing-colors) or custom color.

The styles include hover, focus and disabled states, as well as, dark and light modes.

## Install

With NPM

```bash
npm install @ramosdiego/ui
```

With yarn

```bash
yarn add @ramosdiego/ui
```

## Getting started

Add `@ramosdiego/ui` to your TailwindCSS configuration.

```js
// tailwind.config.js
module.exports = {
  content: [],
  ...
  plugins: [require('@ramosdiego/ui')()],
}
```

## Syntax

You have access to the following classes.

```bash
# Buttons
btn-{color}-{fill|outline|ghost}{-dark}

# Inputs
input-{color}-{outline|underline}{-dark}

# Badges
badge-{color}-{fill|outline}{-dark}
```

Here are some examples using these classes in code:

```html
<!-- Buttons -->
<button class="btn-rose-outline">A rose button</button>

<button disabled class="btn-myTotallyCustomColor-fill-dark">
  A myTotallyCustomColor button
</button>

<!-- Inputs -->
<input placeholder="Enter name" class="input-blue-underline-dark" />

<input type="search" placeholder="Search" class="input-violet-outline" />

<!-- Badges -->
<span class="badge-green-outline-dark">Cash Money</span>

<div class="badge-pink-fill">Certified certificate of certification</div>
```

## Adding custom colors

`@ramosdiego/ui` takes the colors from your TailwindCSS configuration, as such, there are two possible scenarios.

**1. Your config file extends tailwindcss colors**

```js
// tailwind.config.js
module.exports = {
  content: [],
  ...
  theme: {
    extend: {
      colors: {
        brown: {
            50: '#fdf8f6',
            100: '#f2e8e5',
            200: '#eaddd7',
            300: '#e0cec7',
            400: '#d2bab0',
            500: '#bfa094',
            600: '#a18072',
            700: '#977669',
            800: '#846358',
            900: '#43302b',
        },
      },
    },
  },
  plugins: [
    require('@ramosdiego/ui')(),
  ],
}
```

In this scenario you'll have access to all tailwindcss colors, plus your custom colors, such that:

```html
<button class="btn-blue-fill-dark">A blue button</button>

<button class="btn-myTotallyCustomColor-fill-dark">
  A myTotallyCustomColor button
</button>
```

are both valid.

**2. Your config file overrides tailwindcss colors**

```js
// tailwind.config.js
module.exports = {
  content: [],
  ...
  theme: {
    colors: {
        brown: {
            50: '#fdf8f6',
            100: '#f2e8e5',
            200: '#eaddd7',
            300: '#e0cec7',
            400: '#d2bab0',
            500: '#bfa094',
            600: '#a18072',
            700: '#977669',
            800: '#846358',
            900: '#43302b',
        },
    },
  },
  plugins: [
    require('@ramosdiego/ui')(),
  ],
}
```

In this scenario you'll only have access to your custom colors, such that:

```html
<button class="btn-myTotallyCustomColor-fill">
  A myTotallyCustomColor button
</button>
```

is valid.

In both scenarios your colors MUST conform to tailwindcss default color's type:

```ts
// A tailwindcss color
[x: string]: {
    {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
    }
}
```

Your colors may contain any other values, but they must include all these values.

## Customizing design

### Adding custom global styles

`@ramosdiego/ui` has some default styles for each kind of element. You may want to modify them to adjust to your project. For example, if you want all elements to NOT have rounded corners you can set the following global style in your `@ramosdiego/ui` config.

Note: Use [CSS-in-JS syntax](https://tailwindcss.com/docs/plugins#css-in-js-syntax) to set up your configuration.

- Using TailwindCSS `theme()` function. `theme()` is used to look up values in the user’s theme configuration.

```js
// tailwind.config.js
module.exports = {
  content: [],
  ...
  plugins: [require('@ramosdiego/ui')({
      // Add custom global base styles using `theme()`
      globalStyles: ({ theme }) => ({
        fontWeight: theme('fontWeight[bold]'),
        fontSize: theme('fontSize[xl]'),
      }),
)],
}
```

- Using CSS values

```js
// tailwind.config.js
module.exports = {
  content: [],
  ...
  plugins: [require('@ramosdiego/ui')({
      // Add custom global base styles using css
      globalStyles: {
        textTransform: 'lowercase',
        fontWeight: 300,
        borderRadius: '10px',
      },
)],
}
```

### Adding custom element styles

You can also set different custom styles for each element type.

- Using TailwindCSS `theme()` function. `theme()` is used to look up values in the user’s theme configuration.

```js
// tailwind.config.js
module.exports = {
  content: [],
  ...
  plugins: [require('@ramosdiego/ui')({
    // Add custom element base styles using `theme()`
  buttons: {
    baseStyles: ({ theme }) => ({
        fontWeight: theme('fontWeight[bold]'),
        fontSize: theme('fontSize[xl]'),
      })
  },
  inputs: {
    baseStyles: ({ theme }) => ({
        fontWeight: theme('fontWeight[DEFAULT]'),
      })
  },
  badges: {
    baseStyles: ({ theme }) => ({
        fontSize: theme('fontSize[sm]'),
      })
  }
)],
}
```

- Using CSS values

```js
// tailwind.config.js
module.exports = {
  content: [],
  ...
  plugins: [require('@ramosdiego/ui')({
    // Add custom element base styles using css
  buttons: {
    baseStyles: {
        textTransform: 'uppercase',
        borderRadius: '10px',
      }
  },
  inputs: {
    baseStyles: {
        textTransform: 'lowercase',
        borderRadius: '0px',
      }
  },
  badges: {
    baseStyles: {
        textTransform: 'normal-case',
        borderRadius: '20px',
      }
  }
)],
}
```

If you include both, custom global styles and element styles, the element styles will override any overlapping values from your global styles.

```js
// tailwind.config.js
module.exports = {
  content: [],
  ...
  plugins: [require('@ramosdiego/ui')({
    globalStyles: {
        textTransform: 'lowercase',
    },
    buttons: {
        baseStyles: {
            textTransform: 'uppercase',
            borderRadius: '10px',
        }
    }
)],
}
```

With this configuration buttons will have `text-transform: uppercase;` while inputs and badges have `text-transform: lowercase;`.

## Extra features

You can choose to animate buttons when they are pressed.

```js
// tailwind.config.js
module.exports = {
  content: [],
  ...
  plugins: [require('@ramosdiego/ui')({
    buttons: {
        animate: true
    }
)],
}
```

You can choose to between three button presets.

```js
// tailwind.config.js
module.exports = {
  content: [],
  ...
  plugins: [require('@ramosdiego/ui')({
    buttons: {
        animate: true,
        preset: 'playful',
        // OR
        preset: 'elegant',
        // OR DEFAULT
    }
)],
}
```

To choose the default preset, DO NOT set a preset.

# Types

Here are all the options available to `@ramosdiego/ui`.

`require('@ramosdiego/ui')(options: PluginOptions)`

```ts
type UserStyles = ({ theme }: { theme: Helpers['theme'] }) =>
  | {
      [x: string]: any
    }
  | { [x: string]: any }

type PluginOptions =
  | {
      globalStyles?: UserStyles
      buttons?: {
        animate?: boolean
        preset?: 'playful' | 'elegant'
        baseStyles?: UserStyles
      }
      inputs?: {
        baseStyles?: UserStyles
      }
      badges?: {
        baseStyles?: UserStyles
      }
    }
  | undefined
```
