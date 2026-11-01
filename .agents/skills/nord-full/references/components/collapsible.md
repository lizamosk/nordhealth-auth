# nord-collapsible

> Collapsible is a disclosure that shows or hides a section of content. It wires
> together a <a href="/components/collapsible-trigger/">Collapsible Trigger</a> and a
> <a href="/components/collapsible-panel/">Collapsible Panel</a>, animating the panel
> height as it opens and closes.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to progressively disclose a single section of content behind a trigger, such as order details or advanced settings.
- Always pair a [Collapsible Trigger](/components/collapsible-trigger/) with a [Collapsible Panel](/components/collapsible-panel/) inside a Collapsible.
- Give the trigger a clear, descriptive label so its purpose is obvious even when the panel is collapsed.

> **Don't:** - Don’t use to group several related sections that should expand and collapse together, use [Accordion](/components/accordion/) instead.
- Don’t hide essential content that the user always needs to see.
- Don’t nest interactive controls inside the trigger that compete with toggling the panel.

## Examples

### Basic

```html
<nord-collapsible class="n:container-xxs">
      <nord-stack gap="s">
        <div class="n:flex n:items-center n:justify-between n:gap-m n:px-m">
          <h4 class="n:text-s n:font-heading n:m-0">Appointment #4189</h4>
          <nord-collapsible-trigger>
            <nord-button variant="plain" size="s" square>
              <nord-icon name="arrow-up-down-long" label="Toggle details"></nord-icon>
            </nord-button>
          </nord-collapsible-trigger>
        </div>
        <div
          class="n:flex n:items-center n:justify-between n:py-s n:px-m n:border n:border-[var(--n-color-border)] n:rounded-s n:text-s"
        >
          <span class="n:text-weaker">Status</span>
          <span class="n:font-active">Confirmed</span>
        </div>
        <nord-collapsible-panel>
          <nord-stack gap="s">
            <div class="n:py-s n:px-m n:border n:border-[var(--n-color-border)] n:rounded-s n:text-s">
              <p class="n:font-active n:m-0">Clinic</p>
              <p class="n:text-weaker n:m-0">Bath Clinic — Dr. Laura Williams</p>
            </div>
            <div class="n:py-s n:px-m n:border n:border-[var(--n-color-border)] n:rounded-s n:text-s">
              <p class="n:font-active n:m-0">Patient</p>
              <p class="n:text-weaker n:m-0">Bella · Canine, 4 years</p>
            </div>
          </nord-stack>
        </nord-collapsible-panel>
      </nord-stack>
    </nord-collapsible>
```

### Overview

```html
<nord-collapsible class="n:container-xxs">
      <div class="n:flex n:items-center n:justify-between n:gap-m">
        <strong>Appointment #4189</strong>
        <nord-collapsible-trigger>
          <nord-button variant="plain" size="s" square>
            <nord-icon name="arrow-up-down-long" label="Toggle details"></nord-icon>
          </nord-button>
        </nord-collapsible-trigger>
      </div>
      <nord-collapsible-panel>
        <p class="n:text-weaker n:mbs-s">
          Bath Clinic, 14 March at 10:30 with Dr. Laura Williams.
        </p>
      </nord-collapsible-panel>
    </nord-collapsible>
```

### Disabled

```html
<nord-collapsible disabled class="n:container-xxs">
      <div class="n:flex n:items-center n:justify-between n:gap-m">
        <strong>Appointment #4189</strong>
        <nord-collapsible-trigger>
          <nord-button variant="plain" size="s" square>
            <nord-icon name="arrow-up-down-long" label="Toggle details"></nord-icon>
          </nord-button>
        </nord-collapsible-trigger>
      </div>
      <nord-collapsible-panel>
        <p class="n:text-weaker n:mbs-s">
          Bath Clinic, 14 March at 10:30 with Dr. Laura Williams.
        </p>
      </nord-collapsible-panel>
    </nord-collapsible>
```

### Settings

