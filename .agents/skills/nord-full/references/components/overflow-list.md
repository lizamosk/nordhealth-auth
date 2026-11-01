# nord-overflow-list

> Overflow List shows the contiguous set of direct child items that fits in
> the available inline size and exposes the remaining items to a consumer-owned
> overflow affordance.

## Usage

This section includes guidelines for designers and developers about using this component in different contexts.

> **Do:** - Use Overflow List for one ordered row of actions, filters, breadcrumbs, or compact metadata that must adapt to its available inline size.
- Place custom `slot="overflow"` content at the DOM end for `collapse-from="end"` and at the DOM start for `collapse-from="start"`, so visual and keyboard order agree.
- Use `nord-overflow-list-menu` for the common action-menu case; it mirrors overflowed actions and forwards activation to their originals.
- For non-interactive, nonessential overflow where a summary is sufficient, nest `nord-overflow-list-count` inside a Badge or another suitable affordance to show a locale-aware `+N more`, or use `compact` for `+N`.
- Set `singular-label` and `plural-label` on either helper so its accessible label identifies the hidden content.
- Listen for `nord-overflow-change` and use its original element/index pairs when a product needs a custom overflow affordance.
- Provide an equivalent keyboard-accessible representation whenever hidden items are actionable or essential.

> **Don't:** - Don’t rebuild the standard count or action-menu behavior in setup scripts when the declarative helpers cover it.
- Don’t move or recreate items in response to the change event. The original elements remain in place and return when space is available.
- Don’t set `min-visible-items` higher than the layout can reasonably accommodate unless deliberate host overflow is acceptable.

## Observation

The default `observe="self"` mode measures the component’s actual assigned inline size. Use `observe="parent"` only when the containing element’s CSS content box owns the relevant constraint. If a Shadow DOM container constrains slotted content internally—for example, with Card padding that is not reflected by its host—keep the default self observation. Direct-child additions, removals, reordering and content changes, item or affordance resizes, font loading, direction changes, and observed-size changes are batched into the next animation frame.

The `gap` values use Nord spacing tokens. `--n-overflow-list-gap` is available for a product-specific spacing constraint.

## Accessibility

Overflowed originals receive component-owned `hidden` and `inert` state, which removes their interactive descendants from the tab order and accessibility tree. When an item fits again, or the component disconnects, only state added by Overflow List is removed; consumer-owned `hidden` or `inert` attributes remain intact.

The base component does not create a default interactive affordance. If hidden items contain actions, use `nord-overflow-list-menu` as the direct `slot="overflow"` child. For non-interactive count-only content, nest `nord-overflow-list-count` inside the consumer-owned overflow Badge or another suitable affordance. A count alone is not an equivalent replacement for hidden actions. Keep the affordance at the logical collapse edge in DOM order so keyboard navigation matches the visual row in both LTR and RTL layouts.

Both helpers format the count for the active locale. Without `compact`, the visual label is `+1 more` or `+2 more`; compact Badge and menu affordances use `+N`. Their `singular-label` and `plural-label` attributes keep the accessible label equally specific. The canonical Overview, Badge Tags, Dropdown Actions, and Collapse From Start stories cover these declarative patterns.

Raw consumer-owned `slot="overflow"` content remains available as an escape hatch. Listen for `nord-overflow-change` when a custom affordance must synchronize different content or behavior, and use the event’s original element/index pairs without moving or recreating the originals.

## Examples

### Overview

```html
<div
      style="box-sizing: border-box; inline-size: 23rem; max-inline-size: 100%; padding: var(--n-space-s); border: 1px dashed var(--n-color-border)"
    >
      <nord-overflow-list observe="parent" gap="s">
        <nord-button size="s">Overview</nord-button>
        <nord-button size="s">Properties</nord-button>
        <nord-button size="s">Edit</nord-button>
        <nord-button size="s">Duplicate</nord-button>
        <nord-button size="s">Share</nord-button>
        <nord-overflow-list-menu
          slot="overflow"
          size="s"
          singular-label="action"
          plural-label="actions"
        ></nord-overflow-list-menu>
      </nord-overflow-list>
    </div>
```

