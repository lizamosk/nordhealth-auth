# nord-meter

> Meter is a graphical display of a numeric value within a known range,
> such as disk usage, a battery level or a score. Unlike Progress Bar, it
> represents a static measurement rather than the completion of a task.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to display a static numeric measurement within a known range, such as disk usage, a battery level or a score.
- Always provide a `label` describing what the meter represents.
- Use the `min` and `max` attributes when the value is not on a 0–100 scale.

> **Don't:** - Don’t use to show the progress of an ongoing task, see [Progress Bar](/components/progress-bar/) instead.
- Don’t use for values that change continuously to indicate loading, see [Spinner](/components/spinner/) instead.

## Examples

### Basic

```html
<div class="n:inline-[15rem] n:max-inline-full">
      <nord-meter value="24" label="Storage Used"></nord-meter>
    </div>
```

### Levels

```html
<nord-stack gap="m" class="n:inline-[15rem] n:max-inline-full">
      <nord-meter value="10" label="Low"></nord-meter>
      <nord-meter value="55" label="Medium"></nord-meter>
      <nord-meter value="92" label="High"></nord-meter>
    </nord-stack>
```

### Without Label

```html
<div class="n:inline-[15rem] n:max-inline-full">
      <nord-meter value="40" aria-label="Battery level"></nord-meter>
    </div>
```

### Custom Range

```html
<div class="n:inline-[15rem] n:max-inline-full">
      <nord-meter
        value="3.5"
        min="0"
        max="5"
        label="Rating"
        .format=${{ style: 'decimal', maximumFractionDigits: 1 }}
      ></nord-meter>
    </div>
```

### Custom Range Basic

```html
<div class="n:inline-[15rem] n:max-inline-full">
      <nord-meter value="3.5" min="0" max="5" label="Rating"></nord-meter>
    </div>
```

## API Reference

### Properties

- **value** (`number`, default: `0`) — The current value. Must be between <code>min</code> and <code>max</code>.
- **min** (`number`, default: `0`) — The minimum value. If <code>min</code> is greater than <code>max</code>, the two are swapped so
the range is always well-formed.
- **max** (`number`, default: `100`) — The maximum value. If <code>min</code> is greater than <code>max</code>, the two are swapped so
the range is always well-formed.
- **label** (`string`, default: `''`) — A label describing what the meter represents. Shown above the meter and
exposed to assistive technology.
- **locale** (`string | undefined`) — The locale used by <code>Intl.NumberFormat</code> when formatting the value.
Defaults to the runtime locale.

### CSS Custom Properties

- `--n-meter-size` (default: `var(--n-space-s)`) — Controls the thickness of the meter, using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-meter-border-radius` (default: `var(--n-border-radius-s)`) — Controls how rounded the corners are, using <a href="/tokens/#border-radius">border radius tokens</a>.
- `--n-meter-color` (default: `var(--n-color-accent)`) — Controls the color of the indicator, using <a href="/tokens/#color">color tokens</a>.

<!--
Source: https://nordhealth.design/raw/components/meter.md
-->
