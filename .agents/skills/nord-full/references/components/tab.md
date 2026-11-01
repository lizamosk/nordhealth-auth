# nord-tab

> The interactive tab button for use within the tab group component.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use the tab component within the tab group component.
- Use the `selected` option to signify if the tab is selected.
- Use text, icons and other non-interactive content within the tab.

> **Don't:** - Don’t use tabs to navigate to other pages. Use navigation or links instead.
- Don't use the tab component outside of the tab group component.
- Don't add interactive elements, such as buttons and links, inside the tab component.

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
- If there is a particular section you wish to show out of order of the tabs UI itself consider using the `selected` option to select the tab but prevent the order of the tabs being affected.

## Examples

### Basic

```html
<nord-tab-group label="Title">
      <nord-tab slot="tab">Overview</nord-tab>
      <nord-tab-panel>A summary of your workspace, including recent activity and key stats.</nord-tab-panel>
      <nord-tab slot="tab">Terminals</nord-tab>
      <nord-tab-panel>Manage the terminals connected to your account.</nord-tab-panel>
      <nord-tab slot="tab">Stores</nord-tab>
      <nord-tab-panel>Review the stores linked to your organisation.</nord-tab-panel>
    </nord-tab-group>
```

### Overview

```html
<nord-tab-group label="Workspace">
      <nord-tab slot="tab">Overview</nord-tab>
      <nord-tab-panel>Workspace stats and recent activity.</nord-tab-panel>
      <nord-tab slot="tab">Projects</nord-tab>
      <nord-tab-panel>Milestones and upcoming deadlines.</nord-tab-panel>
      <nord-tab slot="tab">Account</nord-tab>
      <nord-tab-panel>Profile and preferences.</nord-tab-panel>
    </nord-tab-group>
```

### Sticky

```html
<nord-tab-group label="Title" sticky padding="l">
      <nord-tab slot="tab">Overview</nord-tab>
      <nord-tab-panel>
        <nord-card>
          <h3 slot="header">Activity</h3>
          A summary of recent workspace activity.
        </nord-card>
      </nord-tab-panel>
      <nord-tab slot="tab">Terminals</nord-tab>
      <nord-tab-panel>
        <nord-card>
          <h3 slot="header">Terminals</h3>
          Manage the terminals connected to your account.
        </nord-card>
      </nord-tab-panel>
    </nord-tab-group>
```

## API Reference

### Properties

- **selected** (`boolean`, default: `false`) — Whether the tab item is selected

### Slots

- **(default)** — The tab button content.

### CSS Custom Properties

- `--n-tab-color` (default: `var(--n-color-text-weak)`) — Controls the text color of the tab, using our <a href="/tokens/#color">color tokens</a>.
- `--n-tab-font-weight` (default: `var(--n-font-weight)`) — Controls the font weight of the tab, using our <a href="/tokens/#font">font tokens</a>.

<!--
Source: https://nordhealth.design/raw/components/tab.md
-->
