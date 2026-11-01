# nord-timestamp

> Timestamp presents an instant as localized, stable system, relative, or
> automatically selected text while retaining native date-time semantics.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use Timestamp for dates and times that need consistent native semantics and localized presentation.
- Use `relative` for recent activity, or `auto` when older values should become a stable date and time.
- Set `lang` on the component, or on the document as a fallback, to localize Intl output even when that language has no registered Nord component translation.
- Enable `show-tooltip` when people benefit from inspecting the full absolute date and time behind relative text.
- Use `live` only when the relative phrase needs to remain current while it is visible.

> **Don't:** - Don’t provide prose or locale-specific date strings; use an ISO 8601 value or assign finite Unix seconds through JavaScript.
- Don’t enable live updates for absolute formats, where the displayed value does not change.
- Don’t use Timestamp for editable date or time input.

## Accepted values

String values use a strict ISO calendar profile: a four-digit year or signed six-digit expanded year, followed by `-MM-DD`. The date may be followed by `THH:mm`, optional `:ss`, optional 1–9 digit fractional seconds, and optional `Z` or `±HH:mm` offset. The `T` and `Z` literals are case-insensitive. Months are `01`–`12`, days must exist in the Gregorian calendar, hours are `00`–`23`, minutes and seconds are `00`–`59`, and offsets are `00:00`–`23:59`. `24:00` is accepted only when every smaller field is zero, and the ISO-invalid expanded year `-000000` is rejected. Week dates, ordinal dates, basic/unseparated forms, prose dates, space separators, and leap seconds are not accepted.

Date-only strings represent midnight UTC. Date-times without `Z` or an offset represent local time in the runtime timezone. A supplied offset determines the instant; the component’s `time-zone` option changes presentation only, never parsing. Fractions beyond milliseconds are accepted and truncated by JavaScript `Date` precision.

## Examples

### Overview

```html
<nord-timestamp
      value="2025-03-21T14:51:53.000Z"
      data-offset-seconds="-7200"
      format="auto"
      show-tooltip
      time-zone="UTC"
    ></nord-timestamp>
```

### Formats

```html
<nord-stack gap="s">
      <span>
        Relative:
        <nord-timestamp
          value="2025-03-21T14:51:53.000Z"
          data-offset-seconds="-7200"
          format="relative"
          time-zone="UTC"
        ></nord-timestamp>
      </span>
      <span>
        Auto:
        <nord-timestamp
          value="2025-03-21T14:51:53.000Z"
          data-offset-seconds="-7200"
          format="auto"
          time-zone="UTC"
        ></nord-timestamp>
      </span>
      <span>
        Date:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" format="date" time-zone="UTC"></nord-timestamp>
      </span>
      <span>
        Date and time:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" format="date-time" time-zone="UTC"></nord-timestamp>
      </span>
      <span>
        Time:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" format="time" time-zone="UTC"></nord-timestamp>
      </span>
      <span>
        System date:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" format="system-date" time-zone="UTC"></nord-timestamp>
      </span>
      <span>
        System date and time:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" format="system-date-time" time-zone="UTC"></nord-timestamp>
      </span>
      <span>
        System time:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" format="system-time" time-zone="UTC"></nord-timestamp>
      </span>
    </nord-stack>
```

### Relative Boundaries

```html
<nord-stack gap="s">
      <span>
        Future skew, 30 seconds:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="30" format="relative"></nord-timestamp>
      </span>
      <span>
        Future, 31 seconds:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="31" format="relative"></nord-timestamp>
      </span>
      <span>
        Past, 59 seconds:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="-59" format="relative"></nord-timestamp>
      </span>
      <span>
        Past, 60 seconds:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="-60" format="relative"></nord-timestamp>
      </span>
      <span>
        Past, 59 minutes:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="-3540" format="relative"></nord-timestamp>
      </span>
      <span>
        Past, 60 minutes:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="-3600" format="relative"></nord-timestamp>
      </span>
      <span>
        Past, 23 hours:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="-82800" format="relative"></nord-timestamp>
      </span>
      <span>
        Past, 24 hours:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="-86400" format="relative"></nord-timestamp>
      </span>
      <span>
        Past, 29 days:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="-2505600" format="relative"></nord-timestamp>
      </span>
      <span>
        Past, 30 days:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="-2592000" format="relative"></nord-timestamp>
      </span>
      <span>
        Past, 364 days:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="-31449600" format="relative"></nord-timestamp>
      </span>
      <span>
        Past, 365 days:
        <nord-timestamp value="2025-03-21T14:51:53.000Z" data-offset-seconds="-31536000" format="relative"></nord-timestamp>
      </span>
    </nord-stack>
```

