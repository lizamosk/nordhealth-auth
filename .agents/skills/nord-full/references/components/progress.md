# nord-progress

> Progress component is used to display a circular pie-chart style progress indicator.
> You can customize the size and color of the progress indicator with the
> provided properties.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to show the completion status of a task with a circular indicator.
- Use when you can determine the percentage of the completed task at any time.
- Use the label property to provide an accessible label for the progress indicator.
- Use for compact spaces where a circular indicator is more appropriate than a linear progress bar.

> **Don't:** - Don't use for indeterminate loading states, see [Spinner](/components/spinner/) instead.
- Don't use when a linear representation of progress is more appropriate, see [Progress Bar](/components/progress-bar/) instead.

## Examples

### Basic

```html
<nord-progress progress="25"></nord-progress>
```

### Color

```html
<nord-stack direction="horizontal" align-items="center">
      <nord-progress progress="50" color="success"></nord-progress>
      <nord-progress progress="50" color="warning"></nord-progress>
      <nord-progress progress="50" color="danger"></nord-progress>
      <nord-progress progress="50" color="highlight"></nord-progress>
      <nord-progress progress="50" color="info"></nord-progress>
    </nord-stack>
```

### Custom Color

```html
<nord-stack direction="horizontal" align-items="center">
      <nord-progress progress="50" color="var(--n-color-accent)"></nord-progress>
      <nord-progress progress="50" color="#6366f1"></nord-progress>
      <nord-progress progress="50" color="rgb(236, 72, 153)"></nord-progress>
    </nord-stack>
```

### Interactive

```html
<nord-stack direction="horizontal" align-items="center" gap="m">
      <nord-progress id="demo-progress" progress="0" size="xl" label="Demo progress"></nord-progress>
      <nord-button id="start-btn">Start</nord-button>
      <nord-button id="reset-btn" variant="plain">Reset</nord-button>
    </nord-stack>
```

### Progress Values

```html
<nord-stack direction="horizontal" align-items="center">
      <nord-progress progress="0" size="l"></nord-progress>
      <nord-progress progress="25" size="l"></nord-progress>
      <nord-progress progress="50" size="l"></nord-progress>
      <nord-progress progress="75" size="l"></nord-progress>
      <nord-progress progress="100" size="l"></nord-progress>
    </nord-stack>
```

### Size

```html
<nord-stack direction="horizontal" align-items="center">
      <nord-progress progress="75" size="xs"></nord-progress>
      <nord-progress progress="75" size="s"></nord-progress>
      <nord-progress progress="75" size="m"></nord-progress>
      <nord-progress progress="75" size="l"></nord-progress>
      <nord-progress progress="75" size="xl"></nord-progress>
      <nord-progress progress="75" size="xxl"></nord-progress>
    </nord-stack>
```

### With Label

```html
<nord-progress progress="60" size="l" label="Upload progress: 60%"></nord-progress>
```

## API Reference

### Properties

- **size** (`'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'`, default: `'m'`) — The size of the progress indicator.
- **color** (`string | undefined`) — The color of the progress indicator.
Can accept any valid CSS color value, including custom properties.
Takes precedence over the <code>--n-progress-color</code> CSS custom property.
- **label** (`string | undefined`) — An accessible label for the progress indicator.
If no label is supplied, the component is hidden from assistive technology.
- **progress** (`number`, default: `0`) — The progress percentage value.

### CSS Custom Properties

- `--n-progress-color` (default: `var(--n-color-accent)`) — Controls the color of the progress indicator.

<!--
Source: https://nordhealth.design/raw/components/progress.md
-->