### Collapse From Start

```html
<nord-overflow-list
      style="inline-size: 18rem; max-inline-size: 100%"
      collapse-from="start"
      gap="s"
    >
      <nord-overflow-list-menu
        slot="overflow"
        size="s"
        singular-label="action"
        plural-label="actions"
      ></nord-overflow-list-menu>
      <nord-button size="s">Step 1</nord-button>
      <nord-button size="s">Step 2</nord-button>
      <nord-button size="s">Step 3</nord-button>
      <nord-button size="s">Step 4</nord-button>
      <nord-button size="s">Step 5</nord-button>
    </nord-overflow-list>
```

### Badge Tags

```html
<nord-card
      style="box-sizing: border-box; resize: horizontal; overflow: hidden; min-inline-size: 5rem; inline-size: 18.75rem; max-inline-size: 100%"
    >
      <nord-overflow-list gap="xs">
        <nord-badge variant="info">React</nord-badge>
        <nord-badge variant="success">TypeScript</nord-badge>
        <nord-badge variant="warning">StyleX</nord-badge>
        <nord-badge variant="neutral">Storybook</nord-badge>
        <nord-badge variant="danger">Vitest</nord-badge>
        <nord-badge slot="overflow" variant="neutral">
          <nord-overflow-list-count compact singular-label="tag" plural-label="tags"></nord-overflow-list-count>
        </nord-badge>
      </nord-overflow-list>
    </nord-card>
```

### Dropdown Actions

```html
<nord-card
      style="box-sizing: border-box; resize: horizontal; overflow: hidden; min-inline-size: 6.25rem; inline-size: 18rem; max-inline-size: 100%"
    >
      <nord-overflow-list gap="s">
        <nord-button size="s" variant="primary">Save</nord-button>
        <nord-button size="s">Edit</nord-button>
        <nord-button size="s">Duplicate</nord-button>
        <nord-button size="s">Share</nord-button>
        <nord-button size="s">Archive</nord-button>
        <nord-button size="s" variant="danger">Delete</nord-button>
        <nord-overflow-list-menu
          slot="overflow"
          size="s"
          compact
          singular-label="action"
          plural-label="actions"
        ></nord-overflow-list-menu>
      </nord-overflow-list>
    </nord-card>
```

### Click Handlers

```html
<nord-card
      style="box-sizing: border-box; resize: horizontal; overflow: hidden; min-inline-size: 11rem; inline-size: 22rem; max-inline-size: 100%"
    >
      <nord-stack gap="s">
        <nord-overflow-list id="click-handler-list" gap="s">
          <nord-button id="click-handler-save" size="s" data-click-handler-action="Save">Save</nord-button>
          <nord-button id="click-handler-edit" size="s" data-click-handler-action="Edit">Edit</nord-button>
          <nord-button id="click-handler-duplicate" size="s" data-click-handler-action="Duplicate">Duplicate</nord-button>
          <nord-button id="click-handler-share" size="s" data-click-handler-action="Share">Share</nord-button>
          <nord-button id="click-handler-archive" size="s" data-click-handler-action="Archive">Archive</nord-button>
          <nord-overflow-list-menu
            slot="overflow"
            size="s"
            compact
            singular-label="action"
            plural-label="actions"
          ></nord-overflow-list-menu>
        </nord-overflow-list>
        <output
          id="click-handler-output"
          aria-live="polite"
          aria-atomic="true"
          data-handler-count="0"
          data-current-target=""
          data-is-trusted=""
          style="color: var(--n-color-text-weaker); font-size: var(--n-font-size-s); line-height: var(--n-line-height)"
        >No action handled yet.</output>
      </nord-stack>
    </nord-card>
```

