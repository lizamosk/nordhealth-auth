# nord-badge

> Badges are used to inform users of the status of an object
> or of an action that’s been taken. Commonly used in tabular
> data to indicate status.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use established variants and color patterns so that users can clearly identify the importance level.
- Use to show a status update on a piece of information or action.
- Use to mark something as a “draft” or “new”.
- Use when you want to highlight something that has been added recently.
- Always position badge so that it’s easy to understand what object it’s related to.

> **Don't:** - Don’t make badges clickable. Instead use button component’s small variant.
- Don’t use alternatives to existing badge variants.
- Don't use badges for labeling, categorizing, or organizing objects. Use the [tag component](/components/tag/) instead.

---

## Content guidelines

Badge labels should use a single word to describe the status of an object. Only use two words if you need to describe a complex state:

> **Do:** Complete

> **Don't:** Action completed

When writing badge labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** Partially refunded

> **Don't:** Partially Refunded

Avoid unnecessary words and articles in badge labels, such as “is”, “the”, “an” or “a”:

> **Do:** Pending

> **Don't:** Item is pending

Always describe the status in the past tense:

> **Do:** Refunded

> **Don't:** Refund

---

## Variants

This section describes the different component variants, their purpose, and when to use each variant.

| Name        | Purpose                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `neutral`   | The default style variant.                                                                                                              |
| `info`      | Used to convey general information that isn’t critical.                                                                                 |
| `success`   | Used to convey success states. For example, you might want to show a badge that tells the user a payment was successful.                |
| `highlight` | Used to highlight specific items in the interface, like notifications.                                                                  |
| `danger`    | Used to communicate problems that have to be resolved so that user can continue forward. Should always be used for highlighting errors. |
| `warning`   | Used to display information that needs a user’s attention attention and may require further steps.                                      |
| `progress`  | Used to convey something that’s in progress.                                                                                            |

## Examples

### Basic

```html
<nord-stack gap="s">
      <nord-badge>Neutral</nord-badge>
      <nord-badge variant="danger">Danger</nord-badge>
      <nord-badge variant="warning">Warning</nord-badge>
      <nord-badge variant="success">Success</nord-badge>
      <nord-badge variant="info">Info</nord-badge>
      <nord-badge variant="highlight">Highlight</nord-badge>
    </nord-stack>
```

### Progress

```html
<nord-stack gap="s">
      <nord-badge variant="success">
        <nord-icon slot="icon" name="interface-complete-small"></nord-icon>
        Complete
      </nord-badge>
      <nord-badge variant="info">
        <nord-icon
          slot="icon"
          name="interface-partially-complete-small"
        ></nord-icon>
        Partially complete
      </nord-badge>
      <nord-badge variant="neutral">
        <nord-icon slot="icon" name="interface-incomplete-small"></nord-icon>
        Incomplete
      </nord-badge>
      <nord-badge variant="warning">
        <nord-icon slot="icon" name="interface-cancelled-small"></nord-icon>
        Cancelled
      </nord-badge>
    </nord-stack>
```

### Scale

```html
<style>
      nord-badge {
        margin-inline-start: var(--n-space-m);
      }
    </style>
    <div
      class="n-typeset n-grid-2 n-gap-s n:text-s n:inline-[fit-content]"
    >
      <span>Strongly positive</span>
      <nord-badge variant="success">Success</nord-badge>
      <span>Weakly positive</span>
      <nord-badge variant="info">Info</nord-badge>
      <span>Neutral</span>
      <nord-badge variant="highlight">Highlight</nord-badge>
      <span>Neutral</span>
      <nord-badge variant="neutral">Neutral</nord-badge>
      <span>Weakly negative</span>
      <nord-badge variant="warning">Warning</nord-badge>
      <span>Strongly negative</span>
      <nord-badge variant="danger">Danger</nord-badge>
    </div>
```

### Strong

```html
<nord-stack class="n-margin-be-m" gap="s">
      <nord-badge variant="neutral" strong>Neutral</nord-badge>
      <nord-badge variant="danger" strong>Danger</nord-badge>
      <nord-badge variant="warning" strong>Warning</nord-badge>
      <nord-badge variant="success" strong>Success</nord-badge>
      <nord-badge variant="info" strong>Info</nord-badge>
      <nord-badge variant="highlight" strong>Highlight</nord-badge>
    </nord-stack>

    <nord-stack gap="s">
      <nord-badge variant="neutral" strong>
        <nord-icon slot="icon" name="interface-checked-small"></nord-icon>
        Neutral
      </nord-badge>
      <nord-badge variant="danger" strong>
        <nord-icon slot="icon" name="interface-cancelled-small"></nord-icon>
        Danger
      </nord-badge>
      <nord-badge variant="warning" strong>
        <nord-icon slot="icon" name="interface-warning-small"></nord-icon>
        Warning
      </nord-badge>
      <nord-badge variant="success" strong>
        <nord-icon slot="icon" name="interface-checked-small"></nord-icon>
        Success
      </nord-badge>
      <nord-badge variant="info" strong>
        <nord-icon slot="icon" name="interface-checked-small"></nord-icon>
        Info
      </nord-badge>
      <nord-badge variant="highlight" strong>
        <nord-icon slot="icon" name="interface-checked-small"></nord-icon>
        Highlight
      </nord-badge>
    </nord-stack>
```

