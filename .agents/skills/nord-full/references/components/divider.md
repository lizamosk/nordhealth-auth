# nord-divider

> Divider components are used to separate and distinguish sections of
> content or groups of menu items. Visually, they look like
> horizontal or vertical lines.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to represent thematic breaks between elements.
- Use when you need to divide sections of content from each other.
- Use to separate content into clear groups.
- Use dividers sparingly, to create groupings or to separate items.

> **Don't:** - Avoid using for presentational purposes only.
- Don’t use strong colors in dividers.
- Don’t use dividers for replacing card components.

---

## Additional considerations

- Divider uses a role called `separator` which indicates that the element is a divider that separates and distinguishes sections of content or groups of menu items. The implicit ARIA role of the native thematic break (`<hr>` element) is a separator.
- Dividers have an implicit aria-orientation value of `horizontal` which can be changed using the `direction` property.
- For more details, please see [ARIA: separator role on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role){rel="[\"nofollow\"]"}.

## Examples

### Basic

```html
<nord-divider></nord-divider>
```

### Color

```html
<nord-divider class="n:[--n-divider-color:var(--n-color-border-strong)]"></nord-divider>
```

### Horizontal

```html
<nord-stack direction="horizontal">
      <div>Group</div>
      <nord-divider direction="vertical"></nord-divider>
      <div>Group</div>
      <nord-divider direction="vertical"></nord-divider>
      <div>Group</div>
    </nord-stack>
```

### In Card

```html
<nord-card>
      <nord-stack>
        <div>Group</div>
        <nord-divider></nord-divider>
        <div>Group</div>
        <nord-divider></nord-divider>
        <div>Group</div>
      </nord-stack>
    </nord-card>
```

### Size

```html
<nord-divider class="n:[--n-divider-size:4px]"></nord-divider>
```

### Vertical

```html
<nord-stack>
      <div>Group</div>
      <nord-divider></nord-divider>
      <div>Group</div>
      <nord-divider></nord-divider>
      <div>Group</div>
    </nord-stack>
```

## API Reference

### Properties

- **direction** (`'vertical' | 'horizontal'`, default: `'horizontal'`) — The direction of the divider.

### CSS Custom Properties

- `--n-divider-color` (default: `var(--n-color-border)`) — Controls the color of the divider, using our <a href="/tokens/#color">color tokens</a>.
- `--n-divider-size` (default: `1px`) — Controls the size, or thickness, of the divider.

<!--
Source: https://nordhealth.design/raw/components/divider.md
-->
