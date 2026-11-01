# nord-input-group

> Input Group composes exactly one Nord Input or Textarea with reusable add-ons
> while leaving the editable control, form state, and all consumer nodes owned
> by the consumer.

## Usage

Input Group presents exactly one [Input](/components/input/) or [Textarea](/components/textarea/) and one or more add-ons as a single field surface. The original control remains the sole editable, form-associated element; the group does not clone, move, or replace consumer content.

**Supported controls:** the editable child must be exactly one direct `nord-input` or `nord-textarea`. Native inputs and arbitrary custom/third-party controls are unsupported because they cannot consume the group’s Field, validation, focus, and presentation contexts; unsupported compositions render the diagnostic fallback.

> **Do:** - Use add-ons for short context such as units, URL prefixes, icons, keyboard hints, loading state, or a closely related action.
- Provide exactly one direct `nord-input` or `nord-textarea` child and give the group a label, or compose it inside a [Field](/components/field/).
- Use logical `inline-start`, `inline-end`, `block-start`, and `block-end` positions so the layout adapts to right-to-left languages.
- Keep interactive add-ons explicitly enabled or disabled according to their own action state.

> **Don't:** - Don’t put multiple editable controls in one group; use a Field Group for multiple fields.
- Don’t use an add-on for lengthy help or validation copy; use a hint, Field Description, or Field Error.
- Don’t visually reorder interactive add-ons with custom CSS, because keyboard order follows source order.
- Don’t substitute a third-party input element. Input Group supports Nord Input and Textarea so it can preserve their established form, validation, and accessibility behavior.

## Add-on positions

`nord-input-group-addon` defaults to `position="inline-start"`. Inline positions sit before or after the text control in the current writing direction. Block positions span the group above or below the control. Position is independent of source order, but focus and assistive-technology order still follow the DOM, so place interactive content in the order users should encounter it.

The group shell supplies the one shared background and outline. Add-ons and the nested text control are transparent within that surface and do not draw internal divider borders.

At the default medium size, inline add-ons keep the normal `--n-space-s` outer inset but remove padding at the control seam; the grouped control contributes one `--n-space-xs` gap on that side. A direct, standalone Icon gets a small token-derived optical adjustment automatically. An exact direct Button or Dropdown whose own size matches the group supplies its own control padding, so the add-on removes the duplicate wrapper padding; intentionally smaller nested controls retain the normal inset. Private Nord-token roles scale add-on typography, child gap, padding, seam gap, and target height with group `size`, while block add-ons share the native control's effective text inset.

Clicking noninteractive add-on content focuses the text control. Buttons, links, dropdown triggers, and other interactive descendants keep their own pointer and keyboard behavior; Input Group neither synthesizes a control click nor disables those actions implicitly.

## Label ownership

Input Group supports two label owners. Choose one pattern for each group; do not provide field copy in both places.

### Standalone Input Group

Use the group’s `label` when Input Group stands on its own. Put `hint`, `error`, `required`, `invalid`, `disabled`, and `readonly` on the group when they describe the combined control. Input Group renders that field UI once and supplies its accessible name and description to the nested Shadow DOM control.

Hint text appears above the shared surface by default. Add `hint-below` when the helper copy should follow the control. If an error is also present, the error appears first and the hint follows it, matching Input and Textarea.

```html
<nord-input-group label="Website" hint="Enter the public address." hint-below required>
  <nord-input placeholder="example.com"></nord-input>
  <nord-input-group-addon position="inline-start">https://</nord-input-group-addon>
</nord-input-group>
```

### Input Group inside Field

Use [Field](/components/field/) when the surrounding form should own the label, description, error, disabled state, or invalid state. Do not also set `label`, `hint`, `error`, or `invalid` on Input Group. Field is the sole visible and accessible field owner; the group continues to own the combined surface.

Put `required` on the direct Input or Textarea so Field Label can reflect it. A control may still own control-specific properties such as `name`, `value`, `autocomplete`, `readonly`, and native validation constraints.

```html
<nord-field invalid>
  <nord-field-label for="website">Website</nord-field-label>
  <nord-input-group>
    <nord-input id="website" placeholder="example.com" required></nord-input>
    <nord-input-group-addon position="inline-start">https://</nord-input-group-addon>
  </nord-input-group>
  <nord-field-description>Enter the public address.</nord-field-description>
  <nord-field-error>This address is unavailable.</nord-field-error>
</nord-field>
```

