# nord-tag-group

> Tag groups are designed to bring together selectable tags that are of a similar nature. For example categories you can filter by.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to group together selectable tags.
- Use the appropriate `role` attribute on the tag group to provide additional semantics.
- Use an `aria-labelledby` attribute referencing another element to best explain the contents of the tag group.

> **Don't:** - Don’t add components other than selectable tags and in some instances visually hidden components to the tag group.
- Don’t skip the addition of an appropriate label if the added `role` attribute value calls for it.
- Don’t use for building grid based layouts.

---

## Content guidelines

Tags should use short and clear labels for easy scanning. They should be concise and informative:

> **Do:** Has seizures

> **Don't:** This dog has seizures often

When writing tag labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Service dog

> **Don't:** Service Dog

Avoid unnecessary words and articles in tag labels, such as “the”, “an” or “a”:

> **Do:** Service dog

> **Don't:** A service dog

---

## Variants

This section describes the different component variants, their purpose, and when to use each variant.

| Name      | Purpose                                                                                     |
| --------- | ------------------------------------------------------------------------------------------- |
| `default` | The default variant renders a group of tags to emphasize that they’re thematically-related. |
| `spaced`  | The spaced variant renders a gap between the tags to space them out evenly.                 |

## Examples

### Basic

```html
<nord-visually-hidden id="basic-label">Category</nord-visually-hidden>
    <nord-tag-group aria-labelledby="basic-label">
      <nord-tag variant="selectable">Canine</nord-tag>
      <nord-tag variant="selectable">Feline</nord-tag>
      <nord-tag variant="selectable" checked>Rodents</nord-tag>
    </nord-tag-group>
```

### Direction

```html
<nord-stack align-items="start">
      <nord-visually-hidden id="direction-label">Category</nord-visually-hidden>
      <nord-tag-group aria-labelledby="direction-label">
        <nord-tag variant="selectable">Canine</nord-tag>
        <nord-tag variant="selectable">Feline</nord-tag>
        <nord-tag variant="selectable" checked>Rodents</nord-tag>
      </nord-tag-group>

      <nord-visually-hidden id="direction-label">Category</nord-visually-hidden>
      <nord-tag-group aria-labelledby="direction-label" direction="vertical">
        <nord-tag expand variant="selectable">Canine</nord-tag>
        <nord-tag expand variant="selectable">Feline</nord-tag>
        <nord-tag expand variant="selectable" checked>Rodents</nord-tag>
      </nord-tag-group>
    </nord-stack>
```

### Single

```html
<!-- When you start out with one tag, but conditionally add more -->

    <nord-stack>
      <nord-visually-hidden id="single-label">Category</nord-visually-hidden>
      <nord-tag-group aria-labelledby="single-label">
        <nord-tag variant="selectable">Canine</nord-tag>
      </nord-tag-group>

      <nord-button id="add-tag" size="s">Add tag to group</nord-button>
    </nord-stack>
```

### Small Tags

```html
<nord-visually-hidden id="small-tags-label">Category</nord-visually-hidden>
    <nord-tag-group aria-labelledby="small-tags-label">
      <nord-tag variant="selectable" size="s">Canine</nord-tag>
      <nord-tag variant="selectable" size="s">Feline</nord-tag>
      <nord-tag variant="selectable" size="s" checked>Rodents</nord-tag>
    </nord-tag-group>
```

### Spaced

```html
<nord-visually-hidden id="spaced-label">Category</nord-visually-hidden>
    <nord-tag-group variant="spaced" aria-labelledby="spaced-label">
      <nord-tag variant="selectable">Canine</nord-tag>
      <nord-tag variant="selectable">Feline</nord-tag>
      <nord-tag variant="selectable" checked>Rodents</nord-tag>
    </nord-tag-group>
```

### With Visual Label

```html
<nord-stack gap="s" direction="horizontal" align-items="center" wrap>
      <label id="with-visual-label-label" class="n-font-size-s">Category</label>
      <nord-tag-group aria-labelledby="with-visual-label-label">
        <nord-tag size="s" variant="selectable">Canine</nord-tag>
        <nord-tag size="s" variant="selectable">Feline</nord-tag>
        <nord-tag size="s" variant="selectable" checked>Rodents</nord-tag>
      </nord-tag-group>
    </nord-stack>
```

## API Reference

### Properties

- **variant** (`'default' | 'spaced'`, default: `'default'`) — The style variant of the tag group.
- **direction** (`'vertical' | 'horizontal'`, default: `'horizontal'`) — The direction of the tag group.
- **wrap** (`boolean`, default: `false`) — Defines whether the tags are forced in a single line
or can be flowed into multiple lines (only applied when variant is set to <code>spaced</code>).
- **role** (`string`, default: `'group'`) — The appropriate role for the containing element.

### Events

- **change** (`NordEvent`) — Fired whenever a tag has been checked or unchecked via user interaction.
- **remove** (`NordEvent`) — Fired when the remove button is activated on a tag. This event should be used to remove the tag from the DOM.

### Slots

- **(default)** — The tag group content

### CSS Custom Properties

- `--n-tag-group-border-radius` (default: `var(--n-border-radius-s)`) — Controls the rounded corners of the tag group, using <a href="/tokens/#border-radius">border radius tokens</a>. Only relevant for the default variant.
- `--n-tag-group-box-shadow` (default: `var(--n-box-shadow)`) — Controls the surrounding shadow, using <a href="/tokens/#box-shadow">box shadow tokens</a>. Only relevant for the default variant.

<!--
Source: https://nordhealth.design/raw/components/tag-group.md
-->
