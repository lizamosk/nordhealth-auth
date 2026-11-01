# nord-number-field

> Number Field is a control for entering a numeric value, with decrement and
> increment stepper buttons, optional drag-to-scrub, and locale-aware
> formatting. It ports the behaviour of Base UI's Number Field: arrow/Page
> stepping, Home/End to the bounds, press-and-hold auto-repeat, optional
> wheel/scrub, clamping, and <code>Intl.NumberFormat</code> formatting.
> 
> Number Field is a control only — it has no built-in label, hint or error.
> Compose it inside a <a href="/components/field/">Field</a> with a
> <a href="/components/field-label/">Field Label</a> to give it a label, hint and error,
> the same way you would a native input.
> 
> FORM PARTICIPATION: the value is submitted as the raw numeric string under the
> host <code>name</code> via <code>FormDataController</code> (the inner input has no <code>name</code>, avoiding a
> double submit). Unlike Base UI there is no hidden native number input, and —
> like the other new Nord controls — Number Field does NOT use
> <code>ElementInternals</code>, so it performs no native constraint validation: <code>required</code>,
> <code>min</code>, <code>max</code> and <code>step</code> are NOT enforced as form-blocking validity. <code>min</code>/<code>max</code>
> govern interactive stepping and (unless <code>allow-out-of-range</code> is set) clamp the
> value; <code>required</code> only surfaces as <code>required</code>/<code>aria-required</code> on the inner input
> for assistive technology. Authors must validate constraints themselves and
> reflect failures via <code>invalid</code> and a <code>nord-field-error</code>.
> 
> ACCESSIBILITY NOTE: the inner control is a text input (with <code>inputmode</code>) and
> <code>aria-roledescription="Number field"</code>, NOT <code>role="spinbutton"</code> and NOT a
> native <code>type="number"</code>. A text input lets us show locale-formatted text
> (currency, percent, grouping) while keeping full text editing — assistive tech
> reads the formatted value from the input's text. We do NOT add
> <code>aria-valuenow</code>/<code>valuemin</code>/<code>valuemax</code>/<code>valuetext</code>: those are only valid on a
> range role (e.g. <code>spinbutton</code>/<code>slider</code>) and would fail <code>aria-allowed-attr</code>
> validation on a text input. This mirrors what Base UI's <code>NumberFieldInput</code>
> actually ships (only <code>aria-roledescription</code>).

## Usage

Number Field is a **control only** — it has no built-in label, hint or error. Pair it with a [Field](/components/field/) to give it a label, helper text and an error message, exactly like a native input. Connect the [Field Label](/components/field-label/) to the number field with the `for` attribute so it gets an accessible name and click-to-focus.

Import the number field and the Field parts you need — each import registers its custom element:

```js
import '@nordhealth/components/lib/NumberField'
import '@nordhealth/components/lib/Field'
import '@nordhealth/components/lib/FieldLabel'
import '@nordhealth/components/lib/FieldDescription'
import '@nordhealth/components/lib/FieldError'
```

Then compose the Field around the number field:

```html
<nord-field>
  <nord-field-label for="amount">Amount</nord-field-label>
  <nord-number-field id="amount"></nord-number-field>
  <nord-field-description>Enter an amount between 1 and 100.</nord-field-description>
  <!-- show a Field Error and mark the Field invalid instead, when validation fails -->
</nord-field>
```

Read and write the value with the `value` property — it is a `number` (or `null` when empty), not a string:

```js
const field = document.querySelector('nord-number-field')
field.value = 42
field.addEventListener('input', () => console.log(field.value))
```

