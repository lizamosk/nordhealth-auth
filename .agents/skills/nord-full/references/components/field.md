# nord-field

> Field is the wrapper for a single form control. It lays out a
> <a href="/components/field-label/">Field Label</a>, a control (such as an
> <a href="/components/input/">Input</a>), an optional
> <a href="/components/field-description/">Field Description</a> and a
> <a href="/components/field-error/">Field Error</a> with consistent spacing.
> 
> Combine several together in a <a href="/components/field-group/">Field Group</a> and
> group related groups with a <a href="/components/field-set/">Field Set</a>.
> 
> The Field shares its state with the control through context: a Nord control
> placed inside a Field suppresses its own built-in label/hint/error and takes
> its accessible name, description and invalid/disabled state from the Field.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Connect each [Field Label](/components/field-label/) to its control with the `for` attribute so clicking the label focuses the control and the control gets an accessible name.
- Wrap related fields in a [Field Set](/components/field-set/) with a [Field Legend](/components/field-legend/) to group them under a legend.
- Mark a Field as `invalid` when showing a [Field Error](/components/field-error/) so the error styling and announcement stay in sync.

> **Don't:** - Don’t omit the `for` attribute on a [Field Label](/components/field-label/), as the control would then lack an accessible name.
- Don’t put more than one control in a single Field; use a [Field Group](/components/field-group/) for multiple fields.
- Don’t reach for a Field around a Nord control that already has its own label, hint and error unless you need the extra composition.

## Examples

### Usage

```html
<nord-fieldset label="Profile" hint="This appears on invoices and emails." class="n:container-xxs">
      <nord-field-group>
        <nord-field>
          <nord-field-label for="usage-name">Full name</nord-field-label>
          <nord-input id="usage-name" hide-label placeholder="Evil Rabbit"></nord-input>
          <nord-field-description>This appears on invoices and emails.</nord-field-description>
        </nord-field>
        <nord-field invalid>
          <nord-field-label for="usage-username">Username</nord-field-label>
          <nord-input id="usage-username" hide-label></nord-input>
          <nord-field-error>Choose another username.</nord-field-error>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-toggle id="usage-newsletter" hide-label></nord-toggle>
          <nord-field-label for="usage-newsletter">Subscribe to the newsletter</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-fieldset>
```

### Input

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="input-username">Username</nord-field-label>
      <nord-input id="input-username" hide-label placeholder="laurawilliams"></nord-input>
      <nord-field-description>Choose a unique username for your account.</nord-field-description>
    </nord-field>
```

### Disabled

```html
<nord-field disabled class="n:container-xxs">
      <nord-field-label for="disabled-username">Username</nord-field-label>
      <nord-input id="disabled-username" value="laurawilliams"></nord-input>
      <nord-field-description>Choose a unique username for your account.</nord-field-description>
    </nord-field>
```

### Textarea

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="textarea-feedback">Feedback</nord-field-label>
      <nord-textarea
        id="textarea-feedback"
        hide-label
        placeholder="Your feedback helps us improve..."
      ></nord-textarea>
      <nord-field-description>Share your thoughts about our service.</nord-field-description>
    </nord-field>
```

### Select

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="select-department">Department</nord-field-label>
      <nord-select id="select-department" hide-label placeholder="Select a department">
        <option value="engineering">Engineering</option>
        <option value="design">Design</option>
        <option value="marketing">Marketing</option>
        <option value="support">Support</option>
      </nord-select>
      <nord-field-description>Choose the department you belong to.</nord-field-description>
    </nord-field>
```

### Horizontal

```html
<nord-field-group class="n:container-xxs">
      <nord-field orientation="horizontal">
        <nord-toggle id="horizontal-newsletter" hide-label></nord-toggle>
        <nord-field-label for="horizontal-newsletter">Subscribe to the newsletter</nord-field-label>
      </nord-field>
      <nord-field orientation="horizontal">
        <nord-checkbox id="horizontal-remember" hide-label></nord-checkbox>
        <nord-field-label for="horizontal-remember">Remember me</nord-field-label>
      </nord-field>
    </nord-field-group>
