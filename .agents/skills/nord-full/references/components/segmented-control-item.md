# nord-segmented-control-item

> Segmented control items populate a segmented control with options.
> Every item should be placed inside a segmented control.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use segmented control to allow users to pick one choice from a set of closely related choices, and immediately apply that selection.
- Favor segmented control or [radio component](/components/radio/) over a select component when there are a small number of options. This reduces the number of clicks a user has to make, increasing efficiency.
- Segmented control items are grouped by their `name` attribute. Therefore, it is crucial that the same `name` is used for a group of segmented control items.
- Give each segmented control item within a group a unique `value`.
- Segmented control items **must** be used in combination with a [segmented control component](/components/segmented-control/).

> **Don't:** - Don’t place interactive content (buttons, links etc) inside the label.
- Don’t use when a user can select more than one option. In this case, use a [checkbox](/components/checkbox/) or [selectable tag](/components/tag/?example=selectable) instead.
- Don’t use for “accepting terms of service” and similar functionality. Use a [checkbox](/components/checkbox/) instead.
- When you have more than 5 options to choose from. Consider using a [select](/components/select/) instead.

---

## Content guidelines

Segmented control labels should be clear, accurate and predictable. It should be possible for the user to understand what they are enabling or disabling:

> **Do:** User settings

> **Don't:** Option 1

When writing segmented control labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** My tasks

> **Don't:** My Tasks

Avoid ending in punctuation if it’s a single sentence, word, or a fragment:

> **Do:** Blue

> **Don't:** Blue.

Do not use commas or semicolons at the end of each line

> **Do:** Patient

> **Don't:** Patient;

---

## Additional considerations

- Once a segmented control item has been selected, users cannot return to having no items selected without refreshing their browser window. Therefore, you should always make sure one of the items is pre-selected.

## Examples

### Basic

```html
<nord-stack>
      <nord-segmented-control-item label="Active" name="group" value="active" checked></nord-segmented-control-item>
      <nord-segmented-control-item label="Default" name="group" value="default"></nord-segmented-control-item>
    </nord-stack>
```

### Disabled

```html
<nord-stack>
      <nord-segmented-control-item label="Active" name="group" value="active" checked disabled></nord-segmented-control-item>
      <nord-segmented-control-item label="Default" name="group" value="default" disabled></nord-segmented-control-item>
    </nord-stack>
```

### Icons Only

```html
<nord-stack>
      <nord-segmented-control-item name="group" value="list" checked>
        <label slot="label">
          <nord-icon label="list" name="text-list"></nord-icon>
        </label>
      </nord-segmented-control-item>
      <nord-segmented-control-item name="group" value="grid">
        <label slot="label">
          <nord-icon label="grid" name="interface-grid"></nord-icon>
        </label>
      </nord-segmented-control-item>
      <nord-segmented-control-item name="group" value="map">
        <label slot="label">
          <nord-icon label="map" name="generic-location"></nord-icon>
        </label>
      </nord-segmented-control-item>
    </nord-stack>
```

### Size

```html
<nord-stack>
      <nord-segmented-control-item size="s" label="Small" name="group" value="1" checked></nord-segmented-control-item>
      <nord-segmented-control-item size="m" label="Medium" name="group" value="2"></nord-segmented-control-item>
      <nord-segmented-control-item size="l" label="Large" name="group" value="3"></nord-segmented-control-item>
    </nord-stack>
```

### With Icons

```html
<nord-stack>
      <nord-segmented-control-item name="group" value="list" checked>
        <label slot="label">
          <nord-icon name="text-list"></nord-icon>
          List
        </label>
      </nord-segmented-control-item>
      <nord-segmented-control-item name="group" value="grid">
        <label slot="label">
          <nord-icon name="interface-grid"></nord-icon>
          Grid
        </label>
      </nord-segmented-control-item>
      <nord-segmented-control-item name="group" value="map">
        <label slot="label">
          <nord-icon name="generic-location"></nord-icon>
          Map
        </label>
      </nord-segmented-control-item>
    </nord-stack>
```

## API Reference

### Properties

- **checked** (`boolean`, default: `false`) — Controls whether the segmented control item is checked or not.
- **size** (`'s' | 'm' | 'l'`, default: `'m'`) — The size of the segmented control item.
This affects font-size and padding.
- **label** (`string`, default: `''`) — Label for the segmented control item.
- **disabled** (`boolean`, default: `false`) — Makes the component disabled. This prevents users from
being able to interact with the component, and conveys
its inactive state to assistive technologies.
- **name** (`string | undefined`) — The name of the form component.
- **value** (`string`, default: `''`) — The value of the form component.
- **form** (`HTMLFormElement | null`) — Gets the form, if any, associated with the form element.
The setter accepts a string, which is the id of the form.

### Events

- **change** (`NordEvent`) — Fired whenever the segmented control item has been checked.
- **input** (`NordEvent`) — Fired as the user types into the input.

### Slots

- **label** — Use when a label requires more than plain text.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### CSS Custom Properties

- `--n-segmented-control-item-border-radius` (default: `var(--n-border-radius-s)`) — Controls the rounded corners of the item, using <a href="/tokens/#border-radius">border radius tokens</a>.
- `--n-segmented-control-item-gap` (default: `var(--n-space-xs)`) — Controls the spacing between elements within the item, using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-segmented-control-item-gradient` (default: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.013) 100%))`) — Controls the overlayed gradient background on the item.
- `--n-segmented-control-item-background-color` (default: `var(--n-color-nav-hover)`) — Controls the background color of the item, using our <a href="/tokens/#color">color tokens</a>.
- `--n-segmented-control-item-color` (default: `var(--n-color-text-weaker)`) — Controls the color of the text within the item, using our <a href="/tokens/#color">color tokens</a>.
- `--n-segmented-control-item-padding-inline` (default: `calc(var(--n-space-m) / 1.2)`) — Controls the inline, or left and right, padding of the item.
- `--n-segmented-control-item-box-shadow` (default: `none`) — Controls the surrounding shadow, using our <a href="/tokens/#box-shadow">box shadow tokens</a>.
- `--n-segmented-control-item-font-size` (default: `var(--n-font-size-m)`) — Controls the size of the text within the item, using our <a href="/tokens/#font">font tokens</a>.
- `--n-segmented-control-item-font-weight` (default: `var(--n-font-weight)`) — Controls the weight of the text within the item, using our <a href="/tokens/#font">font tokens</a>.
- `--n-segmented-control-item-min-block-size` (default: `calc(var(--n-space-xl) - 2px)`) — Controls the minimum block size, or height, of the item using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-segmented-control-item-inline-size` (default: `auto`) — Controls the inline size of the item.

<!--
Source: https://nordhealth.design/raw/components/segmented-control-item.md
-->
