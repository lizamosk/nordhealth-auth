# nord-textarea

> Textarea is a component that allows user to write text over
> multiple rows. Used when the expected user input is long.
> For shorter input, use the Input component.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to allow text input where the expected input is long.

> **Don't:** - Don’t use when the expected text input is short. Use input component instead.

---

## Hint placement

Hint text is rendered above the control by default to preserve existing behavior for current consumers. Use the `hint-below` property to opt in to rendering the hint below the control and any error.

This is a non-breaking rollout for teams adopting the new layout gradually. Existing integrations keep the current placement unless `hint-below` is explicitly set.

---

## Content guidelines

Textarea labels act as a title for the text field. Labels should typically be short and in noun form:

> **Do:** Company name

> **Don't:** What is your company name?

When writing textarea labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Provide description

> **Don't:** Provide Description

When a textarea isn’t part of a form and is placed individually on a page, you could provide the textarea label as a call to action:

> **Do:** Leave a comment

> **Don't:** Comment

Do not use colons in textarea labels:

> **Do:** Provide description

> **Don't:** Provide description:

## Examples

### Auto Resize

```html
<nord-textarea label="Message"
        id="auto-resize-textarea"
        resize="auto"
        value="This is a component that allows user to write text over multiple rows. Used when the expected user input is long. For shorter input, use the Input component."
      ></nord-textarea>
```

### Auto Resize Single Row

```html
<nord-textarea label="Message"
        id="auto-resize-single-row-textarea"
        resize="auto"
        rows="1"
        expand
        placeholder="Write a message"
      ></nord-textarea>
```

### Rows

```html
<nord-stack>
      <nord-textarea label="Fixed rows (resize vertical)"
          id="rows-fixed-textarea"
          rows="5"
          placeholder="Starts at 5 rows; drag the handle to resize"
        ></nord-textarea>
      <nord-textarea label="Minimum rows (resize auto)"
          id="rows-auto-textarea"
          rows="5"
          resize="auto"
          placeholder="Starts at 5 rows; grows as you type past them"
        ></nord-textarea>
    </nord-stack>
```

### Basic

```html
<nord-field>
      <nord-field-label for="basic-textarea">Label</nord-field-label>
      <nord-textarea id="basic-textarea" value="Value"></nord-textarea>
    </nord-field>
```

### Character Counter

```html
<nord-textarea label="Label"
        id="character-counter-textarea"
        value="Value"
        maxlength="100"
        character-counter
      ></nord-textarea>
```

### Custom Height

```html
<nord-textarea label="Label"
        id="custom-height-textarea"
        expand
        resize="auto"
        class="n:[--n-textarea-block-size:200px]"
      ></nord-textarea>
```

### Disabled

```html
<nord-field>
      <nord-field-label for="disabled-textarea">Label</nord-field-label>
      <nord-textarea id="disabled-textarea" value="Some value" disabled></nord-textarea>
    </nord-field>
```

### Expanded

```html
<nord-textarea label="Message" id="expanded-textarea" expand></nord-textarea>
```

### Hidden Label

```html
<nord-field>
      <nord-visually-hidden>
        <nord-field-label for="hidden-label-textarea">Message</nord-field-label>
      </nord-visually-hidden>
      <nord-textarea id="hidden-label-textarea" placeholder="Enter your message here"></nord-textarea>
    </nord-field>
```

### Readonly

```html
<nord-field>
      <nord-field-label for="readonly-textarea">Label</nord-field-label>
      <nord-textarea id="readonly-textarea" value="Value" readonly></nord-textarea>
    </nord-field>
```

### Required

```html
<nord-textarea label="Required" id="required-textarea" required value="Value"></nord-textarea>
```

### Size

```html
<nord-stack>
      <nord-textarea label="Label" id="size-s-textarea" size="s" placeholder="Write your message"></nord-textarea>
      <nord-textarea label="Label" id="size-m-textarea" size="m" placeholder="Write your message"></nord-textarea>
      <nord-textarea label="Label" id="size-l-textarea" size="l" placeholder="Write your message"></nord-textarea>
    </nord-stack>
```

### Text Selection

```html
<nord-stack>
      <nord-textarea label="Text selection" id="text-selection-textarea" value="Norfryd"></nord-textarea>
      <nord-stack direction="horizontal" gap="s">
        <nord-button-group>
          <nord-button id="select-all-button" size="s">Select all</nord-button>
          <nord-button id="select-range-button" size="s">Select range</nord-button>
        </nord-button-group>
        <nord-button-group>
          <nord-button id="replace-selection-button" size="s">Replace selection</nord-button>
          <nord-button id="remove-selection-button" size="s">Remove selection</nord-button>
        </nord-button-group>
      </nord-stack>
    </nord-stack>
```

### With A Complex Error

```html
<nord-field invalid>
      <nord-field-label for="complex-error-textarea">Message</nord-field-label>
      <nord-textarea id="complex-error-textarea"></nord-textarea>
      <nord-field-error>This field is <strong>required</strong></nord-field-error>
    </nord-field>
```

