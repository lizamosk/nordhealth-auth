# nord-aside

> Container for the right-side rail + drawer pattern in the app shell.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use as the right-side rail + drawer container in the app shell.
- Mix `<nord-aside-trigger>`s with plain `<nord-button>`s or `<a>`s in the `rail` slot — triggers toggle drawers, plain buttons/links are for navigation-only items.
- Place one or more `<nord-aside-drawer>` panels in the default slot; the aside shows the one whose `id` matches `active-drawer`.
- Let consumers drive the open state via the `active-drawer` attribute and the `active-drawer-change` event.

> **Don't:** - Don’t put more than one `<nord-aside>` on the page — it owns app-shell-level state.
- Don’t open multiple drawers at once. The aside is single-active by design.
- Don’t wrap navigation-only rail items in `<nord-aside-trigger>` — use a plain `<nord-button>` or `<a>` instead.

---

## Additional considerations

- Owns the single-active drawer state and the inline-start resize handle. Drag-for-resize is independent of `handle-click`, which only controls the click (no-drag) behaviour: `toggle`, `close`, or `none`.
- Width and gap of the rail column are configurable via `--n-aside-rail-width` and `--n-aside-rail-gap`.
- Emits `active-drawer-change` with `{ activeDrawer, previousDrawer }` and `drawer-resize` with `{ drawerId, width }`.

## Examples

### Multiple Drawers

```html
<nord-layout>
      <nord-stack gap="l" class="n-padding-l">
        <h2 class="n-typescale-l">Main content</h2>
        <p>Click <strong>Toggle fullscreen</strong> to expand the chat drawer into an overlay sized to the layout minus its header.</p>
        <nord-button id="toggle-fs" variant="primary">Toggle fullscreen</nord-button>
      </nord-stack>
      <nord-aside
        slot="drawer"
        active-drawer="chat"
      >
        <nord-aside-trigger slot="rail" drawer="chat" icon="interface-chat" label="Chat"></nord-aside-trigger>
        <nord-aside-trigger slot="rail" drawer="notes" icon="interface-edit" label="Notes"></nord-aside-trigger>

        <nord-aside-drawer id="chat" default-width="380">
          ${dummyDrawer('Chat (toggle fullscreen to overlay)')}
        </nord-aside-drawer>
        <nord-aside-drawer id="notes" default-width="420">
          ${dummyDrawer('Notes')}
        </nord-aside-drawer>
      </nord-aside>
    </nord-layout>
```

### Advanced

```html
<nord-layout
        ${ref(collapseNav)}
        sticky-footer
        collapse-mode="rail"
      >
        <nord-header slot="header">
          <h1 class="n-typescale-l">Kitchen sink</h1>

          <nord-button-group slot="end" variant="spaced">
            <nord-button>Export</nord-button>
            <nord-button variant="primary">
              <nord-icon slot="start" name="interface-add-small"></nord-icon>
              Create new
            </nord-button>
          </nord-button-group>
        </nord-header>

        <nord-navigation slot="nav" sticky-footer>
          <nord-nav-item icon="interface-grid" href="#" active>Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-search" href="#">Search</nord-nav-item>
          <nord-nav-item icon="interface-calendar" href="#">Schedule</nord-nav-item>
          <nord-nav-item icon="user-single" href="#">Clients</nord-nav-item>
        </nord-navigation>

        <nord-stack gap="l">
          <p>Left nav (rail), right aside (multiple drawers with resize), tooltip-divider on the handle, fullscreen toggle on the chat drawer.</p>
          <p>Resize the viewport below 768px to see the rail switch to a bottom bar (above the sticky footer), drawers become floating overlays, and the fullscreen toggle become a visual no-op.</p>
        </nord-stack>

        <nord-footer slot="footer">
          <nord-button>Print</nord-button>
        </nord-footer>

        <nord-aside
          slot="drawer"
          handle-click="toggle"
          active-drawer="chat"
        >
          <nord-aside-trigger slot="rail" drawer="chat" icon="interface-chat" label="Chat"></nord-aside-trigger>
          <nord-aside-trigger slot="rail" drawer="notes" icon="interface-edit" label="Notes"></nord-aside-trigger>
          <nord-aside-trigger slot="rail" drawer="info" icon="interface-info" label="Info"></nord-aside-trigger>

          <nord-aside-drawer id="chat" default-width="380" min-width="320">
            <nord-drawer>
              <nord-header slot="header">
                <h3 class="n-typescale-l">Chat</h3>
                <nord-button
                  slot="end"
                  variant="plain"
                  square
                  size="s"
                  aria-label="Close"
                  onclick="this.closest('nord-aside').setAttribute('active-drawer', '')"
                >
                  <nord-icon name="interface-close-small" size="s"></nord-icon>
                </nord-button>
              </nord-header>
              <nord-stack gap="m">
                <p class="n-color-text-weak">
                  This is the body of the drawer. Place whatever content here.
                </p>
                <p>This drawer is resizable from 320px to 700px and supports fullscreen.</p>
                <nord-button id="fs-toggle" variant="primary">Toggle fullscreen</nord-button>
              </nord-stack>
            </nord-drawer>
          </nord-aside-drawer>
          <nord-aside-drawer id="notes" default-width="420">
            ${dummyDrawer('Notes')}
          </nord-aside-drawer>
          <nord-aside-drawer id="info" default-width="320" min-width="320" max-width="320">
            ${dummyDrawer('Pinned info (320 px)')}
          </nord-aside-drawer>
        </nord-aside>
      </nord-layout>
```

