# nord-pagination

> Pagination is the navigation root for a paginated collection. It is
> composition-first: it owns no page state, renders no controls, and emits no
> events. Your app owns the page state, URL/query syncing, cursors and any data
> fetching; Nord supplies the semantic/layout primitives, the styling and the
> <code>paginate()</code> math utility for building the page window.
> 
> As a root it is a <code>navigation</code> landmark — it sets <code>role="navigation"</code> and a
> default accessible label so screen-reader users can jump to it. Compose the
> lower-level primitives inside it:
> 
> - <a href="/components/pagination-content/">Pagination Content</a> — the list row.
> - <a href="/components/pagination-item/">Pagination Item</a> — a slot in the row.
> - <a href="/components/pagination-link/">Pagination Link</a> — a page link (set <code>current</code>).
> - <a href="/components/pagination-previous/">Pagination Previous</a> — the previous control.
> - <a href="/components/pagination-next/">Pagination Next</a> — the next control.
> - <a href="/components/pagination-ellipsis/">Pagination Ellipsis</a> — the collapsed-pages marker.
> 
> Bring your own interactive element — an <code>&lt;a&gt;</code> (e.g. a framework <code>&lt;Link&gt;</code> /
> <code>&lt;NuxtLink&gt;</code>) or a <code>nord-button</code> — and own its <code>href</code>, navigation and
> <code>disabled</code> state. See the framework adapters in the docs.

## Usage

Pagination is the navigation root for moving through a paginated collection. It is **composition-first**: it owns no page state, renders no controls, and emits no events. Your app owns the page state, URLs, cursors and any data fetching; Nord supplies the semantic/layout primitives, the styling, and the `paginate()` math utility for building the page window.

```js
import '@nordhealth/components/lib/Pagination'
```

Compose the primitives inside it, bringing your own interactive element — an `<a>` (e.g. a framework `<Link>` / `<NuxtLink>` for crawlable, SSR-friendly links) or a `nord-button`. You own each link's `href`, navigation and `disabled` state. Mark the active page with `current` on the `nord-pagination-link` and it mirrors `aria-current="page"` onto your link.

```html
<nord-pagination>
  <nord-pagination-content>
    <nord-pagination-item>
      <nord-pagination-previous>
        <nord-button square href="?page=1">
          <nord-icon name="arrow-left-small"></nord-icon>
          <nord-visually-hidden>Previous</nord-visually-hidden>
        </nord-button>
      </nord-pagination-previous>
    </nord-pagination-item>
    <nord-pagination-item>
      <nord-pagination-link current>
        <nord-button variant="primary" href="?page=1">1</nord-button>
      </nord-pagination-link>
    </nord-pagination-item>
    <nord-pagination-item>
      <nord-pagination-link>
        <nord-button variant="plain" href="?page=2">2</nord-button>
      </nord-pagination-link>
    </nord-pagination-item>
    <nord-pagination-item>
      <nord-pagination-ellipsis></nord-pagination-ellipsis>
    </nord-pagination-item>
    <nord-pagination-item>
      <nord-pagination-next>
        <nord-button square href="?page=2">
          <nord-icon name="arrow-right-small"></nord-icon>
          <nord-visually-hidden>Next</nord-visually-hidden>
        </nord-button>
      </nord-pagination-next>
    </nord-pagination-item>
  </nord-pagination-content>
</nord-pagination>
```

The root sets `role="navigation"` and a default accessible label, so you don't need to wrap it in a `<nav>`. It renders in the light DOM, so you can style it directly with your own CSS or Tailwind utilities.

### Building the page window

For numbered pages with known totals, the `paginate()` utility returns the sequence of page numbers (and ellipsis markers) to render, keeping the window centred on the current page:

```js
import { paginate } from '@nordhealth/components'

paginate(currentPage, pageCount) // → [1, "…", 4, 5, 6, "…", 50]
```

Map the tokens to `nord-pagination-link` / `nord-pagination-ellipsis` yourself — see the docs page for Next.js, Nuxt and TanStack adapters.

