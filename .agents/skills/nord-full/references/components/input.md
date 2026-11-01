# nord-input

> Inputs are used to allow users to provide text input when the expected input is short.
> As well as plain text, Input supports various types of text, including passwords and numbers.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to provide a text input where the expected input is short.
- Use to only ask for information that’s really needed. Hide optional fields by default if possible or have them shown with a lower priority.
- Use help text and placeholder to provide additional, non-critical instructions.
- Validate input as soon as users have finished interacting with them (but not before).
- Where necessary, label the input as “Optional” when you need to request input that’s not required.

> **Don't:** - Don’t use when the expected text input is long. Use textarea component instead.
- Don’t use the placeholder to provide information that’s required to use the input. Hint text should be used for this purpose instead.

---

## Hint placement

Hint text is rendered above the control by default to preserve existing behavior for current consumers. Use the `hint-below` property to opt in to rendering the hint below the control and any error.

This is a non-breaking rollout for teams adopting the new layout gradually. Existing integrations keep the current placement unless `hint-below` is explicitly set.

---

## Content guidelines

Input labels act as a title for the text field. Labels should typically be short and in noun form:

> **Do:** Company name

> **Don't:** What is your company name?

When writing input labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Company name

> **Don't:** Company Name

When an input isn’t part of a form and is placed individually on a page, you could provide the input label as a call to action:

> **Do:** Leave a comment

> **Don't:** Comment

Do not use colons in input label:

> **Do:** First name

> **Don't:** First name:

---

## Types

This section describes the different input types, their purpose, and when to use each type.

| Name       | Purpose                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `text`     | The default and most common variant. Displayed as a single-line text field. Line-breaks are automatically removed from the input value.                      |
| `email`    | A field for editing an email address. Looks similar to a text input, but has validation parameters and relevant keyboard for devices with dynamic keyboards. |
| `password` | A single-line text field where the value is obscured. This type will alert user if a site is not secure.                                                     |
| `tel`      | A field for entering a telephone number. Displays a number keypad on mobile devices.                                                                         |
| `url`      | A field variant that is used to let the user enter and edit an URL.                                                                                          |
| `search`   | A single-line text field for entering search strings.                                                                                                        |
| `number`   | Used to let the user enter a number.                                                                                                                         |

---

## Icon usage in input

Each [input size](/components/input/?example=size) has a recommended icon size. The medium input uses the `s` icon size, the small input uses the `xs` icon size, and the large input uses the `m` icon size. The icon will adjust size automatically based on the button size, so you will get the correct behavior by default. However, this can be overridden by explicitly setting a size on the icon.

---

## Input mode

The `inputmode` attribute provides a hint to the browser about what type of keyboard to show on mobile devices. This is particularly useful for optimizing the mobile experience by opening the appropriate keyboard (numeric, email, URL, etc.) based on the expected input.

- The `inputmode` attribute accepts the following values: `none`, `text`, `decimal`, `numeric`, `tel`, `search`, `email`, and `url`.
- The component automatically defaults `inputmode` based on the input `type`:

  - `type="number"` → `inputmode="numeric"`
  - `type="email"` → `inputmode="email"`
  - `type="tel"` → `inputmode="tel"`
  - `type="url"` → `inputmode="url"`
  - `type="search"` → `inputmode="search"`
- You can override these defaults by explicitly setting a custom `inputmode` value, for example `inputmode="decimal"` on a number type input, or `inputmode="numeric"` on a text type input.

---

## Input masking

