# nord-checkbox

> Checkboxes allow user to choose one or more options from a limited set of options.
> If you have more than 10 options, please use Select component instead.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use for making it possible to choose one or more options from a limited number of options.
- Use for “accepting terms of service” and similar functionality.
- Use in forms to toggle something on or off.

> **Don't:** - Avoid using when you have more than 10 options to choose from.
- Don’t change the selection of another checkbox when another one is clicked. Only exception is when a checkbox is used to make a bulk selection of multiple items.

---

## Hint placement

Hint text is rendered above the control by default to preserve existing behavior for current consumers. Use the `hint-below` property to opt in to rendering the hint below the control and any error.

This is a non-breaking rollout for teams adopting the new layout gradually. Existing integrations keep the current placement unless `hint-below` is explicitly set.

---

## Content guidelines

Checkbox labels should be clear, accurate and predictable. It should be possible for the user to understand what they are selecting:

> **Do:** User settings

> **Don't:** Option 1

When writing checkbox labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** User settings

> **Don't:** User Settings

Avoid ending in punctuation if it’s a single sentence, word, or a fragment:

> **Do:** Show dashboard

> **Don't:** Show dashboard.

Do not use commas or semicolons at the end of each line

> **Do:** Patients

> **Don't:** Patients;

## Examples

### Basic

```html
<nord-field orientation="horizontal">
      <nord-checkbox id="basic-checkbox" value="Value"></nord-checkbox>
      <nord-field-label for="basic-checkbox">Label</nord-field-label>
    </nord-field>
```

### Checked

```html
<nord-checkbox label="Label" id="checked-checkbox" checked></nord-checkbox>
```

### Disabled

```html
<nord-fieldset label="Checkboxes">
      <nord-stack>
        <nord-field orientation="horizontal">
          <nord-checkbox id="disabled-checked" checked disabled></nord-checkbox>
          <nord-field-label for="disabled-checked">Checked</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-checkbox id="disabled-unchecked" disabled></nord-checkbox>
          <nord-field-label for="disabled-unchecked">Unchecked</nord-field-label>
        </nord-field>
      </nord-stack>
    </nord-fieldset>
```

### Hidden Label

```html
<nord-field orientation="horizontal">
      <nord-checkbox id="hidden-label-checkbox"></nord-checkbox>
      <nord-field-label for="hidden-label-checkbox"><nord-visually-hidden>Label</nord-visually-hidden></nord-field-label>
    </nord-field>
```

### Indeterminate

```html
<nord-fieldset label="Checkboxes">
      <nord-stack>
        <nord-field orientation="horizontal">
          <nord-checkbox id="indeterminate-1" indeterminate></nord-checkbox>
          <nord-field-label for="indeterminate-1">Indeterminate</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-checkbox id="indeterminate-2" indeterminate disabled></nord-checkbox>
          <nord-field-label for="indeterminate-2">Indeterminate disabled</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal" invalid>
          <nord-checkbox id="indeterminate-3" indeterminate></nord-checkbox>
          <nord-field-label for="indeterminate-3">Indeterminate with error</nord-field-label>
          <nord-field-error>This field is required</nord-field-error>
        </nord-field>
      </nord-stack>
    </nord-fieldset>
```

### Required

```html
<nord-fieldset required label="Required">
      <nord-stack>
        <nord-checkbox label="Option 1" id="required-1" name="option" value="1"></nord-checkbox>
        <nord-checkbox label="Option 2" id="required-2" name="option" value="2"></nord-checkbox>
      </nord-stack>
    </nord-fieldset>
```

### Size

```html
<nord-stack gap="s">
      <nord-field orientation="horizontal">
        <nord-checkbox id="size-s" size="s" checked value="Value"></nord-checkbox>
        <nord-field-label for="size-s">Label</nord-field-label>
      </nord-field>
      <nord-field orientation="horizontal">
        <nord-checkbox id="size-m" size="m" checked value="Value"></nord-checkbox>
        <nord-field-label for="size-m">Label</nord-field-label>
      </nord-field>
      <nord-field orientation="horizontal">
        <nord-checkbox id="size-l" size="l" checked value="Value"></nord-checkbox>
        <nord-field-label for="size-l">Label</nord-field-label>
      </nord-field>
    </nord-stack>
```

