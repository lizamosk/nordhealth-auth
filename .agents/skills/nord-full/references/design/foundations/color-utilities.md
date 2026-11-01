# Color Utilities

> 

*Nord Design System includes a collection of color utilities that are meant for creating and maintaining consistent and accessible color palettes.*

Integrating `@nordhealth/color` into your project is straightforward. You can start using our color utilities immediately by adding this tag to the `<head>` of your application:

```html
<script src="https://nordcdn.net/ds/color/3.0.23/index.min.js"></script>
```

With the above script tag added, you now have access to all of Nord’s color utilities via `NordColor` function:

```html
<script>
  const contrastRatio = NordColor.getContrastRatio(textColor, backgroundColor)
  const colorPalette = NordColor.getColorPalette({ hues: 18 })
  const hexToRgb = NordColor.hexToRgb('#3559c7')
  const rgbToHex = NordColor.rgbToHex('rgb(53, 89, 199)')
</script>
```

> [!WARNING]
> Whilst this is a fast way to get started, we recommend using a bundler for production, for optimal performance. For instructions, keep reading below.

---

## Installation

Before moving further with the installation, please make sure you have [Node.js](https://nodejs.org/en/){rel="[\"nofollow\"]"} installed on your machine. You can install the latest version through their website.

If you’re planning on using Nord Design System’s Color Utilities in a project that doesn’t yet use [Node Package Manager](https://www.npmjs.com){rel="[\"nofollow\"]"}, you’ll have to first create a [package.json](https://docs.npmjs.com/files/package.json){rel="[\"nofollow\"]"} file. To do this, run `npm init` and follow the steps provided. Once finished, you can install Nord’s Color Utilities by following the instructions below.

Run in your project or website root directory (where package.json lives):

```bash
# With npm
npm install @nordhealth/color

# With pnpm
pnpm install @nordhealth/color

# With Yarn
yarn add @nordhealth/color
```

Once installed, you can import the necessary tools from the color package:

```js
// Import one utility
import { getContrastRatio } from '@nordhealth/color'
```

```js
// Import all utilities
import { getColorPalette, getContrastRatio, hexToRgb, rgbToHex } from '@nordhealth/color'
```

---

## Contrast Ratio utility

`getContrastRatio` utility calculates and returns the contrast ratio between two CSS colors. Most commonly used for calculating the contrast between text and background. Please note that the utility expects the input color to be in `HEX` or `RGB` format:

```js
// Get contrast ratio between two colors
const textColor = '#fafafa'
const backgroundColor = '#fafafa'

const contrastRatio = getContrastRatio(textColor, backgroundColor)
```

This utility can be be used to determine whether a certain color combination passes the color contrast requirements (4.5:1 or higher contrast). We’re utilizing it in our [Design Tokens documentation](/tokens/) to determine accessible color combinations.

---

## Color Palette utility

`getColorPalette` utility takes a valid CSS color as the base which is used for generating complementary colors. This utility is meant for creating and maintaining consistent and accessible color palettes. We use it internally to develop our existing Figma color palettes and to test new color variations:

```js
// Generate a color palette with 18 hues
const colorPalette = getColorPalette({ hues: 18 })
```

This utility can be be used to for example [generate status colors programmatically](/color-generator/){target="_blank"}. Combined with `getTextColor` utility you can make sure that generated color combinations stay accessible.

`getColorPalette` also allows you to set the number of color hues, number of shades, the amount of lightness, and whether gray is included or not:

```js
// Generate a color palette with 12 hues and 1 shade
getColorPalette({ hues: 12, shades: 1 })

// Generate a color palette with 12 hues, 1 shade and a gray hue
getColorPalette({ hues: 12, shades: 1, gray: true })

// Generate a color palette with 12 hues and 1 shade, based on a custom accent color
getColorPalette({ hues: 12, shades: 1, accent: '#2a469d' })

// Generate a color palette with 12 hues and 1 shade, with custom lightness
getColorPalette({ hues: 12, shades: 1, lightness: 0.7 })
```

Here’s a list of all available options with their default values:

```js
getColorPalette({
  accent: nColorAccent, // {String}  Valid CSS color to be used as the base for calculations
  hues: 12, // {Number}  How many hues should be generated based on the accent color
  shades: 1, // {Number}  How many shades of each hue should be generated
  lightness: 0.5, // {Number}  Controls the overall lightness of color palettes (0-1)
  gray: false // {Boolean} Whether or not to include a specific gray palette
})
```

---

## Hex to RGB utility

`hexToRgb` utility converts a HEX color to a RGB color:

```js
// Convert hex to rgb
const hex = '#3559c7'
const rgb = hexToRgb(hex) // outputs "rgb(53, 89, 199)"
```

---

## RGB to HEX utility

`rgbToHex` utility converts a RGB color to a HEX color:

```js
// Convert rgb to hex
const rgb = 'rgb(53, 89, 199)'
const hex = rgbToHex(rgb) // outputs "#3559c7"
```

For more examples, see [Nord Color Generator](/color-generator/){target="_blank"}.

---

## Color generator

[Nord Color Generator](/color-generator/) is a tool that generates color palettes program­matically for use with [Nord Themes](/design/themes/). While this tool demonstrates the capabilities of the color utilities found from `@nordhealth/color` package, it also acts as an internal tool for our team. We use it to develop our existing color palettes and test new color variations.

**[Color Generator](/color-generator)** - Updated 28.4.2025

---

## Getting support

Have a question about color usage? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

<!--
Source: https://nordhealth.design/raw/design/foundations/color-utilities.md
-->
