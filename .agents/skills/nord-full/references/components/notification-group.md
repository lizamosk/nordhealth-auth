# nord-notification-group

> Notification group is used to position and style a group of notifications.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use in combination with [Notification](/components/notification/) so that notifications get styled and positioned correctly.
- Add as close to the start of your main content area as possible.

> **Don't:** - Don’t use for grouping anything other than notification components

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
      <nord-notification>
        <h2>New feature available</h2>
        <p>We’ve introduced a quick way to navigate between app views, actions, and more using a new command menu.</p>
        <a href="#">Read more</a>
      </nord-notification>
    </nord-notification-group>
```

## API Reference

### Events

- **dismiss** (`NordEvent`) — Fired when a notification is dismissed, and its exit animation has completed. This event should be used to remove the dismissed notification from the DOM.

### Slots

- **(default)** — Default slot in which to place notifications.

<!--
Source: https://nordhealth.design/raw/components/notification-group.md
-->
