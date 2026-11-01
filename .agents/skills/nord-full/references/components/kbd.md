# nord-kbd

> Kbd is used to display a keyboard key, such as a shortcut or a key the user
> should press. Group related keys together with <a href="/components/kbd-group/">Kbd Group</a>.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to display a keyboard key or shortcut, such as ⌘ K.
- Group the keys of a multi-key shortcut together with [Kbd Group](/components/kbd-group/).
- Use the same casing and symbols the user sees on their keyboard.

> **Don't:** - Don’t use to style arbitrary inline code, use a `<code>` element instead.
- Don’t rely on Kbd alone to convey an action, always pair it with a descriptive label.

## Examples

### Basic

```html
<nord-stack align-items="center" gap="m">
      <nord-kbd-group>
        <nord-kbd>⌘</nord-kbd>
        <nord-kbd>⇧</nord-kbd>
        <nord-kbd>⌥</nord-kbd>
        <nord-kbd>⌃</nord-kbd>
      </nord-kbd-group>
      <nord-kbd-group>
        <nord-kbd>Ctrl</nord-kbd>
        <span>+</span>
        <nord-kbd>B</nord-kbd>
      </nord-kbd-group>
    </nord-stack>
```

### Sizes

```html
<nord-stack direction="horizontal" align-items="center" gap="m">
      <nord-kbd size="xs">⌘</nord-kbd>
      <nord-kbd size="s">⌘</nord-kbd>
      <nord-kbd size="m">⌘</nord-kbd>
      <nord-kbd size="l">⌘</nord-kbd>
    </nord-stack>
```

### Variants Light Theme

```html
<div style=${darkTheme}>${variantsRow()}</div>
```

### Borderless

```html
<nord-kbd-group>
      <nord-kbd>⌘</nord-kbd>
      <nord-kbd borderless>⌘</nord-kbd>
    </nord-kbd-group>
```

### Group

```html
<p class="n:text-s n:text-weaker">
      Use
      <nord-kbd-group>
        <nord-kbd>Ctrl + B</nord-kbd>
        <nord-kbd>Ctrl + K</nord-kbd>
      </nord-kbd-group>
      to open the command palette
    </p>
```

### Button

```html
<nord-button>
      Accept
      <nord-kbd>⏎</nord-kbd>
    </nord-button>
```

### Tooltip

```html
<nord-stack
      direction="horizontal"
      gap="m"
      align-items="center"
      class="n:my-xl n:mx-auto"
    >
      <nord-button aria-describedby="save-tooltip">Save</nord-button>
      <nord-button aria-describedby="print-tooltip">Print</nord-button>
    </nord-stack>

    <nord-tooltip id="save-tooltip">
      Save changes
      <nord-kbd>S</nord-kbd>
    </nord-tooltip>
    <nord-tooltip id="print-tooltip">
      Print document
      <nord-kbd-group>
        <nord-kbd>Ctrl</nord-kbd>
        <nord-kbd>P</nord-kbd>
      </nord-kbd-group>
    </nord-tooltip>
```

### Input Group

```html
<div class="n:inline-[20rem] n:max-inline-full">
      <nord-input type="search" label="Search" placeholder="Search...">
        <nord-kbd-group slot="end">
          <nord-kbd>⌘</nord-kbd>
          <nord-kbd>K</nord-kbd>
        </nord-kbd-group>
      </nord-input>
    </div>
```

### Tailwind Override

```html
<nord-stack direction="horizontal" align-items="center" gap="l">
      <nord-kbd size="xs" class="n:p-[2rem] n:text-[2rem] n:border-[red]">⌘</nord-kbd>
      <nord-kbd
        size="xs"
        class="n:[--n-kbd-padding-block:2rem] n:[--n-kbd-padding-inline:2rem] n:[--n-kbd-font-size:2rem] n:border-[red]"
        >⌘</nord-kbd
      >
    </nord-stack>
```

## API Reference

### Properties

- **size** (`'xs' | 's' | 'm' | 'l'`, default: `'m'`) — The size of the key. Each value maps to the matching font-size token
(<code>xs</code>→<code>--n-font-size-xs</code> … <code>l</code>→<code>--n-font-size-l</code>); <code>xs</code> suits dense
surfaces like dark tooltips, <code>l</code> is for more prominent keys.
- **variant** (`'default' | 'light' | 'dark'`, default: `'default'`) — The colour variant. <code>default</code> follows the active layout theme; <code>light</code> and
<code>dark</code> pin the key to fixed light/dark colours regardless of the theme
(e.g. a dark key on a dark tooltip).
- **borderless** (`boolean`, default: `false`) — Removes the border and drop shadow, for a flat key with no outline.
- **emphasize** (`boolean`, default: `false`) — Raises the text contrast — the theme's main text colour (<code>--n-color-text</code>)
on the <code>default</code> variant, or the pinned high-contrast colour (dark text /
white) on the fixed <code>light</code> / <code>dark</code> variants.

### Slots

- **(default)** — Default slot for the key label (text or an icon).

### CSS Custom Properties

- `--n-kbd-color` (default: `var(--n-color-icon)`) — Controls the text color of the key.
- `--n-kbd-background-color` (default: `var(--n-color-button)`) — Controls the background color of the key.
- `--n-kbd-padding-block` — Controls the block padding of the key. Overrides the size default.
- `--n-kbd-padding-inline` — Controls the inline padding of the key. Overrides the size default.
- `--n-kbd-font-size` — Controls the font size of the key. Overrides the size default.
- `--n-kbd-border-radius` (default: `var(--n-border-radius-s)`) — Controls how rounded the corners are.
- `--n-kbd-border-width` (default: `1px`) — Controls the border width of the key.
- `--n-kbd-border-color` — Controls the border color of the key. Overrides the variant default.
- `--n-kbd-box-shadow` — Controls the box shadow of the key. Overrides the variant default.

<!--
Source: https://nordhealth.design/raw/components/kbd.md
-->
