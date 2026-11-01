---
name: nord-full
description: Nord Design System — comprehensive documentation including all components, design guidelines, tokens, CSS framework, and migration guides. Use when working with `<nord-*>` components, design tokens, forms, or layouts.
metadata:
  author: Nordhealth
---

Nord Design System provides 129+ accessible, production-ready Lit web components (`<nord-*>` prefix), design tokens (CSS custom properties), Tailwind CSS v4 integration, two brands (therapy/veterinary) with dark mode and high-contrast variants. Framework-agnostic — works with React, Vue, Angular, Svelte, plain HTML.

## Components

| Component               | Description                           | Reference                              |
| ----------------------- | ------------------------------------- | -------------------------------------- |
| Web Components Overview | All component APIs, slots, and events | [components](references/components.md) |

| nord-accordion | Accordion is a set of collapsible sections, each with a header that toggles the visibility of its content. | [accordion](references/components/accordion.md) |
| nord-accordion-header | Accordion Header is the heading that labels an [Accordion Panel](/components/accordion-panel/). | [accordion-header](references/components/accordion-header.md) |
| nord-accordion-item | Accordion Item groups an [Accordion Header](/components/accordion-header/) and its [Accordion Panel](/components/accordion-panel/) within an [Accordion](/components/accordion/). | [accordion-item](references/components/accordion-item.md) |
| nord-accordion-panel | Accordion Panel holds the content revealed by its [Accordion Trigger](/components/accordion-trigger/). | [accordion-panel](references/components/accordion-panel.md) |
| nord-accordion-trigger | Accordion Trigger is the button that opens and closes its [Accordion Panel](/components/accordion-panel/). | [accordion-trigger](references/components/accordion-trigger.md) |
| nord-aside | Container for the right-side rail + drawer pattern in the app shell. | [aside](references/components/aside.md) |
| nord-aside-drawer | A drawer panel inside `<nord-aside>`. | [aside-drawer](references/components/aside-drawer.md) |
| nord-aside-trigger | Rail button that toggles a `<nord-aside-drawer>` inside `<nord-aside>`, or navigates like a link when `href` is set. | [aside-trigger](references/components/aside-trigger.md) |
| nord-autocomplete | Autocomplete is a free-text input with suggestions: the text the user types is itself the committed `value` (a string), and the options are completion aids. | [autocomplete](references/components/autocomplete.md) |
| nord-avatar | Avatar is used for showing a thumbnail representation of a single user or entity. | [avatar](references/components/avatar.md) |
| nord-badge | Badges are used to inform users of the status of an object or of an action that’s been taken. | [badge](references/components/badge.md) |
| nord-banner | Banner informs users about important changes or conditions in the interface. | [banner](references/components/banner.md) |
| nord-button | Buttons are used for interface actions. | [button](references/components/button.md) |
| nord-button-group | Button groups are designed to bring together button controls that are of a similar nature. | [button-group](references/components/button-group.md) |
| nord-calendar | Calendar allows user to pick a date. | [calendar](references/components/calendar.md) |
| nord-card | Cards are shadowed surfaces that display content and actions on a single topic. | [card](references/components/card.md) |
| nord-card-body | The main content region of a composed [Card](/components/card/). | [card-body](references/components/card-body.md) |
| nord-card-footer | The footer region of a composed [Card](/components/card/). | [card-footer](references/components/card-footer.md) |
| nord-card-header | The header region of a composed [Card](/components/card/). | [card-header](references/components/card-header.md) |
| nord-checkbox | Checkboxes allow user to choose one or more options from a limited set of options. | [checkbox](references/components/checkbox.md) |
| nord-collapsible | Collapsible is a disclosure that shows or hides a section of content. | [collapsible](references/components/collapsible.md) |
| nord-collapsible-panel | Collapsible Panel holds the content revealed by its [Collapsible Trigger](/components/collapsible-trigger/). | [collapsible-panel](references/components/collapsible-panel.md) |
| nord-collapsible-trigger | Collapsible Trigger is the interactive control that opens and closes its [Collapsible](/components/collapsible/) panel. | [collapsible-trigger](references/components/collapsible-trigger.md) |
| nord-combobox | Combobox lets users choose one option (or several) from a list by typing to filter, then picking with the keyboard or pointer. | [combobox](references/components/combobox.md) |
| nord-combobox-group | Groups declarative `<nord-combobox-option>` children under a heading inside a [Combobox](/components/combobox/): ```html <nord-combobox> <nord-combobox-group label="Frameworks"> <nord-combobox-option value="next">Next.js</nord-combobox-option> </nord-combobox-group> </nord-combobox> ``` Contained options inherit this `label` as their group. | [combobox-group](references/components/combobox-group.md) |
| nord-combobox-option | A declarative option for a [Combobox](/components/combobox/). | [combobox-option](references/components/combobox-option.md) |
| nord-command-menu | Command Menu allows users to navigate and use an app without touching the mouse and helps them transform into “power users” who can harness more advanced features far faster. | [command-menu](references/components/command-menu.md) |
| nord-date-picker | Date Picker allows user to enter a date either through text input, or by choosing a date from the calendar. | [date-picker](references/components/date-picker.md) |
| nord-date-range-picker | Date Range Picker lets people choose a start and end date as a single range, either from a built-in list of presets (Today, Last 7 days, This month, …) or from a range calendar. | [date-range-picker](references/components/date-range-picker.md) |
| nord-divider | Divider components are used to separate and distinguish sections of content or groups of menu items. | [divider](references/components/divider.md) |
| nord-drawer | Drawer is used to display context-sensitive actions and information. | [drawer](references/components/drawer.md) |
| nord-drawer-body | The main content region of a composed [Drawer](/components/drawer/). | [drawer-body](references/components/drawer-body.md) |
| nord-drawer-close | A standalone close control for a composed [Drawer](/components/drawer/). | [drawer-close](references/components/drawer-close.md) |
| nord-drawer-footer | The footer region of a composed [Drawer](/components/drawer/). | [drawer-footer](references/components/drawer-footer.md) |
| nord-drawer-header | The header region of a composed [Drawer](/components/drawer/). | [drawer-header](references/components/drawer-header.md) |
| nord-dropdown | Dropdown menu displays a list of actions or selectable options for a user. | [dropdown](references/components/dropdown.md) |
| nord-dropdown-group | Dropdown group includes all the actions or items in a single dropdown group and is used for grouping items into related categories. | [dropdown-group](references/components/dropdown-group.md) |
| nord-dropdown-item | Dropdown item populates dropdown with actions. | [dropdown-item](references/components/dropdown-item.md) |
| nord-dropdown-submenu | Dropdown submenu nests a secondary menu within a parent dropdown. | [dropdown-submenu](references/components/dropdown-submenu.md) |
| nord-empty-state | Empty state can be used when there is no data to display to describe what the user can do next. | [empty-state](references/components/empty-state.md) |
| nord-field | Field is the wrapper for a single form control. | [field](references/components/field.md) |
| nord-field-content | Field Content wraps a [Field Label](/components/field-label/) and [Field Description](/components/field-description/) so they stay aligned as a single text block, which is especially useful in horizontal [Field](/components/field/) layouts. | [field-content](references/components/field-content.md) |
| nord-field-description | Field Description is the helper or hint text for a [Field](/components/field/). | [field-description](references/components/field-description.md) |
| nord-field-error | Field Error displays validation error text for a [Field](/components/field/). | [field-error](references/components/field-error.md) |
| nord-field-group | Field Group stacks a set of [Field](/components/field/) controls vertically with consistent spacing. | [field-group](references/components/field-group.md) |
| nord-field-label | Field Label is the label for a control inside a [Field](/components/field/). | [field-label](references/components/field-label.md) |
| nord-field-legend | Field Legend labels a [Field Set](/components/field-set/), naming the group of fields for assistive technology. | [field-legend](references/components/field-legend.md) |
| nord-field-separator | Field Separator draws a thin divider between sections inside a [Field Group](/components/field-group/). | [field-separator](references/components/field-separator.md) |
| nord-field-set | Field Set groups related fields under a [Field Legend](/components/field-legend/) for semantic, accessible grouping. | [field-set](references/components/field-set.md) |
| nord-field-title | Field Title is an emphasized inline title used inside choice-card style [Field](/components/field/) layouts, where a [Field Label](/components/field-label/) wraps a whole selectable field. | [field-title](references/components/field-title.md) |
| nord-fieldset | Deprecated: for new code, group related controls with the composable Field family — see [grouping fields with Field](/components/field#radio). | [fieldset](references/components/fieldset.md) |
| nord-footer | The footer is a block of designated space for providing additional information or actions that are positioned below the main content. | [footer](references/components/footer.md) |
| nord-header | The header is a block of designated space for labelling the currently viewed context as well as providing primary actions. | [header](references/components/header.md) |
| nord-icon | Icons are used to provide additional meaning or in places where text label doesn’t fit. | [icon](references/components/icon.md) |
| nord-input | Inputs are used to allow users to provide text input when the expected input is short. | [input](references/components/input.md) |
| nord-input-group | Input Group composes exactly one Nord Input or Textarea with reusable add-ons while leaving the editable control, form state, and all consumer nodes owned by the consumer. | [input-group](references/components/input-group.md) |
| nord-input-group-addon | Positions reusable Nord content around the text control in an Input Group. | [input-group-addon](references/components/input-group-addon.md) |
| nord-item | Item is a flexible, composable row used to display a piece of content such as a person, a file or a setting. | [item](references/components/item.md) |
| nord-item-actions | Item Actions holds the trailing controls of an [Item](/components/item/), such as buttons or a chevron. | [item-actions](references/components/item-actions.md) |
| nord-item-content | Item Content holds the textual content of an [Item](/components/item/), typically an [Item Title](/components/item-title/) and an [Item Description](/components/item-description/). | [item-content](references/components/item-content.md) |
| nord-item-description | Item Description is the secondary, muted line of text in an [Item](/components/item/). | [item-description](references/components/item-description.md) |
| nord-item-footer | Item Footer spans the full width at the bottom of an [Item](/components/item/), useful for a row of metadata or trailing actions. | [item-footer](references/components/item-footer.md) |
| nord-item-group | Item Group stacks a set of [Item](/components/item/) rows vertically and exposes them to assistive technology as a list. | [item-group](references/components/item-group.md) |
| nord-item-header | Item Header spans the full width at the top of an [Item](/components/item/), useful for a leading image or a row of metadata. | [item-header](references/components/item-header.md) |
| nord-item-media | Item Media holds the leading visual of an [Item](/components/item/), such as an icon, an avatar or an image. | [item-media](references/components/item-media.md) |
| nord-item-separator | Item Separator draws a horizontal divider between [Item](/components/item/) rows inside an [Item Group](/components/item-group/). | [item-separator](references/components/item-separator.md) |
| nord-item-title | Item Title is the primary line of text in an [Item](/components/item/). | [item-title](references/components/item-title.md) |
| nord-kbd | Kbd is used to display a keyboard key, such as a shortcut or a key the user should press. | [kbd](references/components/kbd.md) |
| nord-kbd-group | Kbd Group lays out a set of [Kbd](/components/kbd/) keys together, for example to represent a multi-key shortcut such as <kbd>Ctrl</kbd> <kbd>K</kbd>. | [kbd-group](references/components/kbd-group.md) |
| nord-layout | Layout component is used to create the main layout of an app. | [layout](references/components/layout.md) |
| nord-message | Message represents a specific item within a collection, such as notifications, tasks or conversations. | [message](references/components/message.md) |
| nord-meter | Meter is a graphical display of a numeric value within a known range, such as disk usage, a battery level or a score. | [meter](references/components/meter.md) |
| nord-modal | Modal component is used to display content that temporarily blocks interactions with the main view of an application. | [modal](references/components/modal.md) |
| nord-modal-body | The main content region of a composed [Modal](/components/modal/). | [modal-body](references/components/modal-body.md) |
| nord-modal-close | A standalone close control for a composed [Modal](/components/modal/). | [modal-close](references/components/modal-close.md) |
| nord-modal-footer | The footer region of a composed [Modal](/components/modal/). | [modal-footer](references/components/modal-footer.md) |
| nord-modal-header | The header region of a composed [Modal](/components/modal/). | [modal-header](references/components/modal-header.md) |
| nord-nav-group | Navigation group includes all the actions or items in a single group and is used for grouping items into related categories. | [nav-group](references/components/nav-group.md) |
| nord-nav-item | Navigation item populates sidebar navigation with links. | [nav-item](references/components/nav-item.md) |
| nord-nav-toggle | Nav toggle hides and shows the primary navigation inside `<nord-layout>`. | [nav-toggle](references/components/nav-toggle.md) |
| nord-navigation | Navigation is used to display the primary navigation in the sidebar of an application. | [navigation](references/components/navigation.md) |
| nord-notification | Notifications provide important information that requires action or acknowledgement. | [notification](references/components/notification.md) |
| nord-notification-group | Notification group is used to position and style a group of notifications. | [notification-group](references/components/notification-group.md) |
| nord-number-field | Number Field is a control for entering a numeric value, with decrement and increment stepper buttons, optional drag-to-scrub, and locale-aware formatting. | [number-field](references/components/number-field.md) |
| nord-otp-field | OTP Field is a segmented one-time-code input: it renders `length` individual character cells plus a visually-hidden input that holds the full value, enabling SMS / keychain autofill and native `pattern`/`required` validation. | [otp-field](references/components/otp-field.md) |
| nord-outline | Outline is an in-page table of contents that lists a page's headings and highlights the section currently in view as you scroll. | [outline](references/components/outline.md) |
| nord-outline-item | Outline Item is a single link within an [Outline](/components/outline/). | [outline-item](references/components/outline-item.md) |
| nord-overflow-list | Overflow List shows the contiguous set of direct child items that fits in the available inline size and exposes the remaining items to a consumer-owned overflow affordance. | [overflow-list](references/components/overflow-list.md) |
| nord-overflow-list-count | Displays the number of items currently hidden by the nearest Overflow List. | [overflow-list-count](references/components/overflow-list-count.md) |
| nord-overflow-list-menu | Provides a declarative menu for actions hidden by the nearest Overflow List. | [overflow-list-menu](references/components/overflow-list-menu.md) |
| nord-pagination | Pagination is the navigation root for a paginated collection. | [pagination](references/components/pagination.md) |
| nord-pagination-content | The list container for composed [Pagination](/components/pagination/) controls. | [pagination-content](references/components/pagination-content.md) |
| nord-pagination-ellipsis | The collapsed-pages marker (…) in a composed [Pagination](/components/pagination/). | [pagination-ellipsis](references/components/pagination-ellipsis.md) |
| nord-pagination-item | A single slot in a composed [Pagination Content](/components/pagination-content/) row. | [pagination-item](references/components/pagination-item.md) |
| nord-pagination-link | A page link in a composed [Pagination](/components/pagination/). | [pagination-link](references/components/pagination-link.md) |
| nord-pagination-next | The "next page" control in a composed [Pagination](/components/pagination/). | [pagination-next](references/components/pagination-next.md) |
| nord-pagination-previous | The "previous page" control in a composed [Pagination](/components/pagination/). | [pagination-previous](references/components/pagination-previous.md) |
| nord-popout | Popouts are small overlays that open on demand. | [popout](references/components/popout.md) |
| nord-progress | Progress component is used to display a circular pie-chart style progress indicator. | [progress](references/components/progress.md) |
| nord-progress-bar | Progress Bar is used to visually represent the completion of a task or process. | [progress-bar](references/components/progress-bar.md) |
| nord-qrcode | QR Code component is used for providing information or links to users which they can quickly scan with their smartphone. | [qrcode](references/components/qrcode.md) |
| nord-radio | Radio buttons are graphical user interface elements that allow user to choose only one option from a predefined set of mutually exclusive options. | [radio](references/components/radio.md) |
| nord-range | Range input lets user specify a numeric value using a slider which must be no less than a given value, and no more than another given value. | [range](references/components/range.md) |
| nord-resizable | Resizable coordinates an alternating sequence of panels and handles using immutable percentage layouts and native pointer/keyboard interactions. | [resizable](references/components/resizable.md) |
| nord-resizable-handle | Resizable Handle is an accessible window splitter placed between two direct Resizable Panels. | [resizable-handle](references/components/resizable-handle.md) |
| nord-resizable-panel | Resizable Panel contains consumer-owned content whose percentage size is coordinated by its direct Resizable parent. | [resizable-panel](references/components/resizable-panel.md) |
| nord-scroll-area | Scroll Area is a container that wraps overflowing content in a custom scroll viewport with consistently-styled scrollbars. | [scroll-area](references/components/scroll-area.md) |
| nord-segmented-control | Segmented control is used to pick one choice from a set of closely related choices, and immediately apply that selection. | [segmented-control](references/components/segmented-control.md) |
| nord-segmented-control-item | Segmented control items populate a segmented control with options. | [segmented-control-item](references/components/segmented-control-item.md) |
| nord-select | Select lets users choose one option from an options menu. | [select](references/components/select.md) |
| nord-skeleton | Skeletons are used to provide a low fidelity representation of content before it appears in a view. | [skeleton](references/components/skeleton.md) |
| nord-spinner | Spinner component is used to indicate users that their action is being processed. | [spinner](references/components/spinner.md) |
| nord-stack | Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing between each child. | [stack](references/components/stack.md) |
| nord-tab | The interactive tab button for use within the tab group component. | [tab](references/components/tab.md) |
| nord-tab-group | Tab Group allows multiple panels to be contained within a single window, using tabs as a navigational element. | [tab-group](references/components/tab-group.md) |
| nord-tab-panel | The panel which contains content that can be revealed using a tab in the tab group component. | [tab-panel](references/components/tab-panel.md) |
| nord-table | Table is used to organize and display information from a data set. | [table](references/components/table.md) |
| nord-tag | Tags represent a set of keywords that help label, categorize, and organize objects. | [tag](references/components/tag.md) |
| nord-tag-group | Tag groups are designed to bring together selectable tags that are of a similar nature. | [tag-group](references/components/tag-group.md) |
| nord-textarea | Textarea is a component that allows user to write text over multiple rows. | [textarea](references/components/textarea.md) |
| nord-time-picker | Time Picker pairs the browser's native time field with a dropdown of quick options, generated at a configurable `interval` between `start` and `end`. | [time-picker](references/components/time-picker.md) |
| nord-timestamp | Timestamp presents an instant as localized, stable system, relative, or automatically selected text while retaining native date-time semantics. | [timestamp](references/components/timestamp.md) |
| nord-toast | Toasts are non-disruptive messages that appear in the interface to provide quick, at-a-glance feedback on the outcome of an action. | [toast](references/components/toast.md) |
| nord-toast-group | Toast group is used to position and style a group of toasts, whilst ensuring they are announced by screen readers. | [toast-group](references/components/toast-group.md) |
| nord-toggle | Toggle switch gives control over a feature or option that can be turned on or off. | [toggle](references/components/toggle.md) |
| nord-tooltip | Tooltips are floating containers for displaying additional information for the currently focused element. | [tooltip](references/components/tooltip.md) |
| nord-top-bar | Top bar is a header component that is always visible at the top of the interface. | [top-bar](references/components/top-bar.md) |
| nord-truncate | Truncate clips text with a single- or multi-line ellipsis and reveals a tooltip with the full text when the content overflows. | [truncate](references/components/truncate.md) |
| nord-visually-hidden | Visually hidden is used when an element needs to be available to assistive technologies like screen readers, but be otherwise hidden. | [visually-hidden](references/components/visually-hidden.md) |

## Design Guidelines

| Topic            | Description                                                   | Reference                                                        |
| ---------------- | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| Accessibility    | WCAG compliance checklist, ARIA patterns, keyboard navigation | [accessibility-checklist](references/accessibility-checklist.md) |
| Colour System    | Colour tokens, palette, semantic colour usage                 | [colors](references/colors.md)                                   |
| Colour Utilities | CSS colour utility classes                                    | [color-utilities](references/color-utilities.md)                 |
| CDN              | CDN setup for components, CSS, fonts, icons                   | [cdn](references/cdn.md)                                         |
| Grid             | Layout grid system, responsive breakpoints                    | [grid](references/grid.md)                                       |
| Iconography      | Icon usage, custom icons, Nordicons integration               | [iconography](references/iconography.md)                         |
| Localisation     | RTL support, translation patterns                             | [localization](references/localization.md)                       |
| Naming           | Component and token naming conventions                        | [naming](references/naming.md)                                   |
| Typography       | Font stacks, type scale, text utilities                       | [typography](references/typography.md)                           |
| Web Components   | Lit web component patterns, lifecycle, slots, events          | [web-components](references/web-components.md)                   |
| Webfonts         | Font loading, self-hosting, CDN fonts                         | [webfonts](references/webfonts.md)                               |

## Design Tokens

| Topic         | Description                                                      | Reference                      |
| ------------- | ---------------------------------------------------------------- | ------------------------------ |
| Design Tokens | CSS custom properties for colour, spacing, typography, elevation | [tokens](references/tokens.md) |

## CSS Framework

| Topic         | Description                                                    | Reference                                  |
| ------------- | -------------------------------------------------------------- | ------------------------------------------ |
| CSS Overview  | Nord CSS framework, utility classes, reset styles              | [css](references/css.md)                   |
| Tailwind CSS  | Tailwind CSS v4 integration, `n:` variant prefix, theme config | [css/tailwind](references/css/tailwind.md) |
| ESLint Plugin | Linting rules for Nord CSS conventions                         | [css/eslint](references/css/eslint.md)     |

## Nordicons

| Topic     | Description                                   | Reference                            |
| --------- | --------------------------------------------- | ------------------------------------ |
| Nordicons | Icon library, available icons, usage patterns | [nordicons](references/nordicons.md) |

## Themes

| Topic  | Description                                                  | Reference                      |
| ------ | ------------------------------------------------------------ | ------------------------------ |
| Themes | Therapy/veterinary brands, dark mode, high contrast variants | [themes](references/themes.md) |

## Migration Guides

| Topic            | Description                              | Reference                              |
| ---------------- | ---------------------------------------- | -------------------------------------- |
| Migration Guides | Version upgrade guides, breaking changes | [migrations](references/migrations.md) |
