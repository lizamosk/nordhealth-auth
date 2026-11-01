# CSS Framework

> 

*Nord Design System's original CSS Framework with shorthand utility classes.*

> [!WARNING]
> This is our original CSS framework. For new projects, we recommend using [Tailwind CSS](/css/tailwind/) instead.

## Installation

Before moving further, please make sure you have [Node.js](https://nodejs.org/en/){rel="[\"nofollow\"]"} installed on your machine. You can install the latest version through their website.

If you're planning on using Nord CSS Framework in a project that doesn't yet use [Node Package Manager](https://www.npmjs.com){rel="[\"nofollow\"]"}, you'll have to first create a [package.json](https://docs.npmjs.com/files/package.json){rel="[\"nofollow\"]"} file. To do this, run `npm init` and follow the steps provided. Once finished, you can install the CSS Framework by following these instructions.

### Install using NPM

Run in your project or website root directory (where `package.json` lives):

```bash
npm install @nordhealth/css
```

### Install using Yarn

Run in your project or website root directory (where `package.json` lives):

```bash
yarn add @nordhealth/css
```

### CDN usage

The CSS Framework can be directly used via [Nord CDN](/docs/developer/cdn/), which allows your team to get up and running with minimal additions. The latest version of this framework can be added into your application by adding the below stylesheet `<link>` tag into the `<head>` section of your app:

```html
<link rel="stylesheet" href="https://nordcdn.net/ds/css/3.3.0/nord.min.css" />
```

### Browser support

Nord's CSS Framework is tested in the latest two versions of the following browsers. Our team addresses critical [bug fixes](/resources/support/) in earlier versions based on their severity and impact. If you need to support IE11 or pre-Chromium Edge, this library isn't for you.



---

## Usage

Once you've installed the CSS Framework package into your application, you can copy and paste the below stylesheet `<link>` tag into the `<head>` section of your app after all other stylesheets. This will load the Nord CSS Framework for you:

```html
<link rel="stylesheet" href="[path-to-dir]/nord.min.css" />
```

The above example can be used alongside a copy tasks similar to the one described in our [Webfonts guidelines](/docs/developer/webfonts/#usage). While technically possible, we don't recommend to load this file directly from `node_modules`.

### Import in Sass

To import the CSS Framework into your Sass (`scss`), include this in the beginning of your main partial:

```scss
// Import CSS framework
@import "../../node_modules/@nordhealth/css/lib/nord";
```

You may need to edit the path shown above depending on your setup. If you're using Webpack you can use the following:

```scss
// Import CSS framework
@import "~@nordhealth/css/lib/nord";
```

---

## Utilities

This and the below sections explain each provided utility class in detail. We've tried to strike a balance between readable but brief. We want your code to be readable but not so verbose that spelling errors get in the way.

Utilities begin with full word naming and begin to scope into more specific. For example borders:

- `.n-border`: Application of a 1 pixel solid border from our Design Tokens
- `.n-border-strong`: The same border style but the strong color from our [Design Tokens](/tokens/)
- `.n-border-strong-i`: The same border style again but applying it to the `inline` sides of the element (left and right sides converted to [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties){rel="[\"nofollow\"]"})
- `.n-border-strong-ie`: The same again but applying it to the `inline-end` side of the element (the right side)

The pattern of shorthand lettering for modifiers has been used throughout to signify a specific side(s) of an element or for a specific size from our [Design Tokens](/tokens/), using [our t-shirt sizing](/design/foundations/naming/#sizes) convention (`-xxl`, `-xl`, etc).

---

## Reset utility

The reset utility shown below is designed to be used on the highest level containing element in your markup and will reset the majority of styles to a sensible default.

```html
<div class="n-reset">
  <h1>The quick brown fox jumps over the lazy dog</h1>
  <h2>The quick brown fox jumps over the lazy dog</h2>
  <h3>The quick brown fox jumps over the lazy dog</h3>
  <h4>The quick brown fox jumps over the lazy dog</h4>
  <h5>The quick brown fox jumps over the lazy dog</h5>
  <h6>The quick brown fox jumps over the lazy dog</h6>
  <p>
    Lorem ipsum dolor sit amet <a href="#">consectetur adipisicing</a> elit. Deserunt amet ipsam enim sed sequi
    voluptatibus, culpa explicabo voluptate maxime a, cumque ea reprehenderit ad <code>consequuntur veniam</code>? Fuga
    impedit iste tenetur.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#">Architecto quasi</a>, incidunt eum ad, rerum
    dolorum sequi numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam
    totam.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <h2>The quick brown fox <a href="#">jumps over the</a> lazy dog</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi voluptatibus, culpa
    explicabo voluptate maxime a, cumque ea reprehenderit ad consequuntur veniam? Fuga impedit iste tenetur.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <pre><code>&lt;link rel="stylesheet" href="https://nordcdn.net/ds/tokens/2.0.4/tokens.custom-properties.css" integrity="sha384-XtHi70a2WlH468I3Z4gPGu2ihcHfE7IzpM+bF0cn9nEXAG67YmXsSpBSEYULYC7E" crossorigin="anonymous" /&gt;</code></pre>
  <h3>The quick brown fox jumps over the lazy dog</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi voluptatibus, culpa
    explicabo voluptate maxime a, cumque ea reprehenderit ad consequuntur veniam? Fuga impedit iste tenetur.
  </p>
  <h4>The quick brown fox jumps over the lazy dog</h4>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <h5>The quick brown fox jumps over the lazy dog</h5>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi voluptatibus, culpa
    explicabo voluptate maxime a, cumque ea reprehenderit ad consequuntur veniam? Fuga impedit iste tenetur.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <h6>The quick brown fox jumps over the lazy dog</h6>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <h3>The quick brown fox jumps over the lazy dog</h3>
  <ul>
    <li>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam doloribus. Dolore, eaque. Distinctio
      consequatur alias quae commodi praesentium recusandae libero, voluptate veniam. Commodi, velit ad ex sequi ut
      fugit?
    </li>
    <li>
      Molestias autem suscipit quos debitis. Fugiat asperiores vero unde quo, assumenda culpa iusto aspernatur fuga
      deleniti enim inventore! Ipsam, est. Impedit, illum! Animi eveniet perspiciatis nobis quia autem nam veniam.
    </li>
    <li>
      Aperiam corporis, aspernatur commodi a, quod illo suscipit voluptas similique, possimus odit error natus ex!
      Consequatur perferendis et similique, quo labore delectus autem minus enim aspernatur nesciunt saepe, nihil
      laboriosam.
    </li>
    <li>
      Sed, sunt. Ut, nihil? Odio quidem suscipit harum ea. Pariatur alias error incidunt provident tenetur neque
      accusantium quis, explicabo et quisquam, dignissimos soluta, consectetur sapiente recusandae expedita maiores
      deserunt.
    </li>
    <li>
      Soluta mollitia neque nemo libero ut totam minus enim maxime qui inventore et veniam, alias minima officia
      pariatur magni ipsa deserunt architecto asperiores ex dignissimos, culpa unde. Sint, cupiditate dolor?
    </li>
  </ul>
  <ol>
    <li>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et alias adipisci ut, ipsum quis quisquam deleniti quia,
      laudantium commodi placeat nostrum voluptatibus. Iusto labore voluptatibus dignissimos, sed eum maiores quaerat.
    </li>
    <li>
      Quasi temporibus distinctio maiores, dignissimos ullam quisquam? Dolorem similique consequatur laudantium rem
      perferendis. In sed ipsam nobis earum temporibus, veritatis totam libero atque sint quam, quo quisquam laborum
      est?
    </li>
    <li>
      Consequatur nemo dolorem nobis praesentium. Nisi laudantium pariatur sunt. Quo vitae quis fugit repellendus! Sunt
      ratione velit laborum natus libero. Incidunt dolor suscipit debitis commodi possimus. Soluta repellat unde nihil!
    </li>
    <li>
      Dolore labore, consectetur eaque suscipit molestiae incidunt quos dolorum? Aspernatur odio laudantium temporibus
      at, dolore illum ullam animi in distinctio sint maxime libero itaque, consequuntur eveniet. Doloremque, ipsum
      nesciunt?
    </li>
    <li>
      Tenetur ratione dolores accusamus illum totam, quidem sequi odit pariatur quae id numquam assumenda rem. Odit,
      numquam distinctio, eaque nihil adipisci aliquam similique, facilis mollitia saepe laudantium ea. Harum,
      temporibus.
    </li>
  </ol>
  <dl>
    <dt>Lorem ipsum dolor sit amet consectetur adipisicing elit.</dt>
    <dd>
      Debitis quos exercitationem dolorem vitae doloremque delectus tempore tenetur quaerat maxime totam nihil
      praesentium, quae saepe fuga hic, aliquid, optio repellendus reprehenderit.
    </dd>
    <dt>Lorem ipsum dolor sit amet consectetur adipisicing elit.</dt>
    <dd>
      Pariatur adipisci quas ducimus unde optio incidunt, dolor dolorum ex! Quos at error dolor veniam facere eaque
      possimus ullam perferendis, neque velit?
    </dd>
    <dt>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</dt>
    <dd>
      Velit aspernatur culpa dolore non. Enim cupiditate nihil dignissimos deserunt itaque a quis quibusdam, similique
      sequi voluptatibus, inventore optio asperiores voluptatem sed?
    </dd>
  </dl>
  <h3>The quick brown fox jumps over the lazy dog</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet hic
    <em>officiis natus itaque dicta praesentium laborum</em>, optio <b>reprehenderit quas est nihil</b>, pariatur, porro
    nostrum facere ea molestias debitis quia!
  </p>
  <blockquote>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et illum provident nesciunt a illo sit, dicta labore
      aspernatur neque quibusdam ducimus in earum fugiat corporis doloribus magni praesentium cumque?
    </p>
    <cite>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus tenetur quidem ab libero accusantium
      dolore veniam eveniet recusandae voluptate est fugiat, ex explicabo possimus tempore eos praesentium quaerat quod?
    </cite>
  </blockquote>
  <small>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis debitis dolor quasi, explicabo fuga alias illum
    provident a architecto itaque, dicta nulla ratione, veniam quidem culpa at consequuntur commodi.
  </small>
</div>
```

[View reset examples](/css/examples/reset/)

---

## Typographic utilities

There are two main typographic helpers within the CSS Framework; `.n-typescale` and `.n-typeset`. With these helpers, you can apply the values provided in our [Design Tokens](/tokens/) for [font size](/tokens/#font-size), [weight](/tokens/#font) and [spacing](/tokens/#line-height), without the need to create CSS of your own.

```html
<!-- Typescale -->
<h1 class="n-typescale-xxxl">The quick brown fox</h1>
<h2 class="n-typescale-xxl">The quick brown fox</h2>
<h3 class="n-typescale-xl">The quick brown fox</h3>
<h4 class="n-typescale-l">The quick brown fox</h4>
<h5 class="n-typescale-m">The quick brown fox</h5>
<h6 class="n-typescale-s">The quick brown fox</h6>
```

[View typescale examples](/css/examples/typescale/)

---

Additionally, applying `.n-typeset` to a containing element, will style all of its children text elements which can be useful for laying out typographic foundations.

```html
<div class="n-typeset">
  <h1>The quick brown fox jumps over the lazy dog</h1>
  <h2>The quick brown fox jumps over the lazy dog</h2>
  <h3>The quick brown fox jumps over the lazy dog</h3>
  <h4>The quick brown fox jumps over the lazy dog</h4>
  <h5>The quick brown fox jumps over the lazy dog</h5>
  <h6>The quick brown fox jumps over the lazy dog</h6>
  <p>
    Lorem ipsum dolor sit amet <a href="#">consectetur adipisicing</a> elit. Deserunt amet ipsam enim sed sequi
    voluptatibus, culpa explicabo voluptate maxime a, cumque ea reprehenderit ad <code>consequuntur veniam</code>? Fuga
    impedit iste tenetur.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#">Architecto quasi</a>, incidunt eum ad, rerum
    dolorum sequi numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam
    totam.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <h2>The quick brown fox <a href="#">jumps over the</a> lazy dog</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi voluptatibus, culpa
    explicabo voluptate maxime a, cumque ea reprehenderit ad consequuntur veniam? Fuga impedit iste tenetur.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <pre><code>&lt;link rel="stylesheet" href="https://nordcdn.net/ds/tokens/2.0.4/tokens.custom-properties.css" integrity="sha384-XtHi70a2WlH468I3Z4gPGu2ihcHfE7IzpM+bF0cn9nEXAG67YmXsSpBSEYULYC7E" crossorigin="anonymous" /&gt;</code></pre>
  <h3>The quick brown fox jumps over the lazy dog</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi voluptatibus, culpa
    explicabo voluptate maxime a, cumque ea reprehenderit ad consequuntur veniam? Fuga impedit iste tenetur.
  </p>
  <h4>The quick brown fox jumps over the lazy dog</h4>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <h5>The quick brown fox jumps over the lazy dog</h5>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi voluptatibus, culpa
    explicabo voluptate maxime a, cumque ea reprehenderit ad consequuntur veniam? Fuga impedit iste tenetur.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <h6>The quick brown fox jumps over the lazy dog</h6>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
    numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
  </p>
  <h3>The quick brown fox jumps over the lazy dog</h3>
  <ul>
    <li>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam doloribus. Dolore, eaque. Distinctio
      consequatur alias quae commodi praesentium recusandae libero, voluptate veniam. Commodi, velit ad ex sequi ut
      fugit?
    </li>
    <li>
      Molestias autem suscipit quos debitis. Fugiat asperiores vero unde quo, assumenda culpa iusto aspernatur fuga
      deleniti enim inventore! Ipsam, est. Impedit, illum! Animi eveniet perspiciatis nobis quia autem nam veniam.
    </li>
    <li>
      Aperiam corporis, aspernatur commodi a, quod illo suscipit voluptas similique, possimus odit error natus ex!
      Consequatur perferendis et similique, quo labore delectus autem minus enim aspernatur nesciunt saepe, nihil
      laboriosam.
    </li>
    <li>
      Sed, sunt. Ut, nihil? Odio quidem suscipit harum ea. Pariatur alias error incidunt provident tenetur neque
      accusantium quis, explicabo et quisquam, dignissimos soluta, consectetur sapiente recusandae expedita maiores
      deserunt.
    </li>
    <li>
      Soluta mollitia neque nemo libero ut totam minus enim maxime qui inventore et veniam, alias minima officia
      pariatur magni ipsa deserunt architecto asperiores ex dignissimos, culpa unde. Sint, cupiditate dolor?
    </li>
  </ul>
  <ol>
    <li>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et alias adipisci ut, ipsum quis quisquam deleniti quia,
      laudantium commodi placeat nostrum voluptatibus. Iusto labore voluptatibus dignissimos, sed eum maiores quaerat.
    </li>
    <li>
      Quasi temporibus distinctio maiores, dignissimos ullam quisquam? Dolorem similique consequatur laudantium rem
      perferendis. In sed ipsam nobis earum temporibus, veritatis totam libero atque sint quam, quo quisquam laborum
      est?
    </li>
    <li>
      Consequatur nemo dolorem nobis praesentium. Nisi laudantium pariatur sunt. Quo vitae quis fugit repellendus! Sunt
      ratione velit laborum natus libero. Incidunt dolor suscipit debitis commodi possimus. Soluta repellat unde nihil!
    </li>
    <li>
      Dolore labore, consectetur eaque suscipit molestiae incidunt quos dolorum? Aspernatur odio laudantium temporibus
      at, dolore illum ullam animi in distinctio sint maxime libero itaque, consequuntur eveniet. Doloremque, ipsum
      nesciunt?
    </li>
    <li>
      Tenetur ratione dolores accusamus illum totam, quidem sequi odit pariatur quae id numquam assumenda rem. Odit,
      numquam distinctio, eaque nihil adipisci aliquam similique, facilis mollitia saepe laudantium ea. Harum,
      temporibus.
    </li>
  </ol>
  <dl>
    <dt>Lorem ipsum dolor sit amet consectetur adipisicing elit.</dt>
    <dd>
      Debitis quos exercitationem dolorem vitae doloremque delectus tempore tenetur quaerat maxime totam nihil
      praesentium, quae saepe fuga hic, aliquid, optio repellendus reprehenderit.
    </dd>
    <dt>Lorem ipsum dolor sit amet consectetur adipisicing elit.</dt>
    <dd>
      Pariatur adipisci quas ducimus unde optio incidunt, dolor dolorum ex! Quos at error dolor veniam facere eaque
      possimus ullam perferendis, neque velit?
    </dd>
    <dt>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</dt>
    <dd>
      Velit aspernatur culpa dolore non. Enim cupiditate nihil dignissimos deserunt itaque a quis quibusdam, similique
      sequi voluptatibus, inventore optio asperiores voluptatem sed?
    </dd>
  </dl>
  <h3>The quick brown fox jumps over the lazy dog</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet hic
    <em>officiis natus itaque dicta praesentium laborum</em>, optio <b>reprehenderit quas est nihil</b>, pariatur, porro
    nostrum facere ea molestias debitis quia!
  </p>
  <blockquote>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et illum provident nesciunt a illo sit, dicta labore
      aspernatur neque quibusdam ducimus in earum fugiat corporis doloribus magni praesentium cumque?
    </p>
    <cite>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus tenetur quidem ab libero accusantium
      dolore veniam eveniet recusandae voluptate est fugiat, ex explicabo possimus tempore eos praesentium quaerat quod?
    </cite>
  </blockquote>
  <small>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis debitis dolor quasi, explicabo fuga alias illum
    provident a architecto itaque, dicta nulla ratione, veniam quidem culpa at consequuntur commodi.
  </small>
</div>
```

[View typeset example](/css/examples/typeset/)

---

## Description list utility

Description lists are ideal for presenting key / value pair data. While the `.n-reset` utility helper resets all typographic elements to a manageable default the `.n-dl` utility will style description lists into a much more presentable format.

```html
<dl class="n-dl">
  <dt>Status</dt>
  <dd><mark>Success</mark></dd>
  <dt>Date</dt>
  <dd>Value 2</dd>
  <dt>Amount</dt>
  <dd>50,00&thinsp;€</dd>
  <dt>Payment fee</dt>
  <dd>1,75&thinsp;</dd>
  <dt>Method</dt>
  <dd>Card</dd>
  <dt>Identifier</dt>
  <dd><code>PAY38DL19710O</code></dd>
  <dt>Description</dt>
  <dd>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum adipisci cupiditate deleniti sed perferendis placeat
    nesciunt soluta impedit, animi nisi atque sit at aliquid rem quaerat voluptas excepturi quo qui.
  </dd>
</dl>
```

[View description list example](/css/examples/descriptionlist/)

---

## Font size utilities

Nord [defines its sizing](/design/foundations/naming/#sizes) using t-shirt sizes. This makes it possible for anyone, technical or non-technical, to understand the differences and how they relate to each other. Font sizing follows this same convention to mirror our [Font Size Design Tokens](/tokens/#font-size).

```html
<span class="n-font-size-xxxl">The quick brown fox</span>
<span class="n-font-size-xxl">The quick brown fox</span>
<span class="n-font-size-xl">The quick brown fox</span>
<span class="n-font-size-l">The quick brown fox</span>
<span class="n-font-size-m">The quick brown fox</span>
<span class="n-font-size-s">The quick brown fox</span>
<span class="n-font-size-xs">The quick brown fox</span>
```

[View font size examples](/css/examples/fontsize/)

---

## Font weight utilities

Interfaces are majority text, which is why we've spent a great amount of time fine-tuning our typographic choices. Use the below utilities to set font weights consistently.

```html
<span class="n-font-weight-active">The quick brown fox</span>
<span class="n-font-weight-heading">The quick brown fox</span>
<span class="n-font-weight-strong">The quick brown fox</span>
```

[View font weight examples](/css/examples/fontweight/)

---

## Color utilities

Nord CSS Framework provides not only access to the colors within our [Design Tokens](/tokens/), but also a method of applying these tokens with a reduced risk of error, to ensure you're using the colors as they are intended.

Accent color has been made available in all the most common scenarios; `color`, `background-color` and `fill`.

```html
<!-- Text on accent background -->
<div class="n-color-accent n-color-text-on-accent">Element</div>

<!-- Accent color text -->
<span class="n-color-accent-text">The quick brown fox</span>

<!-- Accent color fill -->
<svg class="n-color-accent-fill" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" />
</svg>

<!-- Accent color stroke -->
<svg class="n-color-accent-stroke" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="none" stroke-width="8" />
</svg>
```

[View color examples](/css/examples/accentcolors/)

---

## Text color utilities

Colors intended for text have been wrapped up in a utility helper for direct application:

```html
<!-- Text colors -->
<span class="n-color-text">The quick brown fox</span>
<span class="n-color-text-weak">The quick brown fox</span>
<span class="n-color-text-weaker">The quick brown fox</span>
<span class="n-color-text-weakest">The quick brown fox</span>
<span class="n-color-accent n-color-text-on-accent">The quick brown fox</span>
<span class="n-color-nav-heading">The quick brown fox</span>

<!-- Status colors -->
<span class="n-color-text-success">The quick brown fox</span>
<span class="n-color-text-error">The quick brown fox</span>
<span class="n-color-text-danger">The quick brown fox</span>
<span class="n-color-text-neutral">The quick brown fox</span>
<span class="n-color-text-neutral-strong">The quick brown fox</span>
<span class="n-color-text-warning">The quick brown fox</span>
<span class="n-color-text-warning-strong">The quick brown fox</span>
<span class="n-color-text-highlight">The quick brown fox</span>

<!-- Link color -->
<a href="#" class="n-color-text-link">Element</a>
```

[View text color examples](/css/examples/textcolors/)

---

## Background color utilities

Colors intended for element backgrounds or surfaces have been scoped into the `background-color` property and can be applied using the following utility helpers:

```html
<!-- Status colors -->
<span class="n-color-status-neutral">.n-color-status-neutral</span>
<span class="n-color-status-warning">.n-color-status-warning</span>
<span class="n-color-status-highlight n-color-text-on-accent">.n-color-status-highlight</span>
<span class="n-color-status-danger n-color-text-on-accent">.n-color-status-danger</span>
<span class="n-color-status-success n-color-text-on-accent">.n-color-status-success</span>
<span class="n-color-status-info n-color-text-on-accent">.n-color-status-info</span>
<span class="n-color-status-notification n-color-text-on-accent">.n-color-status-notification</span>

<!-- Status weak colors -->
<span class="n-color-status-neutral-weak">.n-color-status-neutral-weak</span>
<div class="n-color-status-warning-weak">.n-color-status-warning-weak</div>
<span class="n-color-status-highlight-weak">.n-color-status-highlight-weak</span>
<div class="n-color-status-danger-weak">.n-color-status-danger-weak</div>
<div class="n-color-status-success-weak">.n-color-status-success-weak</div>
<span class="n-color-status-info-weak">.n-color-status-info-weak</span>

<!-- Surface colors -->
<div class="n-color-surface">.n-color-surface</div>
<div class="n-color-surface-raised">.n-color-surface-raised</div>
<div class="n-color-surface-lowered">.n-color-surface-lowered</div>
<div class="n-color-nav-surface">.n-color-nav-surface</div>

<!-- Background color -->
<div class="n-color-background">.n-color-background</div>

<!-- Button colors -->
<div class="n-color-button">.n-color-button</div>
<div class="n-color-button-hover">.n-color-button-hover</div>

<!-- Active color -->
<div class="n-color-active">.n-color-active</div>
```

[View surface and background examples](/css/examples/surfaces/)

---

## Border utilities

Borders have been wrapped up into a series of utility helpers that make use of [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties){rel="[\"nofollow\"]"}, so that your styles continue to work when your application changes languages.

These logical properties translate to different sides depending on the viewers language settings. We've abbreviated these properties into their initials to prevent overly verbose classnames. These abbreviations translate to the following properties in left-to-right languages:

- `-is`: Short for `inline-start`, which is the left side
- `-ie`: Short for `inline-end`, which is the right side
- `-bs`: Short for `block-start`, which is the top side
- `-be`: Short for `block-end`, which is the bottom side
- `-i`: Short for `inline`, which is the left and right sides
- `-b`: Short for `block`, which is the top and bottom side

```html
<!-- Default border -->
<div class="n-border-is">.n-border-is</div>
<div class="n-border-ie">.n-border-ie</div>
<div class="n-border-bs">.n-border-bs</div>
<div class="n-border-be">.n-border-be</div>
<div class="n-border-b">.n-border-b</div>
<div class="n-border-i">.n-border-i</div>
<div class="n-border">.n-border</div>

<!-- Strong border -->
<div class="n-border-strong-is">.n-border-strong-is</div>
<div class="n-border-strong-ie">.n-border-strong-ie</div>
<div class="n-border-strong-bs">.n-border-strong-bs</div>
<div class="n-border-strong-be">.n-border-strong-be</div>
<div class="n-border-strong-b">.n-border-strong-b</div>
<div class="n-border-strong-i">.n-border-strong-i</div>
<div class="n-border-strong">.n-border-strong</div>

<!-- Hover border -->
<div class="n-border-hover-is">.n-border-hover-is</div>
<div class="n-border-hover-ie">.n-border-hover-ie</div>
<div class="n-border-hover-bs">.n-border-hover-bs</div>
<div class="n-border-hover-be">.n-border-hover-be</div>
<div class="n-border-hover-b">.n-border-hover-b</div>
<div class="n-border-hover-i">.n-border-hover-i</div>
<div class="n-border-hover">.n-border-hover</div>

<!-- Default dashed border -->
<div class="n-border-d-is">.n-border-d-is</div>
<div class="n-border-d-ie">.n-border-d-ie</div>
<div class="n-border-d-bs">.n-border-d-bs</div>
<div class="n-border-d-be">.n-border-d-be</div>
<div class="n-border-d-b">.n-border-d-b</div>
<div class="n-border-d-i">.n-border-d-i</div>
<div class="n-border-d">.n-border-d</div>

<!-- Strong dashed border -->
<div class="n-border-strong-d-is">.n-border-strong-d-is</div>
<div class="n-border-strong-d-ie">.n-border-strong-d-ie</div>
<div class="n-border-strong-d-bs">.n-border-strong-d-bs</div>
<div class="n-border-strong-d-be">.n-border-strong-d-be</div>
<div class="n-border-strong-d-b">.n-border-strong-d-b</div>
<div class="n-border-strong-d-i">.n-border-strong-d-i</div>
<div class="n-border-strong-d">.n-border-strong-d</div>

<!-- Hover dashed border -->
<div class="n-border-hover-d-is">.n-border-hover-d-is</div>
<div class="n-border-hover-d-ie">.n-border-hover-d-ie</div>
<div class="n-border-hover-d-bs">.n-border-hover-d-bs</div>
<div class="n-border-hover-d-be">.n-border-hover-d-be</div>
<div class="n-border-hover-d-b">.n-border-hover-d-b</div>
<div class="n-border-hover-d-i">.n-border-hover-d-i</div>
<div class="n-border-hover-d">.n-border-hover-d</div>
```

[View border examples](/css/examples/borders/)

---

## Border radius utilities

Border radius tokens are available as utility helpers to apply rounded corners to elements. If you require more precise control over rounded corners, such as applying them to specific corners, we recommend making use of [our border radius design tokens](/tokens/#border-radius) directly.

```html
<div class="n-padding-m n-border-radius-sharp">.n-border-radius-sharp</div>
<div class="n-padding-m n-border-radius-s">.n-border-radius-s</div>
<div class="n-padding-m n-border-radius">.n-border-radius</div>
<div class="n-padding-m n-border-radius-pill">.n-border-radius-pill</div>
<div
  class="n-padding-m n-stack-horizontal n-border-radius-circle"
  style="max-inline-size: max-content; aspect-ratio: 1"
>
  <span class="n-center">.n-border-radius-circle</span>
</div>
```

[View border radius examples](/css/examples/borderradius/)

---

## Box shadow utilities

Box shadow tokens are designed to help reflect the elevation of a component or element. Larger shadows show that the element is higher and smaller shadows (or no shadow) show that the element is lower. Box shadow utility helpers have been named to reflect their intended purpose, please refer to our [box shadow design tokens](/tokens/#box-shadow) for further information.

```html
<div class="n-padding-m n-color-surface n-box-shadow">.n-box-shadow</div>
<div class="n-padding-m n-color-surface n-box-shadow-header">.n-box-shadow-header</div>
<div class="n-padding-m n-color-surface n-box-shadow-card">.n-box-shadow-card</div>
<div class="n-padding-m n-color-surface n-box-shadow-nav">.n-box-shadow-nav</div>
<div class="n-padding-m n-color-surface n-box-shadow-popout">.n-box-shadow-popout</div>
<div class="n-padding-m n-color-surface n-box-shadow-modal">.n-box-shadow-modal</div>
```

[View box shadow examples](/css/examples/boxshadow/)

---

## Icon utilities

The icon utilities include colors as well as sizes. Sizes have been scoped into `inline-size` and `block-size` properties, while colors have been scoped to the `color` property so that the `currentColor` attribute value can respectively inherit the color.

```html
<!-- Icon color -->
<svg class="n-color-icon" viewBox="0 0 100 100">
  <circle fill="currentColor" cx="50" cy="50" r="40" />
</svg>

<!-- Icon hover color -->
<svg class="n-color-icon-hover" viewBox="0 0 100 100">
  <circle fill="currentColor" cx="50" cy="50" r="40" />
</svg>

<!-- Small icon -->
<svg class="n-size-icon-s" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" />
</svg>

<!-- Medium icon -->
<svg class="n-size-icon-m" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" />
</svg>

<!-- Large icon -->
<svg class="n-size-icon-l" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" />
</svg>
```

[View icon examples](/css/examples/icons/)

---

## Stack utilities

The [Stack component](/components/stack/) manages layout of immediate children along the vertical or horizontal axis with adjustable spacing between each child. The stack utility helpers are designed to provide the same features but with a single class applied to the containing element. The default child spacing is set to `--n-space-m` but can be adjusted using [our gap utilities](#gap-utilities). By default, the stack utility helpers wrap (as opposed to the Stack component), but this can be disabled by adding the `.n-stack-no-wrap` utility helper.

As with the [border utilities](#border-utilities), the shorthand utility modifiers use logical properties. However the Stack utilities are only interested in vertical alignment. They follow this convention:

- `-s`: `start`, which is the top alignment
- `-e`: `end`, which is the bottom alignment

For more fine-grained positioning, you can adjust the `justify-content` property by using one of these utility classes:

- `.n-justify-center`: `justify-content: center;`
- `.n-justify-start`: `justify-content: flex-start;`
- `.n-justify-end`: `justify-content: flex-end;`
- `.n-justify-between`: `justify-content: space-between;`
- `.n-justify-evenly`: `justify-content: space-evenly;`
- `.n-justify-around`: `justify-content: space-around;`

Plus, you can adjust the `align-items` property by using one of these utility classes:

- `.n-items-center`: `align-items: center;`
- `.n-items-start`: `align-items: flex-start;`
- `.n-items-end`: `align-items: flex-end;`
- `.n-items-baseline`: `align-items: baseline;`
- `.n-items-stretch`: `align-items: stretch;`

```html
<!-- Default vertical stack -->
<section class="n-stack">
  <div>.n-stack</div>
  <div>.n-stack</div>
</section>

<hr />

<!-- Vertical stack with XS size gap -->
<section class="n-stack n-gap-xs">
  <div>.n-stack .n-gap-xs</div>
  <div>.n-stack .n-gap-xs</div>
</section>

<hr />

<!-- Vertical stack with S size gap -->
<section class="n-stack n-gap-s">
  <div>.n-stack .n-gap-s</div>
  <div>.n-stack .n-gap-s</div>
</section>

<hr />

<!-- Vertical stack with M size gap (the default) -->
<section class="n-stack">
  <div>.n-stack .n-gap-m</div>
  <div>.n-stack .n-gap-m</div>
</section>

<hr />

<!-- Vertical stack with L size gap -->
<section class="n-stack n-gap-l">
  <div>.n-stack .n-gap-l</div>
  <div>.n-stack .n-gap-l</div>
</section>

<hr />

<!-- Vertical stack with XL size gap -->
<section class="n-stack n-gap-xl">
  <div>.n-stack .n-gap-xl</div>
  <div>.n-stack .n-gap-xl</div>
</section>

<hr />

<!-- Vertical stack with XXL size gap -->
<section class="n-stack n-gap-xxl">
  <div>.n-stack .n-gap-xxl</div>
  <div>.n-stack .n-gap-xxl</div>
</section>

<hr />

<!-- Vertical stack with no gap -->
<section class="n-stack n-gap-none">
  <div>.n-stack .n-gap-none</div>
  <div>.n-stack .n-gap-none</div>
</section>

<hr />

<!-- Horizontal stack with vertical centering (the default) -->
<section class="n-stack-horizontal">
  <div>.n-stack-horizontal</div>
  <div>.n-stack-horizontal<br />.n-stack-horizontal</div>
</section>

<hr />

<!-- Horizontal stack that is vertically aligned to start -->
<section class="n-stack-horizontal-s">
  <div>.n-stack-horizontal-s</div>
  <div>.n-stack-horizontal-s<br />.n-stack-horizontal-s</div>
</section>

<hr />

<!-- Horizontal stack that is vertically aligned to end -->
<section class="n-stack-horizontal-e">
  <div>.n-stack-horizontal-e</div>
  <div>.n-stack-horizontal-e<br />.n-stack-horizontal-e</div>
</section>

<hr />

<!-- Horizontal stack with XS size gap -->
<section class="n-stack-horizontal n-gap-xs">
  <div>.n-stack-horizontal .n-gap-s</div>
  <div>.n-stack-horizontal .n-gap-s</div>
</section>

<hr />

<!-- Horizontal stack with S size gap -->
<section class="n-stack-horizontal n-gap-s">
  <div>.n-stack-horizontal .n-gap-s</div>
  <div>.n-stack-horizontal .n-gap-s</div>
</section>

<hr />

<!-- Horizontal stack with M size gap (the default) -->
<section class="n-stack-horizontal">
  <div>.n-stack-horizontal .n-gap-m</div>
  <div>.n-stack-horizontal .n-gap-m</div>
</section>

<hr />

<!-- Horizontal stack with L size gap -->
<section class="n-stack-horizontal n-gap-l">
  <div>.n-stack-horizontal .n-gap-l</div>
  <div>.n-stack-horizontal .n-gap-l</div>
</section>

<hr />

<!-- Horizontal stack with XL size gap -->
<section class="n-stack-horizontal n-gap-xl">
  <div>.n-stack-horizontal .n-gap-xl</div>
  <div>.n-stack-horizontal .n-gap-xl</div>
</section>

<hr />

<!-- Horizontal stack with XXL size gap -->
<section class="n-stack-horizontal n-gap-xxl">
  <div>.n-stack-horizontal .n-gap-xxl</div>
  <div>.n-stack-horizontal .n-gap-xxl</div>
</section>

<!-- Horizontal stack with no gap -->
<section class="n-stack-horizontal n-gap-none">
  <div>.n-stack-horizontal .n-gap-none</div>
  <div>.n-stack-horizontal .n-gap-none</div>
</section>

<hr />

<!-- Horizontal stack with no wrap -->
<section class="n-stack-horizontal n-stack-no-wrap">
  <div>.n-stack-horizontal .n-stack-no-wrap</div>
  <div>.n-stack-horizontal .n-stack-no-wrap</div>
</section>

<hr />

<!-- Horizontal stack that is horizontally aligned to center -->

<section class="n-stack-horizontal n-justify-center">
  <div>.n-stack-horizontal .n-justify-center</div>
  <div>.n-stack-horizontal .n-justify-center</div>
</section>

<!-- Horizontal stack that is horizontally aligned to end -->

<section class="n-stack-horizontal n-justify-end">
  <div>.n-stack-horizontal .n-justify-end</div>
  <div>.n-stack-horizontal .n-justify-end</div>
</section>

<!-- Horizontal stack that is horizontally spaced between -->

<section class="n-stack-horizontal n-justify-between">
  <div>.n-stack-horizontal .n-justify-between</div>
  <div>.n-stack-horizontal .n-justify-between</div>
</section>

<!-- Horizontal stack that is horizontally spaced evenly -->

<section class="n-stack-horizontal n-justify-evenly">
  <div>.n-stack-horizontal .n-justify-evenly</div>
  <div>.n-stack-horizontal .n-justify-evenly</div>
</section>

<!-- Horizontal stack that is horizontally spaced around -->

<section class="n-stack-horizontal n-justify-around">
  <div>.n-stack-horizontal .n-justify-around</div>
  <div>.n-stack-horizontal .n-justify-around</div>
</section>

<hr />

<!-- Horizontal stack that is vertically aligned to the baseline -->
<section class="n-stack-horizontal n-items-baseline">
  <div class="n-font-size-s">.n-stack-horizontal .n-items-baseline</div>
  <div>.n-stack-horizontal .n-items-baseline<br />.n-stack-horizontal .n-items-baseline</div>
</section>

<!-- Horizontal stack that is vertically aligned to stretch -->
<section class="n-stack-horizontal n-items-stretch">
  <div>.n-stack-horizontal .n-items-stretch</div>
  <div>.n-stack-horizontal .n-items-stretch<br />.n-stack-horizontal .n-items-stretch</div>
</section>

<hr />

<!-- Vertical stack that is vertically aligned to center -->
<section class="n-stack n-justify-center" style="block-size: calc(var(--n-size-icon-xxl) * 3)">
  <div>.n-stack .n-justify-center</div>
  <div>.n-stack .n-justify-center</div>
</section>

<!-- Vertical stack that is vertically aligned to end -->
<section class="n-stack n-justify-end" style="block-size: calc(var(--n-size-icon-xxl) * 3)">
  <div>.n-stack .n-justify-end</div>
  <div>.n-stack .n-justify-end</div>
</section>

<!-- Vertical stack that is vertically spaced between -->

<section class="n-stack n-justify-between" style="block-size: calc(var(--n-size-icon-xxl) * 3)">
  <div>.n-stack .n-justify-between</div>
  <div>.n-stack .n-justify-between</div>
</section>

<!-- Vertical stack that is vertically spaced evenly -->

<section class="n-stack n-justify-evenly" style="block-size: calc(var(--n-size-icon-xxl) * 3)">
  <div>.n-stack .n-justify-evenly</div>
  <div>.n-stack .n-justify-evenly</div>
</section>

<!-- Vertical stack that is vertically spaced around -->

<section class="n-stack n-justify-around" style="block-size: calc(var(--n-size-icon-xxl) * 3)">
  <div>.n-stack .n-justify-around</div>
  <div>.n-stack .n-justify-around</div>
</section>

<hr />

<!-- Vertical stack that is horizontally aligned to start -->
<section class="n-stack n-items-start">
  <div>.n-stack .n-items-start</div>
  <div>.n-stack .n-items-start</div>
</section>

<!-- Vertical stack that is horizontally aligned to end -->
<section class="n-stack n-items-end">
  <div>.n-stack .n-items-end</div>
  <div>.n-stack .n-items-end</div>
</section>

<hr />

<!-- Horizontal stack that is horizontally spaced around and vertically aligned to end -->

<section class="n-stack-horizontal n-justify-around n-items-end" style="block-size: calc(var(--n-size-icon-xxl) * 3)">
  <div>.n-stack-horizontal .n-justify-around .n-items-end</div>
  <div>.n-stack-horizontal .n-justify-around .n-items-end</div>
</section>

<hr />

<!-- Horizontal stack with items that are flexed to 1 -->
<section class="n-stack-horizontal">
  <div class="n-flex-1">.n-flex-1</div>
  <div class="n-flex-1">.n-flex-1</div>
</section>

<hr />

<!-- Horizontal stack with items that are flexed to auto -->
<section class="n-stack-horizontal">
  <div class="n-flex-auto">.n-flex-auto</div>
  <div class="n-flex-auto">.n-flex-auto (with very long content)</div>
</section>
```

[View stack examples](/css/examples/stack/)

---

## Grid and container utilities

Grid and container helper classes are for creating layouts that follow our recommended [grid layouts as shown in our Toolkit](/design/foundations/grid/). The grid utilities can be used alongside the `.n-container` utilities to constrain containers to a desired width. The default child spacing in a grid is set to `--n-space-m` but can be adjusted using [our gap utilities](#gap-utilities).

- `.n-grid`: Provides a set column structure for items to fall into. Items can then be adjusted to fill more grid 'cells' with style properties `grid-column: span 2` or `grid-row: span 2`. In addition there are helpers to align grid items horizontally, vertically or both (`.n-grid-center`). See examples below for all available grid item options
- `.n-container`: Used to contain elements to a fixed width as the browser width grows. These help with [readable line length](/design/foundations/typography/#line-length) as well as providing focus to pages with reduced content. See examples below for all available container width options.

```html
<!-- Default 12 column grid -->
<section class="n-grid">
  <div>.n-grid</div>
  <div>.n-grid</div>
  <div>.n-grid</div>
  <div>.n-grid</div>
  <div>.n-grid</div>
  <div>.n-grid</div>
  <div>.n-grid</div>
  <div>.n-grid</div>
  <div>.n-grid</div>
  <div>.n-grid</div>
  <div>.n-grid</div>
  <div>.n-grid</div>
</section>

<hr />

<!-- Grid with 8 columns -->
<section class="n-grid-8">
  <div>.n-grid-8</div>
  <div>.n-grid-8</div>
  <div>.n-grid-8</div>
  <div>.n-grid-8</div>
  <div>.n-grid-8</div>
  <div>.n-grid-8</div>
  <div>.n-grid-8</div>
  <div>.n-grid-8</div>
</section>

<hr />

<!-- Grid with 6 columns -->
<section class="n-grid-6">
  <div>.n-grid-6</div>
  <div>.n-grid-6</div>
  <div>.n-grid-6</div>
  <div>.n-grid-6</div>
  <div>.n-grid-6</div>
  <div>.n-grid-6</div>
</section>

<hr />

<!-- Grid with 4 columns -->
<section class="n-grid-4">
  <div>.n-grid-4</div>
  <div>.n-grid-4</div>
  <div>.n-grid-4</div>
  <div>.n-grid-4</div>
</section>

<hr />

<!-- Grid with 3 columns -->
<section class="n-grid-3">
  <div>.n-grid-3</div>
  <div>.n-grid-3</div>
  <div>.n-grid-3</div>
</section>

<hr />

<!-- Grid with 2 columns -->
<section class="n-grid-2">
  <div>.n-grid-2</div>
  <div>.n-grid-2</div>
</section>

<hr />

<!-- Grid with XS size gap -->
<section class="n-grid-2 n-gap-xs">
  <div>.n-grid-2 .n-gap-xs</div>
  <div>.n-grid-2 .n-gap-xs</div>
</section>

<hr />

<!-- Grid with S size gap -->
<section class="n-grid-2 n-gap-s">
  <div>.n-grid-2 .n-gap-s</div>
  <div>.n-grid-2 .n-gap-s</div>
</section>

<hr />

<!-- Grid with M size gap (the default) -->
<section class="n-grid-2">
  <div>.n-grid-2</div>
  <div>.n-grid-2</div>
</section>

<hr />

<!-- Grid with L size gap -->
<section class="n-grid-2 n-gap-l">
  <div>.n-grid-2 .n-gap-l</div>
  <div>.n-grid-2 .n-gap-l</div>
</section>

<hr />

<!-- Grid with XL size gap -->
<section class="n-grid-2 n-gap-xl">
  <div>.n-grid-2 .n-gap-xl</div>
  <div>.n-grid-2 .n-gap-xl</div>
</section>

<hr />

<!-- Grid with XXL size gap -->
<section class="n-grid-2 n-gap-xxl">
  <div>.n-grid-2 .n-gap-xxl</div>
  <div>.n-grid-2 .n-gap-xxl</div>
</section>

<hr />

<!-- Grid with no gap -->
<section class="n-grid-2 n-gap-none">
  <div>.n-grid-none .n-gap-none</div>
  <div>.n-grid-none .n-gap-none</div>
</section>

<hr />

<!-- Grid with XL container -->
<section class="n-grid-3 n-container-xl">
  <div>.n-grid-3 .n-container-xl</div>
  <div>.n-grid-3 .n-container-xl</div>
  <div>.n-grid-3 .n-container-xl</div>
</section>

<hr />

<!-- Grid with L container (the default) -->
<section class="n-grid-3 n-container">
  <div>.n-grid-3 .n-container</div>
  <div>.n-grid-3 .n-container</div>
  <div>.n-grid-3 .n-container</div>
</section>

<hr />

<!-- Grid with M container -->
<section class="n-grid-3 n-container-m">
  <div>.n-grid-3 .n-container-m</div>
  <div>.n-grid-3 .n-container-m</div>
  <div>.n-grid-3 .n-container-m</div>
</section>

<hr />

<!-- Grid with S container -->
<section class="n-grid-3 n-container-s">
  <div>.n-grid-3 .n-container-s</div>
  <div>.n-grid-3 .n-container-s</div>
  <div>.n-grid-3 .n-container-s</div>
</section>

<hr />

<!-- Grid with XS container -->
<section class="n-grid-3 n-container-xs">
  <div>.n-grid-3 .n-container-xs</div>
  <div>.n-grid-3 .n-container-xs</div>
  <div>.n-grid-3 .n-container-xs</div>
</section>

<hr />

<!-- Grid with XXS container -->
<section class="n-grid-3 n-container-xxs">
  <div>.n-grid-3 .n-container-xxs</div>
  <div>.n-grid-3 .n-container-xxs</div>
  <div>.n-grid-3 .n-container-xxs</div>
</section>

<hr />

<!-- Grid with custom container -->
<section class="n-grid-3" style="block-size: calc(var(--n-size-icon-xxl) * 3)">
  <div class="n-grid-center-i">.n-grid-center-i</div>
  <div class="n-grid-center-b">.n-grid-center-b</div>
  <div class="n-grid-center">.n-grid-center</div>
</section>
```

When using any of the `n-grid` utility helpers it's also possible to fine tune the grid column count to your needs using the `--n-grid-columns` CSS custom property, however we highly recommend using the existing helpers provided.

[View grid examples](/css/examples/grid/)

---

## Gap utilities

By default both the stack and grid utilities have their child spacing set to [`--n-space-m`](/tokens/#space) to mirror the [Stack component's](/components/stack/) default behaviour. However this can be adjusted using `n-gap-xxl`, `n-gap-xl`, `n-gap-l`, `n-gap-s` or `n-gap-xs` which applies [our spacing tokens](/tokens/#space) as gaps. Using `n-gap-none` will remove the gap entirely.

[View gap examples with stack utilities](/css/examples/stack/)

[View gap examples with grid utilities](/css/examples/grid/)

---

## Spacing utilities

Our [spacing tokens](/tokens/#space) are accessible via the CSS Framework as margin and padding. These are all applied using [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties){rel="[\"nofollow\"]"}, so that your styles continue to work when your application changes languages. These also follow the [t-shirt sizing convention](/design/foundations/naming/#sizes).

![Diagram depicting how classnames are broken down](/img/logical-property-diagram-classnaming.svg)

As with the [border utilities](#border-utilities), the shorthand utility modifiers use logical properties. They follow this convention:

- `-is`: Short for `inline-start`, which is the left side
- `-ie`: Short for `inline-end`, which is the right side
- `-bs`: Short for `block-start`, which is the top side
- `-be`: Short for `block-end`, which is the bottom side
- `-i`: Short for `inline`, which is the left and right sides
- `-b`: Short for `block`, which is the top and bottom side

![Diagram depicting how logical properties correspond to sides of an element](/img/logical-property-diagram-sides.svg)

### Margin

In addition to the [spacing tokens](/tokens/#space) the margin helpers come with "auto" margins. These can be useful for pushing an element to the start or end of a [stack](#stack-utilities) or [grid](#grid-and-container-utilities) as well as centering en element horizontally as well as vertically.

```html
<!-- Margin inline start (left) -->
<div class="n-margin-is-xs">.n-margin-is-xs</div>
<div class="n-margin-is-s">.n-margin-is-s</div>
<div class="n-margin-is-m">.n-margin-is-m</div>
<div class="n-margin-is-l">.n-margin-is-l</div>
<div class="n-margin-is-xl">.n-margin-is-xl</div>
<div class="n-margin-is-xxl">.n-margin-is-xxl</div>

<hr />

<!-- Margin inline end (right) -->
<div class="n-margin-ie-xs">.n-margin-ie-xs</div>
<div class="n-margin-ie-s">.n-margin-ie-s</div>
<div class="n-margin-ie-m">.n-margin-ie-m</div>
<div class="n-margin-ie-l">.n-margin-ie-l</div>
<div class="n-margin-ie-xl">.n-margin-ie-xl</div>
<div class="n-margin-ie-xxl">.n-margin-ie-xxl</div>

<hr />

<!-- Margin block start (top) -->
<div class="n-margin-bs-xs">.n-margin-bs-xs</div>
<div class="n-margin-bs-s">.n-margin-bs-s</div>
<div class="n-margin-bs-m">.n-margin-bs-m</div>
<div class="n-margin-bs-l">.n-margin-bs-l</div>
<div class="n-margin-bs-xl">.n-margin-bs-xl</div>
<div class="n-margin-bs-xxl">.n-margin-bs-xxl</div>

<hr />

<!-- Margin block end (bottom) -->
<div class="n-margin-be-xs">.n-margin-be-xs</div>
<div class="n-margin-be-s">.n-margin-be-s</div>
<div class="n-margin-be-m">.n-margin-be-m</div>
<div class="n-margin-be-l">.n-margin-be-l</div>
<div class="n-margin-be-xl">.n-margin-be-xl</div>
<div class="n-margin-be-xxl">.n-margin-be-xxl</div>

<hr />

<!-- Margin inline (left and right) -->
<div class="n-margin-i-xs">.n-margin-i-xs</div>
<div class="n-margin-i-s">.n-margin-i-s</div>
<div class="n-margin-i-m">.n-margin-i-m</div>
<div class="n-margin-i-l">.n-margin-i-l</div>
<div class="n-margin-i-xl">.n-margin-i-xl</div>
<div class="n-margin-i-xxl">.n-margin-i-xxl</div>

<hr />

<!-- Margin block (top and bottom) -->
<div class="n-margin-b-xs">.n-margin-b-xs</div>
<div class="n-margin-b-s">.n-margin-b-s</div>
<div class="n-margin-b-m">.n-margin-b-m</div>
<div class="n-margin-b-l">.n-margin-b-l</div>
<div class="n-margin-b-xl">.n-margin-b-xl</div>
<div class="n-margin-b-xxl">.n-margin-b-xxl</div>

<hr />

<!-- Margin all sides -->
<div class="n-margin-xs">.n-margin-xs</div>
<div class="n-margin-s">.n-margin-s</div>
<div class="n-margin-m">.n-margin-m</div>
<div class="n-margin-l">.n-margin-l</div>
<div class="n-margin-xl">.n-margin-xl</div>
<div class="n-margin-xxl">.n-margin-xxl</div>

<hr />

<!-- Margin auto -->
<div class="n-margin-i-auto">.n-margin-i-auto</div>
<div class="n-margin-is-auto">.n-margin-is-auto</div>
<div class="n-margin-ie-auto">.n-margin-ie-auto</div>

<section style="display: flex; flex-direction: column; block-size: calc(var(--n-size-icon-xxl) * 3)">
  <div class="n-margin-b-auto">.n-margin-b-auto</div>
  <div class="n-margin-bs-auto">.n-margin-bs-auto</div>
  <div class="n-margin-be-auto">.n-margin-be-auto</div>
</section>

<section style="display: flex; flex-direction: column; block-size: calc(var(--n-size-icon-xxl) * 3)">
  <div class="n-margin-auto">.n-margin-auto</div>
</section>
```

[View margin examples](/css/examples/margin/)

### Padding

```html
<!-- Padding inline start (left) -->
<div class="n-padding-is-xs">.n-padding-is-xs</div>
<div class="n-padding-is-s">.n-padding-is-s</div>
<div class="n-padding-is-m">.n-padding-is-m</div>
<div class="n-padding-is-l">.n-padding-is-l</div>
<div class="n-padding-is-xl">.n-padding-is-xl</div>
<div class="n-padding-is-xxl">.n-padding-is-xxl</div>

<hr />

<!-- Padding inline end (right) -->
<div class="n-padding-ie-xs">.n-padding-ie-xs</div>
<div class="n-padding-ie-s">.n-padding-ie-s</div>
<div class="n-padding-ie-m">.n-padding-ie-m</div>
<div class="n-padding-ie-l">.n-padding-ie-l</div>
<div class="n-padding-ie-xl">.n-padding-ie-xl</div>
<div class="n-padding-ie-xxl">.n-padding-ie-xxl</div>

<hr />

<!-- Padding block start (top) -->
<div class="n-padding-bs-xs">.n-padding-bs-xs</div>
<div class="n-padding-bs-s">.n-padding-bs-s</div>
<div class="n-padding-bs-m">.n-padding-bs-m</div>
<div class="n-padding-bs-l">.n-padding-bs-l</div>
<div class="n-padding-bs-xl">.n-padding-bs-xl</div>
<div class="n-padding-bs-xxl">.n-padding-bs-xxl</div>

<hr />

<!-- Padding block end (bottom) -->
<div class="n-padding-be-xs">.n-padding-be-xs</div>
<div class="n-padding-be-s">.n-padding-be-s</div>
<div class="n-padding-be-m">.n-padding-be-m</div>
<div class="n-padding-be-l">.n-padding-be-l</div>
<div class="n-padding-be-xl">.n-padding-be-xl</div>
<div class="n-padding-be-xxl">.n-padding-be-xxl</div>

<hr />

<!-- Padding inline (left and right) -->
<div class="n-padding-i-xs">.n-padding-i-xs</div>
<div class="n-padding-i-s">.n-padding-i-s</div>
<div class="n-padding-i-m">.n-padding-i-m</div>
<div class="n-padding-i-l">.n-padding-i-l</div>
<div class="n-padding-i-xl">.n-padding-i-xl</div>
<div class="n-padding-i-xxl">.n-padding-i-xxl</div>

<hr />

<!-- Padding block (top and bottom) -->
<div class="n-padding-b-xs">.n-padding-b-xs</div>
<div class="n-padding-b-s">.n-padding-b-s</div>
<div class="n-padding-b-m">.n-padding-b-m</div>
<div class="n-padding-b-l">.n-padding-b-l</div>
<div class="n-padding-b-xl">.n-padding-b-xl</div>
<div class="n-padding-b-xxl">.n-padding-b-xxl</div>

<hr />

<!-- Padding all sides -->
<div class="n-padding-xs">.n-padding-xs</div>
<div class="n-padding-s">.n-padding-s</div>
<div class="n-padding-m">.n-padding-m</div>
<div class="n-padding-l">.n-padding-l</div>
<div class="n-padding-xl">.n-padding-xl</div>
<div class="n-padding-xxl">.n-padding-xxl</div>
```

[View padding examples](/css/examples/padding/)

---

## Miscellaneous utilities

These final utility helpers are due to be expanded upon but at present provide options for truncating lines of text, adding dividers and creating form fields. Multiline truncation is achieved using webkit line clamp, please [check browser compatibility](https://caniuse.com/?search=line-clamp){rel="[\"nofollow\"]"} before using.

```html
<!-- Navigation header icon helpers -->
<div class="n-stack n-stack-horizontal n-gap-s">
  <span class="n-clinic-icon">N</span>
  <span class="n-clinic-icon" style="--n-clinic-icon-color: var(--n-color-status-success)">O</span>
  <span class="n-clinic-icon" style="--n-clinic-icon-color: var(--n-color-status-highlight)">R</span>
  <span class="n-clinic-icon" style="--n-clinic-icon-color: var(--n-color-status-danger)">D</span>
</div>

<!-- Divider -->
<hr class="n-divider" />

<!-- Form helpers -->
<div class="n-stack n-gap-s">
  <label class="n-label" for="input">Label</label>
  <div id="hint" class="n-hint">Hint is a way to provide additional information</div>
  <input id="input" class="n-input" aria-describedby="hint" placeholder="Placeholder text" />
</div>

<!-- Divider -->
<hr class="n-divider" />

<!-- Form error helpers -->
<div class="n-stack n-gap-s">
  <label class="n-label" for="input2">Label</label>
  <input id="input2" class="n-input" aria-invalid="true" aria-describedby="error" value="Value" />
  <div class="n-error" id="error" role="alert">This field is required</div>
</div>

<!-- Sometimes you need to style a wrapper element around an <input> e.g. when using 3rd party libraries -->
<!-- In those cases you can add `n-input` to the wrapper, and use `n-input-invalid` to style the field as invalid -->
<div class="n-stack n-gap-s">
  <label class="n-label" for="input3">Label</label>
  <div class="n-input n-input-invalid">
    <input
      id="input3"
      aria-invalid="true"
      aria-describedby="error3"
      value="Value"
      style="border: none; background: transparent; outline: none; display: block; width: 100%"
    />
  </div>
  <div class="n-error" id="error3" role="alert">This field is required</div>
</div>

<!-- Divider -->
<hr class="n-divider" />

<!-- Counter -->
<div class="n-stack n-stack-horizontal n-gap-s n-color-accent n-color-text-on-accent n-padding-s n-border-radius">
  <span>Label</span>
  <span class="n-counter">12</span>
</div>

<!-- Divider -->
<hr class="n-divider" />

<!-- Single line truncation -->
<span class="n-truncate" style="max-width: 200px">
  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps
  over the lazy dog.
</span>

<!-- Two line truncation -->
<span class="n-truncate-2" style="max-width: 200px">
  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps
  over the lazy dog.
</span>

<!-- Three line truncation -->
<span class="n-truncate-3" style="max-width: 200px">
  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps
  over the lazy dog.
</span>

<!-- Text alignment start -->
<p class="n-align-start">.n-align-start</p>

<!-- Text alignment center -->
<p class="n-align-center">.n-align-center</p>

<!-- Text alignment end -->
<p class="n-align-end">.n-align-end</p>

<!-- Divider -->
<hr class="n-divider" />

<!-- Inline size full -->
<!-- Useful when you need an element to fill its container's width, especially inside constrained containers or flex layouts -->
<div
  style="
    max-width: 400px;
    border: 1px solid var(--n-color-border);
    padding: var(--n-space-m);
    border-radius: var(--n-border-radius-s);
    box-sizing: border-box;
  "
>
  <label class="n-label" for="input4">Input without full width</label>
  <input
    id="input4"
    class="n-input n-margin-bs-s n-margin-be-m"
    placeholder="Default width"
    style="box-sizing: border-box"
  />

  <label class="n-label" for="input5">Input with .n-inline-size-full</label>
  <input
    id="input5"
    class="n-input n-inline-size-full n-margin-bs-s"
    placeholder="Fills container width"
    style="box-sizing: border-box"
  />
</div>
```

[View misc examples](/css/examples/misc/)

---

## CSS custom properties

While we do recommend using components and utility helpers where you can, it's possible to use our design tokens directly in your code to give you finer grain control over your presentation. Our design tokens can be accessed using CSS custom properties (also known as CSS variables). These are the exact same custom properties shown on [our design tokens page](/tokens/).

An example use case could be that you wish to use [our spacing tokens](/tokens/#space) to add margin around an element:

```css
.custom-cta {
  margin: var(--n-space-xxl);
}
```

Another use case could be that you want to apply a [color token](/tokens/#color) to a highlighted piece of text:

```css
mark {
  background: var(--n-color-status-highlight);
}
```

Using our design tokens via CSS custom properties means that not only will these values be kept up to date but they will also change automatically when used in conjunction with [our themes](/themes/).

[View all design tokens](/tokens/)

---

## Getting support

Need help with our CSS Framework? Please head over to the [Support page](/resources/support/) for more information and ways to contact us.

<!--
Source: https://nordhealth.design/raw/docs/developer/css-framework.md
-->
