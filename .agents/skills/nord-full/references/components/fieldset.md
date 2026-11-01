# nord-fieldset

> Deprecated: for new code, group related controls with the composable Field
> family — see <a href="/components/field#radio">grouping fields with Field</a>.
> <code>nord-fieldset</code> remains supported for backwards compatibility and is not
> scheduled for removal.
> 
> Fieldset is used for grouping sets of input components. It is necessary to use a
> fieldset with radio and checkbox components, and can also be useful for logically
> grouping other types of inputs.

> **Deprecated.** For new code, group related controls with the composable Field family — see [grouping fields with Field](/components/field#radio). `nord-fieldset` keeps working for backwards compatibility and is not scheduled for removal — there's no need to rush a migration.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use the fieldset component when you need to create a relationship between multiple form inputs.
- It is especially important to use with a group of radio components.

> **Don't:** - Don’t place interactive content (buttons, links etc) inside the label.
- Don’t use with a checkbox component when there is **only one** checkbox. For example, when accepting terms and conditions.

---

## Hint placement

Hint text is rendered above the grouped controls by default to preserve existing behavior for current consumers. Use the `hint-below` property to opt in to rendering the hint below the grouped controls and any error.

This is a non-breaking rollout for teams adopting the new layout gradually. Existing integrations keep the current placement unless `hint-below` is explicitly set.

---

## Content guidelines

Fieldset label should be clear, accurate and predictable. It should help the user to understand how the items in the fieldset are grouped together, or what kind of choice the user is making:

> **Do:** Pick a color

> **Don't:** Choose

When writing fieldset labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Pick a color

> **Don't:** Pick A Color

Avoid ending in punctuation if it’s a single sentence, word, or a fragment:

> **Do:** Pick a color

> **Don't:** Pick a color.

Do not use colons in fieldset label:

> **Do:** Payment details

> **Don't:** Payment details:

---

## Additional considerations

- A label (which becomes to `<legend>` inside the fieldset) is always required.
- Hint text can be used to offer further information or explanation for an option.

## Examples

### Basic

```html
<nord-fieldset label="Fieldset label">
      <nord-stack>
        <nord-checkbox name="option" value="1" label="Option 1"></nord-checkbox>
        <nord-checkbox name="option" value="2" label="Option 2"></nord-checkbox>
      </nord-stack>
    </nord-fieldset>
```

### Overview

```html
<nord-fieldset
      label="Profile"
      hint="Visible to colleagues across your clinic."
      class="n:container-xxs"
    >
      <nord-input label="Full name" placeholder="Laura Williams"></nord-input>
      <nord-input label="Username"></nord-input>
    </nord-fieldset>
```

### Hidden Label

```html
<nord-fieldset label="Fieldset label" hide-label>
      <nord-stack>
        <nord-checkbox name="option" value="1" label="Option 1"></nord-checkbox>
        <nord-checkbox name="option" value="2" label="Option 2"></nord-checkbox>
      </nord-stack>
    </nord-fieldset>
```

### Small Size

```html
<nord-stack gap="xl">
      <nord-fieldset size="s" label="Checkboxes">
        <nord-stack gap="s">
          <nord-checkbox size="s" checked name="checkbox" value="1" label="Option 1"></nord-checkbox>
          <nord-checkbox size="s" name="checkbox" value="2" label="Option 2"></nord-checkbox>
        </nord-stack>
      </nord-fieldset>

      <nord-fieldset size="s" label="Radios">
        <nord-stack gap="s" direction="vertical">
          <nord-radio size="s" checked label="Option 1" name="radio" value="1"></nord-radio>
          <nord-radio size="s" label="Option 2" name="radio" value="2"></nord-radio>
        </nord-stack>
      </nord-fieldset>
    </nord-stack>
```

### With A Complex Hint

```html
<nord-fieldset label="Fieldset label">
      <div slot="hint">
        Hint is an accessible way to provide <strong>additional information</strong> that might help the user
      </div>
      <nord-stack>
        <nord-checkbox name="option" value="1" label="Option 1"></nord-checkbox>
        <nord-checkbox name="option" value="2" label="Option 2"></nord-checkbox>
      </nord-stack>
    </nord-fieldset>
```

### With A Complex Label

```html
<nord-fieldset>
      <div slot="label">Fieldset label <span class="n:text-[var(--n-color-status-success)]">with color</span></div>
      <nord-stack>
        <nord-checkbox name="option" value="1" label="Option 1"></nord-checkbox>
        <nord-checkbox name="option" value="2" label="Option 2"></nord-checkbox>
      </nord-stack>
    </nord-fieldset>
```

### With A Hint

```html
<nord-fieldset
      label="Fieldset label"
      hint="Hint is an accessible way to provide additional information that might help the user"
    >
      <nord-stack>
        <nord-checkbox name="option" value="1" label="Option 1"></nord-checkbox>
        <nord-checkbox name="option" value="2" label="Option 2"></nord-checkbox>
      </nord-stack>
    </nord-fieldset>
```

### With A Hint Below

```html
<nord-fieldset
      label="Fieldset label"
      hint="Hint is an accessible way to provide additional information that might help the user"
      error="Please select an option"
      hint-below
    >
      <nord-stack>
        <nord-checkbox name="option" value="1" label="Option 1"></nord-checkbox>
        <nord-checkbox name="option" value="2" label="Option 2"></nord-checkbox>
      </nord-stack>
    </nord-fieldset>
```

### With Error

```html
<nord-fieldset label="Fieldset label" error="Please select an option">
      <nord-stack>
        <nord-checkbox name="option" value="1" label="Option 1"></nord-checkbox>
        <nord-checkbox name="option" value="2" label="Option 2"></nord-checkbox>
      </nord-stack>
    </nord-fieldset>
```

## API Reference

### Properties

- **label** (`string`, default: `''`) — Label for the fieldset. Rendered as a <code>&lt;legend&gt;</code> element.
- **hint** (`string | undefined`) — Optional hint text to be displayed with the input. Alternatively use the hint slot.
- **hint-below** (`boolean`, default: `false`) — Renders the hint below the grouped controls and any error instead of below the legend.
- **error** (`string | undefined`) — Optional error to be shown with the fieldset. Alternatively use the error slot.
- **required** (`boolean`, default: `false`) — Determines whether the fieldset is required or not.
A fieldset marked as required will be announced as such to users of assistive technology.
When using this property you need to also set “novalidate” attribute on a form element to prevent browser from displaying its own validation errors.
- **hide-required** (`boolean`, default: `false`) — Visually hide the required indicator, but still show
required attribute to assistive technologies like screen readers.
- **hide-label** (`boolean`, default: `false`) — Visually hide the label, but still show it to assistive technologies like screen readers.
- **size** (`'s' | 'm'`, default: `'m'`) — The size of the label.

### Slots

- **label** — Use when a label requires more than plain text.
- **hint** — Optional slot that holds hint text for the fieldset.
- **error** — Optional slot that holds error text for the fieldset.

### CSS Custom Properties

- `--n-label-color` (default: `var(--n-color-text)`) — Controls the text color of the label, using our <a href="/tokens/#color">color tokens</a>.

<!--
Source: https://nordhealth.design/raw/components/fieldset.md
-->
