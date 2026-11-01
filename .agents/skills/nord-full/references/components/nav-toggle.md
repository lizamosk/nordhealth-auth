# nord-nav-toggle

> Nav toggle hides and shows the primary navigation inside <code>&lt;nord-layout&gt;</code>.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use a tooltip with the toggle that’s labelled as `Toggle navigation`.
- We recommend setting a keyboard shortcut that toggles the navigation.

> **Don't:** - Don’t use as a generic button or toggle. Use the [Button component](/components/button/) instead.

---

## Additional considerations

- Used internally by `<nord-layout>` as the default contents of its `nav-toggle` slot. Can also be placed **anywhere inside `<nord-layout>`** (e.g. inside a `<nord-header>` next to the page title) — the layout listens for clicks on any descendant `<nord-nav-toggle>` and toggles the navigation accordingly.
- Outside of a `<nord-layout>` it renders as a presentational button with no behaviour.
- The two displayed icons can be customised via the `icon` and `icon-active` attributes. The first is shown in the resting state; the second replaces it on hover/focus (≥ 768px).
- Set `auto-hide` to have the toggle disappear automatically when the ancestor `<nord-layout>`'s nav is open (on wide viewports), mirroring the built-in fallback toggle's behaviour.

## Examples

### Basic

```html
<nord-nav-toggle></nord-nav-toggle>
```

### With Tooltip

```html
<nord-nav-toggle aria-describedby="toggle-tooltip"></nord-nav-toggle>

    <nord-tooltip id="toggle-tooltip" position="inline-end">
      Toggle navigation
      <nord-icon slot="shortcut" name="keyboard-option" label="Alt/Option key"></nord-icon>
      <span slot="shortcut">L</span>
    </nord-tooltip>
```

### Custom Icons

```html
<nord-nav-toggle icon="navigation-toggle" icon-active="interface-close-small"></nord-nav-toggle>
```

## API Reference

### Properties

- **icon** (`string`) — Icon shown in the resting state. Accepts any registered icon name.
Defaults to <code>navigation-toggle</code>.
- **icon-active** (`string`) — Icon shown on hover/focus (≥ 768px), swapping in for <code>icon</code>.
Defaults to <code>navigation-toggle-lock</code>.
- **auto-hide** (`boolean`, default: `false`) — When set, the toggle finds its ancestor <code>&lt;nord-layout&gt;</code> and hides
itself on wide viewports while the layout's nav is open. Useful when
placing the toggle outside the <code>nav-toggle</code> slot.
- **square** (`boolean`, default: `false`) — Forwards the <code>square</code> attribute to the underlying <code>&lt;nord-button&gt;</code>,
giving the toggle a fixed square footprint instead of the default
pill shape.
- **size** (`'s' | 'm'`, default: `'m'`) — Size of the underlying <code>&lt;nord-button&gt;</code>. Defaults to <code>m</code>.
- **icon-size** (`'xxs' | 'xs' | 's' | 'm' | 'l'`, default: `'m'`) — Size of the inner <code>&lt;nord-icon&gt;</code> elements. Accepts the same values
as <code>&lt;nord-icon&gt;</code>'s <code>size</code>. Defaults to <code>m</code>.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### Dependencies

- `icon`
- `button`
- `visually-hidden`

<!--
Source: https://nordhealth.design/raw/components/nav-toggle.md
-->
