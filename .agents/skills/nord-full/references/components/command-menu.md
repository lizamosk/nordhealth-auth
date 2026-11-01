# nord-command-menu

> Command Menu allows users to navigate and use an app without
> touching the mouse and helps them transform into “power users”
> who can harness more advanced features far faster.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to provide global and contextual keyboard shortcuts for users.
- Make command menu available everywhere. Users must be able to bring up the command menu easily.
- Make command menu central. Users should be able to find global shortcuts from one location.
- Make command menu omnipotent. Give users access to every possible action.
- Group related commands logically under sections with the section setting.
- Use `Alt` key as the modifier, since this is less likely to clash with existing shortcuts.

> **Don't:** - Don’t make command menu available only in certain views of the application.
- Don’t define shortcuts such as `Ctrl+C`, since this will clash with the native "Copy" shortcut.
- Don't create complex shortcuts, as users will struggle to remember them.
- Avoid using `KeyboardEvent.key` for defining the shortcut keys.
- Don’t use as a search field only.

---

## Content guidelines

Command titles should be clear, accurate and predictable. It should be possible for the user to understand what will happen when they execute a command:

> **Do:** Start consultation

> **Don't:** Consultation

Always lead with a strong verb that encourages action. To provide enough context to user, use the {verb} + {noun} content formula:

> **Do:** Open dashboard

> **Don't:** Dashboard

When writing command titles, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** New appointment

> **Don't:** New Appointment

Avoid unnecessary words and articles in command titles, such as “the”, “an” or “a”:

> **Do:** Change theme

> **Don't:** Change the theme

Avoid ending in punctuation:

> **Do:** Switch user

> **Don't:** Switch user.

Use ellipsis in the title when describing sections that have commands grouped inside of them:

> **Do:** Change theme…

> **Don't:** Change theme

---

## Commands data

Each command in the `commands` data array must include at least an `id` and `title`. A command may also include properties for `section`, `icon`, `handler`, `shortcut`, `forceShortcut`, `parent`, and `keywords`:

