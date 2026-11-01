# nord-table

> Table is used to organize and display information from a data set.
> Provides table styles in addition to features like sticky
> headers and support for narrow viewports.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use when you need to display tabular data in a view.
- Use a `<table>` element directly within the component.
- Use inside a [Card](/components/card/?example=with+table), and give the card a header.

> **Don't:** - Don’t use to display list data.
- Don’t use to display basic key and value pairs, consider a [description list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) instead.
- Don’t use tables for layout.
- Don't use a primary button in every row of a table.

---

## Content guidelines

Headers in a table should be clear, accurate and predictable. When writing headers, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** User account

> **Don't:** User Account

Include units of measurement symbols in the table header so they aren’t repeated throughout every single column:

> **Do:** Temperature °C

> **Don't:** Temperature

Avoid unnecessary words and articles in table headers, such as “the”, “an” or “a”:

> **Do:** Description

> **Don't:** A description

Keep decimals consistent. For example, don’t use 3 decimals in one row and 2 in others:

> **Do:** 30.00

25.00

> **Don't:** 30.000

25.0

---

## Additional considerations

- Nord’s table component acts as a lightweight and un-opinionated *wrapper* component for enhancing tabular data. It is up to the user of this component to make sure that the table markup they use is accessible.
- Despite the name the Nord table component does not supplement the HTML `<table>` element. Please ensure that a `<table>` element is a direct descendant of the table component.
- It’s important to pay close attention to semantics when authoring tables. The markup in the examples can be used as a starting point. However, be aware that [HTML tables have a large feature set](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table){rel="[\"nofollow\"]"} which cannot be fully covered in this documentation.
- When making adjustments to table columns such as width, color, alignment and other styles please consider using the HTML `<col>` and `<colgroup>` elements for applying them. Further information on the `<col>` and `<colgroup>` elements can be [found in the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col){rel="[\"nofollow\"]"}.

---

## Advanced use-cases

The table component itself does not provide any functionality, only styles. This works well for simple or static tables, but there are instances where functionality such as sorting, resizing, or column dragging are required. This kind of functionality is out of scope for the table component, as the spectrum of possible use-cases is too broad for a single component to cover effectively. Whilst the table component is limited out of the box, these same limitations make it easy to integrate with third-party libraries which offer advanced functionality.

Broadly speaking, there are two categories of library for building advanced tables: *headless* and *component-based*.

### Which kind of table library should I use?

Each approach has subtle tradeoffs. Understanding these subtleties will help you make the right decision for your application and team.

#### Component-based Table Libraries

Component-based table libraries will typically supply you with a feature-rich drop-in solution, and ready-to-use components/markup complete with styles/theming.

**Pros:**

- Ship with ready-to-use markup/styles.
- Little setup required.
- Turn-key experience.

**Cons:**

- Less control over markup.
- Custom styles are typically theme-based.
- Larger bundle-sizes.

If you want a ready-to-use table and design/bundle-size are not hard requirements, then you should consider using a component-based table library.

#### Headless Table Libraries

Headless table libraries will typically supply you with functions, state, utilities and event listeners to build your own table markup or attach to existing table markups.

**Pros:**

- Full control over markup and styles.
- Supports all styling patterns (CSS, CSS-in-JS, UI libraries, etc).
- Smaller bundle-sizes.

**Cons:**

- More setup and effort required.
- No markup, styles or themes provided.

If you want a lighter-weight table or full control over the design, then you should consider using a headless table library.

### Recommendation for headless libraries

