# nord-drawer

> Drawer is used to display context-sensitive actions and  information.
> Drawer doesn’t block users from completing their task, like a modal would.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use for displaying contextual actions or information. For example, when clicking on a table row.
- Use when you don’t want to block users from completing their task in the main view of an application.
- Always include a header that summarizes the actions and information in the drawer.
- Should be closeable through actions like “Done” and “Close”.

> **Don't:** - Don’t put cards inside the drawer. Consider using the [divider](/components/divider/) component to break up sections instead.
- Don’t reset the drawer’s state when closed if used for settings or filters. Settings should persist.
- Don’t open from within another drawer. Only one drawer can be open at a time.
- Don’t use for presenting a small amount of content or an actions menu, use the [popout](/components/popout/) or [dropdown](/components/dropdown/) component instead.

---

## Additional considerations

- You can customize the width of the component using `--n-layout-drawer-inline-size` CSS Custom Property that is offered on [Layout component](/components/layout/).

## Examples

### Basic

```html
<nord-layout>
      <nord-button id="toggle">Toggle drawer</nord-button>
      <nord-drawer slot="drawer">
        <nord-header slot="header">
          <h3 class="n-typescale-l n-truncate">Drawer header</h3>
          <nord-button slot="end" id="close" variant="plain" aria-describedby="basic-close-sidebar" size="s" square>
            <nord-icon name="interface-close" size="s"></nord-icon>
          </nord-button>
          <nord-tooltip id="basic-close-sidebar">Close</nord-tooltip>
        </nord-header>

        <div class="n-typeset">
          <p>Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.</p>
        </div>
      </nord-drawer>
    </nord-layout>
```

### Composed

```html
<nord-layout>
      <nord-button id="toggle">Toggle drawer</nord-button>
      <nord-drawer slot="drawer">
        <nord-drawer-header>
          <h3 class="n-typescale-l n-truncate">Drawer header</h3>
          <nord-drawer-close></nord-drawer-close>
        </nord-drawer-header>

        <nord-drawer-body class="n-typeset">
          <p>Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.</p>
        </nord-drawer-body>

        <nord-drawer-footer>
          <nord-button-group variant="spaced">
            <nord-drawer-close>
              <nord-button>Cancel</nord-button>
            </nord-drawer-close>
            <nord-button variant="primary">Done</nord-button>
          </nord-button-group>
        </nord-drawer-footer>
      </nord-drawer>
    </nord-layout>
```

### Without Padding

```html
<nord-layout>
      <nord-button id="toggle">Toggle drawer</nord-button>
      <nord-drawer slot="drawer" padding="none">
        <nord-header slot="header">
          <h3 class="n-typescale-l n-truncate">Drawer header</h3>
          <nord-button slot="end" id="close" variant="plain" aria-describedby="without-padding-close-sidebar" size="s" square>
            <nord-icon name="interface-close" size="s"></nord-icon>
          </nord-button>
          <nord-tooltip id="without-padding-close-sidebar">Close</nord-tooltip>
        </nord-header>

        <div class="n-typeset n-padding-l">
          <p>With <code>padding="none"</code>, the default slot has no padding, so you control the spacing of its content.</p>
        </div>
      </nord-drawer>
    </nord-layout>
```

### Complex

