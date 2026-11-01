# nord-layout

> Layout component is used to create the main layout of an app. Layout
> currently comes with one main configuration: two-column.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - To visually group content in a layout section, use the Card component.
- To lay out a set of smaller components, use the Stack component.

> **Don't:** - Never put layout component inside another HTML landmark.
- Don’t use when you need a vertical or horizontal layout system. Use Stack component instead.

---

## Additional considerations

- Layout component uses `<main>` element internally which is an HTML sectioning element which by default defines an ARIA landmark role. For that reason you should never put layout component inside another HTML landmark.

---

## Theming

Please see the [Accent color](/themes/#accent-color) and [Top Bar theming](/themes/#top-bar-theming) sections in our theming documentation for detailed guidelines.

[Theming Guidelines](/themes/#accent-color)

## Examples

### Basic

```html
<nord-layout>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand type="button">
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              <span>Bath Clinic</span>
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
              <span></span>Ocean Beach Clinic</span>
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
              <span></span>Park Animal Hospital</span>
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
              <span>Balboa Pet Hospital</span>
            </nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>Add another clinic</nord-dropdown-item>
            <nord-dropdown-item>Customize style</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-item>Sign out from all clinics</nord-dropdown-item>
        </nord-dropdown>
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
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
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
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
      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <nord-banner variant="success">
            Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
          </nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Custom Nav Width

```html
<nord-layout default-nav-width="320" min-nav-width="280" max-nav-width="500">
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
            </nord-dropdown-item>
          </nord-dropdown-group>
        </nord-dropdown>
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
              <nord-nav-item href="#">Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
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
          <nord-dropdown-item>
            Sign out
            <nord-icon slot="end" name="interface-logout"></nord-icon>
          </nord-dropdown-item>
        </nord-dropdown>
      </nord-navigation>
      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Custom nav size</h2>
          <nord-banner>
            This layout opens at <strong>320px</strong> and clamps drag to <strong>280–500px</strong>.
            Try dragging the sidebar edge — it won't go below 280 or above 500.
          </nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
```

### Custom Surface And Background

```html
<nord-layout class="n:[--n-layout-background-color:var(--n-color-nav-surface)]">
      <nord-navigation class="n:[--n-navigation-background-color:var(--n-color-background)]" slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
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
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
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
      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <nord-banner variant="success">
            Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
          </nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Drawer

```html
<nord-layout>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
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
            <nord-avatar aria-hidden="true" name="Laura Williams" slot="start"></nord-avatar>
            Laura Williams
          </nord-button>
          <nord-dropdown-group>
            <nord-dropdown-item href="#">View profile</nord-dropdown-item>
            <nord-dropdown-item>Settings</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Show keyboard shortcuts
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
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
      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <nord-banner variant="success">
            Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
          </nord-banner>
        </nord-card>
      </nord-stack>

      <nord-drawer slot="drawer">
        <nord-header slot="header">
          <h2 class="n-typescale-l">Drawer header</h2>
          <nord-button slot="end" id="close" variant="plain" aria-describedby="drawer-close-sidebar" size="s" square>
            <nord-icon name="interface-close" size="s"></nord-icon>
          </nord-button>
          <nord-tooltip id="drawer-close-sidebar">Close</nord-tooltip>
        </nord-header>

        <p class="n-typeset">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae itaque ad libero numquam ullam nisi quam
          porro, et quo accusantium!
        </p>

        <nord-button-group slot="footer" variant="spaced">
          <nord-button>Cancel</nord-button>
          <nord-button variant="primary">Done</nord-button>
        </nord-button-group>
      </nord-drawer>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Footer

```html
<style>:root {
        /* CUSTOM ACCENT COLORS */
        --n-color-accent: #401197;
        --n-color-accent-secondary: #310d77;
      }
      .n-help-icon {
        color: var(--n-color-text-weak);
        margin-inline-start: calc(var(--n-space-s) / 2);
        margin-inline-end: calc(var(--n-space-s) / 3);
      }

      .help-toggle:not(:focus-within) {
        --n-button-border-color: transparent;
      }

      .help-toggle:hover {
        --n-button-background-color: var(--n-color-nav-hover);
        --n-button-color: var(--n-color-text);
      }

      .help-toggle:hover nord-icon {
        color: var(--n-color-text);
      }

      @media (max-width: 768px) {
        nord-top-bar nord-input[type="search"]:focus ~ nord-dropdown {
          display: none;
        }
      }</style>
        <nord-layout sticky-footer>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
                class="n:[--n-avatar-color:var(--n-color-status-info)]"
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
              <nord-nav-item href="#">Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item icon="navigation-reports">
            Reports
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#" active>Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
              <nord-nav-item href="#">Payouts</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
        <nord-dropdown expand slot="footer">
          <nord-button class="help-toggle" slot="toggle" expand>
            <nord-icon slot="start" class="n-help-icon" size="m" name="interface-help"></nord-icon>
            Help & support
          </nord-button>
          <nord-dropdown-group>
            <nord-dropdown-item>Help center</nord-dropdown-item>
            <nord-dropdown-item>Contact us</nord-dropdown-item>
            <nord-dropdown-item>Support history</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>Getting started</nord-dropdown-item>
            <nord-dropdown-item class="toggle-command-menu">
              Keyboard commands
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
            </nord-dropdown-item>
            <nord-dropdown-item>Tips & tricks</nord-dropdown-item>
            <nord-dropdown-item>Updates</nord-dropdown-item>
          </nord-dropdown-group>
        </nord-dropdown>
      </nord-navigation>

      <nord-top-bar slot="top-bar">
        <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="footer-notifications-tooltip">
            <nord-icon name="navigation-notifications" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
            <div class="n-counter n:absolute" aria-hidden="true">12</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">
            Notifications <span class="n-font-weight n-color-text-weaker">(12)</span>
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
        <nord-tooltip id="footer-notifications-tooltip">12 unread notifications</nord-tooltip>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="footer-tasks-tooltip">
            <nord-icon name="navigation-tasks" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
            <div class="n-counter n:absolute" aria-hidden="true">4</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">My tasks <span class="n-font-weight n-color-text-weaker">(4)</span></h2>
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
        <nord-tooltip id="footer-tasks-tooltip">4 unfinished tasks</nord-tooltip>

        <nord-dropdown slot="end">
          <nord-button variant="plain" slot="toggle" aria-describedby="footer-user-tooltip">
            <nord-avatar class="n:[transform:translateY(-1px)]" name="Ariel Salminen">AS</nord-avatar>
          </nord-button>
          <nord-avatar slot="header" size="s" name="Ariel Salminen">AS</nord-avatar>
          <p slot="header" class="n-color-text-weak n-font-size-s">
            Signed in as <span class="n-font-weight-active">Ariel Salminen</span>
          </p>
          <nord-dropdown-group>
            <nord-dropdown-item>My profile</nord-dropdown-item>
            <nord-dropdown-item>Account Settings</nord-dropdown-item>
            <nord-dropdown-item>Change password</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Keyboard commands
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
            </nord-dropdown-item>
            <nord-dropdown-item>Help & Support</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-item>
            Sign out
            <nord-icon slot="end" name="interface-logout"></nord-icon>
          </nord-dropdown-item>
        </nord-dropdown>
        <nord-tooltip id="footer-user-tooltip">Ariel Salminen</nord-tooltip>
      </nord-top-bar>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <nord-banner variant="success">
            Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
          </nord-banner>
        </nord-card>
      </nord-stack>
      <nord-footer slot="footer">
        <nord-button-group variant="spaced">
          <nord-button>Default</nord-button>
          <nord-button variant="primary">Primary</nord-button>
        </nord-button-group>
      </nord-footer>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Footer Button With Nav Open

```html
<nord-layout nav-open>
      <nord-navigation slot="nav">
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>
      <nord-header slot="header"><h1 slot="title">Dashboard</h1></nord-header>
      <main>Content</main>
      <nord-footer slot="footer">
        <nord-button-group variant="spaced">
          <nord-button>Cancel</nord-button>
          <nord-button variant="primary">Print</nord-button>
        </nord-button-group>
      </nord-footer>
    </nord-layout>
```

### Full Height Content

```html
<style>:root {
        /* CUSTOM ACCENT COLORS */
        --n-color-accent: #401197;
        --n-color-accent-secondary: #310d77;
      }
    .full-height {
        position: absolute;
        inset-block-start: calc(var(--n-size-top-bar) + var(--n-space-l));
        inset-block-end: calc(var(--n-space-l));
        /* if also footer is visible, use this instead of the above: */
        /* inset-block-end: calc(var(--n-space-xxl) + var(--n-space-l)); */
        inset-inline-start: var(--n-space-l);
        inset-inline-end: var(--n-space-l);
        min-block-size: 100px;
        inline-size: auto;
      }

      .scrollable {
        position: absolute;
        padding: var(--n-space-m);
        inset-block-start: 0;
        inset-block-end: 0;
        inset-inline-start: 0;
        inset-inline-end: 0;
        block-size: 100%;
        overflow: auto;
      }

      nord-stack div {
        background: var(--n-color-status-info-weak);
        padding: var(--n-space-m);
      }

      @media (max-width: 768px) {
        nord-top-bar nord-input[type="search"]:focus ~ nord-dropdown {
          display: none;
        }
      }</style>
        <nord-layout>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
                class="n:[--n-avatar-color:var(--n-color-status-info)]"
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
              <nord-nav-item href="#">Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item icon="navigation-reports">
            Reports
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#" active>Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
              <nord-nav-item href="#">Payouts</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>

      <nord-top-bar slot="top-bar">
        <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="full-height-content-notifications-tooltip">
            <nord-icon name="navigation-notifications" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
            <div class="n-counter n:absolute" aria-hidden="true">12</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">
            Notifications <span class="n-font-weight n-color-text-weaker">(12)</span>
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
        <nord-tooltip id="full-height-content-notifications-tooltip">12 unread notifications</nord-tooltip>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="full-height-content-tasks-tooltip">
            <nord-icon name="navigation-tasks" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
            <div class="n-counter n:absolute" aria-hidden="true">4</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">My tasks <span class="n-font-weight n-color-text-weaker">(4)</span></h2>
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
        <nord-tooltip id="full-height-content-tasks-tooltip">4 unfinished tasks</nord-tooltip>

        <nord-dropdown slot="end">
          <nord-button variant="plain" slot="toggle" aria-describedby="full-height-content-user-tooltip">
            <nord-avatar class="n:[transform:translateY(-1px)]" name="Ariel Salminen">AS</nord-avatar>
          </nord-button>
          <nord-avatar slot="header" size="s" name="Ariel Salminen">AS</nord-avatar>
          <p slot="header" class="n-color-text-weak n-font-size-s">
            Signed in as <span class="n-font-weight-active">Ariel Salminen</span>
          </p>
          <nord-dropdown-group>
            <nord-dropdown-item>My profile</nord-dropdown-item>
            <nord-dropdown-item>Account Settings</nord-dropdown-item>
            <nord-dropdown-item>Change password</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Keyboard commands
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
            </nord-dropdown-item>
            <nord-dropdown-item>Help & Support</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-item>
            Sign out
            <nord-icon slot="end" name="interface-logout"></nord-icon>
          </nord-dropdown-item>
        </nord-dropdown>
        <nord-tooltip id="full-height-content-user-tooltip">Ariel Salminen</nord-tooltip>
      </nord-top-bar>

      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end" size="s">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-card class="full-height">
        <div class="scrollable">
          <nord-stack>
            <nord-banner variant="info">
              This card component should fill the available height of the content area and have internal scrolling where
              necessary.
            </nord-banner>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
            <div>Stack item</div>
          </nord-stack>
        </div>
      </nord-card>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Full Height Table

```html
<style>:root {
        /* CUSTOM ACCENT COLORS */
        --n-color-accent: #401197;
        --n-color-accent-secondary: #310d77;
      }
    .full-height {
        position: absolute;
        inset-block-start: calc(var(--n-size-top-bar) + var(--n-space-l));
        inset-block-end: calc(var(--n-space-l));
        /* if also footer is visible, use this instead of the above: */
        /* inset-block-end: calc(var(--n-space-xxl) + var(--n-space-l)); */
        inset-inline-start: var(--n-space-l);
        inset-inline-end: var(--n-space-l);
        min-block-size: 100px;
        inline-size: auto;
      }

      nord-table.scrollable {
        position: absolute;
        inset-block-start: 0;
        inset-block-end: 0;
        inset-inline-start: 0;
        inset-inline-end: 0;
        block-size: 100%;
      }

      nord-table.scrollable th {
        position: sticky;
        inset-block-start: 0;
        z-index: var(--n-index-sticky);
      }

      @media (max-width: 768px) {
        nord-top-bar nord-input[type="search"]:focus ~ nord-dropdown {
          display: none;
        }
      }</style>
        <nord-layout>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
                class="n:[--n-avatar-color:var(--n-color-status-info)]"
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
              <nord-nav-item href="#">Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item icon="navigation-reports">
            Reports
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#" active>Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
              <nord-nav-item href="#">Payouts</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>

      <nord-top-bar slot="top-bar">
        <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="full-height-table-notifications-tooltip">
            <nord-icon name="navigation-notifications" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
            <div class="n-counter n:absolute" aria-hidden="true">12</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">
            Notifications <span class="n-font-weight n-color-text-weaker">(12)</span>
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
        <nord-tooltip id="full-height-table-notifications-tooltip">12 unread notifications</nord-tooltip>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="full-height-table-tasks-tooltip">
            <nord-icon name="navigation-tasks" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
            <div class="n-counter n:absolute" aria-hidden="true">4</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">My tasks <span class="n-font-weight n-color-text-weaker">(4)</span></h2>
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
        <nord-tooltip id="full-height-table-tasks-tooltip">4 unfinished tasks</nord-tooltip>

        <nord-dropdown slot="end">
          <nord-button variant="plain" slot="toggle" aria-describedby="full-height-table-user-tooltip">
            <nord-avatar class="n:[transform:translateY(-1px)]" name="Ariel Salminen">AS</nord-avatar>
          </nord-button>
          <nord-avatar slot="header" size="s" name="Ariel Salminen">AS</nord-avatar>
          <p slot="header" class="n-color-text-weak n-font-size-s">
            Signed in as <span class="n-font-weight-active">Ariel Salminen</span>
          </p>
          <nord-dropdown-group>
            <nord-dropdown-item>My profile</nord-dropdown-item>
            <nord-dropdown-item>Account Settings</nord-dropdown-item>
            <nord-dropdown-item>Change password</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Keyboard commands
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
            </nord-dropdown-item>
            <nord-dropdown-item>Help & Support</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-item>
            Sign out
            <nord-icon slot="end" name="interface-logout"></nord-icon>
          </nord-dropdown-item>
        </nord-dropdown>
        <nord-tooltip id="full-height-table-user-tooltip">Ariel Salminen</nord-tooltip>
      </nord-top-bar>

      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end" size="s">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-card padding="none" class="full-height">
        <nord-table class="scrollable">
          <table>
            <thead>
              <tr>
                <th class="n-table-align-right">Amount</th>
                <th>Status</th>
                <th>Description</th>
                <th>Method</th>
                <th class="n-table-align-right">Date</th>
                <th class="n-table-align-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="n-table-align-right">350,00&thinsp;€</td>
                <td><nord-badge>Neutral</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">20.3.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">29,90&thinsp;€</td>
                <td><nord-badge>Neutral</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">20.3.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">50,00&thinsp;€</td>
                <td><nord-badge variant="info">Info</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">19.3.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">49,00&thinsp;€</td>
                <td><nord-badge variant="info">Info</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">17.3.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">1023,00&thinsp;€</td>
                <td><nord-badge variant="info">Info</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">12.3.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">32,00&thinsp;€</td>
                <td><nord-badge variant="highlight">Highlight</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">10.3.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">40,00&thinsp;€</td>
                <td><nord-badge variant="highlight">Highlight</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">9.3.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">28,52&thinsp;€</td>
                <td><nord-badge variant="highlight">Highlight</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">4.3.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">350,00&thinsp;€</td>
                <td><nord-badge variant="success">Success</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">4.3.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">220,00&thinsp;€</td>
                <td><nord-badge variant="success">Success</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">3.3.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">50,00&thinsp;€</td>
                <td><nord-badge variant="success">Success</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">1.3.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">350,00&thinsp;€</td>
                <td><nord-badge variant="success">Success</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">30.2.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">29,90&thinsp;€</td>
                <td><nord-badge variant="warning">Warning</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">28.2.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">50,00&thinsp;€</td>
                <td><nord-badge variant="success">Success</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">28.2.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">49,00&thinsp;€</td>
                <td><nord-badge variant="success">Success</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">26.2.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">1023,00&thinsp;€</td>
                <td><nord-badge variant="danger">Alert</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">24.2.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">32,00&thinsp;€</td>
                <td><nord-badge variant="success">Success</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">23.2.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">40,00&thinsp;€</td>
                <td><nord-badge variant="warning">Warning</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">22.2.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">28,52&thinsp;€</td>
                <td><nord-badge variant="warning">Warning</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">21.2.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">350,00&thinsp;€</td>
                <td><nord-badge variant="success">Success</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">20.2.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="n-table-align-right">220,00&thinsp;€</td>
                <td><nord-badge variant="success">Success</nord-badge></td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td class="n-caption">Card</td>
                <td class="n-caption n-table-align-right">18.2.2021</td>
                <td>
                  <div class="n-table-actions">
                    <nord-button size="s" square>
                      <nord-visually-hidden>Actions</nord-visually-hidden>
                      <nord-icon name="interface-menu-small"></nord-icon>
                    </nord-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </nord-table>
      </nord-card>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Advanced

```html
<style>.themed {
        --n-color-accent: #793aaf;
        --n-color-accent-secondary: #3b0075;
      }</style>
        <nord-layout ${ref(advLayout)} padding="none">
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
              <nord-nav-item href="#">Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item icon="navigation-reports">
            Reports
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#" active>Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
              <nord-nav-item href="#">Payouts</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
        <nord-dropdown expand slot="footer">
          <nord-button class="help-toggle" slot="toggle" expand>
            <nord-icon slot="start" class="n-help-icon" size="m" name="interface-help"></nord-icon>
            Help & support
          </nord-button>
          <nord-dropdown-group>
            <nord-dropdown-item onclick="refresh()">Help center</nord-dropdown-item>
            <nord-dropdown-item onclick="refresh()">Contact us</nord-dropdown-item>
            <nord-dropdown-item onclick="refresh()">Support history</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item onclick="refresh()">Getting started</nord-dropdown-item>
            <nord-dropdown-item class="toggle-command-menu">
              Keyboard commands
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
            </nord-dropdown-item>
            <nord-dropdown-item onclick="refresh()">Tips & tricks</nord-dropdown-item>
            <nord-dropdown-item onclick="refresh()">Updates</nord-dropdown-item>
          </nord-dropdown-group>
        </nord-dropdown>
      </nord-navigation>

      <nord-top-bar ${ref(advTopBar)} slot="top-bar">
        <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="advanced-notifications-tooltip">
            <nord-icon name="navigation-notifications" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
            <div class="n-counter n:absolute" aria-hidden="true">12</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">
            Notifications <span class="n-font-weight n-color-text-weaker">(12)</span>
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
          <h2 slot="header" class="n-typescale-l">My tasks <span class="n-font-weight n-color-text-weaker">(4)</span></h2>
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
          <p slot="header" class="n-color-text-weak n-font-size-s">
            Signed in as <span class="n-font-weight-active">Ariel Salminen</span>
          </p>
          <nord-dropdown-group>
            <nord-dropdown-item>My profile</nord-dropdown-item>
            <nord-dropdown-item>Account Settings</nord-dropdown-item>
            <nord-dropdown-item>Change password</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Keyboard commands
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
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

      <nord-header ${ref(advHeader)} slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
      </nord-header>

      <nord-notification-group ${ref(advNotifications)}> </nord-notification-group>

      <nord-tab-group sticky>
        <nord-tab slot="tab">Test tab</nord-tab>
        <nord-tab-panel>
          <nord-visually-hidden id="button-group-header">Feature toggles</nord-visually-hidden>
          <nord-button-group ${ref(advButtonGroupSetup)}
            class="n:[--n-button-group-box-shadow:none] n:mbe-m"
            aria-labelledby="button-group-header"
          >
            <nord-button id="btn-toggle-top-bar" aria-pressed="true">Top bar</nord-button>
            <nord-button id="btn-toggle-header" aria-pressed="true">Header</nord-button>
            <nord-button id="btn-toggle-footer" aria-pressed="true">Footer</nord-button>
            <nord-button id="btn-toggle-sticky">Sticky header</nord-button>
            <nord-button id="btn-toggle-sticky-footer">Sticky footer</nord-button>
            <nord-button id="btn-toggle-sticky-nav-footer">Sticky nav footer</nord-button>
            <nord-button id="btn-toggle-navigation" aria-pressed="true">Navigation</nord-button>
            <nord-button id="btn-toggle-drawer" aria-pressed="true">Drawer</nord-button>
            <nord-button id="btn-toggle-accent-colors">Theme</nord-button>
            <nord-button id="btn-show-notification">
              <nord-icon slot="start" name="interface-add-small"></nord-icon>
              Add notification
            </nord-button>
          </nord-button-group>
          <nord-card padding="none">
            <h2 slot="header">Payouts</h2>
            <nord-table sticky>
              <table>
                <thead>
                  <tr>
                    <th class="n-table-align-right">Amount</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Method</th>
                    <th class="n-table-align-right">Date</th>
                    <th class="n-table-align-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="n-table-align-right">350,00&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">20.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">29,90&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">20.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">50,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="info">Info</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">19.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">49,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="info">Info</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">17.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">1023,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="info">Info</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">12.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">32,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="highlight">Highlight</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">10.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">40,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="highlight">Highlight</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">9.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">28,52&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="highlight">Highlight</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">4.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">350,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="success">Success</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">4.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">220,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="success">Success</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">3.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">50,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="success">Success</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">1.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">350,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="warning">Warning</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">30.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">29,90&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="warning">Warning</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">28.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">50,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="danger">Danger</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">28.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">49,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="danger">Danger</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">26.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">1023,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="danger">Danger</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">24.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">32,00&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">23.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">40,00&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">22.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">28,52&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">21.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">350,00&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">20.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">220,00&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">18.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="advanced-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu" size="s"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </nord-table>
            <nord-tooltip id="advanced-edit" position="block-end">Edit this row</nord-tooltip>
          </nord-card>
        </nord-tab-panel>

        <nord-tab slot="tab">Another tab</nord-tab>
        <nord-tab-panel>
          <p>This tab is intentionally left blank</p>
        </nord-tab-panel>
      </nord-tab-group>

      <nord-drawer ${ref(advDrawer)} slot="drawer">
        <nord-header slot="header">
          <h2 class="n-typescale-l">Drawer header</h2>
          <nord-button slot="end" id="close" variant="plain" aria-describedby="advanced-close-sidebar" size="s" square>
            <nord-icon name="interface-close" size="s"></nord-icon>
          </nord-button>
          <nord-tooltip id="advanced-close-sidebar" position="block-end">Close</nord-tooltip>
        </nord-header>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae itaque ad libero numquam ullam nisi quam
          porro, et quo accusantium!
        </p>

        <nord-button-group slot="footer" variant="spaced">
          <nord-button>Cancel</nord-button>
          <nord-button variant="primary">Done</nord-button>
        </nord-button-group>
      </nord-drawer>

      <nord-footer ${ref(advFooter)} slot="footer">
        <nord-stack direction="horizontal" justify-content="space-between" align-items="center">
          <nord-button>Cancel</nord-button>
          <nord-button-group variant="spaced">
            <nord-button>Default</nord-button>
            <nord-button variant="primary">Primary</nord-button>
          </nord-button-group>
        </nord-stack>
      </nord-footer>
    </nord-layout>

    <nord-command-menu .commands=${advancedToggleNavCommands}></nord-command-menu>
```

### No Padding

```html
<nord-layout padding="none">
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
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
            <nord-avatar aria-hidden="true" name="Laura Williams" slot="start"></nord-avatar>
            Laura Williams
          </nord-button>
          <nord-dropdown-group>
            <nord-dropdown-item href="#">View profile</nord-dropdown-item>
            <nord-dropdown-item>Settings</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Show keyboard shortcuts
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
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
      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-tab-group label="Title" sticky padding="l">
        <nord-tab slot="tab">Overview</nord-tab>
        <nord-tab-panel>
          <nord-card>
            <h2 slot="header">Card heading</h2>
            <nord-banner variant="success">
              Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
            </nord-banner>
          </nord-card>
        </nord-tab-panel>
        <nord-tab slot="tab">Terminals</nord-tab>
        <nord-tab-panel>
          <nord-card>
            <h2 slot="header">Card heading 2</h2>
            <nord-banner variant="success">
              Your order has been shipped and will arrive on May 28th. <a href="#">Track order</a>.
            </nord-banner>
          </nord-card>
        </nord-tab-panel>
        <nord-tab slot="tab">Stores</nord-tab>
        <nord-tab-panel>
          <nord-card>
            <h2 slot="header">Card heading 3</h2>
            <nord-banner variant="success">
              Your order has been shipped and will arrive on May 29th. <a href="#">Track order</a>.
            </nord-banner>
          </nord-card>
        </nord-tab-panel>
        <nord-tab slot="tab">Account holders</nord-tab>
        <nord-tab-panel>
          <nord-card>
            <h2 slot="header">Card heading 4</h2>
            <nord-banner variant="success">
              Your order has been shipped and will arrive on May 30th. <a href="#">Track order</a>.
            </nord-banner>
          </nord-card>
        </nord-tab-panel>
      </nord-tab-group>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Persist Nav State

```html
<nord-layout persist-nav-state>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
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
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
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
      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <nord-banner variant="success">
            Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
          </nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Preventing Nav Close On Mobile

```html
<nord-layout>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item class="prevent-close" href="#">All transactions</nord-nav-item>
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
            <nord-avatar aria-hidden="true" name="Laura Williams" slot="start"></nord-avatar>
            Laura Williams
          </nord-button>
          <nord-dropdown-group>
            <nord-dropdown-item href="#">View profile</nord-dropdown-item>
            <nord-dropdown-item>Settings</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Show keyboard shortcuts
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
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
      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <nord-banner variant="success">
            Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
          </nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
```

### Programmatically Close Nav

```html
<nord-layout>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
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
          <nord-button class="account-button" slot="toggle" expand variant="plain">
            <nord-avatar aria-hidden="true" name="Laura Williams" slot="start"></nord-avatar>
            Laura Williams
          </nord-button>
          <nord-dropdown-group>
            <nord-dropdown-item href="#">View profile</nord-dropdown-item>
            <nord-dropdown-item>Settings</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Show keyboard shortcuts
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
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
      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <nord-banner variant="success">
            Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
          </nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
```

### Sticky Header

```html
<nord-layout sticky padding="none">
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
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
            <nord-avatar aria-hidden="true" name="Laura Williams" slot="start"></nord-avatar>
            Laura Williams
          </nord-button>
          <nord-dropdown-group>
            <nord-dropdown-item href="#">View profile</nord-dropdown-item>
            <nord-dropdown-item>Settings</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Show keyboard shortcuts
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
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

      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
      </nord-header>

      <nord-tab-group label="Title" sticky padding="l">
        <nord-tab slot="tab">Overview</nord-tab>
        <nord-tab-panel>
          <nord-card padding="none">
            <h2 slot="header">Payouts</h2>
            <nord-table>
              <table>
                <thead>
                  <tr>
                    <th class="n-table-align-right">Amount</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Method</th>
                    <th class="n-table-align-right">Date</th>
                    <th class="n-table-align-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="n-table-align-right">350,00&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">20.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">29,90&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">20.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">50,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="info">Info</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">19.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">49,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="info">Info</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">17.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">1023,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="info">Info</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">12.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">32,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="highlight">Highlight</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">10.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">40,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="highlight">Highlight</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">9.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">28,52&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="highlight">Highlight</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">4.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">350,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="success">Success</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">4.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">220,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="success">Success</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">3.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">50,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="success">Success</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">1.3.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">350,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="warning">Warning</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">30.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">29,90&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="warning">Warning</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">28.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">50,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="danger">Danger</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">28.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">49,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="danger">Danger</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">26.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">1023,00&thinsp;€</td>
                    <td class="current-status"><nord-badge variant="danger">Danger</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">24.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">32,00&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">23.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">40,00&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">22.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">28,52&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">21.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">350,00&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">20.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="n-table-align-right">220,00&thinsp;€</td>
                    <td class="current-status"><nord-badge>Neutral</nord-badge></td>
                    <td class="n-table-ellipsis">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa
                      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                      fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                    </td>
                    <td class="n-caption">Card</td>
                    <td class="n-caption n-table-align-right">18.2.2021</td>
                    <td>
                      <div class="n-table-actions">
                        <nord-dropdown position="block-end" align="end" size="s">
                          <nord-button slot="toggle" aria-describedby="sticky-header-edit" size="s" square>
                            <nord-icon name="interface-menu-small" label="Open menu"></nord-icon>
                          </nord-button>
                          <nord-dropdown-group>
                            <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                            <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                            <nord-dropdown-item>Copy link</nord-dropdown-item>
                          </nord-dropdown-group>
                          <nord-dropdown-group>
                            <nord-dropdown-item data-action="refund">Refund payment</nord-dropdown-item>
                            <nord-dropdown-item data-action="delete">
                              <span>Delete</span>
                              <nord-icon slot="end" name="interface-delete"></nord-icon>
                            </nord-dropdown-item>
                          </nord-dropdown-group>
                        </nord-dropdown>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </nord-table>
            <nord-tooltip id="sticky-header-edit" position="block-end">Edit this row</nord-tooltip>
          </nord-card>
        </nord-tab-panel>
        <nord-tab slot="tab">Terminals</nord-tab>
        <nord-tab-panel>
          <nord-card>
            <h2 slot="header">Card header 2</h2>
            Card content
          </nord-card>
        </nord-tab-panel>
        <nord-tab slot="tab">Stores</nord-tab>
        <nord-tab-panel>
          <nord-card>
            <h2 slot="header">Card header 3</h2>
            Card content
          </nord-card>
        </nord-tab-panel>
        <nord-tab slot="tab">Account holders</nord-tab>
        <nord-tab-panel>
          <nord-card>
            <h2 slot="header">Card header 4</h2>
            Card content
          </nord-card>
        </nord-tab-panel>
      </nord-tab-group>
    </nord-layout>
```

### Supply Own Nav Toggle

```html
<nord-layout>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar variant="square" slot="start">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar variant="square" slot="start" size="s">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" name="interface-checked" size="s"></nord-icon>
            </nord-dropdown-item>
            <nord-dropdown-item>
              <nord-avatar variant="square" slot="start" size="s" class="n:[--n-avatar-color:var(--n-color-status-success)]">
                O
              </nord-avatar>
              Ocean Beach Clinic
            </nord-dropdown-item>
            <nord-dropdown-item>
              <nord-avatar variant="square" slot="start" class="n:[--n-avatar-color:var(--n-color-status-highlight)]" size="s">
                P
              </nord-avatar>
              Park Animal Hospital
            </nord-dropdown-item>
            <nord-dropdown-item>
              <nord-avatar variant="square" slot="start" class="n:[--n-avatar-color:var(--n-color-status-danger)]" size="s">
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
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
            <nord-avatar aria-hidden="true" name="Laura Williams" slot="start"></nord-avatar>
            Laura Williams
          </nord-button>
          <nord-dropdown-group>
            <nord-dropdown-item href="#">View profile</nord-dropdown-item>
            <nord-dropdown-item>Settings</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Show keyboard shortcuts
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
            </nord-dropdown-item>
            <nord-dropdown-item>Help & Support</nord-dropdown-item>
            <nord-dropdown-item>API</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-item>
            Sign out
            <nord-icon slot="end" name="interface-logout" size="s"></nord-icon>
          </nord-dropdown-item>
        </nord-dropdown>
      </nord-navigation>

      <nord-nav-toggle slot="nav-toggle" aria-describedby="toggle-tooltip"></nord-nav-toggle>
      <nord-tooltip id="toggle-tooltip" position="inline-end">
        Toggle navigation
        <div slot="shortcut">
          <nord-icon name="keyboard-option" size="s" label="Alt/Option key"></nord-icon>
        </div>
        <span slot="shortcut">L</span>
      </nord-tooltip>

      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end">
          <nord-icon slot="start" size="s" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <nord-banner variant="success">
            Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
          </nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Sync Nav State

```html
<nord-layout sync-nav-state>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
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
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
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
      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Syncing nav state</h2>
          <nord-banner variant="info">
            Open this example in multiple windows/tabs to see nav state get synced between them.
          </nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Theming

```html
<style>:root {
        /* CUSTOM ACCENT COLORS */
        --n-color-accent: #401197;
        --n-color-accent-secondary: #310d77;
      }
    .n-help-icon {
        color: var(--n-color-text-weak);
        margin-inline-start: calc(var(--n-space-s) / 2);
        margin-inline-end: calc(var(--n-space-s) / 3);
      }

      .help-toggle:not(:focus-within) {
        --n-button-border-color: transparent;
      }

      .help-toggle:hover {
        --n-button-background-color: var(--n-color-nav-hover);
        --n-button-color: var(--n-color-text);
      }

      .help-toggle:hover nord-icon {
        color: var(--n-color-text);
      }

      @media (max-width: 768px) {
        nord-top-bar nord-input[type="search"]:focus ~ nord-dropdown {
          display: none;
        }
      }</style>
        <nord-layout>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
                class="n:[--n-avatar-color:var(--n-color-status-info)]"
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
              <nord-nav-item href="#">Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item icon="navigation-reports">
            Reports
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#" active>Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
              <nord-nav-item href="#">Payouts</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
        <nord-dropdown expand slot="footer">
          <nord-button class="help-toggle" slot="toggle" expand>
            <nord-icon slot="start" class="n-help-icon" size="m" name="interface-help"></nord-icon>
            Help & support
          </nord-button>
          <nord-dropdown-group>
            <nord-dropdown-item>Help center</nord-dropdown-item>
            <nord-dropdown-item>Contact us</nord-dropdown-item>
            <nord-dropdown-item>Support history</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>Getting started</nord-dropdown-item>
            <nord-dropdown-item class="toggle-command-menu">
              Keyboard commands
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
            </nord-dropdown-item>
            <nord-dropdown-item>Tips & tricks</nord-dropdown-item>
            <nord-dropdown-item>Updates</nord-dropdown-item>
          </nord-dropdown-group>
        </nord-dropdown>
      </nord-navigation>

      <nord-top-bar slot="top-bar">
        <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="theming-notifications-tooltip">
            <nord-icon name="navigation-notifications" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
            <div class="n-counter n:absolute" aria-hidden="true">12</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">
            Notifications <span class="n-font-weight n-color-text-weaker">(12)</span>
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
        <nord-tooltip id="theming-notifications-tooltip">12 unread notifications</nord-tooltip>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="theming-tasks-tooltip">
            <nord-icon name="navigation-tasks" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
            <div class="n-counter n:absolute" aria-hidden="true">4</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">My tasks <span class="n-font-weight n-color-text-weaker">(4)</span></h2>
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
        <nord-tooltip id="theming-tasks-tooltip">4 unfinished tasks</nord-tooltip>

        <nord-dropdown slot="end">
          <nord-button variant="plain" slot="toggle" aria-describedby="theming-user-tooltip">
            <nord-avatar class="n:[transform:translateY(-1px)]" name="Ariel Salminen">AS</nord-avatar>
          </nord-button>
          <nord-avatar slot="header" size="s" name="Ariel Salminen">AS</nord-avatar>
          <p slot="header" class="n-color-text-weak n-font-size-s">
            Signed in as <span class="n-font-weight-active">Ariel Salminen</span>
          </p>
          <nord-dropdown-group>
            <nord-dropdown-item>My profile</nord-dropdown-item>
            <nord-dropdown-item>Account Settings</nord-dropdown-item>
            <nord-dropdown-item>Change password</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Keyboard commands
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
            </nord-dropdown-item>
            <nord-dropdown-item>Help & Support</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-item>
            Sign out
            <nord-icon slot="end" name="interface-logout"></nord-icon>
          </nord-dropdown-item>
        </nord-dropdown>
        <nord-tooltip id="theming-user-tooltip">Ariel Salminen</nord-tooltip>
      </nord-top-bar>

      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end" size="s">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <nord-banner variant="success">
            Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
          </nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Top Bar

```html
<style>.n-help-icon {
        color: var(--n-color-text-weak);
        margin-inline-start: calc(var(--n-space-s) / 2);
        margin-inline-end: calc(var(--n-space-s) / 3);
      }

      .help-toggle:not(:focus-within) {
        --n-button-border-color: transparent;
      }

      .help-toggle:hover {
        --n-button-background-color: var(--n-color-nav-hover);
        --n-button-color: var(--n-color-text);
      }

      .help-toggle:hover nord-icon {
        color: var(--n-color-text);
      }

      @media (max-width: 768px) {
        nord-top-bar nord-input[type="search"]:focus ~ nord-dropdown {
          display: none;
        }
      }</style>
        <nord-layout>
      <nord-navigation slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Bath Clinic" variant="square">B</nord-avatar>
            Bath Clinic
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar slot="start" name="Bath Clinic" size="s" variant="square">B</nord-avatar>
              Bath Clinic
              <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
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
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
              <nord-nav-item href="#">Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item icon="navigation-reports">
            Reports
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#" active>Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
              <nord-nav-item href="#">Payouts</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
        <nord-dropdown expand slot="footer">
          <nord-button class="help-toggle" slot="toggle" expand>
            <nord-icon slot="start" class="n-help-icon" size="m" name="interface-help"></nord-icon>
            Help & support
          </nord-button>
          <nord-dropdown-group>
            <nord-dropdown-item onclick="refresh()">Help center</nord-dropdown-item>
            <nord-dropdown-item onclick="refresh()">Contact us</nord-dropdown-item>
            <nord-dropdown-item onclick="refresh()">Support history</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item onclick="refresh()">Getting started</nord-dropdown-item>
            <nord-dropdown-item class="toggle-command-menu">
              Keyboard commands
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
            </nord-dropdown-item>
            <nord-dropdown-item onclick="refresh()">Tips & tricks</nord-dropdown-item>
            <nord-dropdown-item onclick="refresh()">Updates</nord-dropdown-item>
          </nord-dropdown-group>
        </nord-dropdown>
      </nord-navigation>

      <nord-top-bar slot="top-bar">
        <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="top-bar-notifications-tooltip">
            <nord-icon name="navigation-notifications" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
            <div class="n-counter n:absolute" aria-hidden="true">12</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">
            Notifications <span class="n-font-weight n-color-text-weaker">(12)</span>
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
        <nord-tooltip id="top-bar-notifications-tooltip">12 unread notifications</nord-tooltip>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="top-bar-tasks-tooltip">
            <nord-icon name="navigation-tasks" size="m" color="rgba(255,255,255,0.85)"></nord-icon>
            <div class="n-counter n:absolute" aria-hidden="true">4</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">My tasks <span class="n-font-weight n-color-text-weaker">(4)</span></h2>
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
        <nord-tooltip id="top-bar-tasks-tooltip">4 unfinished tasks</nord-tooltip>

        <nord-dropdown slot="end">
          <nord-button variant="plain" slot="toggle" aria-describedby="top-bar-user-tooltip">
            <nord-avatar class="n:[transform:translateY(-1px)]" name="Ariel Salminen">AS</nord-avatar>
          </nord-button>
          <nord-avatar slot="header" size="s" name="Ariel Salminen">AS</nord-avatar>
          <p slot="header" class="n-color-text-weak n-font-size-s">
            Signed in as <span class="n-font-weight-active">Ariel Salminen</span>
          </p>
          <nord-dropdown-group>
            <nord-dropdown-item>My profile</nord-dropdown-item>
            <nord-dropdown-item>Account Settings</nord-dropdown-item>
            <nord-dropdown-item>Change password</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Keyboard commands
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
            </nord-dropdown-item>
            <nord-dropdown-item>Help & Support</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-item>
            Sign out
            <nord-icon slot="end" name="interface-logout"></nord-icon>
          </nord-dropdown-item>
        </nord-dropdown>
        <nord-tooltip id="top-bar-user-tooltip">Ariel Salminen</nord-tooltip>
      </nord-top-bar>

      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end" size="s">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <nord-banner variant="success">
            Your order has been shipped and will arrive on May 27th. <a href="#">Track order</a>.
          </nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
    <nord-command-menu .commands=${toggleNavCommands}></nord-command-menu>
```

### Nav Toggle In Header

```html
<nord-layout hide-default-nav-toggle>
      <nord-navigation slot="nav">
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-payments">Payments</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>

      <nord-header slot="header">
        <nord-nav-toggle auto-hide></nord-nav-toggle>
        <h1 class="n-typescale-l">Dashboard</h1>
      </nord-header>

      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <p>The toggle in the header above closes and opens the nav exactly like the layout's built-in one.</p>
        </nord-card>
      </nord-stack>
    </nord-layout>
```

### Multiple Nav Toggles

```html
<nord-layout hide-default-nav-toggle>
      <nord-navigation slot="nav">
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>

      <nord-header slot="header">
        <nord-nav-toggle auto-hide></nord-nav-toggle>
        <h1 class="n-typescale-l">Dashboard</h1>
      </nord-header>

      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Need the menu?</h2>
          <p>You can also open the navigation from here:</p>
          <nord-nav-toggle auto-hide></nord-nav-toggle>
        </nord-card>
      </nord-stack>
    </nord-layout>
```

### Custom Nav Toggle Icons

```html
<nord-layout hide-default-nav-toggle>
      <nord-navigation slot="nav">
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>

      <nord-header slot="header">
        <nord-nav-toggle auto-hide icon="navigation-toggle" icon-active="interface-close-small"></nord-nav-toggle>
        <h1 class="n-typescale-l">Dashboard</h1>
      </nord-header>

      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Custom icons</h2>
          <p>Hover or focus the toggle (≥ 768px viewport) to see the icon swap.</p>
        </nord-card>
      </nord-stack>
    </nord-layout>
```

### Nav Open Change Listener

```html
<nord-layout hide-default-nav-toggle>
      <nord-navigation slot="nav">
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>

      <nord-header slot="header">
        <nord-nav-toggle auto-hide></nord-nav-toggle>
        <h1 class="n-typescale-l">Dashboard</h1>
      </nord-header>

      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Live nav state</h2>
          <p>Toggle the nav and watch this badge update — driven by the <code>nav-open-change</code> event.</p>
          <nord-badge id="nav-status" variant="success">opened</nord-badge>
        </nord-card>
      </nord-stack>
    </nord-layout>
```

### Nav Resize Listener

```html
<nord-layout hide-default-nav-toggle>
      <nord-navigation slot="nav">
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>

      <nord-header slot="header">
        <nord-nav-toggle auto-hide></nord-nav-toggle>
        <h1 class="n-typescale-l">Dashboard</h1>
      </nord-header>

      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Live nav width</h2>
          <p>Drag the resize handle and watch these values update — driven by the <code>nav-resize</code> event.</p>
          <nord-stack gap="s" direction="horizontal">
            <nord-badge id="nav-width" variant="highlight">250px</nord-badge>
            <nord-badge id="nav-event-count" variant="neutral">0 events</nord-badge>
          </nord-stack>
        </nord-card>
      </nord-stack>
    </nord-layout>
```

### Rail Collapse

```html
<style>
      /* =========================================================================
         Provet APP SHELL — RAIL COLLAPSE STORY

         Mirrors the new Provet app shell. Token values copied verbatim
         from provet-cloud-frontend/app/assets/css/global.css.
         ========================================================================= */

      /* ----- Tokens ------------------------------------------------------- */
      #storybook-root {
        /* Shared 5×5 dot used by the support-chat rail-mode dot AND the
           rail-mode collapsed appearance of the nav-item [slot='end'] pill. */
        --_app-shell-rail-dot-size: 5px;
      }

      /* ----- Layout host -------------------------------------------------- */
      nord-layout {
        --n-layout-background-color: var(--n-color-surface-background);
        --n-layout-padding: var(--n-space-s) var(--n-space-s) var(--n-space-s) 1px;
        --n-layout-header-size: 70px;
        --n-layout-nav-border-color: transparent;
        --n-layout-nav-rail-width: 48px;
        --n-layout-resize-color: var(--n-color-border-hover);
        --n-layout-resize-block-size: calc(100% - calc(var(--n-space-s) * 2) + 2px);
      }

      /* ----- Navigation container ---------------------------------------- */
      .app-shell-navigation {
        --n-navigation-background-color: transparent;
        --n-navigation-header-block-size: auto;
        --n-navigation-header-divider: 0;
        --n-navigation-padding-block: var(--n-space-xs);
        --n-navigation-padding-inline: var(--n-space-s);
        --n-navigation-footer-padding-inline: 0;
        --n-navigation-scroll-shadow-color-start: transparent;
        --n-navigation-scroll-shadow-color-end: transparent;
        --n-navigation-scroll-mask: linear-gradient(
          to bottom,
          transparent 0,
          black 12px,
          black calc(100% - 12px),
          transparent 100%
        );
      }
      /* Subnav group headings repeat the parent item's label when rendered inline,
         so hide them here. NavGroup still shows them in the rail flyout, where
         the heading is the only title for the projected list. */
      .app-shell-navigation nord-nav-group[slot='subnav'] {
        --n-nav-group-heading-display: none;
      }

      /* ----- Nav items (body + rail flyout chrome) ----------------------- */
      .app-shell-navigation nord-nav-item {
        --n-nav-item-line-height: var(--n-size-icon-m);
        --n-nav-item-background-active: var(--n-color-nav-selected);
        --n-nav-item-color-active: var(--n-color-text);
        --n-nav-item-background-expanded: var(--n-color-nav-hover);
        --n-nav-item-expanded-overlay-opacity: 1;
        --n-nav-item-expanded-overlay-filter: none;
        --n-nav-item-box-shadow: 0;
        --n-rail-flyout-background: var(--n-color-surface-background);
        --n-rail-flyout-min-inline-size: 176px;
        --n-rail-flyout-offset-inline: calc(var(--n-space-xs) * 1.25);
        --n-rail-flyout-offset-block: calc(var(--n-space-xs) * -1.25);
        /* Tighten the built-in badge-attribute pill so its proportions match
           the slot=end .app-shell-badge variant (compact Provet look:
           smaller font, no block padding, icon-m line-height defines height). */
        --n-nav-badge-font-size: var(--n-font-size-xxs);
        --n-nav-badge-padding-block: 0;
        --n-nav-badge-padding-inline: 5px;
        --n-nav-badge-line-height: var(--n-size-icon-m);
        --n-nav-badge-min-inline-size: var(--n-size-icon-xxs);
        min-inline-size: 30px;
      }

      /* ----- Header (clinic dropdown) ------------------------------------ */
      .app-shell-header {
        /* nord-navigation zeros out the header slot's button radius; restore it so
           the clinic switcher matches the rounded footer buttons. */
        --n-button-border-radius: var(--n-border-radius-s);

        /* Clinic names can be long — let them wrap to a new line inside the
           dropdown items instead of truncating, and anchor the avatar to the
           first line. The custom properties cascade into the dropdown-items. */
        --n-dropdown-item-white-space: normal;
        --n-dropdown-item-align-items: flex-start;

        display: flex;
        align-items: center;
        gap: var(--n-space-xs);
        /* stylelint-disable-next-line scale-unlimited/declaration-strict-value */
        padding: calc(var(--n-space-s) + var(--n-space-xs)) 7px var(--n-space-xs); /* 7px from Figma */
      }
      .app-shell-header nord-button {
        --n-button-min-block-size: var(--pc-topbar-size);
        --n-button-padding-inline: var(--n-space-xs);

        /* The nord-button's "expand" attribute only stretches the inner button
           to 100% of its host (via display: block + --_n-button-inline-size: 100%);
           the host itself stays content-sized as a flex item in this header.
           Force the host to fill its flex slot so the dropdown trigger spans
           the full header row. */
        inline-size: 100%;
      }
      .app-shell-header nord-button nord-avatar,
      .app-shell-footer nord-button nord-avatar {
        min-inline-size: var(--n-size-icon-l);
        min-block-size: var(--n-size-icon-l);
      }

      /* ----- Footer (support + account) ---------------------------------- */
      .app-shell-footer {
        display: flex;
        flex-direction: column;
        /* stylelint-disable-next-line scale-unlimited/declaration-strict-value */
        padding-inline: 6px; /* from Figma */
      }
      .app-shell-footer nord-nav-item {
        --n-nav-item-padding-block: var(--n-space-xs);
        --n-nav-item-padding-inline: var(--n-space-xs);
        --n-nav-item-icon-gap: calc(var(--n-space-xs) * 1.5);
        --n-nav-item-line-height: 1;
      }
      /* Shared base for the footer dropdown trigger + support button. State
         overrides (hover, focus, open) live in the next section. */
      .app-shell-footer nord-dropdown,
      .app-shell-footer nord-button {
        --n-button-toggle-icon-color: transparent;
        --n-button-color: var(--n-color-text-weak);
        --n-button-border-color: transparent;
        --n-button-background-color: transparent;
        --n-button-min-block-size: 0;
        --n-button-padding-inline: calc(var(--n-space-xs) * 1.4);
      }

      /* ----- Dropdown / button states (header + footer triggers) -------- */
      .app-shell-navigation nord-dropdown {
        inline-size: 100%;
      }
      .app-shell-header nord-dropdown {
        --n-button-font-weight: var(--n-font-weight-heading);
      }
      /* Layout placeholder that reserves the checkmark's space in non-selected
         clinic items so every row's label end aligns with the selected one.
         visibility: hidden keeps the box in flow; aria-hidden on the markup
         keeps the placeholder out of the accessibility tree. */
      .app-shell-checkmark-placeholder {
        visibility: hidden;
      }
      /* Nudge the clinic label down so it optically aligns with the square
         avatar's first line (the dropdown-items anchor their slots to
         flex-start). */
      .app-shell-clinic-label {
        margin-block-start: calc(var(--n-space-xs) / 2);
        display: block;
      }
      /* The clinic items anchor their slots to flex-start (for wrapping names);
         the single-line Settings item should stay vertically centered instead. */
      .app-shell-settings-item {
        --n-dropdown-item-align-items: center;
      }
      .app-shell-navigation nord-dropdown:not([open]) {
        --n-button-border-color: transparent;
        --n-button-box-shadow: transparent;
        --n-button-background-color: transparent;
      }
      .app-shell-navigation nord-dropdown[open] {
        --n-button-background-color: var(--n-color-nav-selected);
        --n-button-box-shadow: none;
      }
      /* Keep the selected background while the toggle button is hovered or
         focused — .app-shell-footer nord-button:hover/focus-within would
         otherwise outrank the [open] rule above and revert to hover color. */
      .app-shell-footer nord-dropdown[open] nord-button {
        --n-button-background-color: var(--n-color-nav-selected);
      }
      .app-shell-navigation nord-dropdown:hover:not([open]),
      .app-shell-footer nord-button:hover {
        --n-button-background-color: var(--n-color-nav-hover);
      }
      /* Restore the accent focus ring on keyboard navigation. The :not([open])
         base rule sets border/shadow to transparent, which would otherwise win
         over Button.css :focus-visible fallback. */
      .app-shell-navigation nord-dropdown:focus-within:not([open]),
      .app-shell-footer nord-button:focus-within {
        --n-button-border-color: var(--n-color-accent);
        --n-button-box-shadow: 0 0 0 1px var(--n-color-accent), var(--n-box-shadow);
      }

      /* ----- Support chat link button ------------------------------------ */
      /* Self-contained block: base styles for the inline count pill and
         icon-circle (visible in expanded mode), the rail-mode-only corner dot
         (replaces the count pill in rail mode), and rail-mode visibility
         toggles. Double-class on the count rule outweighs .app-shell-badge —
         without it, .app-shell-badge { position: absolute } (declared later in
         source) wins at equal specificity and the count overlaps the label
         instead of taking flow space, defeating truncate inside the button. */
      .app-shell-badge.support-chat-link-count {
        position: static;
        margin: 0;
        /* nord-button (size=m) gives 8px gap between every slotted child.
           We only want to tighten the badge's pre-gap to match the nav-item
           case (4px) — using --n-button-gap here would also pull the
           start-icon closer to the label. Negative margin subtracts 4px
           specifically before the badge: 8px gap - 4px = 4px net. */
        margin-inline-start: calc(-1 * var(--n-space-xs));
      }
      .support-chat-link-icon-circle {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;
        padding: var(--n-space-xs);
        line-height: 0;
        color: var(--n-color-text-weak);
      }
      .support-chat-link-rail-dot {
        display: none;
      }
      /* Rail mode: hide the inline count pill (the corner dot replaces it). */
      nord-layout[collapse-mode='rail']:not([nav-open]) .support-chat-link-count {
        display: none;
      }
      /* Rail mode: reveal the corner dot, pinned to the icon-circle's
         inset-bs-inline-end corner (mirrors the slot=badge dot on nav-items). */
      nord-layout[collapse-mode='rail']:not([nav-open]) .support-chat-link-rail-dot {
        display: inline-block;
        position: absolute;
        inset-block-start: -2px;
        inset-inline-end: -3px;
        min-inline-size: var(--_app-shell-rail-dot-size);
        inline-size: var(--_app-shell-rail-dot-size);
        block-size: var(--_app-shell-rail-dot-size);
        border-radius: var(--n-border-radius-circle);
        background: var(--n-color-status-notification);
      }

      /* ----- Badge (inline pill) ----------------------------------------- */
      /* In nord-dropdown-item's end slot the badge needs to flow with the
         slot's flex layout (so it centres vertically). NDS forces
         color: var(--n-dropdown-item-color, var(--n-color-text)) !important
         on every slotted descendant on hover — feeding our white into that
         same var keeps the hover state white without an !important arms race. */
      .app-shell-footer nord-dropdown-item .app-shell-badge {
        --n-dropdown-item-color: var(--n-color-surface);

        position: static;
        margin: 0;
      }

      /* Shared base for both count-pill variants: the absolute-positioned
         inline badge (anchored to nav-item corners) and the slightly smaller
         rail-tooltip-count rendered inside the rail-mode tooltip.
         white-space: nowrap keeps multi-digit counts ("12", "39") on one
         line — without it the box may wrap when it sits inside flex parents
         (e.g. nord-tooltip uses display: flex). */
      .app-shell-badge,
      .app-shell-rail-tooltip-count {
        display: inline-block;
        padding-block: 0;
        border-radius: var(--n-border-radius-pill);
        color: var(--n-color-surface);
        text-align: center;
        padding-inline: 5px;
        /* Proportional digits make "12" look end-shifted inside a centered
           pill (the "1" glyph is narrower than "2"). Tabular figures force
           equal widths so multi-digit counts read symmetrically. */
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      /* In-flow by default — sits as a flex sibling of the nav-item label so the
         label flex-shrinks and any nord-truncate inside ellipsizes against the
         real available width. Rail mode below pulls the badge out of flow as a
         corner dot. */
      .app-shell-badge {
        /* Spacing from the preceding element. NavItem's .n-nav-content has no
           container gap so each child controls its own pre-margin. */
        margin-inline-start: var(--n-space-xs);
        min-inline-size: var(--n-size-icon-xxs);
        background: var(--n-color-status-notification);
        font-size: var(--n-font-size-xs);
        /* Box height set via line-height so the line-box itself defines the
           pill's vertical bounds — no padding-block rounding artefacts, and
           digits sit at their natural cap-height position inside it. */
        line-height: var(--n-size-icon-m);
        font-weight: var(--n-font-weight);
      }
      /* Smaller pill rendered inside the rail-mode tooltip; subtle white
         overlay on the notification colour lifts contrast against the dark
         tooltip background. min-inline-size sets a visual floor for the
         single-digit case; multi-digit counts grow the box as needed.
         flex-shrink: 0 stops nord-tooltip's flex layout from squeezing the
         pill below its content+padding size (which made it look like no
         inline-end padding was being applied). */
      .app-shell-rail-tooltip-count {
        flex-shrink: 0;
        min-inline-size: var(--n-size-icon-s);
        background:
          linear-gradient(rgb(255, 255, 255, 0.1), rgb(255, 255, 255, 0.1)), /* stylelint-disable-line scale-unlimited/declaration-strict-value */
          var(--n-color-status-notification);
        font-size: var(--n-font-size-xxs);
        font-weight: var(--n-font-weight-active);
      }
      /* Rail mode: collapse slot=badge pills into a dot. The count text is
         hidden; consumers should keep the count in the default slot so it
         appears in the tooltip on hover. */
      /* Direct-child selector + nord-nav-item ancestor scopes this to nav-item
         badges only — the support button's slot=end count uses the same class
         but lives in a nord-button and is hidden via its own rule in rail mode. */
      nord-layout[collapse-mode='rail']:not([nav-open]) nord-nav-item > .app-shell-badge[slot='end'] {
        display: inline-block;
        /* Out-of-flow corner dot — overrides the in-flow default so it pins to
           the rail-item icon's inset-bs-inline-end corner. z-index sits above the
           rail button's :focus index bump (var(--n-index-masked) = 100). */
        position: absolute;
        z-index: 101;
        inset-block-start: 3px;
        inset-inline-end: 2px;
        margin: 0;
        padding: 0;
        min-inline-size: var(--_app-shell-rail-dot-size);
        inline-size: var(--_app-shell-rail-dot-size);
        block-size: var(--_app-shell-rail-dot-size);
        /* stylelint-disable-next-line scale-unlimited/declaration-strict-value */
        font-size: 0;
        color: transparent;
        overflow: hidden;
      }

      /* ----- User dropdown header --------------------------------------- */
      .app-shell-user-dropdown-header-text {
        font-size: var(--n-font-size-s);
        color: var(--n-color-text-weak);
      }
      .app-shell-user-dropdown-header-text strong {
        font-weight: var(--n-font-weight-active);
      }

      /* Resize-handle tooltip body (slotted into nord-layout tooltip-divider). */
      .n-resize-tooltip-body p {
        margin: 0;
        display: flex;
        align-items: center;
        gap: var(--n-space-xs);
      }
      .n-resize-tooltip-body p + p {
        margin-block-start: var(--n-space-xs);
      }
      .n-resize-tooltip-body strong {
        font-weight: var(--n-font-weight-active);
      }
      .n-resize-tooltip-body span {
        color: rgb(255, 255, 255, 0.6); /* stylelint-disable-line scale-unlimited/declaration-strict-value */
      }

      /* ----- Main card header --------------------------------------------- */
      .main-card {
        --n-card-header-padding-block: var(--n-space-s);
      }

      .main-card-header {
        display: flex;
        align-items: center;
        gap: var(--n-space-s);
      }
      .main-card-header h2 {
        margin: 0;
      }

      /* ----- Rail-mode-only divider --------------------------------------- */
      /* (Support-chat dot + count-hide rules live with the rest of the support
         button styles; the [slot='end'] rail-collapse lives with the badge.) */
      /* The divider replaces the Workspace nav-group heading (which is hidden
         in rail mode). */
      .app-shell-rail-divider {
        display: none;
      }
      nord-layout[collapse-mode='rail']:not([nav-open]) .app-shell-rail-divider {
        display: block;
        /* +2px / +3px is optical centering against the nav-items above/below. */
        margin-block: calc(var(--n-space-m) + 2px) calc(var(--n-space-m) + 3px);
        min-inline-size: 32px;
      }
    </style>
    <nord-layout collapse-mode="rail" hide-default-nav-toggle hide-collapse-button toggle-on-resize-click min-nav-width="175" default-nav-width="200" max-nav-width="400">
      <div slot="tooltip-divider" class="n-resize-tooltip-body">
        <p>
          <strong>Click</strong>
          <span>or</span>
          <nord-kbd-group aria-hidden="true">
            <nord-kbd size="s" variant="dark">${altKey}</nord-kbd>
            <nord-kbd size="s" variant="dark">L</nord-kbd>
          </nord-kbd-group>
        </p>
        <p>
          <strong>Drag</strong>
          <span>to resize</span>
        </p>
      </div>
      <nord-navigation slot="nav" sticky-footer class="app-shell-navigation">
        <div slot="header" class="app-shell-header">
          <nord-dropdown expand size="m" align="start" position="block-end">
            <nord-button slot="toggle" type="button" expand hide-dropdown-icon aria-label="Switch clinic location" data-rail-tooltip="rail-tooltip-clinic">
              <nord-avatar slot="start" name="Bristol Clinic" variant="square" class="n:[--n-avatar-color:#310D77]" aria-hidden="true">B</nord-avatar>
              <nord-truncate>Bristol Clinic</nord-truncate>
            </nord-button>
            <nord-dropdown-group>
              <nord-dropdown-item>
                <nord-avatar slot="start" name="Bristol Clinic" size="s" variant="square" class="n:[--n-avatar-color:#310D77]" aria-hidden="true">B</nord-avatar>
                <span class="app-shell-clinic-label">Bristol Clinic</span>
                <nord-icon slot="end" class="n:m-bs-xs" name="interface-checked"></nord-icon>
              </nord-dropdown-item>
              <nord-dropdown-item>
                <nord-avatar slot="start" name="Ocean Beach Clinic" size="s" variant="square" class="n:[--n-avatar-color:var(--n-color-status-success)]" aria-hidden="true">O</nord-avatar>
                <span class="app-shell-clinic-label">Ocean Beach Clinic Ocean Beach Clinic Ocean Beach Clinic</span>
                <nord-icon slot="end" name="interface-checked" class="app-shell-checkmark-placeholder" aria-hidden="true"></nord-icon>
              </nord-dropdown-item>
              <nord-dropdown-item>
                <nord-avatar slot="start" name="Park Animal Hospital" size="s" variant="square" class="n:[--n-avatar-color:var(--n-color-status-highlight)]" aria-hidden="true">P</nord-avatar>
                <span class="app-shell-clinic-label">Park Animal Hospital</span>
                <nord-icon slot="end" name="interface-checked" class="app-shell-checkmark-placeholder" aria-hidden="true"></nord-icon>
              </nord-dropdown-item>
              <nord-dropdown-item>
                <nord-avatar slot="start" name="Balboa Pet Hospital" size="s" variant="square" class="n:[--n-avatar-color:var(--n-color-status-danger)]" aria-hidden="true">B</nord-avatar>
                <span class="app-shell-clinic-label">Balboa Pet Hospital</span>
                <nord-icon slot="end" name="interface-checked" class="app-shell-checkmark-placeholder" aria-hidden="true"></nord-icon>
              </nord-dropdown-item>
              <nord-dropdown-item>
                <nord-avatar slot="start" name="Riverside Vet" size="s" variant="square" aria-hidden="true">R</nord-avatar>
                <span class="app-shell-clinic-label">Riverside Vet</span>
                <nord-icon slot="end" name="interface-checked" class="app-shell-checkmark-placeholder" aria-hidden="true"></nord-icon>
              </nord-dropdown-item>
              <nord-dropdown-item>
                <nord-avatar slot="start" name="Hillside Pet Care" size="s" variant="square" class="n:[--n-avatar-color:var(--n-color-status-warning)]" aria-hidden="true">H</nord-avatar>
                <span class="app-shell-clinic-label">Hillside Pet Care</span>
                <nord-icon slot="end" name="interface-checked" class="app-shell-checkmark-placeholder" aria-hidden="true"></nord-icon>
              </nord-dropdown-item>
              <nord-dropdown-item>
                <nord-avatar slot="start" name="Lakeside Animal Hospital" size="s" variant="square" class="n:[--n-avatar-color:var(--n-color-status-info)]" aria-hidden="true">L</nord-avatar>
                <span class="app-shell-clinic-label">Lakeside Animal Hospital</span>
                <nord-icon slot="end" name="interface-checked" class="app-shell-checkmark-placeholder" aria-hidden="true"></nord-icon>
              </nord-dropdown-item>
            </nord-dropdown-group>
            <nord-dropdown-group>
              <nord-dropdown-item href="#" class="app-shell-settings-item">
                <nord-icon slot="start" name="navigation-settings"></nord-icon>
                Settings
              </nord-dropdown-item>
            </nord-dropdown-group>
          </nord-dropdown>
          <nord-tooltip id="rail-tooltip-clinic" position="inline-end">Bristol Clinic</nord-tooltip>
        </div>

        <nord-nav-item icon="navigation-search">
          <nord-truncate>Search</nord-truncate>
          <span slot="rail-tooltip">Search</span>
          <nord-kbd-group slot="rail-tooltip" aria-hidden="true">
            <nord-kbd size="s" variant="dark">${altKey}</nord-kbd>
            <nord-kbd size="s" variant="dark">S</nord-kbd>
          </nord-kbd-group>
        </nord-nav-item>
        <nord-nav-item icon="navigation-notifications" href="#" badge="+99">
          <nord-truncate>Notifications</nord-truncate>
          <span slot="rail-tooltip">Notifications</span>
          <span slot="rail-tooltip" class="app-shell-rail-tooltip-count" aria-hidden="true">+99</span>
          <nord-kbd-group slot="rail-tooltip" aria-hidden="true">
            <nord-kbd size="s" variant="dark">${altKey}</nord-kbd>
            <nord-kbd size="s" variant="dark">N</nord-kbd>
          </nord-kbd-group>
          <nord-visually-hidden>+99 unread notifications</nord-visually-hidden>
        </nord-nav-item>
        <nord-nav-item icon="navigation-tasks" href="#" badge="39">
          <nord-truncate>Tasks</nord-truncate>
          <span slot="rail-tooltip">Tasks</span>
          <span slot="rail-tooltip" class="app-shell-rail-tooltip-count" aria-hidden="true">39</span>
          <nord-visually-hidden>39 pending tasks</nord-visually-hidden>
        </nord-nav-item>

        <nord-nav-item href="#" icon="interface-chat"><nord-truncate>Conversations</nord-truncate></nord-nav-item>
        <nord-nav-item href="#" active icon="navigation-dashboard">
          <nord-truncate>Dashboard</nord-truncate>
          <span slot="rail-tooltip">Dashboard</span>
          <nord-kbd-group slot="rail-tooltip" aria-hidden="true">
            <nord-kbd size="s" variant="dark">${altKey}</nord-kbd>
            <nord-kbd size="s" variant="dark">D</nord-kbd>
          </nord-kbd-group>
        </nord-nav-item>
        <nord-nav-item href="#" icon="interface-calendar"><nord-truncate>Calendar</nord-truncate></nord-nav-item>
        <nord-nav-item href="#" icon="file-patient-records"><nord-truncate>Clients & Patients</nord-truncate></nord-nav-item>

        <nord-divider class="app-shell-rail-divider"></nord-divider>

        <nord-nav-group heading="Workspace" class="n:mbs-xs">
          <nord-nav-item icon="medical-heart-rate">
            <nord-truncate>Patient care</nord-truncate>
            <nord-nav-group slot="subnav" heading="Patient care">
              <nord-nav-item href="#">My workspace</nord-nav-item>
              <nord-nav-item href="#">Prescriptions</nord-nav-item>
              <nord-nav-item href="#">Consultations</nord-nav-item>
              <nord-nav-item href="#">Triage</nord-nav-item>
              <nord-nav-item href="#">Plans</nord-nav-item>
              <nord-nav-item href="#">Laboratory</nord-nav-item>
              <nord-nav-item href="#">Diagnostic imaging</nord-nav-item>
              <nord-nav-item href="#">Patient referrals</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            <nord-truncate>Billing</nord-truncate>
            <nord-nav-group slot="subnav" heading="Billing">
              <nord-nav-item href="#">Invoices</nord-nav-item>
              <nord-nav-item href="#">Estimates</nord-nav-item>
              <nord-nav-item href="#">Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item icon="navigation-scheduling">
            <nord-truncate>Scheduling</nord-truncate>
            <nord-nav-group slot="subnav" heading="Scheduling">
              <nord-nav-item href="#">Appointments</nord-nav-item>
              <nord-nav-item href="#">Resources</nord-nav-item>
              <nord-nav-item href="#">Templates</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item icon="file-patient-records">
            <nord-truncate>Catalog</nord-truncate>
            <nord-nav-group slot="subnav" heading="Catalog">
              <nord-nav-item href="#">Services</nord-nav-item>
              <nord-nav-item href="#">Products</nord-nav-item>
              <nord-nav-item href="#">Bundles</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item icon="navigation-tasks">
            <nord-truncate>Inventory</nord-truncate>
            <nord-nav-group slot="subnav" heading="Inventory">
              <nord-nav-item href="#">Stock</nord-nav-item>
              <nord-nav-item href="#">Suppliers</nord-nav-item>
              <nord-nav-item href="#">Orders</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item href="#" icon="navigation-reports"><nord-truncate>Reports</nord-truncate></nord-nav-item>
        </nord-nav-group>

        <div slot="footer" class="app-shell-footer">
          <nord-dropdown expand size="m" align="end" position="inline-end" side-offset="11">
            <nord-button slot="toggle" type="button" class="support-chat-link-item" expand hide-dropdown-icon aria-label="Support" data-rail-tooltip="rail-tooltip-support">
              <span slot="start" class="support-chat-link-icon-circle">
                <nord-icon size="m" name="interface-help"></nord-icon>
                <span class="support-chat-link-rail-dot" aria-hidden="true"></span>
              </span>
              <nord-truncate>Help & Support</nord-truncate>
              <span slot="end" class="app-shell-badge support-chat-link-count" aria-hidden="true">1</span>
              <nord-visually-hidden>1 unread message</nord-visually-hidden>
            </nord-button>
            <nord-dropdown-group>
              <nord-dropdown-item>
                Support chat
                <span slot="end" class="app-shell-badge" aria-hidden="true">1</span>
              </nord-dropdown-item>
            </nord-dropdown-group>
            <nord-dropdown-group>
              <nord-dropdown-item>Release information</nord-dropdown-item>
              <nord-dropdown-item>What's new</nord-dropdown-item>
            </nord-dropdown-group>
            <nord-dropdown-group>
              <nord-dropdown-item>Keyboard commands</nord-dropdown-item>
            </nord-dropdown-group>
          </nord-dropdown>
          <nord-tooltip id="rail-tooltip-support" position="inline-end">
            Help & Support
            <span class="app-shell-rail-tooltip-count" aria-hidden="true">1</span>
          </nord-tooltip>
          <nord-dropdown expand size="m" align="end" position="inline-end" side-offset="11">
            <nord-button slot="toggle" type="button" expand hide-dropdown-icon aria-label="Account menu" data-rail-tooltip="rail-tooltip-account">
              <nord-avatar slot="start" name="Laura Williams" aria-hidden="true"></nord-avatar>
              <nord-truncate>Laura Williams</nord-truncate>
            </nord-button>
            <nord-avatar slot="header" size="s" name="Laura Williams" aria-hidden="true"></nord-avatar>
            <span slot="header" class="app-shell-user-dropdown-header-text">
              Signed in as <strong>Laura Williams</strong>
            </span>
            <nord-dropdown-group>
              <nord-dropdown-item href="#">
                Switch user
              </nord-dropdown-item>
              <nord-dropdown-item>
                My profile
              </nord-dropdown-item>
            </nord-dropdown-group>
            <nord-dropdown-group>
              <nord-dropdown-item>
                Sign out
                <nord-icon slot="end" name="interface-logout"></nord-icon>
              </nord-dropdown-item>
            </nord-dropdown-group>
          </nord-dropdown>
          <nord-tooltip id="rail-tooltip-account" position="inline-end">Laura Williams</nord-tooltip>
        </div>
      </nord-navigation>
      <nord-stack gap="l">
        <nord-card class="main-card n:[block-size:calc(100vh-var(--n-space-s)*2)]">
          <div slot="header" class="main-card-header">
            <nord-nav-toggle auto-hide square size="s" icon-size="s" icon="navigation-drawer-left-expand" icon-active="navigation-drawer-left-collapse" aria-label="Toggle sidebar" aria-describedby="nav-toggle-tooltip"></nord-nav-toggle>
            <nord-tooltip id="nav-toggle-tooltip" position="block-end">
              <span class="nav-toggle-tooltip-label n:font-default">Click to expand</span>
              <nord-kbd-group aria-hidden="true">
                <nord-kbd size="s" variant="dark">${altKey}</nord-kbd>
                <nord-kbd size="s" variant="dark">L</nord-kbd>
              </nord-kbd-group>
            </nord-tooltip>
            <h2 class="n-typescale-m n-font-weight-heading">Icon rail collapse</h2>
          </div>
          <nord-stack slot="header-end" direction="horizontal" gap="s">
            <nord-button size="s" variant="default" type="button">
              End of day
            </nord-button>
            <nord-button size="s" variant="primary" type="button">
              <nord-icon slot="start" name="interface-add-small"></nord-icon>
              Counter sale
            </nord-button>
          </nord-stack>
          <nord-banner>
            Mirrors the new Provet app shell. When the nav is closed it stays as a narrow icon
            rail. Hover an icon to see its label; items with a <code>subnav</code> slot open a flyout
            panel on click. The clinic switcher in the header and account dropdown in the footer
            compress to the avatar.
          </nord-banner>
        </nord-card>
      </nord-stack>
    </nord-layout>
```

### Hide Collapse Fit Content

```html
<nord-layout ${ref(collapseNavOnMount)} collapse-mode="hide" min-nav-width="180" max-nav-width="500">
            <nord-navigation slot="nav" sticky-footer>
              <nord-nav-item icon="interface-grid" href="#" active>Dashboard</nord-nav-item>
              <nord-nav-item icon="navigation-search" href="#">Search</nord-nav-item>
              <nord-nav-item icon="interface-calendar" href="#">Schedule</nord-nav-item>
              <nord-nav-item icon="user-single" href="#">Clients</nord-nav-item>
              <nord-nav-item icon="interface-edit" href="#">Consultations and Patients data along with its insights</nord-nav-item>
            </nord-navigation>
            <nord-header slot="header">
              <h1 class="n-typescale-l">Hide mode — fit to content</h1>
            </nord-header>
            <nord-stack gap="l">
              <p>The nav is in <code>collapse-mode="hide"</code>. Hover the inline-start edge to reveal the peek flyout — it sizes to its content instead of a fixed <code>default-nav-width</code>.</p>
            </nord-stack>
          </nord-layout>
```

### Doc Overview

```html
<nord-layout>
      <nord-navigation slot="nav">
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>
      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button variant="primary" slot="end">
          <nord-icon slot="start" name="interface-add-small"></nord-icon>
          Create new
        </nord-button>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>
          <h2 slot="header">Card heading</h2>
          <nord-banner variant="success"
            >Your order has been shipped and will arrive on May 27th.
            <a href="#">Track order</a>.</nord-banner
          >
        </nord-card>
      </nord-stack>
    </nord-layout>
```

### Doc Navigation

```html
<nord-layout>
      <nord-navigation slot="nav">
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-payments">Payments</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>
      <nord-stack gap="l">
        <nord-card>Main content goes here.</nord-card>
      </nord-stack>
    </nord-layout>
```

### Doc Top Bar

```html
<nord-layout>
      <nord-navigation slot="nav">
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>
      <nord-top-bar slot="top-bar">
        <nord-input expand label="Search" hide-label type="search" placeholder="Search"></nord-input>
      </nord-top-bar>
      <nord-stack gap="l">
        <nord-card>Main content goes here.</nord-card>
      </nord-stack>
    </nord-layout>
```

### Doc Sticky Footer

```html
<nord-layout sticky-footer>
      <nord-navigation slot="nav">
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>
      <nord-stack gap="l">
        <nord-card>Main content goes here.</nord-card>
      </nord-stack>
      <nord-footer slot="footer">
        <nord-button-group variant="spaced">
          <nord-button>Default</nord-button>
          <nord-button variant="primary">Primary</nord-button>
        </nord-button-group>
      </nord-footer>
    </nord-layout>
```

### Doc Nav Toggle In Header

```html
<nord-layout hide-default-nav-toggle>
      <nord-navigation slot="nav">
        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" active icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>
      <nord-header slot="header">
        <nord-nav-toggle auto-hide></nord-nav-toggle>
        <h1 class="n-typescale-l">Dashboard</h1>
      </nord-header>
      <nord-stack gap="l">
        <nord-card>Main content goes here.</nord-card>
      </nord-stack>
    </nord-layout>
```

## API Reference

### Properties

- **nav-open** (`boolean`) — Controls whether the navigation is hidden off-screen or not.
Defaults to <code>true</code> for wide viewports, and <code>false</code> otherwise.
- **persist-nav-state** (`boolean`, default: `false`) — Controls whether the navigation's open/closed state is persisted across page loads.
This is useful for multi-page apps, where clicks on links trigger a full page load.
- **sync-nav-state** (`boolean`, default: `false`) — Controls whether the navigation's open/closed state and width is synced across tabs/windows on the same origin.
This is useful for long-lived app sessions where you may have multiple tabs/windows open at once.
- **default-nav-width** (`number`, default: `250`) — Initial width (in pixels) of the navigation sidebar when no value has been persisted.
Changing this value between loads also re-seeds the persisted width for existing users,
so design changes propagate without manual localStorage resets.
- **min-nav-width** (`number`, default: `220`) — Minimum width (in pixels) the navigation sidebar can be resized to via drag or keyboard.
- **max-nav-width** (`number`, default: `400`) — Maximum width (in pixels) the navigation sidebar can be resized to via drag or keyboard.
- **nav-rail-width** (`number`, default: `64`) — Width (in pixels) of the rail column when <code>collapse-mode="rail"</code> is active
and the nav is closed. Default 64.
- **padding** (`'m' | 'none'`, default: `'m'`) — Controls the padding of the default main section slot. When set to “none”,
the nav and header slots will still have padding.
- **sticky** (`boolean`, default: `false`) — Controls whether the layout's header has sticky positioning.
- **sticky-footer** (`boolean`, default: `false`) — Controls whether the layout's footer has sticky positioning.
- **hide-default-nav-toggle** (`boolean`, default: `false`) — Suppresses the built-in <code>&lt;nord-nav-toggle&gt;</code> rendered as the fallback for
the <code>nav-toggle</code> slot. Set this when you've placed your own
<code>&lt;nord-nav-toggle&gt;</code> elsewhere inside the layout (e.g. inside
<code>&lt;nord-header&gt;</code>) and want the layout's default one hidden.
- **hide-collapse-button** (`boolean`, default: `false`) — Suppresses the built-in collapse button rendered inside the nav (the
lock-icon button that toggles the sidebar between opened and the
collapsed state defined by <code>collapse-mode</code>). Set this when you've
placed your own collapse control elsewhere.
- **toggle-on-resize-click** (`boolean`, default: `false`) — When set, clicking the resize handle (without dragging) toggles the
nav between opened and the collapsed state defined by <code>collapse-mode</code>.
Dragging the handle still resizes the sidebar as usual; the click
behaviour only fires when the pointer barely moves between down and up.
- **collapse-mode** (`'hide' | 'rail'`, default: `'hide'`) — Controls how the navigation renders when closed on wide viewports.
<code>hide</code> (default) slides the nav off-screen entirely. <code>rail</code> keeps a
narrow icon-only column visible, with tooltips for labels and flyout
popovers for items that have a <code>subnav</code> slot.

Narrow viewports always use the off-screen behaviour regardless of
this setting.

### Events

- **nav-open-change** (`NavOpenChangeEvent`) — Dispatched when the navigation open state changes, regardless of the trigger (user toggle, peek, focus, programmatic). The event's <code>navOpen</code> property contains the new state.
- **nav-resize** (`NavResizeEvent`) — Dispatched when the navigation sidebar width changes. The event's <code>width</code> property contains the new width in pixels.

### Slots

- **(default)** — The default main section content.
- **nav** — Used to place content inside the navigation sidebar.
- **top-bar** — Used to place the <a href="/components/top-bar/">Top Bar</a> component.
- **header** — Used to place content inside the header section. This slot can be made sticky by utilizing the <code>sticky</code> property on the layout component.
- **footer** — Used to place content inside the footer section. This slot can be made sticky by utilizing the <code>stickyFooter</code> property on the layout component.
- **drawer** — Used to place additional content/details relating to a selected item.
- **nav-toggle** — Used to place a own nav-toggle component, for cases where you might need to add a tooltip. As an alternative, <code>&lt;nord-nav-toggle&gt;</code> can be placed anywhere inside <code>&lt;nord-layout&gt;</code> (e.g. inside a <code>&lt;nord-header&gt;</code>) — the layout listens for clicks and hover on any descendant <code>&lt;nord-nav-toggle&gt;</code> and drives toggle / peek behaviour accordingly. When using that placement, set <code>hide-default-nav-toggle</code> to suppress the layout's built-in fallback toggle.

### CSS Custom Properties

- `--n-layout-padding` (default: `var(--n-space-l)`) — Controls the padding around the main layout area (the main slot), using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-layout-drawer-inline-size` (default: `320px`) — Controls the width of the drawer area, when used.
- `--n-layout-background-color` (default: `var(--n-color-background)`) — Controls the background color of the layout, using <a href="/tokens/#color">color tokens</a>.
- `--n-layout-nav-border-color` (default: `var(--n-color-border)`) — Controls the color of the border between the navigation and the main content area when the nav is open on wide screens.
- `--n-layout-resize-color` (default: `var(--n-color-accent)`) — Controls the colour of the resize handle's accent bar (shown on hover, focus, and while dragging).
- `--n-layout-resize-block-size` (default: `100%`) — Controls the block-axis (vertical) size of the resize handle. Set to a fixed length (e.g. <code>200px</code>) to constrain the handle so it doesn't span the full nav height.
- `--n-layout-resize-inset-inline-end` (default: `5px`) — Controls the inline-end offset of the resize handle's accent bar (the visible vertical line shown on hover/focus/drag).
- `--n-layout-nav-rail-width` (default: `64px`) — Controls the width of the navigation column when <code>collapse-mode="rail"</code> is active and the nav is closed. Equivalent to the <code>nav-rail-width</code> attribute / <code>navRailWidth</code> property; the CSS custom property takes precedence when set.
- `--n-layout-header-size` (default: `var(--n-space-xxl)`) — Controls the block-axis (height) of the layout's header area. Also drives the size of the nav-toggle container and sticky-positioning offsets.
- `--n-layout-drawer-box-shadow` (default: `var(--n-box-shadow-nav)`) — Controls the box-shadow applied to the drawer (aside) on narrow viewports.
- `--n-layout-drawer-box-shadow-wide` (default: `var(--n-box-shadow-header)`) — Controls the box-shadow applied to the drawer (aside) on wide viewports (≥1240px).
- `--n-layout-drawer-border-inline-start-width` (default: `1px`) — Controls the inline-start border width of the drawer on wide viewports.
- `--n-layout-drawer-border-inline-start-color` (default: `var(--n-color-border)`) — Controls the inline-start border color of the drawer on wide viewports.

### Dependencies

- `icon`
- `nav-toggle`
- `tooltip`

<!--
Source: https://nordhealth.design/raw/components/layout.md
-->
