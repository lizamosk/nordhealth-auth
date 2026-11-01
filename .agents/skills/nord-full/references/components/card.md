# nord-card

> Cards are shadowed surfaces that display content and actions on a
> single topic. They should be easy to scan for relevant and
> actionable information.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to display content and actions on a single topic inside a container.
- Use to visually separate specific parts of content in an application view.
- Use to wrap a form into a container, for example a login form.
- Include a header when placing a [Table](/components/table) component inside the card.

> **Don't:** - Don’t place cards within cards. Consider using the [divider](/components/divider/) component to break up sections instead.
- Don’t use when you need to capture user’s attention in a prominent way.
- Don’t use to inform user about important changes or conditions in the interface.
- Don’t use multiple primary buttons inside a card. A card should only contain a single primary action.

## Examples

### Basic

```html
<nord-card>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel
      molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
    </nord-card>
```

### Overview

```html
<nord-card>
      <h2 slot="header">Header content</h2>
      <nord-button slot="header-end" size="s">Edit</nord-button>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel
      molestias esse maxime aperiam totam suscipit.
      <div slot="footer">
        <p class="n-typescale-m">Footer content</p>
      </div>
    </nord-card>
```

### Composed Parts

```html
<nord-card>
      <nord-card-header>
        <h2 class="n:text-m n:m-0">Header content</h2>
        <nord-button size="s">Edit</nord-button>
      </nord-card-header>
      <nord-card-body>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel
        molestias esse maxime aperiam totam suscipit.
      </nord-card-body>
      <nord-card-footer divider>
        <p class="n:text-m n:m-0">Footer content</p>
      </nord-card-footer>
    </nord-card>
```

### Discrete Items

```html
<nord-stack direction="horizontal" gap="l" wrap align-items="start">
      <nord-card class="n:inline-[200px]">
        <nord-card-body>
          <nord-stack gap="s">
            <span class="n-caption">Active patients</span>
            <span class="n:text-xl n:font-heading">1,284</span>
            <nord-badge variant="success">+12% this month</nord-badge>
          </nord-stack>
        </nord-card-body>
      </nord-card>
      <nord-card class="n:inline-[260px]">
        <nord-card-body>
          <nord-stack direction="horizontal" gap="m" align-items="center">
            <nord-avatar name="Dana Scully" aria-hidden="true"></nord-avatar>
            <nord-stack gap="none">
              <span class="n:font-heading">Dana Scully</span>
              <span class="n-caption">Veterinary surgeon</span>
            </nord-stack>
          </nord-stack>
        </nord-card-body>
        <nord-card-footer divider>
          <nord-button size="s" expand>View profile</nord-button>
        </nord-card-footer>
      </nord-card>
    </nord-stack>
```

### Categorised

```html
<nord-stack direction="horizontal" gap="m" wrap>
      <nord-card
        class="n:inline-[180px]"
        style="--n-card-background-color: var(--n-color-status-neutral-weak); --n-card-box-shadow: none"
      >
        <nord-card-body>
          <nord-stack gap="xs">
            <span class="n:font-heading">Neutral</span>
            <span class="n-caption">Categorised by accent, not status.</span>
          </nord-stack>
        </nord-card-body>
      </nord-card>
      <nord-card
        class="n:inline-[180px]"
        style="--n-card-background-color: var(--n-color-status-info-weak); --n-card-box-shadow: none"
      >
        <nord-card-body>
          <nord-stack gap="xs">
            <span class="n:font-heading">Blue</span>
            <span class="n-caption">Categorised by accent, not status.</span>
          </nord-stack>
        </nord-card-body>
      </nord-card>
      <nord-card
        class="n:inline-[180px]"
        style="--n-card-background-color: var(--n-color-status-highlight-weak); --n-card-box-shadow: none"
      >
        <nord-card-body>
          <nord-stack gap="xs">
            <span class="n:font-heading">Purple</span>
            <span class="n-caption">Categorised by accent, not status.</span>
          </nord-stack>
        </nord-card-body>
      </nord-card>
      <nord-card
        class="n:inline-[180px]"
        style="--n-card-background-color: var(--n-color-status-progress-weak); --n-card-box-shadow: none"
      >
        <nord-card-body>
          <nord-stack gap="xs">
            <span class="n:font-heading">Teal</span>
            <span class="n-caption">Categorised by accent, not status.</span>
          </nord-stack>
        </nord-card-body>
      </nord-card>
    </nord-stack>
```