### Parent Observation

```html
<div
      style="box-sizing: border-box; inline-size: 18rem; padding: var(--n-space-s); border: 1px solid var(--n-color-border)"
    >
      <nord-overflow-list observe="parent" gap="xs">
        <nord-button>Appointments</nord-button>
        <nord-button>Messages</nord-button>
        <nord-button>Invoices</nord-button>
        <nord-button>Reports</nord-button>
        <nord-overflow-list-menu
          slot="overflow"
          singular-label="action"
          plural-label="actions"
        ></nord-overflow-list-menu>
      </nord-overflow-list>
    </div>
```

### Minimum Visible

```html
<nord-overflow-list
      style="inline-size: 9rem"
      gap="xs"
      min-visible-items="2"
    >
      <nord-button>Appointments</nord-button>
      <nord-button>Messages</nord-button>
      <nord-button>Invoices</nord-button>
      <nord-overflow-list-menu
        slot="overflow"
        singular-label="action"
        plural-label="actions"
      ></nord-overflow-list-menu>
    </nord-overflow-list>
```

### Dynamic Items

```html
<nord-stack gap="s">
      <nord-overflow-list id="dynamic-overflow-list" style="inline-size: 18rem">
        <nord-button>Action 1</nord-button>
        <nord-button>Action 2</nord-button>
        <nord-button>Action 3</nord-button>
        <nord-overflow-list-menu
          slot="overflow"
          singular-label="action"
          plural-label="actions"
        ></nord-overflow-list-menu>
      </nord-overflow-list>
      <nord-stack direction="horizontal" gap="s">
        <nord-button id="add-overflow-item" size="s">Add item</nord-button>
        <nord-button id="remove-overflow-item" size="s">Remove item</nord-button>
      </nord-stack>
    </nord-stack>
```

### Constrained Containers

```html
<nord-stack gap="m">
      <div>
        <strong>Wide</strong>
        <nord-overflow-list style="inline-size: 30rem" gap="xs">
          <nord-button>Appointments</nord-button>
          <nord-button>Messages</nord-button>
          <nord-button>Invoices</nord-button>
          <nord-overflow-list-menu
            slot="overflow"
            singular-label="action"
            plural-label="actions"
          ></nord-overflow-list-menu>
        </nord-overflow-list>
      </div>
      <div>
        <strong>Narrow</strong>
        <nord-overflow-list style="inline-size: 12rem" gap="xs">
          <nord-button>Appointments</nord-button>
          <nord-button>Messages</nord-button>
          <nord-button>Invoices</nord-button>
          <nord-overflow-list-menu
            slot="overflow"
            singular-label="action"
            plural-label="actions"
          ></nord-overflow-list-menu>
        </nord-overflow-list>
      </div>
    </nord-stack>
```

## API Reference

### Properties

- **collapse-from** (`OverflowCollapseFrom`, default: `'end'`) — Logical edge from which items collapse.
- **gap** (`OverflowListGap`, default: `'s'`) — Nord spacing token used between items.
- **min-visible-items** (`number`, default: `0`) — Minimum number of items that remain visible, even when they do not fit.
- **observe** (`OverflowListObserve`, default: `'self'`) — Element whose available inline size is observed.

### Events

- **nord-overflow-change** (`OverflowListChangeEvent`) — Dispatched when the visible or overflowed item set changes. The event exposes immutable <code>visibleItems</code> and <code>overflowItems</code> arrays containing each element and its original index.

### Slots

- **(default)** — Ordered items managed by the Overflow List.
- **overflow** — Consumer-owned affordance for access to overflowed content.

### CSS Custom Properties

- `--n-overflow-list-gap` (default: `var(--n-space-s)`) — Controls logical spacing between visible items and supplied overflow content.

<!--
Source: https://nordhealth.design/raw/components/overflow-list.md
-->
