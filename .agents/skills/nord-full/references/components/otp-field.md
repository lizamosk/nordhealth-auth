# nord-otp-field

> OTP Field is a segmented one-time-code input: it renders <code>length</code> individual
> character cells plus a visually-hidden input that holds the full value, enabling
> SMS / keychain autofill and native <code>pattern</code>/<code>required</code> validation. Typing fills
> and auto-advances, Backspace clears and moves back, the arrow keys navigate, and
> pasting a code distributes its characters across the cells.
> 
> OTP Field is a control only — it has no built-in label, hint or error. Compose
> it inside a <a href="/components/field/">Field</a> with a <a href="/components/field-label/">Field Label</a>
> (connected with <code>for</code>) to give it an accessible name, helper text and an error
> message, exactly like a native input.

## Usage

OTP Field is a **control only** — it has no built-in label, hint or error. Pair it with a [Field](/components/field/) to give it a label, helper text and an error message, exactly like a native input. Connect the [Field Label](/components/field-label/) to the OTP field with the `for` attribute so it gets an accessible name and click-to-focus. The label names the **first cell** (the OTP field forwards its accessible name onto it), while the remaining cells announce their position (for example, "Character 2 of 6").

Import the OTP field and the Field parts you need — each import registers its custom element:

```js
import '@nordhealth/components/lib/OtpField'
import '@nordhealth/components/lib/Field'
import '@nordhealth/components/lib/FieldLabel'
import '@nordhealth/components/lib/FieldDescription'
import '@nordhealth/components/lib/FieldError'
```

Then compose the Field around the OTP field:

```html
<nord-field>
  <nord-field-label for="verification-code">Verification code</nord-field-label>
  <nord-otp-field id="verification-code" length="6"></nord-otp-field>
  <nord-field-description>Enter the 6-character code we sent to your device.</nord-field-description>
  <!-- show a Field Error and mark the Field invalid instead, when validation fails -->
</nord-field>
```

OTP Field renders `length` individual character cells plus a visually-hidden input that holds the full value. The hidden input carries `autocomplete="one-time-code"`, so SMS and keychain one-time-code autofill works, and it carries the native `pattern`, `minlength`, `maxlength` and `required` so form validation works. Typing fills and auto-advances, Backspace clears and moves back, the arrow keys navigate, and pasting a code distributes its characters across the cells.

OTP Field renders in the light DOM, so you can style it directly with your own CSS or Tailwind utilities, and size it with the `size` attribute (`s` | `m` | `l`) or the `--n-otp-field-*` custom properties.

Set `name` to submit the value with a form. The value submits under the host `name`; the inner cell inputs and the hidden input carry no `name`, so the browser never double-submits.

```html
<form>
  <nord-field>
    <nord-field-label for="otp">Verification code</nord-field-label>
    <nord-otp-field id="otp" name="verificationCode" length="6" required></nord-otp-field>
  </nord-field>
</form>
```

Listen for the `complete` event to react when every cell is filled — for example, to submit the form automatically.

```js
document.querySelector('nord-otp-field').addEventListener('complete', (event) => {
  console.log('Code entered:', event.value)
})
```

> **Do:** - Use for short verification or one-time codes, such as 2FA, email confirmation, or recovery codes.
- Pair it with a [Field](/components/field/) and a [Field Label](/components/field-label/) connected with `for`, so it has an accessible name, helper text and an error message.
- Use `type="alphanumeric"` for codes that mix letters and digits, and `type="numeric"` for digit-only codes.
- Set `autocomplete="one-time-code"` (the default) so SMS and keychain autofill works.
- Use `mask` when the code should be obscured on shared screens.

> **Don't:** - Don't use for free-form or long text entry, see [Input](/components/input/) instead.
- Don't add a Field Label without a `for` pointing at the OTP field's `id`, or the first cell will have no accessible name.
- Don't use for passwords or secrets longer than a few characters, see [Input](/components/input/) instead.
- Don't change `length` to mismatch the code the user is expected to enter — every cell should map to one character of the code.

<style>

