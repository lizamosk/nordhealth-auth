# nord-segmented-control

> Segmented control is used to pick one choice from a set of
> closely related choices, and immediately apply that selection.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use segmented control to allow users to pick one choice from a set of closely related choices, and immediately apply that selection.
- Favor segmented control or [radio component](/components/radio/) over a select component when there are a small number of options. This reduces the number of clicks a user has to make, increasing efficiency.
- Segmented control items are grouped by their `name` attribute. Therefore, it is crucial that the same `name` is used for a group of segmented control items.
- Give each segmented control item within a group a unique `value`.

> **Don't:** - Don’t place interactive content (buttons, links etc) inside the label.
- Don’t use when a user can select more than one option. In this case, use a [checkbox](/components/checkbox/) or [selectable tag](/components/tag/?example=selectable) instead.
- Don’t use for “accepting terms of service” and similar functionality. Use a [checkbox](/components/checkbox/) instead.
- When you have more than 5 options to choose from. Consider using a [select](/components/select/) instead.

---

## Content guidelines

Segmented control labels should be clear, accurate and predictable. It should be possible for the user to understand what they are enabling or disabling:

> **Do:** User settings

> **Don't:** Option 1

When writing segmented control labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** My tasks

> **Don't:** My Tasks

Avoid ending in punctuation if it’s a single sentence, word, or a fragment:

> **Do:** Blue

> **Don't:** Blue.

Do not use commas or semicolons at the end of each line

> **Do:** Patient

> **Don't:** Patient;

---

## Additional considerations

- Once a segmented control item has been selected, users cannot return to having no items selected without refreshing their browser window. Therefore, you should always make sure one of the items is pre-selected.

## Examples

### Basic

```html
<nord-visually-hidden id="basic-label">Time frame</nord-visually-hidden>
    <nord-segmented-control aria-labelledby="basic-label">
      <nord-segmented-control-item size="s" label="Day" name="group" value="day" checked></nord-segmented-control-item>
      <nord-segmented-control-item size="s" label="Week" name="group" value="week"></nord-segmented-control-item>
      <nord-segmented-control-item size="s" label="Month" name="group" value="month"></nord-segmented-control-item>
    </nord-segmented-control>
```

### Checked

```html
<nord-stack>
      <nord-visually-hidden id="checked-group-1">Time frame</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="checked-group-1">
        <nord-segmented-control-item size="s" label="Day" name="group-1" value="day" checked></nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Week" name="group-1" value="week"></nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Month" name="group-1" value="month"></nord-segmented-control-item>
      </nord-segmented-control>

      <nord-visually-hidden id="checked-group-2">Time frame</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="checked-group-2">
        <nord-segmented-control-item size="s" label="Day" name="group-2" value="day"></nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Week" name="group-2" value="week" checked>
        </nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Month" name="group-2" value="month"></nord-segmented-control-item>
      </nord-segmented-control>

      <nord-visually-hidden id="checked-group-3">Time frame</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="checked-group-3">
        <nord-segmented-control-item size="s" label="Day" name="group-3" value="day"></nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Week" name="group-3" value="week"></nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Month" name="group-3" value="month" checked>
        </nord-segmented-control-item>
      </nord-segmented-control>
    </nord-stack>
```

### Disabled

```html
<nord-visually-hidden id="disabled-label">Time frame</nord-visually-hidden>
    <nord-segmented-control aria-labelledby="disabled-label">
      <nord-segmented-control-item disabled size="s" label="Day" name="group" value="day" checked>
      </nord-segmented-control-item>
      <nord-segmented-control-item disabled size="s" label="Week" name="group" value="week"></nord-segmented-control-item>
      <nord-segmented-control-item disabled size="s" label="Month" name="group" value="month"></nord-segmented-control-item>
    </nord-segmented-control>
```

### Full Width With Icons

```html
<nord-visually-hidden id="full-width-with-icons-label">View mode</nord-visually-hidden>
    <nord-segmented-control aria-labelledby="full-width-with-icons-label" expand>
      <nord-segmented-control-item name="group-2" value="list" checked>
        <label slot="label">
          <nord-icon name="text-list"></nord-icon>
          List
        </label>
      </nord-segmented-control-item>
      <nord-segmented-control-item name="group-2" value="grid">
        <label slot="label">
          <nord-icon name="interface-grid"></nord-icon>
          Grid
        </label>
      </nord-segmented-control-item>
      <nord-segmented-control-item name="group-2" value="map">
        <label slot="label">
          <nord-icon name="generic-location"></nord-icon>
          Map
        </label>
      </nord-segmented-control-item>
    </nord-segmented-control>
```

