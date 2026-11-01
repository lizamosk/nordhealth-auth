# nord-aside-drawer

> A drawer panel inside <code>&lt;nord-aside&gt;</code>.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Place inside `<nord-aside>`’s default slot, one per surface the user can toggle.
- Give each drawer a unique `id` — `<nord-aside>`’s `active-drawer` attribute matches against it.
- Put arbitrary content in the default slot: a `<nord-drawer>`, a custom component, plain markup, an `<iframe>` you instantiate yourself.
- Use `default-width`, `min-width`, and `max-width` to define the resize range; the component persists the user’s chosen width per drawer `id`.

> **Don't:** - Don’t use outside of `<nord-aside>` — the parent owns open/closed state.
- Don’t manage the panel’s visibility yourself. The drawer is always mounted and toggled via the ancestor’s `active-drawer`.
- Don’t share an `id` between drawers — width persistence and trigger wiring both key off it.

---

## Additional considerations

- Always mounted. Shown when the ancestor `<nord-aside>`’s `active-drawer` matches this drawer’s `id`, otherwise hidden via the native `[hidden]` attribute.
- The component sizes the panel and owns its open/closed state; the consumer owns the contents.
- Emits `width-change` with `{ width, source }` where `source` is `'drag' | 'keyboard' | 'attribute' | 'storage'`.
- Width is persisted in `localStorage` under the drawer’s `id`. If `default-width` changes between sessions, the persisted value is re-seeded to the new default.

## API Reference

### Properties

- **default-width** (`number`, default: `420`) — Initial width in px. The persisted value overrides this on load; if
<code>default-width</code> changes between sessions, the persisted value is
re-seeded to the new default.
- **min-width** (`number`, default: `280`) — Resize clamp lower bound in px.
- **max-width** (`number`) — Resize clamp upper bound in px. Defaults to <code>Number.MAX_SAFE_INTEGER</code>
so an unset <code>max-width</code> doesn't constrain the drawer — the consumer's
layout (or the rail / nav anchoring) determines the practical ceiling.
Set an explicit value to clamp.

Not reflected: an unset cap is the <code>Number.MAX_SAFE_INTEGER</code> sentinel,
which must never render into the DOM as <code>max-width="9007199254740991"</code>.
- **max-fullscreen-width** (`number`) — Maximum inline-size in px the drawer can reach when <code>[fullscreen]</code>
is active. Independent of <code>max-width</code> (which only caps the docked
drag / keyboard resize) — fullscreen typically wants to grow
larger than the docked maximum. Defaults to <code>Number.MAX_SAFE_INTEGER</code>
so an unset value lets fullscreen fill all available room (bounded
by the layout's left-cap rule in <code>&lt;nord-aside&gt;</code>).

Not reflected: an unset cap is the <code>Number.MAX_SAFE_INTEGER</code> sentinel,
which must never render into the DOM.
- **disabled** (`boolean`, default: `false`) — When set, the drawer cannot be opened. Programmatic opens are silently
ignored; if the drawer is already open and this flips on, the drawer
stays open until closed normally.
- **fullscreen** (`boolean`, default: `false`) — Reflected. Phase 3 wires the overlay sizing internally.
- **floating** (`boolean`, default: `false`) — Set by the parent <code>&lt;nord-aside&gt;</code> when the drawer renders as a narrow
floating overlay (rather than a docked region). When <code>true</code> the host
becomes an accessible modal dialog (<code>role="dialog"</code> + <code>aria-modal</code>);
when <code>false</code> the host is a <code>role="region"</code> landmark. Drive this only
through the parent — it owns the floating-vs-docked decision.

### Events

- **width-change** (`AsideDrawerWidthChangeEvent`) — Dispatched when the drawer's width changes. The event exposes <code>width</code> (the new applied inline-size in px) and <code>source</code> (<code>'drag' | 'keyboard' | 'attribute' | 'storage'</code>).

### Slots

- **(default)** — Default slot. Place arbitrary drawer content here.

<!--
Source: https://nordhealth.design/raw/components/aside-drawer.md
-->
