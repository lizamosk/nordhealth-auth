# nord-nav-group

> Navigation group includes all the actions or items in a single
> group and is used for grouping items into related categories.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Group navigation items into navigation groups based on related categories.
- Use group headings to clarify the category of a section.
- Use icons for all top level navigation items.

> **Don't:** - Don’t use for grouping other types of content.

---

## Content guidelines

When writing navigation item labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** My tasks

> **Don't:** My Tasks

Avoid unnecessary words and articles in item labels, such as “the”, “an” or “a”:

> **Do:** Change theme

> **Don't:** Change the theme

Avoid ending item labels in punctuation:

> **Do:** Switch user

> **Don't:** Switch user.

Use as few words as possible to describe each item label:

> **Do:** Payments

> **Don't:** Payments in your clinic

Avoid all caps for item labels and group titles:

> **Do:** Dashboard

> **Don't:** DASHBOARD

## Examples

### Basic

```html
<nord-nav-group class="n:max-inline-[220px]">
      <nord-nav-item href="#" icon="navigation-search">Search</nord-nav-item>
      <nord-nav-item href="#" icon="navigation-notifications">Notifications</nord-nav-item>
      <nord-nav-item href="#" icon="navigation-tasks">My tasks</nord-nav-item>
    </nord-nav-group>
```

### Nested Nav

```html
<nord-navigation>
      <nord-nav-group class="n:max-inline-[220px]">
        <nord-nav-item href="#">Dashboard</nord-nav-item>

        <nord-nav-item icon="navigation-reports">
          Reports
          <nord-nav-group slot="subnav">
            <nord-nav-item href="#">Payments</nord-nav-item>
            <nord-nav-item href="#" active>Disputes</nord-nav-item>
          </nord-nav-group>
        </nord-nav-item>
      </nord-nav-group>
    </nord-navigation>
```

### With Heading

```html
<nord-nav-group heading="Workspace" class="n:max-inline-[220px]">
      <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
      <nord-nav-item href="#" icon="navigation-payments">Payments</nord-nav-item>
      <nord-nav-item href="#" icon="navigation-reports">Reports</nord-nav-item>
      <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
    </nord-nav-group>
```

## API Reference

### Properties

- **heading** (`string | undefined`) — Heading and accessible label for the nav group

### Events

- **toggle** (`NordEvent`) — Dispatched whenever a nav item's state changes between open and closed.
- **activate** (`NordEvent`) — Dispatched whenever a nav item has been marked as active

### Slots

- **(default)** — The default slot used for the nav items.

### CSS Custom Properties

- `--n-nav-group-heading-display` (default: `block`) — Controls the <code>display</code> of the group's heading. Set to <code>none</code> to hide it — useful for a <code>slot="subnav"</code> group whose heading repeats the parent item's label inline; the heading is still shown in the rail flyout where it titles the projected list.

### Dependencies

- `icon`

<!--
Source: https://nordhealth.design/raw/components/nav-group.md
-->
