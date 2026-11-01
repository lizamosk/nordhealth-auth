# nord-calendar

> Calendar allows user to pick a date. It comes with built-in
> functionality that allows you to set a minimum and a maximum allowed date.
> Please note that the date must be passed in ISO-8601 format.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use when the user needs to choose a single date or a date range.
- Close calendar after a single date is selected, unless a range with a start and end date is required.

> **Don't:** - Don’t use for entering date of birth. Use input component instead.
- Don’t use for choosing a date that is over 10 years in the future or the past.

---

## Keyboard accessibility

Calendar component is built to closely follow [W3C Date Picker Dialog example](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html){rel="[\"nofollow\"]"} with some small exceptions to e.g. better support iOS VoiceOver and Android TalkBack.

### Month/year buttons

- `Space, Enter`: Changes the month and/or year displayed.

### Calendar grid

- `Space, Enter`: Selects a date.
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

## Examples

### Basic

```html
<nord-calendar></nord-calendar>
```

### Small

```html
<nord-calendar size="s" value="2023-11-02" today="2023-11-02"></nord-calendar>
```

### Change Today

```html
<nord-calendar value="2025-01-03" today="2026-03-06"></nord-calendar>
```

### Date Selected

```html
<nord-calendar value="2022-01-11"></nord-calendar>
```

### Disabling Days

```html
<nord-calendar id="cal-disabling" value="2022-01-12" .isDateDisabled=${isWeekend}></nord-calendar>
```

### Expanded

```html
<nord-calendar expand></nord-calendar>
```

### Focus Date Event

```html
<nord-stack>
      <output id="focus-date-output"></output>
      <nord-calendar id="focus-date-calendar" value="2022-02-16"></nord-calendar>
    </nord-stack>
```

### Highlighting Days

```html
<nord-stack>
      <p>Highlighted dates are fully booked</p>
      <nord-calendar id="cal-highlighting" value="2022-01-12" .isDateHighlighted=${highlightEverySixthDay}></nord-calendar>
    </nord-stack>
```

### Inline

```html
<nord-calendar class="n:[--n-calendar-box-shadow:none]"></nord-calendar>
```

### Using Min Max

```html
<nord-calendar value="2021-02-14" min="2021-02-08" max="2021-02-21"></nord-calendar>
```

### Min Max Range

```html
<nord-calendar value="2021-02-01" min="2021-01-15" max="2021-03-15"></nord-calendar>
```

### Range Selection

```html
<nord-calendar range range-start="2021-02-08" range-end="2021-02-15"></nord-calendar>
```

### Months

```html
<nord-calendar range months="2" range-start="2021-02-22" range-end="2021-03-08"></nord-calendar>
```

### Week Numbers

```html
<nord-calendar week-numbers value="2026-09-18" today="2026-09-18"></nord-calendar>
```

## API Reference

### Properties

- **value** (`string`, default: `''`) — The selected date on the calendar. Must be in IS0-8601 format: YYYY-MM-DD.
- **first-day-of-week** (`DaysOfWeek`) — Which day is considered first day of the week? <code>0</code> for Sunday, <code>1</code> for Monday, etc.
Default is Monday.
- **min** (`string | undefined`) — Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
This setting can be used alone or together with the max property.
- **max** (`string | undefined`) — Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
This setting can be used alone or together with the min property.
- **today** (`string | undefined`) — The date that is considered today. Must be in IS0-8601 format: YYYY-MM-DD.
If not set, the current local date of the user is used.
- **expand** (`boolean`, default: `false`) — Controls whether the calendar expands to fill the width of its container.
- **size** (`'s' | 'm'`, default: `'m'`) — Controls the size of the calendar.
- **range** (`boolean`, default: `false`) — Opt into range selection. When <code>true</code>, clicking selects a range start, and
the next click selects the end (the two clicks are swapped if the second is
earlier than the first). The in-range days are styled, and a hover preview
shows the range that would result. A completed range fires <code>range-change</code>.

