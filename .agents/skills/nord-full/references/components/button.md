# nord-button

> Buttons are used for interface actions. Primary style should be
> used only once per section for main call-to-action, while other
> styles can appear more frequently.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Only use one primary button per section, as a main call-to-action.
- Use clear and accurate labels.
- Use established button colors appropriately. For example, only use a danger button style for an action that’s difficult or impossible to undo.
- Prioritize the most important actions. Too many buttons will cause confusion.
- Be consistent with positioning of buttons in the user interface.
- Use strong, actionable verbs in labels such as “Add”, “Close”, “Cancel”, or “Save”.

> **Don't:** - Don't use a primary button in every row of a table.
- Don’t use buttons to link to other pages. Use regular link or a plain style instead where necessary.
- Don’t use buttons for navigation where the link appears within or following a sentence.
- Don’t use labels such as “Read more”, “Click here” or “More”.

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

| Name       | Purpose                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `default`  | Default style is the most common button variant. Only switch to another variant if you need to adjust the visual weight of the element.                                                                  |
| `primary`  | Primary style is reserved for main call-to-actions. Should be used only once per content area or panel, e.g. for a “Save” action.                                                                        |
| `dashed`   | Dashed style should be used for actions that trigger filtering.                                                                                                                                          |
| `danger`   | Danger style should be used for actions that delete data or otherwise make it hard to undo the action.                                                                                                   |
| `plain`    | Used for less important or less common actions. Can be also used for linking to other pages.                                                                                                             |
| `disabled` | Used for actions that aren’t currently available or not available anymore. Also prevents users from being able to interact with the component, and conveys its inactive state to assistive technologies. |

---

## Icon usage in button

Illustrative icons should be always positioned in the `start` slot:

![Button with icon in start slot](/img/components/button/start-slot.png){className="[\"n-border\",\"n-border-radius\",\"n-brand-therapy\"]" style="max-inline-size:700px;" loading="lazy" height="475" width="800"}![Button with icon in start slot](/img/components/button/start-slot-vet.png){className="[\"n-border\",\"n-border-radius\",\"n-brand-veterinary\"]" style="max-inline-size:700px;" loading="lazy" height="475" width="800"}When a button is used as a dropdown toggle, the `interface-dropdown-small` icon from [Nordicons](/nordicons/) is automatically placed in the `end` slot (you can use the `hideDropdownIcon` property to hide it):

![Dropdown button](/img/components/button/dropdown.png){className="[\"n-border\",\"n-border-radius\"]" style="max-inline-size:700px;" loading="lazy" height="475" width="800"}Each button size has a recommended icon size. The medium button uses the `s` icon size, the [small button](/components/button/?example=small+buttons) uses the `xs` icon size, and the [large button](/components/button/?example=large+buttons) uses the `m` icon size. The icon will adjust size automatically based on the button size, so you will get the correct behavior by default. However, this can be overridden by explicitly setting a size on the icon.

![Button icon sizes](/img/components/button/icon-sizes.png){className="[\"n-border\",\"n-border-radius\",\"n-brand-therapy\"]" style="max-inline-size:700px;" loading="lazy" height="475" width="800"}![Button icon sizes](/img/components/button/icon-sizes-vet.png){className="[\"n-border\",\"n-border-radius\",\"n-brand-veterinary\"]" style="max-inline-size:700px;" loading="lazy" height="475" width="800"}Use `interface-add-small` icon in the `start` slot for create/add type primary actions in the [header](/components/header/):

![Create/add type primary action with icon](/img/components/button/create.png){className="[\"n-border\",\"n-border-radius\",\"n-brand-therapy\"]" style="max-inline-size:700px;" loading="lazy" height="475" width="800"}![Create/add type primary action with icon](/img/components/button/create-vet.png){className="[\"n-border\",\"n-border-radius\",\"n-brand-veterinary\"]" style="max-inline-size:700px;" loading="lazy" height="475" width="800"}---

## Additional considerations

- Users of assistive technology expect a button to submit data or do an action. If you need the button to navigate into another view, use the `href` property which will output `<a>` tag instead of a `<button>`.
- When you need to disable a button, use `disabled` property as it conveys this information correctly to assistive technologies like screen readers.
- Button component provides 3 size variants; small, medium and large. The large size should only be used for marketing purposes or on areas such as an empty space/content notice.

## Examples

### Variants

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-button>Default</nord-button>
      <nord-button variant="primary">Primary</nord-button>
      <nord-button variant="danger">Danger</nord-button>
      <nord-button variant="dashed">Dashed</nord-button>
      <nord-button variant="plain">Plain</nord-button>
    </nord-stack>
```

### Sizes

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-button size="s">Small</nord-button>
      <nord-button size="m">Medium</nord-button>
      <nord-button size="l">Large</nord-button>
    </nord-stack>
```

### With Icons

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-button variant="primary">
        <nord-icon slot="start" name="generic-github"></nord-icon>
        Contribute on GitHub
      </nord-button>
      <nord-button variant="primary">
        Export
        <nord-icon slot="end" name="interface-download"></nord-icon>
      </nord-button>
      <nord-button square>
        <nord-icon name="interface-copy" label="Copy"></nord-icon>
      </nord-button>
    </nord-stack>
