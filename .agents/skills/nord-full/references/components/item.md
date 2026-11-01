# nord-item

> Item is a flexible, composable row used to display a piece of content such as
> a person, a file or a setting. Combine it with <a href="/components/item-media/">Item Media</a>,
> <a href="/components/item-content/">Item Content</a>, <a href="/components/item-title/">Item Title</a>,
> <a href="/components/item-description/">Item Description</a> and <a href="/components/item-actions/">Item Actions</a>
> to build rich list rows. Stack several together with <a href="/components/item-group/">Item Group</a>.
> 
> To make a whole Item act as a link, wrap it in an <code>&lt;a&gt;</code> element. The row
> highlights on hover when wrapped this way.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

Item is a composable row. Combine it with its parts to build list rows:

- [Item Media](/components/item-media/) for a leading icon, avatar or image.
- [Item Content](/components/item-content/) wrapping an [Item Title](/components/item-title/) and an [Item Description](/components/item-description/).
- [Item Actions](/components/item-actions/) for trailing controls.
- [Item Header](/components/item-header/) and [Item Footer](/components/item-footer/) for full-width rows.
- [Item Group](/components/item-group/) and [Item Separator](/components/item-separator/) to stack several items as a list.

```html
<nord-item variant="outline">
  <nord-item-media variant="icon">
    <nord-icon name="navigation-notifications"></nord-icon>
  </nord-item-media>
  <nord-item-content>
    <nord-item-title>Inbox</nord-item-title>
    <nord-item-description>You have 3 unread messages.</nord-item-description>
  </nord-item-content>
  <nord-item-actions>
    <nord-button size="s">View</nord-button>
  </nord-item-actions>
</nord-item>
```

### Clickable items

To make a whole item act as a link, wrap it in an `<a>` element. The row
highlights on hover and shows a focus ring when the link is focused.

```html
<a href="/profile">
  <nord-item variant="outline">
    <nord-item-content>
      <nord-item-title>Your profile</nord-item-title>
    </nord-item-content>
    <nord-item-actions>
      <nord-icon name="arrow-right-small"></nord-icon>
    </nord-item-actions>
  </nord-item>
</a>
```

> **Do:** - Use Item to present a single, self-contained piece of content such as a person, file or setting.
- Group related items with [Item Group](/components/item-group/) so assistive technology announces them as a list.
- Keep the [Item Title](/components/item-title/) concise and put supporting text in the [Item Description](/components/item-description/).
- Wrap an item in an `<a>` element when the entire row should be a link.

> **Don't:** - Don’t place interactive controls inside an item that is itself wrapped in a link, as nested interactive elements are not accessible.
- Don’t use Item for long-form content, it is intended for compact rows.
- Don’t omit an accessible label on icon-only buttons placed in [Item Actions](/components/item-actions/).

<style>