The nested Input or Textarea’s built-in label, hint, and error UI is suppressed while Field or standalone Input Group owns that field context. Keep this copy on the selected owner so users receive one label and one description.

## Field state

Disabled state is an OR-merge of Field, Input Group, and the direct Input or Textarea: any one can disable the editable control. A `required` group or direct control publishes required state to the Field Label. Readonly state likewise comes from either the group or direct control. The nested Input or Textarea keeps its value, name, autocomplete, validation, native `input` and `change` events, focus methods, and form participation. Form reset restores its initial value, disabled controls are omitted from `FormData`, and readonly values remain submitted.

## Size

Set group `size` to `s`, `m` (default), or `l`. The group owns the effective presentation of its direct Input or Textarea and add-ons so typography, line height, spacing, and block size stay aligned. A child’s own public `size` value is not mutated: group size takes presentation precedence only while the child is composed, and the child’s explicit size resumes if it moves outside.

## Custom presentation

Use the group’s public CSS custom properties to adapt a supported Nord control rather than replacing it:

- `--n-input-group-inline-size`
- `--n-input-group-background`
- `--n-input-group-background-inactive`
- `--n-input-group-border-color`
- `--n-input-group-border-radius`
- `--n-input-group-target-size` (overrides the effective size’s token-derived target height)

The Custom Input example customizes the supported Nord Input with its public properties and these variables; it does not accept a different control implementation. The exact-one-Nord-control boundary is intentional: it avoids forking form association, password-manager behavior, native events, and validation semantics.

## Accessibility

- Every group needs an accessible label. Use the group’s `label`/label slot when standalone, or a connected Field Label inside Field.
- Decorative icons should have no label. Give icon-only add-on buttons their own accessible label and associate a Tooltip when the action benefits from visible explanation.
- Keep spinners labeled when they communicate meaningful asynchronous state.
- Required, invalid, disabled, and readonly visuals mirror the effective native and ARIA state of the nested control.
- Focus-visible styling follows keyboard focus on the text control, while `:focus-within` keeps the shared surface coherent as focus moves to add-on actions.
- Logical layout, token-based colors, forced-colors support, reduced motion, multiline growth, and compact-width constraints are built into the group shell.

## Rendering boundary

Input Group and Input Group Addon are scoped Light DOM shells. Input and Textarea retain their existing Shadow DOM. Only component-owned label, hint, error, and shell nodes receive the private scope stamp; consumer controls, add-on children, state, listeners, text, and DOM identity remain untouched.

<style>

