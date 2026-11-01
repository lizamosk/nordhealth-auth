# nord-stack

> Stack component manages layout of immediate children along the
> vertical or horizontal axis with optional spacing between each child.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use when you need to stack multiple components vertically or horizontally.
- Use when you want to adjust the white space between two or more components.

> **Don't:** - Don’t use for building grid based layouts.

## Examples

### Basic

```html
<nord-stack>
      <nord-button>One</nord-button>
      <nord-button>Two</nord-button>
      <nord-button>Three</nord-button>
    </nord-stack>
```

### Horizontal

```html
<nord-stack direction="horizontal">
      <nord-button>One</nord-button>
      <nord-button>Two</nord-button>
      <nord-button>Three</nord-button>
    </nord-stack>
```

### Gap

```html
<nord-stack direction="horizontal" gap="l">
      <nord-button>One</nord-button>
      <nord-button>Two</nord-button>
      <nord-button>Three</nord-button>
    </nord-stack>
```

### Alignment

```html
<nord-stack direction="horizontal" justify-content="center" align-items="center">
      <nord-button>One</nord-button>
      <nord-button>Two</nord-button>
      <nord-button>Three</nord-button>
    </nord-stack>
```

## API Reference

### Properties

- **gap** (`'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'`, default: `'m'`) — The space injected between components.
- **direction** (`'vertical' | 'horizontal'`, default: `'vertical'`) — The direction of the stack.
- **align-items** (`| 'center'
    | 'start'
    | 'end'
    | 'baseline'
    | 'stretch' | undefined`, default: `'stretch'`) — How to align the child items inside the stack.
- **wrap** (`boolean`, default: `false`) — Defines whether the Stack items are forced in a single line
or can be flowed into multiple lines.
- **justify-content** (`| 'center'
    | 'start'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly' | undefined`) — How to justify the child items inside the stack.

### Slots

- **(default)** — The stack content.

### CSS Custom Properties

- `--n-stack-gap` (default: `var(--n-space-m)`) — Controls the spacing between items, using our <a href="/tokens/#space">spacing tokens</a>.

<!--
Source: https://nordhealth.design/raw/components/stack.md
-->
