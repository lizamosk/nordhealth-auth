# nord-tooltip

> Tooltips are floating containers for displaying additional information
> for the currently focused element. A tooltip can be useful when you want
> to e.g. give a hint about an existing Command Menu shortcut.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use a tooltip if an interactive element requires more explanation.
- Use a tooltip to provide additional information, such as UI shortcuts.
- Use the `label` attribute on icons used for shortcuts for accessibility.
- Use clear and accurate phrasing.
- Be consistent with positioning of tooltips in the user interface.

> **Don't:** - Don’t use interactive elements such as links or buttons inside a tooltip.
- Don’t rely on tooltips when you have room to provide more explanation.
- Don’t depend on tooltips for vital information.

---

## Content guidelines

Tooltips should be clear and informative, but not imperative to using the interface they refer to. They should not contain interactive elements such as buttons or links.

> **Do:** Export – Export data as a spreadsheet

> **Don't:** Export – Export data as a CSV, more information on CSVs

Tooltips should provide useful information and not repeat information that is already present.

> **Do:** Export – Export data as a spreadsheet

> **Don't:** Export – Export data

When writing tooltips, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Export data as a spreadsheet

> **Don't:** Export Data As a Spreadsheet

Use tooltips sparingly. If your UI is requiring a lot of tooltips, consider revising the interface to provide better explanations and better labelling.

---

## Additional considerations

- Always provide a tooltip for icon-only buttons or a button with an associated keyboard shortcut.
- Don’t use tooltip to communicate critical information, including errors.
- Use sparingly. If you’re building something that requires a lot of tooltips, take a step back and work on clarifying the design and the language used instead.

## Dismissing when another overlay opens

