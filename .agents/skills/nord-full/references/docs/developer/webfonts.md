# Webfonts

> Install and use Nord's webfonts package to bring consistent typography to your application.

*Get started with Nord Design System’s Webfonts that are designed to be used in combination with our CSS Framework to provide a consistent look and feel across all of our products.*

## Integration

Integrating Nord Design System’s Webfonts into your project is straightforward. You can start using our webfonts immediately by adding the below tag to the `<head>` of your application.

```html
<link rel="stylesheet" href="https://nordcdn.net/ds/fonts/3.0.4/fonts.css" />
```

While not recommended for normal use, you can also self-host Nord Design System’s Webfonts by following the instructions below. This might be required in cases where your application is running inside a sandboxed environment or similar.

> [!WARNING]
> Please note that in most cases you will want to install our [CSS Framework](/docs/developer/css-framework/) instead of Webfonts package directly. CSS Framework imports this package internally and gives you wide range of shorthand utility classes to modify an element's appearance in your application.

---

## Installing Webfonts

Before moving further with the installation, please make sure you have [Node.js](https://nodejs.org/en/){rel="[\"nofollow\"]"} installed on your machine. You can install the latest version through their website.

If you’re planning on using Nord Design System’s Webfonts in a project that doesn’t yet use [Node Package Manager](https://www.npmjs.com){rel="[\"nofollow\"]"}, you’ll have to first create a [package.json](https://docs.npmjs.com/files/package.json){rel="[\"nofollow\"]"} file. To do this, run `npm init` and follow the steps provided. Once finished, you can install Nordhealth’s Fonts by following the instructions below.

### Install using NPM

Run in your project or website root directory (where package.json lives):

```bash
npm install @nordhealth/fonts
```

### Install using Yarn

Run in your project or website root directory (where package.json lives):

```bash
yarn add @nordhealth/fonts
```

---

## Usage

Nord Design System’s Webfonts ship with font files and CSS to self-host them. While you can use [Webpack](https://webpack.github.io/){rel="[\"nofollow\"]"} or similar build tool to require the fonts, the easiest way is to install `copyfiles` NPM package and copy the files over:

```bash
npm install copyfiles --save-dev
```

Once installed, add a script to your package.json that copies the fonts from our package into a location you’ve specified:

```jsonc
"scripts": {
  "copy:fonts": "copyfiles --flat node_modules/@nordhealth/fonts/lib/* src/SPECIFY_YOUR_PATH"
}
```

You can call this script while starting up your app to make sure you’ve always got the latest fonts copied over. If you're using an UNIX-like environment, you can use `&` as the separator:

```jsonc
"start": "copy:fonts & dev"
```

Otherwise, if you need a cross-platform solution, use [npm-run-all module](https://www.npmjs.com/package/npm-run-all){rel="[\"nofollow\"]"}:

```jsonc
"start": "npm-run-all copy:fonts dev"
```

### Import in SCSS

Once you have fonts installed, you can import them in your project. Nord Design System’s Webfonts provide both SCSS and Less helpers to do this. To import the fonts in SCSS, include this in the beginning of your main SCSS partial:

```scss
// Sets correct path to font files
$nord-font-path: '/assets/fonts';

// Import fonts
@import '../../node_modules/@nordhealth/fonts/lib/fonts.scss';
```

You may need to edit the paths shown above depending on your setup. If you’re using Webpack, you can further simplify the above to:

```scss
// Sets correct path to font files
$nord-font-path: '/assets/fonts';

// Import fonts
@import '~@nordhealth/fonts/lib/fonts.scss';
```

Nord Design System’s Webfonts also provide a way to control the font loading technique using [CSS font-display](https://developer.mozilla.org/en-US/Web/CSS/@font-face/font-display){rel="[\"nofollow\"]"}. This allows you to adjust the load performance of your app:

```scss
// Change the font loading technique
// auto, block, swap, fallback, optional
$nord-font-display: auto;
```

> [!WARNING]
> When you've imported the fonts in your project, you should use the font-families and font-weights defined in [Design Tokens](/tokens/) as its API and naming conventions match the ones used in Nord Design System's Webfonts package.

### Import in Less

To import fonts in Less, include this in the beginning of your main Less partial:

```less
// Sets correct path to font files
@nord-font-path: '/assets/fonts';

// Import fonts
@import '../../node_modules/@nordhealth/fonts/lib/fonts.less';
```

### Import in CSS

You can also import fonts in plain CSS directly from the [Nord CDN](/docs/developer/cdn/). Include this in the beginning of your head:

```html
<link rel="stylesheet" href="https://nordcdn.net/ds/fonts/3.0.4/fonts.css" />
```

---

## Can I use the Webfonts in my own project?

Nord Design System is solely meant for building digital products and experiences for [Nordhealth](https://nordhealth.com){rel="[\"nofollow\"]"}. Please see the [terms of use](/resources/terms/) for full license details.

---

## Getting support

Need help with our Webfonts? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

<!--
Source: https://nordhealth.design/raw/docs/developer/webfonts.md
-->
