# nord-combobox

> Combobox lets users choose one option (or several) from a list by typing to
> filter, then picking with the keyboard or pointer. Use it when a <a href="/components/select/">Select</a>
> would be unwieldy because there are many options to scan.
> 
> Combobox is a control only — it has no built-in label, hint or error. Compose
> it inside a <a href="/components/field/">Field</a> to give it a label, hint and error
> message, the same way you would a native input.
> 
> The committed <code>value</code> is an option's <code>value</code> (or an array of them with
> <code>multiple</code>); the input is a filter/search field whose text is discarded on
> commit. For a free-text input with suggestions where the typed text is the
> value, use <a href="/components/autocomplete/">Autocomplete</a> instead.

## Usage

Combobox is a **control only** — it has no built-in label, hint or error. Pair it with a [Field](/components/field/) to give it a label, helper text and an error message, exactly like a native input. Connect the [Field Label](/components/field-label/) to the combobox with the `for` attribute so it gets an accessible name and click-to-focus.

Import the combobox and the Field parts you need — each import registers its custom element:

```js
import '@nordhealth/components/lib/Combobox'
import '@nordhealth/components/lib/Field'
import '@nordhealth/components/lib/FieldLabel'
import '@nordhealth/components/lib/FieldDescription'
import '@nordhealth/components/lib/FieldError'
```

Then compose the Field around the combobox:

```html
<nord-field>
  <nord-field-label for="framework">Framework</nord-field-label>
  <nord-combobox id="framework" placeholder="Select a framework"></nord-combobox>
  <nord-field-description>Choose the framework for your project.</nord-field-description>
  <!-- show a Field Error and mark the Field invalid instead, when validation fails -->
</nord-field>
```

Provide the choices with the `options` property — pairing it with a Field only handles labelling and layout, it doesn't change how you populate the list:

```js
document.querySelector('nord-combobox').options = [
  { value: 'next', label: 'Next.js' },
  { value: 'astro', label: 'Astro' },
]
```

Combobox renders in the light DOM, so you can style it directly with your own CSS or Tailwind utilities, and set its width on the combobox (or on its Field).

Use the `size` property (`s`, `m` or `l`, defaulting to `m`) to scale the control's height, padding and font size to match surrounding form controls.

### Select vs free-text suggestions

The committed `value` is an option's `value`. The input is a search/filter field whose text is discarded on commit; closing the listbox reverts the input to the selected option's label. Nothing is committed unless the user picks an option, so the value is always one of the options you provide (or an array of them with `multiple`).

If you instead need the typed text *itself* to be the committed value — free-text input with the options as completion aids — use [Autocomplete](/components/autocomplete/). Autocomplete also offers `inline` ghost-text completion, where arrow-key navigation previews the highlighted option's remaining label.

### Picking an option vs creating one

Both `multiple` and `creatable` keep the `value` made of option `value`s — they never produce arbitrary free text (use [Autocomplete](/components/autocomplete/) for that):

- **`multiple`** lets users pick several options, each shown as a removable chip; the listbox stays open after every selection.
- **`creatable`** offers a *Create* row (hinted with a ⏎ Kbd) when the query matches no option. Choosing it fires a `create` event so **you** add the option — the combobox never mutates `options`. With `multiple`, append the created option to `value` yourself.

The inner input always hard-codes `autocomplete="off"` so browser autofill never fights the suggestion list.

> **Do:** - Use when users need to pick from a long list of options and benefit from typing to filter, such as countries, timezones or frameworks.
- Pair it with a [Field](/components/field/) and a [Field Label](/components/field-label/) connected with `for`, so it has an accessible name, helper text and an error message.
- Use `multiple` when users may legitimately pick more than one option, showing each choice as a removable chip.
- Use `external-filtering` and update `options` from the `input` event when the list comes from a server or is too large to filter on the client.
- Group related options with the `group` property to help users scan long lists.