Constrain and format the field with the `min`, `max`, `step` and `format` options. `format` takes [`Intl.NumberFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat){rel="[\"nofollow\"]"} and is set as a property:

```js
field.min = 0
field.max = 1000
field.format = { style: 'currency', currency: 'EUR' }
```

Number Field renders in the light DOM, so you can style it directly with your own CSS or Tailwind utilities, and size it by setting a width on the field (or on its Field).

### Keyboard, buttons and scrubbing

- **Arrow keys** step by `step`; **Shift+Arrow** and **PageUp/PageDown** step by `large-step`; **Alt+Arrow** steps by `small-step`. **Home** and **End** jump to `min` and `max` when those are set.
- The **stepper buttons** support press-and-hold to auto-repeat. They are `tabindex="-1"`, so keyboard users step via the input while touch and assistive-technology users can still tap the buttons.
- Enable `scrub` to add a drag handle, or `allow-wheel-scrub` to change the value with the mouse wheel while the input is focused.

### Accessibility

The inner control is a text input with `inputmode`, carrying `aria-roledescription="Number field"` — **not** `role="spinbutton"` and **not** a native `type="number"`. This lets it display locale-formatted text (currency, percent, grouping) while keeping full text editing; assistive technology reads the formatted value straight from the input's text. The form value is submitted as the raw numeric string under the host `name`; the inner input has no `name`, so there is no double submit.

> **Do:** - Use for entering a single numeric value, such as a quantity, price, percentage or duration.
- Pair it with a [Field](/components/field/) and a [Field Label](/components/field-label/) connected with `for`, so it has an accessible name, helper text and an error message.
- Set `min`, `max` and `step` to constrain the value, and `format` to display it in the user's locale (currency, percent, grouping).
- Use `scrub` or `allow-wheel-scrub` when fine-grained, fast adjustment is helpful, such as in design tools.

> **Don't:** - Don’t use for non-numeric input, see [Input](/components/input/) instead.
- Don’t use for choosing from a fixed list of values, see [Select](/components/select/) or [Combobox](/components/combobox/) instead.
- Don’t add a Field Label without a `for` pointing at the number field’s `id`, or the control will have no accessible name.
- Don’t rely on the number field for validation messaging — mark the surrounding [Field](/components/field/) invalid and show a [Field Error](/components/field-error/).

<style>

html pre.shiki code .szBVR, html code.shiki .szBVR{--shiki-default:#D73A49;--shiki-dark:#F97583}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .s9eBZ, html code.shiki .s9eBZ{--shiki-default:#22863A;--shiki-dark:#85E89D}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sJ8bj, html code.shiki .sJ8bj{--shiki-default:#6A737D;--shiki-dark:#6A737D}html pre.shiki code .sj4cs, html code.shiki .sj4cs{--shiki-default:#005CC5;--shiki-dark:#79B8FF}

</style>

## Examples

### Overview

```html
<nord-field class="n:inline-[12rem] n:max-inline-full">
      <nord-field-label for="nf-overview">Amount</nord-field-label>
      <nord-number-field id="nf-overview" scrub value="100"></nord-number-field>
    </nord-field>
```

### Min Max

```html
<nord-field class="n:inline-[16rem] n:max-inline-full">
      <nord-field-label for="nf-minmax">Quantity</nord-field-label>
      <nord-number-field id="nf-minmax" min="0" max="10" value="5"></nord-number-field>
      <nord-field-description>Between 0 and 10</nord-field-description>
    </nord-field>
```

### Currency

```html
<nord-number-field
      label="Price"
      id="nf-currency"
      value="1000"
      .format=${{ style: 'currency', currency: 'EUR' }}
    ></nord-number-field>
```

### Percent

```html
<nord-number-field
      label="Completion"
      id="nf-percent"
      step="0.01"
      value="0.5"
      .format=${{ style: 'percent' }}
    ></nord-number-field>
```

### Locale

```html
<nord-number-field
      label="Betrag"
      id="nf-locale"
      locale="de-DE"
      value="1234.5"
      .format=${{ style: 'currency', currency: 'EUR' }}
    ></nord-number-field>
```

### Wheel Scrub

```html
<nord-field class="n:inline-[16rem] n:max-inline-full">
      <nord-field-label for="nf-wheel">Zoom</nord-field-label>
      <nord-number-field id="nf-wheel" allow-wheel-scrub value="100"></nord-number-field>
      <nord-field-description>Focus the field, then scroll to change the value</nord-field-description>
    </nord-field>
```

### Hide Controls

```html
<nord-field class="n:inline-[16rem] n:max-inline-full">
      <nord-field-label for="nf-hide">Age</nord-field-label>
      <nord-number-field id="nf-hide" hide-controls value="30"></nord-number-field>
    </nord-field>
```

### Disabled

```html
<nord-field class="n:inline-[16rem] n:max-inline-full">
      <nord-field-label for="nf-disabled">Amount</nord-field-label>
      <nord-number-field id="nf-disabled" disabled value="100"></nord-number-field>
    </nord-field>
```

### Readonly

```html
<nord-field class="n:inline-[16rem] n:max-inline-full">
      <nord-field-label for="nf-readonly">Amount</nord-field-label>
      <nord-number-field id="nf-readonly" readonly value="100"></nord-number-field>
    </nord-field>
```

### Invalid

```html
<nord-field invalid class="n:inline-[16rem] n:max-inline-full">
      <nord-field-label for="nf-invalid">Amount</nord-field-label>
      <nord-number-field id="nf-invalid" invalid value="100"></nord-number-field>
      <nord-field-error>Enter a valid amount</nord-field-error>
    </nord-field>
```

### Input Group

```html
<nord-stack direction="horizontal" align-items="end" gap="s" class="n:container-xs">
      <nord-field class="n:flex-1">
        <nord-field-label for="nf-inputgroup">Quantity</nord-field-label>
        <nord-number-field id="nf-inputgroup" min="1" value="1"></nord-number-field>
      </nord-field>
      <nord-button variant="primary">Add to cart</nord-button>
    </nord-stack>
```

### R T L

```html
<div dir="rtl">
      <nord-field class="n:inline-[16rem] n:max-inline-full">
        <nord-field-label for="nf-rtl">الكمية</nord-field-label>
        <nord-number-field id="nf-rtl" value="100"></nord-number-field>
      </nord-field>
    </div>
```

### Standalone

```html
<nord-number-field label="Quantity" hint="How many would you like?" hint-below min="0" value="1"></nord-number-field>
```

### Field

```html
<nord-field>
      <nord-field-label for="quantity">Quantity</nord-field-label>
      <nord-number-field id="quantity" min="0" value="1"></nord-number-field>
      <nord-field-description>How many would you like?</nord-field-description>
    </nord-field>
```

### Custom Format

```html
<nord-field>
      <nord-field-label for="nf-custom-format">Amount</nord-field-label>
      <nord-number-field
        id="nf-custom-format"
        value="1234.5"
        .formatValue=${groupedTwoDecimalFormat}
        .parseValue=${stripGroupsThenParse}
      ></nord-number-field>
      <nord-field-description>Always shown with grouped thousands and two decimals.</nord-field-description>
    </nord-field>
```

### Custom Mask

```html
<nord-field>
      <nord-field-label for="nf-custom-mask-fn">Amount</nord-field-label>
      <nord-number-field
        id="nf-custom-mask-fn"
        locale="en-US"
        value="1234.5"
        .format=${{ maximumFractionDigits: 2 }}
        .mask=${enUsGroupingMask}
      ></nord-number-field>
      <nord-field-description>Thousands are grouped as you type; fractions cap at two digits.</nord-field-description>
    </nord-field>
```

### Start And End Slots

```html
<nord-field class="n:inline-[16rem] n:max-inline-full">
      <nord-field-label for="nf-start-end">Weight</nord-field-label>
      <nord-number-field id="nf-start-end" value="1234">
        <span slot="start">#</span>
        <span slot="end">kg</span>
      </nord-number-field>
      <nord-field-description>Slot content before (start) and after (end) the number, inside the control border.</nord-field-description>
    </nord-field>
```

### Currency Auto Placement

```html
<nord-stack gap="m" class="n:inline-[16rem] n:max-inline-full">
      <nord-field>
        <nord-field-label for="nf-currency-usd">Price (USD, en-US)</nord-field-label>
        <nord-number-field id="nf-currency-usd" hide-controls currency="USD" locale="en-US" value="1234.5"></nord-number-field>
        <nord-field-description>en-US is symbol-first, so $ is placed at the start automatically.</nord-field-description>
      </nord-field>
      <nord-field>
        <nord-field-label for="nf-currency-eur">Preis (EUR, de-DE)</nord-field-label>
        <nord-number-field id="nf-currency-eur" hide-controls currency="EUR" locale="de-DE" value="1234.5"></nord-number-field>
        <nord-field-description>de-DE is symbol-last, so € is placed at the end — same prop, derived from the locale.</nord-field-description>
      </nord-field>
    </nord-stack>
```

### Currency Placement Override

```html
<nord-field class="n:inline-[16rem] n:max-inline-full">
      <nord-field-label for="nf-currency-sek">Pris</nord-field-label>
      <nord-number-field
        id="nf-currency-sek"
        hide-controls
        currency="SEK"
        currency-placement="start"
        locale="sv-SE"
        value="1234.5"
      ></nord-number-field>
      <nord-field-description>SEK trails by default in sv-SE; currency-placement="start" forces it to the leading edge.</nord-field-description>
    </nord-field>
```

### Currency With Mask

```html
<nord-field class="n:inline-[16rem] n:max-inline-full">
      <nord-field-label for="nf-money">Amount</nord-field-label>
      <nord-number-field
        id="nf-money"
        currency="USD"
        locale="en-US"
        hide-controls
        value="1234.5"
        .format=${{ maximumFractionDigits: 2 }}
        .mask=${enUsGroupingMask}
      ></nord-number-field>
      <nord-field-description>Grouped as you type; the currency symbol stays put in its slot.</nord-field-description>
    </nord-field>
```

### Unit And Percent

```html
<nord-stack gap="m" class="n:inline-[16rem] n:max-inline-full">
      <nord-field>
        <nord-field-label for="nf-unit">Weight</nord-field-label>
        <nord-number-field id="nf-unit" value="72">
          <span slot="end">kg</span>
        </nord-number-field>
        <nord-field-description>A unit label is just slotted content — no dedicated prop needed.</nord-field-description>
      </nord-field>
      <nord-field>
        <nord-field-label for="nf-percent-slot">Completion</nord-field-label>
        <nord-number-field id="nf-percent-slot" min="0" max="100" value="50">
          <span slot="end">%</span>
        </nord-number-field>
        <nord-field-description>Percent is the same — slot a "%" after the number.</nord-field-description>
      </nord-field>
    </nord-stack>
```

## API Reference

### Properties

- **value** (`number | null`, default: `null`) — The raw numeric value of the field, or <code>null</code> when empty.

The <code>value</code> attribute may be set as a numeric string in HTML; it is coerced
with a custom converter (<code>Number(v)</code>, <code>NaN -&gt; null</code>).
- **min** (`number | undefined`) — The minimum allowed value. Step interactions and blur-clamping clamp to it,
and the decrement button disables at/below it. Home jumps to it only when it
is finite.
- **max** (`number | undefined`) — The maximum allowed value. Step interactions and blur-clamping clamp to it,
and the increment button disables at/above it. End jumps to it only when it
is finite.
- **step** (`number | 'any'`, default: `1`) — Amount each arrow press / button click / wheel notch changes the value.
<code>'any'</code> disables step semantics (treated as <code>1</code> internally for stepping).
- **large-step** (`number`, default: `10`) — Step used for PageUp/PageDown and Shift+Arrow.
- **small-step** (`number`, default: `0.1`) — Step used when Alt/Option is held with Arrow keys.
- **snap-on-step** (`boolean`, default: `false`) — When <code>true</code>, stepping snaps the value to the nearest multiple of the step.
- **allow-out-of-range** (`boolean`, default: `false`) — When <code>true</code>, direct text entry may go outside <code>min</code>/<code>max</code> without clamping
(so range validation can flag it); step interactions still clamp.
- **integer** (`boolean`, default: `false`) — Restricts the field to whole numbers. The decimal separator can no longer be
typed, pasted or programmatic fractional values are rounded to the nearest
integer, and the built-in <code>mask</code> caps the fraction to zero. The soft keyboard
shows the plain numeric keypad.
- **allow-wheel-scrub** (`boolean`, default: `false`) — When <code>true</code>, scrolling the mouse wheel while focused changes the value.
- **scrub** (`boolean`, default: `false`) — When <code>true</code>, renders a drag handle so the user can click-drag to change the value.
- **locale** (`string | string[] | undefined`) — BCP-47 locale(s) for <code>Intl</code> formatting/parsing. Defaults to the runtime locale.
- **placeholder** (`string | undefined`) — Placeholder text shown when the field is empty.
- **name** (`string | undefined`) — Form field name. The value is submitted under this name via FormDataController.
- **disabled** (`boolean`, default: `false`) — Disables the control.
- **readonly** (`boolean`, default: `false`) — Read-only: the user cannot change the value, but the value is still submitted.
- **invalid** (`boolean`, default: `false`) — Applies error styling and sets <code>aria-invalid="true"</code> on the inner input.
- **hide-controls** (`boolean`, default: `false`) — Hides the increment/decrement stepper buttons (still steppable via keyboard).
- **currency** (`string | undefined`) — ISO 4217 currency code (e.g. <code>USD</code>, <code>EUR</code>, <code>SEK</code>). Setting it enables the
currency convenience: a decorative, locale-aware symbol is rendered into the
<code>start</code>/<code>end</code> slot resolved from <code>currencyPlacement</code>, and the currency is
folded into the input's accessible description so assistive tech announces it.

This is layered on top of the generic <code>start</code>/<code>end</code> slots — for a fully
custom symbol, omit <code>currency</code> and slot your own content instead. It is
independent of <code>format</code>: the symbol lives beside the number rather than in
the formatted text, so it composes cleanly with <code>mask</code>.
- **currency-placement** (`'start' | 'end' | 'auto'`, default: `'auto'`) — Which side the <code>currency</code> symbol is placed on. <code>'auto'</code> (the default)
derives the side from the <code>locale</code>/<code>currency</code> pair via <code>Intl</code> (symbol-first
locales like en-US → <code>start</code>, symbol-last locales like de-DE → <code>end</code>);
<code>'start'</code>/<code>'end'</code> force the side. Has no effect unless <code>currency</code> is set.
- **form** (`HTMLFormElement | null`)
- **size** (`'s' | 'm' | 'l'`, default: `'m'`) — The size of the component.
- **label** (`string`, default: `''`) — Label for the control. Ignored when the control is wrapped in a
<code>&lt;nord-field&gt;</code>, which provides the label via <code>&lt;nord-field-label&gt;</code>.
- **hint** (`string | undefined`) — Optional hint text shown with the control. Ignored inside a <code>&lt;nord-field&gt;</code>,
which provides it via <code>&lt;nord-field-description&gt;</code>.
- **hint-below** (`boolean`, default: `false`) — Renders the hint below the control and any error instead of below the label.
- **hide-label** (`boolean`, default: `false`) — Visually hide the label, but still expose it to assistive technologies.
- **error** (`string | undefined`) — Optional error shown with the control. Ignored inside a <code>&lt;nord-field&gt;</code>,
which provides it via <code>&lt;nord-field-error&gt;</code>.
- **required** (`boolean`, default: `false`) — Determines whether the control is required or not.
A required control is announced as such to assistive technology and, inside
a <code>&lt;nord-field&gt;</code>, drives the required indicator on the <code>&lt;nord-field-label&gt;</code>.
When using this property you need to also set “novalidate” attribute on a form element to prevent browser from displaying its own validation errors.
- **hide-required** (`boolean`, default: `false`) — Visually hide the required indicator, but still expose the required state
to assistive technologies.

### Events

- **input** (`NordEvent`) — Dispatched as the value changes during interaction (typing a parseable value, clearing, each step, each button tick, each wheel notch, each scrub increment).
- **change** (`NumberFieldChangeEvent`) — Dispatched when the value is committed (on blur, keyboard step, or pointer-up after a button hold or scrub). Carries the numeric value and a <code>reason</code>.

### Slots

- **start** — Leading content inside the control, before the input (e.g. a unit or currency symbol). Sits after the decrement stepper button.
- **end** — Trailing content inside the control, after the input (e.g. a unit label or <code>%</code>). Sits before the increment stepper button.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Focus the inner input (mirrors combobox <code>focus</code>).

### CSS Custom Properties

- `--n-number-field-control-min-inline-size` (default: `8ch`) — Minimum inline size (width) of the numeric input portion of the control.
- `--n-number-field-step-inline-size` (default: `var(--n-space-xl)`) — Inline size (width) of each increment/decrement stepper button.
- `--n-number-field-background` (default: `var(--n-input-background, var(--n-color-surface))`) — Background of the control.
- `--n-number-field-border-color` (default: `var(--n-input-border-color, var(--n-color-border-strong))`) — Border color of the control.
- `--n-number-field-border-radius` (default: `var(--n-input-border-radius, var(--n-border-radius-s))`) — Corner radius of the control.

### Dependencies

- `icon`

<!--
Source: https://nordhealth.design/raw/components/number-field.md
-->
