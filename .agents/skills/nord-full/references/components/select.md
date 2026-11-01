# nord-select

> Select lets users choose one option from an options menu.
> Consider using select when you have 5 or more options to choose from.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to let a user choose one option from an options menu.
- Use when you have more than 6 options to choose from.
- Use when you don’t know how many options there will be.
- Use hint text and placeholder to provide additional, non-critical instructions.

> **Don't:** - Don't use a select if you have less than 6 options to choose from. Consider using [segmented control](/components/segmented-control/) or [radio components](/components/radio/) instead, if you have enough space to allow it.

---

## Hint placement

Hint text is rendered above the control by default to preserve existing behavior for current consumers. Use the `hint-below` property to opt in to rendering the hint below the control and any error.

This is a non-breaking rollout for teams adopting the new layout gradually. Existing integrations keep the current placement unless `hint-below` is explicitly set.

---

## Content guidelines

Select labels act as a title for the select field. Labels should typically be short and in noun form:

> **Do:** Company name

> **Don't:** What is your company name?

When writing select labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Company name

> **Don't:** Company Name

Do not use colons in select labels:

> **Do:** Choose organization

> **Don't:** Choose organization:

## Examples

### Autocomplete

```html
<nord-field>
      <nord-field-label for="autocomplete-select">Title</nord-field-label>
      <nord-select id="autocomplete-select" name="title" value="25" autocomplete="honorific-prefix" placeholder="Please select">
        <option value="mr">Mr</option>
        <option value="miss">Miss</option>
        <option value="ms">Ms.</option>
        <option value="mrs">Mrs.</option>
        <option value="dr">Dr.</option>
      </nord-select>
    </nord-field>
```

### Basic

```html
<nord-select label="Label" id="basic-select" name="page-size" value="25">
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </nord-select>
```

### Custom Button Style

```html
<nord-select label="Label" id="custom-button-style-select" name="page-size" value="25" class="n:[--n-button-background-color:var(--n-color-active)] n:[--n-button-gradient:none] n:[--n-button-box-shadow:none]">
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </nord-select>
```

### Custom Icon

```html
<nord-select label="Label" id="custom-icon-select" name="page-size" value="25">
        <nord-icon slot="icon" name="interface-filter"></nord-icon>
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </nord-select>
```

### Custom Width

```html
<nord-stack>
      <nord-select label="Size (150px)" id="custom-width-select-1" class="n:[--n-select-inline-size:150px]">
          <option value="25">25 per page</option>
          <option value="50">50 per page</option>
          <option value="100">100 per page</option>
        </nord-select>
      <nord-select label="Size (300px)" id="custom-width-select-2" class="n:[--n-select-inline-size:300px]">
          <option value="25">25 per page</option>
          <option value="50">50 per page</option>
          <option value="100">100 per page</option>
        </nord-select>
      <nord-select label="Size (default, fits content)" id="custom-width-select-3" value="Default">
          <option value="25">25 per page</option>
          <option value="50">50 per page</option>
          <option value="100">100 per page</option>
        </nord-select>
      <nord-select label="Size (expand to fill the available width)" id="custom-width-select-4" expand>
          <option value="25">25 per page</option>
          <option value="50">50 per page</option>
          <option value="100">100 per page</option>
        </nord-select>
    </nord-stack>
```

### Disabled

```html
<nord-select label="Label" id="disabled-select" name="page-size" value="25" disabled>
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </nord-select>
```

### Expanded

```html
<nord-select label="Label" id="expanded-select" value="25" expand>
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </nord-select>
```

### Hidden Label

```html
<nord-field>
      <nord-visually-hidden>
        <nord-field-label for="hidden-label-select">Label</nord-field-label>
      </nord-visually-hidden>
      <nord-select id="hidden-label-select" name="page-size" value="25">
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </nord-select>
    </nord-field>
```

### Required

```html
<nord-select label="Required" id="required-select" name="name" required value="25">
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </nord-select>
```

### Size

