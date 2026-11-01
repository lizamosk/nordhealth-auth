# Dropdown Submenu

Dropdown submenu nests a secondary menu within a dropdown. It automatically handles opening on hover, closing on outside click, keyboard navigation, and manages accessibility attributes.

## Usage

```html
<nord-dropdown>
  <nord-button slot="toggle">Menu</nord-button>

  <nord-dropdown-submenu>
    <nord-dropdown-item slot="trigger">
      Export
      <nord-icon slot="end" name="arrow-right"></nord-icon>
    </nord-dropdown-item>
    <nord-dropdown-item>Export as PDF</nord-dropdown-item>
    <nord-dropdown-item>Export as CSV</nord-dropdown-item>
  </nord-dropdown-submenu>

  <nord-dropdown-item>Delete</nord-dropdown-item>
</nord-dropdown>
```

## Behavior

- **Opens on hover (non-touch devices)** — Hovering over the trigger item opens the submenu
- **Opens on click (touch devices & accessibility)** — Clicking the trigger toggles the submenu open/closed
- **Keyboard navigation** — ArrowRight or Enter to open, ArrowLeft to close, first item auto-focused
- **Closes siblings** — Opening one submenu automatically closes other open submenus
- **Closes on regular item hover** — Hovering a non-trigger item closes the submenu
- **Accessibility** — Automatically manages `aria-haspopup="menu"` and `aria-expanded` attributes
- **Capability-based** — Detects touch capability and adapts interaction model accordingly
- **Mobile Sheet** — Converts to a mobile sheet stack navigation on small screens, unless the parent `nord-dropdown` has the `always-floating` property set.

## Methods

- `close()` — Programmatically close the submenu

## Slots

- `trigger` — The element that opens the submenu (typically `nord-dropdown-item`, but any element works)
- default — The submenu content items (can be `nord-dropdown-item`, `nord-dropdown-group`, or any custom HTML/components)

## Content Flexibility

The submenu slot accepts any content type, not just dropdown items. This enables use cases like:

- Form inputs (checkboxes, radio buttons, inputs)
- Custom buttons and layouts
- Mixed content (items grouped with custom controls)
- Any HTML structure that makes sense for your use case

<style>

