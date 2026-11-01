# nord-icon

> Icons are used to provide additional meaning or in places where text label doesn’t fit.
> Icon component allows you to display an icon from the Nordicons library.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

[View Nordicons](/nordicons/)

> **Do:** - Use to provide additional meaning in addition to a text label.
- Use to help users who have difficulties with reading and attention.
- Use in places where text label doesn’t fit (remember to add an accessible label for the icon).

> **Don't:** - Don’t use for decorative purposes alone.
- Don’t use when a button’s action is already clear based on the text label.
- Don’t use the same icon for differing purposes, as users will come to associate icons with specific types of actions.

---

## Additional considerations

- Icon components are hidden from assistive technologies by default.
- Use `label` property to give an accessible label for the icon and to make it visible to assistive technologies.

## Examples

### Animal Categories

```html
<nord-stack>
      <nord-stack class="n:text-[var(--n-color-icon)]" direction="horizontal" align-items="center" wrap>
        <nord-icon name="generic-amphibia" size="s"></nord-icon>
        <nord-icon name="generic-arachnida" size="s"></nord-icon>
        <nord-icon name="generic-birds" size="s"></nord-icon>
        <nord-icon name="generic-canine" size="s"></nord-icon>
        <nord-icon name="generic-cattle" size="s"></nord-icon>
        <nord-icon name="generic-equidae" size="s"></nord-icon>
        <nord-icon name="generic-feline" size="s"></nord-icon>
        <nord-icon name="generic-fish" size="s"></nord-icon>
        <nord-icon name="generic-leporidae" size="s"></nord-icon>
        <nord-icon name="generic-reptilia" size="s"></nord-icon>
        <nord-icon name="generic-rodents" size="s"></nord-icon>
        <nord-icon name="generic-sheep" size="s"></nord-icon>
        <nord-icon name="generic-suidae" size="s"></nord-icon>
      </nord-stack>
      <nord-stack class="n:text-[var(--n-color-icon)]" direction="horizontal" align-items="center" wrap>
        <nord-icon name="generic-amphibia" size="m"></nord-icon>
        <nord-icon name="generic-arachnida" size="m"></nord-icon>
        <nord-icon name="generic-birds" size="m"></nord-icon>
        <nord-icon name="generic-canine" size="m"></nord-icon>
        <nord-icon name="generic-cattle" size="m"></nord-icon>
        <nord-icon name="generic-equidae" size="m"></nord-icon>
        <nord-icon name="generic-feline" size="m"></nord-icon>
        <nord-icon name="generic-fish" size="m"></nord-icon>
        <nord-icon name="generic-leporidae" size="m"></nord-icon>
        <nord-icon name="generic-reptilia" size="m"></nord-icon>
        <nord-icon name="generic-rodents" size="m"></nord-icon>
        <nord-icon name="generic-sheep" size="m"></nord-icon>
        <nord-icon name="generic-suidae" size="m"></nord-icon>
      </nord-stack>
      <nord-stack class="n:text-[var(--n-color-icon)]" direction="horizontal" align-items="center" wrap>
        <nord-icon name="generic-amphibia" size="l"></nord-icon>
        <nord-icon name="generic-arachnida" size="l"></nord-icon>
        <nord-icon name="generic-birds" size="l"></nord-icon>
        <nord-icon name="generic-canine" size="l"></nord-icon>
        <nord-icon name="generic-cattle" size="l"></nord-icon>
        <nord-icon name="generic-equidae" size="l"></nord-icon>
        <nord-icon name="generic-feline" size="l"></nord-icon>
        <nord-icon name="generic-fish" size="l"></nord-icon>
        <nord-icon name="generic-leporidae" size="l"></nord-icon>
        <nord-icon name="generic-reptilia" size="l"></nord-icon>
        <nord-icon name="generic-rodents" size="l"></nord-icon>
        <nord-icon name="generic-sheep" size="l"></nord-icon>
        <nord-icon name="generic-suidae" size="l"></nord-icon>
      </nord-stack>
    </nord-stack>
```

### Basic

```html
<nord-icon size="xxl" name="navigation-dashboard"></nord-icon>
```

### Color

```html
<nord-stack direction="horizontal" align-items="center">
      <nord-icon size="s" name="interface-star-filled" color="var(--n-color-status-success)"></nord-icon>
      <nord-icon size="m" name="interface-star-filled" color="var(--n-color-status-danger)"></nord-icon>
      <nord-icon size="l" name="interface-star-filled" color="var(--n-color-status-warning)"></nord-icon>
      <nord-icon size="xl" name="interface-star-filled" color="var(--n-color-status-highlight)"></nord-icon>
    </nord-stack>
```

### Custom Icon

```html
<nord-icon>
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M41.86 131.25a23.982 23.982 0 0 1-18.494-8.666L2.254 95.746a10.5 10.5 0 1 1 16.492-12.992l21 26.6a2.24 2.24 0 0 0 2.212.882 3.038 3.038 0 0 0 2.38-1.148l76.958-96.39a10.5 10.5 0 1 1 16.408 13.104L60.606 122.29A24.038 24.038 0 0 1 42 131.25z"
        ></path>
      </svg>
    </nord-icon>
```

### Custom Resolver

```html
<nord-icon size="l" name="navigation-dashboard"></nord-icon>
```

### Sizes

```html
<nord-stack direction="horizontal" align-items="center">
      <nord-icon name="interface-star" size="xxs"></nord-icon>
      <nord-icon name="interface-star" size="xs"></nord-icon>
      <nord-icon name="interface-star" size="s"></nord-icon>
      <nord-icon name="interface-star" size="m"></nord-icon>
      <nord-icon name="interface-star" size="l"></nord-icon>
      <nord-icon name="interface-star" size="xl"></nord-icon>
      <nord-icon name="interface-star" size="xxl"></nord-icon>
    </nord-stack>
```

### Doc Overview

```html
<nord-icon name="interface-checked"></nord-icon>
```

### Doc Sizes

```html
<nord-stack direction="horizontal" align-items="center">
      <nord-icon name="generic-canine" size="s"></nord-icon>
      <nord-icon name="generic-canine" size="m"></nord-icon>
      <nord-icon name="generic-canine" size="l"></nord-icon>
      <nord-icon name="generic-canine" size="xl"></nord-icon>
    </nord-stack>
```

### Doc Color

```html
<nord-stack direction="horizontal" align-items="center">
      <nord-icon name="interface-checked" color="var(--n-color-status-success)"></nord-icon>
      <nord-icon name="interface-warning" color="var(--n-color-status-warning)"></nord-icon>
      <nord-icon name="interface-close" color="var(--n-color-status-danger)"></nord-icon>
    </nord-stack>
```

### Doc With Label

```html
<nord-icon name="navigation-notifications" label="Notifications"></nord-icon>
```

### Static

```html
<nord-stack direction="horizontal" align-items="center">
  <nord-icon name="navigation-search" size="l"></nord-icon>
  <nord-icon name="interface-checked" size="l"></nord-icon>
</nord-stack>
```

## API Reference

### Properties

- **name** (`string`, default: `''`) — The name of the icon to display, as defined by <a href="/nordicons/">nordicons</a>.
- **size** (`'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | undefined`, default: `"m"`) — The size of the icon.
- **color** (`string | undefined`) — The color of the icon.
Can accept any valid CSS color value, including custom properties.
- **label** (`string | undefined`) — An accessible label for the icon.
If no label is supplied, the icon is hidden from assistive technology.

### Slots

- **(default)** — The default slot used for placing a custom SVG icon.

<!--
Source: https://nordhealth.design/raw/components/icon.md
-->