```html
<nord-stack>
      <nord-select label="Choose" id="size-select-1" size="s" name="page-size-1" value="25">
          <option value="25">25 per page</option>
          <option value="50">50 per page</option>
          <option value="100">100 per page</option>
        </nord-select>
      <nord-select label="Choose" id="size-select-2" size="m" name="page-size-2" value="25">
          <option value="25">25 per page</option>
          <option value="50">50 per page</option>
          <option value="100">100 per page</option>
        </nord-select>
      <nord-select label="Choose" id="size-select-3" size="l" name="page-size-3" value="25">
          <option value="25">25 per page</option>
          <option value="50">50 per page</option>
          <option value="100">100 per page</option>
        </nord-select>
    </nord-stack>
```

### With A Complex Hint

```html
<nord-field>
      <nord-field-label for="complex-hint-select">Label</nord-field-label>
      <nord-select id="complex-hint-select" name="page-size" value="25">
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </nord-select>
      <nord-field-description>
        Hint is an accessible way to provide <strong>additional information</strong> that might help the user
      </nord-field-description>
    </nord-field>
```

### With A Complex Label

```html
<nord-field>
      <nord-field-label for="complex-label-select"
        >Number of items <span class="n:text-[var(--n-color-accent)]">per page</span></nord-field-label
      >
      <nord-select id="complex-label-select" name="page-size" value="25">
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </nord-select>
    </nord-field>
```

### With A Form

```html
<form>
      <nord-stack gap="s">
        <nord-select label="Type of pet:" id="with-a-form-select" name="pet">
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </nord-select>

        <nord-button variant="primary">Submit</nord-button>
      </nord-stack>
    </form>
```

### With A Hint

```html
<nord-select label="Label" hint="Hint is an accessible way to provide additional information that might help the user" hint-below id="with-a-hint-select" name="page-size" value="25">
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </nord-select>
```

### With A Hint Below

```html
<nord-field invalid>
      <nord-field-label for="with-a-hint-below-select">Label</nord-field-label>
      <nord-select id="with-a-hint-below-select" name="page-size" value="25">
        <option value="25">25 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </nord-select>
      <nord-field-description>
        Hint is an accessible way to provide additional information that might help the user
      </nord-field-description>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### With A Placeholder

```html
<nord-select label="Type of pet" id="with-a-placeholder-select" name="pet" placeholder="Please select">
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </nord-select>
```

### With Error

```html
<nord-field invalid>
      <nord-field-label for="with-error-select">Type of pet</nord-field-label>
      <nord-select id="with-error-select" name="pet" placeholder="Please select">
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </nord-select>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### Standalone

```html
<nord-select label="Country" hint="Where you live." hint-below>
      <option value="us">United States</option>
      <option value="gb">United Kingdom</option>
      <option value="de">Germany</option>
    </nord-select>
```

### Field

```html
<nord-field>
      <nord-field-label for="country">Country</nord-field-label>
      <nord-select id="country">
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
        <option value="de">Germany</option>
      </nord-select>
      <nord-field-description>Where you live.</nord-field-description>
    </nord-field>
```

## API Reference

### Properties

- **expand** (`boolean`, default: `false`) — Controls whether the select expands to fill the width of its container.
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
- **autocomplete** (`AutocompleteAttribute`, default: `'off'`) — Specifies the data type of the field, so that the browser may attempt to fill out the field automatically on behalf of the user.
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

- **(default)** — Default slot for holding <option> elements.
- **label** — Use when a label requires more than plain text.
- **hint** — Use when a hint requires more than plain text.
- **error** — Optional slot that holds error text for the input.
- **icon** — Used to place an icon at the start of select.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### CSS Custom Properties

- `--n-select-block-size` (default: `var(--n-space-xl)`) — Controls the block size, or height, of the select using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-select-inline-size` (default: `fit-content`) — Controls the inline size, or width, of the select.
- `--n-label-color` (default: `var(--n-color-text)`) — Controls the text color of the label, using our <a href="/tokens/#color">color tokens</a>.

### Dependencies

- `icon`
- `button`

<!--
Source: https://nordhealth.design/raw/components/select.md
-->
