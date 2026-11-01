# Tailwind CSS

> 

*Integrate Nord Design Tokens with Tailwind CSS v4 for a modern, utility-first approach to styling your application.*

We provide a Tailwind CSS entry point that maps all Nord Design Tokens to Tailwind theme variables. This allows you to use familiar Tailwind syntax while maintaining design consistency with Nord. All utilities use the `n:` prefix (variant syntax) to prevent collisions.

> [!NOTE]
> **Learning Tailwind CSS** For comprehensive documentation on all available utility classes, visit the official [Tailwind CSS documentation](https://tailwindcss.com/docs). This page covers Nord-specific configuration and components—use [tailwindcss.com](https://tailwindcss.com) as your reference for standard utilities like flexbox, grid, spacing, and more.

> [!NOTE]
> **Migrating from Legacy CSS?** See our [Tailwind CSS Migration Guide](/migrations/tailwind/) for a complete mapping of legacy classes to Tailwind equivalents.

## Installation

First, ensure you have [Tailwind CSS v4 installed](https://tailwindcss.com/docs/installation){rel="[\"nofollow\"]" target="_blank"} in your project.

Then install the CSS package:

```bash
npm install @nordhealth/css
```

## Usage

Import the Tailwind entry in your main CSS file:

```css
@import "@nordhealth/css/tailwind";
```

All Tailwind utilities are prefixed with `n:` to prevent collisions with other frameworks:

```html
<div class="n:flex n:gap-4 n:p-6 n:bg-surface n:rounded">
  <span class="n:text-default n:font-sans">Hello World</span>
</div>
```

> [!WARNING]
> **Prefix syntax** Tailwind v4 uses variant-style prefixes. Write `n:flex` not `n-flex`. The colon is required.

## Peer Dependencies

The Tailwind entry requires `tailwindcss ^4.0.0` as a peer dependency.

---

## Theme Variables

The Tailwind entry maps all Nord Design Tokens to Tailwind theme variables. For the full list of available utilities, see the [Tailwind CSS documentation](https://tailwindcss.com/docs){rel="[\"nofollow\"]" target="_blank"}.

| Category              | Nord Values                                                                                                                                         | Example                                                                                                                                                                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Spacing**           | Numeric multiples of `0.25rem`, plus fixed `px`                                                                                                     | `n:p-0`, `n:p-4`, `n:px-6`, `n:py-2`, `n:ps-4`, `n:pe-6`, `n:pbs-2`, `n:pbe-4`, `n:m-9`, `n:mx-auto`, `n:my-6`, `n:ms-2`, `n:me-4`, `n:mbs-6`, `n:mbe-9`, `n:-m-2`, `n:-ms-4`, `n:-mbs-6`, `n:gap-4`, `n:gap-x-2`, `n:gap-y-6`, `n:p-px` |
| **Text Colors**       | `default`, `link`, `weak`, `weaker`, `weakest`, `on-accent`, `error`, `danger`, `success`, `neutral`, `warning`, `highlight`, `info`, `nav-heading` | `n:text-default`, `n:text-weak`, `n:text-error`                                                                                                                                                                                          |
| **Background Colors** | `default`, `surface`, `surface-raised`, `surface-lowered`, `header`, `status-*`, `button`, `button-hover`, `overlay`, `nav-surface`, `nav-hover`    | `n:bg-surface`, `n:bg-nav-surface`, `n:bg-status-success`                                                                                                                                                                                |
| **Border Colors**     | `default`, `strong`, `hover`, `neutral`, `warning`, `danger`, `success`, `info`                                                                     | `n:border-default`, `n:border-hover`                                                                                                                                                                                                     |
| **General Colors**    | `accent`, `accent-secondary`, `active`, `icon`, `icon-hover`                                                                                        | `n:text-accent`, `n:bg-accent`                                                                                                                                                                                                           |
| **Font Sizes**        | `xs`, `s`, `m`, `l`, `xl`, `xxl`, `xxxl`                                                                                                            | `n:text-m`, `n:text-xl`, `n:lg:text-xxxl`                                                                                                                                                                                                |
| **Font Families**     | `sans`, `mono`                                                                                                                                      | `n:font-sans`, `n:font-mono`                                                                                                                                                                                                             |
| **Font Weights**      | `default`, `active`, `heading`, `strong`                                                                                                            | `n:font-default`, `n:font-heading`, `n:font-strong`                                                                                                                                                                                      |
| **Line Heights**      | `tight`, `heading`, `default`, `caption`                                                                                                            | `n:leading-tight`, `n:leading-heading`, `n:leading-default`, `n:leading-caption`                                                                                                                                                         |
| **Border Radius**     | `sharp`, `s`, `default`, `pill`, `circle`                                                                                                           | `n:rounded-default`, `n:rounded-s`, `n:rounded-pill`, `n:rounded-circle`                                                                                                                                                                 |
| **Shadows**           | `default`, `card`, `header`, `nav`, `popout`, `modal`                                                                                               | `n:shadow-default`, `n:shadow-card`, `n:shadow-popout`, `n:shadow-modal`                                                                                                                                                                 |
| **Z-Index**           | `deep`, `default`, `sticky`, `nav`, `overlay`, `popout`, `modal`                                                                                    | `n:z-deep`, `n:z-default`, `n:z-sticky`, `n:z-overlay`, `n:z-popout`, `n:z-modal`                                                                                                                                                        |
| **Breakpoints**       | `xxs`, `xs`, `s`, `m`, `l`, `xl`                                                                                                                    | `n:xxs:flex`, `n:xs:grid`, `n:m:hidden`, `n:l:block`, `n:xl:flex`                                                                                                                                                                        |

This covers also all hover, focus, breakpoints and other states, see [hover, focus and other states](https://tailwindcss.com/docs/hover-focus-and-other-states){rel="[\"nofollow\"]" target="_blank"} and [responsive design](https://tailwindcss.com/docs/responsive-design){rel="[\"nofollow\"]" target="_blank"} for more information.

## Spacing

Prefer Tailwind's numeric spacing scale for new code. Each step is `0.25rem`: `n:p-2` adds `0.5rem` padding and `n:gap-4` adds a `1rem` gap. Fractional steps such as `n:gap-0.5` are supported too.

Use the built-in `px` suffix for exactly one CSS pixel: `n:p-px`, `n:gap-px`, `n:ms-px` and `n:-ms-px`. Unlike numeric spacing, this step does not scale with the root font size.

```html
<div class="n:flex n:gap-4 n:p-6">
  <span class="n:p-px">One-pixel padding</span>
</div>
```

Tailwind's spacing base is the source of truth. It is always exported as `--n-spacing`, so native CSS and inline styles can use `calc(var(--n-spacing) * 2)` for the same spacing as `n:p-2`.

The `--n-space-*` variables and named spacing utilities such as `n:p-s` are deprecated but remain available by default throughout the 5.x release series. In the Tailwind entry point, their defaults now derive from the same base: `--n-space-s` is `calc(var(--n-spacing) * 2)`. Both named and numeric spacing scale with the root font size and global Tailwind theme customisations. Individual legacy token overrides still affect legacy consumers, but do not change numeric utilities. Font sizes, icon sizes, border radii and component size APIs are unaffected.

See the [numeric spacing migration guide](/migrations/tailwind/#numeric-spacing) for the mapping, opt-in ESLint fixes, CSS replacements and compatibility guidance.

## Logical Properties

Tailwind CSS v4 provides built-in logical property utilities. Most padding, margin, sizing, border, and inset utilities use their TW4 built-in names. We provide additional custom utilities for cases TW4 doesn't cover:

| Category          | Utilities                                                                | Example                             | Notes                           |
| ----------------- | ------------------------------------------------------------------------ | ----------------------------------- | ------------------------------- |
| **Padding**       | `ps-*`, `pe-*`, `pbs-*`, `pbe-*`, `px-*`, `py-*`                         | `n:ps-4` (start), `n:px-6` (inline) | TW4 built-in                    |
| **Margin**        | `ms-*`, `me-*`, `mbs-*`, `mbe-*`, `mx-*`, `my-*`                         | `n:ms-auto`, `n:my-4`               | TW4 built-in                    |
| **Sizing**        | `inline-*`, `block-*`, `min-inline-*`, `max-inline-*`                    | `n:inline-full`, `n:max-inline-9`   | TW4 built-in                    |
| **Borders**       | `border-s`, `border-e`, `border-bs`, `border-be`, `border-x`, `border-y` | `n:border-s`                        | TW4 built-in                    |
| **Space Between** | `space-x-*`, `space-y-*`                                                 | `n:space-x-4`                       | TW4 built-in (uses logical CSS) |
| **Insets**        | `inset-bs-*`, `inset-be-*`, `start-*`, `end-*`                           | `n:inset-bs-4`                      | TW4 built-in                    |

## Typography Examples

Use Tailwind's [typography utilities](https://tailwindcss.com/docs/font-size){rel="[\"nofollow\"]" target="_blank"} with Nord font sizes and weights.

```html
<!-- Font sizes -->
<p class="n:text-xxxl">.n:text-xxxl - The quick brown fox</p>
<p class="n:text-xxl">.n:text-xxl - The quick brown fox</p>
<p class="n:text-xl">.n:text-xl - The quick brown fox</p>
<p class="n:text-l">.n:text-l - The quick brown fox</p>
<p class="n:text-m">.n:text-m - The quick brown fox</p>
<p class="n:text-s">.n:text-s - The quick brown fox</p>
<p class="n:text-xs">.n:text-xs - The quick brown fox</p>

<hr class="n:divider" />

<!-- Font weights -->
<p class="n:font-default">.n:font-default - The quick brown fox</p>
<p class="n:font-active">.n:font-active - The quick brown fox</p>
<p class="n:font-heading">.n:font-heading - The quick brown fox</p>
<p class="n:font-strong">.n:font-strong - The quick brown fox</p>

<hr class="n:divider" />

<!-- Font families -->
<p class="n:font-sans">.n:font-sans - The quick brown fox jumps over the lazy dog</p>
<p class="n:font-mono">.n:font-mono - The quick brown fox jumps over the lazy dog</p>

<hr class="n:divider" />

<!-- Line heights -->
<p class="n:text-l n:leading-tight">
  .n:leading-tight - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi
  voluptatibus.
</p>
<p class="n:text-l n:leading-heading">
  .n:leading-heading - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi
  voluptatibus.
</p>
<p class="n:text-l n:leading-default">
  .n:leading-default - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi
  voluptatibus.
</p>
<p class="n:text-l n:leading-caption">
  .n:leading-caption - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi
  voluptatibus.
</p>

<hr class="n:divider" />

<!-- Text alignment -->
<p class="n:text-left">.n:text-left - Aligned to the left</p>
<p class="n:text-center">.n:text-center - Centered text</p>
<p class="n:text-right">.n:text-right - Aligned to the right</p>

<hr class="n:divider" />

<!-- Text transform -->
<p class="n:uppercase">.n:uppercase - the quick brown fox</p>
<p class="n:lowercase">.n:lowercase - THE QUICK BROWN FOX</p>
<p class="n:capitalize">.n:capitalize - the quick brown fox</p>

<hr class="n:divider" />

<!-- Text wrapping and overflow -->
<div class="n:max-w-xs n:truncate">.n:truncate - This text will be truncated with an ellipsis when it overflows</div>
<div class="n:max-w-xs n:break-words">.n:break-words - Thisisaverylongwordthatwillbreakwhenneeded</div>
```

[View typography examples](/tailwind/examples/typography/)

---

## Color Examples

Use Tailwind's [color utilities](https://tailwindcss.com/docs/text-color){rel="[\"nofollow\"]" target="_blank"} with Nord semantic colors.

```html
<!-- Text colors -->
<p class="n:text-default">.n:text-default - Default text color</p>
<p class="n:text-weak">.n:text-weak - Weak text color</p>
<p class="n:text-weaker">.n:text-weaker - Weaker text color</p>
<p class="n:text-weakest">.n:text-weakest - Weakest text color</p>
<p class="n:text-link">.n:text-link - Link text color</p>
<p class="n:text-error">.n:text-error - Error text color</p>
<p class="n:text-danger">.n:text-danger - Danger text color</p>
<p class="n:text-success">.n:text-success - Success text color</p>
<p class="n:text-warning">.n:text-warning - Warning text color</p>
<p class="n:text-info">.n:text-info - Info text color</p>
<p class="n:text-highlight">.n:text-highlight - Highlight text color</p>
<p class="n:text-progress">.n:text-progress - Progress text color</p>

<hr class="n:divider" />

<!-- Background colors - surfaces -->
<div class="n:bg-surface n:p-m">.n:bg-surface</div>
<div class="n:bg-default n:p-m">.n:bg-default</div>
<div class="n:bg-surface-raised n:p-m">.n:bg-surface-raised</div>
<div class="n:bg-surface-lowered n:p-m">.n:bg-surface-lowered</div>

<hr class="n:divider" />

<!-- Background colors - status -->
<div class="n:bg-status-neutral n:p-m n:text-on-accent">.n:bg-status-neutral</div>
<div class="n:bg-status-warning n:p-m">.n:bg-status-warning</div>
<div class="n:bg-status-highlight n:p-m n:text-on-accent">.n:bg-status-highlight</div>
<div class="n:bg-status-danger n:p-m n:text-on-accent">.n:bg-status-danger</div>
<div class="n:bg-status-success n:p-m n:text-on-accent">.n:bg-status-success</div>
<div class="n:bg-status-info n:p-m n:text-on-accent">.n:bg-status-info</div>
<div class="n:bg-status-progress n:p-m n:text-on-accent">.n:bg-status-progress</div>

<hr class="n:divider" />

<!-- Background colors - status weak -->
<div class="n:bg-status-neutral-weak n:p-m">.n:bg-status-neutral-weak</div>
<div class="n:bg-status-warning-weak n:p-m">.n:bg-status-warning-weak</div>
<div class="n:bg-status-highlight-weak n:p-m">.n:bg-status-highlight-weak</div>
<div class="n:bg-status-danger-weak n:p-m">.n:bg-status-danger-weak</div>
<div class="n:bg-status-success-weak n:p-m">.n:bg-status-success-weak</div>
<div class="n:bg-status-info-weak n:p-m">.n:bg-status-info-weak</div>
<div class="n:bg-status-progress-weak n:p-m">.n:bg-status-progress-weak</div>

<hr class="n:divider" />

<!-- Border colors -->
<div class="n:border n:border-default n:p-m">.n:border-default</div>
<div class="n:border n:border-strong n:p-m">.n:border-strong</div>
<div class="n:border n:border-danger n:p-m">.n:border-danger</div>
<div class="n:border n:border-success n:p-m">.n:border-success</div>
<div class="n:border n:border-warning n:p-m">.n:border-warning</div>
<div class="n:border n:border-info n:p-m">.n:border-info</div>

<hr class="n:divider" />

<!-- Accent colors -->
<div class="n:bg-accent n:p-m n:text-on-accent">.n:bg-accent</div>
<div class="n:text-accent">.n:text-accent - Accent text color</div>
```

[View color examples](/tailwind/examples/colors/)

---

## Border Examples

Use Tailwind's [border utilities](https://tailwindcss.com/docs/border-radius){rel="[\"nofollow\"]" target="_blank"} with Nord border radius and colors.

```html
<!-- Border radius -->
<div class="n:rounded-sharp n:border n:border-default n:p-m">.n:rounded-sharp</div>
<div class="n:rounded-s n:border n:border-default n:p-m">.n:rounded-s</div>
<div class="n:rounded-default n:border n:border-default n:p-m">.n:rounded-default</div>
<div class="n:rounded-pill n:border n:border-default n:p-m">.n:rounded-pill</div>
<div class="n:flex n:size-icon-xxl n:items-center n:justify-center n:rounded-circle n:border n:border-default n:p-m">
  .n:rounded-circle
</div>

<hr class="n:divider" />

<!-- Border widths -->
<div class="n:border n:border-default n:p-m">.n:border (1px)</div>
<div class="n:border-2 n:border-default n:p-m">.n:border-2 (2px)</div>
<div class="n:border-4 n:border-default n:p-m">.n:border-4 (4px)</div>

<hr class="n:divider" />

<!-- Border sides -->
<div class="n:border-t n:border-default n:p-m">.n:border-t (top only)</div>
<div class="n:border-r n:border-default n:p-m">.n:border-r (right only)</div>
<div class="n:border-b n:border-default n:p-m">.n:border-b (bottom only)</div>
<div class="n:border-l n:border-default n:p-m">.n:border-l (left only)</div>

<hr class="n:divider" />

<!-- Border with colors -->
<div class="n:border n:border-danger n:p-m">.n:border-danger</div>
<div class="n:border n:border-success n:p-m">.n:border-success</div>
<div class="n:border n:border-warning n:p-m">.n:border-warning</div>
<div class="n:border n:border-info n:p-m">.n:border-info</div>
<div class="n:border n:border-highlight n:p-m">.n:border-highlight</div>
```

[View border examples](/tailwind/examples/borders/)

---

## Shadow Examples

Use Tailwind's [shadow utilities](https://tailwindcss.com/docs/box-shadow){rel="[\"nofollow\"]" target="_blank"} with Nord shadow values.

```html
<!-- Box shadows -->
<div class="n:rounded-default n:bg-surface n:p-l n:shadow-default">.n:shadow-default</div>

<hr class="n:divider" />

<div class="n:rounded-default n:bg-surface n:p-l n:shadow-card">.n:shadow-card</div>

<hr class="n:divider" />

<div class="n:rounded-default n:bg-surface n:p-l n:shadow-header">.n:shadow-header</div>

<hr class="n:divider" />

<div class="n:rounded-default n:bg-surface n:p-l n:shadow-nav">.n:shadow-nav</div>

<hr class="n:divider" />

<div class="n:rounded-default n:bg-surface n:p-l n:shadow-popout">.n:shadow-popout</div>

<hr class="n:divider" />

<div class="n:rounded-default n:bg-surface n:p-l n:shadow-modal">.n:shadow-modal</div>
```

[View shadow examples](/tailwind/examples/shadows/)

---

## Miscellaneous Utilities

Additional Nord-specific utilities:

- `n:divider` - Horizontal divider line
- `n:caption` - Secondary text styling for captions

```html
<!-- Divider -->
<p>Content above divider</p>
<hr class="n:divider" />
<p>Content below divider</p>

<hr class="n:divider" />

<!-- Caption -->
<p class="n:caption">.n:caption - Secondary text for captions and metadata</p>
<p>Regular paragraph text for comparison</p>
```

[View misc examples](/tailwind/examples/misc/)

---

## Nord Components

These components are unique to Nord and style their children automatically.

### Reset

The `n:reset` class normalizes child elements to a sensible default, applying Nord's typography settings and resetting margins, padding, and borders.

```html
<div class="n:reset">
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

[View reset example](/tailwind/examples/reset/)

---

### Typeset

The `n:typeset` class styles all child text elements for rich content areas like articles or documentation.

```html
<div class="n:typeset">
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

[View typeset example](/tailwind/examples/typeset/)

---

### Description List

The `n:dl` class styles description lists for presenting key/value data.

```html
<!-- Description list component -->
<dl class="n:dl">
  <dt>Name</dt>
  <dd>John Smith</dd>
  <dt>Email</dt>
  <dd>john.smith@example.com</dd>
  <dt>Role</dt>
  <dd>Software Engineer</dd>
  <dt>Department</dt>
  <dd>Engineering</dd>
  <dt>Location</dt>
  <dd>Helsinki, Finland</dd>
</dl>
```

[View description list example](/tailwind/examples/descriptionlist/)

---

## Form Utilities

Style form elements with these Nord-specific utilities:

- `n:label` - Form label styling
- `n:hint` - Form hint text
- `n:error` - Form error text
- `n:input` - Base input styling

```html
<!-- Form label -->
<label class="n:label">Email address</label>

<hr class="n:divider" />

<!-- Form hint -->
<span class="n:hint">Enter your work email</span>

<hr class="n:divider" />

<!-- Form error -->
<span class="n:error">This field is required</span>

<hr class="n:divider" />

<!-- Form input -->
<input class="n:input" type="text" placeholder="Enter text..." />

<hr class="n:divider" />

<!-- Complete form field -->
<div class="n:flex n:flex-col n:gap-xs">
  <label class="n:label">Email address</label>
  <input class="n:input" type="email" placeholder="you@example.com" />
  <span class="n:hint">We'll never share your email</span>
</div>

<hr class="n:divider" />

<!-- Form field with error -->
<div class="n:flex n:flex-col n:gap-xs">
  <label class="n:label">Password</label>
  <input class="n:input" type="password" placeholder="Enter password" />
  <span class="n:error">Password must be at least 8 characters</span>
</div>
```

[View form examples](/tailwind/examples/forms/)

---

## Grid

Use Tailwind's [grid utilities](https://tailwindcss.com/docs/grid-template-columns){rel="[\"nofollow\"]" target="_blank"} for layout with numeric spacing values.

```html
<!-- Default 12 column grid -->
<section class="n:mbe-4 n:grid n:grid-cols-12 n:gap-4">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-12</div>
</section>

<!-- Grid with 8 columns -->
<section class="n:mbe-4 n:grid n:grid-cols-8 n:gap-4">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-8</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-8</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-8</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-8</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-8</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-8</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-8</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-8</div>
</section>

<!-- Grid with 6 columns -->
<section class="n:mbe-4 n:grid n:grid-cols-6 n:gap-4">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-6</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-6</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-6</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-6</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-6</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-6</div>
</section>

<!-- Grid with 4 columns -->
<section class="n:mbe-4 n:grid n:grid-cols-4 n:gap-4">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-4</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-4</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-4</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-4</div>
</section>

<!-- Grid with 3 columns -->
<section class="n:mbe-4 n:grid n:grid-cols-3 n:gap-4">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-3</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-3</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-3</div>
</section>

<!-- Grid with 2 columns -->
<section class="n:mbe-4 n:grid n:grid-cols-2 n:gap-4">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2</div>
</section>

<!-- Grid with 1-step gap -->
<section class="n:mbe-4 n:grid n:grid-cols-2 n:gap-1">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 .n:gap-1</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 .n:gap-1</div>
</section>

<!-- Grid with 2-step gap -->
<section class="n:mbe-4 n:grid n:grid-cols-2 n:gap-2">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 .n:gap-2</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 .n:gap-2</div>
</section>

<!-- Grid with 6-step gap -->
<section class="n:mbe-4 n:grid n:grid-cols-2 n:gap-6">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 .n:gap-6</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 .n:gap-6</div>
</section>

<!-- Grid with XL gap -->
<section class="n:mbe-4 n:grid n:grid-cols-2 n:gap-9">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 .n:gap-9</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 .n:gap-9</div>
</section>

<!-- Grid with XXL gap -->
<section class="n:mbe-4 n:grid n:grid-cols-2 n:gap-18">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 .n:gap-18</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 .n:gap-18</div>
</section>

<!-- Grid with no gap (omit gap class) -->
<section class="n:mbe-4 n:grid n:grid-cols-2">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 (no gap)</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-2 (no gap)</div>
</section>

<!-- Grid with auto-centering -->
<section class="n:mx-auto n:mbe-4 n:grid n:grid-cols-3 n:gap-4" style="max-width: 800px">
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:mx-auto (centered)</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:mx-auto (centered)</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:mx-auto (centered)</div>
</section>

<!-- Grid with column span -->
<section class="n:mbe-4 n:grid n:grid-cols-4 n:gap-4">
  <div class="n:col-span-2 n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:col-span-2</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-4</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:grid-cols-4</div>
</section>

<!-- Grid with place-items-center -->
<section
  class="n:mbe-4 n:grid n:grid-cols-3 n:place-items-center n:gap-4"
  style="block-size: calc(var(--n-size-icon-xxl) * 3)"
>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:place-items-center</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:place-items-center</div>
  <div class="n:rounded-s n:border n:border-default n:bg-surface-raised n:p-2">.n:place-items-center</div>
</section>
```

[View grid examples](/tailwind/examples/grid/)

### Container Utilities

Use `n:container` for a centered container with max-width 1200px, or add a size modifier (`n:container-xl`, `n:container-l`, `n:container-m`, `n:container-s`, `n:container-xs`, `n:container-xxs`) for different max-widths:

```html
<!-- Container utilities -->
<div>
  <div class="n:container n:mb-m n:rounded-default n:bg-surface-raised n:p-m">
    <p>.n:container - max-width: 1200px (default)</p>
  </div>

  <div class="n:mb-m n:rounded-default n:bg-surface-raised n:p-m n:container-xl">
    <p>.n:container-xl - max-width: 2400px</p>
  </div>

  <div class="n:mb-m n:rounded-default n:bg-surface-raised n:p-m n:container-l">
    <p>.n:container-l - max-width: 1200px</p>
  </div>

  <div class="n:mb-m n:rounded-default n:bg-surface-raised n:p-m n:container-m">
    <p>.n:container-m - max-width: 1000px</p>
  </div>

  <div class="n:mb-m n:rounded-default n:bg-surface-raised n:p-m n:container-s">
    <p>.n:container-s - max-width: 800px</p>
  </div>

  <div class="n:mb-m n:rounded-default n:bg-surface-raised n:p-m n:container-xs">
    <p>.n:container-xs - max-width: 600px</p>
  </div>

  <div class="n:rounded-default n:bg-surface-raised n:p-m n:container-xxs">
    <p>.n:container-xxs - max-width: 400px</p>
  </div>
</div>
```

[View container examples](/tailwind/examples/container/)

### Breakpoints

Use breakpoint prefixes to apply styles at different screen sizes. Available breakpoints: `xxs` (400px), `xs` (500px), `s` (620px), `m` (840px), `l` (1000px), `xl` (2400px). See [Customizing Breakpoints](#customizing-breakpoints) for how to override these values.

The `n:` prefix always comes first, followed by the breakpoint, then the utility:

```html
<!-- Pattern: n:[breakpoint]:[utility] -->
<div class="n:hidden n:m:block">Hidden on mobile, visible on medium+</div>
<div class="n:text-s n:l:text-xl">Small text, large on l+ screens</div>
```

```html
<!-- Breakpoint examples using container queries so they respond to resize handle -->
<div class="n:@container n:flex n:flex-col n:gap-m">
  <div class="n:rounded-default n:bg-surface-raised n:p-m">
    <p class="n:mb-s n:font-heading">Responsive visibility</p>
    <div class="n:flex n:flex-wrap n:gap-s">
      <span class="n:hidden n:rounded-s n:bg-status-info n:px-s n:py-xs n:text-on-accent n:@xs:inline">xs+</span>
      <span class="n:hidden n:rounded-s n:bg-status-success n:px-s n:py-xs n:text-on-accent n:@s:inline">s+</span>
      <span class="n:hidden n:rounded-s n:bg-status-warning n:px-s n:py-xs n:text-on-accent n:@m:inline">m+</span>
      <span class="n:hidden n:rounded-s n:bg-status-highlight n:px-s n:py-xs n:text-on-accent n:@l:inline">l+</span>
      <span class="n:hidden n:rounded-s n:bg-status-danger n:px-s n:py-xs n:text-on-accent n:@xl:inline">xl+</span>
    </div>
    <p class="n:mt-s n:text-s n:text-weaker">Resize to see badges appear at each breakpoint</p>
  </div>

  <div class="n:rounded-default n:bg-surface-raised n:p-m">
    <p class="n:mb-s n:font-heading">Responsive layout</p>
    <div class="n:flex n:flex-col n:gap-s n:@s:flex-row">
      <div class="n:flex-1 n:rounded-s n:bg-surface n:p-s">Item 1</div>
      <div class="n:flex-1 n:rounded-s n:bg-surface n:p-s">Item 2</div>
      <div class="n:flex-1 n:rounded-s n:bg-surface n:p-s">Item 3</div>
    </div>
    <p class="n:mt-s n:text-s n:text-weaker">Stacks vertically on narrow containers, horizontal on s+ containers</p>
  </div>

  <div class="n:rounded-default n:bg-surface-raised n:p-m">
    <p class="n:mb-s n:font-heading">Responsive spacing</p>
    <div class="n:flex n:gap-xs n:@s:gap-s n:@m:gap-m n:@l:gap-l">
      <div class="n:rounded-s n:bg-surface n:p-s">A</div>
      <div class="n:rounded-s n:bg-surface n:p-s">B</div>
      <div class="n:rounded-s n:bg-surface n:p-s">C</div>
    </div>
    <p class="n:mt-s n:text-s n:text-weaker">Gap increases at each breakpoint</p>
  </div>

  <div class="n:rounded-default n:bg-surface-raised n:p-m">
    <p class="n:mb-s n:font-heading">Responsive text</p>
    <p class="n:text-s n:@s:text-m n:@m:text-l n:@l:text-xl">This text grows with container size</p>
  </div>
</div>
```

[View breakpoint examples](/tailwind/examples/breakpoints/)

### Container Queries

Container queries let you style elements based on the size of their container rather than the viewport. This is useful for reusable components that need to adapt to their context.

Use `n:@container` to define a query container, then use container breakpoint variants like `n:@s:`, `n:@m:`, etc. to apply styles:

```html
<!-- Define a container -->
<div class="n:@container">
  <!-- Styles change based on container width -->
  <div class="n:flex n:flex-col n:@s:flex-row">
    <aside class="n:hidden n:@s:block">Sidebar</aside>
    <main>Content</main>
  </div>
</div>
```

You can also use named containers for more precise control:

```html
<div class="n:@container/sidebar">
  <p class="n:text-s n:@m/sidebar:text-l">Responds to "sidebar" container</p>
</div>
```

| Container Breakpoint | Width         |
| -------------------- | ------------- |
| `@xs`                | 20rem (320px) |
| `@s`                 | 24rem (384px) |
| `@m`                 | 28rem (448px) |
| `@l`                 | 32rem (512px) |
| `@xl`                | 36rem (576px) |

```html
<nord-layout class="n:-m-m">
  <nord-navigation slot="nav">
    <nord-dropdown slot="header" expand>
      <nord-button slot="toggle" expand>
        <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
        Bath Clinic
      </nord-button>
      <nord-dropdown-group heading="laura.williams@nordhealth.com">
        <nord-dropdown-item>
          <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
          Bath Clinic
          <nord-icon slot="end" name="interface-checked"></nord-icon>
        </nord-dropdown-item>
        <nord-dropdown-item>
          <nord-avatar
            slot="start"
            name="Ocean Beach Clinic"
            size="s"
            variant="square"
            style="--n-avatar-color: var(--n-color-status-success)"
          >
            O
          </nord-avatar>
          Ocean Beach Clinic
        </nord-dropdown-item>
        <nord-dropdown-item>
          <nord-avatar
            slot="start"
            name="Park Animal Hospital"
            size="s"
            variant="square"
            style="--n-avatar-color: var(--n-color-status-highlight)"
          >
            P
          </nord-avatar>
          Park Animal Hospital
        </nord-dropdown-item>
        <nord-dropdown-item>
          <nord-avatar
            slot="start"
            name="Balboa Pet Hospital"
            size="s"
            variant="square"
            style="--n-avatar-color: var(--n-color-status-danger)"
          >
            B
          </nord-avatar>
          Balboa Pet Hospital
        </nord-dropdown-item>
      </nord-dropdown-group>
      <nord-dropdown-group>
        <nord-dropdown-item>Add another clinic</nord-dropdown-item>
        <nord-dropdown-item>Customize style</nord-dropdown-item>
      </nord-dropdown-group>
      <nord-dropdown-item>Sign out from all clinics</nord-dropdown-item>
    </nord-dropdown>
    <nord-nav-group heading="Workspace">
      <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
      <nord-nav-item icon="navigation-payments">
        Payments
        <nord-nav-group slot="subnav">
          <nord-nav-item href="#">All transactions</nord-nav-item>
          <nord-nav-item href="#">Payments</nord-nav-item>
          <nord-nav-item href="#">Disputes</nord-nav-item>
        </nord-nav-group>
      </nord-nav-item>
      <nord-nav-item icon="navigation-reports">
        Reports
        <nord-nav-group slot="subnav">
          <nord-nav-item href="#">Payments</nord-nav-item>
          <nord-nav-item href="#">Disputes</nord-nav-item>
          <nord-nav-item href="#">Payouts</nord-nav-item>
        </nord-nav-group>
      </nord-nav-item>
      <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
    </nord-nav-group>
    <nord-dropdown expand slot="footer">
      <nord-button slot="toggle" expand>
        <nord-avatar slot="start" aria-hidden="true" name="Laura Williams"></nord-avatar>
        Laura Williams
      </nord-button>
      <nord-dropdown-group>
        <nord-dropdown-item href="#">View profile</nord-dropdown-item>
        <nord-dropdown-item>Settings</nord-dropdown-item>
      </nord-dropdown-group>
      <nord-dropdown-group>
        <nord-dropdown-item>
          Show keyboard shortcuts
          <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
        </nord-dropdown-item>
        <nord-dropdown-item>Help & Support</nord-dropdown-item>
        <nord-dropdown-item>API</nord-dropdown-item>
      </nord-dropdown-group>
      <nord-dropdown-item>
        Sign out
        <nord-icon slot="end" name="interface-logout"></nord-icon>
      </nord-dropdown-item>
    </nord-dropdown>
  </nord-navigation>
  <nord-header slot="header">
    <h2 class="n:text-l">@Container driven responsive design</h2>
    <nord-button variant="primary" slot="end">
      <nord-icon slot="start" name="interface-add-small"></nord-icon>
      Create new
    </nord-button>
    <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
  </nord-header>
  <nord-stack gap="l">
    <!-- Responsive Grid: n:@container + n:@{breakpoint}:grid-cols-{n} -->
    <nord-card>
      <h3 slot="header">Responsive Grid</h3>
      <p class="n:mb-m n:text-s n:text-weak">
        <code>n:@container</code> defines the query context. <code>n:@s:grid-cols-2</code> and
        <code>n:@l:grid-cols-3</code> adjust columns based on container width.
      </p>
      <div class="n:@container">
        <div class="n:grid n:grid-cols-1 n:gap-m n:@s:grid-cols-2 n:@l:grid-cols-3">
          <div class="n:flex-1 n:rounded-s n:bg-surface-raised n:p-m">
            <h4 slot="header">Revenue</h4>
          </div>
          <div class="n:flex-1 n:rounded-s n:bg-surface-raised n:p-m">
            <h4 slot="header">Appointments</h4>
          </div>
          <div class="n:flex-1 n:rounded-s n:bg-surface-raised n:p-m">
            <h4 slot="header">New Patients</h4>
          </div>
        </div>
      </div>
    </nord-card>

    <!-- Stacking to Horizontal: n:@{breakpoint}:flex-row -->
    <nord-card>
      <h3 slot="header">Stack to Horizontal Layout</h3>
      <p class="n:mb-m n:text-s n:text-weak">
        <code>n:flex-col</code> stacks items vertically by default. <code>n:@s:flex-row</code> switches to horizontal
        when container is wide enough.
      </p>
      <div class="n:@container">
        <div class="n:flex n:flex-col n:gap-m n:@s:flex-row">
          <div class="n:flex-1 n:rounded-s n:bg-surface-raised n:p-m">
            <p class="n:text-s n:font-heading">Left Panel</p>
            <p class="n:text-xs n:text-weak">Stacks on narrow containers</p>
          </div>
          <div class="n:flex-1 n:rounded-s n:bg-surface-raised n:p-m">
            <p class="n:text-s n:font-heading">Right Panel</p>
            <p class="n:text-xs n:text-weak">Side-by-side when wider</p>
          </div>
        </div>
      </div>
    </nord-card>

    <!-- Show/Hide Elements: n:hidden + n:@{breakpoint}:block -->
    <nord-card>
      <h3 slot="header">Conditional Visibility</h3>
      <p class="n:mb-m n:text-s n:text-weak">
        <code>n:hidden n:@m:block</code> hides content on small containers, shows on medium+.
        <code>n:@m:hidden</code> does the opposite.
      </p>
      <div class="n:@container">
        <div class="n:flex n:items-center n:gap-m">
          <div class="n:hidden n:rounded-s n:bg-status-success n:p-s n:text-s n:text-on-accent n:@m:block">
            Visible on medium+ containers
          </div>
          <div class="n:rounded-s n:bg-status-warning n:p-s n:text-s n:text-on-accent n:@m:hidden">
            Visible on small containers only
          </div>
          <div class="n:rounded-s n:bg-surface-raised n:p-s n:text-s">Always visible</div>
        </div>
      </div>
    </nord-card>

    <!-- Typography Changes: n:@{breakpoint}:text-{size} -->
    <nord-card>
      <h3 slot="header">Responsive Typography</h3>
      <p class="n:mb-m n:text-s n:text-weak">
        <code>n:text-l n:@m:text-xl n:@l:text-xxl</code> scales text size based on container width.
      </p>
      <div class="n:@container">
        <p class="n:text-l n:font-heading n:@m:text-xl n:@l:text-xxl">This heading grows with the container</p>
        <p class="n:text-xs n:text-weak n:@s:text-s n:@m:text-m">Body text can also adapt to available space</p>
      </div>
    </nord-card>

    <!-- Named Containers: n:@container/{name} + n:@{breakpoint}/{name}:* -->
    <nord-card>
      <h3 slot="header">Named Containers</h3>
      <p class="n:mb-m n:text-s n:text-weak">
        <code>n:@container/card</code> creates a named container. <code>n:@s/card:flex-row</code> targets that specific
        container.
      </p>
      <div class="n:grid n:grid-cols-1 n:gap-m n:@s:grid-cols-2">
        <div class="n:@container/card n:rounded-s n:bg-surface-raised n:p-m">
          <div class="n:flex n:flex-col n:items-center n:gap-s n:@s/card:flex-row">
            <nord-avatar name="Card A" size="l"></nord-avatar>
            <div>
              <p class="n:font-heading">Card A</p>
              <p class="n:text-xs n:text-weak">Responds to its own container</p>
            </div>
          </div>
        </div>
        <div class="n:@container/card n:rounded-s n:bg-surface-raised n:p-m">
          <div class="n:flex n:flex-col n:items-center n:gap-s n:@s/card:flex-row">
            <nord-avatar name="Card B" size="l"></nord-avatar>
            <div>
              <p class="n:font-heading">Card B</p>
              <p class="n:text-xs n:text-weak">Independent of sibling containers</p>
            </div>
          </div>
        </div>
      </div>
    </nord-card>
  </nord-stack>
</nord-layout>
```

[View container query examples](/tailwind/examples/container-queries/)

---

## States (Hover, Focus, etc.)

Apply styles on hover, focus, and other interactive states. The `n:` prefix comes first, followed by the state:

```html
<!-- Pattern: n:[state]:[utility] -->
<button class="n:bg-surface n:hover:bg-accent">Hover me</button>
<input class="n:border-default n:focus:border-accent" />
```

You can combine states with breakpoints:

```html
<!-- Pattern: n:[state]:[breakpoint]:[utility] or n:[breakpoint]:[state]:[utility] -->
<button class="n:hover:m:bg-accent">Hover effect only on medium+ screens</button>
```

```html
<!-- Hover states -->
<div class="n:flex n:flex-col n:gap-m">
  <div class="n:rounded-default n:bg-surface-raised n:p-m">
    <p class="n:mb-s n:font-heading">Hover states</p>
    <div class="n:flex n:flex-wrap n:gap-s">
      <button
        class="n:cursor-pointer n:rounded-default n:border n:border-default n:bg-surface n:px-m n:py-s n:hover:bg-accent n:hover:text-on-accent"
      >
        n:hover:bg-accent
      </button>
      <button
        class="n:cursor-pointer n:rounded-default n:border n:border-default n:px-m n:py-s n:text-default n:hover:text-accent"
      >
        n:hover:text-accent
      </button>
      <button class="n:cursor-pointer n:rounded-default n:border n:border-default n:px-m n:py-s n:hover:border-accent">
        n:hover:border-accent
      </button>
    </div>
  </div>

  <div class="n:rounded-default n:bg-surface-raised n:p-m">
    <p class="n:mb-s n:font-heading">Focus states</p>
    <div class="n:flex n:flex-wrap n:gap-s">
      <input class="n:input n:focus:border-accent" type="text" placeholder="n:focus:border-accent" />
      <input class="n:input n:focus:ring-2 n:focus:ring-accent" type="text" placeholder="n:focus:ring-accent" />
    </div>
  </div>

  <div class="n:rounded-default n:bg-surface-raised n:p-m">
    <p class="n:mb-s n:font-heading">Active states</p>
    <div class="n:flex n:flex-wrap n:gap-s">
      <button
        class="n:cursor-pointer n:rounded-default n:bg-accent n:px-m n:py-s n:text-on-accent n:active:bg-accent-secondary"
      >
        n:active:bg-accent-secondary
      </button>
    </div>
  </div>

  <div class="n:rounded-default n:bg-surface-raised n:p-m">
    <p class="n:mb-s n:font-heading">Disabled states</p>
    <div class="n:flex n:flex-wrap n:items-center n:gap-s">
      <nord-button class="n:disabled:cursor-not-allowed n:disabled:opacity-50" disabled>
        n:disabled:opacity-50
      </nord-button>
      <nord-input
        class="n:disabled:cursor-not-allowed n:disabled:opacity-50"
        type="text"
        placeholder="n:disabled:opacity-50"
        disabled
        hide-label
      />
    </div>
  </div>

  <div class="n:rounded-default n:bg-surface-raised n:p-m">
    <p class="n:mb-s n:font-heading">Group hover</p>
    <div
      class="n:group n:cursor-pointer n:rounded-default n:border n:border-default n:bg-surface n:p-m n:hover:bg-accent"
    >
      <p class="n:text-default n:group-hover:text-on-accent">
        Hover the card to change this text color (n:group-hover:text-on-accent)
      </p>
    </div>
  </div>
</div>
```

[View state examples](/tailwind/examples/states/)

---

## ESLint Plugin

We provide an ESLint plugin to help enforce Nord CSS best practices and assist with migration from legacy classes.

[View ESLint Plugin documentation](/docs/developer/eslint/)

---

## Extending the Theme

You can extend the theme with your own customizations:

```css
@import "@nordhealth/css/tailwind";

@theme {
  --color-custom: #123456;
  --spacing-custom: 100px;
}
```

### Customizing Breakpoints

Nord provides these default breakpoints:

| Breakpoint | Value    | Pixels (at 16px base) |
| ---------- | -------- | --------------------- |
| `xxs`      | 25rem    | 400px                 |
| `xs`       | 31.25rem | 500px                 |
| `s`        | 38.75rem | 620px                 |
| `m`        | 52.5rem  | 840px                 |
| `l`        | 62.5rem  | 1000px                |
| `xl`       | 150rem   | 2400px                |

To override a breakpoint or add new ones, define them in your own `@theme` block:

```css
@import "@nordhealth/css/tailwind";

@theme {
  /* Override existing breakpoint */
  --breakpoint-m: 48rem; /* 768px */

  /* Add new breakpoints */
  --breakpoint-2xl: 96rem; /* 1536px */
  --breakpoint-3xl: 120rem; /* 1920px */
}
```

Use your custom breakpoints like any other:

```html
<div class="n:hidden n:2xl:block">Only visible on 2xl screens</div>
```

> [!NOTE]
> **Why rem?** Breakpoints use rem units so they scale with the user's browser font size settings, improving accessibility.

---

## Getting support

Need help with Tailwind CSS integration? Please head over to the [Support page](/resources/support/) for more information and ways to contact us.

<!--
Source: https://nordhealth.design/raw/css/tailwind.md
-->
