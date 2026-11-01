# nord-footer

> The footer is a block of designated space for providing additional information or actions that are positioned below the main content.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use the footer component to show actions for a stepped workflow.
- Use the footer component to provide additional information or actions that are positioned below the main content.
- The footer component can also be used within Nord to provide a layer of actions or information at the bottom of a component. It’s currently used internally in the [modal](/components/modal/) and [drawer components](/components/drawer/).
- When using the footer component within the [layout component](/components/layout/?example=footer), you can make the footer sticky by using the provided `stickyFooter` property of the layout component. [View an example](/components/layout/?example=footer).

> **Don't:** - Don’t overcrowd the footer with too many actions or information.
- Don’t nest the footer deeply and restrict its available space.
- Don’t add large amounts of content or long paragraphs. Aim for actions that are short and concise.

---

## Content guidelines

Footer action labels should be clear, accurate and predictable. It should be possible for the user to understand what will happen when they click a button:

> **Do:** Create client

> **Don't:** Click here

When writing button labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** My tasks

> **Don't:** My Tasks

Avoid unnecessary words and articles in button labels, such as “the”, “an” or “a”:

> **Do:** Add item

> **Don't:** Add an item

## Examples

### Basic

```html
<nord-footer>
      <nord-button-group variant="spaced">
        <nord-button>Default</nord-button>
        <nord-button variant="primary">Primary</nord-button>
      </nord-button-group>
    </nord-footer>
```

### Complex

```html
<style>.footer-info {
    color: var(--n-color-text-weaker);
    font-size: var(--n-font-size-s);
    min-width: calc(var(--n-space-xxl) * 2);
    flex: 1;
  }</style>
    <nord-footer>
      <div class="footer-info">Additional footer content</div>
      <nord-button-group variant="spaced">
        <nord-button>Default</nord-button>
        <nord-button variant="primary">Primary</nord-button>
      </nord-button-group>
    </nord-footer>
```

### Size

```html
<nord-footer size="s">
      <nord-button-group variant="spaced">
        <nord-button size="s">Default</nord-button>
        <nord-button size="s" variant="primary">Primary</nord-button>
      </nord-button-group>
    </nord-footer>
```

## API Reference

### Properties

- **size** (`'m' | 's'`, default: `'m'`) — Controls the size of the footer component.

### Slots

- **(default)** — The footer content.

### CSS Custom Properties

- `--n-footer-padding-inline` (default: `var(--n-space-l)`) — Controls the inline padding around the footer’s main slot, using <a href="/tokens/#space">spacing tokens</a>.
- `--n-footer-box-shadow` (default: `var(--n-box-shadow-header)`) — Controls the box shadow of the footer, using <a href="/tokens/#box-shadow">box shadow tokens</a>.
- `--n-footer-background-color` (default: `var(--n-color-surface)`) — Controls the background color of the footer, using <a href="/tokens/#color">color tokens</a>.

<!--
Source: https://nordhealth.design/raw/components/footer.md
-->
