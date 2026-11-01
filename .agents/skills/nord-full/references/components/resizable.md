# nord-resizable

> Resizable coordinates an alternating sequence of panels and handles using
> immutable percentage layouts and native pointer/keyboard interactions.

## Usage

This section includes guidelines for designers and developers about using this component in different contexts.

> **Do:** - Use Resizable when two or more persistent regions benefit from user-controlled space.
- Give every panel a stable `panel-id` and realistic percentage constraints.
- Place panels and handles as a direct alternating sequence.
- Keep important controls usable at every permitted size and provide a meaningful handle `label` when “Resize panels” is too general.
- Echo `event.layout.map(({ size }) => size)` back to the `layout` property when using controlled state.

> **Don't:** - Don’t use Resizable for disclosure that should be a Drawer, Collapsible, or responsive layout change.
- Don’t put panels or handles inside wrapper elements; registration is intentionally direct-child only.
- Don’t add mouse-only drag instructions. Every enabled handle implements the keyboard window-splitter pattern.
- Don’t assume `nord-resize` committed a controlled layout until the consumer supplies the next `layout` value.

## Composition and sizing

Panel sizes are normalized percentages of the usable group axis after fixed handle tracks are excluded. `min-size`, `max-size`, `default-size`, and `collapsed-size` are percentages. Constraints are applied deterministically and the last valid layout is retained if a dynamic composition becomes unsatisfiable.

Set `--n-resizable-inline-size` and `--n-resizable-block-size` when the surrounding layout does not already give the group definite dimensions. Panel content remains consumer-owned light DOM and is never stamped, moved, or recreated.

## Controlled state and events

Omit `layout` for uncontrolled state, optionally supplying `defaultLayout` through JavaScript. Setting the `layout` property enables controlled state: pointer, keyboard, and programmatic interactions emit a proposed immutable layout while rendered sizes wait for the next property value.

`nord-resize-start` and `nord-resize` are cancelable. `nord-resize-end` pairs every accepted pointer lifecycle, including cancellation, capture loss, window blur, disabled state, or disconnect. Resize event records contain stable panel IDs, percentage sizes, and a `source` of `pointer`, `keyboard`, or `programmatic`.

## Accessibility

Handles expose `role="separator"`, the correct ARIA orientation, controlled panel IDs, and feasible current/minimum/maximum values. The rendered `aria-valuenow` is rounded to at most two decimals for concise announcements while canonical layouts and resize events keep their six-decimal precision. Arrow keys resize by `keyboard-step`; Shift uses `large-keyboard-step`; Home and End move the primary panel to its nearest feasible boundary; Enter toggles a collapsible primary panel.

The visible divider remains minimal while a `calc(var(--n-space-xl) + var(--n-space-s))` pseudo-element supplies an at-least-44 CSS pixel pointer target. Focus, hover, and active states use Nord semantic tokens, and horizontal pointer/keyboard behavior follows RTL direction. Set `dir="rtl"` on the group or an ancestor; panel order and horizontal pointer/Arrow intent mirror while vertical interaction stays direction-independent. Disabled handles are removed from sequential focus and expose disabled semantics.

## Examples

### Overview

```html
<nord-resizable
      style="--n-resizable-block-size: 20rem; --n-resizable-inline-size: min(100%, 52rem)"
      .defaultLayout=${[25, 50, 25]}
    >
      <nord-resizable-panel panel-id="conversation" min-size="15" max-size="45">
        ${panelContent(
          'Conversation list',
          'Select a conversation to open it.',
        )}
      </nord-resizable-panel>
      <nord-resizable-handle></nord-resizable-handle>
      <nord-resizable-panel panel-id="messages" min-size="30">
        ${panelContent('Messages', 'The main conversation workspace.')}
      </nord-resizable-panel>
      <nord-resizable-handle></nord-resizable-handle>
      <nord-resizable-panel panel-id="details" min-size="15" max-size="40">
        ${panelContent(
          'Details',
          'A third persistent region completes the source overview.',
        )}
      </nord-resizable-panel>
    </nord-resizable>
```