```

### Field Group

```html
<nord-field-group class="n:container-xxs">
      <nord-field>
        <nord-field-label for="group-name">Name</nord-field-label>
        <nord-input id="group-name" hide-label placeholder="Laura Williams"></nord-input>
      </nord-field>
      <nord-field>
        <nord-field-label for="group-email">Email</nord-field-label>
        <nord-input id="group-email" type="email" hide-label placeholder="hi@example.com"></nord-input>
      </nord-field>
      <nord-field-separator></nord-field-separator>
      <nord-field orientation="horizontal">
        <nord-toggle id="group-marketing" hide-label></nord-toggle>
        <nord-field-label for="group-marketing">Receive marketing emails</nord-field-label>
      </nord-field>
    </nord-field-group>
```

### Choice Card

```html
<nord-field-set class="n:container-xxs">
      <nord-field-legend>Appointment type</nord-field-legend>
      <nord-field-description>Choose how you'd like to see this patient.</nord-field-description>
      <nord-field-group>
        <nord-field-label for="choice-clinic" class="n:border n:border-[var(--n-color-border)] n:rounded-[var(--n-border-radius-m)] n:p-m">
          <nord-field orientation="horizontal">
            <nord-field-content>
              <nord-field-title>In-clinic visit</nord-field-title>
              <nord-field-description>See the patient at the clinic.</nord-field-description>
            </nord-field-content>
            <nord-checkbox id="choice-clinic" hide-label></nord-checkbox>
          </nord-field>
        </nord-field-label>
        <nord-field-label for="choice-video" class="n:border n:border-[var(--n-color-border)] n:rounded-[var(--n-border-radius-m)] n:p-m">
          <nord-field orientation="horizontal">
            <nord-field-content>
              <nord-field-title>Video consultation</nord-field-title>
              <nord-field-description>Consult remotely over video.</nord-field-description>
            </nord-field-content>
            <nord-checkbox id="choice-video" hide-label></nord-checkbox>
          </nord-field>
        </nord-field-label>
      </nord-field-group>
    </nord-field-set>
```

### Responsive

```html
<div class="n:inline-full n:container-m">
      <form>
        <nord-field-set>
          <nord-field-legend>Profile</nord-field-legend>
          <nord-field-description>Fill in your profile information.</nord-field-description>
          <nord-field-separator></nord-field-separator>
          <nord-field-group class="n:[container-type:inline-size]">
            <nord-field orientation="responsive">
              <nord-field-content>
                <nord-field-label for="responsive-name">Name</nord-field-label>
                <nord-field-description>Provide your full name for identification</nord-field-description>
              </nord-field-content>
              <nord-input id="responsive-name" hide-label placeholder="Laura Williams"></nord-input>
            </nord-field>
            <nord-field-separator></nord-field-separator>
            <nord-field orientation="responsive">
              <nord-field-content>
                <nord-field-label for="responsive-message">Message</nord-field-label>
                <nord-field-description>You can write your message here. Keep it short, preferably under 100 characters.</nord-field-description>
              </nord-field-content>
              <nord-textarea id="responsive-message" hide-label placeholder="Hello, world!"></nord-textarea>
            </nord-field>
            <nord-field-separator></nord-field-separator>
            <nord-field orientation="horizontal">
              <nord-button type="submit" variant="primary">Submit</nord-button>
              <nord-button type="button">Cancel</nord-button>
            </nord-field>
          </nord-field-group>
        </nord-field-set>
      </form>
    </div>
```

### Validation

```html
<nord-field-group class="n:container-xxs">
      <nord-field invalid>
        <nord-field-label for="validation-username">Username</nord-field-label>
        <nord-input
          id="validation-username"
          hide-label
          value="laurawilliams"
        ></nord-input>
        <nord-field-error>Choose another username.</nord-field-error>
      </nord-field>
      <nord-field invalid>
        <nord-field-label for="validation-password">Password</nord-field-label>
        <nord-input
          id="validation-password"
          type="password"
          hide-label
        ></nord-input>
        <nord-field-error>Password must be at least 8 characters long.</nord-field-error>
      </nord-field>
    </nord-field-group>