### Full Width

```html
<nord-visually-hidden id="full-width-label">Time frame</nord-visually-hidden>
    <nord-segmented-control aria-labelledby="full-width-label" expand>
      <nord-segmented-control-item label="Day" name="group" value="day" checked></nord-segmented-control-item>
      <nord-segmented-control-item label="Week" name="group" value="week"></nord-segmented-control-item>
      <nord-segmented-control-item label="Month" name="group" value="month"></nord-segmented-control-item>
    </nord-segmented-control>
```

### Grouped With Stack

```html
<nord-stack gap="s" direction="horizontal" wrap>
      <nord-select size="s" name="page-size" value="25" label="Label" hide-label>
        <option value="columns">Columns</option>
        <option value="rows">Rows</option>
      </nord-select>

      <nord-input size="s" type="search" placeholder="Search" label="Search" hide-label></nord-input>

      <nord-visually-hidden id="grouped-with-stack-label">Time frame</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="grouped-with-stack-label">
        <nord-segmented-control-item size="s" label="Day" name="group" value="day" checked></nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Week" name="group" value="week"></nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Month" name="group" value="month"></nord-segmented-control-item>
      </nord-segmented-control>

      <nord-button variant="dashed" size="s">
        <nord-icon slot="start" name="interface-filter"></nord-icon>
        Species
      </nord-button>

      <nord-divider direction="vertical"></nord-divider>

      <nord-button variant="dashed" size="s">
        <nord-icon slot="start" name="interface-add"></nord-icon>
        Add filter
      </nord-button>
    </nord-stack>
```

### Icons Only

```html
<nord-stack>
      <nord-visually-hidden id="icons-only-group-1">View mode</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="icons-only-group-1">
        <nord-segmented-control-item size="s" name="group-1" value="list" checked>
          <label slot="label">
            <nord-icon label="list" name="text-list"></nord-icon>
          </label>
        </nord-segmented-control-item>
        <nord-segmented-control-item size="s" name="group-1" value="grid">
          <label slot="label">
            <nord-icon label="grid" name="interface-grid"></nord-icon>
          </label>
        </nord-segmented-control-item>
        <nord-segmented-control-item size="s" name="group-1" value="map">
          <label slot="label">
            <nord-icon label="map" name="generic-location"></nord-icon>
          </label>
        </nord-segmented-control-item>
      </nord-segmented-control>

      <nord-visually-hidden id="icons-only-group-2">View mode</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="icons-only-group-2">
        <nord-segmented-control-item name="group-2" value="list" checked>
          <label slot="label">
            <nord-icon label="list" name="text-list"></nord-icon>
          </label>
        </nord-segmented-control-item>
        <nord-segmented-control-item name="group-2" value="grid">
          <label slot="label">
            <nord-icon label="grid" name="interface-grid"></nord-icon>
          </label>
        </nord-segmented-control-item>
        <nord-segmented-control-item name="group-2" value="map">
          <label slot="label">
            <nord-icon label="map" name="generic-location"></nord-icon>
          </label>
        </nord-segmented-control-item>
      </nord-segmented-control>
    </nord-stack>
```

### Inside Form

```html
<form action="#">
      <nord-stack direction="horizontal" gap="s">
        <nord-visually-hidden id="inside-form-label">Time frame</nord-visually-hidden>
        <nord-segmented-control aria-labelledby="inside-form-label">
          <nord-segmented-control-item size="s" label="Author" name="group" value="author" checked>
          </nord-segmented-control-item>
          <nord-segmented-control-item size="s" label="Label" name="group" value="label"></nord-segmented-control-item>
          <nord-segmented-control-item size="s" label="Assignee" name="group" value="assignee">
          </nord-segmented-control-item>
        </nord-segmented-control>
        <nord-button size="s" variant="primary">Submit</nord-button>
      </nord-stack>
    </form>
```

### Size

