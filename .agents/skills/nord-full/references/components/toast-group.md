# nord-toast-group

> Toast group is used to position and style a group of toasts, whilst ensuring they are announced by screen readers.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use in combination with [Toast](/components/toast/) so that toasts get styled and announced to screen readers correctly.
- Add as close to the bottom of the document as possible, ideally near the body closing tag, to maintain correct stacking order.

> **Don't:** - Don’t use for grouping anything other than toast components

---

## Content guidelines

Toast content should be clear, accurate and understandable by the user:

> **Do:** Message sent

> **Don't:** Your message has been sent

When writing the toast content, use the {noun} + {verb} content formula:

> **Do:** Patient created

> **Don't:** Your patient has been successfully updated

Use a maximum of 3 words when writing the toast content:

> **Do:** Product updated

> **Don't:** Your product was updated just now

When writing the toast content, always write it in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Message sent

> **Don't:** Message Sent

Avoid unnecessary words and articles in the toast content, such as “the”, “an” or “a”:

> **Do:** Changes saved

> **Don't:** The changes were saved

Never end in punctuation:

> **Do:** Message sent

> **Don't:** Message sent.

---

## Additional considerations

- Toasts are complicated from an accessibility perspective. Whilst they are a convenient UI pattern for messaging, they present difficulties for keyboard or screen reader users. Therefore careful consideration should be given as to whether a toast is the correct choice.
- If the message cannot be conveyed in 3 words or less, consider re-wording. If the message cannot be shortened any further, consider choosing a different pattern than toast.

## Examples

### Basic

```html
<nord-button variant="primary">Add toast</nord-button>

    <nord-toast-group>
      <nord-toast>Message sent</nord-toast>
    </nord-toast-group>
```

## API Reference

### Events

- **dismiss** (`NordEvent`) — Fired when a toast is dismissed (via user action or auto-dismiss), and its exit animation has completed. This event should be used to remove the dismissed toast from the DOM.

### Slots

- **(default)** — Default slot in which to place toasts.

<!--
Source: https://nordhealth.design/raw/components/toast-group.md
-->