### Padding None

```html
<nord-card padding="none">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam.
    </nord-card>
```

### Footer Divider

```html
<nord-card footer-divider>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel
      molestias esse maxime aperiam totam suscipit.
      <div slot="footer">
        <p class="n-typescale-m">Footer content</p>
      </div>
    </nord-card>
```

### Padding

```html
<nord-stack>
      <nord-card padding="none">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae
        vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
      </nord-card>
      <nord-card padding="m">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae
        vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
      </nord-card>
      <nord-card padding="l">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae
        vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
      </nord-card>
    </nord-stack>
```

### Responsive Card Layout

```html
<style>@media (max-width: 768px) {
    .stack {
      flex-direction: column;
    }
  }</style>
    <nord-stack class="stack" direction="horizontal" gap="l">
      <nord-card padding="l">
        <h2 slot="header">Account overview</h2>
        <nord-stack direction="horizontal">
          <nord-stack gap="l">
            <p>
              View all saved data on your Nordhealth account and choose what activity is kept to personalize your
              experience.
            </p>
            <nord-button variant="primary">Manage your account</nord-button>
          </nord-stack>
        </nord-stack>
      </nord-card>
      <nord-card padding="l">
        <h2 slot="header">Security checkup</h2>
        <nord-stack direction="horizontal">
          <nord-stack gap="l">
            <p>Our Security Checkup analyzed your account and data. We found no recommended actions this time.</p>
            <nord-button variant="primary">Manage security</nord-button>
          </nord-stack>
        </nord-stack>
      </nord-card>
    </nord-stack>
```

### With Aligned Footers

```html
<nord-stack direction="horizontal">
      <nord-card footer-divider>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae
        vel molestias esse maxime aperiam totam suscipit.
        <div slot="footer">
          <p class="n-typescale-m">Footer content</p>
        </div>
      </nord-card>
      <nord-card footer-divider>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <div slot="footer">
          <p class="n-typescale-m">Footer content</p>
        </div>
      </nord-card>
      <nord-card footer-divider>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae
        vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
        <div slot="footer">
          <p class="n-typescale-m">Footer content</p>
        </div>
      </nord-card>
    </nord-stack>
```

### With Custom Header

```html
<style>nord-card {
    --n-card-header-background: var(--n-color-surface-raised);
  }</style>
    <nord-card padding="m">
      <h2 slot="header">Header content</h2>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel
      molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
    </nord-card>
```

### With Form

```html
<nord-stack class="n:max-inline-[340px] n:my-xl n:mx-auto">
      <nord-banner shadow variant="warning">You’ve been signed out. Please sign in to continue.</nord-banner>
      <nord-card padding="l">
        <h1 slot="header">Sign in to Nord</h1>
        <form action="#">
          <nord-stack>
            <nord-input
              label="Username"
              expand
              required
              hide-required
              name="username"
              type="email"
              placeholder="user@example.com"
            ></nord-input>
            <nord-input
              label="Password"
              expand
              required
              hide-required
              name="password"
              type="password"
              placeholder="••••••••"
            >
            </nord-input>
            <nord-button type="submit" expand variant="primary">Sign in</nord-button>
          </nord-stack>
        </form>
      </nord-card>
      <nord-card class="n:text-center"> New to Nord? <a href="#">Create an account</a>. </nord-card>
    </nord-stack>
```

### With Header Actions

