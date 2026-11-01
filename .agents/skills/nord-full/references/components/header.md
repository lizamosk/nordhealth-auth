# nord-header

> The header is a block of designated space for labelling the currently
> viewed context as well as providing primary actions.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use the header component to show a heading to describe the current view.
- Use the header component to hold primary actions.
- Use the header component at a visual high position at full width.
- Utilise the [`n-truncate`](/css/#miscellaneous-utilities) CSS helper to prevent long headings from wrapping.

> **Don't:** - Don’t overcrowd the header component with too many actions or information.
- Don’t nest the header component too deeply and restrict its available space.
- Don’t add large amounts of content or long headings. Aim for headings that are short and concise.

---

## Content guidelines

The header component should be a containing element placed high on the page to present high level controls and to describe the page itself. It shouldn’t be overcrowded with controls or information.

> **Do:** [Menu] Dashboard  [Account] [Log out]

> **Don't:** [Menu] Use the cards below to view various information [Export] [Save] [Edit Profile] [Log out] [Preferences]

## Examples

### Basic

```html
<nord-header>
      <h1 class="n-typescale-l">Dashboard</h1>
      <nord-button-group slot="end" variant="spaced">
        <nord-button>Export</nord-button>
        <nord-button variant="primary">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
      </nord-button-group>
    </nord-header>
```

### Title Only

```html
<nord-header>
      <h1 class="n-typescale-l">Dashboard</h1>
    </nord-header>
```

### Size

```html
<nord-header size="s">
      <h1 class="n-typescale-l">Dashboard</h1>
      <nord-button-group slot="end" variant="spaced">
        <nord-button size="s">Export</nord-button>
        <nord-button size="s" variant="primary">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
      </nord-button-group>
    </nord-header>
```

### With Filter And Tooltip

```html
<nord-header>
      <h1 class="n-typescale-l">Payments</h1>
      <nord-button aria-describedby="filter" variant="dashed" size="s">
        <nord-icon slot="start" name="interface-filter"></nord-icon>
        Filter
      </nord-button>
      <nord-tooltip id="filter" position="block-end">
        Filter
        <nord-icon slot="shortcut" name="keyboard-option" label="Option key"></nord-icon>
        <span slot="shortcut">F</span>
      </nord-tooltip>
      <nord-button-group slot="end" variant="spaced">
        <nord-button aria-describedby="export">Export</nord-button>
        <nord-button variant="primary">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
      </nord-button-group>
      <nord-tooltip id="export" position="block-end">Export data as Spreadsheet</nord-tooltip>
    </nord-header>
```

## API Reference

### Properties

- **size** (`'m' | 's' | 'xs'`, default: `'m'`) — Controls the size of the header component.

### Slots

- **(default)** — The header content.
- **end** — Optional slot for buttons, toggles, etc.

### CSS Custom Properties

- `--n-header-background-color` (default: `var(--n-color-surface)`) — Background color of the header.

<!--
Source: https://nordhealth.design/raw/components/header.md
-->
