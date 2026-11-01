# nord-nav-item

> Navigation item populates sidebar navigation with links.
> Every item should be placed inside a navigation group.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Group navigation items into navigation groups based on related categories.
- Use group headings to clarify the category of a section.
- Use icons for all top level navigation items.

> **Don't:** - Don’t use navigation item outside of navigation group and navigation components.

---

## Closing the rail-mode flyout on selection

When the layout is collapsed to a rail (`collapse-mode="rail"` with the nav closed), a parent navigation item opens its subnav in a flyout. Selecting a leaf link inside that flyout does not close it automatically, because the click happens inside the flyout's own overlay.

Call `closeFlyout()` on the parent `<nord-nav-item>` to close its flyout without reaching into the component's shadow DOM:

```js
const leaf = document.querySelector('nord-nav-item[href="/reports"]')

leaf.addEventListener('click', () => {
  const parent = leaf.closest('nord-nav-group')?.closest('nord-nav-item')
  parent?.closeFlyout()
})
```

To close every open flyout from one root-level handler, use `closeAllFlyouts()` on `<nord-navigation>` instead. You can also set the `auto-dismiss-on-select` attribute on `<nord-nav-item>` (or on `<nord-navigation>`) to close the flyout automatically when a leaf item is activated.

---

## Content guidelines

When writing navigation item labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** My tasks

> **Don't:** My Tasks

Avoid unnecessary words and articles in item labels, such as “the”, “an” or “a”:

> **Do:** Change theme

> **Don't:** Change the theme

Avoid ending item labels in punctuation:

> **Do:** Switch user

> **Don't:** Switch user.

Use as few words as possible to describe each item label:

> **Do:** Payments

> **Don't:** Payments in your clinic

Avoid all caps for item labels and group titles:

> **Do:** Dashboard

> **Don't:** DASHBOARD

<style>

html pre.shiki code .szBVR, html code.shiki .szBVR{--shiki-default:#D73A49;--shiki-dark:#F97583}html pre.shiki code .sj4cs, html code.shiki .sj4cs{--shiki-default:#005CC5;--shiki-dark:#79B8FF}html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}

</style>

## Examples

### Active State

```html
<nord-nav-group class="n:max-inline-[220px]">
      <nord-nav-item href="#" active>Search</nord-nav-item>
      <nord-nav-item href="#">Notifications</nord-nav-item>
      <nord-nav-item href="#">My tasks</nord-nav-item>
    </nord-nav-group>
```

### Basic

```html
<nord-nav-group class="n:max-inline-[220px]">
      <nord-nav-item href="#">Dashboard</nord-nav-item>
    </nord-nav-group>
```

### Nested Nav

```html
<nord-nav-group class="n:max-inline-[220px]">
      <nord-nav-item href="#">Dashboard</nord-nav-item>

      <nord-nav-item icon="navigation-reports">
        Reports
        <nord-nav-group slot="subnav">
          <nord-nav-item href="#">Payments</nord-nav-item>
          <nord-nav-item href="#">Disputes</nord-nav-item>
        </nord-nav-group>
      </nord-nav-item>
    </nord-nav-group>
```

### With Badge

```html
<nord-nav-group class="n:max-inline-[220px]">
      <nord-nav-item href="#" active icon="navigation-search">Search</nord-nav-item>
      <nord-nav-item badge="12" href="#" icon="navigation-notifications">Notifications</nord-nav-item>
      <nord-nav-item badge="27" icon="navigation-tasks">
        My tasks
        <nord-nav-group slot="subnav">
          <nord-nav-item href="#">Payments</nord-nav-item>
          <nord-nav-item href="#">Disputes</nord-nav-item>
        </nord-nav-group>
      </nord-nav-item>
    </nord-nav-group>
```

### With Icons

```html
<nord-nav-group class="n:max-inline-[220px]">
      <nord-nav-item href="#" icon="navigation-search">Search</nord-nav-item>
      <nord-nav-item href="#" icon="navigation-notifications">Notifications</nord-nav-item>
      <nord-nav-item href="#" icon="navigation-tasks">My tasks</nord-nav-item>
    </nord-nav-group>
```

### Custom Variables

```html
<nord-nav-group
      class="
        n:max-inline-[220px]
        n:[--n-nav-item-border-radius:999px]
        n:[--n-nav-item-padding-block:10px]
        n:[--n-nav-item-padding-inline:16px]
        n:[--n-nav-item-background-active:#0ea5e9]
        n:[--n-nav-item-color-active:#ffffff]
        n:[--n-nav-item-background-hover:#e0f2fe]
        n:[--n-nav-item-color-hover:#0c4a6e]
        n:[--n-nav-item-expanded-overlay-opacity:1]
        n:[--n-nav-item-expanded-overlay-filter:none]
        n:[--n-nav-item-background-expanded:#e0f2fe]
      "
    >
      <nord-nav-item href="#" active icon="navigation-search">Search</nord-nav-item>
      <nord-nav-item href="#" icon="navigation-notifications">Notifications</nord-nav-item>
      <nord-nav-item active icon="navigation-reports">
        Reports
        <nord-nav-group slot="subnav">
          <nord-nav-item href="#" active>Payments</nord-nav-item>
          <nord-nav-item href="#">Disputes</nord-nav-item>
        </nord-nav-group>
      </nord-nav-item>
    </nord-nav-group>
```

## API Reference

### Properties

- **active** (`boolean`, default: `false`) — Used for indicating the current page. This gives a prominent background to the nav item,
and marks the item as the current page for assistive technology.
- **icon** (`string | undefined`) — The name of an icon from Nordicons to display for the nav item.
- **href** (`string | undefined`) — The url the nav item should link to.
Note: this is not used if you have nested navigation using the "subnav" slot.
- **badge** (`string | undefined`) — Allows you to add a notification badge with a number next to the nav item.
- **open** (`boolean`, default: `false`) — When the nav items contains a subnav, controls whether the section is expanded or not.
Note: this is only used if you have nested navigation using the "subnav" slot.
- **auto-dismiss-on-select** (`boolean`, default: `false`) — Opt-in: when set, the item's rail-mode subnav flyout closes automatically
once one of its leaf descendants is activated (for example, when a user
clicks a link inside the flyout). Off by default — existing flyout
behavior is unchanged unless this attribute is present.
- **side-offset** (`number | undefined`) — Distance in pixels between the rail-mode tooltip and the item, forwarded
to the internal <a href="/components/tooltip/">Tooltip</a>'s <code>side-offset</code> (the
Floating UI <code>offset</code> main axis). When unset, the tooltip's own default
(<code>8</code>) applies. Useful for lining up rail-item tooltips with neighbouring
standalone tooltips.
- **align-offset** (`number | undefined`) — Offset in pixels along the alignment axis for the rail-mode tooltip,
forwarded to the internal <a href="/components/tooltip/">Tooltip</a>'s
<code>align-offset</code>. When unset, the tooltip's own default (<code>0</code>) applies.

