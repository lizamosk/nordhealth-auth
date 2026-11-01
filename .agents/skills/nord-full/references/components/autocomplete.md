# nord-autocomplete

> Autocomplete is a free-text input with suggestions: the text the user types
> is itself the committed <code>value</code> (a string), and the options are completion
> aids. Picking a suggestion fills the input with the option's <code>label</code> and commits
> that label. Use it when the answer is open-ended text but you can offer
> helpful completions (a city, a tag, a username); reach for
> <a href="/components/combobox/">Combobox</a> instead when the value must be one of a
> fixed set of options.
> 
> Autocomplete is a control only — it has no built-in label, hint or error.
> Compose it inside a <a href="/components/field/">Field</a> to give it a label, hint and
> error message, the same way you would a native input.
> 
> Base UI parity: Autocomplete is the Combobox primitive with
> <code>selectionMode="none"</code> + <code>fillInputOnItemPress</code>.

## Usage

Autocomplete is a **control only** — it has no built-in label, hint or error. Pair it with a [Field](/components/field/) to give it a label, helper text and an error message, exactly like a native input. Connect the [Field Label](/components/field-label/) to the autocomplete with the `for` attribute so it gets an accessible name and click-to-focus.

Import the autocomplete and the Field parts you need — each import registers its custom element:

```js
import '@nordhealth/components/lib/Autocomplete'
import '@nordhealth/components/lib/Field'
import '@nordhealth/components/lib/FieldLabel'
import '@nordhealth/components/lib/FieldDescription'
import '@nordhealth/components/lib/FieldError'
```

Then compose the Field around the autocomplete:

```html
<nord-field>
  <nord-field-label for="tag">Search tags</nord-field-label>
  <nord-autocomplete id="tag" placeholder="e.g. feature"></nord-autocomplete>
  <nord-field-description>The text you type is the value; suggestions help you complete it.</nord-field-description>
  <!-- show a Field Error and mark the Field invalid instead, when validation fails -->
</nord-field>
```

Provide the suggestions with the `options` property — pairing it with a Field only handles labelling and layout, it doesn't change how you populate the list:

```js
document.querySelector('nord-autocomplete').options = [
  { value: 'feature', label: 'feature' },
  { value: 'fix', label: 'fix' },
]
```

Autocomplete renders in the light DOM, so you can style it directly with your own CSS or Tailwind utilities, and set its width on the autocomplete (or on its Field).

Use the `size` property (`s`, `m` or `l`, defaulting to `m`) to scale the control's height, padding and font size to match surrounding form controls.

### Free text is the value

The text the user types **is** the committed `value` (a single string). Suggestions are completion aids: picking one fills the input with that option's `label` and commits that label. Nothing is discarded when the listbox closes — the typed text stays as the value and the filter query.

Add `inline` for ghost-text completion: while an option is highlighted with the arrow keys, the input previews the highlighted option's remaining label as selected text that the user can accept (Enter, → / End at the end of the text, or a click) or overwrite by continuing to type.

The `value` is distinct from the inherited native HTML-autofill `autocomplete` property; the inner input always hard-codes `autocomplete="off"` so browser autofill never fights the suggestion list.

### Autocomplete vs Combobox

Both let users type to filter a list, but they differ in what the value becomes:

- **Autocomplete** — the raw typed text is committed directly as `value`. Suggestions optionally complete it; the value can be anything the user types.
- **[Combobox](/components/combobox/)** — the `value` must be one of the options' `value`s. The input is a search/filter field whose text is discarded on commit unless the user picks an option.

> **Do:** - Use when the answer is open-ended text but you can offer helpful completions, such as a city, a tag or a username.
- Pair it with a [Field](/components/field/) and a [Field Label](/components/field-label/) connected with `for`, so it has an accessible name, helper text and an error message.
- Use `external-filtering` and update `options` from the `input` event when the suggestions come from a server.
- Group related suggestions with the `group` property to help users scan long lists.

> **Don't:** - Don’t use when the value must be one of a fixed set of options, see [Combobox](/components/combobox/) instead.
- Don’t add a Field Label without a `for` pointing at the autocomplete’s `id`, or the control will have no accessible name.
- Don’t use for plain free-form text entry with no useful suggestions, see [Input](/components/input/) instead.
- Don’t use to trigger actions or commands, see [Command Menu](/components/command-menu/) instead.