```html
<nord-card padding="m" class="n:inline-[20rem] n:max-inline-full n:mx-auto">
      <h3 slot="header" class="n:text-m n:font-heading n:m-0">Radius</h3>
      <p class="n:text-weaker n:text-s n:m-0 n:mbe-m">
        Set the corner radius of the element.
      </p>
      <nord-collapsible class="n:flex! n:items-start n:gap-s">
        <nord-field-group
          class="n:grid! n:grid-cols-2 n:gap-s! n:flex-1 n:min-inline-0"
        >
          <nord-field>
            <nord-field-label for="radius-tl" class="n:absolute n:inline-[1px] n:block-[1px] n:overflow-hidden n:[clip-path:inset(50%)]">Top-left radius</nord-field-label>
            <nord-input id="radius-tl" hide-label placeholder="0" value="0" expand></nord-input>
          </nord-field>
          <nord-field>
            <nord-field-label for="radius-tr" class="n:absolute n:inline-[1px] n:block-[1px] n:overflow-hidden n:[clip-path:inset(50%)]">Top-right radius</nord-field-label>
            <nord-input id="radius-tr" hide-label placeholder="0" value="0" expand></nord-input>
          </nord-field>
          <nord-collapsible-panel class="n:col-span-full">
            <div class="n:grid n:grid-cols-2 n:gap-s">
              <nord-field>
                <nord-field-label for="radius-bl" class="n:absolute n:inline-[1px] n:block-[1px] n:overflow-hidden n:[clip-path:inset(50%)]">Bottom-left radius</nord-field-label>
                <nord-input id="radius-bl" hide-label placeholder="0" value="0" expand></nord-input>
              </nord-field>
              <nord-field>
                <nord-field-label for="radius-br" class="n:absolute n:inline-[1px] n:block-[1px] n:overflow-hidden n:[clip-path:inset(50%)]">Bottom-right radius</nord-field-label>
                <nord-input id="radius-br" hide-label placeholder="0" value="0" expand></nord-input>
              </nord-field>
            </div>
          </nord-collapsible-panel>
        </nord-field-group>
        <nord-collapsible-trigger>
          <nord-button variant="default" size="m" square>
            <nord-icon name="arrow-up-down-long" label="Toggle additional radius fields"></nord-icon>
          </nord-button>
        </nord-collapsible-trigger>
      </nord-collapsible>
    </nord-card>
```

### File Tree

```html
<div class="n:container-xxs n:text-s">
      <nord-collapsible open>
        <nord-collapsible-trigger>
          <nord-button variant="plain" size="s">
            <nord-icon slot="start" name="interface-folder"></nord-icon>
            patients
          </nord-button>
        </nord-collapsible-trigger>
        <nord-collapsible-panel>
          <div class="n:ps-m n:flex n:flex-col n:items-start">
            <nord-collapsible>
              <nord-collapsible-trigger>
                <nord-button variant="plain" size="s">
                  <nord-icon slot="start" name="interface-folder"></nord-icon>
                  bella
                </nord-button>
              </nord-collapsible-trigger>
              <nord-collapsible-panel>
                <div class="n:ps-m n:flex n:flex-col n:items-start">
                  <nord-button variant="plain" size="s">
                    <nord-icon slot="start" name="file-generic"></nord-icon>
                    visit-2026-03-14.pdf
                  </nord-button>
                  <nord-button variant="plain" size="s">
                    <nord-icon slot="start" name="file-generic"></nord-icon>
                    vaccinations.pdf
                  </nord-button>
                </div>
              </nord-collapsible-panel>
            </nord-collapsible>
            <nord-collapsible>
              <nord-collapsible-trigger>
                <nord-button variant="plain" size="s">
                  <nord-icon slot="start" name="interface-folder"></nord-icon>
                  max
                </nord-button>
              </nord-collapsible-trigger>
              <nord-collapsible-panel>
                <div class="n:ps-m n:flex n:flex-col n:items-start">
                  <nord-button variant="plain" size="s">
                    <nord-icon slot="start" name="file-generic"></nord-icon>
                    visit-2026-02-01.pdf
                  </nord-button>
                </div>
              </nord-collapsible-panel>
            </nord-collapsible>
            <nord-button variant="plain" size="s">
              <nord-icon slot="start" name="file-generic"></nord-icon>
              intake-form.pdf
            </nord-button>
          </div>
        </nord-collapsible-panel>
      </nord-collapsible>
    </div>
```

## API Reference

### Properties

- **open** (`boolean`, default: `false`) — Whether the collapsible is open.
- **disabled** (`boolean`, default: `false`) — Whether the collapsible should ignore user interaction.

### Events

- **toggle** (`CollapsibleToggleEvent`) — Dispatched when the collapsible is opened or closed. The event includes an <code>open</code> property reflecting the new state.

### Slots

- **(default)** — Default slot for the <a href="/components/collapsible-trigger/">Collapsible Trigger</a>, <a href="/components/collapsible-panel/">Collapsible Panel</a> and any other content.

<!--
Source: https://nordhealth.design/raw/components/collapsible.md
-->