In the headless category, we recommend [Tanstack Table](https://tanstack.com/table/){rel="[\"nofollow\"]"}. Tanstack table offers integrations for many UI frameworks, such as Vue and React. It is easy to work with, and because it does not bring any HTML or styles itself, you can use it to render a plain, semantic `<table>` wrapped in a `<nord-table>`, and you will get all the necessary styles.

We have created examples in both Vue and React, showing how to combine Tanstack table with Nord's table component, in order to build a table with both sorting and resizable columns. Check out the [React example](/components/table/?example=with+react+and+tanstack+table) and likewise the [Vue example](/components/table/?example=with+vue+and+tanstack+table).

[React / Tanstack table source](https://github.com/nordhealth/advanced-table-examples/tree/main/nord-react-tanstack-table)


  [Vue / Tanstack table source](https://github.com/nordhealth/advanced-table-examples/tree/main/nord-vue-tanstack-table)

### Recommendation for component-based libraries

In the component-based category, we recommend [AG Grid](https://www.ag-grid.com/){rel="[\"nofollow\"]"}, specifically the community edition. AG Grid is feature-rich, has extensive documentation, and offers integrations for many UI frameworks, such as Vue and React. AG Grid takes control of all rendering and output, but offers extension points for taking control of some aspects. It does not output a `<table>` element, so it cannot be used with Nord's own table component.

However it can be styled via themes, and we have created a Nord theme using our design tokens. The theme is published on npm as `@nordhealth/ag-theme-nord`. To use the theme, include the CSS in your project and add the class `ag-theme-nord` to the element wrapping AG Grid. You have to [configure legacy themes](https://www.ag-grid.com/javascript-data-grid/theming-migration/#continue-with-legacy-themes){rel="[\"nofollow\"]"} if you are using v33 or higher.

We have created examples in both Vue and React showing how to combine AG Grid with Nord's theme, in order to build a table with sorting, resizable columns, draggable and re-orderable columns, plus sticky/pinned columns. Check out the [React example](/components/table/?example=with+react+and+ag+grid) and likewise the [Vue example](/components/table/?example=with+vue+and+ag+grid).

[React / AG Grid table source](https://github.com/nordhealth/advanced-table-examples/tree/main/nord-react-ag-grid)


  [Vue / AG Grid table source](https://github.com/nordhealth/advanced-table-examples/tree/main/nord-vue-ag-grid)

## Examples

### Basic

```html
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
```

### Column Styling

```html
<nord-table>
      <table>
        <colgroup>
          <col />
          <col />
          <col />
          <col class="n:bg-status-danger-weak n:inline-[max-content]" />
        </colgroup>
        <thead>
          <tr>
            <th class="n-table-align-right">Amount</th>
            <th>Status</th>
            <th>Method</th>
            <th class="n-table-align-right">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">20.3.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">29,90&thinsp;€</td>
            <td><nord-badge variant="warning">Warning</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">20.3.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">50,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">19.3.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">49,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">17.3.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">1023,00&thinsp;€</td>
            <td><nord-badge variant="danger">Alert</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">12.3.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">32,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">10.3.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">40,00&thinsp;€</td>
            <td><nord-badge variant="warning">Warning</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">9.3.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">28,52&thinsp;€</td>
            <td><nord-badge variant="warning">Warning</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">4.3.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">4.3.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">220,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">3.3.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">50,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">1.3.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">30.2.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">30.2.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">30.2.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">29,90&thinsp;€</td>
            <td><nord-badge variant="warning">Warning</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">28.2.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">50,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">28.2.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">49,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">26.2.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">1023,00&thinsp;€</td>
            <td><nord-badge variant="danger">Alert</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">24.2.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">32,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">23.2.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">40,00&thinsp;€</td>
            <td><nord-badge variant="warning">Warning</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">22.2.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">28,52&thinsp;€</td>
            <td><nord-badge variant="warning">Warning</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">21.2.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">20.2.2021</td>
          </tr>
          <tr>
            <td class="n-table-align-right">220,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td>Card</td>
            <td class="n-table-align-right">18.2.2021</td>
          </tr>
        </tbody>
      </table>
    </nord-table>
```

### Complex

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
```

### Density

```html
<nord-stack>
      <nord-card padding="none">
        <h2 slot="header">Condensed</h2>
        <nord-table density="condensed">
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Method</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>350,00&thinsp;€</td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td>Card</td>
                <td>20.3.2021</td>
              </tr>
              <tr>
                <td>350,00&thinsp;€</td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td>Card</td>
                <td>20.3.2021</td>
              </tr>
              <tr>
                <td>350,00&thinsp;€</td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td>Card</td>
                <td>20.3.2021</td>
              </tr>
            </tbody>
          </table>
        </nord-table>
      </nord-card>

      <nord-card padding="none">
        <h2 slot="header">Default</h2>
        <nord-table>
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Method</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>350,00&thinsp;€</td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td>Card</td>
                <td>20.3.2021</td>
              </tr>
              <tr>
                <td>350,00&thinsp;€</td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td>Card</td>
                <td>20.3.2021</td>
              </tr>
              <tr>
                <td>350,00&thinsp;€</td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td>Card</td>
                <td>20.3.2021</td>
              </tr>
            </tbody>
          </table>
        </nord-table>
      </nord-card>
      <nord-card padding="none">
        <h2 slot="header">Relaxed</h2>
        <nord-table density="relaxed">
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Method</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>350,00&thinsp;€</td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td>Card</td>
                <td>20.3.2021</td>
              </tr>
              <tr>
                <td>350,00&thinsp;€</td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td>Card</td>
                <td>20.3.2021</td>
              </tr>
              <tr>
                <td>350,00&thinsp;€</td>
                <td class="n-table-ellipsis">
                  Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
                  consectetuer adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum
                  dolor sit amet consectetuer adipiscing
                </td>
                <td>Card</td>
                <td>20.3.2021</td>
              </tr>
            </tbody>
          </table>
        </nord-table>
      </nord-card>
    </nord-stack>
```

### Row Selection

```html
<nord-card padding="none" class="n-container" id="row-selection">
      <h2 slot="header">Row selection</h2>

      <div slot="header-end" class="n:invisible">
        <span class="message" aria-live="polite" aria-atomic="true">0 items selected</span>
        <nord-button variant="primary" size="s">Export</nord-button>
      </div>

      <nord-table>
        <table>
          <thead>
            <tr>
              <th>
                <div class="n-table-actions">
                  <nord-checkbox size="s" label="Toggle all" hide-label></nord-checkbox>
                </div>
              </th>
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
              <td>
                <div class="n-table-actions">
                  <nord-checkbox size="s" label="Select row" hide-label></nord-checkbox>
                </div>
              </td>
              <td class="n-table-align-right">350,00&thinsp;€</td>
              <td>
                <nord-badge variant="success">Success</nord-badge>
              </td>
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
              <td>
                <div class="n-table-actions">
                  <nord-checkbox size="s" label="Select row" hide-label></nord-checkbox>
                </div>
              </td>
              <td class="n-table-align-right">29,90&thinsp;€</td>
              <td>
                <nord-badge variant="warning">Warning</nord-badge>
              </td>
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
              <td>
                <div class="n-table-actions">
                  <nord-checkbox size="s" label="Select row" hide-label></nord-checkbox>
                </div>
              </td>
              <td class="n-table-align-right">50,00&thinsp;€</td>
              <td>
                <nord-badge variant="success">Success</nord-badge>
              </td>
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
              <td>
                <div class="n-table-actions">
                  <nord-checkbox size="s" label="Select row" hide-label></nord-checkbox>
                </div>
              </td>
              <td class="n-table-align-right">49,00&thinsp;€</td>
              <td>
                <nord-badge variant="success">Success</nord-badge>
              </td>
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
          </tbody>
        </table>
      </nord-table>
    </nord-card>
```

### Scroll Snapping

```html
<nord-table scroll-snap class="n-container-s">
      <table>
        <thead>
          <tr>
            <th class="n-table-align-right">Amount</th>
            <th>Status</th>
            <th>Description</th>
            <th>Method</th>
            <th>Some</th>
            <th>More</th>
            <th>Columns</th>
            <th class="n-table-align-right">Date</th>
            <th class="n-table-align-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td><nord-badge variant="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet consectetuer
              adipiscing suspendisse blandit sodales eros, quis aliquet leo aliquet ultrices lorem ipsum dolor sit amet
              consectetuer adipiscing
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption">Lorem ipsum dolor sit amet consectetur adipisicing</td>
            <td class="n-caption">Aspernatur expedita temporibus, in nisi aut quam neque consequatur tempora dolor</td>
            <td class="n-caption">Eveniet, alias dolore molestias debitis iure quaerat iusto illo possimus.</td>
            <td class="n-caption n-table-align-right">20.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-button size="s" square>
                  <nord-visually-hidden>Actions</nord-visually-hidden>
                  <nord-icon size="s" name="interface-menu-small"></nord-icon>
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
            <td class="n-caption">Lorem ipsum dolor sit amet consectetur adipisicing</td>
            <td class="n-caption">Aspernatur expedita temporibus, in nisi aut quam neque consequatur tempora dolor</td>
            <td class="n-caption">Eveniet, alias dolore molestias debitis iure quaerat iusto illo possimus.</td>
            <td class="n-caption n-table-align-right">20.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-button size="s" square>
                  <nord-visually-hidden>Actions</nord-visually-hidden>
                  <nord-icon size="s" name="interface-menu-small"></nord-icon>
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
            <td class="n-caption">Lorem ipsum dolor sit amet consectetur adipisicing</td>
            <td class="n-caption">Aspernatur expedita temporibus, in nisi aut quam neque consequatur tempora dolor</td>
            <td class="n-caption">Eveniet, alias dolore molestias debitis iure quaerat iusto illo possimus.</td>
            <td class="n-caption n-table-align-right">19.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-button size="s" square>
                  <nord-visually-hidden>Actions</nord-visually-hidden>
                  <nord-icon size="s" name="interface-menu-small"></nord-icon>
                </nord-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </nord-table>
```

### Striped

```html
<nord-table striped>
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
```

## API Reference

### Properties

- **density** (`'condensed' | 'default' | 'relaxed'`, default: `'default'`) — Controls the density of the table's rows and headers.
Relaxed increases space, condensed reduces space.
- **scroll-snap** (`boolean`, default: `false`) — Enables scroll-snapping, meaning the scroll position is always column-aligned.
- **striped** (`boolean`, default: `false`) — Controls whether to use zebra striping on tables, which can improve readability.

### Slots

- **(default)** — Default slot which holds the HTML <code>&lt;table&gt;</code> element.

### CSS Custom Properties

- `--n-table-td-padding` (default: `calc(var(--n-space-m) * 0.95)`) — Controls the padding around the table cells.
- `--n-table-border-radius` (default: `var(--n-border-radius-s)`) — Controls how rounded the corners are, using <a href="/tokens/#border-radius">border radius tokens</a>.

<!--
Source: https://nordhealth.design/raw/components/table.md
-->
