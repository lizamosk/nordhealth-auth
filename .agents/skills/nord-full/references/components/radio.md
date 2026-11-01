# nord-radio

> Radio buttons are graphical user interface elements that allow user to choose only one option from
> a predefined set of mutually exclusive options.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use a radio component when users can only select one option from a list.
- Favor radios over a select component when there are a small number of options. This reduces the number of clicks a user has to make, increasing efficiency.
- Radio buttons are grouped by their `name` attribute. Therefore, it is crucial that the same `name` is used for a group of radios.
- Give each radio within a group a unique `value`.
- Radios **must** be grouped for accessibility — wrap them in a [Field Set](/components/field-set/) with a [Field Legend](/components/field-legend/). The legacy [Fieldset](/components/fieldset/) still works but is deprecated.
- In most cases, a stack component should be used to layout a group of radio buttons.

> **Don't:** - Don’t place interactive content (buttons, links etc) inside the label.
- Don’t use when a user can select more than one option. In this case, use a checkbox instead.
- Don’t use for “accepting terms of service” and similar functionality. Use a checkbox instead.
- When you have more than 10 options to choose from. Consider using a select instead.

---

## Hint placement

Hint text is rendered above the control by default to preserve existing behavior for current consumers. Use the `hint-below` property to opt in to rendering the hint below the control and any error.

This is a non-breaking rollout for teams adopting the new layout gradually. Existing integrations keep the current placement unless `hint-below` is explicitly set.

---

## Content guidelines

Radio button labels should be clear, accurate and predictable. It should be possible for the user to understand what they are enabling or disabling:

> **Do:** User settings

> **Don't:** Option 1

When writing radio button labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** My tasks

> **Don't:** My Tasks

Avoid ending in punctuation if it’s a single sentence, word, or a fragment:

> **Do:** Blue

> **Don't:** Blue.

Do not use commas or semicolons at the end of each line

> **Do:** Patient

> **Don't:** Patient;

---

## Additional considerations

- Hint text can be used to offer further information or explanation for an option.
- Once a radio has been selected, users cannot return to having no radios selected without refreshing their browser window. Therefore, you should include "None of the above" or "I do not know" if they are valid options.
- In most cases, radio buttons should be stacked vertically. However, radio buttons can be stacked horizontally when there are only two options with short labels. An example might be a yes/no question.

## Examples

### Basic

```html
<nord-field-set>
      <nord-field-legend>Radios</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal">
          <nord-radio id="basic-1" name="test" value="1"></nord-radio>
          <nord-field-label for="basic-1">Option 1</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="basic-2" name="test" value="2"></nord-radio>
          <nord-field-label for="basic-2">Option 2</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### Checked

```html
<nord-field-set>
      <nord-field-legend>Radios</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal">
          <nord-radio id="checked-1" name="test" value="1" checked></nord-radio>
          <nord-field-label for="checked-1">Option 1</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="checked-2" name="test" value="2"></nord-radio>
          <nord-field-label for="checked-2">Option 2</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### Disabled

```html
<nord-field-set>
      <nord-field-legend>Radios</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal">
          <nord-radio id="disabled-1" checked disabled></nord-radio>
          <nord-field-label for="disabled-1">Checked</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="disabled-2" disabled></nord-radio>
          <nord-field-label for="disabled-2">Unchecked</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### Hidden Label

```html
<nord-field-set>
      <nord-field-legend>Radios</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal">
          <nord-radio id="hidden-1" name="test" value="1"></nord-radio>
          <nord-field-label for="hidden-1" class="n:sr-only">Option 1</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="hidden-2" name="test" value="2"></nord-radio>
          <nord-field-label for="hidden-2">Option 2</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### Required

```html
<nord-field-set>
      <nord-field-legend>Required</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal">
          <nord-radio id="required-1" name="test" value="1" required></nord-radio>
          <nord-field-label for="required-1">Option 1</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="required-2" name="test" value="2" required></nord-radio>
          <nord-field-label for="required-2">Option 2</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### Size

```html
<nord-field-set>
      <nord-field-legend>Radios</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal">
          <nord-radio id="size-1" size="s" name="test" value="1" checked></nord-radio>
          <nord-field-label for="size-1">Option 1</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="size-2" size="m" name="test" value="2"></nord-radio>
          <nord-field-label for="size-2">Option 2</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="size-3" size="l" name="test" value="3"></nord-radio>
          <nord-field-label for="size-3">Option 3</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### With A Complex Hint