This is off by default, so the calendar keeps its single-date behaviour
(the <code>value</code>/<code>change</code> API) unless <code>range</code> is set.
- **range-start** (`string | undefined`) — The start of the selected range, in ISO-8601 format: YYYY-MM-DD. Only used
when <code>range</code> is set. Pair with <code>rangeEnd</code> to control the selection.
- **range-end** (`string | undefined`) — The end of the selected range, in ISO-8601 format: YYYY-MM-DD. Only used
when <code>range</code> is set. Pair with <code>rangeStart</code> to control the selection.
- **months** (`number`, default: `1`) — The number of consecutive months to display side by side, starting from the
focused month. Defaults to <code>1</code>. Useful with <code>range</code> for picking a span that
crosses months without paging — the range and its hover preview span every
visible month, and the navigation arrows slide the whole window. With more
than one month the month/year dropdowns are replaced by static titles.
- **week-numbers** (`boolean`, default: `false`) — Displays the ISO-8601 week number of each visible week in a leading column,
headed <code>#</code>. Week 1 is the week containing the year's first Thursday.
<code>firstDayOfWeek</code> moves where a row starts and ends, but the row keeps
reporting the ISO week it spans, so the numbers match every other calendar
the user reads.

### Events

- **range-change** (`DateRangeSelectEvent`) — Dispatched in <code>range</code> mode when a complete range (start and end) has been selected.
- **nord-focus-date** (`DateSelectEvent`) — Dispatched when the calendar's focused date changes.
- **change** (`DateSelectEvent`) — Dispatched when a date is selected and the value changes.

### Methods

- **focus** — `focus(options?: FocusOptions & { target: 'day' | 'month' }) => void` — Programmatically move focus to the calendar.

### CSS Custom Properties

- `--n-calendar-border-radius` (default: `var(--n-border-radius)`) — Controls how rounded the corners are, using <a href="/tokens/#border-radius">border radius tokens</a>.
- `--n-calendar-box-shadow` (default: `var(--n-box-shadow-popout)`) — Controls the surrounding shadow, using <a href="/tokens/#box-shadow">box shadow tokens</a>.
- `--n-calendar-padding-block` (default: `var(--n-space-m)`) — Controls the block padding of the calendar, using <a href="/tokens/#space">space tokens</a>.
- `--n-calendar-padding-inline` (default: `var(--n-space-m)`) — Controls the inline padding of the calendar, using <a href="/tokens/#space">space tokens</a>.
- `--n-calendar-day-size` (default: `var(--n-space-xl)`) — Controls the block and inline size of each day cell, using <a href="/tokens/#space">space tokens</a>.
- `--n-calendar-day-font-size` (default: `var(--n-font-size-m)`) — Controls the font size of each day cell, using <a href="/tokens/#font-size">font size tokens</a>.
- `--n-calendar-week-number-font-size` (default: `var(--n-font-size-s)`) — Controls the font size of the week numbers shown by <code>week-numbers</code>, using <a href="/tokens/#font-size">font size tokens</a>.
- `--n-calendar-select-label-font-size` (default: `var(--n-font-size-xl)`) — Controls the font size of the month and year select labels, using <a href="/tokens/#font-size">font size tokens</a>.
- `--n-calendar-nav-padding-inline` (default: `11px`) — Controls the inline padding of the previous and next month buttons.
- `--n-calendar-nav-gap` (default: `var(--n-space-xs)`) — Controls the gap between the previous and next month buttons, using <a href="/tokens/#space">space tokens</a>.
- `--n-calendar-header-margin-block-end` (default: `var(--n-space-m)`) — Controls the block-end margin of the calendar header, using <a href="/tokens/#space">space tokens</a>.
- `--n-calendar-header-padding-block-end` (default: `0`) — Controls the block-end padding of the calendar header, using <a href="/tokens/#space">space tokens</a>.
- `--n-calendar-header-gap` (default: `var(--n-space-s)`) — Controls the gap between the month/year selects and the navigation buttons, using <a href="/tokens/#space">space tokens</a>.
- `--n-calendar-inline-size` (default: `max-content`) — Controls the inline size of the calendar. Defaults to <code>100%</code> when the <code>expand</code> attribute is set.

### Dependencies

- `icon`
- `button`
- `visually-hidden`

<!--
Source: https://nordhealth.design/raw/components/calendar.md
-->