### Events

- **toggle** (`NordEvent`) — Dispatched whenever a nav item's state changes between open and closed.
- **activate** (`NordEvent`) — Dispatched whenever a nav item has been marked as active

### Slots

- **(default)** — The default slot used for the nav item's text.
- **icon** — Slot for a custom leading icon element. Use when the <code>icon</code> attribute isn't enough — for example, an icon wrapped in a styled badge or circular frame. When set, it takes priority over the <code>icon</code> attribute and is shown in both the expanded nav and the collapsed rail.
- **end** — Trailing content rendered after the label inside the item's flex row. The slotted element flows naturally — it claims its real width and the label flex-shrinks to make room. Use for a custom badge, count pill, action icon, etc. when the <code>badge</code> attribute's plain text isn't enough.
- **subnav** — Used for nesting navigation. When used the nav-item becomes a button to collapse the subnav, rather than a link.
- **rail-tooltip** — Full content of the rail-mode tooltip. When provided, it replaces the default label projection — write the tooltip's content directly (label + count + keyboard shortcut etc., bound to whatever reactive state you like). When absent, the tooltip falls back to the item's default-slot label. Only rendered in rail mode.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### CSS Custom Properties

- `--n-nav-item-color` (default: `var(--n-color-text-weak)`) — Text color in the default state.
- `--n-nav-item-background` (default: `transparent`) — Background color in the default state.
- `--n-nav-item-border-radius` (default: `var(--n-border-radius-s)`) — Border radius of the item and its active-parent overlay.
- `--n-nav-item-padding-block` (default: `var(--n-space-s)`) — Block-axis (top/bottom) padding.
- `--n-nav-item-padding-inline` (default: `var(--n-space-s)`) — Inline-axis (start/end) padding.
- `--n-nav-item-line-height` (default: `var(--n-line-height-tight)`) — Line height of the item's text.
- `--n-nav-item-icon-gap` (default: `calc(var(--n-space-s) * 1.4)`) — Inline gap between the leading icon (the <code>icon</code> attribute or <code>icon</code> slot) and the item's text.
- `--n-nav-item-color-hover` (default: `var(--n-color-text)`) — Text color on hover.
- `--n-nav-item-background-hover` (default: `var(--n-color-nav-hover)`) — Background color on hover.
- `--n-nav-item-color-active` (default: `var(--n-color-text-on-accent)`) — Text color when the item is <code>active</code>.
- `--n-nav-item-background-active` (default: `var(--n-color-accent)`) — Background color when the item is <code>active</code>.
- `--n-nav-item-color-expanded` (default: `var(--n-color-text-weak)`) — Text color when the item is an active parent (its subnav is expanded).
- `--n-nav-item-background-expanded` (default: `var(--n-color-accent)`) — Background color of the overlay drawn behind an active-parent item.
- `--n-nav-item-expanded-overlay-opacity` (default: `0.12`) — Opacity of the active-parent overlay. Set to <code>1</code> for a solid background.
- `--n-nav-item-expanded-overlay-filter` (default: `brightness(150%)`) — Filter applied to the active-parent overlay. Set to <code>none</code> to disable.
- `--n-rail-flyout-background` (default: `var(--n-color-surface)`) — Background colour of the rail-mode subnav flyout container.
- `--n-rail-flyout-box-shadow` (default: `var(--n-box-shadow-popout)`) — Box-shadow of the rail-mode subnav flyout container.
- `--n-rail-flyout-min-inline-size` (default: `220px`) — Minimum inline size (width in LTR) of the rail-mode subnav flyout body.
- `--n-rail-flyout-padding` (default: `var(--n-space-s)`) — Padding of the rail-mode subnav flyout body.
- `--n-rail-flyout-offset-inline` (default: `0`) — Extra inline-axis offset applied to the rail flyout (positive values push it away from the rail in LTR; mirrored in RTL).
- `--n-rail-flyout-offset-block` (default: `0`) — Extra block-axis offset applied to the rail flyout (positive values push it downward).
- `--n-rail-subnav-indicator-color` (default: `var(--n-color-border-strong)`) — Colour of the small triangle indicator drawn in the bottom-inline-end corner of rail items that have a subnav (default + hover state).
- `--n-rail-subnav-indicator-color-active` (default: `var(--n-color-border-hover)`) — Colour of the triangle indicator while the item's flyout popout is open.
- `--n-nav-badge-background` (default: `var(--n-color-status-notification)`) — Background colour of the built-in <code>badge</code> attribute pill (<code>.n-nav-badge</code>).
- `--n-nav-badge-color` (default: `#fff`) — Text colour of the built-in <code>badge</code> attribute pill.
- `--n-nav-badge-font-size` (default: `var(--n-font-size-xs)`) — Font size of the built-in <code>badge</code> attribute pill.
- `--n-nav-badge-font-weight` (default: `var(--n-font-weight)`) — Font weight of the built-in <code>badge</code> attribute pill.
- `--n-nav-badge-line-height` (default: `1`) — Line height of the built-in <code>badge</code> attribute pill. Combined with <code>--n-nav-badge-padding-block</code> this controls the pill's effective block size.
- `--n-nav-badge-padding-block` (default: `var(--n-space-xs)`) — Block-axis padding of the built-in <code>badge</code> attribute pill.
- `--n-nav-badge-padding-inline` (default: `calc(var(--n-space-s) / 2)`) — Inline-axis padding of the built-in <code>badge</code> attribute pill.
- `--n-nav-badge-border-radius` (default: `var(--n-border-radius-pill)`) — Border radius of the built-in <code>badge</code> attribute pill.
- `--n-nav-badge-min-inline-size` (default: `20px`) — Minimum inline size (width in LTR) of the built-in <code>badge</code> attribute pill — sets a visual floor for single-digit counts.
- `--n-nav-badge-margin-inline-start` (default: `var(--n-space-xs)`) — Inline-start margin separating the badge from the preceding label inside the nav-item's flex row.
- `--n-rail-badge-size` (default: `5px`) — Diameter of the rail-mode dot the badge collapses into when the layout is in <code>collapse-mode="rail"</code> and not <code>nav-open</code>.

### Dependencies

- `nav-group`
- `popout`
- `tooltip`

<!--
Source: https://nordhealth.design/raw/components/nav-item.md
-->
