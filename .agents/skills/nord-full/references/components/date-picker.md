# nord-date-picker

> Date Picker allows user to enter a date either through text input,
> or by choosing a date from the calendar. Please note that the date
> must be passed in ISO-8601 format: YYYY-MM-DD.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use when the user needs to choose a single date or a date range.

> **Don't:** - Don’t use for entering date of birth. Use input component instead.
- Don’t use to choose a date that is over 10 years in the future or the past.

---

## Hint placement

Hint text is rendered above the control by default to preserve existing behavior for current consumers. Use the `hint-below` property to opt in to rendering the hint below the control and any error.

This is a non-breaking rollout for teams adopting the new layout gradually. Existing integrations keep the current placement unless `hint-below` is explicitly set.

---

## Keyboard accessibility

Date picker is built to closely follow [W3C Date Picker Dialog example](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html){rel="[\"nofollow\"]"} with some small exceptions to e.g. better support iOS VoiceOver and Android TalkBack.

### Choose date button

- `Space, Enter`: Opens the date picker dialog and moves focus to the first select menu in the dialog.

### Date picker dialog

- `Esc`: Closes the date picker dialog and moves focus back to the “choose date” button.
- `Tab`: Moves focus to the next element in the dialog. Please note since the calendar uses `role="grid"`, only one button in the calendar grid is in the tab sequence. Additionally, if focus is on the last focusable element, focus is next moved back to the first focusable element inside the date picker dialog.
- `Shift + Tab`: Same as above, but in reverse order.

### Date picker dialog: Month/year buttons

- `Space, Enter`: Changes the month and/or year displayed.

### Date picker dialog: Date grid

- `Space, Enter`: Selects a date, closes the dialog, and moves focus back to the “Choose Date” button. Additionally updates the value of the date picker input with the selected date, and adds selected date to “Choose Date” button label.
- `Arrow up`: Moves focus to the same day of the previous week.
- `Arrow down`: Moves focus to the same day of the next week.
- `Arrow right`: Moves focus to the next day. In right-to-left languages, moves focus to the previous day.
- `Arrow left`: Moves focus to the previous day. In right-to-left languages, moves focus to the next day.
- `Home`: Moves focus to the first day (e.g Monday) of the current week.
- `End`: Moves focus to the last day (e.g. Sunday) of the current week.
- `Page Up`: Changes the grid of dates to the previous month and sets focus on the same day of the same week.
- `Shift + Page Up`: Changes the grid of dates to the previous year and sets focus on the same day of the same week.
- `Page Down`: Changes the grid of dates to the next month and sets focus on the same day of the same week.
- `Shift + Page Down`: Changes the grid of dates to the next year and sets focus on the same day of the same week.

#### Date picker dialog: Close button

- `Space, Enter`: Closes the dialog, moves focus to “choose date” button, but does not update the date in input.

## Examples

### Basic

```html
<nord-field>
      <nord-field-label for="basic-date-picker">Label</nord-field-label>
      <nord-date-picker id="basic-date-picker" value="2021-01-13"></nord-date-picker>
    </nord-field>
```

### Change First Day Of Week

```html
<nord-date-picker label="Label" id="first-day-date-picker" first-day-of-week="0"></nord-date-picker>
```

### Change Today

```html
<nord-date-picker label="Label" id="change-today-date-picker" value="2025-01-03" today="2026-03-06"></nord-date-picker>
```

### Customizing Date Format

```html
<nord-date-picker label="US date format" id="custom-format-date-picker" value="2021-01-01" .dateAdapter=${usDateAdapter}></nord-date-picker>
```

### Disabled

```html
<nord-field>
      <nord-field-label for="disabled-date-picker">Label</nord-field-label>
      <nord-date-picker id="disabled-date-picker" value="2021-01-01" disabled></nord-date-picker>
    </nord-field>
```

### Disabling Days

```html
<nord-date-picker label="Weekends disallowed" id="disabling-days-date-picker" .isDateDisabled=${isWeekend}></nord-date-picker>
```

### Expanded