> **Do:** - Treat your app as the source of truth: own page state, URLs and cursors, and supply the links.
- Use `paginate()` to compute the numbered page window for known totals.
- Set `current` on the active `nord-pagination-link` so it announces as the current page.
- For icon-only previous/next, put a `nord-visually-hidden` label inside the `nord-button`.

> **Don't:** - Don't expect it to render controls or change page on its own — you supply the markup.
- Don't put an `aria-label` on a `nord-button` host; use a `nord-visually-hidden` child instead.
- Don't add a second `<nav>` around the root — it is already a navigation landmark.

<style>

html pre.shiki code .szBVR, html code.shiki .szBVR{--shiki-default:#D73A49;--shiki-dark:#F97583}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .s9eBZ, html code.shiki .s9eBZ{--shiki-default:#22863A;--shiki-dark:#85E89D}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sJ8bj, html code.shiki .sJ8bj{--shiki-default:#6A737D;--shiki-dark:#6A737D}

</style>

## Examples

### Overview

```html
<nord-stack direction="horizontal" align-items="center" wrap>
        <nord-pagination style="inline-size: auto; margin: 0;">
          <nord-pagination-content>
            <nord-pagination-item>
              <nord-pagination-previous>
                <nord-button square href="#" disabled>
                  <nord-icon name="arrow-left-small"></nord-icon>
                  <nord-visually-hidden>Previous</nord-visually-hidden>
                </nord-button>
              </nord-pagination-previous>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-link current>
                <nord-button variant="primary" href="#">1</nord-button>
              </nord-pagination-link>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-link>
                <nord-button variant="plain" href="#">2</nord-button>
              </nord-pagination-link>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-link>
                <nord-button variant="plain" href="#">3</nord-button>
              </nord-pagination-link>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-ellipsis></nord-pagination-ellipsis>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-link>
                <nord-button variant="plain" href="#">25</nord-button>
              </nord-pagination-link>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-next>
                <nord-button square href="#">
                  <nord-icon name="arrow-right-small"></nord-icon>
                  <nord-visually-hidden>Next</nord-visually-hidden>
                </nord-button>
              </nord-pagination-next>
            </nord-pagination-item>
          </nord-pagination-content>
        </nord-pagination>

        <p aria-live="polite" style="flex: 1; margin: 0; color: var(--n-color-text-weaker); font-size: var(--n-font-size-s);">
          Showing 1–10 of 248
        </p>

        <nord-select label="Items per page" hide-label size="m">
          <option value="10" selected>10 per page</option>
          <option value="25">25 per page</option>
          <option value="50">50 per page</option>
        </nord-select>
      </nord-stack>
```

### Numbered

```html
<nord-pagination>
        <nord-pagination-content>
          <nord-pagination-item>
            <nord-pagination-previous>
              <nord-button square href="#">
                <nord-icon name="arrow-left-small"></nord-icon>
                <nord-visually-hidden>Previous</nord-visually-hidden>
              </nord-button>
            </nord-pagination-previous>
          </nord-pagination-item>
          <nord-pagination-item>
            <nord-pagination-link>
              <nord-button variant="plain" href="#">1</nord-button>
            </nord-pagination-link>
          </nord-pagination-item>
          <nord-pagination-item>
            <nord-pagination-link current>
              <nord-button variant="primary" href="#">2</nord-button>
            </nord-pagination-link>
          </nord-pagination-item>
          <nord-pagination-item>
            <nord-pagination-link>
              <nord-button variant="plain" href="#">3</nord-button>
            </nord-pagination-link>
          </nord-pagination-item>
          <nord-pagination-item>
            <nord-pagination-ellipsis></nord-pagination-ellipsis>
          </nord-pagination-item>
          <nord-pagination-item>
            <nord-pagination-next>
              <nord-button square href="#">
                <nord-icon name="arrow-right-small"></nord-icon>
                <nord-visually-hidden>Next</nord-visually-hidden>
              </nord-button>
            </nord-pagination-next>
          </nord-pagination-item>
        </nord-pagination-content>
      </nord-pagination>
```

### Simple

```html
<nord-pagination>
        <nord-pagination-content>
          <nord-pagination-item>
            <nord-pagination-link>
              <nord-button variant="plain" href="#">1</nord-button>
            </nord-pagination-link>
          </nord-pagination-item>
          <nord-pagination-item>
            <nord-pagination-link current>
              <nord-button variant="primary" href="#">2</nord-button>
            </nord-pagination-link>
          </nord-pagination-item>
          <nord-pagination-item>
            <nord-pagination-link>
              <nord-button variant="plain" href="#">3</nord-button>
            </nord-pagination-link>
          </nord-pagination-item>
          <nord-pagination-item>
            <nord-pagination-link>
              <nord-button variant="plain" href="#">4</nord-button>
            </nord-pagination-link>
          </nord-pagination-item>
          <nord-pagination-item>
            <nord-pagination-link>
              <nord-button variant="plain" href="#">5</nord-button>
            </nord-pagination-link>
          </nord-pagination-item>
        </nord-pagination-content>
      </nord-pagination>
```

### Icons Only

```html
<nord-stack direction="horizontal" align-items="center" justify-content="space-between">
        <nord-select label="Rows per page" hide-label size="m">
          <option value="10">10</option>
          <option value="25" selected>25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </nord-select>
        <nord-pagination style="inline-size: auto; margin: 0;">
          <nord-pagination-content>
            <nord-pagination-item>
              <nord-pagination-previous>
                <nord-button square href="#">
                  <nord-icon name="arrow-left-small"></nord-icon>
                  <nord-visually-hidden>Previous</nord-visually-hidden>
                </nord-button>
              </nord-pagination-previous>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-next>
                <nord-button square href="#">
                  <nord-icon name="arrow-right-small"></nord-icon>
                  <nord-visually-hidden>Next</nord-visually-hidden>
                </nord-button>
              </nord-pagination-next>
            </nord-pagination-item>
          </nord-pagination-content>
        </nord-pagination>
      </nord-stack>
```

### Cursor

```html
<nord-pagination>
        <nord-pagination-content>
          <nord-pagination-item>
            <nord-pagination-previous>
              <nord-button href="#" disabled>
                <nord-icon name="arrow-left-small"></nord-icon>
                Previous
              </nord-button>
            </nord-pagination-previous>
          </nord-pagination-item>
          <nord-pagination-item>
            <nord-pagination-next>
              <nord-button href="#">
                Next
                <nord-icon name="arrow-right-small"></nord-icon>
              </nord-button>
            </nord-pagination-next>
          </nord-pagination-item>
        </nord-pagination-content>
      </nord-pagination>
```

### Rtl

```html
<div dir="rtl">
        <nord-pagination>
          <nord-pagination-content>
            <nord-pagination-item>
              <nord-pagination-previous>
                <nord-button square href="#">
                  <nord-icon name="arrow-right-small"></nord-icon>
                  <nord-visually-hidden>السابق</nord-visually-hidden>
                </nord-button>
              </nord-pagination-previous>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-link>
                <nord-button variant="plain" href="#">١</nord-button>
              </nord-pagination-link>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-link current>
                <nord-button variant="primary" href="#">٢</nord-button>
              </nord-pagination-link>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-link>
                <nord-button variant="plain" href="#">٣</nord-button>
              </nord-pagination-link>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-ellipsis label="مزيد من الصفحات"></nord-pagination-ellipsis>
            </nord-pagination-item>
            <nord-pagination-item>
              <nord-pagination-next>
                <nord-button square href="#">
                  <nord-icon name="arrow-left-small"></nord-icon>
                  <nord-visually-hidden>التالي</nord-visually-hidden>
                </nord-button>
              </nord-pagination-next>
            </nord-pagination-item>
          </nord-pagination-content>
        </nord-pagination>
      </div>
```

## API Reference

### Properties

- **loading** (`boolean`, default: `false`) — Dims the pagination and disables interaction while results are loading.

### Slots

- **(default)** — Default slot for the composed pagination primitives.

### CSS Custom Properties

- `--n-pagination-gap` (default: `var(--n-space-xs)`) — Controls the spacing between pagination controls.

<!--
Source: https://nordhealth.design/raw/components/pagination.md
-->
