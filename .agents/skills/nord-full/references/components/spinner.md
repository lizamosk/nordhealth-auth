# nord-spinner

> Spinner component is used to indicate users that their action is being
> processed. You can customize the size and color of the spinner with the
> provided properties.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use for indicating users that their action is being processed.
- Use the label property to provide an accessible label for the spinner. If no label is supplied, the spinner is hidden from assistive technology.

> **Don't:** - Don’t use to show progress. Favor a progress bar instead.

## Examples

### Basic

```html
<nord-spinner size="xl"></nord-spinner>
```

### Color

```html
<nord-spinner color="var(--n-color-icon)"></nord-spinner>
```

### Position

```html
<div class="n:absolute n:inset-bs-[50%] n:inset-is-[50%] n:[transform:translateX(-50%)_translateY(-50%)]">
      <nord-spinner size="xl"></nord-spinner>
    </div>
```

### Size

```html
<nord-spinner size="xxl"></nord-spinner>
```

### Sizes

```html
<nord-stack direction="horizontal" align-items="center">
      <nord-spinner size="xs"></nord-spinner>
      <nord-spinner size="s"></nord-spinner>
      <nord-spinner size="m"></nord-spinner>
      <nord-spinner size="l"></nord-spinner>
      <nord-spinner size="xl"></nord-spinner>
      <nord-spinner size="xxl"></nord-spinner>
    </nord-stack>
```

### With Label

```html
<nord-spinner size="l" label="Loading, please wait"></nord-spinner>
```

## API Reference

### Properties

- **size** (`'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'`, default: `'m'`) — The size of the spinner.
- **color** (`string | undefined`) — The color of the spinner.
Can accept any valid CSS color value, including custom properties.
Takes precedence over the <code>--n-spinner-color</code> CSS custom property.
- **label** (`string | undefined`) — An accessible label for the spinner.
If no label is supplied, the spinner is hidden from assistive technology.

### CSS Custom Properties

- `--n-spinner-color` (default: `var(--n-color-accent)`) — Controls the color the spinner.

<!--
Source: https://nordhealth.design/raw/components/spinner.md
-->