html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .s9eBZ, html code.shiki .s9eBZ{--shiki-default:#22863A;--shiki-dark:#85E89D}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}

</style>

## Examples

### Basic

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:mbe-xxl"
    >
      <nord-dropdown size="s">
        <nord-button slot="toggle">
          <nord-visually-hidden>Menu</nord-visually-hidden>
          <nord-icon size="s" name="interface-menu-small"></nord-icon>
        </nord-button>

        <nord-dropdown-submenu>
          <nord-dropdown-item slot="trigger">
            <nord-icon slot="start" name="interface-share" size="s"></nord-icon>
            Share
            <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
          </nord-dropdown-item>
          <nord-dropdown-item>Copy link</nord-dropdown-item>
          <nord-dropdown-item>Send by email</nord-dropdown-item>
          <nord-dropdown-item>Get QR code</nord-dropdown-item>
        </nord-dropdown-submenu>

        <nord-dropdown-submenu>
          <nord-dropdown-item slot="trigger">
            <nord-icon slot="start" name="interface-download" size="s"></nord-icon>
            Export
            <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
          </nord-dropdown-item>
          <nord-dropdown-item>Export as PDF</nord-dropdown-item>
          <nord-dropdown-item>Export as CSV</nord-dropdown-item>
          <nord-dropdown-item>Export as JSON</nord-dropdown-item>
        </nord-dropdown-submenu>

        <nord-dropdown-submenu>
          <nord-dropdown-item slot="trigger">
            <nord-icon slot="start" name="interface-menu-small" size="s"></nord-icon>
            More options
            <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
          </nord-dropdown-item>
          <nord-dropdown-item>Duplicate</nord-dropdown-item>
          <nord-dropdown-item>Move to folder</nord-dropdown-item>
          <nord-dropdown-item>Rename</nord-dropdown-item>
        </nord-dropdown-submenu>

        <nord-dropdown-item>
          <nord-icon slot="start" name="interface-delete" size="s"></nord-icon>
          Delete
        </nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### With Groups

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:mbe-xxl"
    >
      <nord-dropdown size="s">
        <nord-button slot="toggle">Actions</nord-button>

        <nord-dropdown-submenu>
          <nord-dropdown-item slot="trigger">
            Export
            <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
          </nord-dropdown-item>
          <nord-dropdown-group heading="Formats">
            <nord-dropdown-item>PDF</nord-dropdown-item>
            <nord-dropdown-item>CSV</nord-dropdown-item>
            <nord-dropdown-item>JSON</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group heading="Quality">
            <nord-dropdown-item>Low</nord-dropdown-item>
            <nord-dropdown-item>Medium</nord-dropdown-item>
            <nord-dropdown-item>High</nord-dropdown-item>
          </nord-dropdown-group>
        </nord-dropdown-submenu>

        <nord-dropdown-item>Delete</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### With Custom Content

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:mbe-xxl"
    >
      <nord-dropdown>
        <nord-button slot="toggle">Workspace</nord-button>

        <nord-dropdown-submenu>
          <nord-dropdown-item slot="trigger">
            Rename
            <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
          </nord-dropdown-item>

          <div class="n:py-s n:px-m n:min-inline-[240px]">
            <nord-stack direction="vertical" gap="m">
              <nord-input label="Name" placeholder="New name" expand></nord-input>
              <nord-stack class="n:flex n:flex-row n:flex-wrap n:items-center n:gap-s n:justify-end">
                <nord-button>Cancel</nord-button>
                <nord-button variant="primary">Save</nord-button>
              </nord-stack>
            </nord-stack>
          </div>
        </nord-dropdown-submenu>

        <nord-dropdown-item>Delete</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### Nested Submenus

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:mbe-xxl"
    >
      <nord-dropdown size="s">
        <nord-button slot="toggle">
          <nord-visually-hidden>Menu</nord-visually-hidden>
          <nord-icon size="s" name="interface-menu-small"></nord-icon>
        </nord-button>

        <nord-dropdown-submenu>
          <nord-dropdown-item slot="trigger">
            <nord-icon slot="start" name="interface-download" size="s"></nord-icon>
            Export
            <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
          </nord-dropdown-item>

          <nord-dropdown-item>Export as PDF</nord-dropdown-item>
          <nord-dropdown-item>Export as CSV</nord-dropdown-item>

          <nord-dropdown-submenu>
            <nord-dropdown-item slot="trigger">
              Advanced options
              <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
            </nord-dropdown-item>
            <nord-dropdown-item>Custom format</nord-dropdown-item>
            <nord-dropdown-item>With metadata</nord-dropdown-item>
            <nord-dropdown-item>Compressed</nord-dropdown-item>
          </nord-dropdown-submenu>
        </nord-dropdown-submenu>

        <nord-dropdown-item>Delete</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### Always Floating

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:mbe-xxl"
    >
      <nord-dropdown size="s" always-floating>
        <nord-button slot="toggle">
          <nord-visually-hidden>Menu</nord-visually-hidden>
          <nord-icon size="s" name="interface-menu-small"></nord-icon>
        </nord-button>

        <nord-dropdown-submenu>
          <nord-dropdown-item slot="trigger">
            <nord-icon slot="start" name="interface-download" size="s"></nord-icon>
            Export
            <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
          </nord-dropdown-item>

          <nord-dropdown-item>Export as PDF</nord-dropdown-item>
          <nord-dropdown-item>Export as CSV</nord-dropdown-item>

          <nord-dropdown-submenu>
            <nord-dropdown-item slot="trigger">
              Advanced options
              <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
            </nord-dropdown-item>
            <nord-dropdown-item>Custom format</nord-dropdown-item>
            <nord-dropdown-item>With metadata</nord-dropdown-item>
            <nord-dropdown-item>Compressed</nord-dropdown-item>
          </nord-dropdown-submenu>
        </nord-dropdown-submenu>

        <nord-dropdown-item>Delete</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

## API Reference

### Events

- **nord-submenu-navigate** (`CustomEvent`) — Fired when mobile stack navigation activates this submenu.
- **open** (`NordEvent`) — Forwarded from the internal nord-popout.
- **close** (`NordEvent`) — Forwarded from the internal nord-popout.

### Slots

- **trigger** — The element that opens the submenu (typically nord-dropdown-item).
- **(default)** — The submenu content items.

### Methods

- **close** — `close() => Promise<TransitionEvent | void>` — Close the submenu programmatically.
Returns a promise that resolves when the close animation completes.

### Dependencies

- `popout`

<!--
Source: https://nordhealth.design/raw/components/dropdown-submenu.md
-->
