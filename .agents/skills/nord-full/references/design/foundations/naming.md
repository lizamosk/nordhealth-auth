# Naming

> 

*Different disciplines use names defined in the design system to communicate about tokens, components and similar. Hence, names must be modular, meaningful and pronounceable.*

The following set of principles guide our team when naming things and help us do better and more informed decisions. These principles are adapted from Brad Frost’s [CSS Architecture for Design Systems](http://bradfrost.com/blog/post/css-architecture-for-design-systems/){rel="[\"nofollow\"]"}.

## Make it modular

Nord consists of independent modules which applies to our naming as well. Different parts of the system need to be clearly separated.

## Make it legible

Developers should be able to understand code at a glance and understand the purpose of any given part. Same is true for design components.

## Avoid conflicts

Since Nord’s components will be used on many platforms, it’s critical to ensure that its naming doesn’t conflict with other systems.

---

## Design Tokens

Users should be able understand the purpose of any given token at a glance. To make sure naming stays consistent and straightforward, we follow these guidelines:

- **Naming structure:** `{prefix}-{category}-{subcategory}-{name}`.
- **Prefix:** Token names always start with a prefix and a hyphen. For example `n-color-success` or `n-space-xl`. “N” stands for Nord Design System. Prefixing is critical to ensure that our naming doesn’t conflict with other systems.
- **Categorization:** Token names always include at least one category, like `color`, `space`, or similar. If it makes sense in your use case, you can also include subcategory in the name. For example `n-color-status-success` or `n-color-status-warning`.
- **Examples:** `n-color-accent`, `n-font-family-code`, `n-space-xl`.

---

## Sizes

We define sizing using T-shirt sizes. This makes it possible for anyone, technical or non-technical person, to understand the differences and how they relate to each other.

- **Keep it consistent and short:** Always use the short form version (s, m, l, xl) when naming components, tokens, and symbols. This makes it quicker for developers to reference them.
- **Default size:** `m` is always the default or the base value.
- **Larger than default:** When you want to define a size larger than `m` we use `l`, `xl`, `xxl`, and so on. If it’s a component, make it possible to pass the size via a “size” property.
- **Smaller than default:** When you want to define a size smaller than `m`, we use `s`, `xs`, `xxs`, and so on. If it’s a component, make it possible to pass the size via a “size” property.
- **Examples:** `n-space-l`, `n-space-xl`, `n-space-s`.

---

## Colors

Each color name contains a role, modifier and theme. This accommodate needs such as state, interactivity, and emphasis for different products. For example, a component may require color variations for hover, active, selected, focused, and disabled states.

Roles in color names are used to indicate how color is applied. By defining roles instead of specific values, we can ensure the correct use of each color, allow for modifiers, and support theming.

Each color follows the same naming convention so that they are understandable at a glance:

- **Naming structure:** `n-color-{role}-{modifier}-{theme}`
- **Role:** Each color has a role in Nord such as `accent`, `border`, `text`, `status`, or `surface`.
- **Modifier:** Modifiers are optional and may include variations such as `weak`, `strong`, `active`, `hover`, or `success`.
- **Examples:** `n-color-accent`, `n-color-border-strong`, `n-color-text-weak`.

---

## Components

Different disciplines use component names to communicate about them. Hence, they must be short, meaningful, and pronounceable.

- **Naming structure:** `{prefix}-{name}`.
- **Prefix:** Component names always start with a prefix and a hyphen. For example `nord-button` or `nord-visually-hidden`. “N” stands for Nord Design System. Prefixing is critical to ensure that our naming doesn’t conflict with other systems.
- **Noun rather than verb:** Components are not actions, they are conceptually “things.” It is better to use nouns instead of verbs, such as `<animation/>` instead of `<animating/>`. `<input/>`, `<tab/>`, `<navigation/>`, and `<menu/>` are some examples.
- **Meaningful:** Not over specific, not overly abstract.
- **Short:** Maximum of 2 words after `nord-` prefix.
- **Pronounceable:** We want to be able talk about them.
- **Custom element spec compliant:** Don’t use reserved names. Reserved names include: `annotation-xml`, `font-face`, `font-face-src`, `font-face-uri`, `font-face-format`, `font-face-name`, `missing-glyph`, `color-profile`.
- **Examples:** `<nord-button/>`, `<nord-visually-hidden/>`, `<nord-tabs/>`.

---

## Icons

- **Naming structure:** `{category}-{subcategory}-{name}`.
- **Prefix:** Icon names always start with a category name and a hyphen. For example `action-{name}` or `messaging-{name}`.
- **Categorization:** Icon names always include at least one category, like `action`, `messaging`, or similar. If it makes sense in your use case, you can also include a subcategory in the name. For example `messaging-status-alert`. Nord uses the following icon categories:

  - `arrow`: represent any form of arrows.
  - `file`: illustrate file types and files.
  - `graph`: illustrate graphs and charts.
  - `interface`: interface specific icons like close, add, or save.
  - `keyboard`: illustrate keyboard keys.
  - `medical`: health and medical icons.
  - `navigation`: used for the nav item component.
  - `text`: represent text editor controls.
  - `user`: show user related functions.
  - `generic`: use when icons don’t fit into an existing categories.

---

## HTML Classes

- **Naming structure:** `.{prefix}-{name}-{modifier}` and `.is-{status}`.
- **Prefix:** HTML Class attributes always start with a prefix and a hyphen. For example `.n-button` or `.n:sr-only`. “N” stands for Nord Design System. Prefixing is critical to ensure that our naming doesn’t conflict with other systems.
- **Modifiers:** Modifier is a flag on an HTML element. Use them to change appearance or behavior. For example `.n-button-primary`, `.n-button-secondary`.
- **Statuses:** To indicate different statuses in the user interface, we use a specific HTML Class name formatting: `.is-{status}`. For example: `.is-loading`.
- **Examples:** `.n-button`, `.n-button-primary`, `.is-loading`.

---

## Component Props

When naming Web Component properties we need to be careful that the names we use do not conflict with existing standardized prototype members. Reserved names include:

`align`, `title`, `lang`, `translate`, `dir`, `dataset`, `hidden`, `tabIndex`, `accessKey`, `draggable`, `spellcheck`, `autocapitalize`, `contentEditable`, `isContentEditable`, `inputMode`, `offsetParent`, `offsetTop`, `offsetLeft`, `offsetWidth`, `offsetHeight`, `style`, `innerText`, `outerText`, `oncopy`, `oncut`, `onpaste`, `onabort`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `onfocusin`, `onfocusout`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`, `onwheel`, `onauxclick`, `ongotpointercapture`, `onlostpointercapture`, `onpointerdown`, `onpointermove`, `onpointerup`, `onpointercancel`, `onpointerover`, `onpointerout`, `onpointerenter`, `onpointerleave`, `onselectstart`, `onselectionchange`, `nonce`, `click`, `focus`, `blur`, `namespaceURI`, `prefix`, `localName`, `tagName`, `id`, `className`, `classList`, `slot`, `attributes`, `shadowRoot`, `assignedSlot`, `innerHTML`, `outerHTML`, `scrollTop`, `scrollLeft`, `scrollWidth`, `scrollHeight`, `clientTop`, `clientLeft`, `clientWidth`, `clientHeight`, `attributeStyleMap`, `onbeforecopy`, `onbeforecut`, `onbeforepaste`, `onsearch`, `previousElementSibling`, `nextElementSibling`, `children`, `firstElementChild`, `lastElementChild`, `childElementCount`, `onfullscreenchange`, `onfullscreenerror`, `onwebkitfullscreenchange`, `onwebkitfullscreenerror`, `setPointerCapture`, `releasePointerCapture`, `hasPointerCapture`, `hasAttributes`, `getAttributeNames`, `getAttribute`, `getAttributeNS`, `setAttribute`, `setAttributeNS`, `removeAttribute`, `removeAttributeNS`, `hasAttribute`, `hasAttributeNS`, `toggleAttribute`, `getAttributeNode`, `getAttributeNodeNS`, `setAttributeNode`, `setAttributeNodeNS`, `removeAttributeNode`, `closest`, `matches`, `webkitMatchesSelector`, `attachShadow`, `getElementsByTagName`, `getElementsByTagNameNS`, `getElementsByClassName`, `insertAdjacentElement`, `insertAdjacentText`, `insertAdjacentHTML`, `requestPointerLock`, `getClientRects`, `getBoundingClientRect`, `scrollIntoView`, `scroll`, `scrollTo`, `scrollBy`, `scrollIntoViewIfNeeded`, `animate`, `computedStyleMap`, `before`, `after`, `replaceWith`, `remove`, `prepend`, `append`, `querySelector`, `querySelectorAll`, `requestFullscreen`, `webkitRequestFullScreen`, `webkitRequestFullscreen`, `part`, `createShadowRoot`, `getDestinationInsertionPoints`, `nodeType`, `nodeName`, `baseURI`, `isConnected`, `ownerDocument`, `parentNode`, `parentElement`, `childNodes`, `firstChild`, `lastChild`, `previousSibling`, `nextSibling`, `nodeValue`, `textContent`, `hasChildNodes`, `getRootNode`, `normalize`, `cloneNode`, `isEqualNode`, `isSameNode`, `compareDocumentPosition`, `contains`, `lookupPrefix`, `lookupNamespaceURI`, `isDefaultNamespace`, `insertBefore`, `appendChild`, `replaceChild`, and `removeChild`.

---

## CSS Custom Properties

- **Naming structure:** `--n-{component}-{property}` for public properties, `--_n-{component}-{property}` for private properties
- **Prefix:** `--n-` prefixes a public custom property, meaning developers can use it to fine tune components. `--_n-` prefixes a private custom property, which is used internally by component authors
- **Examples:** `--n-banner-border-radius`, `--_n-banner-background`, `--_n-banner-border-radius`

All CSS custom properties should be created as a private custom property on the `:host` selector, but can be adjusted with other selectors. If the custom property needs to be opened up for public use, then the value of the private property should be set as its public custom property counterpart with a fallback. Here’s an example of both a public and private custom property:

```css
:host {
  /* Public properties */
  --_n-banner-border-radius: var(--n-banner-border-radius, var(--n-border-radius));

  /* Private properties */
  --_n-banner-background: var(--n-color-status-info-weak);
}
```

---

## Repositories

While we don’t follow a strict naming format on repositories, there’re a few rules we follow to make sure naming stays consistent and straightforward to follow:

- **Separating words:** We use kebab-case to separate words, e.g. `nord-design-system` or `nord-react`. Never use camelCase, snake_case or any other format when naming a repository.
- **Always lowercase:** The whole repository name should be in lowercase letters. Do not use uppercase letters or Capitalization.

---

## Getting support

Have questions about naming? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

<!--
Source: https://nordhealth.design/raw/design/foundations/naming.md
-->