```

### Overview

```html
<nord-field-set class="n:container-xxs">
      <nord-field-legend>Profile</nord-field-legend>
      <nord-field-description>Visible to colleagues across your clinic.</nord-field-description>
      <nord-field-group>
        <nord-field>
          <nord-field-label for="overview-name">Full name</nord-field-label>
          <nord-input id="overview-name" hide-label placeholder="Laura Williams"></nord-input>
          <nord-field-description>Visible to colleagues across your clinic.</nord-field-description>
        </nord-field>
        <nord-field invalid>
          <nord-field-label for="overview-username">Username</nord-field-label>
          <nord-input id="overview-username" hide-label></nord-input>
          <nord-field-error>Choose another username.</nord-field-error>
        </nord-field>
        <nord-field orientation="horizontal">
          <nord-toggle id="overview-newsletter" hide-label></nord-toggle>
          <nord-field-label for="overview-newsletter">Subscribe to the newsletter</nord-field-label>
        </nord-field>
      </nord-field-group>
    </nord-field-set>
```

### Combobox

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="cb-clinic">Clinic</nord-field-label>
      <nord-combobox id="cb-clinic" hide-label placeholder="Select a clinic" .options=${clinicOptions}></nord-combobox>
      <nord-field-description>Choose the clinic this record belongs to.</nord-field-description>
    </nord-field>
```

### Slider

```html
<nord-field class="n:container-xxs">
      <nord-field-label for="range-volume">Volume</nord-field-label>
      <nord-range id="range-volume" hide-label value="7" min="0" max="10"></nord-range>
      <nord-field-description>Set the playback volume.</nord-field-description>
    </nord-field>
```

### Checkbox

```html
<nord-field orientation="horizontal" class="n:container-xxs">
      <nord-checkbox id="cb-remember" hide-label></nord-checkbox>
      <nord-field-label for="cb-remember">Remember me</nord-field-label>
    </nord-field>
```

### Radios

```html
<nord-field-set class="n:container-xxs">
      <nord-field-legend>Subscription plan</nord-field-legend>
      <nord-field-description>Choose the plan that suits you.</nord-field-description>
      <nord-stack direction="vertical">
        <nord-radio name="plan" value="monthly" label="Monthly"></nord-radio>
        <nord-radio name="plan" value="annual" label="Annual" checked></nord-radio>
        <nord-radio name="plan" value="lifetime" label="Lifetime"></nord-radio>
      </nord-stack>
    </nord-field-set>
```

### Switch

```html
<nord-field orientation="horizontal" class="n:container-xxs">
      <nord-toggle id="sw-newsletter" hide-label></nord-toggle>
      <nord-field-label for="sw-newsletter">Subscribe to the newsletter</nord-field-label>
    </nord-field>
```

## API Reference

### Properties

- **orientation** (`'vertical' | 'horizontal' | 'responsive'`, default: `'vertical'`) — The layout of the field.

- <code>vertical</code> (default) stacks the label, control and helper text.
- <code>horizontal</code> places the label and control side by side, vertically centered.
- <code>responsive</code> lays out horizontally in a wide enough container, otherwise vertical.
- **invalid** (`boolean`, default: `false`) — Marks the field as invalid, enabling error styling hooks. Also reflected as
<code>data-invalid</code> and propagated to the control via context.
- **disabled** (`boolean`, default: `false`) — Disables the field and, via context, its control. Reflected as <code>data-disabled</code>.

### Slots

- **(default)** — Default slot for the field parts (label, control, content, description, error).

### CSS Custom Properties

- `--n-field-gap` (default: `var(--n-space-s)`) — Controls the spacing between the field parts, using our <a href="/tokens/#space">spacing tokens</a>.

<!--
Source: https://nordhealth.design/raw/components/field.md
-->