### Custom Threshold

```html
<nord-stack gap="s">
      <span>
        Default one-week threshold:
        <nord-timestamp
          value="2025-03-21T14:51:53.000Z"
          data-offset-seconds="-7200"
          format="auto"
          time-zone="UTC"
        ></nord-timestamp>
      </span>
      <span>
        One-hour threshold:
        <nord-timestamp
          value="2025-03-21T14:51:53.000Z"
          data-offset-seconds="-7200"
          format="auto"
          auto-threshold="3600"
          time-zone="UTC"
        ></nord-timestamp>
      </span>
    </nord-stack>
```

### Time Zones

```html
<nord-stack gap="s">
      <span>
        Helsinki:
        <nord-timestamp
          value="2025-03-21T14:51:53.000Z"
          format="date-time"
          time-zone="Europe/Helsinki"
          show-time-zone
        ></nord-timestamp>
      </span>
      <span>
        Tokyo:
        <nord-timestamp
          value="2025-03-21T14:51:53.000Z"
          format="date-time"
          time-zone="Asia/Tokyo"
          show-time-zone
        ></nord-timestamp>
      </span>
    </nord-stack>
```

### Localized

```html
<nord-stack gap="s">
      <span>
        English:
        <nord-timestamp lang="en-US" value="2025-03-21T14:51:53.000Z" format="date-time" time-zone="UTC"></nord-timestamp>
      </span>
      <span>
        Finnish:
        <nord-timestamp lang="fi" value="2025-03-21T14:51:53.000Z" format="date-time" time-zone="UTC"></nord-timestamp>
      </span>
    </nord-stack>
```

### Live Updates

```html
<nord-timestamp
      value="2025-03-21T14:51:53.000Z"
      data-offset-seconds="-55"
      format="relative"
      live
    ></nord-timestamp>
```

### With Tooltip

```html
<nord-timestamp
      value="2025-03-21T14:51:53.000Z"
      data-offset-seconds="-7200"
      format="relative"
      show-tooltip
      time-zone="UTC"
    ></nord-timestamp>
```

### Invalid Value

```html
<nord-stack gap="s">
      <span>Invalid value (renders no time content): <nord-timestamp value="not-a-date"></nord-timestamp></span>
      <span>Valid value: <nord-timestamp value="2025-03-21T14:51:53.000Z" format="system-date-time" time-zone="UTC"></nord-timestamp></span>
    </nord-stack>
```

## API Reference

### Properties

- **value** (`string | number | undefined`) — The instant to display. Strings use Timestamp's documented ISO calendar
profile; finite numbers assigned through JavaScript are Unix seconds.
- **format** (`TimestampFormat`, default: `'auto'`) — The display format. Automatic format uses relative text near the instant.
- **auto-threshold** (`unknown`, default: `DEFAULT_AUTO_THRESHOLD`) — Maximum age, in seconds, for relative output in automatic format.
- **show-tooltip** (`boolean`, default: `false`) — Shows the full absolute timestamp in a Nord Tooltip for relative output.
- **show-time-zone** (`boolean`, default: `false`) — Adds a short timezone name to localized formats which include time.
- **time-zone** (`string | undefined`) — IANA timezone used for formatting. Defaults to the runtime timezone.
- **live** (`boolean`, default: `false`) — Updates relative and automatic output at meaningful display boundaries.
- **size** (`TimestampSize | undefined`) — Optional Nord text size. Omit it to inherit the surrounding font size.
- **color** (`TimestampColor | undefined`) — Optional Nord text color.
- **weight** (`TimestampWeight | undefined`) — Optional Nord text weight. Omit it to inherit the surrounding weight.

### CSS Custom Properties

- `--n-timestamp-color` (default: `var(--n-color-text-weaker)`) — Controls the timestamp text color.
- `--n-timestamp-font-size` — Controls the timestamp font size. By default it inherits from surrounding text.
- `--n-timestamp-font-weight` — Controls the timestamp font weight. By default it inherits from surrounding text.

### Dependencies

- `tooltip`

<!--
Source: https://nordhealth.design/raw/components/timestamp.md
-->