We recommend using [Maskito](https://maskito.dev/){rel="[\"nofollow\"]"} for creating an [input mask](/components/input/?example=input+mask) which ensures that users type values according to a predefined format.

## Examples

### Autocomplete

```html
<nord-field>
      <nord-field-label for="autocomplete-input">Email</nord-field-label>
      <nord-input id="autocomplete-input" type="email" name="email" autocomplete="email"></nord-input>
    </nord-field>
```

### Basic

```html
<nord-field>
      <nord-field-label for="basic-input">Label</nord-field-label>
      <nord-input id="basic-input" value="Value"></nord-input>
    </nord-field>
```

### Custom Button

```html
<style>
      [type="password"] nord-icon[name="interface-edit-off"],
      [type="text"] nord-icon[name="interface-edit-on"] {
        display: none;
      }
    </style>
    <nord-stack>
      <nord-input label="Password" id="custom-button-password" value="Secret password 123" type="password">
        <nord-button slot="end" aria-describedby="password-tooltip" square>
          <nord-icon name="interface-edit-on"></nord-icon>
          <nord-icon name="interface-edit-off"></nord-icon>
        </nord-button>
      </nord-input>
      <nord-tooltip id="password-tooltip">Show / hide password</nord-tooltip>

      <nord-input label="API key" id="custom-button-api" value="SUPERSECRETCODE" type="password">
        <nord-button slot="start" aria-describedby="api-tooltip" square>
          <nord-icon name="interface-edit-on"></nord-icon>
          <nord-icon name="interface-edit-off"></nord-icon>
        </nord-button>
      </nord-input>
      <nord-tooltip id="api-tooltip">Show / hide API key</nord-tooltip>

      <nord-input label="Pet name" id="custom-button-pet" value="Norfryd" type="text">
        <nord-dropdown id="custom-button-pet-dropdown" slot="start" size="s">
          <nord-button slot="toggle" aria-describedby="pet-tooltip" square>
            <nord-icon name="generic-feline"></nord-icon>
          </nord-button>
          <nord-dropdown-item>
            <nord-icon slot="start" name="generic-feline"></nord-icon>
            Feline
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-icon slot="start" name="generic-birds"></nord-icon>
            Bird
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-icon slot="start" name="generic-fish"></nord-icon>
            Fish
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-icon slot="start" name="generic-canine"></nord-icon>
            Canine
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-icon slot="start" name="generic-amphibia"></nord-icon>
            Amphibia
          </nord-dropdown-item>
        </nord-dropdown>
      </nord-input>
      <nord-tooltip id="pet-tooltip">Select an icon for your pet</nord-tooltip>

      <nord-input label="Livestock" id="custom-button-livestock" value="Q4 2022" type="text">
        <nord-dropdown id="custom-button-livestock-dropdown" slot="end" align="end" size="s">
          <nord-button slot="toggle" aria-describedby="livestock-tooltip" square>
            <nord-icon name="generic-cattle"></nord-icon>
          </nord-button>
          <nord-dropdown-item>
            <nord-icon slot="start" name="generic-cattle"></nord-icon>
            Cattle
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-icon slot="start" name="generic-suidae"></nord-icon>
            Suidae
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-icon slot="start" name="generic-sheep"></nord-icon>
            Sheep
          </nord-dropdown-item>
        </nord-dropdown>
      </nord-input>
      <nord-tooltip id="livestock-tooltip">Select an icon for your livestock</nord-tooltip>
    </nord-stack>
```

### Custom Icon

```html
<nord-input label="Custom icon" id="custom-icon-input">
        <nord-icon slot="start" name="generic-telephone"></nord-icon>
      </nord-input>
```

### Custom Width

```html
<nord-stack>
      <nord-input label="Size" id="custom-width-1" class="n:[--n-input-inline-size:65px]" value="65px"></nord-input>
      <nord-input label="Size" id="custom-width-2" class="n:[--n-input-inline-size:150px]" value="150px"></nord-input>
      <nord-input label="Size" id="custom-width-3" value="Default"></nord-input>
      <nord-input label="Size" id="custom-width-4" value="Expand to fill the available width" expand></nord-input>
    </nord-stack>
```

### Disabled

```html
<nord-stack>
      <nord-field>
        <nord-field-label for="disabled-1">Label</nord-field-label>
        <nord-input id="disabled-1" value="Some value" disabled></nord-input>
      </nord-field>
      <nord-field>
        <nord-field-label for="disabled-2">Amount</nord-field-label>
        <nord-input id="disabled-2" value="20.00" disabled>
          <div slot="start">£</div>
        </nord-input>
      </nord-field>
    </nord-stack>
```

### Disallow Pattern

```html
<nord-input label="Numbers only" id="disallow-pattern-input" disallow-pattern="[^0-9]"></nord-input>
```

### Expanded

```html
<nord-input label="First name" id="expanded-input" expand></nord-input>
```

### Hidden Label

```html
<nord-field>
      <nord-visually-hidden><nord-field-label for="hidden-label-input">Search</nord-field-label></nord-visually-hidden>
      <nord-input id="hidden-label-input" type="search" placeholder="Filter icons by name and tags" expand></nord-input>
    </nord-field>
```

### Input Mask

```html
<nord-input label="Time" hint="Time must be in 2-digit hours and 2-digit minutes." hint-below id="input-mask-input" placeholder="HH:MM" type="number" ${ref(el => el && applyTimeMask(el as HTMLElement))}>
      <nord-icon slot="end" name="interface-time"></nord-icon>
    </nord-input>
```

### Inputmode

```html
<nord-stack direction="vertical" gap="m">
      <h3>Default inputmode based on type</h3>
      <nord-input label="Number type (default: inputmode='numeric')"
          id="inputmode-number"
          type="number"
          placeholder="Automatically shows numeric keyboard"
        ></nord-input>

      <nord-input label="Email type (default: inputmode='email')"
          id="inputmode-email"
          type="email"
          placeholder="Automatically shows email keyboard"
        ></nord-input>

      <nord-input label="Telephone type (default: inputmode='tel')"
          id="inputmode-tel"
          type="tel"
          placeholder="Automatically shows telephone keyboard"
        ></nord-input>

      <nord-input label="URL type (default: inputmode='url')"
          id="inputmode-url"
          type="url"
          placeholder="Automatically shows URL keyboard"
        ></nord-input>

      <nord-input label="Search type (default: inputmode='search')"
          id="inputmode-search"
          type="search"
          placeholder="Automatically shows search keyboard"
        ></nord-input>

      <h3>Custom inputmode overrides</h3>
      <nord-input label="Number type with decimal inputmode (inputmode='decimal')"
          id="inputmode-decimal"
          type="number"
          inputmode="decimal"
          placeholder="Overrides default numeric with decimal"
        ></nord-input>

      <nord-input label="Text type with numeric inputmode (inputmode='numeric')"
          id="inputmode-numeric"
          type="text"
          inputmode="numeric"
          placeholder="Custom inputmode on text type"
        ></nord-input>
    </nord-stack>
```

### Readonly

```html
<nord-field>
      <nord-field-label for="readonly-input">Readonly</nord-field-label>
      <nord-input id="readonly-input" value="Value" readonly></nord-input>
    </nord-field>
```

### Required

```html
<nord-input label="Required" id="required-input" value="Value"></nord-input>
```

### Search

```html
<nord-field>
      <nord-visually-hidden><nord-field-label for="search-input">Search</nord-field-label></nord-visually-hidden>
      <nord-input id="search-input" type="search" placeholder="Search and filter"></nord-input>
    </nord-field>
```

### Size

```html
<nord-stack gap="l">
      <nord-stack direction="horizontal" align-items="end" wrap>
        <nord-input label="Email (s)" id="size-s-email" size="s" type="email" placeholder="user@example.com"></nord-input>
        <nord-input label="Date (s)" id="size-s-date" size="s" type="date"></nord-input>
        <nord-input label="Time (s)" id="size-s-time" size="s" type="time"></nord-input>
        <nord-input label="File (s)" id="size-s-file" size="s" type="file"></nord-input>
      </nord-stack>
      <nord-stack direction="horizontal" align-items="end" wrap>
        <nord-input label="Email (m)" id="size-m-email" size="m" type="email" placeholder="user@example.com"></nord-input>
        <nord-input label="Date (m)" id="size-m-date" size="m" type="date"></nord-input>
        <nord-input label="Time (m)" id="size-m-time" size="m" type="time"></nord-input>
        <nord-input label="File (m)" id="size-m-file" size="m" type="file"></nord-input>
      </nord-stack>
      <nord-stack direction="horizontal" align-items="end" wrap>
        <nord-input label="Email (l)" id="size-l-email" size="l" type="email" placeholder="user@example.com"></nord-input>
        <nord-input label="Date (l)" id="size-l-date" size="l" type="date"></nord-input>
        <nord-input label="Time (l)" id="size-l-time" size="l" type="time"></nord-input>
        <nord-input label="File (l)" id="size-l-file" size="l" type="file"></nord-input>
      </nord-stack>
    </nord-stack>
```

### Small With Custom Label Color

```html
<nord-field class="n:[--n-label-color:var(--n-color-text-weaker)]">
      <nord-field-label for="small-custom-label">Email</nord-field-label>
      <nord-input
        id="small-custom-label"
        size="s"
        type="email"
        placeholder="you@example.com"
      ></nord-input>
    </nord-field>
```

### Stepper

```html
<nord-stack>
      <nord-field>
        <nord-field-label for="stepper-input">Amount</nord-field-label>
        <nord-input
          id="stepper-input"
          value="3"
          type="number"
          disallow-pattern="[^0-9]"
          class="n:[--n-input-inline-size:130px] n:[--n-input-text-align:center]"
        >
          <nord-button id="stepper-decrease" slot="start" aria-describedby="decrease-tooltip" tabindex="-1" square>
            <nord-icon name="interface-remove"></nord-icon>
          </nord-button>
          <nord-button id="stepper-increase" slot="end" aria-describedby="increase-tooltip" tabindex="-1" square>
            <nord-icon name="interface-add"></nord-icon>
          </nord-button>
        </nord-input>
      </nord-field>
      <nord-tooltip id="decrease-tooltip">Decrease amount</nord-tooltip>
      <nord-tooltip id="increase-tooltip">Increase amount</nord-tooltip>
    </nord-stack>
```

### Text Selection

```html
<nord-stack>
      <nord-input label="Text selection" id="text-selection-input" value="Norfryd"></nord-input>
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

### Units

```html
<nord-stack>
      <nord-input label="Size" id="units-size" type="unit" placeholder="1234">
          <div slot="end">cm</div>
        </nord-input>
      <nord-input label="Distance" id="units-distance" type="unit" placeholder="1234">
          <div slot="end">km</div>
        </nord-input>
      <nord-input label="USD" id="units-usd" type="unit" placeholder="12.00" class="n:[--n-input-text-align:start]">
          <div slot="start">$</div>
        </nord-input>
    </nord-stack>
```

### With A Complex Hint

```html
<nord-field>
      <nord-field-label for="complex-hint-input">Label</nord-field-label>
      <nord-input id="complex-hint-input" expand></nord-input>
      <nord-field-description>
        Hint is an accessible way to provide <strong>additional information</strong> that might help the user
      </nord-field-description>
    </nord-field>
```

### With A Complex Label

```html
<nord-field>
      <nord-field-label for="complex-label-input">Label <span class="n:text-[var(--n-color-status-success)]">with color</span></nord-field-label>
      <nord-input id="complex-label-input"></nord-input>
    </nord-field>
```

### With A Hint

```html
<nord-input label="Label" hint="Hint is an accessible way to provide additional information that might help the user" hint-below id="with-hint-input" expand></nord-input>
```

### With A Hint Below

```html
<nord-field invalid>
      <nord-field-label for="with-hint-below-input">Label</nord-field-label>
      <nord-input id="with-hint-below-input" expand></nord-input>
      <nord-field-description>Hint is an accessible way to provide additional information that might help the user</nord-field-description>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### With A Placeholder

```html
<nord-input label="First name" id="with-placeholder-input" placeholder="e.g. John"></nord-input>
```

### With A Prefix Or Suffix

```html
<nord-stack>
      <nord-input label="With prefix" id="prefix-input">
          <div slot="start">$</div>
        </nord-input>
      <nord-input label="With suffix" id="suffix-input">
          <div slot="end">cm</div>
        </nord-input>
      <nord-input label="Dosage" id="dosage-input">
          <div slot="end">mL per hour</div>
        </nord-input>
    </nord-stack>
```

### With Error

```html
<nord-field invalid>
      <nord-field-label for="with-error-input">Label</nord-field-label>
      <nord-input id="with-error-input"></nord-input>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### Form

```html
<form id="profile-form" class="n:container-xxs">
      <nord-field-group>
        <nord-input label="Name" id="form-name" placeholder="Laura Williams" expand></nord-input>
        <nord-input label="Email" hint="We'll never share your email with anyone." hint-below id="form-email" type="email" placeholder="laura.williams@nordhealth.com" expand></nord-input>
        <nord-input label="Phone" id="form-phone" type="tel" placeholder="+44 1225 000000" expand></nord-input>
        <nord-select label="Country" id="form-country" expand>
          <option>United Kingdom</option>
          <option>United States</option>
          <option>Norway</option>
          <option>Sweden</option>
          <option>Finland</option>
        </nord-select>
        <nord-input label="Address" id="form-address" placeholder="12 Pulteney Bridge, Bath" expand></nord-input>
      </nord-field-group>
      <div class="n:flex n:justify-end n:gap-s n:mbs-l">
        <nord-button type="reset">Cancel</nord-button>
        <nord-button variant="primary" type="submit">Submit</nord-button>
      </div>
    </form>
```

### Date

```html
<nord-input
      label="Appointment date"
      id="date-input"
      type="date"
      name="date"
      class="n:[--n-input-picker-indicator-display:none]"
    >
      <nord-button id="date-picker-button" slot="end" square aria-label="Open date picker">
        <nord-icon name="interface-calendar"></nord-icon>
      </nord-button>
    </nord-input>
```

### Time

```html
<nord-input
      label="Appointment time"
      id="time-input"
      type="time"
      name="time"
      class="n:[--n-input-picker-indicator-display:none]"
    >
      <nord-button id="time-picker-button" slot="end" square aria-label="Open time picker">
        <nord-icon name="interface-time"></nord-icon>
      </nord-button>
    </nord-input>
```

### Date Time

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="datetime-input">Starts at</nord-field-label>
      <nord-input id="datetime-input" type="datetime-local" name="datetime"></nord-input>
    </nord-field>
```

### File

```html
<nord-input label="Picture" hint="Select a picture to upload." hint-below id="file-picture" type="file" name="picture"></nord-input>
```

### Inline

```html
<div class="n:flex n:gap-s n:container-xxs">
      <nord-field class="n:flex-1">
        <nord-visually-hidden><nord-field-label for="inline-search">Search</nord-field-label></nord-visually-hidden>
        <nord-input id="inline-search" type="search" placeholder="Search patients…" expand></nord-input>
      </nord-field>
      <nord-button variant="primary">Search</nord-button>
    </div>
```

### Grid

```html
<nord-field-group class="n:grid! n:grid-cols-2 n:gap-m n:container-xxs">
      <nord-input label="First name" id="grid-first" placeholder="Laura" expand></nord-input>
      <nord-input label="Last name" id="grid-last" placeholder="Williams" expand></nord-input>
    </nord-field-group>
```

### Badge

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="badge-webhook" class="n:flex! n:items-center n:gap-s">
        Webhook URL
        <nord-badge variant="highlight">Beta</nord-badge>
      </nord-field-label>
      <nord-input id="badge-webhook" placeholder="https://example.com/hooks" expand></nord-input>
    </nord-field>
```

### Standalone

```html
<nord-input label="Email" hint="We'll never share it." hint-below type="email" required></nord-input>
```

### Field

```html
<nord-field>
      <nord-field-label for="email">Email</nord-field-label>
      <nord-input id="email" type="email" required></nord-input>
      <nord-field-description>We'll never share it.</nord-field-description>
    </nord-field>
```

## API Reference

### Properties

- **type** (`| 'text'
    | 'email'
    | 'password'
    | 'tel'
    | 'url'
    | 'search'
    | 'number'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'file'
    | 'unit'
    | 'button'`, default: `'text'`) — The type of the input.
- **expand** (`boolean`, default: `false`) — Controls whether the input expands to fill the width of its container.
- **disallow-pattern** (`string | undefined`, default: `undefined`) — Optionally disallow certain characters from being used inside the input, using a regex pattern.
- **inputmode** (`'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | undefined`, default: `undefined`) — The inputmode attribute provides a hint to the browser about what type of keyboard to open on mobile devices.
Valid values: none, text, decimal, numeric, tel, search, email, url
When not explicitly set, defaults based on input type:
- type="number" → inputmode="numeric"
- type="email" → inputmode="email"
- type="tel" → inputmode="tel"
- type="url" → inputmode="url"
- type="search" → inputmode="search"
Can be explicitly overridden for any type.
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
- **hint** — Optional slot that holds hint text for the input.
- **error** — Optional slot that holds error text for the input.
- **start** — Optional slot used to place an icon or prefix at the start of the input.
- **end** — Optional slot used to place an icon or suffix at the end of the input.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### CSS Custom Properties

- `--n-input-inline-size` (default: `240px`) — Controls the inline size, or width, of the input.
- `--n-input-block-size` (default: `var(--n-space-xl)`) — Controls the block size, or height, of the input using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-input-background` (default: `var(--n-color-surface)`) — Controls the background of the input, using our <a href="/tokens/#color">color tokens</a>.
- `--n-input-color` (default: `var(--n-color-text)`) — Controls the text color of the input, using our <a href="/tokens/#color">color tokens</a>.
- `--n-input-border-color` (default: `var(--n-color-border-strong)`) — Controls the border color of the input, using our <a href="/tokens/#color">color tokens</a>.
- `--n-input-border-radius` (default: `var(--n-border-radius-s)`) — Controls how rounded the corners are, using <a href="/tokens/#border-radius">border radius tokens</a>.
- `--n-input-text-align` (default: `start`) — Controls the alignment of text within the input itself.
- `--n-label-color` (default: `var(--n-color-text)`) — Controls the text color of the label, using our <a href="/tokens/#color">color tokens</a>.

### Dependencies

- `icon`
- `input-group`

<!--
Source: https://nordhealth.design/raw/components/input.md
-->