```html
<nord-card padding="none">
      <h2 slot="header">Your items</h2>

      <div slot="header-end">
        <nord-input size="s" label="Search" hide-label placeholder="Item name" type="search"></nord-input>
        <nord-select hide-label size="s" label="Filter by state" placeholder="Please select">
          <nord-icon slot="icon" name="interface-filter"></nord-icon>
          <option value="active">Active</option>
          <option value="archived">Archived</option>
        </nord-select>

        <nord-select hide-label size="s" label="Sort" placeholder="Please select">
          <nord-icon slot="icon" name="arrow-up-down-long"></nord-icon>
          <option>Creation date</option>
          <option>Last modified date</option>
        </nord-select>
      </div>

      <nord-table>
        <table>
          <thead>
            <tr>
              <th class="n-table-align-right">ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>State</th>
              <th class="n-table-align-right">Creation date</th>
              <th class="n-table-align-right">Last modified date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="n-table-align-right">01</td>
              <td>Item name 1</td>
              <td class="n-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, necessitatibus!</td>
              <td>
                <nord-badge variant="success">Active</nord-badge>
              </td>
              <td class="n-caption n-table-align-right">20.3.2020</td>
              <td class="n-caption n-table-align-right">20.3.2021</td>
            </tr>
            <tr>
              <td class="n-table-align-right">02</td>
              <td>Item name 2</td>
              <td class="n-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, necessitatibus!</td>
              <td>
                <nord-badge variant="warning">Archived</nord-badge>
              </td>
              <td class="n-caption n-table-align-right">19.3.2020</td>
              <td class="n-caption n-table-align-right">19.3.2021</td>
            </tr>
            <tr>
              <td class="n-table-align-right">03</td>
              <td>Item name 3</td>
              <td class="n-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, necessitatibus!</td>
              <td>
                <nord-badge variant="success">Active</nord-badge>
              </td>
              <td class="n-caption n-table-align-right">18.3.2020</td>
              <td class="n-caption n-table-align-right">18.3.2021</td>
            </tr>
            <tr>
              <td class="n-table-align-right">04</td>
              <td>Item name 4</td>
              <td class="n-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, necessitatibus!</td>
              <td>
                <nord-badge variant="success">Active</nord-badge>
              </td>
              <td class="n-caption n-table-align-right">17.3.2020</td>
              <td class="n-caption n-table-align-right">17.3.2021</td>
            </tr>
            <tr>
              <td class="n-table-align-right">05</td>
              <td>Item name 5</td>
              <td class="n-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, necessitatibus!</td>
              <td>
                <nord-badge variant="warning">Archived</nord-badge>
              </td>
              <td class="n-caption n-table-align-right">16.3.2020</td>
              <td class="n-caption n-table-align-right">16.3.2021</td>
            </tr>
          </tbody>
        </table>
      </nord-table>
    </nord-card>
```

### With Header And Footer

```html
<nord-card padding="m">
      <h2 slot="header">Header content</h2>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel
      molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
      <div slot="footer">Footer content</div>
    </nord-card>
```

### With Scrollable Content

```html
<style>.content {
    padding: var(--n-space-m);
    max-block-size: 200px;
    overflow-x: auto;
  }</style>
    <nord-stack class="n:max-inline-[340px] n:my-l n:mx-auto">
      <nord-card padding="none">
        <h2 slot="header">Header content</h2>
        <div class="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae
          vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit,
          quibusdam? Vivamus non tincidunt lacus. Vestibulum et vestibulum turpis, non elementum justo. Cras nec est
          tincidunt, faucibus neque vitae, pretium purus. Nulla euismod mauris purus, a hendrerit sapien pretium interdum.
          Nulla at quam enim. Vestibulum leo sem, hendrerit ultricies porttitor eu, facilisis eget leo. Aliquam molestie
          sapien arcu, eu pulvinar magna suscipit quis. Fusce at ultricies nunc. Aenean vitae nulla at ligula imperdiet
          vulputate. Aliquam erat volutpat.
        </div>
      </nord-card>
    </nord-stack>
```

### With Scrollable Table

```html
<style>nord-table.scrollable {
    max-block-size: 240px;
  }

  nord-table.scrollable th {
    position: sticky;
    inset-block-start: 0;
    z-index: var(--n-index-sticky);
  }</style>
    <nord-card padding="none">
      <h2 slot="header">Table heading</h2>
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
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
```

### With Sections

```html
<nord-card padding="none">
      <div class="n:p-m">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae
        vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
      </div>
      <nord-divider></nord-divider>
      <div class="n:p-m">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae
        vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
      </div>
      <nord-divider></nord-divider>
      <div class="n:p-m">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae
        vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
      </div>
    </nord-card>
```

### With Table

