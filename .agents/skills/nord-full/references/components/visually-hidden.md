# nord-visually-hidden

> Visually hidden is used when an element needs to be available
> to assistive technologies like screen readers, but be otherwise
> hidden.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to hide text visually from the screen, but keep it available to assistive technologies, such as screen readers.

> **Don't:** - Don’t use for hiding interactive content.

## Examples

### Basic

```html
<nord-visually-hidden>I am hidden</nord-visually-hidden>
```

### Doc Overview

```html
<nord-button square>
      <nord-icon name="navigation-search"></nord-icon>
      <nord-visually-hidden>Search</nord-visually-hidden>
    </nord-button>
```

### Doc Screen Reader Context

```html
<p>
      Results
      <nord-visually-hidden>for the current search query</nord-visually-hidden>
    </p>
```

## API Reference

### Slots

- **(default)** — The visually hidden content.

<!--
Source: https://nordhealth.design/raw/components/visually-hidden.md
-->
