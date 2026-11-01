# nord-message

> Message represents a specific item within a collection,
> such as notifications, tasks or conversations. Message
> can be placed directly inside a dropdown component.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Messages should always perform an action when clicked.
- The click action should navigate to a new page or provide more detail about the message.
- Mark unread messages as read on user interaction.

> **Don't:** - Don’t slot other components inside a message.

---

## Content guidelines

Message content should be clear, accurate and easy to understand:

> **Do:** Ariel Salminen arrived to clinic with Pixie cat.

> **Don't:** Patient arrived

When writing the message content, be concise. Keep content to 1 to 2 sentence:

> **Do:** You’ve reached the limit of 30 users included in your plan. Upgrade to add more.

> **Don't:** You have reached the user limit. Your clinic can only have a maximum of 30 users. To add more users, remove users you no longer need or upgrade your plan to add more.

When writing the notification content, always write it in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Ariel Salminen arrived to clinic with Pixie cat.

> **Don't:** Ariel Salminen Arrived To Clinic With Pixie Cat.

Always end in punctuation:

> **Do:** Ariel Salminen arrived to clinic with Pixie cat.

> **Don't:** Ariel Salminen arrived to clinic with Pixie cat

Avoid all caps for messages:

> **Do:** Nina Williams arrived to clinic with Norfryd

> **Don't:** NINA WILLIAMS ARRIVED TO CLINIC WITH NORFRYD

## Examples

### Basic

```html
<nord-message unread>
      Ariel Salminen arrived to clinic with Pixie cat.
      <span slot="footer">Just now at Nord Clinic</span>
    </nord-message>
    <nord-message unread>
      Nina Hallikainen arrived to clinic with Durante dog.
      <span slot="footer">20 minutes ago at Nord Clinic</span>
    </nord-message>
    <nord-message unread>
      David Darnes arrived to clinic with Norfryd cat.
      <span slot="footer">2 hours ago at Nord Clinic</span>
    </nord-message>
```

### Overview

```html
<nord-message unread>
      Ariel Salminen arrived to clinic with Pixie cat.
      <span slot="footer">Just now at Nord Clinic</span>
    </nord-message>
```

### Highlight

```html
<nord-message highlight unread>
      Ariel Salminen arrived to clinic with Pixie cat.
      <span slot="footer">Just now at Nord Clinic</span>
    </nord-message>
    <nord-message unread>
      Nina Hallikainen arrived to clinic with Durante dog.
      <span slot="footer">20 minutes ago at Nord Clinic</span>
    </nord-message>
    <nord-message unread>
      David Darnes arrived to clinic with Norfryd cat.
      <span slot="footer">2 hours ago at Nord Clinic</span>
    </nord-message>
```

### Links

```html
<nord-message unread href="#">
      Ariel Salminen arrived to clinic with Pixie cat.
      <span slot="footer">Just now at Nord Clinic</span>
    </nord-message>
    <nord-message unread href="#">
      Nina Hallikainen arrived to clinic with Durante dog.
      <span slot="footer">20 minutes ago at Nord Clinic</span>
    </nord-message>
    <nord-message unread href="#">
      David Darnes arrived to clinic with Norfryd cat.
      <span slot="footer">2 hours ago at Nord Clinic</span>
    </nord-message>
```

### Read

```html
<nord-message unread>
      Ariel Salminen arrived to clinic with Pixie cat.
      <span slot="footer">Just now at Nord Clinic</span>
    </nord-message>
    <nord-message>
      Nina Hallikainen arrived to clinic with Durante dog.
      <span slot="footer">20 minutes ago at Nord Clinic</span>
    </nord-message>
    <nord-message>
      David Darnes arrived to clinic with Norfryd cat.
      <span slot="footer">2 hours ago at Nord Clinic</span>
    </nord-message>
```

## API Reference

### Properties

- **href** (`string | undefined`) — The url the message should link to.
- **highlight** (`boolean | undefined`) — Highlight the message visually. This is meant for highlighting
a new message that just appeared. Highlight style should be removed
after the user has seen the message and there’s been a timeout of
e.g. 30 seconds.
- **unread** (`boolean | undefined`) — Mark the message as unread. By default messages are read.

### Slots

- **(default)** — The message content.
- **footer** — Used to place content after the message. Typically used for a timestamp.

### Methods

- **focus** — `focus(options?: FocusOptions) => void` — Programmatically move focus to the component.
- **blur** — `blur() => void` — Programmatically remove focus from the component.
- **click** — `click() => void` — Programmatically simulates a click on the component.

### CSS Custom Properties

- `--n-message-border-color` (default: `var(--n-color-border)`) — Controls the border color of the message, using our <a href="/tokens/#color">color tokens</a>.

### Dependencies

- `dropdown-item`

<!--
Source: https://nordhealth.design/raw/components/message.md
-->