html pre.shiki code .szBVR, html code.shiki .szBVR{--shiki-default:#D73A49;--shiki-dark:#F97583}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .s9eBZ, html code.shiki .s9eBZ{--shiki-default:#22863A;--shiki-dark:#85E89D}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sJ8bj, html code.shiki .sJ8bj{--shiki-default:#6A737D;--shiki-dark:#6A737D}html pre.shiki code .s4XuR, html code.shiki .s4XuR{--shiki-default:#E36209;--shiki-dark:#FFAB70}

</style>

## Examples

### Overview

```html
<nord-otp-field label="Verification code" hint="Enter the 6-character code we sent to your device." hint-below id="otp-overview" length="6"></nord-otp-field>
```

### Alphanumeric

```html
<nord-otp-field label="Recovery code" hint="Accept letters and numbers for backup codes such as A7C9XZ." hint-below id="otp-alpha" length="6" type="alphanumeric"></nord-otp-field>
```

### Grouped

```html
<nord-otp-field label="Verification code" id="otp-grouped" length="6" group-size="3"></nord-otp-field>
```

### Custom Normalize

```html
<nord-field id="otp-normalize-field" class="n:inline-[20rem] n:max-inline-full">
      <nord-field-label for="otp-normalize">Recovery code</nord-field-label>
      <nord-otp-field id="otp-normalize" length="6" type="alphanumeric"></nord-otp-field>
      <nord-field-description>Letters and digits only. Letters are converted to uppercase.</nord-field-description>
      <span data-otp-status role="status" aria-live="polite" class="n:text-weaker n:text-s"></span>
    </nord-field>
```

### Masked

```html
<nord-otp-field label="Access code" hint="Use mask to obscure the code on shared screens." hint-below id="otp-masked" length="6" mask></nord-otp-field>
```

### Form Integration

```html
<form id="otp-verify-form" class="n:container-xxs">
      <nord-stack gap="m">
        <nord-field>
          <nord-field-label for="otp-form">Verification code</nord-field-label>
          <nord-otp-field id="otp-form" name="verificationCode" length="6" required></nord-otp-field>
          <nord-field-description>Enter the 6-character code we sent to your device.</nord-field-description>
        </nord-field>
        <nord-button type="submit" variant="primary">Verify</nord-button>
        <span data-otp-output role="status" aria-live="polite" class="n:text-weaker n:text-s"></span>
      </nord-stack>
    </form>
```

### Invalid

```html
<nord-otp-field label="Verification code" error="That code is incorrect. Please try again." id="otp-invalid" length="6" invalid></nord-otp-field>
```

### Disabled

```html
<nord-otp-field label="Verification code" id="otp-disabled" length="6" value="123456" disabled></nord-otp-field>
```

### Readonly

```html
<nord-otp-field label="Verification code" id="otp-readonly" length="6" value="123456" readonly></nord-otp-field>
```

### Placeholder

```html
<nord-otp-field label="Verification code" hint="Placeholder hints help indicate how many characters to enter." hint-below id="otp-placeholder-doc" length="6" placeholder="•"></nord-otp-field>
```

### Right To Left

```html
<nord-otp-field label="رمز التحقق" id="otp-rtl-doc" length="6"></nord-otp-field>
```

### Standalone

```html
<nord-otp-field label="Verification code" hint="Check your email for the code." hint-below></nord-otp-field>
```

### Field

```html
<nord-field>
      <nord-field-label for="code">Verification code</nord-field-label>
      <nord-otp-field id="code"></nord-otp-field>
      <nord-field-description>Check your email for the code.</nord-field-description>
    </nord-field>
```

## API Reference

### Properties

- **length** (`number`, default: `6`) — The number of OTP cells. Must be a positive integer.
- **type** (`OtpFieldType`, default: `'numeric'`) — Controls the allowed characters, <code>inputmode</code> and <code>pattern</code>. <code>numeric</code> accepts
digits; <code>alphanumeric</code> accepts letters and digits.
- **readonly** (`boolean`, default: `false`) — Prevents the user from changing the value while keeping navigation and focus.
- **mask** (`boolean`, default: `false`) — Obscures each cell (renders <code>type="password"</code>) for use on shared screens.
- **placeholder** (`string | undefined`) — Placeholder character or string shown in every empty cell.
- **invalid** (`boolean`, default: `false`) — Marks the field invalid, applying error styling and <code>aria-invalid</code> to every
cell and the hidden input. Pair with a <code>nord-field-error</code> in the Field.
- **autocomplete** (`string`, default: `'one-time-code'`) — The autocomplete token applied to the first cell and the hidden input (all
other cells get <code>autocomplete="off"</code>). Defaults to <code>one-time-code</code> to enable
SMS / keychain OTP autofill.
- **group-size** (`number`, default: `0`) — Renders a decorative separator after every N cells (for example, <code>3</code> shows
<code>123-456</code>). <code>0</code> disables grouping. The separator is <code>aria-hidden</code> and does
not affect the value or navigation.
- **value** (`string`, default: `''`) — The OTP value, for example <code>'123456'</code>. Whitespace is stripped, characters are
filtered by <code>type</code>, and the result is clamped to <code>length</code>. Set programmatically
to prefill.
- **size** (`'s' | 'm' | 'l'`, default: `'m'`) — The size of the component.
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

### Events

- **input** (`NordEvent`) — Dispatched whenever the OTP value changes through user interaction (typing, Backspace/Delete, paste, autofill).
- **change** (`NordEvent`) — Dispatched alongside <code>input</code> when the committed value changes via user interaction.
- **complete** (`OtpFieldCompleteEvent`) — Dispatched after the value updates when every cell becomes filled.
- **value-invalid** (`OtpFieldInvalidEvent`) — Dispatched when typed or pasted text contained characters rejected by <code>type</code>.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Focus the field by moving focus into its active cell.

### CSS Custom Properties

- `--n-otp-field-gap` (default: `var(--n-space-s)`) — Gap between cells (and between groups when <code>group-size</code> is used).
- `--n-otp-field-cell-size` (default: `var(--n-space-xl)`) — Controls the block-size and inline-size of each square cell. When unset, size maps to the shared control block sizes.
- `--n-otp-field-background` (default: `var(--n-color-surface)`) — Cell background.
- `--n-otp-field-border-color` (default: `var(--n-color-border-strong)`) — Cell border color (resting).
- `--n-otp-field-border-radius` (default: `var(--n-border-radius-s)`) — Cell corner radius.
- `--n-otp-field-font-size` (default: `var(--n-font-size-m)`) — Cell character font size.

<!--
Source: https://nordhealth.design/raw/components/otp-field.md
-->
