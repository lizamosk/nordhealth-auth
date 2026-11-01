# nord-toggle

> Toggle switch gives control over a feature or option that can be
> turned on or off. If a physical switch would work for the action, a
> toggle is probably the best component to use.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use toggles when your intent is to turn something on or off instantly.
- Use for any feature or option that can be turned on or off.
- If a physical switch would work for the action, the toggle is probably the best component to use.
- Use for making it possible to choose one or more options from a limited number of options.

> **Don't:** - Toggles should never require users to click a button to apply or save the setting.
- Avoid using when you have more than 10 options to choose from.
- Don’t change the selection of another toggle when another one is clicked. Only exception is when a toggle is used to make a bulk selection of multiple items.

---

## Hint placement

Hint text is rendered above the control by default to preserve existing behavior for current consumers. Use the `hint-below` property to opt in to rendering the hint below the control and any error.

This is a non-breaking rollout for teams adopting the new layout gradually. Existing integrations keep the current placement unless `hint-below` is explicitly set.

---

## Content guidelines

Toggle labels should be clear, accurate and predictable. It should be possible for the user to understand what they are selecting:

> **Do:** User settings

> **Don't:** Option 1

When writing toggle labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

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
<nord-stack>
      <nord-toggle label="Checked toggle" id="basic-checked" checked value="Value"></nord-toggle>
      <nord-toggle label="Unchecked" id="basic-unchecked" value="Value"></nord-toggle>
    </nord-stack>
```

### Overview

```html
<nord-toggle label="Subscribe to the newsletter" id="overview-newsletter" value="newsletter" checked></nord-toggle>
```

### Custom Size

```html
<nord-stack gap="s">
      <nord-toggle label="Label" id="size-s" checked value="Value" size="s"></nord-toggle>
      <nord-toggle label="Label" id="size-m" checked value="Value" size="m"></nord-toggle>
      <nord-toggle label="Label" id="size-l" checked value="Value" size="l"></nord-toggle>
    </nord-stack>
```

### Disabled

```html
<nord-fieldset label="Toggles">
      <nord-stack>
        <nord-toggle label="Checked" id="disabled-checked" checked disabled></nord-toggle>
        <nord-toggle label="Unchecked" id="disabled-unchecked" disabled></nord-toggle>
      </nord-stack>
    </nord-fieldset>
```

### Hidden Label

```html
<nord-field orientation="horizontal">
    <nord-toggle id="hidden-label"></nord-toggle>
    <nord-visually-hidden>
      <nord-field-label for="hidden-label">Label</nord-field-label>
    </nord-visually-hidden>
  </nord-field>
```

### Reverse Order

```html
<nord-stack class="n:max-inline-[200px]">
      <nord-toggle label="Checked toggle" id="reverse-checked" reverse checked value="Value"></nord-toggle>
      <nord-toggle label="Unchecked" id="reverse-unchecked" reverse value="Value"></nord-toggle>
    </nord-stack>
```

### With A Complex Hint

```html
<nord-field orientation="horizontal">
      <nord-toggle id="complex-hint"></nord-toggle>
      <nord-field-label for="complex-hint">Label</nord-field-label>
      <nord-field-description>
        Hint is an accessible way to provide <strong>additional information</strong> that might help the user
      </nord-field-description>
    </nord-field>
```

### With A Complex Label

```html
<nord-field orientation="horizontal">
      <nord-toggle id="complex-label"></nord-toggle>
      <nord-field-label for="complex-label"
        >Label <span class="n:text-[var(--n-color-status-success)]">with color</span></nord-field-label
      >
    </nord-field>
```

### With A Hint

```html
<nord-toggle label="Label" hint="Hint is an accessible way to provide additional information that might help the user" hint-below id="with-hint" expand></nord-toggle>
```

### With A Hint Below

```html
<nord-field orientation="horizontal" invalid>
      <nord-toggle id="hint-below" expand></nord-toggle>
      <nord-field-label for="hint-below">Label</nord-field-label>
      <nord-field-description>
        Hint is an accessible way to provide additional information that might help the user
      </nord-field-description>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### With Error

```html
<nord-stack>
      <nord-field orientation="horizontal" invalid>
        <nord-toggle id="error-checked" checked></nord-toggle>
        <nord-field-label for="error-checked">Checked toggle</nord-field-label>
        <nord-field-error>This field is required</nord-field-error>
      </nord-field>
      <nord-field orientation="horizontal" invalid>
        <nord-toggle id="error-unchecked"></nord-toggle>
        <nord-field-label for="error-unchecked">Unchecked</nord-field-label>
        <nord-field-error>This field is required</nord-field-error>
      </nord-field>
    </nord-stack>
```

### Standalone

```html
<nord-toggle label="Email notifications"></nord-toggle>
```

### Field

```html
<nord-field orientation="horizontal">
      <nord-toggle id="notifications"></nord-toggle>
      <nord-field-label for="notifications">Email notifications</nord-field-label>
    </nord-field>
```

## API Reference

### Properties

- **checked** (`boolean`, default: `false`) — Controls whether the toggle is checked or not.
- **reverse** (`boolean`, default: `false`) — Controls whether the contents are displayed in reverse order,
putting the label before the toggle.
- **size** (`'s' | 'm' | 'l'`, default: `'m'`) — The size of the toggle switch.
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

<!--
Source: https://nordhealth.design/raw/components/toggle.md
-->
