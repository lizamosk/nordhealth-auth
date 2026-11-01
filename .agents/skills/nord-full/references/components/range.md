# nord-range

> Range input lets user specify a numeric value using a slider which
> must be no less than a given value, and no more than another given value.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to let user specify a numeric value using a slider.
- Use when the accuracy of the numeric value entered isn’t important.
- Always use with a label, even if that label is hidden.

> **Don't:** - Don’t use when the accuracy of the numeric value entered is important.
- For entering arbitrary numeric values. Use [input component](/components/input/) instead.

---

## Hint placement

Hint text is rendered above the control by default to preserve existing behavior for current consumers. Use the `hint-below` property to opt in to rendering the hint below the control and any error.

This is a non-breaking rollout for teams adopting the new layout gradually. Existing integrations keep the current placement unless `hint-below` is explicitly set.

---

## Content guidelines

Range labels act as a title for the range input. Labels should typically be short and in noun form:

> **Do:** Lightness percentage

> **Don't:** What is the lightness percentage?

When writing range labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Item price

> **Don't:** Item Price

Do not use colons in range label:

> **Do:** Color depth

> **Don't:** Color depth:

## Examples

### Basic

```html
<nord-range label="Label" id="basic-range" value="7" min="0" max="10"></nord-range>
```

### Custom Thumb Size

```html
<nord-range label="Label"
        id="custom-thumb-range"
        class="n:[--n-range-thumb-size:32px]"
        value="7"
        min="0"
        max="10"
      ></nord-range>
```

### Custom Track Size

```html
<nord-range label="Label"
        id="custom-track-range"
        class="n:[--n-range-track-size:10px]"
        value="7"
        min="0"
        max="10"
      ></nord-range>
```

### Disabled

```html
<nord-field>
      <nord-field-label for="disabled-range">Disabled</nord-field-label>
      <nord-range id="disabled-range" value="7" min="0" max="10" disabled></nord-range>
    </nord-field>
```

### Readonly

```html
<nord-stack>
      <nord-range label="Readonly" id="disabled-readonly-readonly-range" value="7" min="0" max="10" readonly></nord-range>
    </nord-stack>
```

### Expanded

```html
<nord-range label="Expanded" id="expanded-range" value="7" min="0" max="10" expand></nord-range>
```

### Hide Label

```html
<nord-field>
      <nord-visually-hidden>
        <nord-field-label for="hide-label-range">Label</nord-field-label>
      </nord-visually-hidden>
      <nord-range id="hide-label-range" value="7" min="0" max="10"></nord-range>
    </nord-field>
```

### Required

```html
<nord-range label="Label" id="required-range" required value="7" min="0" max="10"></nord-range>
```

### Responsive

```html
<style>@media (max-width: 768px) {
    :root {
      --n-range-thumb-size: 28px;
    }
  }</style>
    <nord-range label="Label" id="responsive-range" value="7" min="0" max="10"></nord-range>
```

### Steps

```html
<nord-range label="Custom steps" id="steps-range" value="36.7" step="0.1" min="0" max="100"></nord-range>
```

### Unit

```html
<nord-stack>
      <nord-range label="Price ($)" id="unit-price-range" value="32" min="0" max="100" step="0.01"></nord-range>
      <nord-range label="Temperature (°C)" id="unit-temp-range" value="37" min="30" max="42" step="1"></nord-range>
    </nord-stack>
```

### With A Complex Hint

```html
<nord-field>
      <nord-field-label for="complex-hint-range">Label</nord-field-label>
      <nord-range id="complex-hint-range" value="7" min="0" max="10" expand></nord-range>
      <nord-field-description>
        Hint is an accessible way to provide <strong>additional information</strong> that might help the user
      </nord-field-description>
    </nord-field>
```

### With A Complex Label

```html
<nord-field>
      <nord-field-label for="complex-label-range"
        >Label <span class="n:text-[var(--n-color-status-success)]">with color</span></nord-field-label
      >
      <nord-range id="complex-label-range" value="7" min="0" max="10"></nord-range>
    </nord-field>
```

### With A Hint

```html
<nord-range label="Label" hint="Hint is an accessible way to provide additional information that might help the user" hint-below id="hint-range" value="7" min="0" max="10" expand></nord-range>
```

### With A Hint Below

```html
<nord-field invalid>
      <nord-field-label for="hint-below-range">Label</nord-field-label>
      <nord-range id="hint-below-range" value="7" min="0" max="10" expand></nord-range>
      <nord-field-description>
        Hint is an accessible way to provide additional information that might help the user
      </nord-field-description>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### With Error

```html
<nord-field invalid>
      <nord-field-label for="error-range">Label</nord-field-label>
      <nord-range id="error-range" min="0" max="10"></nord-range>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### Bounds

```html
<nord-range label="Volume" id="bounds-range" value="7" min="0" max="10" step="1"></nord-range>
```

### Standalone

```html
<nord-range label="Volume" hint="From 0 to 100." hint-below min="0" max="100" value="50"></nord-range>
```

### Field

```html
<nord-field>
      <nord-field-label for="volume">Volume</nord-field-label>
      <nord-range id="volume" min="0" max="100" value="50"></nord-range>
      <nord-field-description>From 0 to 100.</nord-field-description>
    </nord-field>
```

## API Reference

### Properties

- **min** (`number`, default: `0`) — Minimum value for the range slider.
- **max** (`number`, default: `10`) — Maximum value for the range slider.
- **step** (`number`, default: `1`) — Step amount for the range slider.
- **expand** (`boolean`, default: `false`) — Controls whether the input expands to fill the width of its container.
- **placeholder** (`string | undefined`) — Placeholder text to display within the control.
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
- **autocomplete** (`AutocompleteAttribute`, default: `'off'`) — Specifies the data type of the field, so that the browser may attempt to fill out the field automatically on behalf of the user.
- **readonly** (`boolean`, default: `false`) — Makes the component readonly, so that it is not editable.
Readonly differs from disabled in that readonly fields are still focusable and will be submitted with a form.
- **disabled** (`boolean`, default: `false`) — Makes the component disabled. This prevents users from
being able to interact with the component, and conveys
its inactive state to assistive technologies.
- **name** (`string | undefined`) — The name of the form component.
- **value** (`string`, default: `''`) — The value of the form component.
- **form** (`HTMLFormElement | null`) — Gets the form, if any, associated with the form element.
The setter accepts a string, which is the id of the form.

### Events

- **input** (`NordEvent`) — Fired as the user types into the input.
- **change** (`NordEvent`) — Fired whenever the input's value is changed via user interaction.

### Slots

- **label** — Use when a label requires more than plain text.
- **hint** — Optional slot that holds hint text for the input.
- **error** — Optional slot that holds error text for the input.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### CSS Custom Properties

- `--n-range-thumb-size` (default: `20px`) — Controls the size of the thumb.
- `--n-range-track-color-active` (default: `var(--n-color-accent)`) — Controls the color of the portion of the track that represents the current value.
- `--n-range-track-color-inactive` (default: `var(--n-color-border-strong)`) — Controls the color of the portion of the track that represents the remaining value.
- `--n-range-track-size` (default: `3px`) — Controls the height of the track.

<!--
Source: https://nordhealth.design/raw/components/range.md
-->
