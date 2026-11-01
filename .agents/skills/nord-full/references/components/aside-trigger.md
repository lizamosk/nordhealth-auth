# nord-aside-trigger

> Rail button that toggles a <code>&lt;nord-aside-drawer&gt;</code> inside <code>&lt;nord-aside&gt;</code>,
> or navigates like a link when <code>href</code> is set.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use inside `<nord-aside slot="rail">` to toggle a specific `<nord-aside-drawer>`.
- Set `drawer` to the target drawer’s `id` and `label` for the accessible name.
- Use `href` for rail items that navigate to a page instead of opening a drawer. The trigger renders a real anchor, so middle-click, cmd/ctrl-click and right-click work as expected. `target` and `rel` are forwarded to the anchor.
- Use the `icon` attribute for the common case; place a `<nord-icon>` (or other element) in the default slot when you need full control.
- Use the `badge` attribute to surface a count or status indicator.

> **Don't:** - Don’t set both `drawer` and `href` — they are mutually exclusive. When both are set, `href` wins and the trigger acts as a link.
- Don’t set `drawer` to a missing or disabled drawer `id`. The trigger will warn and behave as inert.
- Don’t omit `label` — the rail button has no visible text, so the accessible name comes from this attribute.

---

## Additional considerations

- `disabled` on the trigger takes precedence over the target drawer’s `disabled` state.
- The `active` state mirrors the ancestor `<nord-aside>`’s `active-drawer` and is exposed for styling via `[active]`.
- In link mode (`href` set) the trigger has no expand/collapse semantics: `aria-expanded` and `aria-controls` are omitted, and badge, icon, label and tooltip work the same as in drawer mode.

## API Reference

### Properties

- **drawer** (`string`, default: `''`) — The id of the <code>&lt;nord-aside-drawer&gt;</code> this trigger toggles.
Mutually exclusive with <code>href</code> — when both are set, <code>href</code> wins and
the trigger acts as a link instead of a drawer toggle.
- **href** (`string | undefined`) — When provided, renders the trigger as a link that navigates to the
given URL instead of toggling a drawer. Mutually exclusive with
<code>drawer</code>. Mirrors <code>nord-button</code>'s link mode, so middle-click,
cmd/ctrl-click and right-click behave like a real anchor.
- **target** (`'_self' | '_blank' | '_parent' | '_top' | undefined`) — When provided together with a href property, determines where to open
the linked URL. Forwarded to the underlying anchor.
- **rel** (`string | undefined`) — When provided together with a href property, sets the relationship
between the linked URL and the current document, e.g. “noopener
noreferrer” when linking to untrusted content in a new tab.
- **icon** (`string | undefined`) — Nord icon name. Shortcut for the common case; equivalent to placing
<code>&lt;nord-icon name="…"&gt;</code> in the default slot.
- **label** (`string`, default: `''`) — Accessible label (used for <code>aria-label</code> on the host).
- **badge** (`string | number | undefined`) — Optional badge content (forwarded to inner <code>&lt;nord-badge&gt;</code>).
- **disabled** (`boolean`, default: `false`) — Makes the trigger disabled. Takes precedence over the target
drawer's <code>disabled</code> state.
- **tooltip** (`boolean`, default: `true`) — Whether to render a <code>&lt;nord-tooltip&gt;</code> showing <code>label</code> on hover/focus.
Defaults to <code>true</code> — set <code>tooltip="false"</code> (or omit <code>label</code>) to opt out.

### Slots

- **(default)** — Overrides the <code>icon</code> attribute for custom leading content.
- **tooltip** — Overrides the tooltip body (falls back to <code>label</code>). Lets consumers add icons, shortcut hints, etc. — anything beyond the plain string label.

### Dependencies

- `button`
- `icon`
- `tooltip`

<!--
Source: https://nordhealth.design/raw/components/aside-trigger.md
-->