html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .s9eBZ, html code.shiki .s9eBZ{--shiki-default:#22863A;--shiki-dark:#85E89D}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}

</style>

## Examples

### Demo

```html
<nord-stack gap="l" class="n:container-xxs">
      <nord-item variant="outline">
        <nord-item-content>
          <nord-item-title>Basic Item</nord-item-title>
          <nord-item-description>A simple item with title and description.</nord-item-description>
        </nord-item-content>
        <nord-item-actions>
          <nord-button size="s">Action</nord-button>
        </nord-item-actions>
      </nord-item>

      <a href="#">
        <nord-item variant="outline" size="s">
          <nord-item-media>
            <nord-icon name="interface-checked" label="Verified"></nord-icon>
          </nord-item-media>
          <nord-item-content>
            <nord-item-title>Your profile has been verified.</nord-item-title>
          </nord-item-content>
          <nord-item-actions>
            <nord-icon name="arrow-right-small"></nord-icon>
          </nord-item-actions>
        </nord-item>
      </a>
    </nord-stack>
```

### Variant

```html
<nord-stack gap="l" class="n:container-xxs">
      <nord-item>
        <nord-item-media variant="icon">
          <nord-icon name="navigation-notifications"></nord-icon>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Default Variant</nord-item-title>
          <nord-item-description>Transparent background with no border.</nord-item-description>
        </nord-item-content>
      </nord-item>
      <nord-item variant="outline">
        <nord-item-media variant="icon">
          <nord-icon name="navigation-notifications"></nord-icon>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Outline Variant</nord-item-title>
          <nord-item-description>Outlined style with a visible border.</nord-item-description>
        </nord-item-content>
      </nord-item>
      <nord-item variant="muted">
        <nord-item-media variant="icon">
          <nord-icon name="navigation-notifications"></nord-icon>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Muted Variant</nord-item-title>
          <nord-item-description>Muted background for secondary content.</nord-item-description>
        </nord-item-content>
      </nord-item>
    </nord-stack>
```

### Size

```html
<nord-stack gap="l" class="n:container-xxs">
      <nord-item variant="outline">
        <nord-item-media variant="icon">
          <nord-icon name="navigation-notifications"></nord-icon>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Default Size</nord-item-title>
          <nord-item-description>The standard size for most use cases.</nord-item-description>
        </nord-item-content>
      </nord-item>
      <nord-item variant="outline" size="s">
        <nord-item-media variant="icon">
          <nord-icon name="navigation-notifications"></nord-icon>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Small Size</nord-item-title>
          <nord-item-description>A compact size for dense layouts.</nord-item-description>
        </nord-item-content>
      </nord-item>
      <nord-item variant="outline" size="xs">
        <nord-item-media variant="icon">
          <nord-icon name="navigation-notifications"></nord-icon>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Extra Small Size</nord-item-title>
          <nord-item-description>The most compact size available.</nord-item-description>
        </nord-item-content>
      </nord-item>
    </nord-stack>
```

### Icon

```html
<div class="n:container-xs">
      <nord-item variant="outline">
        <nord-item-media variant="icon">
          <nord-icon name="interface-warning"></nord-icon>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Security Alert</nord-item-title>
          <nord-item-description>New login detected from unknown device.</nord-item-description>
        </nord-item-content>
        <nord-item-actions>
          <nord-button size="s">Review</nord-button>
        </nord-item-actions>
      </nord-item>
    </div>
```

### Avatar

```html
<nord-stack gap="l" class="n:container-xs">
      <nord-item variant="outline">
        <nord-item-media>
          <nord-avatar
            size="l"
            src="https://nordhealth.design/img/avatar.jpg"
            name="Laura Williams"
          ></nord-avatar>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Laura Williams</nord-item-title>
          <nord-item-description>Last seen 5 months ago</nord-item-description>
        </nord-item-content>
        <nord-item-actions>
          <nord-button size="s" square aria-label="Invite">
            <nord-icon name="interface-add"></nord-icon>
          </nord-button>
        </nord-item-actions>
      </nord-item>
      <nord-item variant="outline">
        <nord-item-media>
          <nord-stack direction="horizontal" gap="none">
            <nord-avatar name="Laura Williams"></nord-avatar>
            <nord-avatar name="Erik Johansson"></nord-avatar>
            <nord-avatar name="Sofia Bergström"></nord-avatar>
          </nord-stack>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>No team members</nord-item-title>
          <nord-item-description>Invite your team to collaborate on this project.</nord-item-description>
        </nord-item-content>
        <nord-item-actions>
          <nord-button size="s">Invite</nord-button>
        </nord-item-actions>
      </nord-item>
    </nord-stack>
```

### Image

```html
<div class="n:container-xxs">
      <nord-item-group>
        <a href="#" role="listitem">
          <nord-item variant="outline">
            <nord-item-media variant="image">
              <img src="https://nordhealth.design/img/avatar-animal.jpg" alt="Bella" />
            </nord-item-media>
            <nord-item-content>
              <nord-item-title>
                Bella - <span class="n:text-weaker">Golden Retriever</span>
              </nord-item-title>
              <nord-item-description>Annual checkup</nord-item-description>
            </nord-item-content>
            <nord-item-content>
              <nord-item-description>09:30</nord-item-description>
            </nord-item-content>
          </nord-item>
        </a>
        <a href="#" role="listitem">
          <nord-item variant="outline">
            <nord-item-media variant="image">
              <img src="https://nordhealth.design/img/avatar-animal.jpg" alt="Milo" />
            </nord-item-media>
            <nord-item-content>
              <nord-item-title>
                Milo - <span class="n:text-weaker">Domestic Shorthair</span>
              </nord-item-title>
              <nord-item-description>Vaccination</nord-item-description>
            </nord-item-content>
            <nord-item-content>
              <nord-item-description>11:00</nord-item-description>
            </nord-item-content>
          </nord-item>
        </a>
        <a href="#" role="listitem">
          <nord-item variant="outline">
            <nord-item-media variant="image">
              <img src="https://nordhealth.design/img/avatar-animal.jpg" alt="Luna" />
            </nord-item-media>
            <nord-item-content>
              <nord-item-title>
                Luna - <span class="n:text-weaker">Holland Lop</span>
              </nord-item-title>
              <nord-item-description>Dental cleaning</nord-item-description>
            </nord-item-content>
            <nord-item-content>
              <nord-item-description>14:15</nord-item-description>
            </nord-item-content>
          </nord-item>
        </a>
      </nord-item-group>
    </div>
```

### Group

```html
<nord-item-group class="n:container-xxs">
      <nord-item variant="outline">
        <nord-item-media>
          <nord-avatar name="Laura Williams"></nord-avatar>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Laura Williams</nord-item-title>
          <nord-item-description>laura.williams@nordhealth.com</nord-item-description>
        </nord-item-content>
        <nord-item-actions>
          <nord-button variant="plain" size="s" square aria-label="Add Laura Williams">
            <nord-icon name="interface-add"></nord-icon>
          </nord-button>
        </nord-item-actions>
      </nord-item>
      <nord-item variant="outline">
        <nord-item-media>
          <nord-avatar name="Erik Johansson"></nord-avatar>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Erik Johansson</nord-item-title>
          <nord-item-description>erik.johansson@nordhealth.com</nord-item-description>
        </nord-item-content>
        <nord-item-actions>
          <nord-button variant="plain" size="s" square aria-label="Add Erik Johansson">
            <nord-icon name="interface-add"></nord-icon>
          </nord-button>
        </nord-item-actions>
      </nord-item>
      <nord-item variant="outline">
        <nord-item-media>
          <nord-avatar name="Sofia Bergström"></nord-avatar>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Sofia Bergström</nord-item-title>
          <nord-item-description>sofia.bergstrom@nordhealth.com</nord-item-description>
        </nord-item-content>
        <nord-item-actions>
          <nord-button variant="plain" size="s" square aria-label="Add Sofia Bergström">
            <nord-icon name="interface-add"></nord-icon>
          </nord-button>
        </nord-item-actions>
      </nord-item>
    </nord-item-group>
```

### Header

```html
<div class="n:container-s">
      <nord-item-group class="n:grid! n:grid-cols-3 n:gap-m!">
        <nord-item variant="outline">
          <nord-item-header>
            <img src="/img/pet.jpg" alt="Bella" />
          </nord-item-header>
          <nord-item-content>
            <nord-item-title>Bella</nord-item-title>
            <nord-item-description>Golden Retriever · 3 yrs</nord-item-description>
          </nord-item-content>
        </nord-item>
        <nord-item variant="outline">
          <nord-item-header>
            <img src="/img/pet.jpg" alt="Charlie" />
          </nord-item-header>
          <nord-item-content>
            <nord-item-title>Charlie</nord-item-title>
            <nord-item-description>Beagle · 5 yrs</nord-item-description>
          </nord-item-content>
        </nord-item>
        <nord-item variant="outline">
          <nord-item-header>
            <img src="/img/pet.jpg" alt="Daisy" />
          </nord-item-header>
          <nord-item-content>
            <nord-item-title>Daisy</nord-item-title>
            <nord-item-description>Labrador · 2 yrs</nord-item-description>
          </nord-item-content>
        </nord-item>
      </nord-item-group>
    </div>
```

### Link

```html
<nord-stack gap="m" class="n:container-xxs">
      <a href="#">
        <nord-item>
          <nord-item-content>
            <nord-item-title>Visit our documentation</nord-item-title>
            <nord-item-description>Learn how to get started with our components.</nord-item-description>
          </nord-item-content>
          <nord-item-actions>
            <nord-icon name="arrow-right-small"></nord-icon>
          </nord-item-actions>
        </nord-item>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <nord-item variant="outline">
          <nord-item-content>
            <nord-item-title>External resource</nord-item-title>
            <nord-item-description>Opens in a new tab with security attributes.</nord-item-description>
          </nord-item-content>
          <nord-item-actions>
            <nord-icon name="interface-new-window"></nord-icon>
          </nord-item-actions>
        </nord-item>
      </a>
    </nord-stack>
```

### Dropdown

```html
<nord-dropdown size="s">
      <nord-button slot="toggle">
        Select
        <nord-icon slot="end" name="interface-dropdown-small"></nord-icon>
      </nord-button>
      <nord-dropdown-item>
        <nord-item size="xs">
          <nord-item-media>
            <nord-avatar size="s" name="Laura Williams"></nord-avatar>
          </nord-item-media>
          <nord-item-content class="n:gap-0">
            <nord-item-title>Laura Williams</nord-item-title>
            <nord-item-description>laura.williams@nordhealth.com</nord-item-description>
          </nord-item-content>
        </nord-item>
      </nord-dropdown-item>
      <nord-dropdown-item>
        <nord-item size="xs">
          <nord-item-media>
            <nord-avatar size="s" name="Erik Johansson"></nord-avatar>
          </nord-item-media>
          <nord-item-content class="n:gap-0">
            <nord-item-title>Erik Johansson</nord-item-title>
            <nord-item-description>erik.johansson@nordhealth.com</nord-item-description>
          </nord-item-content>
        </nord-item>
      </nord-dropdown-item>
      <nord-dropdown-item>
        <nord-item size="xs">
          <nord-item-media>
            <nord-avatar size="s" name="Sofia Bergström"></nord-avatar>
          </nord-item-media>
          <nord-item-content class="n:gap-0">
            <nord-item-title>Sofia Bergström</nord-item-title>
            <nord-item-description>sofia.bergstrom@nordhealth.com</nord-item-description>
          </nord-item-content>
        </nord-item>
      </nord-dropdown-item>
    </nord-dropdown>
```

### Overview

```html
<div class="n:container-xxs">
      <nord-item variant="outline">
        <nord-item-content>
          <nord-item-title>Basic Item</nord-item-title>
          <nord-item-description>A simple item with title and description.</nord-item-description>
        </nord-item-content>
        <nord-item-actions>
          <nord-button size="s">Action</nord-button>
        </nord-item-actions>
      </nord-item>
    </div>
```

### Avatar Single

```html
<nord-item variant="outline" class="n:container-xs">
      <nord-item-media>
        <nord-avatar size="l" src="https://nordhealth.design/img/avatar.jpg" name="Laura Williams"></nord-avatar>
      </nord-item-media>
      <nord-item-content>
        <nord-item-title>Laura Williams</nord-item-title>
        <nord-item-description>Last seen 5 months ago</nord-item-description>
      </nord-item-content>
      <nord-item-actions>
        <nord-button size="s" square aria-label="Invite">
          <nord-icon name="interface-add"></nord-icon>
        </nord-button>
      </nord-item-actions>
    </nord-item>
```

### Group Basic

```html
<nord-item-group class="n:container-xxs">
      <nord-item variant="outline">
        <nord-item-media>
          <nord-avatar name="Laura Williams"></nord-avatar>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Laura Williams</nord-item-title>
          <nord-item-description>laura.williams@nordhealth.com</nord-item-description>
        </nord-item-content>
        <nord-item-actions>
          <nord-button variant="plain" size="s" square aria-label="Add Laura Williams">
            <nord-icon name="interface-add"></nord-icon>
          </nord-button>
        </nord-item-actions>
      </nord-item>
      <nord-item variant="outline">
        <nord-item-media>
          <nord-avatar name="Anne Williams"></nord-avatar>
        </nord-item-media>
        <nord-item-content>
          <nord-item-title>Anne Williams</nord-item-title>
          <nord-item-description>anne.williams@nordhealth.com</nord-item-description>
        </nord-item-content>
        <nord-item-actions>
          <nord-button variant="plain" size="s" square aria-label="Add Anne Williams">
            <nord-icon name="interface-add"></nord-icon>
          </nord-button>
        </nord-item-actions>
      </nord-item>
    </nord-item-group>
```

## API Reference

### Properties

- **variant** (`'default' | 'outline' | 'muted'`, default: `'default'`) — The visual style of the item.

- <code>default</code> has a transparent background and no border.
- <code>outline</code> adds a visible border.
- <code>muted</code> uses a subtle filled background for secondary content.
- **size** (`'xs' | 's' | 'm'`, default: `'s'`) — The size of the item, controlling its padding and gap.

### Slots

- **(default)** — Default slot for the item parts (media, content, actions, header, footer).

### CSS Custom Properties

- `--n-item-gap` — Controls the spacing between the item parts, using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-item-padding` — Controls the inner padding of the item, using our <a href="/tokens/#space">spacing tokens</a>.
- `--n-item-border-radius` (default: `var(--n-border-radius-s)`) — Controls how rounded the corners are.

<!--
Source: https://nordhealth.design/raw/components/item.md
-->
