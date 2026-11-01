# nord-button-group

> Button groups are designed to bring together button controls that are of a similar nature. For example text formatting controls.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to group together buttons, or dropdowns, of a similar nature or purpose.
- Use the appropriate `role` attribute on the button group to provide additional semantics.
- Use an `aria-labelledby` attribute referencing another element to best explain the contents of the button group.

> **Don't:** - Don’t add components other than buttons, dropdowns and in some instances visually hidden components to the button group.
- Don’t skip the addition of an appropriate label if the added `role` attribute value calls for it.
- Don’t use for building grid based layouts.

---

## Content guidelines

Button labels should be clear, accurate and predictable. It should be possible for the user to understand what will happen when they click a button:

> **Do:** View user settings

> **Don't:** Click here

When writing button labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** My tasks

> **Don't:** My Tasks

Avoid unnecessary words and articles in button labels, such as “the”, “an” or “a”:

> **Do:** Add item

> **Don't:** Add an item

---

## Variants

This section describes the different component variants, their purpose, and when to use each variant.

| Name      | Purpose                                                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------- |
| `default` | The default variant renders a group of segmented buttons to emphasize that they’re thematically-related. |
| `spaced`  | The spaced variant renders a gap between the buttons to space them out evenly.                           |

## Examples

### Basic

```html
<nord-visually-hidden id="basic-label">Send options</nord-visually-hidden>
    <nord-button-group aria-labelledby="basic-label">
      <nord-button variant="primary">Send invoice</nord-button>
      <nord-dropdown size="s" align="end">
        <nord-button slot="toggle" variant="primary" square>
          <nord-icon name="arrow-down-small"></nord-icon>
        </nord-button>
        <nord-dropdown-item>Send later today</nord-dropdown-item>
        <nord-dropdown-item>Send tomorrow</nord-dropdown-item>
        <nord-dropdown-item>Mark as paid</nord-dropdown-item>
      </nord-dropdown>
    </nord-button-group>
```

### Overview

```html
<nord-visually-hidden id="overview-label">Formatting controls</nord-visually-hidden>
    <nord-button-group aria-labelledby="overview-label">
      <nord-button>Bold</nord-button>
      <nord-button>Italic</nord-button>
      <nord-button>Underline</nord-button>
    </nord-button-group>
```

### Variants

```html
<nord-stack gap="l">
      <nord-button-group variant="spaced">
        <nord-button>Cancel</nord-button>
        <nord-button variant="primary">Save changes</nord-button>
      </nord-button-group>
    </nord-stack>
```

### Active State

```html
<p class="n-typescale-m n-margin-be-s" id="active-state-label">Formatting options</p>
    <nord-button-group id="active-state-group" aria-labelledby="active-state-label">
      <nord-button>
        Bold
        <nord-icon slot="end" name="text-bold"></nord-icon>
      </nord-button>
      <nord-button>
        Italic
        <nord-icon slot="end" name="text-italic"></nord-icon>
      </nord-button>
      <nord-button>
        Underline
        <nord-icon slot="end" name="text-underline"></nord-icon>
      </nord-button>
      <nord-button>
        Strikethrough
        <nord-icon slot="end" name="text-strike-through"></nord-icon>
      </nord-button>
    </nord-button-group>
```

### Direction

```html
<nord-stack align-items="start">
      <nord-visually-hidden id="direction-label">Formatting controls</nord-visually-hidden>
      <nord-button-group aria-labelledby="direction-label">
        <nord-button>
          Bold
          <nord-icon slot="start" name="text-bold"></nord-icon>
        </nord-button>
        <nord-button>
          Italics
          <nord-icon slot="start" name="text-italic"></nord-icon>
        </nord-button>
        <nord-button>
          Underline
          <nord-icon slot="start" name="text-underline"></nord-icon>
        </nord-button>
        <nord-button>
          Strikethrough
          <nord-icon slot="start" name="text-strike-through"></nord-icon>
        </nord-button>
      </nord-button-group>

      <nord-visually-hidden id="direction-label">Formatting controls</nord-visually-hidden>
      <nord-button-group direction="vertical" aria-labelledby="direction-label" class="n:[--n-button-text-align:start]">
        <nord-button expand>
          Bold
          <nord-icon slot="start" name="text-bold"></nord-icon>
        </nord-button>
        <nord-button expand>
          Italics
          <nord-icon slot="start" name="text-italic"></nord-icon>
        </nord-button>
        <nord-button expand>
          Underline
          <nord-icon slot="start" name="text-underline"></nord-icon>
        </nord-button>
        <nord-button expand>
          Strikethrough
          <nord-icon slot="start" name="text-strike-through"></nord-icon>
        </nord-button>
      </nord-button-group>
    </nord-stack>
```

