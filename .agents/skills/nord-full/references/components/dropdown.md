# nord-dropdown

> Dropdown menu displays a list of actions or selectable options for
> a user. Dropdown uses popout component internally to create
> the overlay functionality.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Dropdown menus are typically used when you have 5-15 items to choose from. They’re used for navigation or commands, where an action is initiated based on the selection.
- When organizing dropdown menu items, sort the list in a logical order by putting the most selected option at the top.
- Use for a “more” menu, where the control contains an icon.
- Use for user profiles, where the control is an avatar.
- Use in conjunction with the [dropdown item](/components/dropdown-item/) and [dropdown group](/components/dropdown-group/) components.

> **Don't:** - Don't use for form inputs or selects, use the [select component](/components/select/) or [input component](/components/input/) instead.
- Don't use for hiding primary actions since they should be visible by default.
- Don't nest elements or components other than the [dropdown item](/components/dropdown-item/) and [dropdown group](/components/dropdown-group/) components. Consider using the [popout component](/components/popout/) when creating custom UI.
- Don't use `always-floating` property for long lists or complex content that benefits from full-screen focus.

---

## Content guidelines

Dropdown items should be always written in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Create user

> **Don't:** Create User

Dropdown items should always lead with a strong verb that encourages action. Use the `{verb}+{noun}` format except in the case of common actions like Save, Close or Cancel:

> **Do:** Edit row

> **Don't:** Editing options

Avoid unnecessary words and articles in dropdown items, such as “the”, “an” or “a”:

> **Do:** Change theme

> **Don't:** Change the theme

Avoid ending dropdown items in punctuation:

> **Do:** Switch user

> **Don't:** Switch user.

Avoid all caps for dropdown items:

> **Do:** Rename

> **Don't:** RENAME

Keep dropdown items to a single line of text:

> **Do:** Change theme

> **Don't:** Change the theme

of the veterinary application.

---

## Additional considerations

- Consider using the `alwaysFloating` property for compact dropdown menus that work well in a small floating container.

## Dismissing when another overlay opens

