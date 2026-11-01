# nord-tag

> Tags represent a set of keywords that help label, categorize,
> and organize objects. Commonly used to signify the attributes of an object.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use for labeling, categorizing, or organizing objects.
- Ensure there is enough space around tags when they are interactive.
- Always position tags so that it’s easy to understand what object they’re related to.
- Keep in mind that tags can increase the amount of cognitive noise, particularly when combined with the status component, so use them in moderation.

> **Don't:** - Don’t use for showing the status of an object, use the [badge component](/components/badge/) instead.
- Don’t use when you want to highlight something that has been added recently, use the [badge component](/components/badge/) instead.
- Don’t use alternatives to existing tag variants.

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

| Name         | Purpose                                           |
| ------------ | ------------------------------------------------- |
| `default`    | The default variant for a non-interactive tag.    |
| `removable`  | Used for tags that can be removed by the user.    |
| `selectable` | Used for tags that can be selected or deselected. |

## Examples

### Basic

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-tag>May bite</nord-tag>
      <nord-tag>Has seizures</nord-tag>
      <nord-tag>Service dog</nord-tag>
    </nord-stack>
```

### Overview

```html
<nord-tag-group aria-label="Patient flags">
      <nord-tag>May bite</nord-tag>
      <nord-tag>Has seizures</nord-tag>
      <nord-tag>Service dog</nord-tag>
    </nord-tag-group>
```

### Selectable Tags

```html
<nord-tag-group aria-label="Species" wrap>
      <nord-tag variant="selectable" name="species" value="canine" checked>Canine</nord-tag>
      <nord-tag variant="selectable" name="species" value="feline">Feline</nord-tag>
      <nord-tag variant="selectable" name="species" value="rodent">Rodent</nord-tag>
    </nord-tag-group>
```

### Disabled

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-tag variant="removable" disabled>May bite</nord-tag>
      <nord-tag variant="selectable" disabled>Has seizures</nord-tag>
      <nord-tag variant="selectable" disabled checked>Service dog</nord-tag>
    </nord-stack>
```

### Expanded

```html
<nord-stack direction="vertical" gap="s" class="n:max-inline-[200px]">
      <nord-tag variant="selectable" expand>May bite</nord-tag>
      <nord-tag variant="removable" expand>Has seizures</nord-tag>
      <nord-tag expand>Service dog</nord-tag>
    </nord-stack>
```

### Removable

```html
<nord-tag-group variant="spaced" wrap>
      <nord-tag variant="removable">May bite</nord-tag>
      <nord-tag variant="removable">Has seizures</nord-tag>
      <nord-tag variant="removable">Service dog</nord-tag>
    </nord-tag-group>
```

### Selectable Inside Form

```html
<form action="#">
      <nord-stack>
        <nord-fieldset label="Tags">
          <nord-stack gap="s" direction="horizontal" wrap>
            <nord-tag name="may-bite" variant="selectable" value="selected">May bite</nord-tag>
            <nord-tag name="has-seizures" variant="selectable">Has seizures</nord-tag>
            <nord-tag name="service-dog" variant="selectable" checked>Service dog</nord-tag>
          </nord-stack>
        </nord-fieldset>

        <nord-button variant="primary" type="submit">Submit</nord-button>
      </nord-stack>
    </form>
```

### Selectable

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-tag variant="selectable">May bite</nord-tag>
      <nord-tag variant="selectable">Has seizures</nord-tag>
      <nord-tag variant="selectable" checked>Service dog</nord-tag>
    </nord-stack>
```

### Small Size

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-tag variant="selectable" size="s" checked>Service dog</nord-tag>
      <nord-tag variant="removable" size="s">Has seizures</nord-tag>
      <nord-tag size="s">Service dog</nord-tag>
    </nord-stack>
```

## API Reference

### Properties

- **variant** (`'default' | 'removable' | 'selectable'`, default: `'default'`) — The behavioral variant of the tag.
- **checked** (`boolean`, default: `false`) — Controls whether the tag is checked or not (only relevant when variant is set to <code>selectable</code>).
- **size** (`'s' | 'm'`, default: `'m'`) — The size of the tag. This affects the font-size.
- **expand** (`boolean`, default: `false`) — Controls whether the tag expands to fill the width of its container.
- **disabled** (`boolean`, default: `false`) — Makes the component disabled. This prevents users from
being able to interact with the component, and conveys
its inactive state to assistive technologies.
- **name** (`string | undefined`) — The name of the form component.
- **value** (`string`, default: `''`) — The value of the form component.
- **form** (`HTMLFormElement | null`) — Gets the form, if any, associated with the form element.
The setter accepts a string, which is the id of the form.

### Events

- **change** (`NordEvent`) — Fired whenever the tag has been checked or unchecked via user interaction.
- **remove** (`NordEvent`) — Fired when the remove button is activated. This event should be used to remove the tag from the DOM.

### Slots

- **(default)** — The tag content.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### Dependencies

- `icon`

<!--
Source: https://nordhealth.design/raw/components/tag.md
-->