```html
<nord-stack>
      <nord-visually-hidden id="size-group-1">Time frame</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="size-group-1">
        <nord-segmented-control-item size="s" label="Day" name="group-1" value="1" checked></nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Week" name="group-1" value="2"></nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Month" name="group-1" value="3"></nord-segmented-control-item>
      </nord-segmented-control>

      <nord-visually-hidden id="size-group-2">Time frame</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="size-group-2">
        <nord-segmented-control-item label="Day" name="group-2" value="day" checked></nord-segmented-control-item>
        <nord-segmented-control-item label="Week" name="group-2" value="week"></nord-segmented-control-item>
        <nord-segmented-control-item label="Month" name="group-2" value="month"></nord-segmented-control-item>
      </nord-segmented-control>

      <nord-visually-hidden id="size-group-3">Time frame</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="size-group-3">
        <nord-segmented-control-item size="l" label="Day" name="group-3" value="day" checked></nord-segmented-control-item>
        <nord-segmented-control-item size="l" label="Week" name="group-3" value="week"></nord-segmented-control-item>
        <nord-segmented-control-item size="l" label="Month" name="group-3" value="month"></nord-segmented-control-item>
      </nord-segmented-control>
    </nord-stack>
```

### With Icons

```html
<nord-stack>
      <nord-visually-hidden id="with-icons-group-1">View mode</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="with-icons-group-1">
        <nord-segmented-control-item size="s" name="group-1" value="list" checked>
          <label slot="label">
            <nord-icon name="text-list"></nord-icon>
            List
          </label>
        </nord-segmented-control-item>
        <nord-segmented-control-item size="s" name="group-1" value="grid">
          <label slot="label">
            <nord-icon name="interface-grid"></nord-icon>
            Grid
          </label>
        </nord-segmented-control-item>
        <nord-segmented-control-item size="s" name="group-1" value="map">
          <label slot="label">
            <nord-icon name="generic-location"></nord-icon>
            Map
          </label>
        </nord-segmented-control-item>
      </nord-segmented-control>

      <nord-visually-hidden id="with-icons-group-2">View mode</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="with-icons-group-2">
        <nord-segmented-control-item name="group-2" value="list" checked>
          <label slot="label">
            <nord-icon name="text-list"></nord-icon>
            List
          </label>
        </nord-segmented-control-item>
        <nord-segmented-control-item name="group-2" value="grid">
          <label slot="label">
            <nord-icon name="interface-grid"></nord-icon>
            Grid
          </label>
        </nord-segmented-control-item>
        <nord-segmented-control-item name="group-2" value="map">
          <label slot="label">
            <nord-icon name="generic-location"></nord-icon>
            Map
          </label>
        </nord-segmented-control-item>
      </nord-segmented-control>

      <nord-visually-hidden id="with-icons-group-3">View mode</nord-visually-hidden>
      <nord-segmented-control aria-labelledby="with-icons-group-3">
        <nord-segmented-control-item size="l" name="group-3" value="list" checked>
          <label slot="label">
            <nord-icon name="text-list"></nord-icon>
            List
          </label>
        </nord-segmented-control-item>
        <nord-segmented-control-item size="l" name="group-3" value="grid">
          <label slot="label">
            <nord-icon name="interface-grid"></nord-icon>
            Grid
          </label>
        </nord-segmented-control-item>
        <nord-segmented-control-item size="l" name="group-3" value="map">
          <label slot="label">
            <nord-icon name="generic-location"></nord-icon>
            Map
          </label>
        </nord-segmented-control-item>
      </nord-segmented-control>
    </nord-stack>
```

### With Label

```html
<nord-stack direction="horizontal" align-items="center" gap="s">
      <label id="with-label-label" class="n-font-size-s">Filter by</label>
      <nord-segmented-control aria-labelledby="with-label-label">
        <nord-segmented-control-item size="s" label="Author" name="group" value="author" checked>
        </nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Label" name="group" value="label"></nord-segmented-control-item>
        <nord-segmented-control-item size="s" label="Assignee" name="group" value="assignee"></nord-segmented-control-item>
      </nord-segmented-control>
    </nord-stack>
```

## API Reference

### Properties

- **expand** (`boolean`, default: `false`) — Controls whether the segmented control expands to fill the width of its container.

### Events

- **change** (`NordEvent`) — Fired whenever a segmented control item has been checked.

### Slots

- **(default)** — Default slot.

<!--
Source: https://nordhealth.design/raw/components/segmented-control.md
-->