<style>

html pre.shiki code .szBVR, html code.shiki .szBVR{--shiki-default:#D73A49;--shiki-dark:#F97583}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .s9eBZ, html code.shiki .s9eBZ{--shiki-default:#22863A;--shiki-dark:#85E89D}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sJ8bj, html code.shiki .sJ8bj{--shiki-default:#6A737D;--shiki-dark:#6A737D}

</style>

## Examples

### Basic

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-basic">Search tags</nord-field-label>
      <nord-autocomplete id="ac-basic" placeholder="e.g. feature" .options=${tags}></nord-autocomplete>
    </nord-field>
```

### Disabled

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-disabled">Search tags</nord-field-label>
      <nord-autocomplete id="ac-disabled" value="feature" disabled .options=${tags}></nord-autocomplete>
    </nord-field>
```

### Readonly

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-readonly">Search tags</nord-field-label>
      <nord-autocomplete id="ac-readonly" value="feature" readonly .options=${tags}></nord-autocomplete>
    </nord-field>
```

### With Start End Slots

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-slots">Search tags</nord-field-label>
      <nord-autocomplete id="ac-slots" placeholder="e.g. feature" .options=${tags}>
        <nord-icon slot="start" name="navigation-search"></nord-icon>
      </nord-autocomplete>
    </nord-field>
```

### Inline

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-inline">Search tags</nord-field-label>
      <nord-autocomplete id="ac-inline" placeholder="e.g. feature" inline .options=${tags}></nord-autocomplete>
      <nord-field-description>Use the arrow keys to preview a completion, then press Enter or → to accept it</nord-field-description>
    </nord-field>
```

### Async

```html
<nord-field class="n:inline-[20rem] n:max-inline-full">
      <nord-field-label for="ac-async">Search cities</nord-field-label>
      <nord-autocomplete id="ac-async" placeholder="e.g. London" external-filtering clearable></nord-autocomplete>
    </nord-field>
```

### Groups

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-groups">Select a tag</nord-field-label>
      <nord-autocomplete
        id="ac-groups"
        placeholder="e.g. feature"
        .options=${[
          { value: 'feature', label: 'feature', group: 'Type' },
          { value: 'fix', label: 'fix', group: 'Type' },
          { value: 'bug', label: 'bug', group: 'Type' },
          { value: 'docs', label: 'docs', group: 'Type' },
          { value: 'component: accordion', label: 'component: accordion', group: 'Component' },
          { value: 'component: combobox', label: 'component: combobox', group: 'Component' },
          { value: 'component: field', label: 'component: field', group: 'Component' },
          { value: 'component: input', label: 'component: input', group: 'Component' },
        ]}
      ></nord-autocomplete>
    </nord-field>
```

### Clear Button

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-clear">Search tags</nord-field-label>
      <nord-autocomplete id="ac-clear" placeholder="e.g. feature" clearable value="feature" .options=${tags}></nord-autocomplete>
    </nord-field>
```

### Auto Highlight

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-autohighlight">Search tags</nord-field-label>
      <nord-autocomplete id="ac-autohighlight" placeholder="Type then press Enter" auto-highlight .options=${tags}></nord-autocomplete>
      <nord-field-description>The first match is highlighted — press Enter to accept it</nord-field-description>
    </nord-field>
```

### Invalid

```html
<nord-field invalid class="n:container-xxs">
      <nord-field-label for="ac-invalid">Search tags</nord-field-label>
      <nord-autocomplete
        id="ac-invalid"
        placeholder="e.g. feature"
        invalid
        .options=${[
          { value: 'feature', label: 'feature' },
          { value: 'fix', label: 'fix' },
          { value: 'bug', label: 'bug' },
          { value: 'docs', label: 'docs' },
        ]}
      ></nord-autocomplete>
      <nord-field-error>Please enter a tag.</nord-field-error>
    </nord-field>
```

### R T L

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-rtl">ابحث في المدن</nord-field-label>
      <nord-autocomplete
        id="ac-rtl"
        placeholder="مثال: لندن"
        clearable
        .options=${[
          { value: 'القاهرة', label: 'القاهرة' },
          { value: 'الرياض', label: 'الرياض' },
          { value: 'دبي', label: 'دبي' },
          { value: 'عمّان', label: 'عمّان' },
          { value: 'بيروت', label: 'بيروت' },
        ]}
      ></nord-autocomplete>
    </nord-field>
```

### Virtualized

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-virtual">Option</nord-field-label>
      <nord-autocomplete id="ac-virtual" placeholder="Search 10,000 options" virtualized .options=${virtualOptions}></nord-autocomplete>
    </nord-field>
```

### Disabled Items

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-disabled">Search tags</nord-field-label>
      <nord-autocomplete
        id="ac-disabled"
        placeholder="e.g. feature"
        .options=${[
          { value: 'feature', label: 'feature' },
          { value: 'fix', label: 'fix', disabled: true },
          { value: 'bug', label: 'bug' },
          { value: 'docs', label: 'docs', disabled: true },
          { value: 'internal', label: 'internal' },
        ]}
      ></nord-autocomplete>
    </nord-field>
```

### Open On Input Click

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="ac-openonfocus">Search tags</nord-field-label>
      <nord-autocomplete id="ac-openonfocus" open-on-input-click placeholder="Click to open" .openOnInputClick=${true} .options=${tags}></nord-autocomplete>
    </nord-field>
```

### Input Group

```html
<nord-stack direction="horizontal" align-items="end" gap="s" class="n:container-xs">
      <nord-field class="n:flex-1">
        <nord-field-label for="ac-inputgroup">Search cities</nord-field-label>
        <nord-autocomplete id="ac-inputgroup" placeholder="e.g. London" clearable .options=${cities}></nord-autocomplete>
      </nord-field>
      <nord-button variant="primary">Apply</nord-button>
    </nord-stack>
```

### Standalone

```html
<nord-autocomplete
      id="ac-standalone"
      label="Tag"
      hint="Start typing to search."
      hint-below
      placeholder="Search tags"
      .options=${[
        { value: 'feature', label: 'feature' },
        { value: 'fix', label: 'fix' },
        { value: 'bug', label: 'bug' },
      ]}
    ></nord-autocomplete>
```

### Field

```html
<nord-field>
      <nord-field-label for="ac-field">Tag</nord-field-label>
      <nord-autocomplete
        id="ac-field"
        placeholder="Search tags"
        .options=${[
          { value: 'feature', label: 'feature' },
          { value: 'fix', label: 'fix' },
          { value: 'bug', label: 'bug' },
        ]}
      ></nord-autocomplete>
      <nord-field-description>Start typing to search.</nord-field-description>
    </nord-field>
```

## API Reference

### Properties

- **value** (`string`, default: `''`) — The value of the autocomplete. This is the free text the user has typed (or
the <code>label</code> of a picked suggestion) — always a single string.
- **inline** (`boolean`, default: `false`) — Enables inline ghost-text completion. While an option is highlighted with
the keyboard, the input shows the typed query followed by the remainder of
the highlighted option's label, with that remainder text-selected so
continued typing overwrites it. Accepting (Enter, ArrowRight/End at the end
of the text, or an option click) commits the full label.
- **clearable** (`boolean`, default: `false`) — Shows a clear (✕) button while there is text. Pressing it resets the value
to <code>''</code>, then fires <code>clear</code> and <code>change</code>.
- **open-on-input-click** (`boolean`, default: `false`) — Whether clicking the input opens the suggestion list. Defaults to <code>false</code>
for autocomplete — matching Base UI's <code>openOnInputClick={false}</code>, the list
appears as the user types rather than on click. Set to <code>true</code> to also open
on click.
- **size** (`'s' | 'm' | 'l'`, default: `'m'`) — The size of the component.
- **autocomplete** (`AutocompleteAttribute`, default: `'off'`) — Specifies the data type of the field, so that the browser may attempt to fill out the field automatically on behalf of the user.
- **label** (`string`, default: `''`) — Label for the control. Ignored when the control is wrapped in a
<code>&lt;nord-field&gt;</code>, which provides the label via <code>&lt;nord-field-label&gt;</code>.
- **hint** (`string | undefined`) — Optional hint text shown with the control. Ignored inside a <code>&lt;nord-field&gt;</code>,
which provides it via <code>&lt;nord-field-description&gt;</code>.
- **hint-below** (`boolean`, default: `false`) — Renders the hint below the control and any error instead of below the label.
- **hide-label** (`boolean`, default: `false`) — Visually hide the label, but still expose it to assistive technologies.
- **error** (`string | undefined`) — Optional error shown with the control. Ignored inside a <code>&lt;nord-field&gt;</code>,
which provides it via <code>&lt;nord-field-error&gt;</code>.
- **required** (`boolean`, default: `false`) — Determines whether the control is required or not.
A required control is announced as such to assistive technology and, inside
a <code>&lt;nord-field&gt;</code>, drives the required indicator on the <code>&lt;nord-field-label&gt;</code>.
When using this property you need to also set “novalidate” attribute on a form element to prevent browser from displaying its own validation errors.
- **hide-required** (`boolean`, default: `false`) — Visually hide the required indicator, but still expose the required state
to assistive technologies.
- **disabled** (`boolean`, default: `false`) — Makes the component disabled. This prevents users from
being able to interact with the component, and conveys
its inactive state to assistive technologies.
- **name** (`string | undefined`) — The name of the form component.
- **form** (`HTMLFormElement | null`) — Gets the form, if any, associated with the form element.
The setter accepts a string, which is the id of the form.
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
- **placeholder** (`string | undefined`) — Placeholder text to display within the input.
- **external-filtering** (`boolean`, default: `false`) — Use external filtering mode. When set to <code>true</code>, the component will not
perform internal text-based filtering and expects the consumer to update
the <code>options</code> in response to the <code>input</code> event.
- **loading** (`boolean`, default: `false`) — Shows a spinner in the control and listbox while asynchronous results are
loading. Pair with <code>external-filtering</code> for async search.
- **auto-highlight** (`boolean`, default: `false`) — Highlights the first option after filtering so pressing Enter selects it.
- **invalid** (`boolean`, default: `false`) — Marks the control as invalid, applying error styling and setting
<code>aria-invalid</code> on the input.
- **readonly** (`boolean`, default: `false`) — Marks the control read-only: the value stays visible, focusable and
submitted with the form, but the listbox can't be opened and the value can't
be changed (no typing, navigation, selection or clearing). Unlike <code>disabled</code>,
a read-only control still participates in form submission.
- **no-results-text** (`string | undefined`) — Message shown when no options match the query. Defaults to "No items found.".
- **virtualized** (`boolean`, default: `false`) — Virtualizes (windows) the option list so only the rows in view are rendered,
keeping very large lists (thousands of options) fast. Rows are assumed to be a
uniform height, which is measured from the first option. Virtualization is
skipped for grouped lists, whose labels and separators break that assumption —
grouped lists are expected to be short and curated.

### Events

- **change** (`NordEvent`) — Dispatched when the committed value changes via user interaction.
- **input** (`NordEvent`) — Dispatched as the user types into the input.
- **open** (`NordEvent`) — Dispatched when the listbox is opened.
- **close** (`NordEvent`) — Dispatched when the listbox is closed.
- **clear** (`ComboboxClearEvent`) — Dispatched when the value is cleared via the clear button or <code>clear()</code>.

### Slots

- **start** — Optional slot used to place an icon or prefix at the start of the control.
- **end** — Optional slot used to place an icon or suffix at the end of the control.

### Methods

- **show** — `show() => void` — Show the listbox programmatically.
- **hide** — `hide() => void` — Hide the listbox programmatically.
- **focus** — `focus(options?: FocusOptions) => void` — Focus the control's input.

### CSS Custom Properties

- `--n-combobox-list-inline-size` — Controls the inline size, or width, of the dropdown list. Defaults to the width of the control.
- `--n-combobox-block-size` — Controls the block size, or height, of the control. The medium default is <code>var(--n-space-xl)</code>; the s and l sizes scale from it.

### Dependencies

- `combobox`

<!--
Source: https://nordhealth.design/raw/components/autocomplete.md
-->