### Single

```html
<!-- When you start out with one button, but conditionally add more -->

    <nord-stack>
      <nord-visually-hidden id="single-label">Send options</nord-visually-hidden>
      <nord-button-group aria-labelledby="single-label" id="button-group">
        <nord-button variant="primary">Send invoice</nord-button>
      </nord-button-group>

      <nord-button id="add-button" size="s">Add button to group</nord-button>
    </nord-stack>
```

### Small Buttons

```html
<nord-stack align-items="start">
      <nord-visually-hidden id="small-buttons-label">Formatting controls</nord-visually-hidden>
      <nord-button-group aria-labelledby="small-buttons-label">
        <nord-button size="s">
          <nord-icon label="Bold" name="text-bold"></nord-icon>
        </nord-button>
        <nord-button size="s">
          <nord-icon label="Italic" name="text-italic"></nord-icon>
        </nord-button>
        <nord-button size="s">
          <nord-icon label="Underline" name="text-underline"></nord-icon>
        </nord-button>
        <nord-button size="s">
          <nord-icon label="Strike through" name="text-strike-through"></nord-icon>
        </nord-button>
      </nord-button-group>
    </nord-stack>
```

### Spaced

```html
<nord-stack>
      <nord-button-group variant="spaced" wrap>
        <nord-button variant="secondary">Cancel</nord-button>
        <nord-button variant="primary">Save changes</nord-button>
      </nord-button-group>

      <nord-button-group variant="spaced">
        <nord-button aria-describedby="export" size="s">Export</nord-button>
        <nord-button variant="primary" size="s">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
      </nord-button-group>

      <nord-tooltip id="export" position="block-end">Export data as Spreadsheet</nord-tooltip>
    </nord-stack>
```

### With Dropdown

```html
<nord-visually-hidden id="with-dropdown-label">Paragraph formatting controls</nord-visually-hidden>
    <nord-button-group aria-labelledby="with-dropdown-label">
      <nord-button>
        <nord-icon slot="start" name="text-indent-increase"></nord-icon>
        Increase indent
      </nord-button>
      <nord-button>
        <nord-icon slot="start" name="text-indent-decrease"></nord-icon>
        Decrease indent
      </nord-button>
      <nord-dropdown size="s">
        <nord-button slot="toggle">Alignment</nord-button>
        <nord-dropdown-item>
          <nord-icon slot="start" name="text-left-align"></nord-icon>
          Align left
        </nord-dropdown-item>
        <nord-dropdown-item>
          <nord-icon slot="start" name="text-right-align"></nord-icon>
          Align right
        </nord-dropdown-item>
        <nord-dropdown-item>
          <nord-icon slot="start" name="text-center"></nord-icon>
          Align center
        </nord-dropdown-item>
        <nord-dropdown-item>
          <nord-icon slot="start" name="text-justified"></nord-icon>
          Align justified
        </nord-dropdown-item>
      </nord-dropdown>
      <nord-button>
        <nord-icon slot="start" name="text-list"></nord-icon>
        List
      </nord-button>
    </nord-button-group>
```

## API Reference

### Properties

- **variant** (`'default' | 'spaced'`, default: `'default'`) — The style variant of the button group.
- **direction** (`'vertical' | 'horizontal'`, default: `'horizontal'`) — The direction of the button group.
- **wrap** (`boolean`, default: `false`) — Defines whether the buttons are forced in a single line
or can be flowed into multiple lines (only applied when variant is set to <code>spaced</code>).
- **role** (`string`, default: `'group'`) — The appropriate role for the containing element.

### Slots

- **(default)** — The button group content

### CSS Custom Properties

- `--n-button-group-border-radius` (default: `var(--n-border-radius-s)`) — Controls the rounded corners of the button group, using <a href="/tokens/#border-radius">border radius tokens</a>. Only relevant for the default variant.
- `--n-button-group-box-shadow` (default: `var(--n-box-shadow)`) — Controls the surrounding shadow, using <a href="/tokens/#box-shadow">box shadow tokens</a>. Only relevant for the default variant.
- `--n-button-group-gap` (default: `calc(var(--n-space-s) + var(--n-space-xs))`) — Controls the gap between buttons, using <a href="/tokens/#space">space tokens</a>. Only relevant for the spaced variant. Defaults to <code>var(--n-space-s)</code> when all slotted controls are <code>size="s"</code>.

<!--
Source: https://nordhealth.design/raw/components/button-group.md
-->