> **Don't:** - Don’t use when there are only a handful of options and filtering adds no value, see [Select](/components/select/) instead.
- Don’t add a Field Label without a `for` pointing at the combobox’s `id`, or the control will have no accessible name.
- Don’t use for free-form text entry, see [Input](/components/input/) instead.
- Don’t use to trigger actions or commands, see [Command Menu](/components/command-menu/) instead.

## Dismissing when another overlay opens

An open combobox (or `nord-autocomplete`) closes automatically when a `nord-modal` opens, so the modal is the topmost surface. This is driven by the public `nord-dismiss-overlays` event — see [Modal → Dismissing other overlays](/components/modal/#dismissing-other-overlays) for details and how your own overlays can trigger the same behaviour.

<style>

html pre.shiki code .szBVR, html code.shiki .szBVR{--shiki-default:#D73A49;--shiki-dark:#F97583}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .s9eBZ, html code.shiki .s9eBZ{--shiki-default:#22863A;--shiki-dark:#85E89D}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sJ8bj, html code.shiki .sJ8bj{--shiki-default:#6A737D;--shiki-dark:#6A737D}

</style>

## Examples

### Basic

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-basic">Framework</nord-field-label>
      <nord-combobox id="cb-basic" placeholder="Select a framework" .options=${frameworks}></nord-combobox>
    </nord-field>
```

### With Start End Slots

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-slots">Framework</nord-field-label>
      <nord-combobox id="cb-slots" placeholder="Select a framework" .options=${frameworks}>
        <nord-icon slot="start" name="navigation-search"></nord-icon>
      </nord-combobox>
    </nord-field>
```

### Multiple

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-multiple">Frameworks</nord-field-label>
      <nord-combobox id="cb-multiple" placeholder="Select frameworks" multiple clearable .options=${frameworks} .value=${['Next.js']}></nord-combobox>
    </nord-field>
```

### Groups

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-groups">Timezone</nord-field-label>
      <nord-combobox
        id="cb-groups"
        placeholder="Select a timezone"
        .options=${[
          { value: '(GMT-5) New York', label: '(GMT-5) New York', group: 'Americas' },
          { value: '(GMT-8) Los Angeles', label: '(GMT-8) Los Angeles', group: 'Americas' },
          { value: '(GMT-3) São Paulo', label: '(GMT-3) São Paulo', group: 'Americas' },
          { value: '(GMT+0) London', label: '(GMT+0) London', group: 'Europe' },
          { value: '(GMT+1) Paris', label: '(GMT+1) Paris', group: 'Europe' },
          { value: '(GMT+1) Berlin', label: '(GMT+1) Berlin', group: 'Europe' },
          { value: '(GMT+9) Tokyo', label: '(GMT+9) Tokyo', group: 'Asia/Pacific' },
          { value: '(GMT+8) Singapore', label: '(GMT+8) Singapore', group: 'Asia/Pacific' },
        ]}
      ></nord-combobox>
    </nord-field>
```

### Creatable

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-creatable">Tag</nord-field-label>
      <nord-combobox id="cb-creatable" placeholder="Type to create a tag" creatable>
        <nord-combobox-option value="bug">bug</nord-combobox-option>
        <nord-combobox-option value="feature">feature</nord-combobox-option>
        <nord-combobox-option value="docs">docs</nord-combobox-option>
      </nord-combobox>
      <nord-field-description>Type a new tag, then press Enter to create it</nord-field-description>
    </nord-field>
```

### Declarative

```html
<nord-stack>
      <nord-field class="n:container-xxs">
        <nord-field-label for="cb-decl">Framework</nord-field-label>
        <nord-combobox id="cb-decl" placeholder="Select a framework">
          <nord-combobox-option value="next">Next.js</nord-combobox-option>
          <nord-combobox-option value="sveltekit">SvelteKit</nord-combobox-option>
          <nord-combobox-option value="nuxt">Nuxt.js</nord-combobox-option>
          <nord-combobox-option value="astro">Astro</nord-combobox-option>
        </nord-combobox>
      </nord-field>

      <nord-field class="n:container-xxs">
        <nord-field-label for="cb-decl-groups">Timezone</nord-field-label>
        <nord-combobox id="cb-decl-groups" placeholder="Select a timezone">
          <nord-combobox-group label="Americas">
            <nord-combobox-option value="nyc">(GMT-5) New York</nord-combobox-option>
            <nord-combobox-option value="la">(GMT-8) Los Angeles</nord-combobox-option>
          </nord-combobox-group>
          <nord-combobox-group label="Europe">
            <nord-combobox-option value="london">(GMT+0) London</nord-combobox-option>
            <nord-combobox-option value="paris">(GMT+1) Paris</nord-combobox-option>
          </nord-combobox-group>
        </nord-combobox>
      </nord-field>
    </nord-stack>
```

### Declarative Custom Items

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-decl-custom">Assignee</nord-field-label>
      <nord-combobox id="cb-decl-custom" placeholder="Search people">
        <nord-combobox-option value="ada" label="Ada Lovelace">
          <span class="n:flex n:items-center n:gap-s">
            <nord-avatar size="s" name="Ada Lovelace"></nord-avatar> Ada Lovelace
          </span>
        </nord-combobox-option>
        <nord-combobox-option value="grace" label="Grace Hopper">
          <span class="n:flex n:items-center n:gap-s">
            <nord-avatar size="s" name="Grace Hopper"></nord-avatar> Grace Hopper
          </span>
        </nord-combobox-option>
      </nord-combobox>
    </nord-field>
```

### Async

```html
<nord-field class="n:inline-[20rem] n:max-inline-full">
      <nord-field-label for="cb-async">User</nord-field-label>
      <nord-combobox
        id="cb-async"
        placeholder="Search users"
        external-filtering
        clearable
        value="u4"
        .options=${[{ value: 'u4', label: 'Katherine Johnson' }]}
      ></nord-combobox>
    </nord-field>
```

### Async Multiple

```html
<nord-field class="n:inline-[20rem] n:max-inline-full">
      <nord-field-label for="cb-async-multi">Users</nord-field-label>
      <nord-combobox
        id="cb-async-multi"
        placeholder="Search users"
        multiple
        external-filtering
        clearable
        .options=${[{ value: 'u2', label: 'Grace Hopper' }]}
        .value=${['u2']}
      ></nord-combobox>
    </nord-field>
```

### Virtualized

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-virtual">Option</nord-field-label>
      <nord-combobox id="cb-virtual" placeholder="Search 10,000 options" virtualized .options=${virtualOptions}></nord-combobox>
    </nord-field>
```

### Clear Button

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-clear">Country</nord-field-label>
      <nord-combobox
        id="cb-clear"
        placeholder="Search"
        clearable
        value="france"
        .options=${[
          { value: 'argentina', label: 'Argentina' },
          { value: 'brazil', label: 'Brazil' },
          { value: 'canada', label: 'Canada' },
          { value: 'france', label: 'France' },
          { value: 'germany', label: 'Germany' },
          { value: 'japan', label: 'Japan' },
        ]}
      ></nord-combobox>
    </nord-field>
```

### Auto Highlight

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-autohighlight">Country</nord-field-label>
      <nord-combobox
        id="cb-autohighlight"
        placeholder="Type then press Enter"
        auto-highlight
        .options=${[
          { value: 'argentina', label: 'Argentina' },
          { value: 'australia', label: 'Australia' },
          { value: 'brazil', label: 'Brazil' },
          { value: 'canada', label: 'Canada' },
          { value: 'china', label: 'China' },
          { value: 'france', label: 'France' },
        ]}
      ></nord-combobox>
      <nord-field-description>The first match is highlighted — press Enter to select it</nord-field-description>
    </nord-field>
```

### Invalid

```html
<nord-field invalid class="n:container-xxs">
      <nord-field-label for="cb-invalid">Country</nord-field-label>
      <nord-combobox
        id="cb-invalid"
        placeholder="Search"
        invalid
        .options=${[
          { value: 'argentina', label: 'Argentina' },
          { value: 'brazil', label: 'Brazil' },
          { value: 'canada', label: 'Canada' },
          { value: 'france', label: 'France' },
        ]}
      ></nord-combobox>
      <nord-field-error>Please choose a country.</nord-field-error>
    </nord-field>
```

### Readonly

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-readonly">Country</nord-field-label>
      <nord-combobox
        id="cb-readonly"
        placeholder="Search"
        readonly
        value="france"
        .options=${[
          { value: 'argentina', label: 'Argentina' },
          { value: 'brazil', label: 'Brazil' },
          { value: 'canada', label: 'Canada' },
          { value: 'france', label: 'France' },
        ]}
      ></nord-combobox>
    </nord-field>
```

### Disabled

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-disabled">Country</nord-field-label>
      <nord-combobox
        id="cb-disabled"
        placeholder="Search"
        disabled
        value="france"
        .options=${[
          { value: 'argentina', label: 'Argentina' },
          { value: 'brazil', label: 'Brazil' },
          { value: 'canada', label: 'Canada' },
          { value: 'france', label: 'France' },
        ]}
      ></nord-combobox>
    </nord-field>
```

### R T L

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-rtl">نوع الحيوان</nord-field-label>
      <nord-combobox
        id="cb-rtl"
        placeholder="اختر نوعًا"
        clearable
        .options=${[
          { value: 'canine', label: 'كلبيات' },
          { value: 'feline', label: 'سنوريات' },
          { value: 'equine', label: 'خيليات' },
          { value: 'rabbit', label: 'أرنب' },
          { value: 'rodent', label: 'قوارض' },
        ]}
      ></nord-combobox>
    </nord-field>
```

### Custom Items

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-custom">Assignee</nord-field-label>
      <nord-combobox id="cb-custom" placeholder="Search people" .options=${customPeople}></nord-combobox>
    </nord-field>
```

### Disabled Items

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-disabled">Framework</nord-field-label>
      <nord-combobox
        id="cb-disabled"
        placeholder="Select a framework"
        .options=${[
          { value: 'Next.js', label: 'Next.js' },
          { value: 'SvelteKit', label: 'SvelteKit', disabled: true },
          { value: 'Nuxt.js', label: 'Nuxt.js' },
          { value: 'Remix', label: 'Remix', disabled: true },
          { value: 'Astro', label: 'Astro' },
        ]}
      ></nord-combobox>
    </nord-field>
```

### Open On Input Click Off

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-openonfocus">Framework</nord-field-label>
      <nord-combobox id="cb-openonfocus" placeholder="Type to open" .openOnInputClick=${false} .options=${frameworks}></nord-combobox>
    </nord-field>
```

### Inside Dialog

```html
<nord-button onclick="document.getElementById('combobox-dialog').showModal()">Open dialog</nord-button>

    <nord-modal id="combobox-dialog" aria-labelledby="combobox-dialog-title">
      <h2 slot="header" id="combobox-dialog-title">Choose a framework</h2>
      <nord-field>
        <nord-field-label for="cb-dialog">Framework</nord-field-label>
        <nord-combobox id="cb-dialog" placeholder="Select a framework" .options=${frameworks}></nord-combobox>
      </nord-field>
      <nord-button slot="footer" variant="primary" onclick="document.getElementById('combobox-dialog').close()">Done</nord-button>
    </nord-modal>
```

### Input Group

```html
<nord-stack direction="horizontal" align-items="end" gap="s" class="n:container-xs">
      <nord-field class="n:flex-1">
        <nord-field-label for="cb-inputgroup">Country</nord-field-label>
        <nord-combobox id="cb-inputgroup" placeholder="Search" clearable .options=${countries}></nord-combobox>
      </nord-field>
      <nord-button variant="primary">Apply</nord-button>
    </nord-stack>
```

### Popup

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-popup">Country</nord-field-label>
      <nord-combobox id="cb-popup" placeholder="Search" .options=${countries} .value=${'united-states'}></nord-combobox>
      <nord-field-description>Choose your country of residence</nord-field-description>
    </nord-field>
```

### Standalone

```html
<nord-combobox label="Framework" hint="Pick your stack." hint-below placeholder="Select a framework">
      <nord-combobox-option value="next">Next.js</nord-combobox-option>
      <nord-combobox-option value="nuxt">Nuxt</nord-combobox-option>
      <nord-combobox-option value="astro">Astro</nord-combobox-option>
    </nord-combobox>
```

### Field

```html
<nord-field>
      <nord-field-label for="framework">Framework</nord-field-label>
      <nord-combobox id="framework" placeholder="Select a framework">
        <nord-combobox-option value="next">Next.js</nord-combobox-option>
        <nord-combobox-option value="nuxt">Nuxt</nord-combobox-option>
        <nord-combobox-option value="astro">Astro</nord-combobox-option>
      </nord-combobox>
      <nord-field-description>Pick your stack.</nord-field-description>
    </nord-field>
```

## API Reference

### Properties

- **value** (`string`, default: `''`) — The value of the combobox. A single string when <code>multiple</code> is <code>false</code>,
or an array of strings when <code>multiple</code> is <code>true</code>.
- **multiple** (`boolean`, default: `false`) — Allows selecting more than one option. Selected options are shown as
removable chips and the listbox stays open after each selection.
- **clearable** (`boolean`, default: `true`) — Shows a clear (✕) button while there is a value. Pressing it resets the
value to <code>''</code> (or <code>[]</code> when <code>multiple</code>), then fires <code>clear</code> and <code>change</code>.
Defaults to <code>true</code>.

This prop only toggles the button. A single-select value can always be
cleared by deleting the input text, regardless of this prop (Base UI
parity).
- **creatable** (`boolean`, default: `false`) — Offers a "Create" affordance when the query does not exactly match an
existing option. Choosing it (click or Enter) adds the typed value as an
option and selects it (in <code>multiple</code> mode it is appended as a chip), and
fires a cancelable <code>create</code> event. Call <code>event.preventDefault()</code> to opt out
and handle creation yourself (e.g. to map the value to a different <code>value</code>).
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
- **open-on-input-click** (`boolean`, default: `true`) — Whether clicking the input opens the listbox. Defaults to <code>true</code>. Set to
<code>false</code> to only open on typing or a trigger (chevron) click. Focusing the
input (e.g. tabbing in) never opens the list on its own. Mirrors Base UI's
<code>openOnInputClick</code>.
- **no-results-text** (`string | undefined`) — Message shown when no options match the query. Defaults to "No items found.".
- **virtualized** (`boolean`, default: `false`) — Virtualizes (windows) the option list so only the rows in view are rendered,
keeping very large lists (thousands of options) fast. Rows are assumed to be a
uniform height, which is measured from the first option. Virtualization is
skipped for grouped lists, whose labels and separators break that assumption —
grouped lists are expected to be short and curated.

### Events

- **change** (`NordEvent`) — Dispatched when the committed value changes via user interaction.
- **input** (`NordEvent`) — Dispatched as the user types into the search input.
- **open** (`NordEvent`) — Dispatched when the listbox is opened.
- **close** (`NordEvent`) — Dispatched when the listbox is closed.
- **clear** (`ComboboxClearEvent`) — Dispatched when the value is cleared via the clear button or <code>clear()</code>.
- **create** (`ComboboxCreateEvent`) — Dispatched when the user chooses the "Create" affordance in a <code>creatable</code> combobox.

### Slots

- **start** — Optional slot used to place an icon or prefix at the start of the control.
- **end** — Optional slot used to place an icon or suffix at the end of the control.

### Methods

- **show** — `show() => void` — Show the listbox programmatically.
- **hide** — `hide() => void` — Hide the listbox programmatically.
- **focus** — `focus(options?: FocusOptions) => void` — Focus the control's input.

### CSS Custom Properties

- `--n-combobox-list-inline-size` — Controls the inline size, or width, of the dropdown list. Defaults to the width of the combobox control.
- `--n-combobox-block-size` — Controls the block size, or height, of the control. The medium default is <code>var(--n-space-xl)</code>; the s and l sizes scale from it.

### Dependencies

- `icon`
- `kbd`
- `tag`

<!--
Source: https://nordhealth.design/raw/components/combobox.md
-->