```html
<nord-date-picker label="Label" id="expanded-date-picker" expand></nord-date-picker>
```

### Hidden Label

```html
<nord-field>
      <nord-visually-hidden><nord-field-label for="hidden-label-date-picker">Date</nord-field-label></nord-visually-hidden>
      <nord-date-picker id="hidden-label-date-picker" placeholder="Type date here" expand></nord-date-picker>
    </nord-field>
```

### Highlighting Days

```html
<nord-date-picker label="Label" id="highlighting-days-date-picker" value="2022-01-12" .isDateHighlighted=${highlightEverySixthDay}></nord-date-picker>
```

### Readonly

```html
<nord-field>
      <nord-field-label for="readonly-date-picker">Label</nord-field-label>
      <nord-date-picker id="readonly-date-picker" value="2021-01-13" readonly></nord-date-picker>
    </nord-field>
```

### Required

```html
<nord-field>
      <nord-field-label for="required-date-picker" required>Required</nord-field-label>
      <nord-date-picker id="required-date-picker" required value="2021-01-13"></nord-date-picker>
    </nord-field>
```

### Size

```html
<nord-field-group>
      <nord-date-picker label="Date" id="date-picker-size-s" size="s" placeholder="2021-01-13"></nord-date-picker>
      <nord-date-picker label="Date" id="date-picker-size-m" size="m" placeholder="2021-01-13"></nord-date-picker>
      <nord-date-picker label="Date" id="date-picker-size-l" size="l" placeholder="2021-01-13"></nord-date-picker>
    </nord-field-group>
```

### Using Min Max

```html
<nord-date-picker label="Label" id="min-max-date-picker" value="2021-02-01" min="2021-01-15" max="2021-03-15"></nord-date-picker>
```

### Using Show Method

```html
<nord-date-picker label="Label" id="show-method-date-picker" ${ref(showOnRef)}></nord-date-picker>
```

### Validation

```html
<nord-date-picker
      label="Choose date"
      id="validation-date-picker"
      placeholder="mm/dd/yyyy"
      required
      .dateAdapter=${usDateAdapter}
    ></nord-date-picker>
```

### With A Complex Hint

```html
<nord-field>
      <nord-field-label for="complex-hint-date-picker">Label</nord-field-label>
      <nord-date-picker id="complex-hint-date-picker" expand></nord-date-picker>
      <nord-field-description>
        Hint is an accessible way to provide <strong>additional information</strong> that might help the user
      </nord-field-description>
    </nord-field>
```

### With A Complex Label

```html
<nord-field>
      <nord-field-label for="complex-label-date-picker">Label <span class="n:text-[var(--n-color-status-success)]">with color</span></nord-field-label>
      <nord-date-picker id="complex-label-date-picker"></nord-date-picker>
    </nord-field>
```

### With A Hint

```html
<nord-field>
      <nord-field-label for="with-hint-date-picker">Label</nord-field-label>
      <nord-date-picker id="with-hint-date-picker" expand></nord-date-picker>
      <nord-field-description>Hint is an accessible way to provide additional information that might help the user</nord-field-description>
    </nord-field>
```

### With A Hint Below

```html
<nord-field invalid>
      <nord-field-label for="with-hint-below-date-picker">Label</nord-field-label>
      <nord-date-picker id="with-hint-below-date-picker" expand></nord-date-picker>
      <nord-field-description>Hint is an accessible way to provide additional information that might help the user</nord-field-description>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### With A Placeholder

```html
<nord-date-picker label="Date" id="with-placeholder-date-picker" placeholder="e.g. 2020-01-01"></nord-date-picker>
```

### Inside Container Query

```html
<p class="n:text-s n:text-weaker n:mbe-s">
      This wrapper has <code>container-type: inline-size</code> which creates a new containing block.
      The date picker calendar should still open in the correct position.
    </p>

    <div
      class="n:[container-type:inline-size] n:border-2 n:[border-style:dashed] n:border-[var(--n-color-border)] n:p-m n:container-s n:mx-auto"
    >
      <nord-field>
        <nord-field-label for="container-query-date-picker">Date</nord-field-label>
        <nord-date-picker id="container-query-date-picker" value="2021-01-13"></nord-date-picker>
      </nord-field>
    </div>
