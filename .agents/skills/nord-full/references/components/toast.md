# nord-toast

> Toasts are non-disruptive messages that appear in the interface
> to provide quick, at-a-glance feedback on the outcome of an action.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use for short messages that confirm an action taken by a user.
- Use for ephemeral status updates.
- Use in combination with [Toast group](/components/toast-group) so that toasts get styled and announced to screen readers correctly.

> **Don't:** - Don’t use toasts for critical information that user needs to act on. Consider using a [Notification](/components/notification) instead.
- Don’t rely on users seeing toasts. Toasts are transient and should not be used for critical messages.
- Don’t place interactive content in toasts. Assistive technology like screen readers will not convey any semantics when announcing toast messages.
- Don’t use for error messages unless absolutely necessary. Try to favor a [Banner](/components/banner/) for error messaging instead.

---

## Content guidelines

Toast content should be clear, accurate and easy to understand:

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

### Customize Auto Dismiss

```html
<nord-button variant="primary">Add toast</nord-button>

    <nord-toast-group>
      <nord-toast auto-dismiss="30000">This toast will auto-dismiss after 30s, rather than the default 10s</nord-toast>
    </nord-toast-group>
```

### Variants

```html
<nord-button-group>
      <nord-button id="add-default" variant="primary">Add default toast</nord-button>
      <nord-button id="add-danger" variant="primary">Add danger toast</nord-button>
    </nord-button-group>

    <nord-toast-group>
      <nord-toast>Changes saved</nord-toast>
      <nord-toast variant="danger">No internet connection</nord-toast>
    </nord-toast-group>
```

### Error

```html
<nord-button variant="primary">Add toast</nord-button>

    <nord-toast-group>
      <nord-toast variant="danger">No internet connection</nord-toast>
    </nord-toast-group>
```

## API Reference

### Properties

- **variant** (`'default' | 'danger'`, default: `'default'`) — The style variant of the toast.
- **auto-dismiss** (`number`, default: `10000`) — Timeout in milliseconds before the toast is automatically dismissed.

### Events

- **dismiss** (`NordEvent`) — Fired when the toast is dismissed (via user action or auto-dismiss), and its exit animation has completed. This event should be used to remove the dismissed toast from the DOM.

### Slots

- **(default)** — Default slot used for the toast text/message.

### Dependencies

- `icon`

<!--
Source: https://nordhealth.design/raw/components/toast.md
-->
