# nord-navigation

> Navigation is used to display the primary navigation in the sidebar
> of an application. Navigation includes a list of links that users
> use to move between sections of the application.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use for primary navigation items that perform an action when clicked. Each action should navigate to a URL or trigger another action like a modal overlay.
- Group navigation items into navigation groups based on related categories.
- Use group headings to clarify the category of a section.
- Use icons for all top level navigation items.

> **Don't:** - Don’t place a `<nav>` element inside the navigation component, as it already contains one internally.

---

## Closing rail-mode flyouts on selection

When the layout is collapsed to a rail (`collapse-mode="rail"` with the nav closed), a parent navigation item opens its subnav in a flyout. Selecting a leaf link inside that flyout does not close it automatically, because the click happens inside the flyout's own overlay.

Call `closeAllFlyouts()` on `<nord-navigation>` to close every open flyout in the tree without reaching into component shadow DOM. Wire a single handler at the navigation root:

```js
const navigation = document.querySelector('nord-navigation')

navigation.addEventListener('click', (event) => {
  const leaf = event.target.closest('nord-nav-item[href]')
  if (leaf) {
    navigation.closeAllFlyouts()
  }
})
```

Alternatively, set the `auto-dismiss-on-select` attribute on `<nord-navigation>` to close any open flyout automatically when a leaf item is activated:

```html
<nord-navigation auto-dismiss-on-select>
  <!-- nav items -->
</nord-navigation>
```

To close the flyout for a single item, call `closeFlyout()` on that `<nord-nav-item>` instead.

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

<style>

