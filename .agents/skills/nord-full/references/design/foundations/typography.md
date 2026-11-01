# Typography

> 

*Nord Design System provides a constrained, purposeful set of typographic styles that we use to present user interface and content as clearly and efficiently as possible.*

![Nord Webfonts](/img/type.svg){height="981" width="1584"}---

## Typographic scale

We use the following typographic scale to communicate visual hierarchy in text and to create a predictable sizing for headers and text content. Our typographic scale is purposefully harmonious with our [spacing scale](/tokens/#space). The base font-size is 14px.







| Category                                                         | Size             | Difference | Size token                |
| ---------------------------------------------------------------- | ---------------- | ---------- | ------------------------- |
| <div className="[\"n-typescale-xxxl\"]">  Typescale XXXL  </div> | 36px (2.25rem)   | +12px      | `var(--n-font-size-xxxl)` |
| <div className="[\"n-typescale-xxl\"]">  Typescale XXL  </div>   | 24px (1.5rem)    | +4px       | `var(--n-font-size-xxl)`  |
| <div className="[\"n-typescale-xl\"]">  Typescale XL  </div>     | 20px (1.25rem)   | +4px       | `var(--n-font-size-xl)`   |
| <div className="[\"n-typescale-l\"]">  Typescale L  </div>       | 16px (1rem)      | +2px       | `var(--n-font-size-l)`    |
| <div className="[\"n-typescale-m\"]">  Typescale M  </div>       | 14px (0.875rem)  | 0          | `var(--n-font-size-m)`    |
| <div className="[\"n-typescale-s\"]">  Typescale S  </div>       | 12px (0.75rem)   | -2px       | `var(--n-font-size-s)`    |
| <div className="[\"n-typescale-xs\"]">  Typescale XS  </div>     | 11px (0.6875rem) | -1px       | `var(--n-font-size-xs)`   |
| <div className="[\"n-typescale-xxs\"]">  Typescale XXS  </div>   | 10px (0.625rem)  | -2px       | `var(--n-font-size-xxs)`  |







## Line length

Set the reading environment to suit the reader. Shorter lines are usually more comfortable to the reader. As the line length increases, the user’s eye has to travel further from the end of one line to the beginning of the next, making it harder to track their progress vertically. Aim for an average line length of 50–90 characters, including spaces.

Please keep in mind that our users can control the application layout width, meaning that a line length can not always be specified. For this reason, it’s good practice to design for an ideal line length range, and use responsive design techniques to anticipate different contexts.

![Nord line length](/img/line-length.svg)---

## Tables

For [tables](/components/table/) Nord offers default text styles that provide a legible and accessible typography. Typographic treatment should be consistent across all tables to create a cohesive language. The font size is large enough for users to read comfortably, and the font weight and color should be appropriate for the type of data in each table cell.

![Table text](/img/table-text.png){className="[\"n-border\",\"n-border-radius\"]"}

![Table headers](/img/table-headers.png){className="[\"n-border\",\"n-border-radius\"]"}

![Table deemphasized text](/img/table-deemphasized-text.png){className="[\"n-border\",\"n-border-radius\"]"}

![Table status text](/img/table-status-text.png){className="[\"n-border\",\"n-border-radius\"]"}---

## Brand typography

We use a typeface called Armin Grotesk for almost everything related to Nordhealth brand and marketing — from banner ads to print materials. This typeface should not be used for application UIs where we use a typeface called Inter.

![Nordhealth brand type](/img/brand/typography.svg){style="max-width: 1000px;"}[Download typeface](https://drive.google.com/file/d/1pkgxdEF8SVtw-gNvAXwwOzpu49PnL0F9/view?usp=sharing)

---

## Product typography

For digital products, we use a typeface called Inter which is carefully crafted and designed for computer screens specifically. It features a tall x-height to aid in readability of mixed-case and lower-case text. Several OpenType features are provided as well, like contextual alternates and slashed zero for when you need to disambiguate "0" from "O".

![Nordhealth product type](/img/inter.svg)[Download typeface](/assets/nordhealth/nord-ui-typeface.zip)

---

## Font stacks

We use sans serif fonts for most of our type in digital products, the only exception being when you want to display code.

#### Sans serif font stack:

```css
font-family:
  'Nordhealth Sans',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Helvetica,
  Arial,
  sans-serif,
  'Apple Color Emoji',
  'Segoe UI Emoji';
```

#### Code font stack:

```css
font-family: 'Nordhealth Mono', monospace, monospace;
```

---

## Punctuation

Punctuation matters because it conveys pause and effect to the reader, and mastering it walks the fine line between a skill for typographers and a skill for copywriters. The most common mistake we often see is using a neutral or straight quote symbol in place of an apostrophe:

> **Do:** This’ll do nicely.

> **Don't:** Please don't do this.

Always use smart quotation marks and put commas and periods inside the quotation:

> **Do:** “It’s a ‘magic’ sock.”

> **Don't:** "It's a 'magic' sock".

Use multiplication sign, minus sign and plus sign correctly:

> **Do:** 1 × 0.5 − 0 = ½

> **Don't:** 1 X 0.5 - 0 = 1/2

Use correct units of measurement symbols:

> **Do:** Temperature °C

> **Don't:** Temperature C

Use real trademark and copyright symbols:

> **Do:** © 2015 Corp™

> **Don't:** (c) 2015 Corp (TM)

When writing pixel dimensions, use times sign:

> **Do:** 1024×768

> **Don't:** 1024X768

Use the prime and double prime instead of quotation marks to specify inches and feet:

> **Do:** Steve Jobs is 6′ 10″

> **Don't:** Steve Jobs is 6' 10"

Use em dash (`&mdash;`) and thin spaces (`&thinsp;`) to make a break between parts of a sentence:

> **Do:** A typeface — and thus a whole text — looks

> **Don't:** A typeface - and thus a whole text - looks

use en dash (`&ndash;`) and thin spaces (`&thinsp;`) when indicating a range of values:

> **Do:** 1880 – 1912

> **Don't:** 1880 - 1912

Use ellipsis instead of three periods to indicate an omission:

> **Do:** from a … to z

> **Don't:** from a . . . to z

---

## Getting support

Need help with typography? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

<!--
Source: https://nordhealth.design/raw/design/foundations/typography.md
-->