### With Icon

```html
<nord-stack gap="s">
      <nord-badge variant="neutral">
        <nord-icon slot="icon" name="interface-checked-small"></nord-icon>
        Neutral
      </nord-badge>
      <nord-badge variant="danger">
        <nord-icon slot="icon" name="interface-cancelled-small"></nord-icon>
        Danger
      </nord-badge>
      <nord-badge variant="warning">
        <nord-icon slot="icon" name="interface-warning-small"></nord-icon>
        Warning
      </nord-badge>
      <nord-badge variant="success">
        <nord-icon slot="icon" name="interface-checked-small"></nord-icon>
        Success
      </nord-badge>
      <nord-badge variant="info">
        <nord-icon slot="icon" name="interface-checked-small"></nord-icon>
        Info
      </nord-badge>
      <nord-badge variant="highlight">
        <nord-icon slot="icon" name="interface-checked-small"></nord-icon>
        Highlight
      </nord-badge>
    </nord-stack>
```

### With Table

```html
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
            <td><nord-badge>Neutral</nord-badge></td>
            <td class="n-table-ellipsis">
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
              Suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
              suspendisse blandit sodales eros, quis aliquet leo aliquet
              ultrices lorem ipsum dolor sit amet consectetuer adipiscing
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
```

### With Title

```html
<h1 class="n-typescale-xxl">
      Web Components<nord-badge class="n-margin-is-s" variant="highlight"
        >2.0.0</nord-badge
      >
    </h1>
```

### Customization

```html
<style>
      .custom-badge {
        --n-badge-color: #4c1d95;
        --n-badge-background-color: #ede9fe;
        --n-badge-border-color: #7c3aed;
        --n-badge-font-weight: var(--n-font-weight-active);
        --n-badge-font-size: var(--n-font-size-m);
        --n-badge-padding-inline: var(--n-space-m);
        --n-badge-padding-block: var(--n-space-xs);
      }
    </style>
    <nord-stack gap="s">
      <nord-badge class="custom-badge">Custom priority</nord-badge>
      <nord-badge class="custom-badge" variant="danger">
        Overrides the danger variant
      </nord-badge>
      <nord-badge class="custom-badge" variant="danger" strong>
        <nord-icon slot="icon" name="interface-warning-small"></nord-icon>
        Overrides the strong danger variant
      </nord-badge>
    </nord-stack>
```

### With Vertically Aligned Text

```html
<div class="n-stack-horizontal n-gap-s n-items-center n-reset">
      <span class="n-typescale-xl">342</span>
      <nord-badge variant="success">
        <nord-icon
          slot="icon"
          name="arrow-up-long"
          label="Increased"
        ></nord-icon>
        1.0 %
      </nord-badge>
      <span class="n:text-weak n:text-s"
        >87% Returning clients | 338 from previous period</span
      >
    </div>
```

## API Reference

### Properties

- **type** (`'warning' | 'success' | 'danger' | 'highlight' | 'info' | 'neutral' | 'progress' | undefined`, default: `"neutral"`) — The type of badge.
Determines the background color of the badge.
- **variant** (`'warning' | 'success' | 'danger' | 'highlight' | 'neutral' | 'info' | undefined`, default: `"neutral"`) — The style variant of the badge.
Determines the background color of the badge.
- **strong** (`boolean`, default: `false`) — Strong badges are a secondary style for badges.
They provide more visual prominence and emphasize them.

### Slots

- **(default)** — The badge content.
- **icon** — Used to place an icon at the start of badge.

### CSS Custom Properties

- `--n-badge-font-weight` (default: `var(--n-font-weight)`) — Controls the font weight of the badge, using our <a href="/tokens/#font">font tokens</a>.
- `--n-badge-font-size` (default: `var(--n-font-size-s)`) — Controls the font size of the badge, using our <a href="/tokens/#font">font tokens</a>.
- `--n-badge-padding-inline` (default: `var(--n-space-s)`) — Controls the inline padding of the badge, using our <a href="/tokens/#space">space tokens</a>.
- `--n-badge-padding-block` (default: `0`) — Controls the block padding of the badge, using our <a href="/tokens/#space">space tokens</a>. By default the badge height comes from its line height alone.
- `--n-badge-color` — Controls the text color of the badge. Overrides the variant default.
- `--n-badge-background-color` — Controls the background color of the badge. Overrides the variant default.
- `--n-badge-border-color` — Controls the border color of the badge. Overrides the variant default.

<!--
Source: https://nordhealth.design/raw/components/badge.md
-->