```

### States

```html
<nord-stack direction="vertical" gap="s">
      <nord-button variant="primary" loading>Loading</nord-button>
      <nord-button disabled>Disabled</nord-button>
      <nord-button variant="primary" expand>Expanded</nord-button>
    </nord-stack>
```

### Button As Link

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-button href="#">Default</nord-button>
      <nord-button href="#" variant="primary">Primary</nord-button>
      <nord-button href="#" variant="danger">Danger</nord-button>
      <nord-button href="#" variant="dashed">
        <nord-icon slot="start" name="interface-filter"></nord-icon>
        Filter
      </nord-button>
      <nord-button href="#" square>
        <nord-icon name="interface-menu-small" label="Options"></nord-icon>
      </nord-button>
      <nord-button href="#" variant="plain">Plain</nord-button>
      <nord-button href="#" disabled>Disabled</nord-button>
    </nord-stack>
```

### Button With Dropdown But Hide Icon

```html
<nord-stack direction="horizontal">
      <nord-dropdown size="s">
        <nord-button variant="primary" slot="toggle" hide-dropdown-icon> Create new </nord-button>
        <nord-dropdown-item>Patient record</nord-dropdown-item>
        <nord-dropdown-item>User record</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### Button With Dropdown

```html
<nord-stack direction="horizontal">
      <nord-dropdown size="s">
        <nord-button variant="primary" slot="toggle"> Create new </nord-button>
        <nord-dropdown-item>Patient record</nord-dropdown-item>
        <nord-dropdown-item>User record</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### Custom Background

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-button class="n:[--n-button-background-color:var(--n-color-status-success)]" variant="primary">
        Primary
      </nord-button>
      <nord-button class="n:[--n-button-background-color:var(--n-color-status-success-weak)]">Default</nord-button>
      <nord-button class="n:[--n-button-background-color:var(--n-color-status-success-weak)]" variant="plain">
        Plain
      </nord-button>
    </nord-stack>
```

### Disabled

```html
<nord-button disabled>Disabled</nord-button>
```

### Expanded

```html
<nord-stack direction="vertical" gap="s">
      <nord-button expand>Default</nord-button>
      <nord-button variant="primary" expand>Primary</nord-button>
      <nord-button variant="danger" expand>Danger</nord-button>
      <nord-button variant="dashed" expand>Filter</nord-button>
      <nord-button variant="plain" expand>Plain</nord-button>
      <nord-button disabled expand>Disabled</nord-button>
    </nord-stack>
```

### Icon Only

```html
<nord-stack direction="vertical" gap="s">
      <nord-button square size="s">
        <nord-icon name="interface-copy" label="Copy"></nord-icon>
      </nord-button>
      <nord-button square>
        <nord-icon name="interface-copy" label="Copy"></nord-icon>
      </nord-button>
      <nord-button square size="l">
        <nord-icon name="interface-copy" label="Copy"></nord-icon>
      </nord-button>
    </nord-stack>
```

### Large Buttons

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-button size="l">Default</nord-button>
      <nord-button size="l" variant="primary">Primary</nord-button>
      <nord-button size="l" variant="danger">Danger</nord-button>
      <nord-button variant="dashed" size="l">
        <nord-icon slot="start" name="interface-filter"></nord-icon>
        Filter
      </nord-button>
      <nord-button size="l" square>
        <nord-icon name="interface-menu-small" label="Options"></nord-icon>
      </nord-button>
      <nord-button size="l" variant="plain">Plain</nord-button>
      <nord-button size="l" disabled>Disabled</nord-button>
    </nord-stack>
```

### Loading Interactivity

```html
<nord-button variant="primary"
      >Export <nord-icon slot="end" name="interface-download"></nord-icon
    ></nord-button>

    <nord-toast-group></nord-toast-group>
```

### Loading

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-button loading>Default</nord-button>
      <nord-button loading variant="primary">Primary</nord-button>
      <nord-button loading variant="danger">Danger</nord-button>
      <nord-button loading variant="dashed">
        <nord-icon slot="start" name="interface-filter"></nord-icon>
        Filter
      </nord-button>
      <nord-button loading>
        <nord-icon name="interface-menu-small" label="Options"></nord-icon>
      </nord-button>
      <nord-button loading variant="plain">Plain</nord-button>
      <nord-button loading disabled>Disabled</nord-button>
    </nord-stack>
```

### Slots

```html
<nord-stack direction="horizontal" gap="s">
      <nord-button variant="primary">
        <nord-icon slot="start" name="interface-edit"></nord-icon>
        Start slot
      </nord-button>
      <nord-button variant="primary">
        End slot
        <nord-icon slot="end" name="interface-edit"></nord-icon>
      </nord-button>
    </nord-stack>