An open dropdown closes automatically when a `nord-modal` opens, so the modal is the topmost surface. This is driven by the public `nord-dismiss-overlays` event — see [Modal → Dismissing other overlays](/components/modal/#dismissing-other-overlays) for details and how your own overlays can trigger the same behaviour.

## Examples

### Always Floating

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:[margin-bottom:calc(var(--n-space-xxl)_*_3)]"
    >
      <nord-dropdown size="s" always-floating>
        <nord-button slot="toggle">Menu</nord-button>
        <nord-dropdown-item>My profile</nord-dropdown-item>
        <nord-dropdown-item>Account Settings</nord-dropdown-item>
        <nord-dropdown-item>Change password</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### Badge As Toggle

```html
<nord-stack direction="horizontal" justify-content="center">
      <nord-dropdown size="s">
        <nord-button size="s" variant="plain" slot="toggle">
          <nord-badge variant="success" class="toggle">
            <nord-icon name="interface-checked-small"></nord-icon>
            Discharged
          </nord-badge>
        </nord-button>
        <nord-dropdown-item href="#">Waiting for consultation</nord-dropdown-item>
        <nord-dropdown-item>Consultation</nord-dropdown-item>
        <nord-dropdown-item>Arrived</nord-dropdown-item>
        <nord-dropdown-item>Upcoming</nord-dropdown-item>
        <nord-dropdown-item>Cancelled</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### Basic

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:[margin-bottom:calc(var(--n-space-xxl)_*_3)]"
    >
      <nord-dropdown size="s">
        <nord-button slot="toggle">Menu</nord-button>
        <nord-dropdown-item href="#">View profile</nord-dropdown-item>
        <nord-dropdown-item>Settings</nord-dropdown-item>
        <nord-dropdown-item>Show keyboard shortcuts</nord-dropdown-item>
        <nord-dropdown-item>Help & Support</nord-dropdown-item>
        <nord-dropdown-item>API</nord-dropdown-item>
        <nord-dropdown-item>Sign out</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### Clinic Switcher

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
    </nord-navigation>
```

### Complex

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:[margin-bottom:calc(var(--n-space-xxl)_*_4)]"
    >
      <nord-dropdown>
        <nord-button size="s" slot="toggle">
          <nord-visually-hidden>Menu</nord-visually-hidden>
          <nord-icon size="s" name="interface-menu-small"></nord-icon>
        </nord-button>
        <nord-dropdown-group heading="Account">
          <nord-dropdown-item href="#">
            <nord-icon slot="start" name="user-single"></nord-icon>
            View profile
            <nord-icon slot="end" name="interface-checked"></nord-icon>
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-icon slot="start" name="navigation-settings"></nord-icon>
            Settings
          </nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-group>
          <nord-dropdown-item>
            <nord-icon slot="start" name="generic-keyboard"></nord-icon>
            Show keyboard shortcuts
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-icon slot="start" name="interface-help"></nord-icon>
            Help & Support
          </nord-dropdown-item>
          <nord-dropdown-item>
            <nord-icon slot="start" name="file-script"></nord-icon>
            API
          </nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>
          Sign out
          <nord-icon slot="end" name="interface-logout"></nord-icon>
        </nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### Grouping

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:[margin-bottom:calc(var(--n-space-xxl)_*_4)]"
    >
      <nord-dropdown>
        <nord-button slot="toggle">Menu</nord-button>
        <nord-dropdown-group heading="Account">
          <nord-dropdown-item href="#">View profile</nord-dropdown-item>
          <nord-dropdown-item>Settings</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-group>
          <nord-dropdown-item>Show keyboard shortcuts</nord-dropdown-item>
          <nord-dropdown-item>Help & Support</nord-dropdown-item>
          <nord-dropdown-item>API</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>Sign out</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### Inline Size

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:[margin-bottom:calc(var(--n-space-xxl)_*_3)]"
    >
      <nord-dropdown size="s">
        <nord-button slot="toggle">Small</nord-button>
        <nord-dropdown-item>Item 1</nord-dropdown-item>
        <nord-dropdown-item>Item 2</nord-dropdown-item>
        <nord-dropdown-item>Item 3</nord-dropdown-item>
      </nord-dropdown>
      <nord-dropdown size="m">
        <nord-button slot="toggle">Medium</nord-button>
        <nord-dropdown-item>Item 1</nord-dropdown-item>
        <nord-dropdown-item>Item 2</nord-dropdown-item>
        <nord-dropdown-item>Item 3</nord-dropdown-item>
      </nord-dropdown>
      <nord-dropdown size="l">
        <nord-button slot="toggle">Large</nord-button>
        <nord-dropdown-item>Item 1</nord-dropdown-item>
        <nord-dropdown-item>Item 2</nord-dropdown-item>
        <nord-dropdown-item>Item 3</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### Maximum Block Size

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:[margin-bottom:calc(var(--n-space-xxl)_*_3)]"
    >
      <nord-dropdown>
        <nord-button slot="toggle">Default</nord-button>
        <nord-dropdown-item>Item 1</nord-dropdown-item>
        <nord-dropdown-item>Item 2</nord-dropdown-item>
        <nord-dropdown-item>Item 3</nord-dropdown-item>
        <nord-dropdown-item>Item 4</nord-dropdown-item>
        <nord-dropdown-item>Item 5</nord-dropdown-item>
        <nord-dropdown-item>Item 6</nord-dropdown-item>
        <nord-dropdown-item>Item 7</nord-dropdown-item>
        <nord-dropdown-item>Item 8</nord-dropdown-item>
        <nord-dropdown-item>Item 9</nord-dropdown-item>
        <nord-dropdown-item>Item 10</nord-dropdown-item>
        <nord-dropdown-item>Item 11</nord-dropdown-item>
        <nord-dropdown-item>Item 12</nord-dropdown-item>
        <nord-dropdown-item>Item 13</nord-dropdown-item>
        <nord-dropdown-item>Item 14</nord-dropdown-item>
        <nord-dropdown-item>Item 15</nord-dropdown-item>
      </nord-dropdown>
      <nord-dropdown class="n:[--n-dropdown-max-block-size:200px]">
        <nord-button slot="toggle">Custom</nord-button>
        <nord-dropdown-item>Item 1</nord-dropdown-item>
        <nord-dropdown-item>Item 2</nord-dropdown-item>
        <nord-dropdown-item>Item 3</nord-dropdown-item>
        <nord-dropdown-item>Item 4</nord-dropdown-item>
        <nord-dropdown-item>Item 5</nord-dropdown-item>
        <nord-dropdown-item>Item 6</nord-dropdown-item>
        <nord-dropdown-item>Item 7</nord-dropdown-item>
        <nord-dropdown-item>Item 8</nord-dropdown-item>
        <nord-dropdown-item>Item 9</nord-dropdown-item>
        <nord-dropdown-item>Item 10</nord-dropdown-item>
        <nord-dropdown-item>Item 11</nord-dropdown-item>
        <nord-dropdown-item>Item 12</nord-dropdown-item>
        <nord-dropdown-item>Item 13</nord-dropdown-item>
        <nord-dropdown-item>Item 14</nord-dropdown-item>
        <nord-dropdown-item>Item 15</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### Position And Alignment

```html
<style>
      body {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30ch, max-content));
        justify-content: center;
        gap: var(--n-space-m);
      }
    </style>
    <nord-dropdown expand>
      <nord-button slot="toggle" expand>Default</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="start">
      <nord-button slot="toggle" expand>align="start"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="end">
      <nord-button slot="toggle" expand>align="end"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand position="block-end">
      <nord-button slot="toggle" expand>position="block-end"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand position="block-start">
      <nord-button slot="toggle" expand>position="block-start"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand position="inline-start">
      <nord-button slot="toggle" expand>position="inline-start"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand position="inline-end">
      <nord-button slot="toggle" expand>position="inline-end"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="start" position="block-end">
      <nord-button slot="toggle" expand>align="start" position="block-end"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="start" position="block-start">
      <nord-button slot="toggle" expand>align="start" position="block-start"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="start" position="inline-start">
      <nord-button slot="toggle" expand>align="start" position="inline-start"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="start" position="inline-end">
      <nord-button slot="toggle" expand>align="start" position="inline-end"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="end" position="block-end">
      <nord-button slot="toggle" expand>align="end" position="block-end"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="end" position="block-start">
      <nord-button slot="toggle" expand>align="end" position="block-start"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="end" position="inline-start">
      <nord-button slot="toggle" expand>align="end" position="inline-start"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="end" position="inline-end">
      <nord-button slot="toggle" expand>align="end" position="inline-end"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand position="auto">
      <nord-button slot="toggle" expand>position="auto"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="start" position="auto">
      <nord-button slot="toggle" expand>align="start" position="auto"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
    <nord-dropdown expand align="end" position="auto">
      <nord-button slot="toggle" expand>align="end" position="auto"</nord-button>
      <nord-dropdown-item>View profile</nord-dropdown-item>
      <nord-dropdown-item>Save changes</nord-dropdown-item>
    </nord-dropdown>
```

### Position

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:[margin-top:calc(var(--n-space-xxl)_*_3)]"
    >
      <nord-dropdown position="inline-end" align="end">
        <nord-button slot="toggle">Open top right</nord-button>
        <nord-dropdown-group heading="Account">
          <nord-dropdown-item href="#">View profile</nord-dropdown-item>
          <nord-dropdown-item>Settings</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-group>
          <nord-dropdown-item>Show keyboard shortcuts</nord-dropdown-item>
          <nord-dropdown-item>Help & Support</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>Sign out</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### With Offset

```html
<nord-stack direction="horizontal" gap="l" justify-content="center" style="margin-bottom: var(--n-space-xxl)">
      <nord-dropdown position="block-end" side-offset="24">
        <nord-button slot="toggle">side-offset</nord-button>
        <nord-dropdown-item>Option 1</nord-dropdown-item>
        <nord-dropdown-item>Option 2</nord-dropdown-item>
        <nord-dropdown-item>Option 3</nord-dropdown-item>
      </nord-dropdown>
      <nord-dropdown position="block-end" align-offset="24">
        <nord-button slot="toggle">align-offset</nord-button>
        <nord-dropdown-item>Option 1</nord-dropdown-item>
        <nord-dropdown-item>Option 2</nord-dropdown-item>
        <nord-dropdown-item>Option 3</nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### With Header

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:[margin-bottom:calc(var(--n-space-xxl)_*_3)]"
    >
      <nord-dropdown>
        <nord-button slot="toggle">Laura Williams</nord-button>
        <nord-avatar slot="header" size="s" name="Laura Williams"></nord-avatar>
        <p slot="header" class="n:text-weak n:text-s">
          Signed in as <span class="n:font-active">Laura Williams</span>
        </p>
        <nord-dropdown-group>
          <nord-dropdown-item>My profile</nord-dropdown-item>
          <nord-dropdown-item>Account Settings</nord-dropdown-item>
          <nord-dropdown-item>Change password</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-group>
          <nord-dropdown-item>
            Keyboard commands
            <div slot="end" class="n:text-weaker n:text-xs">Cmd+K</div>
          </nord-dropdown-item>
          <nord-dropdown-item>Help &amp; Support</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-group>
          <nord-dropdown-item
            >Sign out <nord-icon slot="end" name="interface-logout"></nord-icon
          ></nord-dropdown-item>
        </nord-dropdown-group>
      </nord-dropdown>
    </nord-stack>
```

### With Messages

```html
<nord-stack
      direction="horizontal"
      justify-content="center"
      class="n:[margin-bottom:calc(var(--n-space-xxl)_*_3)]"
    >
      <nord-dropdown>
        <nord-button slot="toggle">Notifications (7)</nord-button>
        <h2 slot="header" class="n-typescale-l">
          Notifications <span class="n:font-default n:text-weaker">(7)</span>
        </h2>
        <nord-button slot="header-end" size="s" autofocus>Mark all as read</nord-button>
        <nord-message unread highlight>
          Ariel Salminen arrived to clinic with Pixie cat.
          <span slot="footer">Just now at Nord Clinic</span>
        </nord-message>
        <nord-message unread>
          New feature available! We’ve introduced a quick way to navigate between app views, actions,
          and more using a new command menu.
          <span slot="footer">12 minutes ago</span>
        </nord-message>
        <nord-message unread>
          Nina Hallikainen arrived to clinic with Durante dog.
          <span slot="footer">20 minutes ago at Nord Clinic</span>
        </nord-message>
        <nord-message unread>
          David Darnes arrived to clinic with Norfryd cat.
          <span slot="footer">2 hours ago at Nord Clinic</span>
        </nord-message>
        <nord-message unread>
          Nick Williams arrived to clinic with Moog cat.
          <span slot="footer">2 hours ago at Nord Clinic</span>
        </nord-message>
        <nord-message unread>
          Eric Habich arrived to clinic with Zero cat.
          <span slot="footer">4 hours ago at Nord Clinic</span>
        </nord-message>
        <nord-message unread>
          Elvin van Eede arrived to clinic with Amoeba cat.
          <span slot="footer">12 hours ago at Nord Clinic</span>
        </nord-message>
        <nord-dropdown-item>
          See all notifications<nord-icon slot="end" name="arrow-right-long"></nord-icon>
        </nord-dropdown-item>
      </nord-dropdown>
    </nord-stack>
```

### With Submenu

```html
<style>
      body {
        padding: var(--n-space-m);
        margin-bottom: calc(var(--n-space-xxl) * 4);
      }
    </style>
    <nord-stack direction="horizontal" justify-content="center">
      <nord-dropdown size="s">
        <nord-button slot="toggle">
          <nord-visually-hidden>Menu</nord-visually-hidden>
          <nord-icon size="s" name="interface-menu-small"></nord-icon>
        </nord-button>

        <nord-dropdown-submenu>
          <nord-dropdown-item slot="trigger">
            <nord-icon slot="start" name="interface-share" size="s"></nord-icon>
            Share
            <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
          </nord-dropdown-item>
          <nord-dropdown-item>Copy link</nord-dropdown-item>
          <nord-dropdown-item>Send by email</nord-dropdown-item>
          <nord-dropdown-item>Get QR code</nord-dropdown-item>
        </nord-dropdown-submenu>

        <nord-dropdown-submenu>
          <nord-dropdown-item slot="trigger">
            <nord-icon slot="start" name="interface-download" size="s"></nord-icon>
            Export
            <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
          </nord-dropdown-item>
          <nord-dropdown-item>Export as PDF</nord-dropdown-item>
          <nord-dropdown-item>Export as CSV</nord-dropdown-item>
          <nord-dropdown-item>Export as JSON</nord-dropdown-item>
        </nord-dropdown-submenu>

        <nord-dropdown-item>
          <nord-icon slot="start" name="interface-delete" size="s"></nord-icon>
          Delete
        </nord-dropdown-item>

        <nord-dropdown-group heading="More actions">
          <nord-dropdown-submenu>
            <nord-dropdown-item slot="trigger">
              <nord-icon slot="start" name="interface-archive" size="s"></nord-icon>
              Archive
              <nord-icon slot="end" name="arrow-right" size="s"></nord-icon>
            </nord-dropdown-item>
            <nord-dropdown-item>Archive this</nord-dropdown-item>
            <nord-dropdown-item>Archive all</nord-dropdown-item>
            <nord-dropdown-item>Archive older than 30 days</nord-dropdown-item>
          </nord-dropdown-submenu>
        </nord-dropdown-group>
      </nord-dropdown>
    </nord-stack>
```

### Search Filter Mobile Keyboard

```html
<nord-dropdown id="nds-102-dropdown" size="l">
        <nord-button slot="toggle">Select species</nord-button>
        <nord-input
          id="nds-102-search"
          slot="header"
          label="Filter species"
          hide-label
          type="search"
          placeholder="Filter species…"
        ></nord-input>
        ${species.map(name => html
```

### Docs Overview

```html
<nord-dropdown size="s">
      <nord-button slot="toggle">Menu</nord-button>
      <nord-dropdown-item>My profile</nord-dropdown-item>
      <nord-dropdown-item>Account settings</nord-dropdown-item>
      <nord-dropdown-item>Change password</nord-dropdown-item>
    </nord-dropdown>
```

### Docs Basic

```html
<nord-dropdown size="s">
      <nord-button slot="toggle">Menu</nord-button>
      <nord-dropdown-item href="#">Waiting for consultation</nord-dropdown-item>
      <nord-dropdown-item>Consultation</nord-dropdown-item>
      <nord-dropdown-item>Arrived</nord-dropdown-item>
      <nord-dropdown-item>Cancelled</nord-dropdown-item>
    </nord-dropdown>
```

### Docs Grouped

```html
<nord-dropdown size="s">
      <nord-button slot="toggle">Account</nord-button>
      <nord-dropdown-group heading="Signed in as laura.williams@nordhealth.com">
        <nord-dropdown-item>My profile</nord-dropdown-item>
        <nord-dropdown-item>Account settings</nord-dropdown-item>
      </nord-dropdown-group>
      <nord-dropdown-group>
        <nord-dropdown-item>Sign out</nord-dropdown-item>
      </nord-dropdown-group>
    </nord-dropdown>
```

### Docs Expand

```html
<div style="inline-size: 320px">
      <nord-dropdown expand size="s">
        <nord-button slot="toggle" expand>Assign to team member</nord-button>
        <nord-dropdown-item>Laura Williams</nord-dropdown-item>
        <nord-dropdown-item>John Silva</nord-dropdown-item>
        <nord-dropdown-item>Sarah Chen</nord-dropdown-item>
      </nord-dropdown>
    </div>
```

### Docs Submenu

```html
<nord-dropdown size="s">
      <nord-button slot="toggle">Menu</nord-button>
      <nord-dropdown-submenu>
        <nord-dropdown-item slot="trigger">
          Share
          <nord-icon slot="end" name="arrow-right-small"></nord-icon>
        </nord-dropdown-item>
        <nord-dropdown-item>Copy link</nord-dropdown-item>
        <nord-dropdown-item>Send by email</nord-dropdown-item>
        <nord-dropdown-item>Get QR code</nord-dropdown-item>
      </nord-dropdown-submenu>
      <nord-dropdown-item>Delete</nord-dropdown-item>
    </nord-dropdown>
```

## API Reference

### Properties

- **expand** (`boolean`, default: `false`) — Controls whether the toggle slot expands to fill the width of its container.
Note that this only stretches the slot itself — the slotted toggle must
also expand to fill it, e.g. a <code>&lt;nord-button slot="toggle"&gt;</code> needs its own
<code>expand</code> attribute as well.
- **size** (`'s' | 'm' | 'l'`, default: `'m'`) — The size of the dropdown. This affects the minimum and maximum inline-size
of the dropdown.
- **always-floating** (`boolean`, default: `false`) — Set to true to always display the dropdown as a floating overlay, even on smaller viewports.
- **open** (`boolean`, default: `false`) — Controls whether the component is open or not.
- **align** (`'start' | 'end'`, default: `'start'`) — Set the alignment in relation to the toggle (or anchor) depending on the position.
<code>start</code> will align it to the left of the toggle (or anchor).
<code>end</code> will align it to the right of the toggle (or anchor).
Setting the <code>position</code> to <code>inline-start</code> or <code>inline-end</code> will switch
<code>start</code> and <code>end</code> to the top and bottom respectively.
- **position** (`'block-end' | 'block-start' | 'inline-start' | 'inline-end' | 'auto'`, default: `'block-end'`) — Set the position in relation to the toggle (or anchor).
Options follow logical properties.
<code>block-start</code> and <code>block-end</code> referring to top and bottom respectively,
<code>inline-start</code> and <code>inline-end</code> referring to left and right respectively.
You can also set it to <code>auto</code> for automatic positioning depending on
which side has the most space available.
- **side-offset** (`number`, default: `8`) — Distance in pixels from the toggle (or anchor) along the main axis — the
gap between the floating element and the side it opens against. Fed into
Floating UI's <code>offset</code> middleware as <code>mainAxis</code>. Defaults to <code>8</code>.
- **align-offset** (`number`, default: `0`) — Offset in pixels along the alignment axis — slides the floating element
toward the <code>start</code> or <code>end</code> of the toggle (or anchor). Fed into Floating
UI's <code>offset</code> middleware as <code>alignmentAxis</code>. Defaults to <code>0</code>.

### Events

- **open** (`NordEvent`) — Dispatched when the popout is opened.
- **close** (`NordEvent`) — Dispatched when the popout is closed.

### Slots

- **(default)** — The dropdown content.
- **toggle** — Used to place the toggle for dropdown.
- **header** — Optional slot that holds a header for the dropdown.
- **header-end** — Optional slot that positions content at the end of the header. Useful for actions or additional info.

### Methods

- **hide** — `hide(moveFocusToButton?: boolean) => Promise<TransitionEvent | void>` — Hide the dropdown programmatically.
This method delegates to the Dropdown's internal Popout component.
See <a href="/components/popout#methods-hide">Popout's hide() method</a> for more details.
- **show** — `show() => Promise<TransitionEvent | void>` — Show the dropdown programmatically.
This method delegates to the Dropdown's internal Popout component.
See <a href="/components/popout#methods-hide">Popout's show() method</a> for more details.

### CSS Custom Properties

- `--n-dropdown-size` (default: `250px`) — Controls the inline size, or width, of the dropdown. Will resize up to 1.5 times to account for larger content.
- `--n-dropdown-max-block-size` (default: `460px`) — Controls the maximum block size, or height, of the dropdown. Larger content will get a scrollbar.

### Dependencies

- `popout`
- `icon`
- `dropdown-item`

<!--
Source: https://nordhealth.design/raw/components/dropdown.md
-->