```html
<nord-card padding="none">
      <h2 slot="header">Table heading</h2>
      <nord-table>
        <table>
          <thead>
            <tr>
              <th class="n-table-align-right">Amount</th>
              <th>Description</th>
              <th>Method</th>
              <th class="n-table-align-right">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="n-table-align-right">350,00&thinsp;€</td>
              <td class="n-table-ellipsis">
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
              </td>
              <td>Card</td>
              <td class="n-table-align-right">20.3.2021</td>
            </tr>
            <tr>
              <td class="n-table-align-right">29,90&thinsp;€</td>
              <td class="n-table-ellipsis">
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
              </td>
              <td>Card</td>
              <td class="n-table-align-right">19.3.2021</td>
            </tr>
            <tr>
              <td class="n-table-align-right">50,00&thinsp;€</td>
              <td class="n-table-ellipsis">
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
              </td>
              <td>Card</td>
              <td class="n-table-align-right">18.3.2021</td>
            </tr>
            <tr>
              <td class="n-table-align-right">290,00&thinsp;€</td>
              <td class="n-table-ellipsis">
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
              </td>
              <td>Card</td>
              <td class="n-table-align-right">17.3.2021</td>
            </tr>
            <tr>
              <td class="n-table-align-right">49,90&thinsp;€</td>
              <td class="n-table-ellipsis">
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
              </td>
              <td>Card</td>
              <td class="n-table-align-right">16.3.2021</td>
            </tr>
            <tr>
              <td class="n-table-align-right">25,00&thinsp;€</td>
              <td class="n-table-ellipsis">
                Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
                adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                consectetuer adipiscing
              </td>
              <td>Card</td>
              <td class="n-table-align-right">15.3.2021</td>
            </tr>
          </tbody>
        </table>
      </nord-table>
    </nord-card>
```

## API Reference

### Properties

- **padding** (`'m' | 'l' | 'none'`, default: `'m'`) — Controls the padding of the card component. When set to “none”,
the header and footer slots will still have padding.
- **footer-divider** (`boolean`, default: `false`) — When set, adds a divider border above the footer slot.

### Slots

- **(default)** — The card content.
- **header** — Optional slot that holds a header for the card.
- **header-end** — Optional slot that positions content at the end of the header. Useful for actions or additional info.
- **footer** — Optional slot that holds footer content for the card.

### CSS Custom Properties

- `--n-card-background-color` (default: `var(--n-color-surface)`) — Controls the background color of the card.
- `--n-card-border-radius` (default: `var(--n-border-radius)`) — Controls how rounded the corners are, using <a href="/tokens/#border-radius">border radius tokens</a>.
- `--n-card-box-shadow` (default: `var(--n-box-shadow-popout)`) — Controls the surrounding shadow, using <a href="/tokens/#box-shadow">box shadow tokens</a>.
- `--n-card-padding` (default: `var(--n-space-m)`) — Controls the padding on all sides of the card.
- `--n-card-slot-padding` (default: `var(--n-space-m)`) — Controls the padding of items slotted within the card. This does not affect the block padding of items slotted into the header.
- `--n-card-header-background` (default: `transparent`) — Controls the background color of the card header.
- `--n-card-border-color` (default: `var(--n-color-border)`) — Controls the border color of the card header and footer divider.
- `--n-card-header-padding-block` (default: `var(--n-space-m)`) — Controls the block (top and bottom) padding of the card header.
- `--n-card-header-padding-inline` (default: `var(--n-card-slot-padding)`) — Controls the inline (left and right) padding of the card header.
- `--n-card-header-slot-flex-grow` (default: `0`) — Controls the flex-grow value of the header slot.
- `--n-card-header-end-margin-block-start` (default: `calc(var(--n-space-xs) * -1)`) — Block-start margin of content slotted into <code>header-end</code>. The negative default lets buttons and similar controls sit within the header without inflating its height. Override (e.g. <code>0</code>) when slotting tall content that should occupy the full header height.
- `--n-card-header-end-margin-block-end` (default: `calc(var(--n-space-xs) * -1)`) — Block-end margin of content slotted into <code>header-end</code>. The negative default lets buttons and similar controls sit within the header without inflating its height. Override (e.g. <code>0</code>) when slotting tall content that should occupy the full header height.

<!--
Source: https://nordhealth.design/raw/components/card.md
-->