```

### Small Buttons

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-button size="s">Default</nord-button>
      <nord-button size="s" variant="primary">Primary</nord-button>
      <nord-button size="s" variant="danger">Danger</nord-button>
      <nord-button variant="dashed" size="s">
        <nord-icon slot="start" name="interface-filter"></nord-icon>
        Filter
      </nord-button>
      <nord-button size="s" square>
        <nord-icon name="interface-menu-small" label="Options"></nord-icon>
      </nord-button>
      <nord-button size="s" variant="plain">Small</nord-button>
      <nord-button size="s" disabled>Disabled</nord-button>
    </nord-stack>
```

### With Icon

```html
<nord-button href="#" size="l" variant="primary">
      <nord-icon slot="start" name="generic-github"></nord-icon>
      Contribute on GitHub
    </nord-button>
```

## API Reference

### Properties

- **variant** (`'default' | 'primary' | 'dashed' | 'plain' | 'danger'`, default: `'default'`) — The style variant of the button.
- **type** (`'button' | 'submit' | 'reset'`, default: `'submit'`) — The type of the button.
- **size** (`'s' | 'm' | 'l'`, default: `'m'`) — The size of the button.
This affects font-size and padding.
- **href** (`string | undefined`) — When provided, renders the button as a link,
with its href attribute set to the given value.
- **download** (`boolean`, default: `false`) — When provided together with a href property, the button will
trigger a file download instead of a page visit.
- **target** (`'_self' | '_blank' | '_parent' | '_top'`, default: `'_self'`) — When provided together with a href property, determines where
to open the linked URL. The keywords have special meanings for
where to load the URL: “_self” means the current browsing context,
“_blank” usually a new tab but users can configure browsers this to
open a new window instead, “_parent” means the parent browsing
context of the current one, but if no parent exists, behaves as
_self, and finally “top” means the topmost browsing context.
- **rel** (`string | undefined`) — When provided together with a href property, sets the relationship
between the linked URL and the current document, e.g. “noopener
noreferrer” when linking to untrusted content in a new tab.
- **expand** (`boolean`, default: `false`) — Controls whether the button expands to fill the width of its container.
- **square** (`boolean`, default: `false`) — When provided, the button is rendered as a square button. Use this for icon only buttons.
- **loading** (`boolean`, default: `false`) — Controls whether the button is in loading state. Please note that the spinner
is hidden from assistive technologies, so you need to make sure to announce
the loading state to e.g. screen reader users. We also recommend disabling
all user interactions on the button itself while in loading state.
- **hide-dropdown-icon** (`boolean`, default: `false`) — Controls whether the <code>interface-dropdown-small</code> icon from Nordicons is hidden
in the <code>end</code> slot when used as a dropdown toggle.
- **disabled** (`boolean`, default: `false`) — Makes the component disabled. This prevents users from
being able to interact with the component, and conveys
its inactive state to assistive technologies.
- **name** (`string | undefined`) — The name of the form component.
- **value** (`string`, default: `''`) — The value of the form component.
- **form** (`HTMLFormElement | null`) — Gets the form, if any, associated with the form element.
The setter accepts a string, which is the id of the form.

### Slots

- **(default)** — The button content
- **start** — Used to place content at the start of button text. Typically used for icons.
- **end** — Used to place content at the end of button text. Typically used for icons.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### CSS Custom Properties

- `--n-button-border-radius` (default: `var(--n-border-radius-s)`) — Controls the rounded corners of the button, using <a href="/tokens/#border-radius">border radius tokens</a>.
- `--n-button-gap` (default: `var(--n-space-s)`) — Controls the spacing between items within the button, using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-button-gradient` (default: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.013) 100%))`) — Controls the overlayed gradient background on the button.
- `--n-button-background-color` (default: `var(--n-color-button)`) — Controls the background color of the button, using our <a href="/tokens/#color">color tokens</a>.
- `--n-button-border-color` (default: `var(--n-color-border-strong)`) — Controls the border color of the button, using our <a href="/tokens/#color">color tokens</a>.
- `--n-button-text-align` (default: `center`) — Controls the text alignment for the text in the button.
- `--n-button-box-shadow` (default: `var(--n-box-shadow)`) — Controls the surrounding shadow, using our <a href="/tokens/#box-shadow">box shadow tokens</a>.
- `--n-button-color` (default: `var(--n-color-text)`) — Controls the color of the text within the button, using our <a href="/tokens/#color">color tokens</a>.
- `--n-button-padding-inline` (default: `calc(var(--n-space-m) / 1.2)`) — Controls the inline, or left and right, padding of the button.
- `--n-button-font-size` (default: `var(--n-font-size-m)`) — Controls the size of the text within the button, using our <a href="/tokens/#font">font tokens</a>.
- `--n-button-font-weight` (default: `var(--n-font-weight)`) — Controls the weight of the text within the button, using our <a href="/tokens/#font">font tokens</a>.
- `--n-button-min-block-size` (default: `var(--n-space-xl)`) — Controls the minimum block size, or height, of the button using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-button-toggle-icon-color` (default: `var(--n-color-icon)`) — Controls the color of toggle icon that gets rendered when the button is used as a <a href="/components/dropdown/">Dropdown</a> toggle.
- `--n-button-user-select` (default: `none`) — Controls the text selection behavior of the button text.

### Dependencies

- `spinner`

<!--
Source: https://nordhealth.design/raw/components/button.md
-->
