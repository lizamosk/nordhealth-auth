# nord-dropdown-group

> Dropdown group includes all the actions or items in a single dropdown
> group and is used for grouping items into related categories.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Group dropdown items into dropdown groups based on related categories.
- Use group headings to clarify the category of a section.

> **Don't:** - Don’t use for grouping other types of content.

---

## Content guidelines

Dropdown items should be always written in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Create user

> **Don't:** Create User

Dropdown items should always lead with a strong verb that encourages action. Use the `{verb}+{noun}` format except in the case of common actions like Save, Close or Cancel:

> **Do:** Edit row

> **Don't:** Editing options

Avoid unnecessary words and articles in dropdown items, such as “the”, “an” or “a”:

> **Do:** Change theme

> **Don't:** Change the theme

Avoid ending dropdown items in punctuation:

> **Do:** Switch user

> **Don't:** Switch user.

Avoid all caps for dropdown items:

> **Do:** Rename

> **Don't:** RENAME

Keep dropdown items to a single line of text:

> **Do:** Change theme

> **Don't:** Change the theme

of the veterinary application.

## Examples

### Basic

```html
<nord-dropdown-group>
      <nord-dropdown-item>Show keyboard shortcuts</nord-dropdown-item>
      <nord-dropdown-item>Help & Support</nord-dropdown-item>
      <nord-dropdown-item>API</nord-dropdown-item>
    </nord-dropdown-group>
```

### Heading

```html
<nord-dropdown-group heading="Group heading">
      <nord-dropdown-item>Show keyboard shortcuts</nord-dropdown-item>
      <nord-dropdown-item>Help & Support</nord-dropdown-item>
      <nord-dropdown-item>API</nord-dropdown-item>
    </nord-dropdown-group>
```

## API Reference

### Properties

- **heading** (`string | undefined`) — Heading and accessible label for the dropdown group.

### Slots

- **(default)** — The dropdown group content.

<!--
Source: https://nordhealth.design/raw/components/dropdown-group.md
-->