### With A Complex Hint

```html
<nord-field orientation="horizontal">
      <nord-checkbox id="complex-hint-checkbox"></nord-checkbox>
      <nord-field-label for="complex-hint-checkbox">Label</nord-field-label>
      <nord-field-description>
        Hint is an accessible way to provide <strong>additional information</strong> that might help the user
      </nord-field-description>
    </nord-field>
```

### With A Complex Label

```html
<nord-field orientation="horizontal">
      <nord-checkbox id="complex-label-checkbox"></nord-checkbox>
      <nord-field-label for="complex-label-checkbox">Label <span class="n:text-[var(--n-color-status-success)]">with color</span></nord-field-label>
    </nord-field>
```

### With A Hint

```html
<nord-field orientation="horizontal">
      <nord-checkbox id="with-hint-checkbox"></nord-checkbox>
      <nord-field-label for="with-hint-checkbox">Label</nord-field-label>
      <nord-field-description>
        Hint is an accessible way to provide additional information that might help the user
      </nord-field-description>
    </nord-field>
```

### With A Hint Below

```html
<nord-field orientation="horizontal" invalid>
      <nord-checkbox id="with-hint-below-checkbox"></nord-checkbox>
      <nord-field-label for="with-hint-below-checkbox">Label</nord-field-label>
      <nord-field-description>
        Hint is an accessible way to provide additional information that might help the user
      </nord-field-description>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### With Error

```html
<nord-field orientation="horizontal" invalid>
      <nord-checkbox id="with-error-checkbox"></nord-checkbox>
      <nord-field-label for="with-error-checkbox">Label</nord-field-label>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### Overview

```html
<nord-field orientation="horizontal">
      <nord-checkbox id="overview-checkbox" value="newsletter"></nord-checkbox>
      <nord-field-label for="overview-checkbox">Subscribe to the newsletter</nord-field-label>
    </nord-field>
```

### States

```html
<nord-stack>
      <nord-checkbox label="Unchecked" id="states-1" value="1"></nord-checkbox>
      <nord-checkbox label="Checked" id="states-2" value="2" checked></nord-checkbox>
      <nord-checkbox label="Indeterminate" id="states-3" value="3" indeterminate></nord-checkbox>
    </nord-stack>
```

### Sizes

```html
<nord-stack>
      <nord-checkbox label="Small" id="sizes-s" value="s" size="s" checked></nord-checkbox>
      <nord-checkbox label="Medium" id="sizes-m" value="m" size="m" checked></nord-checkbox>
      <nord-checkbox label="Large" id="sizes-l" value="l" size="l" checked></nord-checkbox>
    </nord-stack>
```

### With Hint And Error

```html
<nord-stack>
      <nord-field orientation="horizontal">
        <nord-checkbox id="hint-and-error-1"></nord-checkbox>
        <nord-field-label for="hint-and-error-1">Accept terms</nord-field-label>
        <nord-field-description>You must agree before continuing.</nord-field-description>
      </nord-field>
      <nord-field orientation="horizontal" invalid>
        <nord-checkbox id="hint-and-error-2" required></nord-checkbox>
        <nord-field-label for="hint-and-error-2" required>Subscribe</nord-field-label>
        <nord-field-error>This field is required</nord-field-error>
      </nord-field>
    </nord-stack>
```

### Standalone

```html
<nord-checkbox label="I agree to the terms"></nord-checkbox>
```

### Field

```html
<nord-field orientation="horizontal">
      <nord-checkbox id="terms"></nord-checkbox>
      <nord-field-label for="terms">I agree to the terms</nord-field-label>
    </nord-field>
```

## API Reference

### Properties

- **indeterminate** (`boolean`, default: `false`) — Controls whether the checkbox is in an indeterminate state.
- **checked** (`boolean`, default: `false`) — Controls whether the checkbox is checked or not.
- **size** (`'s' | 'm' | 'l'`, default: `'m'`) — The size of the component.
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

- `--n-label-color` (default: `var(--n-color-text)`) — Controls the text color of the label, using our <a href="/tokens/#color">color tokens</a>.

### Dependencies

- `icon`

<!--
Source: https://nordhealth.design/raw/components/checkbox.md
-->