```html
<nord-layout>
      <nord-button id="toggle">Toggle drawer</nord-button>

      <nord-drawer slot="drawer">
        <nord-header slot="header">
          <h3 class="n-typescale-l n-truncate">50,00&thinsp;€</h3>

          <nord-button-group slot="end" variant="spaced">
            <nord-button variant="plain" aria-describedby="complex-open-in-new-window" size="s" square>
              <nord-icon name="interface-new-window" size="s"></nord-icon>
            </nord-button>

            <nord-button id="close" variant="plain" aria-describedby="complex-close-sidebar" size="s" square>
              <nord-icon name="interface-close" size="s"></nord-icon>
            </nord-button>
          </nord-button-group>

          <nord-tooltip id="complex-open-in-new-window">Open in new window</nord-tooltip>
          <nord-tooltip id="complex-close-sidebar">Close</nord-tooltip>
        </nord-header>

        <dl class="n-dl">
          <dt>Status</dt>
          <dd><nord-badge variant="success">Success</nord-badge></dd>
          <dt>Date</dt>
          <dd>Value 2</dd>
          <dt>Amount</dt>
          <dd>50,00&thinsp;€</dd>
          <dt>Payment fee</dt>
          <dd>1,75&thinsp;</dd>
          <dt>Method</dt>
          <dd>Card</dd>
          <dt>Identifier</dt>
          <dd>PAY38DL19710O</dd>
        </dl>

        <nord-divider class="n-margin-b-xl"></nord-divider>

        <p class="n-margin-be-l">
          Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.
        </p>
      </nord-drawer>
    </nord-layout>
```

### With Header And Footer

```html
<nord-layout>
      <nord-button id="toggle">Toggle drawer</nord-button>
      <nord-drawer slot="drawer">
        <nord-header slot="header">
          <h3 class="n-typescale-l n-truncate">Drawer header</h3>

          <nord-button-group slot="end" variant="spaced">
            <nord-button variant="plain" aria-describedby="with-header-and-footer-open-in-new-window" size="s" square>
              <nord-icon name="interface-new-window" size="s"></nord-icon>
            </nord-button>

            <nord-button id="close" variant="plain" aria-describedby="with-header-and-footer-close-sidebar" size="s" square>
              <nord-icon name="interface-close" size="s"></nord-icon>
            </nord-button>
          </nord-button-group>

          <nord-tooltip id="with-header-and-footer-open-in-new-window">Open in new window</nord-tooltip>
          <nord-tooltip id="with-header-and-footer-close-sidebar">Close</nord-tooltip>
        </nord-header>

        <div class="n-typeset">
          <p>Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.</p>
          <p>Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.</p>
          <p>Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.</p>
          <p>Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.</p>
          <p>Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.</p>
          <p>Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.</p>
          <p>Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.</p>
          <p>Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.</p>
          <p>Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit.</p>
        </div>

        <nord-button-group slot="footer" variant="spaced">
          <nord-button>Cancel</nord-button>
          <nord-button variant="primary">Done</nord-button>
        </nord-button-group>
      </nord-drawer>
    </nord-layout>
```

## API Reference

### Properties

- **padding** (`'l' | 'm' | 's' | 'none'`, default: `'l'`) — Controls the padding of the drawer component.

### Slots

- **header** — Optional slot that holds a header for the drawer.
- **(default)** — Default slot.
- **footer** — Optional slot that holds footer content for the drawer.

### CSS Custom Properties

- `--n-drawer-padding` (default: `var(--n-space-l)`) — Controls the padding around the main area (the default slot), using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-drawer-background-color` (default: `var(--n-color-surface)`) — Controls the background color of the drawer.
- `--n-drawer-border-color` (default: `var(--n-color-border)`) — Controls the color of the drawer's borders.
- `--n-drawer-border-radius` (default: `0`) — Controls the border radius of the drawer.
- `--n-drawer-border-width` (default: `0`) — Controls the width of the drawer's borders on every edge. The inline-start edge defaults to <code>1px</code> to separate the drawer from adjacent content; set this to <code>0</code> to remove all borders.
- `--n-drawer-border-inline-start-width` (default: `1px`) — Controls the width of the drawer's inline-start border. Falls back to <code>--n-drawer-border-width</code>, then <code>1px</code>.
- `--n-drawer-border-inline-end-width` (default: `var(--n-drawer-border-width)`) — Controls the width of the drawer's inline-end border.
- `--n-drawer-border-block-start-width` (default: `var(--n-drawer-border-width)`) — Controls the width of the drawer's block-start border.
- `--n-drawer-border-block-end-width` (default: `var(--n-drawer-border-width)`) — Controls the width of the drawer's block-end border.

### Dependencies

- `footer`

<!--
Source: https://nordhealth.design/raw/components/drawer.md
-->