A visible tooltip hides automatically when a `nord-modal` opens, since it too occupies the browser top layer. This is driven by the public `nord-dismiss-overlays` event — see [Modal → Dismissing other overlays](/components/modal/#dismissing-other-overlays).

## Examples

### Basic

```html
<nord-stack align-items="center" class="n:my-xl n:mx-auto">
      <nord-button aria-describedby="basic-tooltip">View tooltip</nord-button>
    </nord-stack>

    <nord-tooltip id="basic-tooltip">I'm a tooltip</nord-tooltip>
```

### Tooltip Bottom

```html
<nord-stack align-items="center" class="n:my-xl n:mx-auto">
      <nord-button aria-describedby="tooltip-bottom-tooltip">View tooltip</nord-button>
    </nord-stack>

    <nord-tooltip id="tooltip-bottom-tooltip" position="block-end">I'm a tooltip</nord-tooltip>
```

### Tooltip Left

```html
<nord-stack align-items="center" class="n:my-xl n:mx-auto">
      <nord-button aria-describedby="tooltip-left-tooltip">View tooltip</nord-button>
    </nord-stack>

    <nord-tooltip id="tooltip-left-tooltip" position="inline-start">I'm a tooltip</nord-tooltip>
```

### Tooltip Multiple Triggers

```html
<nord-table density="condensed">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="n-table-ellipsis">
              Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
              adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
              consectetuer adipiscing
            </td>
            <td>
              <nord-button size="s" aria-describedby="tooltip-multiple-triggers-tooltip">Edit</nord-button>
            </td>
          </tr>
          <tr>
            <td class="n-table-ellipsis">
              Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
              adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
              consectetuer adipiscing
            </td>
            <td>
              <nord-button size="s" aria-describedby="tooltip-multiple-triggers-tooltip">Edit</nord-button>
            </td>
          </tr>
          <tr>
            <td class="n-table-ellipsis">
              Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
              adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
              consectetuer adipiscing
            </td>
            <td>
              <nord-button size="s" aria-describedby="tooltip-multiple-triggers-tooltip">Edit</nord-button>
            </td>
          </tr>
          <tr>
            <td class="n-table-ellipsis">
              Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
              adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
              consectetuer adipiscing
            </td>
            <td>
              <nord-button size="s" aria-describedby="tooltip-multiple-triggers-tooltip">Edit</nord-button>
            </td>
          </tr>
          <tr>
            <td class="n-table-ellipsis">
              Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
              adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
              consectetuer adipiscing
            </td>
            <td>
              <nord-button size="s" aria-describedby="tooltip-multiple-triggers-tooltip">Edit</nord-button>
            </td>
          </tr>
          <tr>
            <td class="n-table-ellipsis">
              Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
              adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
              consectetuer adipiscing
            </td>
            <td>
              <nord-button size="s" aria-describedby="tooltip-multiple-triggers-tooltip">Edit</nord-button>
            </td>
          </tr>
        </tbody>
      </table>
    </nord-table>

    <nord-tooltip id="tooltip-multiple-triggers-tooltip">Edit this row</nord-tooltip>
```

### Tooltip Right

```html
<nord-stack align-items="center" class="n:my-xl n:mx-auto">
      <nord-button aria-describedby="tooltip-right-tooltip">View tooltip</nord-button>
    </nord-stack>

    <nord-tooltip id="tooltip-right-tooltip" position="inline-end">I'm a tooltip</nord-tooltip>
```

### Tooltip With Custom Size

```html
<nord-stack align-items="center" class="n:my-xxl n:mx-auto">
      <nord-button aria-describedby="tooltip-with-custom-size-tooltip">View tooltip</nord-button>
    </nord-stack>

    <nord-tooltip id="tooltip-with-custom-size-tooltip" class="n:[--n-tooltip-max-size:200px]">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </nord-tooltip>
```

### Tooltip With Offset

```html
<nord-stack
      direction="horizontal"
      gap="l"
      align-items="center"
      justify-content="center"
      style="margin: var(--n-space-xl) auto"
    >
      <nord-button aria-describedby="tooltip-side-offset">side-offset</nord-button>
      <nord-button aria-describedby="tooltip-align-offset">align-offset</nord-button>
    </nord-stack>

    <nord-tooltip id="tooltip-side-offset" position="block-end" side-offset="20">Larger gap from the target</nord-tooltip>
    <nord-tooltip id="tooltip-align-offset" position="block-end" align-offset="20">Skidded along the edge</nord-tooltip>
```

### Tooltip With Shortcut

```html
<nord-stack align-items="center" class="n:my-xl n:mx-auto">
      <nord-button aria-describedby="tooltip-with-shortcut-tooltip">View tooltip</nord-button>
    </nord-stack>

    <nord-tooltip id="tooltip-with-shortcut-tooltip">
      I'm a tooltip
      <nord-icon slot="shortcut" name="keyboard-option" label="Option key"></nord-icon>
      <span slot="shortcut">S</span>
    </nord-tooltip>
```

### Tooltip In Container Query

```html
<div
      class="n:[container-type:inline-size] n:overflow-hidden n:inline-[280px] n:p-l n:my-xl n:mx-auto n:border n:border-[var(--n-color-border)] n:rounded"
    >
      <nord-stack align-items="center">
        <nord-button aria-describedby="tooltip-in-container-query-tooltip">View tooltip</nord-button>
      </nord-stack>
    </div>

    <nord-tooltip id="tooltip-in-container-query-tooltip" position="block-end">I'm a tooltip</nord-tooltip>
```

### Tooltip Positions

```html
<nord-stack direction="horizontal" gap="xl" justify-content="center" class="n:my-xxl n:mx-auto">
      <nord-button aria-describedby="pos-top">Above</nord-button>
      <nord-button aria-describedby="pos-bottom">Below</nord-button>
      <nord-button aria-describedby="pos-start">Start</nord-button>
      <nord-button aria-describedby="pos-end">End</nord-button>
    </nord-stack>

    <nord-tooltip id="pos-top" position="block-start">Above the trigger</nord-tooltip>
    <nord-tooltip id="pos-bottom" position="block-end">Below the trigger</nord-tooltip>
    <nord-tooltip id="pos-start" position="inline-start">Before the trigger</nord-tooltip>
    <nord-tooltip id="pos-end" position="inline-end">After the trigger</nord-tooltip>
```

### Tooltip Shared Triggers

```html
<nord-stack direction="horizontal" gap="m" justify-content="center" class="n:my-xl n:mx-auto">
      <nord-button size="s" aria-describedby="shared-tooltip">Edit</nord-button>
      <nord-button size="s" aria-describedby="shared-tooltip">Edit</nord-button>
      <nord-button size="s" aria-describedby="shared-tooltip">Edit</nord-button>
    </nord-stack>

    <nord-tooltip id="shared-tooltip">Edit this row</nord-tooltip>
```

## API Reference

### Properties

- **position** (`'block-end' | 'block-start' | 'inline-start' | 'inline-end'`, default: `'block-start'`) — Control the position of the tooltip component.
When set to "none", the tooltip will be shown above
but accommodate for browser boundaries.
- **role** (`string`, default: `'tooltip'`) — The tooltip role, set on the component by default.
- **id** (`string`, default: `''`) — The id for the active element to reference via aria-describedby.
- **delay** (`number`, default: `500`) — The delay in milliseconds before the tooltip is opened.
- **open** (`boolean`, default: `false`) — Indicates whether the tooltip is currently open.
- **side-offset** (`number`, default: `8`) — Distance in pixels from the trigger along the main axis — the gap between
the tooltip and the side it opens against. Fed into Floating UI's <code>offset</code>
middleware as <code>mainAxis</code>. Defaults to <code>8</code>.
- **align-offset** (`number`, default: `0`) — Offset in pixels along the alignment axis — skids the tooltip along the
trigger's edge. Fed into Floating UI's <code>offset</code> middleware as
<code>alignmentAxis</code>. Defaults to <code>0</code>.

### Slots

- **(default)** — The tooltip content
- **shortcut** — Optional slot that holds shortcut keys to access the subject

### CSS Custom Properties

- `--n-tooltip-max-size` (default: `50ch`) — Controls the maximum inline size, or width, of the tooltip.

<!--
Source: https://nordhealth.design/raw/components/tooltip.md
-->