```

### With Error

```html
<nord-field invalid>
      <nord-field-label for="with-error-date-picker">Date of birth</nord-field-label>
      <nord-date-picker id="with-error-date-picker"></nord-date-picker>
      <nord-field-error>This field is required</nord-field-error>
    </nord-field>
```

### Required And Readonly

```html
<nord-stack>
      <nord-date-picker label="Required" id="required-readonly-1" required value="2021-01-13"></nord-date-picker>
      <nord-date-picker label="Readonly" id="required-readonly-2" value="2021-01-13" readonly></nord-date-picker>
    </nord-stack>
```

### Rtl Example

```html
<nord-date-picker label="Label" id="rtl-date-picker" value="2021-01-13" expand></nord-date-picker>
```

### Standalone

```html
<nord-date-picker label="Date of birth" hint="DD/MM/YYYY" hint-below></nord-date-picker>
```

### Field

```html
<nord-field>
      <nord-field-label for="dob">Date of birth</nord-field-label>
      <nord-date-picker id="dob"></nord-date-picker>
      <nord-field-description>DD/MM/YYYY</nord-field-description>
    </nord-field>
```

### Week Numbers

```html
<nord-date-picker label="Appointment" id="week-numbers-date-picker" week-numbers open today="2026-09-18" value="2026-09-18"></nord-date-picker>
```

## API Reference

### Properties

- **value** (`string`, default: `''`) — Date value. Must be in IS0-8601 format: YYYY-MM-DD.
- **open** (`boolean`, default: `false`) — Controls whether date picker dialog is open or not.
- **min** (`string | undefined`) — Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
This setting can be used alone or together with the max property.
- **max** (`string | undefined`) — Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
This setting can be used alone or together with the min property.
- **today** (`string | undefined`) — The date that is considered today. Must be in IS0-8601 format: YYYY-MM-DD.
If not set, the current local date of the user is used.
- **first-day-of-week** (`DaysOfWeek`) — Which day is considered first day of the week? <code>0</code> for Sunday, <code>1</code> for Monday, etc.
Default is Monday.
- **week-numbers** (`boolean`, default: `false`) — Displays the ISO-8601 week number of each visible week in a leading column
of the calendar. Forwarded to <code>nord-calendar</code>.
- **expand** (`boolean`, default: `false`) — Controls whether the date picker expands to fill the width of its container.
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
- **readonly** (`boolean`, default: `false`) — Makes the component readonly, so that it is not editable.
Readonly differs from disabled in that readonly fields are still focusable and will be submitted with a form.
- **disabled** (`boolean`, default: `false`) — Makes the component disabled. This prevents users from
being able to interact with the component, and conveys
its inactive state to assistive technologies.
- **name** (`string | undefined`) — The name of the form component.
- **form** (`HTMLFormElement | null`) — Gets the form, if any, associated with the form element.
The setter accepts a string, which is the id of the form.

### Events

- **change** (`NordEvent`) — Fired whenever the input's value is changed via user interaction.
- **open** (`NordEvent`) — Dispatched when the popout is opened.
- **close** (`NordEvent`) — Dispatched when the popout is closed.
- **nord-focus-date** (`DateSelectEvent`) — Dispatched when the calendar's focused date changes.
- **input** (`NordEvent`) — Fired as the user types into the input.

### Methods

- **hide** — `hide(moveFocusToButton?: boolean) => void` — Hide the date picker programmatically.
- **show** — `show() => void` — Show the date picker programmatically.
- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### CSS Custom Properties

- `--n-label-color` (default: `var(--n-color-text)`) — Controls the text color of the label, using our <a href="/tokens/#color">color tokens</a>.

### Dependencies

- `field`
- `icon`
- `input`
- `button`
- `visually-hidden`
- `popout`
- `stack`
- `calendar`

<!--
Source: https://nordhealth.design/raw/components/date-picker.md
-->
