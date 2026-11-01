# nord-outline

> Outline is an in-page table of contents that lists a page's headings and
> highlights the section currently in view as you scroll.
> 
> Provide <a href="/components/outline-item/">Outline Item</a> children, or point <code>for</code> at
> a container to build the list from its headings.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use Outline as a table of contents for navigation *within* a single long page, such as documentation, help articles or long settings pages.
- Pass a flat, ordered list of [Outline Item](/components/outline-item/) children and let `level` control the indentation.
- Set `active` when your own scroll logic owns the active section — this disables the built-in scroll-spy.
- Use `density="compact"` in dense sidebars where vertical space is tight.
- Use `for` to generate the outline from a content container's headings automatically.

> **Don't:** - Don’t use Outline for application navigation between routes — use [Navigation](/components/navigation/) instead.
- Don’t use Outline for expandable, collapsible hierarchy.
- Don’t place a `<nav>` element inside the outline, as the host already exposes a navigation landmark.

---

## Content guidelines

Outline item labels should match the headings they link to. Write them in sentence case, keep them short, and avoid ending in punctuation:

> **Do:** Getting started

> **Don't:** Getting Started.

## Examples

### Overview

```html
<nord-outline active="installation">
      <nord-outline-item href="#introduction" level="1">Introduction</nord-outline-item>
      <nord-outline-item href="#installation" level="1">Installation</nord-outline-item>
      <nord-outline-item href="#usage" level="1">Usage</nord-outline-item>
      <nord-outline-item href="#accessibility" level="1">Accessibility</nord-outline-item>
    </nord-outline>
```

### Levels

```html
<nord-outline active="design-tokens">
      <nord-outline-item href="#overview" level="1">Overview</nord-outline-item>
      <nord-outline-item href="#core-concepts" level="2">Core concepts</nord-outline-item>
      <nord-outline-item href="#design-tokens" level="3">Design tokens</nord-outline-item>
      <nord-outline-item href="#naming-scheme" level="4">Naming scheme</nord-outline-item>
      <nord-outline-item href="#components" level="2">Components</nord-outline-item>
      <nord-outline-item href="#reference" level="1">Reference</nord-outline-item>
    </nord-outline>
```

### Compact

```html
<nord-outline density="compact" active="usage">
      <nord-outline-item href="#introduction" level="1">Introduction</nord-outline-item>
      <nord-outline-item href="#installation" level="1">Installation</nord-outline-item>
      <nord-outline-item href="#usage" level="1">Usage</nord-outline-item>
      <nord-outline-item href="#api" level="2">API</nord-outline-item>
      <nord-outline-item href="#accessibility" level="1">Accessibility</nord-outline-item>
    </nord-outline>
```

### Controlled

```html
<nord-outline active="usage">
      <nord-outline-item href="#introduction" level="1">Introduction</nord-outline-item>
      <nord-outline-item href="#installation" level="1">Installation</nord-outline-item>
      <nord-outline-item href="#usage" level="1">Usage</nord-outline-item>
      <nord-outline-item href="#accessibility" level="1">Accessibility</nord-outline-item>
    </nord-outline>
```

### Scroll Spy

```html
<div class="n:flex n:gap-xl n:items-start">
      ${content('spy')}
      <nord-outline class="n:sticky n:inset-bs-m">${items('spy')}</nord-outline>
    </div>
```

### From Content

```html
<div class="n:flex n:gap-xl n:items-start">
      <div id="from-content" class="n:flex-1 n:min-inline-0">
        <h2 id="getting-started" class="n:mbe-s">Getting started</h2>
        <p class="n:text-weaker">${lorem}</p>
        <h3 id="prerequisites" class="n:mbe-s">Prerequisites</h3>
        <p class="n:text-weaker">${lorem}</p>
        <h3 id="first-steps" class="n:mbe-s">First steps</h3>
        <p class="n:text-weaker">${lorem}</p>
        <h2 id="going-further" class="n:mbe-s">Going further</h2>
        <p class="n:text-weaker">${lorem}</p>
      </div>
      <nord-outline for="from-content" class="n:sticky n:inset-bs-m"></nord-outline>
    </div>
```

## API Reference

### Properties

- **active** (`string | undefined`) — The id of the active heading. Setting this puts the Outline in controlled
mode and disables the built-in scroll-spy, so your own logic owns the
highlight (mirrors providing <code>activeId</code> in other libraries).
- **density** (`'default' | 'compact'`, default: `'default'`) — Tightens spacing for dense sidebars where vertical space is at a premium.
- **for** (`string | undefined`) — DOM-scan mode: the id (or any CSS selector) of the content container whose
headings should populate the outline. When set, slotted children are
ignored and items are generated from the matched headings.
- **heading-selector** (`string`, default: `'h1,h2,h3,h4'`) — The selector used to find headings when <code>for</code> is set. Descendant content
marked with <code>data-outline-ignore</code> is omitted from generated item labels.
- **scroll-container** (`string | undefined`) — CSS selector for the element that scrolls the content, used as the
scroll-spy <code>IntersectionObserver</code> root. Point this at your scroll container
when the page scrolls inside an element rather than the window — otherwise
the observer watches the window and never sees the headings move. If the
selector resolves to a <code>nord-scroll-area</code>, its scroll viewport is used.

When unset, the nearest ancestor <code>nord-scroll-area</code> of the scanned content
is detected automatically, falling back to the window.
- **hide-header** (`boolean`, default: `false`) — Hides the header. By default Outline shows a localized "On this page"
heading (or the <code>header</code> slot's content) above the list.

### Events

- **change** (`NordOutlineChangeEvent`) — Dispatched when the active section changes. Includes an <code>activeId</code> property.

### Slots

- **(default)** — The default slot for <a href="/components/outline-item/">Outline Item</a> children.
- **header** — Custom header content shown above the list. Overrides the default localized "On this page" heading. Set <code>hide-header</code> to remove the header entirely.

### CSS Custom Properties

- `--n-outline-indicator-color` (default: `var(--n-color-accent)`) — Color of the sliding active indicator.
- `--n-outline-track-color` (default: `var(--n-color-border)`) — Color of the static track behind the indicator.
- `--n-outline-indicator-width` (default: `2px`) — Thickness of the track and indicator.
- `--n-outline-indent` (default: `var(--n-space-m)`) — Indentation step applied per heading level.
- `--n-outline-header-color` (default: `var(--n-color-text-weaker)`) — Color of the default header text.
- `--n-outline-header-font-size` (default: `var(--n-font-size-s)`) — Font size of the default header text.

<!--
Source: https://nordhealth.design/raw/components/outline.md
-->