html pre.shiki code .szBVR, html code.shiki .szBVR{--shiki-default:#D73A49;--shiki-dark:#F97583}html pre.shiki code .sj4cs, html code.shiki .sj4cs{--shiki-default:#005CC5;--shiki-dark:#79B8FF}html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html pre.shiki code .s4XuR, html code.shiki .s4XuR{--shiki-default:#E36209;--shiki-dark:#FFAB70}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html pre.shiki code .s9eBZ, html code.shiki .s9eBZ{--shiki-default:#22863A;--shiki-dark:#85E89D}html pre.shiki code .sJ8bj, html code.shiki .sJ8bj{--shiki-default:#6A737D;--shiki-dark:#6A737D}

</style>

## Examples

### Basic

```html
<nord-navigation class="n:max-inline-[250px]">
      <nord-dropdown slot="header" expand>
        <nord-button slot="toggle" expand>
          <nord-avatar slot="start" variant="square">B</nord-avatar>
          Bath Clinic
        </nord-button>
        <nord-dropdown-group heading="laura.williams@nordhealth.com">
          <nord-dropdown-item>
            <nord-avatar slot="start" size="s" variant="square">B</nord-avatar>
            Bath Clinic
            <nord-icon slot="end" name="interface-checked"></nord-icon>
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-avatar slot="start" size="s" variant="square" class="n:[--n-avatar-color:var(--n-color-status-success)]">
              O
            </nord-avatar>
            Ocean Beach Clinic
          </nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-group>
          <nord-dropdown-item>Add another clinic</nord-dropdown-item>
          <nord-dropdown-item>Customize style</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>Sign out from all clinics</nord-dropdown-item>
      </nord-dropdown>
      <nord-nav-group heading="Workspace">
        <nord-nav-item active icon="navigation-dashboard">Dashboard</nord-nav-item>
        <nord-nav-item icon="navigation-payments">Payments</nord-nav-item>
        <nord-nav-item icon="navigation-reports">Reports</nord-nav-item>
        <nord-nav-item icon="navigation-settings">Settings</nord-nav-item>
      </nord-nav-group>
    </nord-navigation>
```

### Overview

```html
<nord-navigation class="n:max-inline-[250px]">
      <nord-nav-item href="#" icon="navigation-dashboard" active>Dashboard</nord-nav-item>
      <nord-nav-item href="#" icon="navigation-tasks">My tasks</nord-nav-item>
      <nord-nav-item href="#" icon="navigation-search">Search</nord-nav-item>
      <nord-nav-item href="#" icon="navigation-notifications">Notifications</nord-nav-item>
    </nord-navigation>
```

### Grouped

```html
<nord-navigation class="n:max-inline-[250px]">
      <nord-nav-item href="#" icon="navigation-dashboard" active>Dashboard</nord-nav-item>
      <nord-nav-group>
        <nord-nav-item href="#" icon="navigation-search">Search</nord-nav-item>
        <nord-nav-item href="#" icon="navigation-notifications">Notifications</nord-nav-item>
        <nord-nav-item href="#" icon="navigation-tasks">My tasks</nord-nav-item>
      </nord-nav-group>
    </nord-navigation>
```

### Complex

```html
<nord-navigation class="n:max-inline-[250px]">
      <nord-dropdown slot="header" expand>
        <nord-button slot="toggle" expand>
          <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
          Bath Clinic
        </nord-button>
        <nord-dropdown-group heading="laura.williams@nordhealth.com">
          <nord-dropdown-item>
            <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
            Bath Clinic
            <nord-icon slot="end" name="interface-checked"></nord-icon>
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-avatar
              slot="start"
              name="Ocean Beach Clinic"
              size="s"
              variant="square"
              class="n:[--n-avatar-color:var(--n-color-status-success)]"
            >
              O
            </nord-avatar>
            Ocean Beach Clinic
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-avatar
              slot="start"
              name="Park Animal Hospital"
              size="s"
              variant="square"
              class="n:[--n-avatar-color:var(--n-color-status-highlight)]"
            >
              P
            </nord-avatar>
            Park Animal Hospital
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-avatar
              slot="start"
              name="Balboa Pet Hospital"
              size="s"
              variant="square"
              class="n:[--n-avatar-color:var(--n-color-status-danger)]"
            >
              B
            </nord-avatar>
            Balboa Pet Hospital
          </nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-group>
          <nord-dropdown-item>Add another clinic</nord-dropdown-item>
          <nord-dropdown-item>Customize style</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>Sign out from all clinics</nord-dropdown-item>
      </nord-dropdown>
      <nord-nav-group>
        <nord-nav-item aria-describedby="complex-search" icon="navigation-search">Search</nord-nav-item>
        <nord-tooltip id="complex-search" position="inline-end">
          Search
          <nord-icon slot="shortcut" name="keyboard-option" label="Option key"></nord-icon>
          <span slot="shortcut">S</span>
        </nord-tooltip>
        <nord-nav-item icon="navigation-notifications" aria-describedby="complex-notifications" badge="12">
          Notifications
        </nord-nav-item>
        <nord-tooltip id="complex-notifications" position="inline-end">
          Notifications
          <nord-icon slot="shortcut" name="keyboard-option" label="Option key"></nord-icon>
          <span slot="shortcut">N</span>
        </nord-tooltip>
        <nord-nav-item icon="navigation-tasks" aria-describedby="complex-tasks">My tasks</nord-nav-item>
        <nord-tooltip id="complex-tasks" position="inline-end">
          My tasks
          <nord-icon slot="shortcut" name="keyboard-option" label="Option key"></nord-icon>
          <span slot="shortcut">M</span>
        </nord-tooltip>
      </nord-nav-group>
      <nord-nav-group heading="Workspace">
        <nord-nav-item href="#" icon="navigation-dashboard">Dashboard</nord-nav-item>
        <nord-nav-item icon="navigation-payments">
          Payments
          <nord-nav-group slot="subnav">
            <nord-nav-item href="#" active>All transactions</nord-nav-item>
            <nord-nav-item href="#">Payments</nord-nav-item>
            <nord-nav-item href="#">Disputes</nord-nav-item>
          </nord-nav-group>
        </nord-nav-item>
        <nord-nav-item icon="navigation-reports">
          Reports
          <nord-nav-group slot="subnav">
            <nord-nav-item href="#">Payments</nord-nav-item>
            <nord-nav-item href="#">Disputes</nord-nav-item>
            <nord-nav-item href="#">Payouts</nord-nav-item>
          </nord-nav-group>
        </nord-nav-item>
        <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
      </nord-nav-group>
      <nord-dropdown expand slot="footer">
        <nord-button slot="toggle" expand>
          <nord-avatar slot="start" aria-hidden="true" name="Laura Williams"></nord-avatar>
          Laura Williams
        </nord-button>
        <nord-dropdown-group>
          <nord-dropdown-item href="#">View profile</nord-dropdown-item>
          <nord-dropdown-item>Settings</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-group>
          <nord-dropdown-item>
            Show keyboard shortcuts
            <div slot="end" class="n:text-weaker n:text-xs">Cmd+K</div>
          </nord-dropdown-item>
          <nord-dropdown-item>Help & Support</nord-dropdown-item>
          <nord-dropdown-item>API</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>
          Sign out
          <nord-icon slot="end" name="interface-logout"></nord-icon>
        </nord-dropdown-item>
      </nord-dropdown>
    </nord-navigation>
```

### Initially Open Nav Item

```html
<nord-navigation class="n:max-inline-[250px]">
      <nord-dropdown slot="header" expand>
        <nord-button slot="toggle" expand>
          <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
          Bath Clinic
        </nord-button>
        <nord-dropdown-group heading="laura.williams@nordhealth.com">
          <nord-dropdown-item>
            <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
            Bath Clinic
            <nord-icon slot="end" name="interface-checked"></nord-icon>
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-avatar
              slot="start"
              name="Ocean Beach Clinic"
              size="s"
              variant="square"
              class="n:[--n-avatar-color:var(--n-color-status-success)]"
            >
              O
            </nord-avatar>
            Ocean Beach Clinic
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-avatar
              slot="start"
              name="Park Animal Hospital"
              size="s"
              variant="square"
              class="n:[--n-avatar-color:var(--n-color-status-highlight)]"
            >
              P
            </nord-avatar>
            Park Animal Hospital
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-avatar
              slot="start"
              name="Balboa Pet Hospital"
              size="s"
              variant="square"
              class="n:[--n-avatar-color:var(--n-color-status-danger)]"
            >
              B
            </nord-avatar>
            Balboa Pet Hospital
          </nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-group>
          <nord-dropdown-item>Add another clinic</nord-dropdown-item>
          <nord-dropdown-item>Customize style</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>Sign out from all clinics</nord-dropdown-item>
      </nord-dropdown>
      <nord-nav-group>
        <nord-nav-item aria-describedby="initially-open-nav-item-search" icon="navigation-search">Search</nord-nav-item>
        <nord-tooltip id="initially-open-nav-item-search" position="inline-end">
          Search
          <nord-icon slot="shortcut" name="keyboard-option" label="Option key"></nord-icon>
          <span slot="shortcut">S</span>
        </nord-tooltip>
        <nord-nav-item icon="navigation-notifications" aria-describedby="initially-open-nav-item-notifications" badge="12">
          Notifications
        </nord-nav-item>
        <nord-tooltip id="initially-open-nav-item-notifications" position="inline-end">
          Notifications
          <nord-icon slot="shortcut" name="keyboard-option" label="Option key"></nord-icon>
          <span slot="shortcut">N</span>
        </nord-tooltip>
        <nord-nav-item icon="navigation-tasks" aria-describedby="initially-open-nav-item-tasks">My tasks</nord-nav-item>
        <nord-tooltip id="initially-open-nav-item-tasks" position="inline-end">
          My tasks
          <nord-icon slot="shortcut" name="keyboard-option" label="Option key"></nord-icon>
          <span slot="shortcut">M</span>
        </nord-tooltip>
      </nord-nav-group>
      <nord-nav-group heading="Workspace">
        <nord-nav-item href="#" icon="navigation-dashboard">Dashboard</nord-nav-item>
        <nord-nav-item icon="navigation-payments">
          Payments
          <nord-nav-group slot="subnav">
            <nord-nav-item href="#" active>All transactions</nord-nav-item>
            <nord-nav-item href="#">Payments</nord-nav-item>
            <nord-nav-item href="#">Disputes</nord-nav-item>
          </nord-nav-group>
        </nord-nav-item>
        <nord-nav-item icon="navigation-reports" open>
          Reports
          <nord-nav-group slot="subnav">
            <nord-nav-item href="#">Payments</nord-nav-item>
            <nord-nav-item href="#">Disputes</nord-nav-item>
            <nord-nav-item href="#">Payouts</nord-nav-item>
          </nord-nav-group>
        </nord-nav-item>
        <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
      </nord-nav-group>
      <nord-dropdown expand slot="footer">
        <nord-button slot="toggle" expand>
          <nord-avatar slot="start" aria-hidden="true" name="Laura Williams"></nord-avatar>
          Laura Williams
        </nord-button>
        <nord-dropdown-group>
          <nord-dropdown-item href="#">View profile</nord-dropdown-item>
          <nord-dropdown-item>Settings</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-group>
          <nord-dropdown-item>
            Show keyboard shortcuts
            <div slot="end" class="n:text-weaker n:text-xs">Cmd+K</div>
          </nord-dropdown-item>
          <nord-dropdown-item>Help & Support</nord-dropdown-item>
          <nord-dropdown-item>API</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>
          Sign out
          <nord-icon slot="end" name="interface-logout"></nord-icon>
        </nord-dropdown-item>
      </nord-dropdown>
    </nord-navigation>
```

### Sticky Footer

```html
<nord-layout>
      <nord-navigation sticky-footer slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" name="interface-checked"></nord-icon>
            </nord-dropdown-item>
            <nord-dropdown-item>
              <nord-avatar
                slot="start"
                name="Ocean Beach Clinic"
                size="s"
                variant="square"
                class="n:[--n-avatar-color:var(--n-color-status-success)]"
              >
                O
              </nord-avatar>
              Ocean Beach Clinic
            </nord-dropdown-item>
            <nord-dropdown-item>
              <nord-avatar
                slot="start"
                name="Park Animal Hospital"
                size="s"
                variant="square"
                class="n:[--n-avatar-color:var(--n-color-status-highlight)]"
              >
                P
              </nord-avatar>
              Park Animal Hospital
            </nord-dropdown-item>
            <nord-dropdown-item>
              <nord-avatar
                slot="start"
                name="Balboa Pet Hospital"
                size="s"
                variant="square"
                class="n:[--n-avatar-color:var(--n-color-status-danger)]"
              >
                B
              </nord-avatar>
              Balboa Pet Hospital
            </nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>Add another clinic</nord-dropdown-item>
            <nord-dropdown-item>Customize style</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-item>Sign out from all clinics</nord-dropdown-item>
        </nord-dropdown>

        <nord-nav-group>
          <nord-nav-item icon="medical-heart-rate">
            Patient care
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#" active>Dashboard</nord-nav-item>
              <nord-nav-item href="#">Triage</nord-nav-item>
              <nord-nav-item href="#">Laboratory</nord-nav-item>
              <nord-nav-item href="#">Diagnostic imaging</nord-nav-item>
              <nord-nav-item href="#">Patient referrals</nord-nav-item>
              <nord-nav-item href="#">Health plans</nord-nav-item>
              <nord-nav-item href="#">E-prescriptions</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item open icon="interface-calendar">
            Calendar
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">Appointments</nord-nav-item>
              <nord-nav-item href="#">Shifts</nord-nav-item>
              <nord-nav-item href="#">Reminders</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item open icon="generic-shipping">
            Inventory
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">Item bundles</nord-nav-item>
              <nord-nav-item href="#">Item lists & groups</nord-nav-item>
              <nord-nav-item href="#">Orders</nord-nav-item>
              <nord-nav-item href="#">Stock</nord-nav-item>
              <nord-nav-item href="#">Wholesalers</nord-nav-item>
              <nord-nav-item href="#">Controlled medicines</nord-nav-item>
              <nord-nav-item href="#">Item price change</nord-nav-item>
              <nord-nav-item href="#">Stock level & items</nord-nav-item>
              <nord-nav-item href="#">Item purchase</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item open icon="navigation-reports">
            Reports
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">Performance</nord-nav-item>
              <nord-nav-item href="#">Clinic statistics</nord-nav-item>
              <nord-nav-item href="#">Business intelligence</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item open icon="generic-bank">
            Finances
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">Invoices</nord-nav-item>
              <nord-nav-item href="#">Estimates</nord-nav-item>
              <nord-nav-item href="#">Insurance claims</nord-nav-item>
              <nord-nav-item href="#">Commissions</nord-nav-item>
              <nord-nav-item href="#">Discount invoices</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>

        <nord-nav-item slot="footer" href="#" badge="4" icon="interface-customer-support">Get support</nord-nav-item>
      </nord-navigation>

      <nord-top-bar slot="top-bar">
        <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>
      </nord-top-bar>

      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end" size="s">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end">Export data as Spreadsheet</nord-tooltip>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Description</h2>
          <nord-banner variant="info"> This example has “sticky footer” enabled for the navigation sidebar.</nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
```

## API Reference

### Properties

- **sticky-footer** (`boolean`, default: `false`) — Controls whether the navigations's footer has sticky positioning.
- **auto-dismiss-on-select** (`boolean`, default: `false`) — Opt-in: when set, any open rail-mode subnav flyout in this navigation
closes automatically once one of its leaf items is activated (for example,
when a user clicks a link inside a flyout). Off by default — existing
flyout behavior is unchanged unless this attribute is present.

### Events

- **toggle** (`NordEvent`) — Dispatched whenever a nav item's state changes between open and closed.
- **activate** (`NordEvent`) — Dispatched whenever a nav item has been marked as active

### Slots

- **(default)** — The main section of the sidebar, for holding nav components.
- **header** — The top section of the sidebar.
- **footer** — The bottom section of the sidebar.

### CSS Custom Properties

- `--n-navigation-background-color` (default: `var(--n-color-nav-surface)`) — Controls the background color of the navigation element.
- `--n-navigation-scroll-shadow-color-start` (default: `rgb(0, 0, 0, 0.1)`) — Color of the scroll-affordance shadow shown at the top of the scroll area (below the header) when <code>sticky-footer</code> is set. Set to <code>transparent</code> to disable.
- `--n-navigation-scroll-shadow-color-end` (default: `rgb(0, 0, 0, 0.1)`) — Color of the scroll-affordance shadow shown at the bottom of the scroll area (above the footer) when <code>sticky-footer</code> is set. Set to <code>transparent</code> to disable.
- `--n-navigation-scroll-mask` (default: `none`) — <code>mask-image</code> applied to the scrollable area when <code>sticky-footer</code> is set. Use with the shadow colors set to <code>transparent</code> to replace the dark scroll-shadow with a soft content fade at the edges. Example: <code>linear-gradient(to bottom, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)</code>.
- `--n-navigation-padding-block` (default: `var(--n-space-m)`) — Block-axis (top/bottom) padding of the <code>&lt;nav&gt;</code> element that wraps the slotted nav groups.
- `--n-navigation-padding-inline` (default: `var(--n-space-m)`) — Inline-axis (start/end) padding of the <code>&lt;nav&gt;</code> element that wraps the slotted nav groups.
- `--n-navigation-footer-padding-block` (default: `var(--n-space-s)`) — Block-axis (top/bottom) padding inside the footer slot when <code>sticky-footer</code> is set. Has no visual effect when the footer slot is empty (slot is hidden in that case).
- `--n-navigation-footer-padding-inline` (default: `var(--n-navigation-padding-inline)`) — Inline-axis (start/end) padding inside the footer slot when <code>sticky-footer</code> is set. Defaults to <code>--n-navigation-padding-inline</code> so the footer aligns with the nav content unless overridden. Has no visual effect when the footer slot is empty.

<!--
Source: https://nordhealth.design/raw/components/navigation.md
-->
