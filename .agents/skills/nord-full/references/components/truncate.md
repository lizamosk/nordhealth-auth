# nord-truncate

> Truncate clips text with a single- or multi-line ellipsis and reveals a tooltip with the full text when the content overflows.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to truncate single-line text inside a constrained container (table cells, nav items, card metadata) so the layout never breaks.
- Trust the component to add a tooltip only when the text actually overflows — there is no need to detect truncation in application code.
- Provide plain text as the slotted content; the full string is mirrored into the tooltip for screen reader and pointer users.

> **Don't:** - Don’t use for multi-line text — this component is single-line only. Use `-webkit-line-clamp` directly when you need multi-line clamping.
- Don’t nest interactive elements (links, buttons) inside the slot. Apply the truncate component to the label of the interactive element instead.
- Don’t add a `title` attribute on the truncate or its parent. It would produce a second, browser-native tooltip competing with the one this component already provides.

---

## Additional considerations

- The key feature is automatic overflow detection: the component measures the slotted text against its container and only adds the ellipsis and tooltip when the content actually overflows. There is no need to detect truncation in application code.
- Truncation is performed in JS — the text node is replaced with a pre-truncated string plus ellipsis — which avoids the CSS `text-overflow: ellipsis` quirk where clicking inside clipped text shifts the line and loses the ellipsis, because the visible text now fits exactly.

## Accessibility

The truncate component splits text between two accessibility sources: the visible truncated string is the accessible **name** of the host, and the full text is exposed as the accessible **description** via `aria-describedby` to a portaled `nord-tooltip`. Screen readers announce both — name then description — as the standard `<abbr title>`-style pairing, not a double-reading of the same content.

### Set `aria-label` on interactive parents

When `nord-truncate` is placed inside an interactive element (`nord-button`, `<a>`, menu item, tab, etc.), the parent's accessible name is computed from its slotted content — which means the parent ends up named with the truncated string (e.g. `"Lorem ipsu…"`). That is useless to a screen reader user.

Add `aria-label` with the **full text** on the interactive parent:

```html
<nord-button aria-label="Open patient record for Suspendisse blandit sodales…">
  <nord-truncate>Suspendisse blandit sodales…</nord-truncate>
</nord-button>
```

For non-interactive parents (`<p>`, `<td>`, `<span>`, `<div>`), no `aria-label` is needed — the truncate's own `aria-describedby` wiring already exposes the full text to assistive tech.

<style>

html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .s9eBZ, html code.shiki .s9eBZ{--shiki-default:#22863A;--shiki-dark:#85E89D}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}

</style>

## Examples

### Basic

```html
<p class="n:inline-[320px]">
      <nord-truncate>${longText}</nord-truncate>
    </p>
```

### Not Truncated

```html
<p class="n:inline-[320px]">
      <nord-truncate>Short text fits</nord-truncate>
    </p>
```

### In Table Cell

```html
<nord-table density="condensed" class="n:inline-[480px]">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="n:max-inline-[320px]"><nord-truncate>${longText}</nord-truncate></td>
            <td>Active</td>
          </tr>
          <tr>
            <td class="n:max-inline-[320px]"><nord-truncate>Short value</nord-truncate></td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </nord-table>
```

### In Nav Item

```html
<nord-navigation class="n:inline-[220px]">
      <nord-nav-group>
        <nord-nav-item href="#" icon="navigation-dashboard">
          <nord-truncate>${longText}</nord-truncate>
        </nord-nav-item>
        <nord-nav-item href="#" icon="interface-chat">
          <nord-truncate>Short fits</nord-truncate>
        </nord-nav-item>
      </nord-nav-group>
    </nord-navigation>
```

### Multi Line Clamp

```html
<div class="n:grid n:gap-l n:inline-[320px]">
      <p>
        <nord-truncate line-clamp="2">${longText}</nord-truncate>
      </p>
      <p>
        <nord-truncate line-clamp="3">${longText}</nord-truncate>
      </p>
    </div>
```

### With Offset

```html
<nord-stack gap="l" style="inline-size: 320px">
      <nord-truncate position="block-end" side-offset="20">side-offset — ${longText}</nord-truncate>
      <nord-truncate position="block-end" align-offset="20">align-offset — ${longText}</nord-truncate>
    </nord-stack>
```

### Doc Overview

```html
<div class="n:container-xxs">
      <nord-truncate
        >This is a long piece of text that will be clamped to a single line, with the full value
        available in a tooltip.</nord-truncate
      >
    </div>
```

### Doc Multi Line

```html
<div class="n:container-xxs">
      <nord-truncate line-clamp="2"
        >This is a longer passage of text that is allowed to wrap onto two lines before it is clamped,
        with the remainder available in a tooltip.</nord-truncate
      >
    </div>
```

### Doc In Table Cell

```html
<div
      class="n:max-inline-[20rem] n:border n:border-[var(--n-color-border)] n:rounded-s n:py-s n:px-m"
    >
      <nord-truncate>Bath Clinic, 12 Pulteney Bridge, Bath, Somerset BA2 4AT, United Kingdom</nord-truncate>
    </div>
```

### Doc No Tooltip

```html
<div class="n:container-xxs">
      <nord-truncate no-tooltip
        >This text is clamped visually but does not reveal a tooltip on hover.</nord-truncate
      >
    </div>
```

## API Reference

### Properties

- **position** (`'block-end' | 'block-start' | 'inline-start' | 'inline-end'`, default: `'block-start'`) — Position of the tooltip relative to the truncated text. Mirrors <code>nord-tooltip</code>.
- **delay** (`number`, default: `500`) — Delay in milliseconds before the tooltip opens.
- **side-offset** (`number`, default: `8`) — Distance in pixels between the tooltip and the trigger along the main axis.
Mirrors <code>nord-tooltip</code>'s <code>side-offset</code> and is forwarded to the portaled
tooltip. Defaults to <code>8</code>.
- **align-offset** (`number`, default: `0`) — Offset in pixels along the tooltip's alignment axis. Mirrors
<code>nord-tooltip</code>'s <code>align-offset</code> and is forwarded to the portaled tooltip.
Defaults to <code>0</code>.
- **line-clamp** (`number`, default: `1`) — Maximum number of lines before truncating. Defaults to <code>1</code> (single line).
Values <code>&gt;= 2</code> allow the text to wrap up to that many lines before the
ellipsis kicks in.
- **no-tooltip** (`boolean`, default: `false`) — When set, the component still truncates the text but does not render
a hover tooltip with the full content. The <code>truncated</code> attribute is
still reflected so consumers can style it.

### Slots

- **(default)** — The full text content. Plain text is recommended; rich markup is not supported (only <code>textContent</code> is read for truncation).

### Dependencies

- `tooltip`

<!--
Source: https://nordhealth.design/raw/components/truncate.md
-->
