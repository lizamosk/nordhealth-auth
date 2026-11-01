# nord-skeleton

> Skeletons are used to provide a low fidelity representation of content
> before it appears in a view. This improves the perceived loading time
> for our users.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use skeleton component for dynamic content only.
- Use to give the user an indication of what the page layout will be like once loaded.
- Mimick the actual layout using multiple Skeleton components.
- Use `aria-busy="true"` to indicate which area on the screen is currently loading and remove it or set it to `false` once loaded.

> **Don't:** - Don’t use Skeleton component for static content.
- Don’t show placeholder content after Skeleton disappears that will change when the page fully loads.

## Examples

### Basic

```html
<style>.skeleton-overview header {
    display: flex;
    align-items: center;
    margin-block-end: var(--n-space-s);
  }
  .skeleton-overview header nord-skeleton:last-child {
    flex: 0 0 auto;
    inline-size: 30%;
  }
  .skeleton-overview nord-skeleton {
    margin-bottom: var(--n-space-m);
  }
  .skeleton-overview nord-skeleton:nth-child(1) {
    inline-size: 3rem;
    block-size: 3rem;
    margin-inline-end: var(--n-space-m);
  }
  .skeleton-overview nord-skeleton:nth-child(3) {
    inline-size: 90%;
  }
  .skeleton-overview nord-skeleton:nth-child(4) {
    inline-size: 80%;
  }</style>
    <div class="skeleton-overview" aria-busy="true">
      <header>
        <nord-skeleton></nord-skeleton>
        <nord-skeleton></nord-skeleton>
      </header>
      <nord-skeleton></nord-skeleton>
      <nord-skeleton></nord-skeleton>
      <nord-skeleton></nord-skeleton>
      <nord-visually-hidden>Loading</nord-visually-hidden>
    </div>
```

### Effects

```html
<nord-stack aria-busy="true">
      <nord-skeleton></nord-skeleton>
      <p>None</p>

      <nord-skeleton effect="sheen"></nord-skeleton>
      <p>Sheen</p>

      <nord-skeleton effect="pulse"></nord-skeleton>
      <p>Pulse</p>
    </nord-stack>
```

### Inside Card

```html
<style>.skeleton-header {
    width: 30%;
  }
  .skeleton-paragraph nord-skeleton {
    margin-block-end: var(--n-space-m);
    width: 90%;
  }
  .skeleton-paragraph nord-skeleton:nth-child(2) {
    width: 75%;
  }
  .skeleton-paragraph nord-skeleton:nth-child(4) {
    width: 70%;
  }
  .skeleton-paragraph nord-skeleton:last-child {
    width: 30%;
    margin-block-end: 0;
  }</style>
    <nord-card padding="l" aria-busy="true">
      <nord-skeleton effect="sheen" class="skeleton-header" slot="header"></nord-skeleton>
      <div class="skeleton-paragraph">
        <nord-skeleton effect="sheen"></nord-skeleton>
        <nord-skeleton effect="sheen"></nord-skeleton>
        <nord-skeleton effect="sheen"></nord-skeleton>
        <nord-skeleton effect="sheen"></nord-skeleton>
        <nord-skeleton effect="sheen"></nord-skeleton>
      </div>
      <nord-visually-hidden>Loading</nord-visually-hidden>
    </nord-card>
```

### Rtl

```html
<nord-stack aria-busy="true">
      <nord-skeleton effect="sheen"></nord-skeleton>
      <nord-skeleton effect="sheen" class="n:inline-[80%]"></nord-skeleton>
      <nord-visually-hidden>Loading</nord-visually-hidden>
    </nord-stack>
```

### Paragraph

```html
<style>.skeleton-paragraph nord-skeleton {
    margin-bottom: var(--n-space-m);
  }
  .skeleton-paragraph nord-skeleton:nth-child(2) {
    width: 95%;
  }
  .skeleton-paragraph nord-skeleton:nth-child(4) {
    width: 90%;
  }
  .skeleton-paragraph nord-skeleton:nth-child(5) {
    width: 50%;
  }</style>
    <div class="skeleton-paragraph" aria-busy="true">
      <nord-skeleton></nord-skeleton>
      <nord-skeleton></nord-skeleton>
      <nord-skeleton></nord-skeleton>
      <nord-skeleton></nord-skeleton>
      <nord-skeleton></nord-skeleton>
      <nord-visually-hidden>Loading</nord-visually-hidden>
    </div>
```

## API Reference

### Properties

- **effect** (`'pulse' | 'sheen' | undefined`) — Determines which animation effect the skeleton will use.
The default is no animation.

### CSS Custom Properties

- `--n-skeleton-border-radius` (default: `var(--n-border-radius)`) — Controls how rounded the corners are, using <a href="/tokens/#border-radius">border radius tokens</a>.
- `--n-skeleton-color` (default: `var(--n-color-border)`) — Controls the main color of the skeleton, using our <a href="/tokens/#color">color tokens</a>.
- `--n-skeleton-sheen-color` (default: `var(--n-color-border-strong)`) — Controls the sheen color of the skeleton, using our <a href="/tokens/#color">color tokens</a>.

<!--
Source: https://nordhealth.design/raw/components/skeleton.md
-->
