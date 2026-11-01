# nord-notification

> Notifications provide important information that requires action or acknowledgement.
> A notification is displayed until the user dismisses it.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use for short messages that describe the purpose of the notification.
- Use for important updates that require user action/attention.
- Provide a single call to action within the notification.
- Use in combination with [Notification group](/components/notification-group) so that notifications get styled and positioned correctly.

> **Don't:** - Don’t use for transient or unimportant messages. Consider using a [Toast](/components/toast) instead.
- Don't remove a notification until a user has explicitly dismissed, or acted on the notification.
- Don’t use for error messages unless absolutely necessary. Try to favor a [Banner](/components/banner/) for error messaging instead.

---

## Content guidelines

Notification content should be clear, accurate and easy to understand:

> **Do:** Ariel Salminen arrived to clinic with Pixie cat.

> **Don't:** Patient arrived

When writing the notification content, be concise. Keep content to 1 to 2 sentence:

> **Do:** You’ve reached the limit of 30 users included in your plan. Upgrade to add more.

> **Don't:** You have reached the user limit. Your clinic can only have a maximum of 30 users. To add more users, remove users you no longer need or upgrade your plan to add more.

When writing the notification content, always write it in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Ariel Salminen arrived to clinic with Pixie cat.

> **Don't:** Ariel Salminen Arrived To Clinic With Pixie Cat.

Always end in punctuation:

> **Do:** Ariel Salminen arrived to clinic with Pixie cat.

> **Don't:** Ariel Salminen arrived to clinic with Pixie cat

Action link labels in notifications should be clear, accurate and predictable. It should be possible for the user to understand what will happen when they click a button:

> **Do:** Start consultation

> **Don't:** Click here

When writing action link labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Start consultation

> **Don't:** Start Consultation

Avoid unnecessary words and articles in action link labels, such as “the”, “an” or “a”:

> **Do:** Add item

> **Don't:** Add an item

## Examples

### Basic

```html
<nord-notification-group>
      <nord-notification>
        <h2>Patient arrived</h2>
        <p>Ariel Salminen arrived to clinic with Pixie cat.</p>
        <a href="#">Start consultation</a>
      </nord-notification>
    </nord-notification-group>
```

### Custom Icon

```html
<nord-notification-group>
      <nord-notification>
        <nord-icon slot="icon" name="generic-pet-paw"></nord-icon>
        <h2>Patient arrived</h2>
        <p>Ariel Salminen arrived to clinic with Pixie cat.</p>
        <a href="#">Start consultation</a>
      </nord-notification>
    </nord-notification-group>
```

## API Reference

### Events

- **dismiss** (`NordEvent`) — Fired when the notification is dismissed, and its exit animation has completed. This event should be used to remove the dismissed notification from the DOM.

### Slots

- **(default)** — Default slot used for the notification text/message.
- **icon** — Slot used for the notification icon.

### Dependencies

- `stack`
- `icon`

<!--
Source: https://nordhealth.design/raw/components/notification.md
-->
