# nord-top-bar

> Top bar is a header component that is always visible at the top of the interface. Top bar allows functionality such as search and contextual menus to be placed at the top of the interface.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Applications that utilize the top bar can allow users to customize the color of the top bar to match their preference. [View an example](/components/top-bar/?example=color).
- If your application allows it, include search to help users find resources and navigate.
- Include a user menu in the end slot of the top bar.
- Use the [layout component](/components/layout/?example=top-bar) to provide structure for the top bar component. We’ve also created [an example which shows full theming capabilities](/components/layout/?example=theming).

> **Don't:** - Don’t use for global navigation. Use the [navigation component](/components/navigation/) instead.
- Don’t allow the user to set a top bar color that doesn’t provide enough contrast with the content.
- Don’t allow the user to freely pick a hex code as the top bar color. Instead, offer a choice from a predefined palette of colors which provides sufficient contrast with the content. [View an example](/components/top-bar/?example=color).

---

## Theming

Please see the [Top Bar theming](/themes/#top-bar-theming) section in our theming documentation for detailed guidelines.

[Theming Guidelines](/themes/#top-bar-theming)

## Examples

### Advanced

```html
<style>@media (max-width: 768px) {
    nord-top-bar nord-input[type="search"]:focus ~ nord-dropdown {
      display: none;
    }
  }</style>
    <nord-top-bar>
      <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>

      <nord-dropdown slot="end" align="start" position="block-end">
        <nord-button slot="toggle" variant="plain" aria-describedby="advanced-notifications-tooltip">
          <nord-icon name="navigation-notifications" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
          <div class="n-counter n:absolute" aria-hidden="true">12</div>
        </nord-button>
        <h2 slot="header" class="n-typescale-l">
          Notifications <span class="n:font-default n:text-weaker">(12)</span>
        </h2>
        <nord-button slot="header-end" size="s" autofocus>Mark all as read</nord-button>
        <nord-message unread highlight>
          Ariel Salminen arrived to clinic with Pixie cat.
          <span slot="footer">Just now at Nord Clinic</span>
        </nord-message>
        <nord-message unread>
          New feature available! We’ve introduced a quick way to navigate between app views, actions, and more using a new
          command menu.
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
      <nord-tooltip id="advanced-notifications-tooltip">12 unread notifications</nord-tooltip>

      <nord-dropdown slot="end" align="start" position="block-end">
        <nord-button slot="toggle" variant="plain" aria-describedby="advanced-tasks-tooltip">
          <nord-icon name="navigation-tasks" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
          <div class="n-counter n:absolute" aria-hidden="true">4</div>
        </nord-button>
        <h2 slot="header" class="n-typescale-l">My tasks <span class="n:font-default n:text-weaker">(4)</span></h2>
        <nord-button slot="header-end" size="s" autofocus>
          <nord-icon slot="start" size="xxs" name="interface-add-small"></nord-icon>
          Create task
        </nord-button>
        <nord-message unread>
          Make sure to ask details from John regarding yesterday’s patient who arrived late.
          <span slot="footer">Finish by Wednesday, March 8</span>
        </nord-message>
        <nord-message unread>
          Import new patients from Ocean Beach Clinic into the system.
          <span slot="footer">Finish by Thursday, March 9</span>
        </nord-message>
        <nord-message unread>
          Call David and ask about his cat’s wellbeing.
          <span slot="footer">Finish by Thursday, March 9</span>
        </nord-message>
        <nord-message unread>
          Call Anne and reschedule their visit.
          <span slot="footer">Finish by Friday, March 10</span>
        </nord-message>
        <nord-dropdown-item> See all tasks<nord-icon slot="end" name="arrow-right-long"></nord-icon> </nord-dropdown-item>
      </nord-dropdown>
      <nord-tooltip id="advanced-tasks-tooltip">4 unfinished tasks</nord-tooltip>

      <nord-dropdown slot="end">
        <nord-button variant="plain" slot="toggle" aria-describedby="advanced-user-tooltip">
          <nord-avatar class="n:[transform:translateY(-1px)]" name="Ariel Salminen">AS</nord-avatar>
        </nord-button>
        <nord-avatar slot="header" size="s" name="Ariel Salminen">AS</nord-avatar>
        <p slot="header" class="n:text-weak n:text-s">
          Signed in as <span class="n:font-active">Ariel Salminen</span>
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
          <nord-dropdown-item>Help & Support</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>
          Sign out
          <nord-icon slot="end" name="interface-logout"></nord-icon>
        </nord-dropdown-item>
      </nord-dropdown>
      <nord-tooltip id="advanced-user-tooltip">Ariel Salminen</nord-tooltip>
    </nord-top-bar>
```

### Search

```html
<nord-top-bar>
      <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>
    </nord-top-bar>
```

### Notifications

```html
<nord-top-bar>
      <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>
      <nord-dropdown slot="end" align="start" position="block-end">
        <nord-button slot="toggle" variant="plain" aria-describedby="top-bar-notifications-tooltip">
          <nord-icon name="navigation-notifications" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
        </nord-button>
        <h2 slot="header" class="n-typescale-l">Notifications</h2>
        <nord-button slot="header-end" size="s">Mark all as read</nord-button>
        <nord-message unread highlight>
          Ariel Salminen arrived to clinic with Pixie cat.
          <span slot="footer">Just now at Nord Clinic</span>
        </nord-message>
        <nord-message unread>
          Nina Hallikainen arrived to clinic with Durante dog.
          <span slot="footer">20 minutes ago at Nord Clinic</span>
        </nord-message>
      </nord-dropdown>
      <nord-tooltip id="top-bar-notifications-tooltip">Notifications</nord-tooltip>
    </nord-top-bar>
```

### Basic

```html
<nord-top-bar>
      <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>
      <nord-dropdown slot="end">
        <nord-button variant="plain" slot="toggle" aria-describedby="basic-user-tooltip">
          <nord-avatar class="n:[transform:translateY(-1px)]" name="Ariel Salminen">AS</nord-avatar>
        </nord-button>
        <nord-avatar slot="header" size="s" name="Ariel Salminen">AS</nord-avatar>
        <p slot="header" class="n:text-weak n:text-s">
          Signed in as <span class="n:font-active">Ariel Salminen</span>
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
          <nord-dropdown-item>Help & Support</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>
          Sign out
          <nord-icon slot="end" name="interface-logout"></nord-icon>
        </nord-dropdown-item>
      </nord-dropdown>
      <nord-tooltip id="basic-user-tooltip">Ariel Salminen</nord-tooltip>
    </nord-top-bar>
```

### Color

```html
<style>:root {
    /* CUSTOM ACCENT COLORS */
    --n-color-accent: #793aaf;
    --n-color-accent-secondary: #3b0075;
  }
@media (max-width: 768px) {
    nord-top-bar nord-input[type="search"]:focus ~ nord-dropdown {
      display: none;
    }
  }</style>
    <nord-top-bar>
      <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>

      <nord-dropdown slot="end" align="start" position="block-end">
        <nord-button slot="toggle" variant="plain" aria-describedby="color-notifications-tooltip">
          <nord-icon name="navigation-notifications" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
          <div class="n-counter n:absolute" aria-hidden="true">12</div>
        </nord-button>
        <h2 slot="header" class="n-typescale-l">
          Notifications <span class="n:font-default n:text-weaker">(12)</span>
        </h2>
        <nord-button slot="header-end" size="s" autofocus>Mark all as read</nord-button>
        <nord-message unread highlight>
          Ariel Salminen arrived to clinic with Pixie cat.
          <span slot="footer">Just now at Nord Clinic</span>
        </nord-message>
        <nord-message unread>
          New feature available! We’ve introduced a quick way to navigate between app views, actions, and more using a new
          command menu.
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
      <nord-tooltip id="color-notifications-tooltip">12 unread notifications</nord-tooltip>

      <nord-dropdown slot="end" align="start" position="block-end">
        <nord-button slot="toggle" variant="plain" aria-describedby="color-tasks-tooltip">
          <nord-icon name="navigation-tasks" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
          <div class="n-counter n:absolute" aria-hidden="true">4</div>
        </nord-button>
        <h2 slot="header" class="n-typescale-l">My tasks <span class="n:font-default n:text-weaker">(4)</span></h2>
        <nord-button slot="header-end" size="s" autofocus>
          <nord-icon slot="start" size="xxs" name="interface-add-small"></nord-icon>
          Create task
        </nord-button>
        <nord-message unread>
          Make sure to ask details from John regarding yesterday’s patient who arrived late.
          <span slot="footer">Finish by Wednesday, March 8</span>
        </nord-message>
        <nord-message unread>
          Import new patients from Ocean Beach Clinic into the system.
          <span slot="footer">Finish by Thursday, March 9</span>
        </nord-message>
        <nord-message unread>
          Call David and ask about his cat’s wellbeing.
          <span slot="footer">Finish by Thursday, March 9</span>
        </nord-message>
        <nord-message unread>
          Call Anne and reschedule their visit.
          <span slot="footer">Finish by Friday, March 10</span>
        </nord-message>
        <nord-dropdown-item> See all tasks<nord-icon slot="end" name="arrow-right-long"></nord-icon> </nord-dropdown-item>
      </nord-dropdown>
      <nord-tooltip id="color-tasks-tooltip">4 unfinished tasks</nord-tooltip>

      <nord-dropdown slot="end">
        <nord-button variant="plain" slot="toggle" aria-describedby="color-user-tooltip">
          <nord-avatar class="n:[transform:translateY(-1px)]" name="Ariel Salminen">AS</nord-avatar>
        </nord-button>
        <nord-avatar slot="header" size="s" name="Ariel Salminen">AS</nord-avatar>
        <p slot="header" class="n:text-weak n:text-s">
          Signed in as <span class="n:font-active">Ariel Salminen</span>
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
          <nord-dropdown-item>Help & Support</nord-dropdown-item>
        </nord-dropdown-group>
        <nord-dropdown-item>
          Sign out
          <nord-icon slot="end" name="interface-logout"></nord-icon>
        </nord-dropdown-item>
      </nord-dropdown>
      <nord-tooltip id="color-user-tooltip">Ariel Salminen</nord-tooltip>
    </nord-top-bar>
```

## API Reference

### Slots

- **(default)** — Used for the main content of the top bar. We recommend placing your application’s global search functionality into this slot.
- **end** — Optional slot for menus, buttons, toggles, etc.

<!--
Source: https://nordhealth.design/raw/components/top-bar.md
-->
