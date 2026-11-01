# nord-dropdown-item

> Dropdown item populates dropdown with actions. Items can be
> placed either inside a dropdown group or directly inside a
> dropdown component.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Group dropdown items into dropdown groups based on related categories.
- Use group headings to clarify the category of a section.

> **Don't:** - Don’t use dropdown item outside of dropdown group and dropdown components.

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
<nord-dropdown-item>Show keyboard shortcuts</nord-dropdown-item>
    <nord-dropdown-item>Help & Support</nord-dropdown-item>
    <nord-dropdown-item>API</nord-dropdown-item>
```

### Custom Hover Effect

```html
<style>nord-dropdown-item:hover {
    --n-dropdown-item-background-color: var(--n-color-active);
    --n-dropdown-item-color: var(--n-color-text);
  }</style>
    <nord-dropdown-item>Show keyboard shortcuts</nord-dropdown-item>
    <nord-dropdown-item>Help & Support</nord-dropdown-item>
    <nord-dropdown-item>API</nord-dropdown-item>
```

### Disabled

```html
<nord-dropdown-item disabled>Disabled</nord-dropdown-item>
    <nord-dropdown-item href="#" disabled>Disabled link</nord-dropdown-item>
    <nord-dropdown-item>Regular</nord-dropdown-item>
    <nord-dropdown-item href="#">Regular link</nord-dropdown-item>
```

### Links

```html
<nord-dropdown-item href="#">User profile</nord-dropdown-item>
    <nord-dropdown-item href="#">Help & Support</nord-dropdown-item>
    <nord-dropdown-item href="#">Sign out</nord-dropdown-item>
```

### Slots

```html
<nord-dropdown-item>
      <nord-icon slot="start" name="user-single"></nord-icon>
      View profile
      <nord-icon slot="end" name="interface-checked"></nord-icon>
    </nord-dropdown-item>
    <nord-dropdown-item>
      <nord-icon slot="start" name="navigation-settings"></nord-icon>
      Settings
    </nord-dropdown-item>
```

## API Reference

### Properties

- **href** (`string | undefined`) — The url the dropdown item should link to.
- **target** (`'_self' | '_blank' | '_parent' | '_top'`, default: `'_self'`) — When provided together with a href property, determines where
to open the linked URL. The keywords have special meanings for
where to load the URL: “_self” means the current browsing context,
“_blank” usually a new tab but users can configure browsers this to
open a new window instead, “_parent” means the parent browsing
context of the current one, but if no parent exists, behaves as
_self, and finally “top” means the topmost browsing context.
- **disabled** (`boolean`, default: `false`) — Makes the component disabled. This prevents users from
being able to interact with the component, and conveys
its inactive state to assistive technologies.

### Slots

- **(default)** — The dropdown item content.
- **start** — Used to place content before dropdown item text. Typically used for icons.
- **end** — Used to place content after dropdown item text. Typically used for icons.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### CSS Custom Properties

- `--n-dropdown-item-background-color` (default: `transparent`) — Controls the background color of the item, using our <a href="/tokens/#color">color tokens</a>.
- `--n-dropdown-item-color` (default: `var(--n-color-text)`) — Controls the color of the text within the item, using our <a href="/tokens/#color">color tokens</a>.
- `--n-dropdown-item-white-space` (default: `nowrap`) — Controls how the item's label handles whitespace. Set to <code>normal</code> to allow long labels to wrap across multiple lines instead of truncating with an ellipsis.
- `--n-dropdown-item-align-items` (default: `center`) — Controls how the item's contents (start slot, label, end slot) align on the cross axis. Useful with multi-line wrapping: set to <code>flex-start</code> so icons/avatars sit on the first line instead of the vertical middle.

<!--
Source: https://nordhealth.design/raw/components/dropdown-item.md
-->