### Vertical

```html
<nord-resizable
      orientation="vertical"
      style="--n-resizable-block-size: 28rem; --n-resizable-inline-size: min(100%, 40rem)"
      .defaultLayout=${[60, 40]}
    >
      <nord-resizable-panel panel-id="preview" min-size="30">
        ${panelContent(
          'Preview',
          'The same percentage model works on the block axis.',
        )}
      </nord-resizable-panel>
      <nord-resizable-handle with-handle></nord-resizable-handle>
      <nord-resizable-panel panel-id="details" min-size="20">
        ${panelContent(
          'Details',
          'Arrow Up and Arrow Down resize this layout.',
        )}
      </nord-resizable-panel>
    </nord-resizable>
```

### Handle

```html
<nord-resizable
      style="--n-resizable-block-size: 20rem; --n-resizable-inline-size: min(100%, 52rem)"
      .defaultLayout=${[30, 70]}
    >
      <nord-resizable-panel panel-id="sidebar" min-size="20" max-size="50">
        ${panelContent(
          'Sidebar',
          'The visible grip makes the separator easier to discover.',
        )}
      </nord-resizable-panel>
      <nord-resizable-handle with-handle></nord-resizable-handle>
      <nord-resizable-panel panel-id="content" min-size="30">
        ${panelContent(
          'Content',
          'The grip does not change the thin layout track or pointer target.',
        )}
      </nord-resizable-panel>
    </nord-resizable>
```

### R T L

```html
<nord-resizable
      lang="ar"
      style="--n-resizable-block-size: 20rem; --n-resizable-inline-size: min(100%, 52rem)"
      .defaultLayout=${[33, 34, 33]}
    >
      <nord-resizable-panel panel-id="one" min-size="20">
        ${panelContent('واحد', 'اللوحة الأولى')}
      </nord-resizable-panel>
      <nord-resizable-handle label="تغيير حجم اللوحات"></nord-resizable-handle>
      <nord-resizable-panel panel-id="two" min-size="20">
        ${panelContent('اثنان', 'اللوحة الثانية')}
      </nord-resizable-panel>
      <nord-resizable-handle label="تغيير حجم اللوحات"></nord-resizable-handle>
      <nord-resizable-panel panel-id="three" min-size="20">
        ${panelContent('ثلاثة', 'اللوحة الثالثة')}
      </nord-resizable-panel>
    </nord-resizable>
```

### Nested

```html
<nord-resizable
      style="--n-resizable-block-size: 24rem; --n-resizable-inline-size: min(100%, 56rem)"
      .defaultLayout=${[30, 70]}
    >
      <nord-resizable-panel panel-id="folders" min-size="20">
        ${panelContent('Folders', 'The outer primary panel.')}
      </nord-resizable-panel>
      <nord-resizable-handle with-handle></nord-resizable-handle>
      <nord-resizable-panel panel-id="workspace" min-size="40">
        <nord-resizable orientation="vertical" .defaultLayout=${[65, 35]}>
          <nord-resizable-panel panel-id="thread" min-size="30">
            ${panelContent(
              'Thread',
              'The nested group owns an independent layout.',
            )}
          </nord-resizable-panel>
          <nord-resizable-handle></nord-resizable-handle>
          <nord-resizable-panel panel-id="composer" min-size="20">
            ${panelContent(
              'Composer',
              'Moving this separator does not resize folders.',
            )}
          </nord-resizable-panel>
        </nord-resizable>
      </nord-resizable-panel>
    </nord-resizable>
```

### Constrained

```html
<nord-resizable
      style="--n-resizable-block-size: 18rem; --n-resizable-inline-size: min(100%, 56rem)"
      .defaultLayout=${[25, 45, 30]}
    >
      <nord-resizable-panel panel-id="one" min-size="15" max-size="35">
        ${panelContent('Queue', '15–35%')}
      </nord-resizable-panel>
      <nord-resizable-handle with-handle></nord-resizable-handle>
      <nord-resizable-panel panel-id="two" min-size="30" max-size="60">
        ${panelContent('Conversation', '30–60%')}
      </nord-resizable-panel>
      <nord-resizable-handle with-handle></nord-resizable-handle>
      <nord-resizable-panel panel-id="three" min-size="20" max-size="40">
        ${panelContent('Details', '20–40%')}
      </nord-resizable-panel>
    </nord-resizable>
```