| Name            | Purpose                                                                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | An identifier for each command, must be unique. Example: `id: "user"`.                                                                                                                                                           |
| `title`         | The title shown to users. This is used when searching for a command. Example: `title: "Change theme..."`.                                                                                                                        |
| `keywords`      | Not visible in the user interface, but can make it easier to discover commands through search. Example: `keywords: "command change log sign out in"`.                                                                            |
| `shortcut`      | The keyboard shortcut. Example: `shortcut: "Alt+KeyU"`. See the sections [Defining Shortcuts](#defining-shortcuts) and [Choosing shortcuts](#choosing-shortcuts) below for more information.                                     |
| `forceShortcut` | Set to `true` to let the command override a browser-reserved shortcut (the menu calls `preventDefault()` for it). Off by default. See [Browser-reserved shortcuts](#browser-reserved-shortcuts). Example: `forceShortcut: true`. |
| `section`       | Used for grouping many commands under a common header. Example: `section: "Commands"`.                                                                                                                                           |
| `icon`          | A name of an icon form Nordicons to show beside the title. If not specified, default command icon will be used instead. Example: `icon: "file-picture"`.                                                                         |
| `parent`        | The `id` of a parent command. This is used for nesting commands. Example: `parent: "theme"`.                                                                                                                                     |
| `handler`       | A function to execute when an user triggers a command. Example: `handler: () => { alert("Change to light theme") }`. In cases where a command is only used as a parent command e.g. "Change theme", this is not required.        |

---

## Defining shortcuts

Shortcuts in the Command Menu have the following form: `[modifier]+[key]`. Shortcuts are made up of a sequence of presses. A press can be as simple as a single key which matches against [`KeyboardEvent.code`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values){rel="[\"nofollow\"]"}:

```js
// Matches: event.code:
'KeyD'
```

Presses can optionally be prefixed with ***modifiers*** which match against any valid value to [`KeyboardEvent.getModifierState()`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState){rel="[\"nofollow\"]"}.

```js
'Control+KeyD'
'Meta+KeyD'
'Shift+KeyD'
'Alt+KeyD'
'Meta+Shift+KeyD'
```

There is also a special `$mod` modifier that makes it easy to support cross platform keybindings:

- Mac: `$mod` = `Meta` (⌘)
- Windows/Linux: `$mod` = `Control`

```js
'$mod+KeyD' // ⌘/Ctrl + D
'$mod+Shift+KeyD' // ⌘/Ctrl + Shift + D
```

### Key sequences

Separate presses with a space to require them in order. For example, `g d` fires when the user presses `g` then `d` (the "go to dashboard" convention in GitHub and Linear):

```js
'KeyG KeyD' // press G, then D
```

Each key in the hint renders in its own chip by default, whether the keys form a combo (`Ctrl+K` → `Ctrl` `K`) or a sequence (`g d` → `g` `d`). `$mod` displays as the Command key icon on macOS and as `Ctrl` on Windows and Linux, while its value remains unchanged for binding.

Set `combineShortcutDisplay: true` on a command to render the complete shortcut in one chip instead. This affects only the visible hint, so it is safe to use with `$mod` and other cross-platform bindings:

```js
const _command = {
  id: 'toggle-navigation',
  title: 'Toggle navigation',
  shortcut: '$mod+KeyB',
  combineShortcutDisplay: true,
}
```

### Single-character shortcuts

A single-character shortcut is written as the character itself, and fires whenever the user produces that character — regardless of the keys the layout requires:

```js
'/' // opens on `/`, the convention in GitHub, GitLab and Linear
```

You do not add a modifier for this. On many non-US layouts `/` is a shifted key (`Shift+7` on German and Nordic, `Shift+:` on French AZERTY), so the Command Menu matches the shortcut with Shift held or not. It still matches on the produced character, so `Shift+/` on a US layout — which yields `?`, a different character — does not trigger a `/` shortcut. As with any printable-character shortcut, set [`ignoreWhileTyping`](#shortcuts-while-typing) so it doesn't fire while the user is typing in a field.

The Command Menu itself can be opened using `⌘+k` (or `Ctrl+k` on Windows) and closed by hitting `Esc`. These are both non-configurable shortcuts in order to unify the experience across our platforms.

---

## Choosing shortcuts

When choosing shortcuts, it is very important that they do not clash with native operating system or browser shortcuts.

For example, you *should not* define a shortcut like `$mod+KeyC`, since this will clash with the native “Copy” shortcut, and will be triggered every time a user copies text in the app. Nor should you use shortcuts like `Shift+KeyA` since this will get triggered whenever a user types an uppercase “A” character. Therefore, special care and attention must be given to *each and every* shortcut choice.

In general, we recommend using the `Alt` modifier, since this is less likely to clash with existing shortcuts. However, be aware, the `Alt` key is also used for accented characters e.g. `Alt+KeyA` produces the letter “å”. Again, it is crucial that you choose shortcuts carefully.

### Browser-reserved shortcuts

Some key combinations are reserved by the browser or operating system and are unsafe to use as a command `shortcut`. By default a command's `handler` runs but the browser's own action runs too, so a reserved combo (for example `Alt+KeyD`) will still focus the address bar. Avoid the following:

| Combination                      | Reserved for                       | Reclaimable?                     |
| -------------------------------- | ---------------------------------- | -------------------------------- |
| `Alt+KeyD`                       | Focus the browser address bar      | Yes, with `forceShortcut`        |
| `$mod+KeyL` (`Ctrl+L` / `Cmd+L`) | Focus the browser address bar      | Yes, with `forceShortcut`        |
| `Alt+Home`                       | Navigate to the browser home page  | No — intercepted before the page |
| `Alt+F4`                         | Close the current window (Windows) | No — handled by the OS           |

If you knowingly want a command to take over a reclaimable reserved combo, set `forceShortcut: true` on that command — the Command Menu then calls `event.preventDefault()` so the browser default does not run:

```js
({
  id: 'dashboard',
  title: 'Go to dashboard',
  shortcut: 'Alt+KeyD',
  forceShortcut: true, // opt in to reclaim Alt+D from the browser
  handler: () => {
    // navigate to the dashboard
  },
})
```

This is opt-in so command shortcuts never silently override browser or OS keys. Even so, reusing a reserved combo will surprise users who expect the address bar, so prefer a different combination where you can. `Alt+Home` and `Alt+F4` are intercepted before the page receives the event and cannot be reclaimed even with `forceShortcut`.

You should strive to choose shortcuts that are intuitive and easy to remember. The more complex a shortcut, the less likely a user is to remember it. Of course, a user can still find a command by searching the command menu, and for some users this may be their preferred way of triggering commands.

### Shortcuts while typing

By default, a command's `shortcut` fires even while the user is typing in a form field. Because `Alt` combos also produce characters (`Alt+KeyL` → `¬`, `Alt+KeyS` → `ß` on some layouts), a shortcut can hijack the keystroke instead of letting the character type.

Set `ignoreWhileTyping: true` on a command to skip its shortcut while an editable element is focused — native `input`, `textarea`, `select`, `contenteditable`, and Nord form controls such as `nord-input`:

```js
({
  id: 'toggle-nav',
  title: 'Toggle navigation',
  shortcut: 'Alt+KeyL',
  ignoreWhileTyping: true, // don't fire while the user is typing in a field
  handler: () => {
    // toggle the navigation
  },
})
```

This is per command, so you can guard the shortcuts that clash with typing while leaving others (e.g. a global "go home") firing from anywhere. The global open shortcut (`⌘/Ctrl+K`) and the in-menu navigation keys (`Enter`, arrows, `Home`/`End`, `Backspace`, `Esc`) always keep working while typing. This option is off by default for backwards compatibility.

---

## Common keybindings

Keybindings will be matched against [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key){rel="[\"nofollow\"]"} and [`KeyboardEvent.code`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values){rel="[\"nofollow\"]"} which may have some names you don’t expect. Please note that we recommend always using `KeyboardEvent.code` for defining the keys and only using `KeyboardEvent.key` for defining modifiers.

| Windows       | macOS           | key           | code                           |
| ------------- | --------------- | ------------- | ------------------------------ |
| N/A           | `Command` / `⌘` | `Meta`        | `MetaLeft` / `MetaRight`       |
| `Alt`         | `Option` / `⌥`  | `Alt`         | `AltLeft` / `AltRight`         |
| `Control`     | `Control` / `^` | `Control`     | `ControlLeft` / `ControlRight` |
| `Shift`       | `Shift`         | `Shift`       | `ShiftLeft` / `ShiftRight`     |
| `Space`       | `Space`         | N/A           | `Space`                        |
| `Enter`       | `Return`        | `Enter`       | `Enter`                        |
| `Esc`         | `Esc`           | `Escape`      | `Escape`                       |
| `1`, `2`, etc | `1`, `2`, etc   | `1`, `2`, etc | `Digit1`, `Digit2`, etc        |
| `a`, `b`, etc | `a`, `b`, etc   | `a`, `b`, etc | `KeyA`, `KeyB`, etc            |
| `-`           | `-`             | `-`           | `Minus`                        |
| `=`           | `=`             | `=`           | `Equal`                        |
| `+`           | `+`             | `+`           | `Equal`*                       |

In addition to the above table, you can use [https://keycode.info/](https://keycode.info/){rel="[\"nofollow\"]"} for checking the specific values needed. Note that some keys will have the same code as others because they appear on the same key on the keyboard. Keep in mind how this is affected by international keyboards which may have different layouts.

---

## Navigating with the command menu

1. Use `Ctrl+K` (Windows/Linux) or `Cmd+K` (Mac) to open the command menu.
2. Start typing the command you want to execute. The suggestions in the command menu change to match your text.
3. Finish entering the name, or use the arrow keys to highlight the command you want from the list of suggestions.
4. Use `Enter` to execute the chosen command.
5. If you chose a command that has nested commands, you can use `Backspace` to return to the previous menu.
6. When the command menu is active, you can use one of the following keyboard shortcuts to close it: `Esc`, `Ctrl+K` (Windows and Linux) or `Cmd+K` (Mac).

<style>

html pre.shiki code .sJ8bj, html code.shiki .sJ8bj{--shiki-default:#6A737D;--shiki-dark:#6A737D}html pre.shiki code .sZZnC, html code.shiki .sZZnC{--shiki-default:#032F62;--shiki-dark:#9ECBFF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html pre.shiki code .szBVR, html code.shiki .szBVR{--shiki-default:#D73A49;--shiki-dark:#F97583}html pre.shiki code .sj4cs, html code.shiki .sj4cs{--shiki-default:#005CC5;--shiki-dark:#79B8FF}html pre.shiki code .sVt8B, html code.shiki .sVt8B{--shiki-default:#24292E;--shiki-dark:#E1E4E8}html pre.shiki code .sScJk, html code.shiki .sScJk{--shiki-default:#6F42C1;--shiki-dark:#B392F0}

</style>

## Examples

### Basic

```html
<nord-command-menu id="cm-basic" open .commands=${commands}></nord-command-menu>

    <nord-button id="cm-basic-trigger" variant="primary">${triggerLabel}</nord-button>
```

### Exit Nested On Search

```html
<nord-command-menu id="cm-exit-nested" open exit-nested-on-search .commands=${commands}></nord-command-menu>

    <nord-button id="cm-exit-nested-trigger" variant="primary">${triggerLabel}</nord-button>
```

### External Filtering

```html
<nord-command-menu
      id="cm-external-filtering"
      open
      external-filtering
      .commands=${commands}
    ></nord-command-menu>

    <nord-button id="cm-external-filtering-trigger" variant="primary">${triggerLabel}</nord-button>
```

### No Sections

```html
<nord-command-menu id="cm-no-sections" open .commands=${commandsNoSections}></nord-command-menu>

    <nord-button id="cm-no-sections-trigger" variant="primary">${triggerLabel}</nord-button>
```

### Preventing Open

```html
<nord-command-menu id="cm-preventing-open" .commands=${commandsPreventingOpen}></nord-command-menu>

    <nord-stack direction="horizontal">
      <nord-button id="cm-preventing-open-trigger" variant="primary">Open command menu</nord-button>
      <nord-checkbox label="Allow open?" checked></nord-checkbox>
    </nord-stack>
```

### Section With Children

```html
<nord-command-menu id="cm-section-children" open .commands=${commandsSectionWithChildren}></nord-command-menu>

    <nord-button id="cm-section-children-trigger" variant="primary">${triggerLabel}</nord-button>
```

### Without Custom Icons

```html
<nord-command-menu id="cm-without-icons" open .commands=${commandsWithoutIcons}></nord-command-menu>

    <nord-button id="cm-without-icons-trigger" variant="primary">${triggerLabel}</nord-button>
```

## API Reference

### Properties

- **open** (`boolean`, default: `false`) — Show or hide the command menu.
- **external-filtering** (`boolean`, default: `false`) — Use external filtering mode. When set to true, the component will not perform
internal text-based filtering and expects external filtering logic to be implemented.
- **exit-nested-on-search** (`boolean`, default: `false`) — When enabled, typing in the search input will automatically exit nested views
to allow global search across all commands.

### Events

- **open** (`NordEvent`) — The command menu was opened.
- **close** (`NordEvent`) — The command menu was closed.
- **input** (`NordEvent`) — Fired as the user types into the search input.
- **nord-select** (`SelectEvent`) — User selected a command from the menu.

### Slots

- **footer** — Used to replace the default footer contents.

### Methods

- **show** — `show(options: { parent?: string }, options.parent: unknown) => void` — Show the command menu programmatically.
- **close** — `close() => void` — Close the command menu programmatically.
- **focus** — `focus() => void` — Focus the command menu's input.

### CSS Custom Properties

- `--n-command-menu-inline-size` (default: `640px`) — Controls the max inline size, or width, of the command menu.
- `--n-command-menu-block-size` (default: `290px`) — Controls the max block size, or height, of the command menu.
- `--n-command-menu-block-start` (default: `16%`) — Controls the command menu offset from the block start, or top, of the screen.

### Dependencies

- `icon`
- `visually-hidden`

<!--
Source: https://nordhealth.design/raw/components/command-menu.md
-->
