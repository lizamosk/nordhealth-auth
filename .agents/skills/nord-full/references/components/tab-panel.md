# nord-tab-panel

> The panel which contains content that can be revealed using a tab
> in the tab group component.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use the tab panel component within the tab group component.
- Use both non-interactive and interactive elements within the contents of the tab panel.

> **Don't:** - Don't use the tab panel component outside of the tab group component.
- Don't obscure important information within a tab panel that isn't revealed by default.

---

## Content guidelines

When writing tab labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** My tasks

> **Don't:** My Tasks

Avoid unnecessary words and articles in tab labels, such as “the”, “an” or “a”:

> **Do:** Dashboard

> **Don't:** The dashboard

Avoid ending tab labels in punctuation:

> **Do:** Patients

> **Don't:** Patients.

Use as few words as possible to describe each tab label:

> **Do:** Payments

> **Don't:** Payments in your clinic

Avoid all caps for tab labels:

> **Do:** Dashboard

> **Don't:** DASHBOARD

---

## Additional considerations

- If the content contained within the tabs UI has significance or is important for the user to see, consider using a different form of presentation that doesn't obscure it.
- If there is a particular tab panel you wish to show out of order of the tabs UI itself consider using the `selected` option on the related tab component to select the tab but prevent the order of the tabs being affected.

## Examples

### Basic

```html
<nord-tab-panel>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi voluptatibus, culpa
        explicabo voluptate maxime a, cumque ea reprehenderit ad consequuntur veniam? Fuga impedit iste tenetur.
      </p>
    </nord-tab-panel>
```

## API Reference

### Slots

- **(default)** — The tab panel content.

<!--
Source: https://nordhealth.design/raw/components/tab-panel.md
-->