### Collapsible

```html
<nord-resizable
      style="--n-resizable-block-size: 18rem; --n-resizable-inline-size: min(100%, 48rem)"
      .defaultLayout=${[30, 70]}
    >
      <nord-resizable-panel
        panel-id="sidebar"
        min-size="20"
        max-size="60"
        collapsed-size="0"
        collapsible
      >
        ${panelContent(
          'Sidebar',
          'Press Enter on the separator to collapse or restore.',
        )}
      </nord-resizable-panel>
      <nord-resizable-handle with-handle></nord-resizable-handle>
      <nord-resizable-panel panel-id="content" min-size="30">
        ${panelContent(
          'Content',
          'Home also moves the sidebar to its collapsed size.',
        )}
      </nord-resizable-panel>
    </nord-resizable>
```

### Keyboard Only

```html
<div style="inline-size: min(100%, 48rem)">
      <p>
        Focus the separator, then use Arrow keys, Shift + Arrow, Home, End, or
        Enter.
      </p>
      <nord-resizable
        style="--n-resizable-block-size: 16rem"
        .defaultLayout=${[40, 60]}
      >
        <nord-resizable-panel panel-id="primary" min-size="20" collapsible>
          ${panelContent(
            'Primary',
            'The controlled pane described by separator values.',
          )}
        </nord-resizable-panel>
        <nord-resizable-handle
          label="Resize primary panel"
          with-handle
        ></nord-resizable-handle>
        <nord-resizable-panel panel-id="secondary" min-size="20">
          ${panelContent(
            'Secondary',
            'Keyboard behavior follows orientation and direction.',
          )}
        </nord-resizable-panel>
      </nord-resizable>
    </div>
```

### Controlled

```html
<div style="inline-size: min(100%, 48rem)">
      <output id="controlled-resizable-output"
        >navigation: 40.0% · content: 60.0%</output
      >
      <nord-resizable
        id="controlled-resizable"
        style="--n-resizable-block-size: 18rem; margin-block-start: var(--n-space-s)"
        .layout=${[40, 60]}
      >
        <nord-resizable-panel panel-id="navigation" min-size="20" max-size="70">
          ${panelContent(
            'Navigation',
            'The consumer owns the rendered layout property.',
          )}
        </nord-resizable-panel>
        <nord-resizable-handle with-handle></nord-resizable-handle>
        <nord-resizable-panel panel-id="content" min-size="20">
          ${panelContent(
            'Content',
            'Resize events propose immutable percentage records.',
          )}
        </nord-resizable-panel>
      </nord-resizable>
    </div>
```

## API Reference

### Properties

- **orientation** (`ResizableOrientation`, default: `'horizontal'`) — Axis along which panels resize.
- **keyboard-step** (`number`, default: `5`) — Percentage changed by an orientation-appropriate Arrow key.
- **large-keyboard-step** (`number`, default: `10`) — Percentage changed by Shift plus an orientation-appropriate Arrow key.
- **disabled** (`boolean`, default: `false`) — Disables every handle in the group.

### Events

- **nord-resize-start** (`ResizableResizeStartEvent`) — Cancelable event dispatched before a pointer drag starts.
- **nord-resize** (`ResizableResizeEvent`) — Cancelable event carrying an immutable ordered layout and interaction source.
- **nord-resize-end** (`ResizableResizeEndEvent`) — Event dispatched whenever an accepted pointer drag terminates.

### Slots

- **(default)** — Alternating Resizable Panel and Resizable Handle direct children.

### CSS Custom Properties

- `--n-resizable-inline-size` (default: `100%`) — Controls the group inline size.
- `--n-resizable-block-size` (default: `100%`) — Controls the group block size.

<!--
Source: https://nordhealth.design/raw/components/resizable.md
-->
