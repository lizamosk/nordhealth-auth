# Web Components Changelog

> Release notes and package changes for Nord Design System.

*Nord Design System’s parts are versioned and released using Node Package Manager. NPM’s [organization page](https://www.npmjs.com/org/nordhealth) lists all packages available and their most recent versions.*

## Web Components

### 5.4.4

- Picks up [Nordicons](/icons/) 3.21.0, which adds `text-color`, `text-highlight` and `text-horizontal-line`. No component changed in this release. The version moves because the icon dependency did, so the three new names are available to [Icon](/components/icon/) and to anything that registers icons from the package. (#734)
- Release date 15.10.2026.

### 5.4.3

- Fixes the [Calendar](/components/calendar/) `week-numbers` column reporting the wrong week when `first-day-of-week` is anything other than Monday. The number was taken from the fourth day of each displayed row, which is the Thursday only for a Monday-started week, so a Sunday-started calendar produced a numbering of its own that agreed with nothing else on screen — off by one every week of the year. The number now comes from the Thursday inside the row, so `first-day-of-week` moves where a row starts and ends but not the number it carries: a Sunday-started row spanning 30 August to 5 September 2026 reads week 36, the same as a Monday-started calendar gives those days. **If you use `week-numbers` with `first-day-of-week` set to anything but Monday, your numbers change with this release** — they now match ISO-8601 and any other calendar on the page. Monday-started calendars are unaffected. [Date Picker](/components/date-picker/) and [Date Range Picker](/components/date-range-picker/) inherit the fix. (#730)
- Release date 21.9.2026.

### 5.4.2

- Picks up [Nordicons](/icons/) 3.20.0, which adds `interface-add-day`, `interface-calendar-add` and `interface-calendar-extend`. No component changed in this release — the version moves because the icon dependency did, so the three new names are available to [Icon](/components/icon/) and to anything that registers icons from the package. (#728)
- Release date 18.9.2026.

### 5.4.1

- Insets the [Calendar](/components/calendar/) week-number column from the calendar's edge. The column shipped in 5.4.0 with spacing on one side only, so the numbers sat flush against the calendar's inline padding while keeping their gap to the first weekday column. Both sides now use the same spacing. This widens a calendar with `week-numbers` set by 8px — and the two-month [Date Range Picker](/components/date-range-picker/) popout by 16px — so if you have pinned a width around the week column, check it. Calendars without `week-numbers` are unchanged. (#726)
- Release date 18.9.2026.

### 5.4.0

- [Calendar](/components/calendar/) gains an optional `week-numbers` attribute that adds a leading column of week numbers, headed `#`. Numbering follows ISO-8601 — week 1 is the week containing the year's first Thursday — so a week can carry a number belonging to the neighbouring year: the week of 29 December 2025 is week 1. The numbered weeks are the weeks the grid shows, so `first-day-of-week` moves their boundaries, and a calendar started on Sunday numbers Sunday-to-Saturday weeks. This is the European reading of week numbers; the US convention, where week 1 is the week containing 1 January, is not selectable. (#723)
- [Date Picker](/components/date-picker/) and [Date Range Picker](/components/date-range-picker/) take the same `week-numbers` attribute and forward it to their calendar, so a reporting period can be read as "weeks 38 to 40". In the range picker both visible months are numbered, and the column adds roughly one day cell of width per month — about 47px on the two-month popout, which still collapses to a single month at the same width as before. (#723)
- The week numbers render as table row headers under a column labelled "Week" for assistive technology (translated in Finnish), so a screen reader announces "Week 38" for the row rather than a stray digit, and the accessible labels on the day buttons are unchanged. Size them with the new `--n-calendar-week-number-font-size` Custom Property. The column is off by default, so a calendar, date picker or date range picker that does not set the attribute renders exactly as before. (#723)
- **Removes the seven draft Filter components** — `nord-filter-add-button`, `nord-filter-date`, `nord-filter-date-range`, `nord-filter-dropdown`, `nord-filter-field`, `nord-filter-input` and `nord-filter-reset-button` — along with their events, localization entries, Custom Properties and documentation. All seven carried draft status and logged the draft warning in production. **If your application uses any of them, stay on 5.3.0**: this release provides no migration path. Filtering surfaces can be composed from the primitives that remain — [Input](/components/input/), [Button](/components/button/), [Button Group](/components/button-group/), [Dropdown](/components/dropdown/), [Date Picker](/components/date-picker/) and [Date Range Picker](/components/date-range-picker/).
- Release date 18.9.2026.

### 5.3.0

- Takes [Kbd](/components/kbd/), [Kbd Group](/components/kbd-group/) and [Scroll Area](/components/scroll-area/) out of draft and marks them ready for production usage. All three are already running in production, but they still carried draft status, so every page that rendered one logged `NORD: <element> should not be used in production, as it is in draft status.` — including in consumer test output, where the warning fires because `NODE_ENV` is not `development`. `nord-kbd`, `nord-kbd-group` and `nord-scroll-area` no longer warn. No markup, property or styling change is needed on your side. (#719)
- Release date 13.8.2026.

### 5.2.4

- Adds `@nordhealth/components/lib/utilities.js`, a side-effect-free entry point for consumers that must not register custom elements — an embedded widget, a micro-frontend, anything sharing a page with another Nord copy. Importing the package root registers every element through an unguarded `customElements.define`, which throws when the host page already registered Nord, and pulls the whole library into the static graph. `utilities.js` exports the overlay-dismiss event and the translation helpers, reaches 33 modules against the root's 259, and registers nothing. Every symbol it exports is already public through the root, so this is a repackaging rather than a new surface. (#717)
- Publishes `DismissOverlaysEvent` and `DISMISS_OVERLAYS_EVENT` as a standalone entry at `@nordhealth/components/lib/DismissOverlaysEvent.js`, so an application can dispatch the overlay-dismiss event without importing the package root. Importing the root registers every element as a side effect, which throws when the host page already registered Nord; a bundler that aliases the root away for that reason could not reach the event 5.2.0 added for exactly this purpose. The new entry has no imports and no side effects, and adds no weight — the root now imports the same chunk. (#717)
- Ships a TypeScript declaration beside every entry chunk, so a deep entry import resolves types. Entry chunks flatten to `lib/<name>.js` while declarations mirror to `lib/src/<path>.d.ts`, so imports such as `@nordhealth/components/lib/SelectEvent.js` or `@nordhealth/components/lib/translation.js` previously failed with `TS2307` or `TS7016` and were usable only from JavaScript. All 209 entries now type-check, including `lib/index.js`. Runtime output is byte-for-byte unchanged. (#717)
- Release date 7.8.2026.

### 5.2.3

- **Removes the alpha Chart, Chat, Data Table and Rich Text Editor component families** added in 5.1.0, and the draft Filter Bar layout wrapper. Every `nord-chart*`, `nord-chat*`, `nord-data-table*`, `nord-rich-text-editor*` and `nord-filter-bar` element is gone, along with its exported types, events, localization entries and documentation. These families were published as alpha/draft and flagged as subject to change. **If your application uses any of them, stay on 5.2.2** — this release provides no migration path. (#715)
- The filter primitives are unaffected: [Filter Input](/components/filter-input/), [Filter Field](/components/filter-field/), [Filter Dropdown](/components/filter-dropdown/), [Filter Date](/components/filter-date/), [Filter Date Range](/components/filter-date-range/), [Filter Add Button](/components/filter-add-button/) and [Filter Reset Button](/components/filter-reset-button/) all remain. The removed Filter Bar was only a layout wrapper — compose the primitives in your own flex container instead. (#715)
- Drops the dependencies those families pulled in: Unovis (Chart), TipTap with ProseMirror (Rich Text Editor) and TanStack Table (Data Table). TanStack Table types are no longer re-exported from `@nordhealth/components`, and the standalone `RichTextEditor.bundle.js` bundle and `lib/data-table.css` stylesheet are no longer published. The main bundle drops from 1.3 MB to 778 kB (139 kB Brotli). (#715)
- Release date 5.8.2026.

### 5.2.2

- Makes the standalone Rich Text Editor bundle compatible with legacy JavaScript minifiers used by downstream build pipelines. The bundle remains minified while preserving bindings that older Terser versions could otherwise reject as redeclarations. (#713)
- Release date 31.7.2026.

### 5.2.1

- The [Command Menu](/components/command-menu/) component now renders each key of a keyboard `shortcut` in its own chip. A key sequence such as `g d` (press `g`, then `d`) previously rendered as a single chip; each key now appears in its own chip, matching how combos like `Ctrl+K` are already shown. (#710)
- Release date 30.7.2026.

### 5.2.0

- Open overlays that occupy the browser top layer — [Popout](/components/popout/), [Dropdown](/components/dropdown/), [Combobox](/components/combobox/), [Autocomplete](/components/autocomplete/) and [Tooltip](/components/tooltip/) — now dismiss automatically when a [Modal](/components/modal/) opens, so the modal is the topmost surface. Previously an open popout stayed painted above the modal (the top layer sits above any `z-index`) and was never dismissed when the modal opened by keyboard or programmatically. This is driven by a new public, document-level `nord-dismiss-overlays` event, exported as `DismissOverlaysEvent`, which `nord-modal` dispatches before it becomes visible; applications can dispatch the same event before opening their own overlays. **Behaviour change:** an open popout now closes when a modal opens. (#706)
- Pressing `Escape` while overlays are stacked — for example a [Popout](/components/popout/) opened inside another popout — now dismisses only the topmost overlay; a second press closes the next one down, instead of collapsing the whole stack at once. (#706)
- The [Popout](/components/popout/) component's sheet mode (small viewports) now stays above the mobile on-screen keyboard. Sheet content — such as a filtering [Dropdown](/components/dropdown/) — was previously placed behind the keyboard because `position: fixed` and viewport units reference the layout viewport, which does not shrink when the keyboard opens; the sheet now tracks the visual viewport, offsets above the keyboard, and caps its height to the visible area so options stay reachable. (#705)
- Fixes the [Radio](/components/radio/) component not repainting the newly-checked control on macOS Safari when moving selection with the up/down arrow keys; the checked radio is now reflowed so its dot renders. (#704)
- Release date 30.7.2026.

### 5.1.0

- Adds nine **alpha** component families built for the Light DOM and composition-first APIs: Chart, Chat, Data Table, Data Table Filter Bar, [Input Group](/components/input-group/), [Overflow List](/components/overflow-list/), [Resizable](/components/resizable/), Rich Text Editor, and [Timestamp](/components/timestamp/). Alpha APIs may change between releases; use them where early adoption and feedback are appropriate.
- Adds Chart primitives for declarative cartesian and circular visualizations, Chat primitives for messages and composers, and a headless Data Table and Filter Bar with sorting, filtering, selection, virtualization, column sizing, and pinning.
- Adds Rich Text Editor composition primitives and TipTap-backed commands, along with Input Group, Overflow List, Resizable, and Timestamp patterns for common application surfaces.
- Updates the shared Light DOM stylesheet infrastructure so existing Light DOM components retain their legacy styles while newly registered component styles are safely scoped.
- The [Command Menu](/components/command-menu/) component now fires a single-character `shortcut` (for example `/`) regardless of whether Shift is held, so it works on keyboard layouts where that character is a shifted key (for example German, Nordic, Spanish, and French AZERTY). Previously a bare single-character shortcut was rejected while Shift was held and silently did nothing on those layouts. Matching stays on the produced character, so a genuinely different combination such as `Shift+/` (which yields `?` on a US layout) is unaffected. (#703)
- Release date 29.7.2026.

### 5.0.4

- The [Textarea](/components/textarea/) component gains a `rows` property (default `3`) that mirrors the native `<textarea>` `rows` attribute and sets the control's minimum height. With `resize="auto"`, `rows` is the starting height the textarea grows from — for example `rows="1"` for a single-row composer that expands as the user types. The `--n-textarea-block-size` Custom Property now raises the minimum above the row-derived height (the effective minimum is the larger of the two) and defaults to `auto`. At the default `size`, the 3-row height matches the previous fixed default so default textareas are unchanged; `size="s"` / `size="l"` textareas now scale their minimum height with the size, and any `rows` attribute already set on the element (previously inert) now takes effect. (#694)

### 5.0.3

- The [Command Menu](/components/command-menu/) component gains an opt-in `ignoreWhileTyping` flag on a command (`ICommandMenuAction`). When `true`, that command's keyboard `shortcut` is skipped while an editable element is focused — a native `input` / `textarea` / `contenteditable`, or a Nord form control such as [Input](/components/input/), [Textarea](/components/textarea/), or [Select](/components/select/) matched via its inner field — so a combination like `Alt+L` types its character instead of firing the command. It is off by default, so existing shortcuts keep firing while typing. The global open shortcut (`⌘`/`Ctrl`+`K`) and in-menu navigation keys are unaffected. (#690)
- Improves the [Layout](/components/layout/) component's `sync-nav-state` cross-tab syncing so background tabs no longer re-render on every broadcast. Nav-state messages received while a tab is hidden are buffered and coalesced, then applied once when the tab becomes visible; a value-based equality guard skips applying (and re-broadcasting) a state the tab already holds. This removes redundant main-thread layout work — improving interaction latency (INP) on machines running many tabs — while keeping nav open state and width in sync exactly as before. Sending is unchanged. (#689)
- Release date 13.7.2026.

### 5.0.2

- The [Aside Trigger](/components/aside-trigger/) component can now act as a navigation link: set `href` (with optional `target` / `rel`) and the inner button renders a real `<a>`, so middle-click, cmd/ctrl-click, right-click "copy link", and the browser's hover URL preview all work natively. `href` and `drawer` are mutually exclusive — `href` wins, the drawer click handler is skipped, and `aria-controls` / `aria-expanded` are omitted since a link has no expand/collapse semantics; removing `href` restores drawer semantics. (#682)
- The [Button](/components/button/) component gains a `rel` property, forwarded to its anchor in link mode (e.g. `rel="noopener noreferrer"` alongside `target="_blank"`). (#682)
- The [Nav Item](/components/nav-item/) and [Navigation](/components/navigation/) components gain public methods to close rail-mode flyouts: `NavItem.closeFlyout()` closes a single item's flyout and `Navigation.closeAllFlyouts()` sweeps every open one, so consumers no longer reach into the shadow root to call `hide()` on the internal popout. A new opt-in `auto-dismiss-on-select` attribute (on either element, off by default) closes the flyout when a leaf descendant activates; existing flyout behaviour — outside-click dismissal, hover, keyboard, click-to-toggle — is unchanged. (#684)
- Fixes the [Aside](/components/aside/) drawer flashing at its full-screen size for a frame or two when toggling `fullscreen`. The pre-toggle inline sizes are now pinned across the gap between the synchronous attribute flip and the deferred width animation, and stale animation state after a mid-flight reversal or a disconnect during the toggle is cleared. (#683)
- **Breaking change — check your custom padding overrides.** A few components ([Button](/components/button/), [Header](/components/header/), Segmented Control, and the text inputs) let you fine-tune inner spacing through private CSS variables. If you ever gave one of them **two values at once** (e.g. `--_n-input-padding-block: 4px 12px`), the old code pasted both numbers into a single `padding` line, so the second value quietly landed on the wrong side (left/right instead of top/bottom). That's now fixed — each variable feeds its matching longhand, so `-block` always means top-and-bottom and `-inline` always means left-and-right. If your styles leaned on the old behaviour, your spacing will shift after upgrading. **One value = nothing changes; two values = go double-check it.** The variables to search for: `--_n-button-padding-block`, `--_n-button-padding-inline`, `--_n-input-padding-block`, `--_n-input-padding-inline`, `--_n-header-padding-block`, `--_n-header-padding-inline`, and `--_n-segmented-control-item-padding-inline` — plus the public `--n-button-padding-inline` and `--n-header-padding-inline` that feed them. (#680)
- Release date 9.7.2026.

### 5.0.1

- The [Nav Item](/components/nav-item/) component gains `side-offset` and `align-offset` properties, mirroring the [Tooltip](/components/tooltip/) props of the same names and forwarded to the internal rail-mode tooltip. This lets rail-item tooltips line up with neighbouring standalone tooltips without reaching into the shadow root. When unset, the tooltip's own defaults (`8` / `0`) apply. (#678)
- Fixes the [Item](/components/item/) component removing keyboard focus outlines from every anchor in the consuming document. Its injected Light DOM stylesheet contained an unscoped `a:focus-visible { outline: none }` intended only for anchors that wrap an item row (which draw their own accent ring instead); the reset is now scoped to `a:has(> nord-item)`. Because the injected styles are unlayered, the leak also silently overrode any `:focus-visible` utilities consumers had added themselves. (#678)
- Fixes the [Nav Toggle](/components/nav-toggle/) component ignoring `--n-button-background-color` and `--n-button-color` set on the toggle element. The defaults were declared directly on the inner `<nord-button>`, where they beat any value inherited from outside; they now live on the host, so outside styles targeting the toggle win, while values a surrounding region sets for its buttons still lose to the defaults (keeping the toggle transparent on top bars and drawers). This also restores the [Layout](/components/layout/) component's top-bar focus background for the toggle, and the plain `color` knob keeps working unchanged. (#678)
- Fixes the [Nav Item](/components/nav-item/) component emitting `role="listitem"` without a `role="list"` ancestor, an `aria-required-parent` accessibility violation. The role is now emitted only when the item sits inside a [Nav Group](/components/nav-group/) (which exposes `role="list"` and signals it via context); standalone items — for example directly in [Navigation](/components/navigation/) or used as a [Dropdown](/components/dropdown/) toggle — omit it. (#676)
- The [Button](/components/button/) component now forwards `tabindex="-1"` from the host to its internal control, so decorative or `aria-hidden` buttons are removed from the tab order (`delegatesFocus` otherwise keeps the shadow button focusable, failing the `aria-hidden-focus` accessibility rule). Only `-1` is forwarded — zero and positive values are left to `delegatesFocus` as before. (#676)
- The [Layout](/components/layout/) component's nav resize handle now implements the full ARIA window splitter contract. The focusable `role="separator"` was missing its required value attributes (an `aria-required-attr` violation); it now exposes `aria-valuenow` (the current nav width in pixels), `aria-valuemin` / `aria-valuemax` mirroring the `min-nav-width` / `max-nav-width` props, a localized `aria-label` ("Resize navigation"), and `aria-controls` pointing at the nav container. While the nav is collapsed, `aria-valuetext` announces "Navigation collapsed". (#678)
- Release date 7.7.2026.

### 5.0.0

*Nord 5 is the largest release since the Design System's first major version. It introduces a new component paradigm — **Light DOM** rendering and **composition-first, compound-component APIs** — alongside a broad set of new components spanning forms, filters, disclosure, and data display. Existing component APIs are unchanged, so upgrading needs no code migration — but the refreshed navigation and surface colors shift existing UIs visually, so regenerate your visual-regression baselines.*

- **New component paradigm — Light DOM.** The new components render into the Light DOM instead of a Shadow DOM root, so their internal markup is regular DOM. Consumer CSS, `@nordhealth/css` utility classes, and global styles reach the internals directly — no `::part` or shadow-piercing needed. Each component injects its own stylesheet on connect, so it still styles correctly out of the box. Existing Shadow DOM components are unchanged. (#656)
- **New component paradigm — composition-first, compound components.** Rather than one monolithic element driven by many props and slots, the new components ship as a family of small, single-purpose parts you assemble to match the anatomy you need — for example the Item family (`Item`, `Item Media`, `Item Content`, `Item Title`, `Item Actions`…), the Field family, Pagination's primitives, and Combobox's `<nord-combobox-option>` / `<nord-combobox-group>`. A ready-made higher-level component is provided where a sensible default helps, so you can drop one element in or compose the parts by hand. (#656)
- Adds a large batch of new components, all built on a shared set of hook-less Lit controllers (`OpenStateController`, `FocusableWhenDisabledController`, `TransitionStatusController`, `CollapseController`, `RovingFocusController`, `ActiveDescendantController`) that mirror Base UI behaviour, so open/close, focus, disabled, and transition logic is implemented once and reused. (#656)
- Introduces the **Item** family — [Item](/components/item/), Item Group, Item Separator, Item Media, Item Content, Item Title, Item Description, Item Actions, Item Header, and Item Footer — a composable primitive set for building rich list rows and cards from a single piece of content such as a person, file, or setting. Wrap an Item in an `<a>` to make the whole row a link. (#656)
- Adds the [Accordion](/components/accordion/) component — a set of stacked, individually expandable sections with single- or multi-open behaviour (seeded via `value`), plus `justify-content` and `icon-gap` customization. (#656)
- Adds the [Collapsible](/components/collapsible/) component — a single show/hide region toggled by its trigger or the `open` property. (#656)
- Adds the [Kbd](/components/kbd/) component — renders a keyboard key or shortcut as a styled key cap, groupable via Kbd Group, with `variant`, `emphasize`, a size scale, and public color/border/shadow Custom Properties. (#656)
- Adds the [Meter](/components/meter/) component — a graphical display of a numeric value within a known range (disk usage, battery level, a score); unlike a progress bar it shows a static measurement rather than task completion. (#656)
- Adds the [Combobox](/components/combobox/) and [Autocomplete](/components/autocomplete/) components with Base UI single-select parity and virtualized lists. Both support declarative `<nord-combobox-option>` / `<nord-combobox-group>` children (self-registering via context) alongside the `.options` array API, auto-add **creatable** entries via a cancelable `create` event (opt-out), `start` / `end` slots for custom icons, and place the selected tick on the left to match the filter dropdown. (#656)
- Adds the [Number Field](/components/number-field/) and [OTP Field](/components/otp-field/) components. Number Field exposes `formatValue` / `parseValue` callbacks to override the default `Intl`-based mask, plus `start` / `end` slots with auto-positioned currency. (#656)
- Introduces the **Field** family — [Field](/components/field/), Fieldset, and Field Group — and a shared Field pattern that synchronises form-control sizing and focus across inputs. (#656)
- Form controls now work **both** standalone and inside a `<nord-field>`. The built-in field props (`label`, `hint`, `hint-below`, `hide-label`, `error`, `hide-required`) are **un-deprecated** and supported on every control; wrapping a control in `<nord-field>` makes the Field take over labelling via `@lit/context` and the control suppresses its built-in field UI. `required` stays owned by the control and is published up so `<nord-field-label>` renders the required indicator automatically. Applies across input, textarea, select, checkbox, radio, toggle, range, number-field, otp-field, date-picker, date-range-picker, time-picker, combobox, and autocomplete. (#656)
- Adds the [Date Range Picker](/components/date-range-picker/) component — a two-month range calendar with inline mode, a custom trigger slot, and the full preset catalogue grouped with dividers. It collapses to a single month based on the picker's own width (container-based, not the viewport), resolved synchronously on open; the collapsed-presets popout matches the trigger width; the built-in label click focuses the trigger rather than opening (Space/Enter opens); and it has proper read-only styling. Adds `isDateDisabled` and `isDateHighlighted` callbacks. (#656)
- Adds a joined-chip **Filter** family — filter bar, input, field, add, and reset primitives; a `nord-filter-dropdown` with built-in options; and a dedicated `filter-date-range`. Filter Input connects its label to the input (`<label for>` + `hide-label`) and adds `start` / `end` slots for custom icons (default search icon). (#656)
- Adds the [Pagination](/components/pagination/) component plus composition-first primitives, with a `loading` prop that dims and disables the control while results load. (#656)
- Adds `round-to-interval` (snaps a typed time to the nearest option) and `hour-format` (`12h` / `24h`) props to the [Time Picker](/components/time-picker/) component. (#656)
- Adds an `always-show-scrollbar` prop to the [Scroll Area](/components/scroll-area/) component. (#656)
- Renders the [Toast](/components/toast/) group in the browser's top layer, above modals. (#656)
- Adds an opt-in controlled mode to the [Popout](/components/popout/) component with a single deterministic open path. (#656)
- Fixes the [Tab Group](/components/tab-group/) component so the first tab is pre-selected when its `<nord-tab>` children are slotted asynchronously by a framework (Vue / React). Previously `selectedTab` could stay unset in that case, leaving no tab active. (#656)
- Refreshes the navigation and surface color system (NDS-180): [Nav Item](/components/nav-item/) keeps the selected background on a collapsed active parent and only defers to the expanded overlay when the parent is open (`aria-expanded="true"`), with text going strong on hover / active; [Aside Trigger](/components/aside-trigger/) matches by strengthening its label and icon color (`--n-color-text`) on hover and while its drawer is active; the [Layout](/components/layout/) component lifts the docked nav above the sticky footer on wide viewports so the resize divider isn't painted over; and the [Aside](/components/aside/) drawer's default shadow softens from `--n-box-shadow-nav` to `--n-box-shadow-card` so it no longer overlaps adjacent surfaces. (#670)
- Fixes the [Tooltip](/components/tooltip/) component flashing behind the layout nav rail during its ~0.2s fade-out. The tooltip now stays in the browser's top layer until the fade-out `transitionend` fires, instead of being demoted in the same tick the hide begins; re-showing mid-fade cancels the pending demotion. (#671)
- Fixes the [Layout](/components/layout/) component so a sticky footer with the nav open aligns its start edge to the live nav width (`var(--_n-layout-nav-width)`) instead of a hardcoded `250px`, keeping the footer flush with the nav when it is resized (220–400px), in rail mode (64px), or given a custom `default-nav-width`. (#673)
- Adds native range selection and multi-month display to the [Calendar](/components/calendar/) component. A new `range` prop switches it to range mode (`range-start` / `range-end` ISO properties for controlled selection), a completed range fires a `range-change` event (`DateRangeSelectEvent`), and in-range days plus a live hover preview are styled as you pick. A `months` prop renders that many consecutive month grids side by side so a span can cross months without paging. Also adds `isDateDisabled` and `isDateHighlighted` callbacks. The existing single-date `value` / `change` API is unchanged. (#656)
- Adds an `actions` slot to the [Banner](/components/banner/) component for trailing action buttons (a call to action and/or a dismiss button). (#656)
- Deprecates the [Fieldset](/components/fieldset/) component (`<nord-fieldset>`) in favour of the new composable Field family. It continues to work, but new code should group related controls with `<nord-field-set>` and the Field parts instead. (#656)
- Release date 2.7.2026.

### 4.26.2

- The [Tooltip](/components/tooltip/), [Popout](/components/popout/), and [Dropdown](/components/dropdown/) components gain `side-offset` / `align-offset` properties (px) that mirror the Radix UI positioning API. The values feed Floating UI's `offset` middleware, so the gap is collision-aware and stays correct after auto-flips. [Truncate](/components/truncate/) forwards both onto its portaled tooltip. `side-offset` defaults to `8` (Nord's established gap), so default rendering is unchanged. **Removes** the `--n-popout-offset-inline` / `--n-popout-offset-block` Custom Properties added in 4.25.0 — they applied a logical-axis nudge after positioning that ignored collision/flip and are superseded by the new props. (#665)
- The [Command Menu](/components/command-menu/) component gains an opt-in `forceShortcut` flag on a command (`ICommandMenuAction`). When `true`, the command calls `event.preventDefault()` so its `shortcut` can reclaim a browser-reserved combination (e.g. `Alt+D`, which normally focuses the address bar). It is off by default, so existing commands keep firing their handler while the browser retains its default action. Combinations the browser/OS intercepts before the page (e.g. `Alt+F4`, `Ctrl+W`) still can't be reclaimed. (#667)
- The [Textarea](/components/textarea/) component adds a public `--n-textarea-max-block-size` Custom Property (default `500px`) that caps growth in `resize="auto"` and `resize="vertical"` modes; `--n-textarea-block-size` is now the **minimum** height. In `resize="auto"`, content that reaches the cap now scrolls (`overflow: auto`) instead of being clipped, and the auto-resize calculation no longer clips the last line on `box-sizing: border-box` textareas. (#663)
- The [Button Group](/components/button-group/) component adds a `--n-button-group-gap` Custom Property to customize the gap between buttons in the spaced variant. (#662)
- The [Popout](/components/popout/) component exposes two public Custom Properties, `--n-popout-background` and `--n-popout-box-shadow`, for restyling its surface. Both fall back to the previous global tokens (`--n-color-surface`, `--n-box-shadow-popout`), so unstyled popouts, dropdowns, and tooltips render unchanged. This also fixes the rail-mode [Navigation](/components/navigation/) flyout rendering with a transparent background. (#664)
- The [Layout](/components/layout/) component, in `collapse-mode="hide"`, now sizes the hover/focus **peek flyout** to its content (`fit-content`) instead of the fixed `default-nav-width`, clamped by `min-nav-width` / `max-nav-width` and the viewport so it can't overflow. The docked opened nav, rail mode, and narrow/mobile viewports are unchanged. (#666)
- Fixes the [Layout](/components/layout/) component so a sticky footer no longer sits underneath the open navigation column on wide viewports; the sticky footer now offsets horizontally to keep its actions reachable. Non-sticky footers are unaffected. (#661)
- Release date 30.6.2026.

### 4.26.1

- `<nord-button>` now delegates focus to its internal control. The host element itself matches `:focus` and `:focus-visible`, so consumer styles such as `nord-button:focus-visible { ... }` apply correctly. As a side effect, the focus ring is now visible when a button receives focus programmatically (e.g. `autofocus` on a button inside a [Modal](/components/modal/)), where it previously was not rendered.
- Scopes the [Navigation](/components/navigation/) header/footer focus and hover ring to direct `<nord-button>` and `<nord-dropdown>` children, and switches the underlying selectors to `:focus-visible`. Wrapper elements such as a `<div slot="footer">` containing multiple buttons no longer match the slot's `::slotted` rules, so the accent border no longer cascades to every wrapped child when only one is hovered or focused. Consumers slotting a single focusable inside a wrapper element will lose the navigation-injected ring and fall back to the button's own `:focus-visible` / `:hover` styling.
- Release date 25.6.2026.

### 4.26.0

- Introduces the new [Aside](/components/aside/) component family (`<nord-aside>`, `<nord-aside-drawer>`, `<nord-aside-trigger>`) — a responsive, collapsible side-panel system that mounts in the [Layout](/components/layout/) component's `drawer` slot. `<nord-aside>` owns the rail, the active-drawer state, drag and keyboard resize, fullscreen sync, narrow-mode state, body-scroll lock, backdrop, and Esc handling.
- `<nord-aside-drawer>` is the state/identity wrapper for a single drawer panel (slot a `<nord-drawer>` or any content inside). Supports per-id width persistence via `localStorage`, `min-width` / `max-width`, an independent `max-fullscreen-width` cap, a WAAPI fullscreen toggle animation, and switches `role` between `region` (docked) and `dialog` + `aria-modal` (floating).
- `<nord-aside-trigger>` is the rail button that activates a drawer by id. Exposes `drawer`, `icon`, `label`, `badge` (forwarded to an inner [Badge](/components/badge/)), `disabled`, and `tooltip` (defaults `true`; renders a [Tooltip](/components/tooltip/) from `label`). Provides a default slot (custom leading content overriding `icon`) and a `tooltip` slot (overrides the tooltip body).
- Adds responsive rail behaviour: at wide viewports (≥768px) the rail is a right-side column (default 48px) with a docked drawer and a draggable resize handle; at narrow viewports (<768px) the *same* rail DOM repositions to a fixed bottom bar (when slotted with rail items) and the drawer becomes a slide-up floating overlay with a backdrop. No re-render or DOM mutation across the breakpoint — slotted triggers keep identity, focus, and ARIA. Independent of the left nav's `collapse-mode`.
- Reflects responsive state as `data-narrow-rail-bottom` / `data-narrow-floating-drawer` on both the aside and its parent layout for consumer CSS hooks.
- Extends the [Layout](/components/layout/) component with live `--n-layout-header-block-size` and `--n-layout-footer-block-size` CSS Custom Properties (published via `ResizeObserver`, distinct from the consumer setters `--n-layout-header-size` / `--n-layout-footer-size`). Adds a new cap/floor token API: `--n-layout-main-min-inline-size` (main-panel floor, `600px` at ≥1240px), `--n-layout-content-inline-end-offset`, `--n-layout-drawer-min-inline-size`, and narrow z-index tokens.
- Adds a `nav-rail-width` property and `collapse-mode="rail"` bottom-bar support to the [Layout](/components/layout/) component. Sticky footers now coexist with docked, fullscreen, and narrow drawers via z-index stacking and live footer-size reads.
- Implements two independent resize caps in the Aside drawer: the docked drag/keyboard path stops at `min(max-width, viewport − rail − nav.right − inlineEndOffset − mainMinFloor)`, reserving the main-panel floor; the fullscreen overlay sizes via CSS `min()` over two private vars (no JS clamp), reserving only the inline-end offset + border so its left edge clears the nav. `fullscreen` is a hard no-op at narrow viewports.
- Changes the default `padding` of the [Drawer](/components/drawer/) component from `m` to `l`, and expands the scale from `m | none` to `l | m | s | none`. This is a global default change — existing `<nord-drawer>` consumers receive more padding by default. Also documents a `--n-drawer-background-color` CSS Custom Property.
- **Breaking change** — on the [Drawer](/components/drawer/) component, `padding="none"` now also removes the horizontal padding of anything in its `header` slot. The slotted header's `--n-header-padding-inline` follows the drawer's padding, so `padding="none"` collapses it to `0`; previously the header kept its own default side padding (`var(--n-space-l)`) regardless of the drawer's `padding`. (The other non-default values behave the same way — `m` / `s` shrink the header's side padding to match — but `none` is the one that removes it entirely.) If you want a flush drawer body but a header that stays padded, set `--n-header-padding-inline` on the header yourself:```html
<!-- Before 4.26.0: the header kept its side padding automatically -->
<nord-drawer padding="none">
  <nord-header slot="header">Title</nord-header>
  …
</nord-drawer>

<!-- 4.26.0 and later: restore it explicitly -->
<nord-drawer padding="none">
  <nord-header slot="header" style="--n-header-padding-inline: var(--n-space-l)">Title</nord-header>
  …
</nord-drawer>
```
- Adds an `xs` size to the [Header](/components/header/) component (`size: 'm' | 's' | 'xs'`; 45px block-size, `xs` block padding). Additive — `m` and `s` are unchanged.
- Splits `--n-footer-padding-inline` on the [Footer](/components/footer/) component into `--n-footer-padding-inline-start` and `--n-footer-padding-inline-end` so the layout can pad footer content past the rail. The new tokens fall back to the existing value, so render is unchanged when unset.
- Promotes the transparent button background of the [Nav Toggle](/components/nav-toggle/) component from a layout-only top-bar override to the component default, so the toggle no longer paints a card over surfaces that supply their own background.
- Sets the default `nav-rail-width` on the [Layout](/components/layout/) component to `64`.
- Adds an iOS-safe, ref-counted body-scroll lock helper used by the narrow floating drawer.
- Fixes the React and Vue type generation pipeline so phantom/unnamed events emitted into the custom-elements manifest are dropped before reaching `build-react-types` / `build-vue-types`, preventing the wrapper builds from crashing.
- Adds accessibility tests and a `readme.md` to the [Truncate](/components/truncate/) component.
- Release date 25.6.2026.

### 4.25.2

- Fixes a cross-tab feedback loop in the [Layout](/components/layout/) component's `sync-nav-state` mode where two Safari tabs could ping-pong the sidebar open/closed indefinitely. Broadcasts are now emitted from user-action handlers (toggle click, host click, media query change, nav click, light dismiss) instead of the `navOpen` observer, so incoming messages can no longer re-broadcast. As a consequence, programmatic `layout.navOpen = X` assignments no longer broadcast across tabs — consistent with how `layout.navWidth` has behaved since 4.0. Consumers that need cross-tab sync from a programmatic toggle should dispatch a click on a `<nord-nav-toggle>` instead.
- Release date 18.6.2026.

### 4.25.1

- Introduces four CSS Custom Properties on the [Layout](/components/layout/) component for overriding the drawer (`aside`) shadow and inline-start border: `--n-layout-drawer-box-shadow` (default `var(--n-box-shadow-nav)`, all viewports), `--n-layout-drawer-box-shadow-wide` (default `var(--n-box-shadow-header)`, ≥1240px), `--n-layout-drawer-border-inline-start-width` (default `1px`, ≥1240px), and `--n-layout-drawer-border-inline-start-color` (default `var(--n-color-border)`, ≥1240px). Defaults match the previous hardcoded values exactly, so unstyled consumers are pixel-identical.
- Release date 17.6.2026.

### 4.25.0

- Introduces a new [Truncate](/components/truncate/) component (`<nord-truncate>`) for overflow-aware single-line and multi-line text. Binary-searches the longest prefix of the text that fits in its container, writes the truncated string + ellipsis directly into the DOM, and surfaces the full text via an auto-rendered [Tooltip](/components/tooltip/) on hover. Supports `position`, `delay`, and `line-clamp` attributes.
- Adds a `collapse-mode` attribute (`'hide' | 'rail'`, default `'hide'`) to the [Layout](/components/layout/) component. When set to `'rail'`, the closed sidebar collapses to a narrow 48px icon-only column on wide viewports instead of hiding off-screen. Narrow viewports continue to use the existing off-screen behaviour.
- Adds a `hide-collapse-button` boolean attribute to the [Layout](/components/layout/) component to suppress the built-in lock-icon collapse button.
- Adds a `toggle-on-resize-click` boolean attribute to the [Layout](/components/layout/) component that toggles the sidebar between open and rail/hidden when the resize handle is clicked without dragging.
- Adds a `tooltip-divider` slot to the [Layout](/components/layout/) component for rendering custom tooltip content anchored to the resize handle.
- Adds `size` (`'s' | 'm'`, default `'m'`), `icon-size` (`'xxs' | 'xs' | 's' | 'm' | 'l'`, default `'m'`), and `square` boolean attributes to the [Nav Toggle](/components/nav-toggle/) component.
- Adds an `icon` slot to the [Nav Item](/components/nav-item/) component for projecting a custom leading icon (overrides the `icon` attribute), shown in both expanded nav and rail mode.
- Adds an `end` slot to the [Nav Item](/components/nav-item/) component for trailing content that participates in the flex flow alongside the label. Sibling labels (including any nested `<nord-truncate>`) flex-shrink against the slotted element's real width, so labels ellipsize precisely at the trailing element's leading edge.
- Adds a `rail-tooltip` slot to the [Nav Item](/components/nav-item/) component for overriding the rail-mode tooltip's content. When present, it replaces the default label projection; when absent, the tooltip falls back to the item's default-slot label.
- Renders [Tooltip](/components/tooltip/) in the browser's top layer via the Popover API. Tooltips now escape `overflow: hidden` ancestors and trigger on descendants of the host element (resolved via `closest('[aria-describedby~="…"]')`) instead of only the host itself. Floating-ui positioning is preserved.
- Styles the [Navigation](/components/navigation/) component's main scrollbar as thin and unobtrusive across browsers (Firefox `scrollbar-width: thin`; Chromium/Safari 6px webkit scrollbar).
- Narrows the focus-within ring on slotted nav header/footer elements from any element to `<nord-button>` and `<nord-dropdown>` descendants only. Wrapper elements (e.g. `<div slot="footer">`) no longer receive the inset ring; wrapped focusables continue to use their own `:focus-visible` styling.
- Introduces `--n-layout-resize-color`, `--n-layout-resize-block-size`, `--n-layout-resize-inset-inline-end`, and `--n-layout-nav-rail-width` CSS Custom Properties on the [Layout](/components/layout/) component.
- Promotes `--n-layout-header-size` to a public CSS Custom Property on the [Layout](/components/layout/) component (default `var(--n-space-xxl)`, unchanged). Previously the private `_n-layout-header-size`.
- Introduces `--n-nav-item-icon-gap`, `--n-rail-flyout-background`, `--n-rail-flyout-box-shadow`, `--n-rail-flyout-min-inline-size`, `--n-rail-flyout-padding`, `--n-rail-flyout-offset-inline`, `--n-rail-flyout-offset-block`, `--n-rail-subnav-indicator-color`, and `--n-rail-subnav-indicator-color-active` CSS Custom Properties on the [Nav Item](/components/nav-item/) component.
- Introduces `--n-nav-group-heading-display` CSS Custom Property on the [Nav Group](/components/nav-group/) component (default `block`); set to `none` to hide a group heading inline.
- Introduces `--n-popout-offset-inline` and `--n-popout-offset-block` CSS Custom Properties on the [Popout](/components/popout/) component (default `0`). *Removed in 4.26.2 — superseded by the `side-offset` / `align-offset` props on [Tooltip](/components/tooltip/), [Popout](/components/popout/), and [Dropdown](/components/dropdown/).*
- Introduces `--n-button-justify-content` (default `flex-start`) and `--n-button-content-display` (default `block`) CSS Custom Properties on the [Button](/components/button/) component. Setting `--n-button-content-display: none` hides the label, used to centre leading icons in rail-collapsed states.
- Introduces `--n-card-header-end-margin-block-start` and `--n-card-header-end-margin-block-end` CSS Custom Properties on the [Card](/components/card/) component (default `calc(var(--n-space-xs) * -1)`, unchanged). Exposes the previously hardcoded negative margins on `[slot='header-end']` so consumers can opt out.
- Introduces `--n-dropdown-item-white-space` (default `nowrap`) and `--n-dropdown-item-align-items` (default `center`) CSS Custom Properties on the [Dropdown Item](/components/dropdown-item/) component. Setting `--n-dropdown-item-white-space: normal` allows long labels to wrap across multiple lines.
- Switches the [Nav Item](/components/nav-item/) content container from block-with-overflow-ellipsis to flex layout. Single-line ellipsis behaviour is preserved on the label. Consumers relying on absolute positioning of a slotted `[slot="end"]` element can opt back in with `position: absolute` on the slotted element.
- Release date 16.6.2026.

### 4.24.0

- Adds a `nav-resize` event to the [Layout](/components/layout/) component, dispatched whenever the navigation sidebar width changes (drag-resize and programmatic updates). The event's `width` property carries the new width in pixels.
- Release date 9.6.2026.

### 4.23.0

- Extends the [Layout](/components/layout/) component to recognise any descendant `<nord-nav-toggle>`, not just the one in the `nav-toggle` slot. Clicks on a `<nord-nav-toggle>` placed anywhere inside `<nord-layout>` (e.g. inside `<nord-header>`) now toggle the navigation, and hover on such a toggle drives the peek behaviour on wide screens.
- Adds a `hide-default-nav-toggle` boolean attribute to the [Layout](/components/layout/) component to suppress the built-in fallback `<nord-nav-toggle>` when you've placed your own elsewhere inside the layout.
- Adds a `nav-open-change` event to the [Layout](/components/layout/) component, dispatched whenever the navigation open state changes (user toggle, peek, focus, programmatic). The event's `navOpen` property carries the new state.
- Adds `icon` and `icon-active` attributes to the [Nav Toggle](/components/nav-toggle/) component, allowing the resting and hover/focus icons to be customised. Defaults preserve the existing `navigation-toggle` / `navigation-toggle-lock` pair.
- Adds an `auto-hide` boolean attribute to the [Nav Toggle](/components/nav-toggle/) component that mirrors the built-in toggle's behaviour, hiding the toggle on wide viewports while its ancestor `<nord-layout>` has the nav open.
- Introduces `--n-card-background-color` CSS Custom Property on the [Card](/components/card/) component for customising the card background. Defaults to `var(--n-color-surface)`.
- Release date 4.6.2026.

### 4.22.0

- Introduces `--n-layout-nav-border-color` CSS Custom Property on the [Layout](/components/layout/) component, allowing the color of the border between the navigation and the main content area (on wide screens with the nav open) to be customized. Defaults to `var(--n-color-border)`.
- Release date 3.6.2026.

### 4.20.0

- Adds `default-nav-width`, `min-nav-width`, and `max-nav-width` reflected number attributes to the [Layout](/components/layout/) component, allowing consumers to control sidebar width without forking. Defaults preserve current behaviour (`250` / `220` / `400`). `default-nav-width` has re-seed-on-change semantics tracked via a second localStorage key, so apps can roll out a new sidebar default without manual storage migrations; widths are also re-clamped against current min/max on every load.
- Adds a `size` property (`s` | `m`, default `m`) to the [Calendar](/components/calendar/) component. The `s` variant uses 28×28 day cells, smaller fonts, and tighter spacing to match the Figma toolkit spec. The default block padding is now symmetric `--n-space-m` (previously 16px top / 20px bottom).
- Introduces `--n-calendar-padding-block`, `--n-calendar-padding-inline`, and `--n-calendar-nav-gap` CSS Custom Properties on the [Calendar](/components/calendar/) component for layout customization.
- Aligns the default and disabled visual states of the [Select](/components/select/) component with the [Input](/components/input/) component. The default background now reads `var(--n-input-background, var(--n-color-surface))` and drops the button gradient and box-shadow, so the select renders as an input-styled field with a caret. The disabled state uses `var(--n-input-background-inactive, var(--n-color-active))` and dims background, border, label, and toggle icon consistently with `nord-input:disabled`.
- Refines the hover and `aria-expanded` background of the [Dropdown Item](/components/dropdown-item/) component to use `--n-color-active` / `--n-color-text` instead of the louder `--n-color-accent` / `--n-color-text-on-accent` treatment. Hover overrides on the [Message](/components/message/) component (which imports `DropdownItem.css`) are removed accordingly.
- Fixes alignment of [Dropdown Submenu](/components/dropdown-submenu/) when slotted inside a [Dropdown Group](/components/dropdown-group/) so the trigger row sits flush with sibling items.
- Adds 15 component-scoped CSS Custom Properties on `nord-nav-item` (`--n-nav-item-*`) covering base, hover, active, and active-parent (expanded) states — including overlay opacity, overlay filter, padding, border-radius, and line-height — so consumers can customize the [Navigation](/components/navigation/) sidebar items without forking.
- Introduces four new theme tokens — `--n-color-nav-active-background`, `--n-color-nav-active-text`, `--n-color-nav-expanded-background`, and `--n-color-nav-expanded-text` — across all eight themes (nord, nord-dark, nord-high-contrast, nord-dark-high-contrast, vet, vet-dark, vet-high-contrast, vet-dark-high-contrast). These close the gap with the existing `--n-color-nav-hover` / `--n-color-nav-surface` / `--n-color-nav-heading` tokens; active and expanded states previously reused `--n-color-accent` directly. Defaults preserve the current visual output 1:1.
- Release date 19.5.2026.

### 4.19.0

- Fixes the default background color of the [Input](/components/input/), [Textarea](/components/textarea/), [Checkbox](/components/checkbox/), [Radio](/components/radio/), and [Tag](/components/tag/) components from a grey tint (`--n-color-active`) to white (`--n-color-surface`), making the default state visually distinct from disabled.
- Fixes the disabled and readonly states of the [Input](/components/input/) and [Textarea](/components/textarea/) components to use `--n-color-active` as the background, clearly differentiating them from the default state. Readonly preserves the full text color while disabled uses `--n-color-text-weakest`.
- Fixes icon slot colors in the [Input](/components/input/) component to match the text color in disabled (`--n-color-text-weakest`) and readonly (`--n-color-text`) states.
- Introduces `--n-input-background`, `--n-input-background-inactive`, `--n-textarea-background`, and `--n-textarea-background-inactive` CSS Custom Properties for independently customizing input and textarea backgrounds across default and inactive (disabled/readonly) states.
- Fixes an issue in the [Tag Group](/components/tag-group/) component where z-index values for hover and focus-within states were not properly separated.
- Release date 6.5.2026.

### 4.18.0

- Adds `hint-below` property to the [Checkbox](/components/checkbox/), [Date Picker](/components/date-picker/), [Fieldset](/components/fieldset/), [Input](/components/input/), [Radio](/components/radio/), [Range](/components/range/), [Select](/components/select/), [Textarea](/components/textarea/), and [Toggle](/components/toggle/) components, allowing hint text to be rendered below the control and any error.
- Preserves the existing hint placement by default, making the new layout opt-in and non-breaking for current consumers.
- Release date 16.4.2026.

### 4.17.0

- Fixes an issue in the [Date Picker](/components/date-picker/) component where the `hideRequired` property was not working.
- Modifies the [Calendar](/components/calendar/) component’s year selection logic from a 10-year range based on the selected year to a range from `current year - 100` to `current year + 10`.
- Release date 25.3.2026.

### 4.16.1

- Adds new example and improve documentation for [Dropdown Submenu](/components/dropdown-submenu/) component.
- Release date 23.3.2026.

### 4.16.0

- Adds new [Dropdown Submenu](/components/dropdown-submenu/) component that enables nested submenus within [Dropdown](/components/dropdown/) menus, with hover-to-open on desktop and stack navigation on mobile viewports.
- Adds support for partial translation overrides in the localization system. The `registerTranslation` function now accepts partial translations that are deep-merged with existing translations, making it easier to override specific strings without providing a full translation object.
- Fixes an issue in the [Calendar](/components/calendar/) component where aria labels for day cells were off by one day due to UTC formatting inconsistencies.
- Adds keyboard input validation against `min` and `max` date boundaries in the [Date Picker](/components/date-picker/) component, validating on blur.
- Release date 23.3.2026.

### 4.15.0

- Adds `persistent` and `hide-close-button` properties to the [Modal](/components/modal/) component for enhanced customization of modal behavior and appearance.
- Improves [Modal](/components/modal/) component's event handling by exposing the trigger source through enhanced `cancel` and `close` events for better control over different close scenarios.
- Release date 12.3.2026.

### 4.14.0

- Fixes an issue in the [Popout](/components/popout/) and [Dropdown](/components/dropdown/) components where `position: fixed` positioning would break when ancestor elements use CSS container queries or create containing blocks. The components now use the Popover API to promote themselves to the top layer when opened.
- Adds `trigger` property to the [Modal](/components/modal/) component's `cancel` and `close` events, exposing the original event that caused the dismiss or close action. The new `ModalCancelEvent` and `ModalCloseEvent` classes are exported from the package.
- Fixes the Vue and React type definition for the `form` property on form components to correctly accept a `string` value instead of `HTMLFormElement`.
- Fixes missing TypeScript declarations for the `@nordhealth/tokens` package, resolving module resolution errors when importing design tokens in TypeScript projects.
- Adds missing CSS Custom Properties documentation for the [Button](/components/button/), [Card](/components/card/), and [Input](/components/input/) components.
- Release date 6.3.2026.

### 4.13.0

- Adds `inputmode` property to the [Input](/components/input/) component to support the HTML `inputmode` attribute, allowing browsers on mobile devices to display appropriate keyboards (e.g., numeric keypad with `inputmode="numeric"`).
- Adds `footer-divider` boolean property to the [Card](/components/card/) component to render a border above the footer slot, with automatic padding restoration.
- Adds `--n-card-header-flex-grow` CSS Custom Property to the [Card](/components/card/) component to control header slot flex-grow behavior, allowing header slots to expand and fill available space.
- Adds `--n-card-header-padding-block` and `--n-card-header-padding-inline` CSS Custom Properties to the [Card](/components/card/) component for independent control of header padding.
- Adds `--n-card-border-color` CSS Custom Property to the [Card](/components/card/) component to provide card-specific border color control without affecting global `--n-color-border`.
- Improves [Button](/components/button/) component text selectability by allowing `--n-user-select` CSS Custom Property to be applied to button text.
- Fixes an issue in the [Navigation](/components/navigation/) component where sticky footer styling would be applied even when the footer slot renders no content.
- Release date 2.3.2026.

### 4.12.5

- Fixes an issue where the [Card](/components/card/) component's heading font size and font weight could be overridden by a CSS reset.
- Release date 16.2.2026.

### 4.12.0

- Adds new [Progress](/components/progress/) component that displays a circular pie-chart style progress indicator. The component supports multiple sizes, semantic and custom colors, and provides built-in animation when progress changes.
- Release date 30.1.2026.

### 4.11.0

### 4.10.0

- Adds 6 new icons to [Nordicons](/icons/): `arrow-undo`, `generic-emoji`, `generic-farm-2`, `generic-passport`, `generic-truck`, and `interface-calendar-checked-in`.
- Release date 13.1.2026.

### 4.9.0

- Adds new `--n-card-header-background-color` CSS Custom Property for [Card component](/components/card/) to control the background color of the card header.
- Improves vertical alignment of the [Badge](/components/badge/) component when used inline or in a flexbox container. This change may cause minor layout shifts in some cases.
- Adds new [Card with custom header](/components/card/?example=with+custom+header) usage example.
- Adds new [Badge with vertically aligned text](/components/badge/?example=with+vertically+aligned+text) usage example.
- Adds new [stepper](/components/input/?example=stepper) usage example for the [Input](/components/input/) component.
- Release date 4.11.2025.

### 4.8.1

- Fixes an issue in the [Modal](/components/modal/) component where certain dropdowns and popovers from third-party libraries would not extend beyond the Modal.
- Release date 24.10.2025.

### 4.8.0

- Adds new `alwaysFloating` property to the [Popout](/components/popout/) and [Dropdown](/components/dropdown/) components to always display the popout as a floating overlay, even on smaller viewports.
- Adds new [always floating](/components/dropdown/?example=always+floating) usage example for the Dropdown component.
- Adds new [always floating](/components/popout/?example=always+floating) usage example for the Popout component.
- Release date 19.9.2025.

### 4.7.0

- Adds new `externalFiltering` property for the [Command Menu](/components/command-menu/) component to allow for external filtering.
- Adds new `searchQuery` property for the [Command Menu](/components/command-menu/) component to read and control the search query.
- Adds new `exitNestedOnSearch` property for the [Command Menu](/components/command-menu/) component to control if the Command Menu should exit the nested view when searching.
- Documents the `input` event for the [Command Menu](/components/command-menu/) component to allow for external filtering.
- Adds new [external filtering](/components/command-menu/?example=external+filtering) usage example for the Command Menu component.
- Adds new [exit nested on search](/components/command-menu/?example=exit+nested+on+search) usage example for the Command Menu component.
- Fixes an issue in the [Command Menu](/components/command-menu/) component where global search would return nested items with the default internal filtering.
- Release date 1.9.2025.

### 4.6.0

- Slightly decreases the height of the [Badge](/components/badge/) component to fix a vertical alignment issue on low pixel density screens. This change may cause minor layout shifts in some cases.
- Release date 11.8.2025.

### 4.5.0

- Adds new `hideDropdownIcon` property for the [Button](/components/button/) component to hide the dropdown icon when used as a dropdown toggle.
- Adds new [Button with dropdown but hide icon](/components/button/?example=button+with+dropdown+but+hide+icon) example for the Button component.
- Fixes an issue in the [Modal](/components/modal/) component where content would extend beyond the modal's rounded corners in certain layouts.
- Adds new [feature without footer](/components/modal/?example=feature+without+footer) example for the Modal component.
- Release date 17.7.2025.

### 4.4.0

- Improves the [Layout](/components/layout/) component's collapse button behavior to only hide it (unless hovered or focused) on devices with an accurate hover input mechanism, rather than on all devices.
- Improves language handling by observing changes to `lang` attribute when set on components.
- Adds documentation for setting `lang` attribute on individual components to override document language in the [Localization](/docs/developer/localization/) guidelines.
- Fixes an issue in the [Select](/components/select/) component where changes to slotted option content would not be reflected.
- Adds new icon to [Nordicons](/icons/): `generic-pet-food`.
- Release date 2.7.2025.

### 4.3.1

- Fixes an issue in the [Dropdown](/components/dropdown/) and [Popout](/components/popout/) components where the toggle would stop working after being disconnected and reconnected to the DOM, which happens with Vue’s KeepAlive.
- Release date 25.6.2025.

### 4.3.0

- Adds new `today` property for the [Calendar](/components/calendar/) component.
- Adds new [example to change the date that is considered today](/components/calendar/?example=change+today) for the Calendar component.
- Adds new `today` property for the [Date Picker](/components/date-picker/) component.
- Adds new [example to change the date that is considered today](/components/date-picker/?example=change+today) for the Date Picker component.
- Adds new icon to [Nordicons](/icons/): `interface-table`.
- Release date 5.6.2025.

### 4.2.0

- Adds new `--n-dropdown-max-block-size` CSS Custom Property for [Dropdown component](/components/dropdown/) to control the maximum block size, or height, of the dropdown.
- Adds new [maximum block size example](/components/dropdown/?example=maximum+block+size) for the Dropdown component.
- Release date 23.5.2025.

### 4.1.1

- Updates Nord dependencies to the latest.
- Release date 19.5.2025.

### 4.1.0

- Adds 3 new icons to [Nordicons](/icons/): `text-heading-1`, `text-heading-2` and `text-heading-3`.
- Release date 12.5.2025.

### 4.0.1

- Adds new icon to [Nordicons](/icons/): `text-ordered-list`.
- Adds missing ref attribute to React-specific types for Nord components.
- Release date 8.5.2025.

### 4.0.0

- **New major release that unifies the two design system platforms into a one platform that can serve all of Nordhealth. This change allows us to better support the next generation of apps and generative AI experiences at Nordhealth.** ✨
- This new version ships with two distinctive brands, [therapy](/?theme=nord) and [veterinary](?theme=vet). You can choose the currently active brand from the top left corner of this documentation website. Once chosen, you will get content that is tailored specifically for the brand and the business unit you’re working in. [Read more](/migrations/4.0.0/).
- With the [recent release of React 19](https://react.dev/blog/2024/12/05/react-19#support-for-custom-elements){rel="[\"nofollow\"]"} and the added support for Custom Elements, we’re deprecating the `@nordhealth/react` package (which includes the Next.js integration).
- To continue having full type checking and auto-completion in your JSX, you can use the new `@nordhealth/components/lib/react.d.ts` type definition file. [Read more](/docs/developer/web-components/#types-and-editor-integration-with-react).
- Additionally, we have made the Vue-specific types for our Web Components part of the `@nordhealth/components` package, instead of needing to import the separate `@nordhealth/vue` package, which we’re deprecating.
- They can now be retrieved from the new `@nordhealth/components/lib/vue.d.ts` type definition file instead of `@nordhealth/vue`. [Read more](/docs/developer/web-components/#types-and-editor-integration-with-vue).
- Updates `@floating-ui/dom` dependency to version `1.6.13`, `lit` dependency to version `3.3.0`, and `qr` dependency to version `0.4.2`.
- This release doesn’t include breaking changes for the existing users of Nord Design System.
- For detailed description of all changes and the steps required for migration, please see [Migration to 4.0.0](/migrations/4.0.0/).
- Release date 6.5.2025.

### 3.22.0

- Improves the support for importing Nord components in non-browser environments.
- Adds new [Server-side rendering (SSR) with React](/web-components/#server-side-rendering-(ssr)-with-react) section to the Web Components guidelines.
- Adds new [Server-side rendering (SSR) with Vue](/web-components/#server-side-rendering-(ssr)-with-vue) section to the Web Components guidelines.
- Adds new [Card with scrollable content](/components/card/?example=with+scrollable+content) example.
- Adds new [Card with scrollable table](/components/card/?example=with+scrollable+table) example.
- Adds new [Layout with full height table](/components/layout/?example=full+height+table) example.
- Release date 26.3.2025.

### 3.21.0

- Makes the [Modal](/components/modal/) component no longer apply padding to the default slot if it is empty.
- Adds new [feature without body](/components/modal/?example=feature+without+body) example for the Modal component.
- Improves the [Modal](/components/modal/) documentation slightly.
- Adds `auto` as a `position` property value to the [Popout](/components/popout/) and [Dropdown](/components/dropdown/) components, for automatic positioning depending on which side has the most space available.
- Adds new [position auto](/components/popout/?example=position+auto) usage example for the Popout component.
- Expands the [position and alignment](/components/popout/?example=position+and+alignment) usage example for the Popout component to include automatic positioning.
- Expands the [position and alignment](/components/dropdown/?example=position+and+alignment) usage example for the Dropdown component to include automatic positioning.
- Fixes a macOS Safari repaint bug in the [Radio](/components/radio/) component.
- Release date 13.2.2025.

### 3.20.0

- Adds new `disabled` property for the [Dropdown Item](/components/dropdown-item/) component.
- Adds new [disabled example](/components/dropdown-item/?example=disabled) for the Dropdown Item component.
- Removes the `baseline` value for the `justifyContent` property of the [Stack](/components/stack/) component, as it is not a valid CSS value and had no effect.
- Adds the `baseline` value for the `alignItems` property of the [Stack](/components/stack/) component.
- Adds new [using horizontal align baseline example](/components/stack/?example=using+horizontal+align+baseline) for the Stack component.
- Fix accessibility issue reported by automated testing in [Select](/components/select/) component.
- Release date 29.1.2025.

### 3.19.0

- Adds new `var(--n-select-inline-size)` CSS Property for [Select](/components/select/#css-properties) that controls the inline size, or width, of the select.
- Adds new [custom width usage example](/components/select/?example=custom+width) for the Select component.
- Fixes the vertical alignment of an Avatar with initials on low pixel density screens.
- Release date 20.11.2024.

### 3.18.2

- Fixes an issue where Nordicons were being fetched from the CDN with an outdated version.
- Release date 27.9.2024.

### 3.18.1

- Fixes the line-height of the [Radio](/components/radio/) and [Toggle](/components/toggle/) component labels.
- Migrates the monorepo to use [pnpm workspaces](https://pnpm.io/workspaces){rel="[\"nofollow\"]"} instead.
- Release date 24.9.2024.

### 3.18.0

- Adds new `rawValue` property for the [Date Picker](/components/date-picker/?example=validation) component. This new read-only property allows you to get the raw value of the Input Field without the date formatting.
- Adds new [validation example](/components/date-picker/?example=validation) for the Date Picker component which utilizes the new `rawValue` property.
- Adds new `button` type for the [Input component](/components/input/) for when you want a button styled as a Nord Input.
- Improves the support for non-browser environments and ensures most of our components can be imported and function there as well.
- Improves React developer experience by exporting the component types from the React package. View the updated [React documentation](/docs/developer/web-components/#react).
- Improves the accessibility of the `role="listbox"` element inside the [Command Menu](/components/command-menu/) component.
- Fixes an issue with the [Navigation component’s sticky footer](/components/navigation/?example=sticky+footer) which previously had incorrect colors when viewed in dark mode.
- Fixes an issue with the [Segmented Control Item](/components/segmented-control-item/) and [Radio](/components/radio/) components which in React never “unchecked” themselves when the user chose another option.
- Updates the underlying Lit package from `2.7.4` to the latest `3.2.0` version.
- Updates all other package dependencies to the latest versions as well.
- Release date 17.9.2024.

### 3.17.0

- Makes it possible to control the text color of the label in form components using `var(--n-label-color)`. This change affects Checkbox, Date Picker, Input, Radio, Toggle, Textarea, Select, and Fieldset components. [View an example](/components/input/?example=small+with+custom+label+color).
- Removes `draft` status from the [Segmented Control](/components/segmented-control/), [Segmented Control Item](/components/segmented-control-item/), [Tag](/components/tag/) and [Tag Group](/components/tag-group/) components and marks them as ready for production usage.
- Release date 4.9.2024.

### 3.16.0

- We’ve improved the sizing of labels when using the small variants of form components. This change affects Checkbox, Date Picker, Input, Radio, Toggle, Textarea, Select, and Fieldset components.
- Fixes an issue where the Modal component abruptly closed when the user tried to scroll the contents using the browser’s built-in scrollbar.
- Release date 3.9.2024.

### 3.15.0

- Adds new `small` and `large` size [Radio component](/components/radio/?example=size) variants.
- Fixes an issue where a single Button in a [Button Group](/components/button-group/?example=single) component did not have a border radius in every corner.
- Fixes an issue where a single Tag in a [Tag Group](/components/tag-group/?example=single) component did not have a border radius in every corner.
- Fixes an issue with the [Dropdown Item](/components/dropdown-item/) component where the icon in the start slot got smaller when the content overflowed its container.
- Improves the layout of the [Dropdown Item](/components/dropdown-item/) component. Previously, the default slot of the Dropdown Item did not fill up all available space, which prevented the consumers from adding content in the default slot that needed to span the entire width.
- Release date 2.9.2024.

### 3.14.1

- Fixes an issue that caused the [Message component](/components/message/) to have wrong hover styles.
- Release date 26.6.2024.

### 3.14.0

- Adds text selection props and methods to [Input](/components/input/?example=text+selection) and [Textarea](/components/textarea/?example=text+selection) components.
- Adds new [text selection usage example](/components/input/?example=text+selection) for the Input component.
- Adds new [input mask usage example](/components/input/?example=input+mask) for the Input component.
- Adds new [text selection usage example](/components/textarea/?example=text+selection) for the Textarea component.
- Adds new [documentation](/components/input/?example=input+mask#input-masking) about input masking using [Maskito](https://maskito.dev/){rel="[\"nofollow\"]"}.
- Improves documentation about events from sub components that bubble up.
- Modifies the [Stack component](/components/stack/) to not apply a default text color.
- Release date 24.6.2024.

### 3.13.0

- Adds new [Popout component example](/components/popout/?example=custom+popout+filter) that shows how to build interactive filter buttons for Provet.
- Adds new `var(--n-dropdown-item-background-color)` CSS Property for [Dropdown Item](/components/dropdown-item/#css-properties) that controls the background color of the item.
- Adds new `var(--n-dropdown-item-color)` CSS Property for [Dropdown Item](/components/dropdown-item/#css-properties) that controls the color of the text within the item.
- Improves the focus styles of the [Button Group](/components/button-group/?example=direction) and the [Tag Group](/components/tag-group/) to be more consistent.
- Adds [new documentation](/docs/developer/web-components/#vue) about `v-model` usage for the Checkbox, Toggle, and Tag components.
- Release date 14.6.2024.

### 3.12.0

- Adds new [Segmented Control](/components/segmented-control/) component that is used to pick one choice from a set of closely related choices, and immediately apply that selection.
- Adds new [Segmented Control Item](/components/segmented-control-item/) component that is used to populate Segmented Control with options.
- Adds new [Tag Group](/components/tag-group/) component that is designed to bring together selectable tags that are of a similar nature. For example categories you can filter by.
- Adds documentation and usage examples for the new [Segmented Control](/components/segmented-control/) component.
- Adds documentation and usage examples for the new [Segmented Control Item](/components/segmented-control-item/) component.
- Adds documentation and usage examples for the new [Tag Group](/components/tag-group/) component.
- Removes `hover` color of the [Select](/components/select/) component’s caret to make it consistent with the [Dropdown](/components/dropdown/) component.
- Adds `expand` property to the [Tag](/components/tag/?example=expanded) component.
- Adds support for `xs` gap in the [Stack](/components/stack/) component.
- Improves the [Button Group](/components/button-group/) documentation slightly.
- Release date 3.6.2024.

### 3.11.1

- Fixes `focus` trap issue when an open [Modal component](/components/modal/) is removed from the DOM.
- Release date 24.5.2024.

### 3.11.0

- Modifies the `L` size of the [Modal component](/components/modal/?example=size) to have a max-width of `940px` instead of the previous `1320px`.
- Adds new `XL` size for the [Modal component](/components/modal/?example=size) that covers the full width of the viewport.
- Adds new `stickyFooter` property for the [Navigation component](/components/navigation/?example=sticky+footer) that controls whether the Navigation’s footer slot has sticky positioning or not.
- Updates the documentation and usage examples of the [Navigation component](/components/navigation/?example=sticky+footer).
- Adds 4 new icons to [Nordicons](/icons/): `interface-dnr`, `interface-cpr-acpr`, `interface-cpr-unknown` and `interface-ai`.
- Updates the disabled styles for the [Checkbox](/components/checkbox/?example=disabled), [Radio](/components/radio/?example=disabled), and [Toggle components](/components/toggle/?example=disabled).
- Improves the icon and font sizing of the [Avatar component](/components/avatar/?example=with+icon).
- Adds new [Avatar usage example](/components/avatar/?example=patients+and+clients) that shows how to display patients and clients in Provet using the Avatar component.
- Adds new [Avatar usage example](/components/avatar/?example=users) that shows how to display users in Provet using the Avatar component.
- Improves the documentation of the [Avatar component](/components/avatar/?example=patients+and+clients).
- Adjusts the `disabled` styles of the [Button component](/components/button/?example=disabled) for better legibility.
- Adds `square` property for icon only buttons. Take a look at the updated [Button component examples](/components/button/?example=icon+only).
- Adds new `spaced` variant for the [Button Group component](/components/button-group/?example=spaced) that makes it easier to create a group of buttons with consistent spacing.
- Adds new `wrap` property for the [Button Group component](/components/button-group/?example=spaced) that allows the buttons to wrap to the next line when the container is too narrow.
- Updates the documentation and usage examples of the [Button Group component](/components/button-group/).
- Release date 22.5.2024.

### 3.10.0

- Adds new [Tag component](/components/tag/) that represent a set of keywords that help label, categorize, and organize objects. Tags are commonly used to signify the attributes of an object.
- Adds documentation and usage examples for the new [Tag component](/components/tag/).
- Nord’s components now reflect most primitive data properties to attributes to follow the [Custom Element best practices](https://web.dev/articles/custom-elements-best-practices){rel="[\"nofollow\"]"}. This is especially helpful for frameworks like Vue that [try to set properties over attributes](https://vuejs.org/guide/extras/web-components#passing-dom-properties){rel="[\"nofollow\"]"} for Custom Elements whenever possible.
- Simplifies [Modal component’s](/components/modal/) focus trap logic by using the new [inert attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert){rel="[\"nofollow\"]"}. This fixes an issue where users could not select text inside the modal.
- Improves [Modal component’s](/components/modal/) “click outside” logic. With this release, the modal will now no longer close when the `mousedown` event has started from inside the modal and the `mouseup` occurs outside of it. This fixes an issue where users would try to select text inside a modal and then release the mouse outside.
- Release date 8.5.2024.

### 3.9.0

- Adds new [Footer component](/components/footer/) that can be used to provide additional information or actions that are positioned below the main content. Additionally, the Footer can also be used to show actions for stepped workflows.
- Adds documentation and usage examples for the new [Footer component](/components/footer/).
- Implements the new Footer component into the [Modal](/components/modal/) and [Drawer](/components/drawer/) components to replace the old custom implementations.
- Explicitly sets the timezone to UTC when formatting dates with the [Calendar](/components/calendar/) and [Date Picker](/components/date-picker/) components to fix various off-by-one errors.
- Removes `draft` status from the [Message](/components/message/), [Notification](/components/notification/) and [Notification Group](/components/notification-group/) components and marks them as ready for production usage.
- Improves the [Layout component](/components/layout/?example=full+height+content)’s main content area to fill the available vertical space to make it easier to build layouts that need to fill the whole content area.
- Adds new `stickyFooter` property for the [Layout component](/components/layout/?example=footer) to allow users to control whether the Layout's footer slot has sticky positioning.
- Adds new `footer` slot for the [Layout component](/components/layout/?example=footer) that is used for placing content inside the footer section.
- Adds new `var(--n-size-top-bar)` [sizing token](/tokens/#size) that is used for setting the default height of the [Top Bar component](/components/top-bar/).
- Adds new [Footer usage example](/components/layout/?example=footer) for the Layout component.
- Adds new [Layout usage example](/components/layout/?example=full+height+content) to demonstrate how to fill the available height of the Layout component’s main content area.
- Improves the [kitchen sink example](/components/layout/?example=kitchen+sink) for the Layout component to include more variations.
- Release date 11.4.2024.

### 3.8.0

- Avatar component now has a public `--n-avatar-text-color` CSS Custom Property to control the color of the avatar’s text and icon, using [color tokens](/tokens/#color).
- Release date 19.2.2024.

### 3.7.0

- Adds `interface-archive`, `interface-error`, `medical-birthday` and `navigation-catalog` icons to [Nordicons](/icons/).
- Release date 14.2.2024.

### 3.6.2

- Fix [Button group](/components/button-group) border-radius in right-to-left languages.
- Release date 30.11.2023.

### 3.6.1

- Fix issue where [Radio](/components/radio/) ended up in a broken state if disconnected/reconnected to the DOM.
- Release date 01.11.2023.

### 3.6.0

- Makes the [Top Bar](/components/top-bar/) use fixed position when used inside the [Layout](/components/layout/?example=top+bar).
- This change allows the [Layout’s](/components/layout/?example=top+bar) main content area to have more natural horizontal overflow where necessary without breaking the rest of the application layout.
- Remove redundant `overscroll-behavior-block: none;` from CSS Framework.
- Release date 18.10.2023.

### 3.5.0

- Adds `interface-whiteboard`, `interface-payment-terminal` and `generic-unchipped` icons to [Nordicons](/icons/).
- Allow [Nav Items](/components/nav-item/) to default to `open`, even when a Nav Item is `active`. [View an example](/components/navigation/?example=initially+open+nav+item).
- Fixes [Spinner component](/components/spinner/) in RTL mode.
- Adds `--n-spinner-color` custom property to control [Spinner](/components/spinner/) color.
- Release date 17.10.2023.

### 3.4.1

- Only broadcast Navigation width change on user interaction, to prevent infinite loops.
- Fixes issue where Dropdown Item with a `href` can have incorrect font-weight when used in Top Bar.
- Release date 14.9.2023.

### 3.4.0

- Publishes the [Top bar component](/components/top-bar/) and removes the `draft` status from it.
- Adds `persist-nav-state` property for [Layout component](/components/layout/) to persist nav open/closed state in `localStorage`.
- Adds `sync-nav-state` property for [Layout component](/components/layout/) to sync nav state between tabs/windows.
- Improves the dropdown menu hover colors for [Top bar component](/components/top-bar/).
- Improves padding of [Navigation component](/components/navigation/) when no heading is provided for first Nav Group.
- Removes black transparent overlay from the [Avatar component](/components/avatar/).
- Improves the visibility of Avatar on various Top Bar color themes.
- Improves the style of an active [Navigation item](/components/nav-item/) in the sidebar.
- Release date 12.9.2023.

### 3.3.0

- Adds `hide-label` property to [Fieldset component](/components/fieldset/).
- Adds `text-wrap: balance` to [Empty state component](/components/empty-state/) as a progressive enhancement.
- Improves positioning of buttons/inputs/etc placed inside the `header-end` slot of the [Card component](/components/card/).
- Release date 4.9.2023.

### 3.2.0

- Adds new `target` property for [Dropdown Item component](/components/dropdown-item/). When provided together with a `href` property, determines where to open the linked URL.
- Release date 22.8.2023.

### 3.1.3

- Adds new `interface-duplicate` icon into [Nordicons](/icons/).
- Release date 9.8.2023.

### 3.1.2

- Add some additional safety guards in popout component.
- Improve handling of `form` attribute in form components.
- Release date 5.7.2023.

### 3.1.1

- Fix theming issues when slotting search input in top-bar component.
- Fix issue where popout component did not handle `id` being changed.
- Release date 14.6.2023.

### 3.1.0

- This release adds a new [Message component](/components/message/) that represents a specific item within a collection, such as notifications, tasks or conversations. Message can be placed directly inside the [Dropdown component](/components/dropdown/?example=with+messages).
- The [Input Component’s](/components/input/?example=with+a+prefix+or+suffix) `start` and `end` slot now support content of any width.
- Adds a new example for the [Select component](/components/select/?example=custom+button+style) that shows how to customize the Select to look like an input.
- Improves theming and the usage of `var(--n-color-accent)`.
- Fixes transitions for all textfields to match with buttons.
- Fixes a [Command Menu](/components/command-menu/) issue where arrow keys navigated commands out of visual order.
- Adds new `--n-button-overflow` CSS Custom Property for [Button component](/components/button/) to control the overflow.
- Switches to using `:focus-visible` in Button component to improve use cases such as the dropdown headers in the [Top Bar component](/components/top-bar/?example=advanced).
- Fixes `min-block-size` for [small buttons](/components/button/?example=small+buttons). This used to be slightly incorrect.
- Adds new simple [search example](/components/input/?example=search) under the Input component.
- Improves the [Nav Toggle](/components/nav-toggle/) positioning in the [Layout component](/components/layout/).
- Updates all [Top Bar examples](/components/top-bar/?example=advanced) to have notifications, tasks and user menu.
- Adds styles for slotted Buttons inside the [Top Bar component](/components/top-bar/?example=advanced).
- Improves the [Top Bar](/components/top-bar/) spacing overall for both mobile and desktop devices.
- Adds two new templates: [Top Bar](/templates/) and [Theming](/templates/).
- Improves `var(--n-color-nav-hover)` to be more consistent with other colors in the light high contrast theme.
- Switches to using the same icon for hiding and showing the [Navigation](/components/navigation/) in the [Layout component](/components/layout/).
- Makes it possible to style the [Input component](/components/input/?example=search) according to the new [Top Bar design](/components/top-bar/?example=advanced).
- Fixes a bug that caused the Input placeholder text to be too light in Firefox.
- Adds a new `header` slot into the Dropdown component, [view an example](/components/dropdown/?example=with+header).
- Makes it possible to display messages inside the Dropdown component, [view an example](/components/dropdown/?example=with+messages).
- Replaces the old `navigation-tasks` icon with a new larger one.
- Improves the disabled styles for the [Input component](/components/input/).
- Release date 31.5.2023.

### 3.0.0

- **New major release that brings [various improvements and bug fixes](/migrations/3.0.0/)!!** ✨🥳
- The main difference is the introduction of a new [Layout](/components/layout/?example=theming) and [Top Bar component](/components/top-bar/) which now allow functionality such as search and contextual menus to be placed at the top of the interface instead of the Navigation menu.
- We’ve also improved the underlying [color system](/tokens/) to make it more extensible and better cover the use cases of our different products. This release utilizes the new color system and brings many new styles and variants to components such as [Badge](/components/badge/) and [Banner](/components/banner/).
- Most changes have been kept backwards compatible, and we still support the [old style layout](/components/layout/?example=custom+surface+and+background) as well. Not all of our products need the additional top bar or more advanced utilities, so you can keep using the current layout that your users are already familiar with.
- For detailed description of all changes, please see [Migration to 3.0.0](/migrations/3.0.0/).
- Breaking changes are also covered in the [migration guide](/migrations/3.0.0/).
- Release date 19.5.2023.

[![Comparison of changes in the release](/img/migrations/diff.png){height="1037" width="2809" style="margin-bottom: 0;"}](/migrations/3.0.0/)

[Migration guide to 3.0.0](/migrations/3.0.0/)



### 2.17.1

- Improve error logic of Date Picker component. This fixes an issue where sometimes the visual error state would not get removed.
- Release date 10.5.2023.

### 2.17.0

- Adds new [Notification](/components/notification/) component. ✨
- Adds new [Notification Group](/components/notification-group/) component. ✨
- To improve the developer experience for Vue.js developers, we now offer experimental `@nordhealth/vue` package. This package only contains types and no code. To learn how to integrate this into your project, [view Vue.js documentation](/docs/developer/web-components/#vue). ✨
- Extracts `NotificationMixin` that contains common functionality between [Toast](/components/toast/) and [Notification](/components/notification/) components.
- Adds new `var(--n-space-xs)` space token.
- Adds new `size` property to [Header component](/components/header/) which controls the header sizing, [view an example](/components/header/?example=size).
- Makes [Nav Group component](/components/nav-group/) styles more robust and adjusts the Nav Group heading size to be smaller. [View an example](/components/navigation/).
- Hide [Navigation component](/components/navigation/) header and footer slots when they have no content.
- Adds new `xs` space utilities and missing alignment helpers to [CSS Framework](/docs/developer/css-framework/).
- Adds `unit` as a type property value to the [Input component](/components/input/?example=units), for monospaced characters. [View an example](/components/input/?example=units).
- Adds `--n-input-text-align` as a public CSS custom property to the [Input component](/components/input/?example=units), to align the input text directly. [View an example](/components/input/?example=units).
- Ensure we don’t show “localization” section in the component’s documentation when it doesn’t need this.
- Release date 29.3.2023.

### 2.16.1

- Use disabled text color for start and end slots in [disabled input](/components/input/?example=disabled).
- Reflect [Skeleton component](/components/skeleton/) `effect` prop, drop `none` default.
- Override the margins being reset by the `.n-reset` helper with the input slot margin styles.
- Fixes [header component](/components/header/) wrapping. Previously if the header component had a piece of content that is really long, the end slot would be pushed underneath. With this change the header end slot no longer wraps underneath and the [usage examples](/components/drawer/) have been updated to show the use of the `.n-truncate` helper to prevent some longer pieces of text from causing layout shift.
- Release date 20.3.2023.

### 2.16.0

- Add fallback `icon` to [Avatar component](/components/avatar/), [view an example](/components/avatar/?example=with+icon).
- Add `xxxl` size to [Avatar component](/components/avatar/) and adjusts overall component sizing.
- Adjust [Avatar component](/components/avatar/) background colors.
- Release date 23.2.2023.

### 2.15.2

- Popout now supports dynamically re-positioning if its `anchor` is updated whilst open.
- Fix spelling mistake in destructive modal example name.
- Release date 14.2.2023.

### 2.15.1

- Observe changes to Popout’s `anchor` property and updates cached element accordingly, whilst ensuring to cleanup after itself.
- Release date 9.2.2023.

### 2.15.0

- **Updates all existing [Nordicons with a new design style](/icons/)!!!** ❤️🥰🥳
- This update moves our icon style closer to the Nordhealth brand. All icons now closely follow the brand guidelines and have strong affiliation with our logomark and design language.
- With this update we’re overcoming issues with the old icon style which was somewhat limiting our creativity and possibilities.
- This update allows us to get rid of licensing issues with the previous iconset as it prevented us from sharing any of our work in Figma community or GitHub.
- Adds new `medical-prescription`, `interface-send`, `interface-login`, `interface-like-filled`, `interface-favorite-filled`, `interface-globe`, `interface-dislike-filled`, and `interface-bookmark-filled` icons.
- Make SVG Lint config more strict about the size of the icons which should always be 20 × 20px.
- Removes `keyboard-alt` and `interface-help-2` icons from Nordicons. If you’re using `interface-help-2`, please replace with more universal `interface-help` icon.
- Fixes the order of icons metadata to be consistent for all icons.
- Updates all screenshot diff tests for icons and components.
- Updates [iconography documentation](/design/foundations/iconography/) to match the new style and guidelines.
- Release date 25.1.2023.

### 2.14.1

- Return promise from `show/hide` methods in Dropdown and Popout which resolve when the open/close animation is complete.
- Add [example of programmatically closing the Layout’s nav](/components/layout/?example=programmatically+close+nav).
- Adds unique IDs to each property/method/etc of a component to allow direct linking.
- Release date 19.1.2023.

### 2.14.0

- We’ve modified the [Layout component](/components/layout/) to close navigation on mobile if a leaf nav-item is clicked.
- Improves [Icon component](/components/icon/) performance by adding caching to icons so that an icon is never requested more than once.
- Deprecates `variant="switch"` on the [Button component](/components/button/).
- Removes switch buttons from usage examples.
- Cleans up legacy custom styles for buttons inside [Navigation](/components/navigation/).
- Gracefully handle missing translation keys by showing fallback of `en-us`.
- Log warning to console if either entire component’s translation is missing, or specific keys for a component.
- Adds support for custom `@localization` jsdoc tag, allowing for name and description.
- Gets all expected translation keys from `fi-fi.ts` example translation.
- Ensure all known translation keys are fully documented.
- Expose [localization details in docs](https://nordhealth.design/components/calendar/#localization){rel="[\"nofollow\"]"}.
- Release date 15.1.2023.

### 2.13.0

- Adds `maxLength` property for Textarea component. [See an example](/components/textarea/?example=character+counter).
- Adds ability to show character counter with Textarea component. [See an example](/components/textarea/?example=character+counter).
- Removes `text-transform: uppercase` from Calendar month/year select elements since it introduced an inconsistency between month names shown.
- Adds dropdown icon as default slot content when button is used in a dropdown. This is backwards compatible, and can be overridden in exceptional circumstances.
- Removes reflection for button's `target` attribute.
- Adds proper `displayName` to React wrapper components, so that the React dev tools become useful again.
- Be more selective about when to add nav toggle gutter to header. This prevents issues where header is slotted in other places in layout.
- Removes default value of `"m"` in icon's `size` property.
- Adds smart default sizing to icons when used in buttons, inputs, dropdown items, tooltips. This is backwards compatible, and can be overridden in exceptional circumstances.
- Greatly simplify many usage examples by leaning on the new default icon sizing behaviour throughout.
- Release date 29.11.2022.

### 2.12.0

- Adds `isDateHighlighted` property to Calendar and Date Picker. [See example](/components/calendar/?example=highlighting+days).
- We’ve cleaned up and simplified Calendar component code.
- We’ve moved tests from Date Picker to Calendar where appropriate.
- Adds new tests for Calendar and Date picker.
- Improves some Date Picker visual tests to actually capture what is being shown in the example.
- Adds tests for Tab Group and Toast Group.
- Add auto-generated list pages to Web Components dev server.
- Release date 17.11.2022.

### 2.11.0

- Adds new [Button Group](/components/button-group/) component which is designed to bring together button controls that are of a similar nature.
- Adds overlay for open navigation on small screens to improve the user experience.
- Use flexbox to push down the footer slot in Card component so they line up when used in a Stack or flexbox container. [See an example](/components/card/?example=with+aligned+footers).
- Add `sticky` header functionality to Layout component which allows you to make the header fixed.
- Improves small checkbox alignment within Stack.
- Release date 15.11.2022.

### 2.10.0

- Simplifies [Date Picker](/components/date-picker/) by using Nord components ([Popout](/components/popout/), [Input](/components/input/), [Button](/components/button/), etc).
- Input component can now have slotted buttons in `start` and `end` slots (only icon buttons for now), [view an example](/components/input/?example=custom+button).
- `disallow-pattern` property added to input component, for disallowing certain characters using regex patterns, [view an example](/components/input/?example=disallow+pattern).
- Adds required indicator for form fields whenever `required` property is used, [view an example](/components/input/?example=required).
- Adds new `hide-required` property for opting out of the indicator when needed and when it just adds visual noise ([useful for login forms and similar](/templates/sign-in/)).
- Adds [new usage examples](/components/input/?example=custom+width) about various width possibilities for Input component.
- We’ve added more clear [guidelines on the icon usage inside buttons](/components/button/#icon-usage-in-button) as there’s been lots of questions about this and we’ve noticed inconsistent use of icons and how they’re positioned.
- We’ve added a new [error Toast usage example](/components/toast/?example=error).
- Bug fix: We now reset the option element text color inside [Select](/components/select/) so that it reverts to native settings on all browsers.
- Bug fix: We’ve fixed a bug where scrollbar controller did not properly clean up after itself if multiple modals were open.
- Release date 31.10.2022.

### 2.9.0

- Adds new [Range component](/components/range), documentation and examples.
- Makes `FormAssociatedMixin` support additional content inside label.
- Release date 26.10.2022.

### 2.8.2

- Makes it possible to adjust the background color of Layout component via CSS Custom Properties.
- Fixes the Nav Toggle container positioning in Layout component.
- Release date 24.10.2022.

### 2.8.1

- Adds new `navigation-timeline` icon to [Nordicons](/icons/).
- Add a new CSS Custom Property to adjust the max size of a tooltip. [See demo](/components/tooltip/?example=tooltip+with+custom+size).
- Adds new icon usage guidelines for [button component](/components/button/#icon-usage-in-button).
- Add flex-wrap to card header and header-end slot.
- Adds new [card example with header actions](/components/card/?example=with+header+actions).
- Improves documentation for `ToastGroup.addToast` helper function.
- Adds usage guidelines about not nesting cards inside cards or drawers.
- Fix slot controller to only consider direct descendants when deciding whether a slot has content or not.
- Release date 20.10.2022.

### 2.8.0

- Adds support for multiple [modals open at once](/components/modal/?example=multiple+modals).
- Creates a stack of open modals, ensuring focus is trapped in the topmost modal.
- Makes it possible to add a custom icon into the [Select component](/components/select/?example=custom+icon) before the current value label.
- We now hide the [switch button variant](/components/button/?example=clinic+switcher) dropdown icon if a `href` has been set on the button.
- We’ve adjusted the initials text size in [Avatar component](/components/avatar/) to better fit the characters in.
- Updates the [Avatar component](/components/avatar/) examples, the smallest version with initials shouldn’t use two letters.
- Release date 4.10.2022.

### 2.7.0

- Adds new [Nav Toggle component](/components/nav-toggle/), examples and related documentation.
- Adds new `nav-toggle` slot to [Layout component](/components/layout/).
- **Deprecates** `nav-toggle` attribute on [Layout component](/components/layout/) while maintaining backwards compatibility for now.
- [Layout component](/components/layout/) will now render its own Nav Toggle internally *unless*:

  - Old `nav-toggle` attribute is supplied.
  - Something is slotted into the new `nav-toggle` slot.
- We’ve further improved position of icons in [Button component](/components/button/).
- Adds new `anchor` property to the [Popout](/components/popout/), which takes the string of the ID you want the popout or dropdown to position against. Ideal for complex component groups.
- Adds `variant` property with `square` as a new option for [Avatar component](/components/avatar/).
- Adds `s` size option to `size` property for [Avatar component](/components/avatar/).
- Allows for initials to be added into the main slot of [Avatar component](/components/avatar/?example=square+with+initials), which replaces the fallback icon when set.
- Adds public and private custom properties to allow for more fine tune control over the [Avatar component](/components/avatar/).
- Adds public custom property for adding color to the [Avatar component](/components/avatar/) fallback, `--n-avatar-color`.
- Replaced instances of the `n-clinic-icon` usage with the new square [Avatar component](/components/avatar/).
- Updates the Switch Button variant so it comes with the dropdown icon by default in the end slot.
- Release date 4.10.2022.

### 2.6.1

- Simplify [Drawer component](/components/drawer/) usage examples.
- Release date 28.9.2022.

### 2.6.0

- Adds new [Drawer component](/components/drawer/), documentation, and examples.
- At small screen sizes, the Drawer component opens on top of the content. At larger screen sizes, the component pushes the content towards left. The current breakpoint for this behaviour is 1240px.
- Layout component gets a [new example](/components/layout/?example=drawer) that shows how to integrate the Drawer component.
- [Popout component](/components/popout/) gets a new overlay in this release for smaller screens so that it’s easier to close by tapping outside.
- [Popout component](/components/popout/) gets a new `open` property that controls whether the popout is open or not.
- We’ve improved Popout’s performance by avoiding doing work if popout is closed.
- We’ve improved the positioning of `xs` sized icons inside [Button component](/components/button/).
- Navigation sidebar is now hidden in the [Layout component](/components/layout/) if nothing is passed into the slot.
- [Tooltip component](/components/tooltip/) has been improved and now closes more reliably after a click.
- Release date 27.9.2022.

### 2.5.0

- Adds new `--n-button-background-color` CSS Custom Property for the Button component that allows developers to control the [background color of the button](/components/button/?example=custom+background&theme=nord), using [color tokens](/tokens/).
- Release date 27.9.2022.

### 2.4.0

- Adds new `xs` (10px) and `xxs` (8px) icon sizes which are replacements for the old `xs` size. This is a non-breaking change so no actions are required from your side.
- This is done to improve the rendering of our smallest icons since they now align with the [pixel grid used for icons](/design/foundations/iconography/).
- Release date 16.9.2022.

### 2.3.0

- Adds support for `small` and `large` sizes for the [Input component](/components/input/?example=size&theme=nord).
- Adds support for `small` and `large` sizes for the [Textarea component](/components/textarea/?example=size&theme=nord).
- Adds support for `small` and `large` sizes for the [Checkbox component](/components/checkbox/?example=size&theme=nord).
- Adds support for `small` and `large` sizes for the [Date Picker component](/components/date-picker/?example=size&theme=nord).
- Adds support for `small` and `large` sizes for the [Select component](/components/select/?example=size&theme=nord).
- Adds new usage examples for all components with new `size` property.
- Updates [row selection table example](/components/table/?example=row+selection&theme=nord) to use correct size Checboxes (small).
- Release date 15.9.2022.

### 2.2.0

- Adds new examples in both Vue and React showing how to combine Tanstack Table and AG Grid with Nord Design System, in order to build a table with sorting, resizable columns, draggable and re-orderable columns, plus sticky/pinned columns. See the updated [Table component](/components/table/) docs and examples.
- Improves [Table component](/components/table/) CSS injection so it works inside Shadow DOM.
- Improves [Table component](/components/table/) styles when used in a Card component without a header.
- Adds column sorting styles to [Table component](/components/table/).
- Adds documentation for more advanced [Table component](/components/table/) use cases.
- Removes our `deprecated` CEM plugin since it’s now natively supported.
- Makes it possible to have external examples for components.
- We’ve created a new [GitHub repository](https://github.com/nordhealth/advanced-table-examples){rel="[\"nofollow\"]"} with Vue and React table examples.
- Release date 13.9.2022.

### 2.1.0

- Adds new animal category icons: `generic-suidae`, `generic-sheep`, `generic-rodents`, `generic-reptilia`, `generic-leporidae`, `generic-fish`, `generic-feline`, `generic-equidae`, `generic-cattle`, `generic-canine`, `generic-birds`, `generic-arachnida`, `generic-amphibia`.
- Changes `medical-insurance` icon from “a hand holding a plus sign” to represent “a shield.”
- Improves `interface-dropdown-small` icon positioning.
- The small icon dimensions are changed from `11px` to `12px`.
- Release date 9.9.2022.

### 2.0.2

- Fixes an issue which caused the new `success` style of [Badge component](/components/badge/) to disappear.
- Improves visual screenshot diff tests and their accuracy.
- Release date 9.9.2022.

### 2.0.0

- With the new `2.0.0` release, all Nord’s Web Components are out of `draft` status and production ready.
- Our Web Components now offer CSS custom property API to allow for fine grained control over their presentation. These aren’t offered as an alternative to [properties](/docs/developer/web-components/#properties), you should use properties whenever possible, but more as an “escape hatch” for when a component needs to meet an edge case. For more details, please see [migration guidelines](/migrations/2.0.0/).
- We’ve redesigned the underlying color system to make it more extensible and better cover the use cases of our different products. For more details, please see [migration guidelines](/migrations/2.0.0/).
- This release changes the way our Badge component works. The main difference is that we’ve switched away from white badges with tiny circular indicators to more noticeable badge style with colored background. For more details, please see [migration guidelines](/migrations/2.0.0/).
- [Button component](/components/button/) now automatically sets the correct icon color for each style variant so that you don’t have to do this manually anymore. We’ve done this to improve the developer experience and simplify the usage. This is a non-breaking change and requires no changes from your side.
- Makes [Table component](/components/table/) have slightly tighter spacing by default to fit more data into view.
- We’ve switched to using the new status colors in [Avatar component](/components/avatar/).
- Adds new `neutral` and `progress` styles for [Badge component](/components/badge/) and makes “neutral” the new default style.
- Adds many new [Badge component](/components/badge/) examples.
- Adds new visual style for [Banner component](/components/banner/).
- Updates all component usage examples to use correct new color styles.
- Adds 4 new progress icons for use with [Badge component](/components/badge/).
- Adds support for showing progress in [Badge component](/components/badge/).
- All component CSS Custom Properties have been updated to follow a “private” syntax.
- Any of those properties we want exposed have been opened up with a “public” property.
- Public properties have been documented and exposed in our docs site.
- Component styles have been updated to account for these changes.
- Tests adjusted from refactoring and custom property updates.
- Examples adjusted to account for new custom property names.
- Some refactoring in various components.
- Release date 7.9.2022.
- **For migration guidelines, please see [Migration to 2.0.0](/migrations/2.0.0/).**

[Migration guide to 2.0.0](/migrations/2.0.0/)

### 1.14.3

- Handles case where Layout’s `nav-toggle` element may get replaced in SPA contexts due to route changes.
- Improves z-index stacking for active Nav Items to avoid overlap.
- Remove `MediaQueryListener`, merge functionality into `EventListener`.
- Small clean up to use `EventListener` in Popout and Layout components.
- Switch to using Icon component internally in Select component.
- Adds try/catch to our storage utility to avoid issues where `localStorage` is not available.
- Adds new [Card component example with sections](/components/card/?example=with+sections).
- Release date 29.8.2022.

### 1.14.2

- Fixes a bug in the [Button component](/components/button/) that in some cases could cause an infinite loop.
- Adds new `medical-insurance` icon.
- Release date 24.8.2022.

### 1.14.0

- Adds new `size` option for Dropdown component with new optional `s`, `m` and `l` sizes. [See an example](/components/dropdown/?example=size).
- Makes Dropdown component better support varying content lengths by defining sensible min and max widths.
- Remove unnecessary min-inline-sizes from all [Dropdown Groups](/components/dropdown-group/) across the docs and examples.
- Adds new [Button with Dropdown](/components/button/?example=button+with+dropdown) example under Button component.
- Make [Banner component](/components/banner/) respect CSS Framework’s spacing utilities.
- Improve [Dropdown component examples](/components/dropdown/?example=size) to include correct dropdown icons in toggles.
- Switch to using correct size tokens for Select component icon instead of random values.
- Updates all Node.js dependencies including Lit to the latest versions.
- Release date 17.8.2022.

### 1.13.1

- Adds support for `null` as parent value in [Command Menu](/components/command-menu/).
- Release date 12.8.2022.

### 1.13.0

- Adds new property to control `loading` state for Button. [See example](/components/button/?example=loading).
- Adds two new examples for Button to show [how loading state works](/components/button/?example=loading) and [how to utilize it](/components/button/?example=loading+interactivity).
- Removes old Spinner Button examples and creates [new updated examples](/components/button/?example=loading) under the Button itself.
- Improves [Popout component’s examples](/components/popout/?example=tabs+in+popout).
- Improves [Spinner component’s](/components/spinner/) positioning. Spinner doesn’t anymore try to absolute position itself inside a container. With this change, we’ve also added a new example which shows you how to achieve the old positioning behaviour if you need it: [view an example](/components/spinner/?example=position).
- Release date 11.8.2022.

### 1.12.0

- Adds new [row selection example](/components/table/?example=row+selection) for the Table component with the capability to select/deselect all rows via a global checkbox selection.
- Adds new [striped style variant](/components/table/?example=striped) for the Table component.
- Improves Table component’s responsive behavior. Overflow behaviour has been moved from Card component to Table component and we’ve tweaked the padding of each table cell to fit more content and align better with surrounding elements.
- Adds new [scroll snap feature](/components/table/?example=scroll+snapping) for the Table component.
- Adds new `header-end` slot to [Card component](/components/card/).
- Adds `interface-grabber`, `interface-grid`, `interface-sort-small`, `interface-sort-up-small` and `interface-sort-down-small` icons.
- Release date 10.8.2022.

### 1.11.1

- Adds `indeterminate` state to [Checkbox component](/components/checkbox/?example=indeterminate).
- Improves and simplifies the usage of z-index design tokens across all components.
- Release date 4.8.2022.

### 1.10.0

- Adds new [QR Code component](/components/qrcode/) and documentation.
- Adds `readonly` property to `input` and `textarea` components.
- Adds `autocomplete` property to `input`, `textarea`, and `select` components.
- Improves table component’s documentation and examples.
- Release date 2.8.2022.

### 1.9.1

- Fixes [Select component](/components/select/?example=disabled) disabled style to match [Input component](/components/input/?example=disabled) disabled style.
- Release date 30.6.2022.

### 1.9.0

- Adds new [Toast component](/components/toast/) and documentation.
- Adds new [Toast Group component](/components/toast-group/) and documentation.
- Adds new [Divider component](/components/divider/) and documentation.
- Improves how [Badge component](/components/badge/) wraps in Chrome browser.
- Changes [Layout component](/components/layout/) to not use absolute positioning.
- Fixes [Modal component](/components/modal/) z-index issue.
- Improves [Modal component’s](/components/modal/) body/scrollbar lock behaviour.
- Adds `show()` / `hide()` methods to [Dropdown component](/components/dropdown/).
- Adds improvements to [Application template](/templates/application/):

  - Adds confirm modal for delete actions in table.
  - Uses toasts throughout for messaging.
- Removes `expand` property from the following components which didn’t utilize it:

  - Toggle
  - Checkbox
  - Radio
- Release date 30.6.2022.

### 1.8.3

- Fixes React/Vue issue whereby updating the text of Button component after first render causes the proxy button to be removed (this is due to aggressive DOM reconciliation by the frameworks).
- Make sure users can use the scroll the [Navigation component](/components/navigation/) contents while the nav resize toggle is present (we’ve moved this more towards right while removing overflow hidden to allow the user to hover this outside of the edges a little).
- Makes resizing of Navigation sidebar easier as you don’t have to be so exact anymore.
- Makes sure badges show up when text does not fit into the [Nav Item component](/components/nav-item/?example=with+badge). Previously if an item’s text didn’t fit into the Nav Item, the badge got pushed out of the screen and did not show at all.
- Fixes an issue which caused the [Layout component](/components/layout/) resize functionality to break the layout in Safari when using keyboard only.
- Removes custom scrollbar and unnecessary shared component styles from [Navigation component](/components/navigation/).
- Refactors the [Tab Group](/components/tab-group/) list overflow scrolling shadow effect and fixes support for right to left scrolling.
- Account for flex gap in [Tab Group](/components/tab-group/) overflow shadows.
- Use box shadows instead of gradients to reveal overflow shadows in [Tab Group](/components/tab-group/).
- Fixes the [Tab Group](/components/tab-group/) component sticky header background.
- Minor adjustments to the [Tab Group](/components/tab-group/) shadow positioning, and accounting for scrollbar.
- Fixes right to left support for [Tab Group](/components/tab-group/).
- Release date 27.6.2022.

### 1.8.2

- Adds two new high contrast [Nord themes](/design/themes/).
- Hide `overflow-y` in Tab Group, prevent scrollbar on mousedown.
- Fix issue with Select component where wrong item would be selected in Safari.
- Release date 21.6.2022.

### 1.8.0

- Adds new padding property and examples for [Layout component](/components/layout/).
- Adds new [Tabs template](/templates/) to demonstrate how the tabs can be used in an application view.
- Adds more [Tab Group component](/components/tab-group/) usage examples.
- Adds more [Layout component](/components/layout/) usage examples.
- Improves the padding property of [Tab Group component](/components/tab-group/).
- Improves the sticky property of [Tab Group component](/components/tab-group/).
- Makes it possible to use tabs inside of [Layout component](/components/layout/) without extra space.
- Release date 17.6.2022.

### 1.7.0

- Adds new [Tab Group component](/components/tab-group/) and related examples.
- Adds new [Tab component](/components/tab/) and related examples.
- Adds new [Tab Panel component](/components/tab-panel/) and related examples.
- Adds new [Skeleton component](/components/skeleton/) and related examples.
- Nav Item badges have a new redesigned position and it’s now possible to have a badge in any item, including ones with sub items. [View an example](https://nordhealth.design/components/nav-item/?example=with+badge){rel="[\"nofollow\"]"}.
- Updates all component package dependencies including Lit and Floating UI Dom.
- Makes sure all `:host` elements have `box-sizing: border-box` set by default.
- Fixes Dropdown import of the Popout component.
- Release date 16.6.2022.

### 1.6.1

- Fixes font-sizing in [Nav Group component](/components/nav-group/).
- Release date 14.6.2022.

### 1.6.0

- Adds new [Modal component](/components/modal/) and related examples.
- Adds new prefix and suffix support for [Input component](/components/input/?example=with+a+prefix+or+suffix).
- Adds new re-designed destructive style for [Button component](/components/button/).
- Adds support for `form` attribute in Button and other form components.
- Switches to using REM based font-sizes instead of pixels for better accessibility.
- Moves [Toggle component](/components/toggle/) out of draft status.
- Moves common font-size rules from components to shared CSS.
- Improves “enter to submit” behaviour in [Input component](/components/input/).
- Refines Button’s transition styles to only include what is necessary rather than all.
- And other performance improvements and bug fixes.
- Release date 14.6.2022.

### 1.5.1

- Currently there is some friction when using our components in a Next.js app. It’s possible to overcome these issues yourself, but to make the process easier this version now offers specialized integration for Next.js. Please see [updated usage guidelines for React](https://nordhealth.design/web-components/#disabling-server-side-rendering-within-next.js){rel="[\"nofollow\"]"}.
- Restructures `@nordhealth/react` build process.
- Release date 6.6.2022.

### 1.5.0

- Adds new [Toggle component](/components/toggle/), updated examples, and new documentation.
- Release date 24.5.2022.

### 1.4.0

- Adds new `switch` Button component style variant which is reserved for the clinic switcher in the top left corner of an application.
- Simplifies all Button, Navigation and Layout component examples by removing all custom CSS.
- Simplifies all templates by removing most custom CSS.
- Moves previous custom clinic icons from components into the CSS Framework.
- Release date 20.5.2022.

### 1.3.0

- We’re deprecating `health-light`, `health-dark`, `vet-light` and `vet-dark` themes to simplify and unify Nordhealth’s branding for all digital products.
- The components have now been tested on React 18 as well, so we’ve extended the React peer dependency range to `>= 17`.
- Support for right-to-left languages has been improved.
- [Navigation](/components/navigation/) can now be resized and the size is saved to `localStorage` for the user, no need for your team to do any work to support this, it’ll remember the settings itself.
- [Navigation](/components/navigation/) and [Layout](/components/layout/) components now support resizing and hiding/showing with multiple different methods which should provide a lot of flexibility for our users in the future:

  - Using mouse/touch gesture to drag it to hidden state and hover to reveal for quick access and tap/click to show permanently.
  - Using keyboard `tab` + `arrow left` and `arrow right` keys users can resize which improves accessibility. Also supports `home` and `end` keys to minimize/maximize the width via keyboard.
  - Using the command menu you can set a hotkey for toggling the navigation menu.
  - Using keyboard shortcut to show and hide it.
  - On smallest viewports it’s hidden by default and can be revealed via the hamburger menu by tapping it.
  - You can try all these things in our [Application example template](/templates/application/){target="_blank"}.
- Fixes coverage report not being generated from Docker container.
- Improves focus styles for Clinic Switcher in all examples.
- Improves the usage examples for Navigation component and templates.
- Layout component has a new `navOpen` property for controlling whether the navigation is hidden off-screen or not. Defaults to `true` for wide viewports, and `false` otherwise.
- Layout component has a new `navToggle` property that is used reference an element that should toggle the navigation.
- Adds `drag(start, end)` command to existing mouse plugin for tests.
- Adds `MediaQueryController` for hooking easy integration of `matchMedia` plus listeners into component.
- Adds truncation to heading text in Nav Group component.
- Adds custom scrollbar styling for Navigation component.
- Provides `:focus` fallback for environments where `:focus-visible` is not supported.
- Fixes warning logged by Command Menu, no need to treat any action as selected if command menu is not open.
- Includes also small generic performance and bug fixes.
- Release date 20.5.2022.

### 1.2.0

- You can now control the breakpoint of a responsive [Stack component](/components/stack/).
- We’ve deprecated Stack component’s previous `responsive` property and will remove it in a future version. We recommend using standard [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries){rel="[\"nofollow\"]"} over this old property. Please see the [updated usage example](/components/stack/?example=using+responsive+media+query).
- We’ve switched to using `matchMedia` instead of `ResizeObserver` to check the viewport size in Popout component.
- Changes `x` and `y` properties in Popout to have convention prefix and clearer names.
- Updates visual presentation of deprecated component properties in docs.
- We now show vertical scrollbar in Dropdown component only when the content requires it (if it does not fit into the available vertical space).
- Release date 12.5.2022.

### 1.1.2

- Introduces new style for dropdowns and popouts on small viewports where they slide out from the bottom of the viewport.
- Moves all visual diff tests to run inside a Docker container.
- Sets a specific width to text inputs for consistency across browsers.
- Uses box-sizing to make the Date Picker input the same size on Chrome and Safari.
- Switch to using `esnext` esbuild config.
- Release date 12.5.2022.

### 1.0.1

- Makes `condensed` table style more condensed.
- Fix issue in `getMonthNames` that caused February to disappear from month dropdown.
- Update dependencies to remove workaround for TS files in test/dev servers.
- Use `cond` directive instead of `ifDefined`.
- Improve typing for fsm, now TypeScript will complain about any incorrect states.
- Adds observe decorator to simplify reacting to property changes.
- Removes redundant assignments from class constructors.
- Release date 2.5.2022.

### 1.0.0

- Official production release of `@nordhealth/components` and `@nordhealth/react`!!! 🎉
- **For migration guidelines, please see [Migration to 1.0.0](/migrations/1.0.0/).**
- **For documentation and usage guidelines, please see [Web Components](/docs/developer/web-components/).**
- **For documentation about localization, please see [Localization guidelines](/docs/developer/localization/).**
- Comes with many new production ready components such as: [Progress Bar](/components/progress-bar/), [Dropdown](/components/dropdown/), [Dropdown Group](/components/dropdown-group/), [Dropdown Item](/components/dropdown-item/), [Popout](/components/popout/) and [Header](/components/header/).
- We’ve renamed `action` slot in header to `end` to match the naming conventions we use elsewhere.
- We’ve set `stretch` as the default `align-items` option for Stack component.
- We’ve added `baseline`, `space-between`, `space-around` and `space-evenly` options for `justify-content` property in Stack component.
- Make sure the `align-items` property always defaults to `stretch` for [Stack component](/components/stack/).
- Make sure [Dropdown Item](/components/dropdown-item/) contents stay on one line and get truncated if too long to fit into the available space.
- Improve [Dropdown component’s](/components/dropdown/) close-on-blur behavior in Safari.
- Marks `shadowRootOptions` in Dropdown as internal to hide it from the public docs.
- Make sure we properly handle unknown icon names in [Icon component](/components/icon/) when loading from CDN.
- Removes gradients from primary buttons across all themes.
- Make sure disabled [Input component](/components/input/) always has the correct border color, no matter which element is hovered.
- Adds new `xxl` size for [Avatar component](/components/avatar/).
- Makes [Card component](/components/card/) better support Stack where cards have the same size.
- Adds support for `space-between`, `space-around` and `space-evenly` justification for [Stack component](/components/stack/).
- Adds new `responsive` property for [Stack](/components/stack/) which allows you to stack contents automatically when the viewport goes under certain threshold.
- Adds new `wrap` property for [Stack](/components/stack/) which defines whether the Stack items are forced in a single line or can be flowed into multiple lines.
- Adds many new [Stack usage examples](/components/stack/).
- Fixes icon component’s sizing when used inside a flex container.
- Adds new [Profile template](/templates/) into documentation.
- Make sure the heading in Dropdown Group stays on one line and gets shortened if really long.
- Converts [border colors in all themes](/tokens/?theme=nord) to be stronger to create a more finished look.
- Adds new less prominent default, card and header [box shadows](/tokens/#box-shadow) for all themes and additionally improves their legibility by adding a surrounding gray surface area.
- Adds call `toString()` on [Select component’s](/components/select/) value, for convenience when options are numbers.
- Adds `LocalizeController` for use in components.
- Exposes `registerTranslation` function for use in apps.
- Extracts all localized strings from components and gathers them in a translation file.
- Adds new [Localization guidelines](/docs/developer/localization/) into docs under “guidelines” section.
- When using our [React components](/docs/developer/web-components/#react), the types for event handlers no longer need to be defined like this:
```tsx
// TS complained unless you had a union of both types
function handleChange(e: FormEvent | Event) {}
<Input onChange={handleChange} />
```


Now you can define them as:
```tsx
function handleChange(e: Event) {}
<Input onChange={handleChange} />
```
- Fixes positioning of [Popout component](/components/popout/) when nested.
- Fixes positioning of [Tooltip component](/components/tooltip/) when nested.
- Fixes Popout component positioning when opening for the first time.
- Removes empty space when Popout component is added into a view.
- Hides Dropdown if focus moves elsewhere (improving keyboard accessibility).
- We now hide [Tooltip component](/components/tooltip/) on click.
- Tweaks tooltip timings: longer delay to activate, shorter transition times.
- Add new dropdown examples to [application template](/templates/application/).
- Prevent auto scrolling when returning focus to [Popout component](/components/popout/) trigger.
- Prevent Popout hide/show logic if already in closed or open state.
- Use `:focus-visible` to [Navigation](/components/navigation/) component to improve mouse user experience.
- Adds better disabled day styles for [Calendar](/components/calendar/) component.
- Adds new `expand` property for [Calendar](/components/calendar/) component.
- Adds various new usage examples for [Calendar](/components/calendar/) component.
- Adds better [Navigation](/components/navigation/) component examples to documentation.
- Removes extra spacing from [Select](/components/select/) component icons since these are no longer needed.
- Adds new [clinic switcher](/components/dropdown/?example=clinic+switcher) example for Dropdown component.
- Makes sure hover text color is always correct for slotted contents in [Dropdown Item](/components/dropdown-item/) component.
- Adds performance improvements to [Popout](/components/popout/) component by only running `autoUpdate` functionality when the popous is open.
- Improves [Popout](/components/popout/) component’s automated tests.
- Fixes [Command Menu](/components/command-menu/) font-size bug which caused icons to show in a wrong position.
- Release date 13.4.2022.
[Migration guide to 1.0.0](/migrations/1.0.0/)

### 1.0.0-rc.1

- Initial release candidate of `@nordhealth/components`.
- For documentation and usage guidelines, please see [Web Components](/docs/developer/web-components/).
- Comes with 5 new components: [Progress Bar](/components/progress-bar/), [Dropdown](/components/dropdown/), [Dropdown Group](/components/dropdown-group/), [Dropdown Item](/components/dropdown-item/), and [Popout](/components/popout/).
- We now map logical to physical properties in tooltip and popout, ensuring correct animations in RTL mode.
- We now use correct chevron icon in command menu in RTL mode.
- Tooltip now uses logical positions to better support RTL mode.
- Adds support for `aria-expanded` to button component.
- Adds support for `aria-haspopup` to button component.
- Release date 31.3.2022.

### 1.0.0-beta.24

- Allow multiple elements to use the same tooltip component.
- Fixes event targets to allow removal of event listeners.
- Restructures mouse command API and adds hover command.
- Fixes to automated test suite.
- Updates Nord CSS Framework to latest.
- Release date 30.3.2022.

### 1.0.0-beta.21

- Renames `before` and `after` slots to `start` and `end` in each component.
- Fixes a CSS bug with Input component slotted icons.
- Fixes an issue caused by `rollup-plugin-summary` npm package.
- Release date 29.3.2022.

### 1.0.0-beta.20

- Adds new Progress Bar component and related documentation.
- Bug fixes to Radio component’s styles.
- Moves Spinner component out of draft state.
- Adds fixes to visual regression tests.
- Release date 29.3.2022.

### 1.0.0-beta.19

- Adds new `line-height-caption` token.
- Release date 19.3.2022.

### 1.0.0-beta.18

- Adds new `color-text-success` token.
- Release date 17.3.2022.

### 1.0.0-beta.17

- Rename Calendar's `nord-select` event to `change`.
- Add `nord-focus-date` event to calendar.
- Ensure documentation for calendar and date picker is correct.

### 1.0.0-beta.16

- Fixes an issue which prevented programmatically unchecking a checkbox after it was manually checked.
- Release date 15.3.2022.

### 1.0.0-beta.15

- We’re renaming `color-primary` to `color-accent` to better support our [themes](/design/themes/).
- We’re renaming `color-text-inverse` to `color-text-on-accent` to better support our [themes](/design/themes/) and better explain where the color should be used.
- Release date 14.3.2022.

### 1.0.0-beta.14

- Adds new “justify-content” property for Stack component.
- Fixes the expand sizing for Select and Input components to respect 100% width.
- To improve usability, make the placeholders have more contrast against actual text content.
- Make sure Nord’s CSS Framework reset utility helper doesn’t break Radio component styles.
- Improve Avatar component’s theming support.
- Improve Tooltip component’s theming support.
- Release date 13.3.2022.

### 1.0.0-beta.13

- We’re removing `color-primary-strong` token from the system as it was only referenced in one location.
- Release date 12.3.2022.

### 1.0.0-beta.12

- Fix all button component hover styles.
- Adds the ability to prevent command menu opening.
- Release date 11.3.2022.

### 1.0.0-beta.11

- Updates correct statuses for all components to reflect their working state.
- Improves Date Picker component test automation.
- Improve behavior of button when placed in stack.
- Make sure we only show button hover styles when actual button is hovered.
- Release date 10.3.2022.

### 1.0.0-beta.8

- Adds new Avatar component.
- We fixed a bug related to form events where the user might’ve previously got double events: the native one, and the one we dispatch ourselves. This is now fixed.
- Adds two new icons into Nordicons: `interface-info` and `interface-warning`.
- Release date 9.3.2022.

### 1.0.0-beta.6

- Adds support for no shadow variant in Banner component.
- Adds responsive functionality into Layout component.
- Fix icon import in Checkbox component.
- Various bug fixes and performance improvements.
- Release date 7.3.2022.

### 1.0.0-beta.4

- Fixes Banner component layout bugs.
- Release date 5.3.2022.

### 1.0.0-beta.3

- Adds new Banner component.
- Adds new `interface-info` icon.
- Adds new weak status colors into tokens.
- Release date 5.3.2022.

### 1.0.0-beta.2

- Adds new Empty State component.
- Release date 5.3.2022.

### 1.0.0-beta.1

- Adds new draft Layout component.
- Adds links styles into base components.
- Release date 5.3.2022.

### 1.0.0-beta.0

- Make sure Radio component styles work with Provet.
- Make sure Checkbox component styles work with Provet.
- Make sure common FormField component styles work with Provet.
- Fix all style issues discovered in Diarium testing.
- Fixes an issue which caused nested stacks to not respect default medium space.
- Release date 4.3.2022.

### 1.0.0-alpha.59

- Redesigned dark gray shades for Vet and Nord dark themes.
- Updates `medical-bandage`, `medical-blood`, `medical-instrument-stethoscope`, `medical-pill` and `medical-radiology-scan` to match the style of the rest of the icons.
- Adds new `interface-content-book` icon.
- Release date 3.3.2022.

### 1.0.0-alpha.57

- Add a single file output for Web Components to be used on documentation website.
- Release date 1.3.2022.

### 1.0.0-alpha.56

- Adds bug fixed to Tooltip component’s styles.
- Release date 26.2.2022.

### 1.0.0-alpha.55

- Adds new `@nordhealth/react` output that contains auto-generated React wrappers for the web components found in `@nordhealth/components`.
- The versioning of our new React components follow the same versioning as Web Components (this package).
- Updates licensing and package.json details.
- Release date 24.2.2022.

### 1.0.0-alpha.54

- Adds new [Navigation](/components/navigation/) component that is used to display the primary navigation in the sidebar of an application.
- Adds new [Navigation Group](/components/nav-group/) component that is used for grouping navigation items into related categories.
- Adds new [Navigation Item](/components/nav-item/) component that populates sidebar navigation with links.
- Adds tweaks to Tooltip component:

  - Improve accessibility when tooltip is “attached” to focusable web component.
  - Ensure only one tooltip shown at a time.
  - Fix z-index issues with tooltip.
  - Adds ability to dismiss tooltip with Esc.
- Header component now has a min-height to match the navigation sidebar.
- When button is used as a disabled link, it’s now removed from tab order and correctly reported as disabled to screen readers.
- We’ve improved the primary button variant focus styles.
- Adds support for button component to customize the background gradient via CSS custom properties.
- Improve Tooltip component text wrapping.
- Release date 23.2.2022.

### 1.0.0-alpha.51

- Ensure we always see slotchange events.
- Use common component styles for all input components, remove redundant styles from FormField.css.
- Release date 18.2.2022.

### 1.0.0-alpha.49

- Changes Command Menu `hotkeys` property to `shortcuts`.
- Add font size and color to header component.
- Improves margin handling for Fieldset component.
- Fixes Checkbox component to use correct border radius.
- Updates all components to use common component CSS reset.
- Various other bug fixes and performance improvements.
- Release date 17.2.2022.

### 1.0.0-alpha.48

- Adds new [Header](/components/header/) component that provides designated space for labelling the currently viewed context as well as providing primary actions.
- Add labels to icons in Button component usage examples.
- Updates all library dependencies and migrates to Stylelint 14.
- Release date 11.2.2022.

### 1.0.0-alpha.47

- Adds new [Radio](/components/radio/) component that allow user to choose only one option from a predefined set of mutually exclusive options.
- Adds new [Fieldset](/components/fieldset/) component that is used for grouping sets of input components.
- Adds new [Tooltip](/components/tooltip/) component that is used for displaying additional information for the currently focused element.
- Improves button components default and disabled styles.
- Improves date picker’s default and disabled styles.
- Fixes text color for current date in date picker.
- Improves checkbox component’s cursor styles.
- Makes it possible to also click on an empty area between checkbox and label to toggle checked state.
- We now use repeat directive to properly handle re-ordering of years in Calendar.
- We’ve fixed a bug in form components to ensure disabled styles are always correctly applied.
- We’ve fixed a bug with font-families in certain form components like date picker and checkbox.
- We’ve made components documentation support usage and content guidelines.
- We’ve tweaked styles to properly handle default prop values where attr is missing.
- We’ve improved Checkbox component’s disabled styles in this release.
- Release date 8.2.2022.

### 1.0.0-alpha.46

- Adds new [Checkbox](/components/checkbox/) component that allows user to choose one or more options from a limited set of options.
- Release date 14.1.2022.

### 1.0.0-alpha.45

- Adds new [Calendar](/components/calendar/) component that allows user to pick a date.
- Adds new [Date Picker](/components/date-picker/) component that allows user to enter a date either through text input, or by choosing a date from the calendar.
- Adds reusable swipe controller.
- Adds reusable language direction controller.
- Release date 13.1.2022.

### 1.0.0-alpha.43

- Add input event for all form components.
- Improve how proxy button is added to DOM (now uses Lit’s renderer, rather than imperative code).
- Add support for submitting form by hitting enter key in input field.
- Improve card `with-form` example to use submit event.
- Release date 13.12.2021.

### 1.0.0-alpha.42

- We’ve moved labels closer to form elements to make forms more legible.
- Adds new [card component form usage examples](/components/card/?example=with+form).
- Adds new [example about form validation](/components/card/?example=with+form).
- Fixed background color tokens used in docs examples.
- Release date 11.12.2021.

### 1.0.0-alpha.41

- Adds new spinner component and related examples.
- Fixes select component’s appearance in Firefox.
- Release date 10.12.2021.

### 1.0.0-alpha.39

- Prevents spellcheck in Input.
- Fixes an issue which caused textarea to animate size.
- Adds new icon usage example for button component.
- Fixes icon hover colors for button component.
- Release date 10.12.2021.

### 1.0.0-alpha.38

- Adds new textarea component.
- Adds new common form component utilities.
- Release date 9.12.2021.

### 1.0.0-alpha.37

- Improved usage examples for all components.
- New large button size introduced.
- New danger button variation introduced.
- Generic CSS fixes to components.
- Release date 9.12.2021.

### 1.0.0-alpha.36

- Adds new command menu component.
- Adds `all: initial` for all components.
- Makes sure components don’t break because of CSS cascade.
- Release date 7.12.2021.

### 1.0.0-alpha.32

- Adds new input component and related functionality.
- We now warn in console if you try to use draft components in production environment.
- Adds custom gap option for Stack component.
- Removes default pointer cursor from table styles
- Adds custom focus outline to select and button components.
- Adds input hint to Select.
- Spacing between different form components is made consistent.
- Adds new align-items property for Stack.
- Release date 1.12.2021.

### 1.0.0-alpha.31

- Adds new Table, Badge and Card components.
- Adds new `target` property for Button component.
- Not ready for production usage.
- Release date 20.10.2021.

### 1.0.0-alpha.29

- Updates Nord package dependencies to latest.
- Changes select component to use official Nordicon icons.
- Makes button component support `download` attribute when it is used as a link.
- Makes button component support the new `currentColor` functionality in Nordicons.
- Not ready for production usage.
- Release date 17.10.2021.

<!--
Source: https://nordhealth.design/raw/changelogs.md
-->