### With A Complex Hint

```html
<nord-field>
      <nord-field-label for="complex-hint-textarea">Label</nord-field-label>
      <nord-textarea id="complex-hint-textarea" expand></nord-textarea>
      <nord-field-description>
        Hint is an accessible way to provide <strong>additional information</strong> that might help the user
      </nord-field-description>
    </nord-field>
```

### With A Complex Label

```html
<nord-field>
      <nord-field-label for="complex-label-textarea"
        >Label <span class="n:text-[var(--n-color-status-success)]">with color</span></nord-field-label
      >
      <nord-textarea id="complex-label-textarea"></nord-textarea>
    </nord-field>
```

### With A Hint

```html
<nord-textarea label="Label" hint="Hint is an accessible way to provide additional information that might help the user" hint-below id="with-hint-textarea" expand></nord-textarea>
```

### With A Hint Below

```html
<nord-field invalid>
      <nord-field-label for="hint-below-textarea">Label</nord-field-label>
      <nord-textarea id="hint-below-textarea" expand></nord-textarea>
      <nord-field-error>This field is required</nord-field-error>
      <nord-field-description>
        Hint is an accessible way to provide additional information that might help the user
      </nord-field-description>
    </nord-field>
```

### With A Placeholder

```html
<nord-textarea label="Message" id="with-placeholder-textarea" placeholder="Placeholder text goes here"></nord-textarea>
```

### With Error

```html
<nord-field invalid>
      <nord-field-label for="with-error-textarea">Label</nord-field-label>
      <nord-textarea id="with-error-textarea"></nord-textarea>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### Standalone

```html
<nord-textarea label="Bio" hint="A short description of yourself." hint-below></nord-textarea>
```

### Field

```html
<nord-field>
      <nord-field-label for="bio">Bio</nord-field-label>
      <nord-textarea id="bio"></nord-textarea>
      <nord-field-description>A short description of yourself.</nord-field-description>
    </nord-field>
```

## API Reference

### Properties

- **resize** (`'vertical' | 'auto'`, default: `'vertical'`) — Controls whether the textarea is resizable.
By default is manually resizable vertically.
Set to "auto" to enable auto-resizing as content grows.
- **expand** (`boolean`, default: `false`) — Controls whether the textarea expands to fill the width of its container.
- **rows** (`number`, default: `3`) — Controls the number of visible text rows, setting the textarea's minimum height. Mirrors the
native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#rows"><code>rows</code></a>
attribute. When <code>resize="auto"</code>, this is the starting height the textarea grows from — e.g.
<code>rows="1"</code> for a single-row composer that expands as the user types. The
<code>--n-textarea-block-size</code> Custom Property can raise the minimum height above the row-derived
one (the effective minimum is the larger of the two).
- **maxlength** (`number | undefined`) — Controls the max allowed length for the textarea.
- **character-counter** (`boolean`, default: `false`) — Controls whether to show a count of the number of characters in the textarea.
When combined with <code>maxlength</code>, both the count and the max length are shown.
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

- **select** (`NordEvent`) — Fired when some text has been selected.
- **input** (`NordEvent`) — Fired as the user types into the input.
- **change** (`NordEvent`) — Fired whenever the input's value is changed via user interaction.

### Slots

- **label** — Use when a label requires more than plain text.
- **hint** — Optional slot that holds hint text for the textarea.
- **error** — Optional slot that holds error text for the textarea.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### CSS Custom Properties

- `--n-textarea-inline-size` (default: `240px`) — Controls the inline size, or width, of the textarea.
- `--n-textarea-block-size` (default: `auto`) — Raises the minimum block size, or height, of the textarea above the height derived from <code>rows</code>. The effective minimum is the larger of this and the <code>rows</code> height. When <code>resize="auto"</code>, the textarea grows from that minimum as content is added.
- `--n-textarea-max-block-size` (default: `500px`) — Controls the maximum block size, or height, of the textarea. When <code>resize="auto"</code>, the textarea stops growing at this height and a scrollbar appears.
- `--n-textarea-background` (default: `var(--n-color-active)`) — Controls the background of the textarea, using our <a href="/tokens/#color">color tokens</a>.
- `--n-textarea-color` (default: `var(--n-color-text)`) — Controls the text color of the textarea, using our <a href="/tokens/#color">color tokens</a>.
- `--n-textarea-border-color` (default: `var(--n-color-border-strong)`) — Controls the border color of the textarea, using our <a href="/tokens/#color">color tokens</a>.
- `--n-textarea-border-radius` (default: `var(--n-border-radius-s)`) — Controls how rounded the corners are, using <a href="/tokens/#border-radius">border radius tokens</a>.
- `--n-label-color` (default: `var(--n-color-text)`) — Controls the text color of the label, using our <a href="/tokens/#color">color tokens</a>.

### Dependencies

- `input-group`

<!--
Source: https://nordhealth.design/raw/components/textarea.md
-->