```html
<nord-field-set>
      <nord-field-legend>Radios</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal">
          <nord-radio id="complex-hint-1" name="test" value="1"></nord-radio>
          <nord-field-label for="complex-hint-1">Option 1</nord-field-label>
          <nord-field-description>
            Hint is an accessible way to provide <strong>additional information</strong> that might help the user
          </nord-field-description>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="complex-hint-2" name="test" value="2"></nord-radio>
          <nord-field-label for="complex-hint-2">Option 2</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### With A Complex Label

```html
<nord-field-set>
      <nord-field-legend>Radios</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal">
          <nord-radio id="complex-label-1" name="test" value="1"></nord-radio>
          <nord-field-label for="complex-label-1">Label <span class="n:text-[var(--n-color-status-success)]">with color</span></nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="complex-label-2" name="test" value="2"></nord-radio>
          <nord-field-label for="complex-label-2">Option 2</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### With A Hint

```html
<nord-field-set>
      <nord-field-legend>Radios</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal">
          <nord-radio id="hint-1" name="test" value="1"></nord-radio>
          <nord-field-label for="hint-1">Option 1</nord-field-label>
          <nord-field-description>
            Hint is an accessible way to provide additional information that might help the user
          </nord-field-description>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="hint-2" name="test" value="2"></nord-radio>
          <nord-field-label for="hint-2">Option 2</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### With A Hint Below

```html
<nord-field-set>
      <nord-field-legend>Radios</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal" invalid>
          <nord-radio id="hint-below-1" name="test" value="1"></nord-radio>
          <nord-field-label for="hint-below-1">Option 1</nord-field-label>
          <nord-field-description>
            Hint is an accessible way to provide additional information that might help the user
          </nord-field-description>
          <nord-field-error>This field is required</nord-field-error>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="hint-below-2" name="test" value="2"></nord-radio>
          <nord-field-label for="hint-below-2">Option 2</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### With Error

```html
<nord-field-set>
      <nord-field-legend>Radios</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal" invalid>
          <nord-radio id="error-1" name="test" value="1"></nord-radio>
          <nord-field-label for="error-1">Option 1</nord-field-label>
          <nord-field-error>This field is required</nord-field-error>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="error-2" name="test" value="2"></nord-radio>
          <nord-field-label for="error-2">Option 2</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### Subscription Plan

```html
<nord-field-set>
      <nord-field-legend>Subscription plan</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal">
          <nord-radio id="plan-monthly" name="plan" value="monthly" checked></nord-radio>
          <nord-field-label for="plan-monthly">Monthly</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="plan-annual" name="plan" value="annual"></nord-radio>
          <nord-field-label for="plan-annual">Annual</nord-field-label>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="plan-lifetime" name="plan" value="lifetime"></nord-radio>
          <nord-field-label for="plan-lifetime">Lifetime</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### Hint And Error

```html
<nord-field-set>
      <nord-field-legend>Options</nord-field-legend>
      <nord-field-group>
        <nord-field orientation="horizontal" invalid>
          <nord-radio id="hint-error-1" name="hint-example" value="1"></nord-radio>
          <nord-field-label for="hint-error-1">Option 1</nord-field-label>
          <nord-field-description>
            Hint is an accessible way to provide additional information that might help the user
          </nord-field-description>
          <nord-field-error>This field is required</nord-field-error>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-radio id="hint-error-2" name="hint-example" value="2"></nord-radio>
          <nord-field-label for="hint-error-2">Option 2</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### Standalone

```html
<div role="radiogroup" aria-label="Plan">
      <nord-radio name="plan" value="basic" label="Basic"></nord-radio>
      <nord-radio name="plan" value="pro" label="Pro"></nord-radio>
    </div>
```

### Field

```html
<nord-field-set>
      <nord-field-legend>Plan</nord-field-legend>
      <nord-field-group>
        <nord-radio name="plan" value="basic" label="Basic"></nord-radio>
        <nord-radio name="plan" value="pro" label="Pro"></nord-radio>
      </nord-field-group>
    </nord-field-set>
```

## API Reference

### Properties

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

<!--
Source: https://nordhealth.design/raw/components/radio.md
-->