html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .s9eBZ, html code.shiki .s9eBZ{--shiki-default:#22863A;--shiki-dark:#85E89D}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}

</style>

## Examples

### Overview

```html
<nord-input-group
      label="Search patients"
      hide-label
      style=${constrainedGroup}
    >
      <nord-input placeholder="Search patients"></nord-input>
      <nord-input-group-addon position="inline-start">
        <nord-icon name="navigation-search"></nord-icon>
      </nord-input-group-addon>
    </nord-input-group>
```

### Label Ownership

```html
<div
      style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
        gap: var(--n-space-l);
        align-items: start;
        inline-size: 100%;
        max-inline-size: 48rem;
      "
    >
      <nord-stack gap="s">
        <strong>Standalone Input Group</strong>
        <nord-input-group
          label="Website"
          hint="Enter the public address."
          required
        >
          <nord-input placeholder="example.com"></nord-input>
          <nord-input-group-addon position="inline-start"
            >https://</nord-input-group-addon
          >
        </nord-input-group>
      </nord-stack>

      <nord-stack gap="s">
        <strong>Inside Field</strong>
        <nord-field>
          <nord-field-label for="field-website">Website</nord-field-label>
          <nord-input-group>
            <nord-input
              id="field-website"
              placeholder="example.com"
              required
            ></nord-input>
            <nord-input-group-addon position="inline-start"
              >https://</nord-input-group-addon
            >
          </nord-input-group>
          <nord-field-description
            >Enter the public address.</nord-field-description
          >
        </nord-field>
      </nord-stack>
    </div>
```

### Hint Below

```html
<nord-input-group
      style=${constrainedGroup}
      label="Email address"
      hint="We’ll only use this address for account notifications."
      hint-below
    >
      <nord-input type="email" placeholder="name"></nord-input>
      <nord-input-group-addon position="inline-end">@example.com</nord-input-group-addon>
    </nord-input-group>
```

### Inline Start

```html
<nord-input-group label="Website" style=${constrainedGroup}>
      <nord-input placeholder="example.com"></nord-input>
      <nord-input-group-addon position="inline-start"
        >https://</nord-input-group-addon
      >
    </nord-input-group>
```

### Inline End

```html
<nord-input-group label="Website" style=${constrainedGroup}>
      <nord-input placeholder="example"></nord-input>
      <nord-input-group-addon position="inline-end"
        >.com</nord-input-group-addon
      >
    </nord-input-group>
```

### Block Start

```html
<nord-input-group label="Profile URL" style=${constrainedGroup}>
      <nord-input value="laura-williams"></nord-input>
      <nord-input-group-addon position="block-start">
        <span>https://example.com/users/</span>
        <nord-icon name="interface-link"></nord-icon>
      </nord-input-group-addon>
    </nord-input-group>
```

### Block End

```html
<nord-input-group label="Username" style=${constrainedGroup}>
      <nord-input value="laura-williams"></nord-input>
      <nord-input-group-addon position="block-end">
        <span>Public profile name</span>
        <span>14 / 30</span>
      </nord-input-group-addon>
    </nord-input-group>
```

### Icon

```html
<nord-stack gap="m" style=${constrainedGroup}>
      <nord-input-group label="Card number">
        <nord-input
          inputmode="numeric"
          placeholder="4242 4242 4242 4242"
        ></nord-input>
        <nord-input-group-addon position="inline-start">
          <nord-icon name="generic-credit-card"></nord-icon>
        </nord-input-group-addon>
        <nord-input-group-addon position="inline-end">
          <nord-icon
            name="interface-checked"
            color="var(--n-color-status-success)"
          ></nord-icon>
        </nord-input-group-addon>
      </nord-input-group>
    </nord-stack>
```

### Text

```html
<nord-stack gap="m" style=${constrainedGroup}>
      <nord-input-group label="Price">
        <nord-input inputmode="decimal" placeholder="0.00"></nord-input>
        <nord-input-group-addon position="inline-start"
          >$</nord-input-group-addon
        >
        <nord-input-group-addon position="inline-end"
          >USD</nord-input-group-addon
        >
      </nord-input-group>
      <nord-input-group label="Email address">
        <nord-input placeholder="username"></nord-input>
        <nord-input-group-addon position="inline-end"
          >@example.com</nord-input-group-addon
        >
      </nord-input-group>
    </nord-stack>
```

### Sizes

```html
<div
      style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
        gap: var(--n-space-l);
        align-items: start;
        inline-size: 100%;
        max-inline-size: 72rem;
      "
    >
      <nord-stack gap="m">
        <strong>Small (s)</strong>
        <nord-input-group label="Search patients" size="s">
          <nord-input placeholder="Search patients"></nord-input>
          <nord-input-group-addon position="inline-start">
            <nord-icon name="navigation-search" size="xs"></nord-icon>
          </nord-input-group-addon>
        </nord-input-group>
        <nord-input-group label="Price" size="s">
          <nord-input value="48.00"></nord-input>
          <nord-input-group-addon position="inline-start"
            >$</nord-input-group-addon
          >
          <nord-input-group-addon position="inline-end"
            >USD</nord-input-group-addon
          >
        </nord-input-group>
        <nord-input-group label="Repository" size="s">
          <nord-input value="design-system"></nord-input>
          <nord-input-group-addon position="inline-start">
            <nord-dropdown size="s">
              <nord-button slot="toggle" type="button" size="s" variant="plain"
                >Org</nord-button
              >
              <nord-dropdown-item>Nordhealth</nord-dropdown-item>
              <nord-dropdown-item>Personal</nord-dropdown-item>
            </nord-dropdown>
          </nord-input-group-addon>
        </nord-input-group>
        <nord-input-group label="Command" size="s">
          <nord-input placeholder="Search commands"></nord-input>
          <nord-input-group-addon position="inline-end">
            <nord-spinner size="s" label="Loading commands"></nord-spinner>
            <nord-kbd size="s">⌘K</nord-kbd>
          </nord-input-group-addon>
        </nord-input-group>
        <nord-input-group label="Comment" size="s">
          <nord-textarea
            rows="2"
            resize="auto"
            placeholder="Leave a comment…"
          ></nord-textarea>
          <nord-input-group-addon position="block-start">
            <span>Markdown</span>
            <span>Draft</span>
          </nord-input-group-addon>
          <nord-input-group-addon position="block-end">
            <span>0 / 500</span>
            <span>Saved</span>
          </nord-input-group-addon>
        </nord-input-group>
      </nord-stack>

      <nord-stack gap="m">
        <strong>Medium (m)</strong>
        <nord-input-group label="Search patients" size="m">
          <nord-input placeholder="Search patients"></nord-input>
          <nord-input-group-addon position="inline-start">
            <nord-icon name="navigation-search" size="s"></nord-icon>
          </nord-input-group-addon>
        </nord-input-group>
        <nord-input-group label="Price" size="m">
          <nord-input value="48.00"></nord-input>
          <nord-input-group-addon position="inline-start"
            >$</nord-input-group-addon
          >
          <nord-input-group-addon position="inline-end"
            >USD</nord-input-group-addon
          >
        </nord-input-group>
        <nord-input-group label="Repository" size="m">
          <nord-input value="design-system"></nord-input>
          <nord-input-group-addon position="inline-start">
            <nord-dropdown size="m">
              <nord-button slot="toggle" type="button" size="m" variant="plain"
                >Org</nord-button
              >
              <nord-dropdown-item>Nordhealth</nord-dropdown-item>
              <nord-dropdown-item>Personal</nord-dropdown-item>
            </nord-dropdown>
          </nord-input-group-addon>
        </nord-input-group>
        <nord-input-group label="Command" size="m">
          <nord-input placeholder="Search commands"></nord-input>
          <nord-input-group-addon position="inline-end">
            <nord-spinner size="m" label="Loading commands"></nord-spinner>
            <nord-kbd size="m">⌘K</nord-kbd>
          </nord-input-group-addon>
        </nord-input-group>
        <nord-input-group label="Comment" size="m">
          <nord-textarea
            rows="2"
            resize="auto"
            placeholder="Leave a comment…"
          ></nord-textarea>
          <nord-input-group-addon position="block-start">
            <span>Markdown</span>
            <span>Draft</span>
          </nord-input-group-addon>
          <nord-input-group-addon position="block-end">
            <span>0 / 500</span>
            <span>Saved</span>
          </nord-input-group-addon>
        </nord-input-group>
      </nord-stack>

      <nord-stack gap="m">
        <strong>Large (l)</strong>
        <nord-input-group label="Search patients" size="l">
          <nord-input placeholder="Search patients"></nord-input>
          <nord-input-group-addon position="inline-start">
            <nord-icon name="navigation-search" size="m"></nord-icon>
          </nord-input-group-addon>
        </nord-input-group>
        <nord-input-group label="Price" size="l">
          <nord-input value="48.00"></nord-input>
          <nord-input-group-addon position="inline-start"
            >$</nord-input-group-addon
          >
          <nord-input-group-addon position="inline-end"
            >USD</nord-input-group-addon
          >
        </nord-input-group>
        <nord-input-group label="Repository" size="l">
          <nord-input value="design-system"></nord-input>
          <nord-input-group-addon position="inline-start">
            <nord-dropdown size="l">
              <nord-button slot="toggle" type="button" size="l" variant="plain"
                >Org</nord-button
              >
              <nord-dropdown-item>Nordhealth</nord-dropdown-item>
              <nord-dropdown-item>Personal</nord-dropdown-item>
            </nord-dropdown>
          </nord-input-group-addon>
        </nord-input-group>
        <nord-input-group label="Command" size="l">
          <nord-input placeholder="Search commands"></nord-input>
          <nord-input-group-addon position="inline-end">
            <nord-spinner size="l" label="Loading commands"></nord-spinner>
            <nord-kbd size="l">⌘K</nord-kbd>
          </nord-input-group-addon>
        </nord-input-group>
        <nord-input-group label="Comment" size="l">
          <nord-textarea
            rows="2"
            resize="auto"
            placeholder="Leave a comment…"
          ></nord-textarea>
          <nord-input-group-addon position="block-start">
            <span>Markdown</span>
            <span>Draft</span>
          </nord-input-group-addon>
          <nord-input-group-addon position="block-end">
            <span>0 / 500</span>
            <span>Saved</span>
          </nord-input-group-addon>
        </nord-input-group>
      </nord-stack>
    </div>
```

### Button

```html
<nord-input-group label="API token" style=${constrainedGroup}>
      <nord-input value="nord_live_8f2a7"></nord-input>
      <nord-input-group-addon position="inline-end">
        <nord-button
          type="button"
          size="s"
          square
          aria-label="Copy API token"
          aria-describedby="copy-api-token-tooltip"
        >
          <nord-icon name="interface-copy"></nord-icon>
        </nord-button>
        <nord-tooltip id="copy-api-token-tooltip">Copy API token</nord-tooltip>
      </nord-input-group-addon>
    </nord-input-group>
```

### Kbd

```html
<nord-input-group
      label="Search commands"
      hide-label
      style=${constrainedGroup}
    >
      <nord-input placeholder="Search commands"></nord-input>
      <nord-input-group-addon position="inline-start">
        <nord-icon name="navigation-search"></nord-icon>
      </nord-input-group-addon>
      <nord-input-group-addon position="inline-end">
        <nord-kbd size="s">⌘</nord-kbd>
        <nord-kbd size="s">K</nord-kbd>
      </nord-input-group-addon>
    </nord-input-group>
```

### Dropdown

```html
<nord-input-group label="Repository" style=${constrainedGroup}>
      <nord-input placeholder="design-system"></nord-input>
      <nord-input-group-addon position="inline-start">
        <nord-dropdown size="s">
          <nord-button slot="toggle" type="button" size="s" variant="plain"
            >Organization</nord-button
          >
          <nord-dropdown-item>Nordhealth</nord-dropdown-item>
          <nord-dropdown-item>Personal</nord-dropdown-item>
        </nord-dropdown>
      </nord-input-group-addon>
    </nord-input-group>
```

### Spinner

```html
<nord-stack gap="m" style=${constrainedGroup}>
      <nord-input-group label="Workspace name">
        <nord-input value="Design system"></nord-input>
        <nord-input-group-addon position="inline-end">
          <nord-spinner size="s" label="Saving workspace name"></nord-spinner>
          <span>Saving…</span>
        </nord-input-group-addon>
      </nord-input-group>
      <nord-input-group label="Project">
        <nord-input placeholder="Loading projects" readonly></nord-input>
        <nord-input-group-addon position="inline-start">
          <nord-spinner size="s" label="Loading projects"></nord-spinner>
        </nord-input-group-addon>
      </nord-input-group>
    </nord-stack>
```

### Textarea

```html
<nord-input-group label="Code review comment" style=${constrainedGroup}>
      <nord-textarea
        rows="3"
        resize="auto"
        placeholder="Leave a comment…"
      ></nord-textarea>
      <nord-input-group-addon position="block-start">
        <span>Markdown supported</span>
        <nord-icon name="interface-info"></nord-icon>
      </nord-input-group-addon>
      <nord-input-group-addon position="block-end">
        <span>0 / 500 characters</span>
      </nord-input-group-addon>
    </nord-input-group>
```

### Custom Input

```html
<nord-input-group
      label="Search audit events"
      hide-label
      style="${constrainedGroup}; --n-input-group-border-radius: var(--n-border-radius-pill)"
    >
      <nord-input
        type="search"
        placeholder="Search audit events"
        autocomplete="off"
      ></nord-input>
      <nord-input-group-addon position="inline-end"
        >Last 30 days</nord-input-group-addon
      >
    </nord-input-group>
```

### R T L

```html
<nord-stack gap="m" style=${constrainedGroup}>
      <nord-input-group label="البحث عن المرضى">
        <nord-input placeholder="اكتب اسم المريض"></nord-input>
        <nord-input-group-addon position="inline-start">
          <nord-icon name="navigation-search"></nord-icon>
        </nord-input-group-addon>
        <nord-input-group-addon position="inline-end"
          >⌘ K</nord-input-group-addon
        >
      </nord-input-group>
      <nord-input-group label="ملاحظات">
        <nord-textarea rows="3" placeholder="أضف ملاحظة"></nord-textarea>
        <nord-input-group-addon position="block-end"
          >0 / 500</nord-input-group-addon
        >
      </nord-input-group>
    </nord-stack>
```

### Validation

```html
<nord-field invalid style=${constrainedGroup}>
      <nord-field-label for="validation-domain">Domain</nord-field-label>
      <nord-input-group>
        <nord-input id="validation-domain" value="example"></nord-input>
        <nord-input-group-addon position="inline-start"
          >https://</nord-input-group-addon
        >
        <nord-input-group-addon position="inline-end"
          >.com</nord-input-group-addon
        >
      </nord-input-group>
      <nord-field-description
        >Enter the complete public domain.</nord-field-description
      >
      <nord-field-error>This domain is already in use.</nord-field-error>
    </nord-field>
```

### Disabled

```html
<nord-stack gap="m" style=${constrainedGroup}>
      <nord-input-group label="Disabled API token" disabled>
        <nord-input value="nord_live_8f2a7"></nord-input>
        <nord-input-group-addon position="inline-end">
          <nord-button
            type="button"
            size="s"
            square
            disabled
            aria-label="Copy disabled API token"
          >
            <nord-icon name="interface-copy"></nord-icon>
          </nord-button>
        </nord-input-group-addon>
      </nord-input-group>
      <nord-input-group label="Readonly API token" readonly>
        <nord-input value="nord_live_8f2a7"></nord-input>
        <nord-input-group-addon position="inline-end">
          <nord-button
            type="button"
            size="s"
            square
            aria-label="Copy readonly API token"
          >
            <nord-icon name="interface-copy"></nord-icon>
          </nord-button>
        </nord-input-group-addon>
      </nord-input-group>
    </nord-stack>
```

## API Reference

### Properties

- **size** (`'s' | 'm' | 'l'`, default: `'m'`) — Controls the effective size of the grouped Input or Textarea and add-ons.
- **label** (`string`, default: `''`) — Plain-text label used when the group is not inside a Nord Field.
- **hint** (`string | undefined`) — Optional standalone hint text.
- **hint-below** (`boolean`, default: `false`) — Places the standalone hint below the group surface.
- **error** (`string | undefined`) — Optional standalone error text. Supplying it makes the group invalid.
- **required** (`boolean`, default: `false`) — Makes the grouped text control required.
- **hide-label** (`boolean`, default: `false`) — Visually hides the standalone label while preserving its accessible name.
- **hide-required** (`boolean`, default: `false`) — Hides the visual required indicator without changing native required state.
- **invalid** (`boolean`, default: `false`) — Applies invalid state when the group is standalone.
- **disabled** (`boolean`, default: `false`) — Disables the grouped text control without implicitly disabling add-on actions.
- **readonly** (`boolean`, default: `false`) — Makes the grouped text control readonly.

### Slots

- **(default)** — A single <code>nord-input</code> or <code>nord-textarea</code> plus Input Group Addons.
- **label** — Optional rich label content for a standalone group.
- **hint** — Optional rich hint content for a standalone group.
- **error** — Optional rich validation message for a standalone group.

### CSS Custom Properties

- `--n-input-group-inline-size` (default: `100%`) — Controls the group's inline size.
- `--n-input-group-background` (default: `var(--n-color-surface)`) — Controls the shared control surface.
- `--n-input-group-background-inactive` (default: `var(--n-color-active)`) — Controls the disabled and readonly surface.
- `--n-input-group-border-color` (default: `var(--n-color-border-strong)`) — Controls the shared border colour.
- `--n-input-group-border-radius` (default: `var(--n-border-radius-s)`) — Controls the shared corner radius.
- `--n-input-group-target-size` — Overrides the size-derived compound control minimum block size.

### Dependencies

- `field`

<!--
Source: https://nordhealth.design/raw/components/input-group.md
-->
