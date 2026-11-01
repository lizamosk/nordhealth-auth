# nord-popout

> Popouts are small overlays that open on demand. They let users access additional content and actions without cluttering the page.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Always position popout next to the button or other interface element that toggles it.
- Use a popout to contain controls or information that doesn’t need to be shown immediately.
- Use a popout to contain items that will most likely not fit into the current view.
- Use a clearly labelled button to reveal the popout.
- Use the appropriate `aria-haspopup` and `role` attributes for both the toggle button and containing items. Please refer to the [MDN documentation on both role values](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup#values) and [child role values](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup#associated_roles).

> **Don't:** - Don't hide information inside a popout that is imperative to using the current view.
- Don't obscure other controls that are important with the popout.
- Don't allow the popout to be obscured by other controls or the outer bounds of the current view.
- Don't use `always-floating` property for long lists or complex content that benefits from full-screen focus.

---

## Content guidelines

If a popout contains actions, they should be always written in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Create user

> **Don't:** Create User

Popout actions should always lead with a strong verb that encourages action. Use the `{verb}+{noun}` format except in the case of common actions like Save, Close or Cancel:

> **Do:** Edit row

> **Don't:** Editing options

Avoid unnecessary words and articles in popout actions, such as “the”, “an” or “a”:

> **Do:** Change theme

> **Don't:** Change the theme

Avoid ending popout actions in punctuation:

> **Do:** Switch user

> **Don't:** Switch user.

Avoid all caps for popout actions:

> **Do:** Rename

> **Don't:** RENAME

---

## Additional considerations

- The popout component is a containing component, only providing a way to reveal and hide controls by using a single button.
- Consider using the `alwaysFloating` property for compact interactions like simple filters or dropdown menus.

## Dismissing when another overlay opens

An open popout closes automatically when a `nord-modal` opens, so the modal is the topmost surface. This is driven by the public `nord-dismiss-overlays` event — see [Modal → Dismissing other overlays](/components/modal/#dismissing-other-overlays) for details and how your own overlays can trigger the same behaviour.

## Examples

### Always Floating

```html
<nord-stack class="n:mbe-xl" direction="horizontal" justify-content="center">
      <nord-button variant="primary" aria-controls="always-floating-popout" aria-haspopup="true">Toggle popout</nord-button>
    </nord-stack>

    <nord-popout id="always-floating-popout" position="block-end" always-floating>
      <div class="n:p-m">Popout content</div>
    </nord-popout>
```

### Basic

```html
<nord-stack class="n:mbe-xl" direction="horizontal" justify-content="center">
      <nord-button variant="primary" aria-controls="basic-popout" aria-haspopup="true">Toggle popout</nord-button>
    </nord-stack>

    <nord-popout id="basic-popout" position="block-end">
      <div class="n:p-m">Popout content</div>
    </nord-popout>
```

### Controlled

```html
<nord-stack class="n:mbe-xl" direction="horizontal" justify-content="center">
      <nord-button variant="primary" id="controlled-trigger" aria-controls="controlled-popout" aria-haspopup="true" aria-expanded="false">Toggle popout</nord-button>
    </nord-stack>

    <nord-popout id="controlled-popout" controlled position="block-end">
      <div class="n:p-m">Popout content</div>
    </nord-popout>
```

### Custom Popout Filter

```html
<style>.options {
    min-inline-size: 250px;
    max-inline-size: 375px;
    max-block-size: 460px;
    overflow-y: auto;
  }

  @media (max-width: 35.9375em) {
    .options {
      max-block-size: 70vh;
      max-inline-size: none;
    }
  }

  .multi-select-indicator {
    background-color: var(--n-color-active);
    color: var(--n-color-text);
    border-radius: var(--n-border-radius-s);
    border: 1px solid var(--n-color-border-hover);
    inline-size: var(--n-space-m);
    block-size: var(--n-space-m);
    display: grid;
    place-items: center;
  }

  .multi-select-indicator:has(nord-icon) {
    background-color: var(--n-color-accent);
    color: var(--n-color-text-on-accent);
    border: 1px solid var(--n-color-accent);
  }

  nord-dropdown-item:hover {
    --n-dropdown-item-background-color: var(--n-color-active);
    --n-dropdown-item-color: var(--n-color-text);
  }</style>
    <!-- Note: this example is purely visual, it does not include interactivity and proper accessibility -->

    <nord-button-group>
      <nord-button aria-controls="filter-popout" size="s">
        <nord-icon name="interface-filter" slot="start"></nord-icon>
        Species is <span class="n:text-[var(--n-color-accent)]">Amphibian +1</span>
      </nord-button>
      <nord-button size="s" square>
        <nord-icon name="interface-close-small" size="xxs" label="Remove filter"></nord-icon>
      </nord-button>
    </nord-button-group>

    <nord-popout id="filter-popout">
      <div class="options n:p-s">
        <nord-dropdown-group heading="Species">
          <nord-dropdown-item>
            <nord-stack direction="horizontal" gap="s" align-items="center">
              <div class="multi-select-indicator">
                <nord-icon name="interface-checked-small" size="xs"></nord-icon>
              </div>
              <span>Amphibian</span>
            </nord-stack>
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-stack direction="horizontal" gap="s" align-items="center">
              <div class="multi-select-indicator"></div>
              <span>Canine</span>
            </nord-stack>
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-stack direction="horizontal" gap="s" align-items="center">
              <div class="multi-select-indicator">
                <nord-icon name="interface-checked-small" size="xs"></nord-icon>
              </div>
              <span>Feline</span>
            </nord-stack>
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-stack direction="horizontal" gap="s" align-items="center">
              <div class="multi-select-indicator"></div>
              <span>Rodents</span>
            </nord-stack>
          </nord-dropdown-item>
        </nord-dropdown-group>
      </div>

      <div class="n:p-s n:[border-block-start:1px_solid_var(--n-color-border)]">
        <nord-dropdown-item>Clear selection</nord-dropdown-item>
      </div>
    </nord-popout>
```

### Position And Alignment

```html
<style>body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30ch, max-content));
    justify-content: center;
    gap: var(--n-space-m);
  }</style>
    <nord-button type="button" aria-controls="pos-align-1" aria-haspopup="true" expand>Default</nord-button>
    <nord-popout id="pos-align-1">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-2" aria-haspopup="true" expand>align="start"</nord-button>
    <nord-popout id="pos-align-2" align="start">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-3" aria-haspopup="true" expand>align="end"</nord-button>
    <nord-popout id="pos-align-3" align="end">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-4" aria-haspopup="true" expand>position="block-end"</nord-button>
    <nord-popout id="pos-align-4" position="block-end">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-5" aria-haspopup="true" expand>position="block-start"</nord-button>
    <nord-popout id="pos-align-5" position="block-start">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-6" aria-haspopup="true" expand>position="inline-start"</nord-button>
    <nord-popout id="pos-align-6" position="inline-start">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-7" aria-haspopup="true" expand>position="inline-end"</nord-button>
    <nord-popout id="pos-align-7" position="inline-end">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-8" aria-haspopup="true" expand>
      align="start" position="block-end"
    </nord-button>
    <nord-popout id="pos-align-8" align="start" position="block-end">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-9" aria-haspopup="true" expand>
      align="start" position="block-start"
    </nord-button>
    <nord-popout id="pos-align-9" align="start" position="block-start">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-10" aria-haspopup="true" expand>
      align="start" position="inline-start"
    </nord-button>
    <nord-popout id="pos-align-10" align="start" position="inline-start">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-11" aria-haspopup="true" expand>
      align="start" position="inline-end"
    </nord-button>
    <nord-popout id="pos-align-11" align="start" position="inline-end">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-12" aria-haspopup="true" expand>
      align="end" position="block-end"
    </nord-button>
    <nord-popout id="pos-align-12" align="end" position="block-end">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-13" aria-haspopup="true" expand>
      align="end" position="block-start"
    </nord-button>
    <nord-popout id="pos-align-13" align="end" position="block-start">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-14" aria-haspopup="true" expand>
      align="end" position="inline-start"
    </nord-button>
    <nord-popout id="pos-align-14" align="end" position="inline-start">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-15" aria-haspopup="true" expand>
      align="end" position="inline-end"
    </nord-button>
    <nord-popout id="pos-align-15" align="end" position="inline-end">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-16" aria-haspopup="true" expand> position="auto" </nord-button>
    <nord-popout id="pos-align-16" position="auto">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-17" aria-haspopup="true" expand>
      align="start" position="auto"
    </nord-button>
    <nord-popout id="pos-align-17" align="start" position="auto">
      <div class="n:p-m">Example content</div>
    </nord-popout>
    <nord-button type="button" aria-controls="pos-align-18" aria-haspopup="true" expand>
      align="end" position="auto"
    </nord-button>
    <nord-popout id="pos-align-18" align="end" position="auto">
      <div class="n:p-m">Example content</div>
    </nord-popout>
```

### Position Auto

```html
<style>.popout-content {
    padding: var(--n-space-m);
    max-inline-size: 200px;
  }

  @media (max-width: 35.9375em) {
    .popout-content {
      max-inline-size: none;
    }
  }</style>
    <nord-stack direction="horizontal" justify-content="center" class="n:[margin-top:calc(var(--n-space-xxl)_*_2)]">
      <nord-button variant="primary" aria-controls="position-auto-popout" aria-haspopup="true">Toggle popout</nord-button>
    </nord-stack>

    <nord-popout id="position-auto-popout" position="auto">
      <div class="popout-content">
        Long vertical popout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tincidunt mauris. Sed
        tincidunt odio ut mattis convallis. Sed condimentum nibh ut nisi ultrices, eget fringilla nisl ullamcorper. Vivamus
        pretium magna maximus mauris congue, et convallis felis vehicula.
      </div>
    </nord-popout>
```

### Position Left

```html
<nord-stack direction="horizontal" justify-content="center" class="n:mbe-s">
      <nord-button variant="primary" aria-controls="position-left-popout" aria-haspopup="true">Toggle popout</nord-button>
    </nord-stack>

    <nord-popout id="position-left-popout" position="inline-start">
      <div class="n:p-m">Popout content</div>
    </nord-popout>
```

### Position Right

```html
<nord-stack direction="horizontal" justify-content="center" class="n:mbe-s">
      <nord-button variant="primary" aria-controls="position-right-popout" aria-haspopup="true">Toggle popout</nord-button>
    </nord-stack>

    <nord-popout id="position-right-popout" position="inline-end">
      <div class="n:p-m">Popout content</div>
    </nord-popout>
```

### Position Top

```html
<nord-stack class="n:mbs-xxl" direction="horizontal" justify-content="center">
      <nord-button variant="primary" aria-controls="position-top-popout" aria-haspopup="true">Toggle popout</nord-button>
    </nord-stack>

    <nord-popout id="position-top-popout" position="block-start">
      <div class="n:p-m">Popout content</div>
    </nord-popout>
```

### Tabs In Popout

```html
<nord-button variant="primary" aria-controls="tabs-popout" aria-haspopup="true">
      Export <nord-icon slot="end" name="interface-download"></nord-icon>
    </nord-button>

    <nord-popout id="tabs-popout">
      <nord-stack
        class="n:pbs-m n:pbe-s n:px-m"
        direction="horizontal"
        align-items="center"
      >
        <nord-stack direction="horizontal" align-items="center" gap="s">
          <h3 class="n:text-l n:font-active">Export data</h3>
        </nord-stack>
        <nord-icon name="interface-help" aria-describedby="tabs-tooltip" class="n:[cursor:help]" label="Help"></nord-icon>
      </nord-stack>
      <nord-tab-group label="Download options" padding="m">
        <nord-tab slot="tab">CSV</nord-tab>
        <nord-tab-panel>
          <nord-button class="export">
            Export data.csv <nord-icon slot="end" name="interface-download"></nord-icon>
          </nord-button>
          <p class="n-typescale-s n-margin-b-s">Data will be downloaded directly to your device.</p>
        </nord-tab-panel>
        <nord-tab slot="tab">Excel</nord-tab>
        <nord-tab-panel>
          <nord-button class="export">
            Export data.xlsx <nord-icon slot="end" name="interface-download"></nord-icon>
          </nord-button>
          <p class="n-typescale-s n-margin-b-s">Data will be downloaded directly to your device.</p>
        </nord-tab-panel>
      </nord-tab-group>
    </nord-popout>

    <nord-tooltip id="tabs-tooltip">Select format to export</nord-tooltip>

    <nord-toast-group></nord-toast-group>
```

### With Offset

```html
<nord-stack style="margin-bottom: var(--n-space-xl)" direction="horizontal" gap="l" justify-content="center">
      <nord-button variant="primary" aria-controls="side-offset-popout" aria-haspopup="true">side-offset</nord-button>
      <nord-button variant="primary" aria-controls="align-offset-popout" aria-haspopup="true">align-offset</nord-button>
    </nord-stack>

    <nord-popout id="side-offset-popout" position="block-end" side-offset="24">
      <div style="padding: var(--n-space-m)">Larger gap from the toggle</div>
    </nord-popout>

    <nord-popout id="align-offset-popout" position="block-end" align-offset="24">
      <div style="padding: var(--n-space-m)">Skidded along the edge</div>
    </nord-popout>
```

### With Anchor

```html
<nord-stack direction="horizontal" justify-content="space-between">
      <nord-button variant="primary" aria-controls="anchor-popout" aria-haspopup="true">Toggle popout</nord-button>

      <p id="anchor-target">Popout gets anchored here</p>
    </nord-stack>

    <nord-popout id="anchor-popout" position="block-end" anchor="anchor-target">
      <div class="n:p-m">Popout content</div>
    </nord-popout>
```

### Inside Container Query

```html
<style>
      .container-query-wrapper {
        container-type: inline-size;
        border: 2px dashed var(--n-color-border);
        padding: var(--n-space-m);
        max-inline-size: 600px;
        margin-inline: auto;
      }
      .container-query-label {
        font-size: var(--n-font-size-s);
        color: var(--n-color-text-weaker);
        margin-block-end: var(--n-space-s);
      }
    </style>

    <p class="container-query-label">
      This wrapper has <code>container-type: inline-size</code> which creates a new containing block
      and can break <code>position: fixed</code> popout positioning.
    </p>

    <div class="container-query-wrapper">
      <nord-stack direction="horizontal" justify-content="center">
        <nord-button variant="primary" aria-controls="cq-popout" aria-haspopup="true">Toggle popout</nord-button>
      </nord-stack>

      <nord-popout id="cq-popout" position="block-end">
        <div class="n:p-m">Popout content inside a container query</div>
      </nord-popout>
    </div>
```

### Inside Nested Container Query

```html
<style>
      .outer-container {
        container-type: inline-size;
        border: 2px dashed var(--n-color-border);
        padding: var(--n-space-m);
        max-inline-size: 800px;
        margin-inline: auto;
      }
      .inner-container {
        container-type: inline-size;
        border: 2px dashed var(--n-color-status-warning);
        padding: var(--n-space-m);
        max-inline-size: 500px;
        margin-inline: auto;
      }
      .cq-label {
        font-size: var(--n-font-size-s);
        color: var(--n-color-text-weaker);
        margin-block-end: var(--n-space-s);
      }
    </style>

    <p class="cq-label">Nested container queries — both wrappers have <code>container-type: inline-size</code>.</p>

    <div class="outer-container">
      <p class="cq-label">Outer container</p>
      <div class="inner-container">
        <p class="cq-label">Inner container</p>
        <nord-stack direction="horizontal" justify-content="center">
          <nord-button variant="primary" aria-controls="nested-cq-popout" aria-haspopup="true">Toggle popout</nord-button>
        </nord-stack>

        <nord-popout id="nested-cq-popout" position="block-end">
          <div class="n:p-m">Popout inside nested containers</div>
        </nord-popout>
      </div>
    </div>
```

### With Checkboxes

```html
<nord-stack class="n:mbe-xl" direction="horizontal" justify-content="center">
      <nord-button aria-controls="checkboxes-popout" aria-haspopup="true">
        <nord-icon slot="start" name="interface-filter"></nord-icon>
        Filter by status
        <nord-icon slot="end" name="interface-dropdown-small"></nord-icon>
      </nord-button>
    </nord-stack>

    <nord-popout id="checkboxes-popout" position="block-start">
      <nord-stack gap="m" class="n:p-m n:min-inline-[200px]">
        <nord-checkbox name="pending" label="Pending"></nord-checkbox>
        <nord-checkbox name="successful" label="Successful"></nord-checkbox>
        <nord-checkbox name="failed" label="Failed"></nord-checkbox>
        <nord-checkbox name="blocked" label="Blocked"></nord-checkbox>
      </nord-stack>
      <nord-divider></nord-divider>
      <nord-stack gap="m" class="n:p-s">
        <nord-button expand variant="plain" class="n:[--n-button-padding-x:var(--n-space-s)] n:[--n-button-text-align:start]">
          Clear selection
        </nord-button>
      </nord-stack>
    </nord-popout>
```

### Position Examples

```html
<nord-stack direction="horizontal" gap="m" justify-content="center" wrap>
      <nord-button aria-controls="pos-below" aria-haspopup="true">Below</nord-button>
      <nord-button aria-controls="pos-above" aria-haspopup="true">Above</nord-button>
      <nord-button aria-controls="pos-end-align" aria-haspopup="true">Below, aligned end</nord-button>
    </nord-stack>

    <nord-popout id="pos-below" position="block-end">
      <div class="n:p-m">Below the trigger</div>
    </nord-popout>
    <nord-popout id="pos-above" position="block-start">
      <div class="n:p-m">Above the trigger</div>
    </nord-popout>
    <nord-popout id="pos-end-align" position="block-end" align="end">
      <div class="n:p-m">Aligned to the end edge</div>
    </nord-popout>
```

## API Reference

### Properties

- **id** (`string`, default: `''`) — The id for the active element to reference via aria-controls.
- **anchor** (`string | undefined`) — Set an optional anchor element to align against, replacing the triggering element.
- **always-floating** (`boolean`, default: `false`) — Set to true to always display the popout as a floating overlay, even on smaller viewports.
- **controlled** (`boolean`, default: `false`) — Set to true when the consuming component owns the <code>open</code> state and drives
the popout itself (e.g. via its own trigger <code>@click</code> and <code>show()</code>/<code>hide()</code>).
The popout stays presentational — positioning, top layer, light dismiss and
transitions all still work — but it does NOT attach its own click-to-toggle
listener to the <code>aria-controls</code> trigger, avoiding a competing second toggle
on the same click.
- **open** (`boolean`, default: `false`) — Controls whether the component is open or not.
- **align** (`'start' | 'end'`, default: `'start'`) — Set the alignment in relation to the toggle (or anchor) depending on the position.
<code>start</code> will align it to the left of the toggle (or anchor).
<code>end</code> will align it to the right of the toggle (or anchor).
Setting the <code>position</code> to <code>inline-start</code> or <code>inline-end</code> will switch
<code>start</code> and <code>end</code> to the top and bottom respectively.
- **position** (`'block-end' | 'block-start' | 'inline-start' | 'inline-end' | 'auto'`, default: `'block-end'`) — Set the position in relation to the toggle (or anchor).
Options follow logical properties.
<code>block-start</code> and <code>block-end</code> referring to top and bottom respectively,
<code>inline-start</code> and <code>inline-end</code> referring to left and right respectively.
You can also set it to <code>auto</code> for automatic positioning depending on
which side has the most space available.
- **side-offset** (`number`, default: `8`) — Distance in pixels from the toggle (or anchor) along the main axis — the
gap between the floating element and the side it opens against. Fed into
Floating UI's <code>offset</code> middleware as <code>mainAxis</code>. Defaults to <code>8</code>.
- **align-offset** (`number`, default: `0`) — Offset in pixels along the alignment axis — slides the floating element
toward the <code>start</code> or <code>end</code> of the toggle (or anchor). Fed into Floating
UI's <code>offset</code> middleware as <code>alignmentAxis</code>. Defaults to <code>0</code>.

### Events

- **open** (`NordEvent`) — Dispatched when the popout is opened.
- **close** (`NordEvent`) — Dispatched when the popout is closed.

### Slots

- **(default)** — The popout content.

### Methods

- **show** — `show() => Promise<TransitionEvent | void>` — Show the popout.
A promise that resolves to a <code>TransitionEvent</code> when the popout's show animation ends or is cancelled.
If the popout is already open, the promise resolves immediately with <code>undefined</code>.
- **hide** — `hide(moveFocusToButton: boolean) => Promise<TransitionEvent | void>` — Hide the popout.
Returns a promise that resolves to a <code>TransitionEvent</code> when the popout's hide animation ends or is cancelled.
If the popout is already closed, the promise resolves immediately with <code>undefined</code>.

### CSS Custom Properties

- `--n-popout-background` (default: `var(--n-color-surface)`) — Background of the popout container. Set to <code>transparent</code> to suppress the popout's own surface (e.g. when a slotted element paints its own background).
- `--n-popout-box-shadow` (default: `var(--n-box-shadow-popout)`) — Box-shadow of the popout container. Set to <code>none</code> to suppress the popout's own shadow.

<!--
Source: https://nordhealth.design/raw/components/popout.md
-->