## API Reference

### Properties

- **active-drawer** (`string`, default: `''`) — The id of the currently-active <code>&lt;nord-aside-drawer&gt;</code>. Empty string
means no drawer is open. Setting to an unknown / disabled id is a
silent no-op.
- **rail-width** (`number`, default: `48`) — Width of the rail column in px.
- **rail-gap** (`number`, default: `0`) — Gap between rail and the active drawer panel in px.
- **handle-click** (`AsideHandleClick`, default: `'toggle'`) — Controls what clicking (no-drag) the resize handle does.
Drag-for-resize is independent of this attribute.

### Events

- **active-drawer-change** (`AsideActiveDrawerChangeEvent`) — Dispatched when <code>active-drawer</code> changes, with <code>activeDrawer</code> / <code>previousDrawer</code> properties. Fires on every transition including open, switch, and close.
- **drawer-open** (`AsideDrawerOpenEvent`) — Dispatched when transitioning from no active drawer to an active one (i.e. a drawer opened from the closed state). Has an <code>activeDrawer</code> property.
- **drawer-close** (`AsideDrawerCloseEvent`) — Dispatched when all drawers close (active-drawer went from a non-empty value to empty). Has a <code>previousDrawer</code> property.
- **drawer-resize** (`AsideDrawerResizeEvent`) — Dispatched when the active drawer's width changes, with <code>drawerId</code> (the specific drawer that changed) and <code>width</code> properties. Unlike active-drawer-change, this names a single drawer by id rather than describing a transition between drawers.
- **handle-mode-change** (`AsideHandleModeChangeEvent`) — Dispatched when the resize handle's mode changes (<code>col-resize</code> / <code>pointer</code> / <code>default</code>). Mirrors the current value to the host's <code>data-handle-mode</code> attribute so consumers can also read it synchronously. Has <code>mode</code> / <code>previous</code> properties.

### Slots

- **rail** — Free-form content placed in the rail column.
- **tooltip-divider** — Tooltip anchored to the resize handle on hover.
- **(default)** — Default slot for <code>&lt;nord-aside-drawer&gt;</code> panels.

### CSS Custom Properties

- `--n-aside-rail-width` (default: `48px`) — Controls the inline-size of the rail column.
- `--n-aside-rail-gap` (default: `var(--n-space-s)`) — Controls the gap between the rail and the active drawer.
- `--n-aside-rail-background-color` (default: `var(--n-color-surface)`) — Controls the background color of the rail column.
- `--n-aside-background-color` (default: `var(--n-color-background)`) — Controls the background color of the aside container (matches the layout's main area by default).
- `--n-aside-drawers-margin-inline-start` (default: `0`) — Inline-start margin of the drawers wrapper — creates a gap between the layout's main area and the active drawer card. The resize handle follows this margin so it stays at the drawer's edge.
- `--n-aside-rail-narrow-block-size` (default: `56px`) — Block-size of the rail when it renders as a bottom bar at <768px.
- `--n-aside-rail-narrow-padding-inline` (default: `var(--n-space-m)`) — Inline padding inside the bottom rail at <768px.
- `--n-aside-rail-narrow-padding-block` (default: `var(--n-space-s)`) — Block padding inside the bottom rail at <768px.
- `--n-aside-rail-narrow-border-block-start-width` (default: `1px`) — Top border width of the bottom rail at <768px. Set to 0 to remove.
- `--n-aside-rail-narrow-border-color` (default: `var(--n-aside-rail-border-color)`) — Top border color of the bottom rail at <768px.
- `--n-aside-drawer-floating-inset-block-start` (default: `var(--n-layout-header-size, 60px)`) — Distance from the viewport top to the floating drawer at <768px (clears the layout header).
- `--n-aside-drawer-floating-inset-inline` (default: `0px`) — Inline gap between the floating drawer and each viewport edge at <768px. Default 0 = full viewport width.
- `--n-aside-drawer-slide-duration` (default: `300ms`) — Duration of the slide-up animation when a drawer opens at <768px.
- `--n-aside-drawer-slide-easing` (default: `cubic-bezier(0.4, 0, 0.2, 1)`) — Easing of the slide-up animation when a drawer opens at <768px.
- `--n-aside-drawer-floating-inset-block-end` (default: `calc(rail-size - bottom-offset)`) — Distance from the viewport bottom to the floating drawer at <768px. By default the drawer's bottom edge meets the rail's top edge.
- `--n-aside-drawer-floating-bottom-offset` (default: `0`) — Subtracts from the floating drawer's <code>inset-block-end</code> to let the drawer extend past the rail's top edge (visual overlap). Default 0.
- `--n-aside-backdrop-background` (default: `rgb(0 0 0 / 0.4)`) — Background color of the backdrop behind the floating drawer at <768px.
- `--n-aside-z-backdrop` (default: `calc(var(--n-index-top-bar) + 2)`) — z-index of the backdrop at <768px (above the sticky footer so it dims the footer too).
- `--n-aside-z-drawer-floating` (default: `calc(var(--n-index-top-bar) + 3)`) — z-index of the floating drawer overlay at <768px (above the backdrop).
- `--n-aside-z-rail-narrow` (default: `calc(var(--n-index-top-bar) + 4)`) — z-index of the bottom rail at <768px (above the drawer so it remains tappable).

### Dependencies

- `tooltip`

<!--
Source: https://nordhealth.design/raw/components/aside.md
-->
