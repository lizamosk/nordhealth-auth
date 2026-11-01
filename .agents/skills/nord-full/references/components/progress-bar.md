# nord-progress-bar

> Progress Bar is used to visually represent the completion
> of a task or process. It shows how much of the task has
> been completed and how much is still left.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to show the completion status of an ongoing task.
- Use progress bar when you can determine the percentage of the completed task at any time.
- Always provide an accessible label when using Progress Bar.

> **Don't:** - Don’t use in constrained spaces indicating indeterminate loading state, see [Spinner](/components/spinner/) instead.

## Examples

### Basic

```html
<nord-progress-bar value="40"></nord-progress-bar>
```

### Indeterminate

```html
<nord-progress-bar></nord-progress-bar>
```

### Interactive

```html
<style>
      nord-progress-bar[value="100"] {
        --n-progress-color: var(--n-color-status-success);
      }
    </style>
    <nord-stack>
      <nord-progress-bar id="interactive-progress-bar"></nord-progress-bar>
      <nord-stack direction="horizontal" gap="s">
        <nord-button id="increase" size="s">Increase</nord-button>
        <nord-button id="decrease" size="s">Decrease</nord-button>
        <nord-button id="complete" size="s" variant="primary">Complete</nord-button>
        <nord-button id="reset" size="s" variant="danger">Reset</nord-button>
      </nord-stack>
    </nord-stack>
```

### Max Progress

```html
<nord-progress-bar value="0.8" max="1"></nord-progress-bar>
```

### Styling

```html
<nord-stack>
      <p>Default style:</p>
      <nord-progress-bar value="40"></nord-progress-bar>
      <p>Custom border radius:</p>
      <nord-progress-bar class="n:[--n-progress-border-radius:var(--n-border-radius-sharp)]" value="60"></nord-progress-bar>
      <p>Custom color:</p>
      <nord-progress-bar class="n:[--n-progress-color:var(--n-color-status-success)]" value="100"></nord-progress-bar>
      <p>Custom size:</p>
      <nord-progress-bar class="n:[--n-progress-size:var(--n-space-m)]" value="80"></nord-progress-bar>
    </nord-stack>
```

## API Reference

### Properties

- **value** (`number | undefined`) — Specifies how much of the task has been completed. Must be a valid floating
point number between 0 and max, or between 0 and 100 if max is omitted. If
there is no value, the progress bar is indeterminate; this indicates that
an activity is ongoing with no indication of how long it’s expected to take.
- **max** (`number`, default: `100`) — Describes how much work the task indicated by the progress element requires.
The max attribute, if present, must have a value greater than 0 and be a
valid floating point number.
- **label** (`string`, default: `'Current progress'`) — Accessible label for the progress indicator. Visually hidden, but shown
for assistive technology.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### CSS Custom Properties

- `--n-progress-size` (default: `var(--n-space-s)`) — Controls the thickness of the progress bar, using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-progress-border-radius` (default: `var(--n-border-radius-s)`) — Controls how rounded the corners are, using <a href="/tokens/#border-radius">border radius tokens</a>.
- `--n-progress-color` (default: `var(--n-color-accent)`) — Controls the color of the progress bar, using <a href="/tokens/#color">color tokens</a>.

<!--
Source: https://nordhealth.design/raw/components/progress-bar.md
-->
