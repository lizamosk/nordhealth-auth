# Components

> Explore Nord's library of accessible Web Components, API references, and examples.

- [nord-accordion](/raw/components/accordion.md): Accordion is a set of collapsible sections, each with a header that toggles
the visibility of its content. It coordinates a group of
Accordion Item elements, keyboard focus
movement between them, and which items are open.
- [nord-aside](/raw/components/aside.md): Container for the right-side rail + drawer pattern in the app shell.
- [nord-autocomplete](/raw/components/autocomplete.md): Autocomplete is a free-text input with suggestions: the text the user types
is itself the committed value (a string), and the options are completion
aids. Picking a suggestion fills the input with the option's label and commits
that label. Use it when the answer is open-ended text but you can offer
helpful completions (a city, a tag, a username); reach for
Combobox instead when the value must be one of a
fixed set of options.

Autocomplete is a control only — it has no built-in label, hint or error.
Compose it inside a Field to give it a label, hint and
error message, the same way you would a native input.

Base UI parity: Autocomplete is the Combobox primitive with
selectionMode="none" + fillInputOnItemPress.
- [nord-avatar](/raw/components/avatar.md): Avatar is used for showing a thumbnail representation of a single user or entity.
Default avatar illustration is displayed when no src is specified.
- [nord-badge](/raw/components/badge.md): Badges are used to inform users of the status of an object
or of an action that’s been taken. Commonly used in tabular
data to indicate status.
- [nord-banner](/raw/components/banner.md): Banner informs users about important changes or conditions in the
interface. Use this component if you need to communicate to users
in a prominent way.
- [nord-button](/raw/components/button.md): Buttons are used for interface actions. Primary style should be
used only once per section for main call-to-action, while other
styles can appear more frequently.
- [nord-button-group](/raw/components/button-group.md): Button groups are designed to bring together button controls that are of a similar nature. For example text formatting controls.
- [nord-calendar](/raw/components/calendar.md): Calendar allows user to pick a date. It comes with built-in
functionality that allows you to set a minimum and a maximum allowed date.
Please note that the date must be passed in ISO-8601 format.
- [nord-card](/raw/components/card.md): Cards are shadowed surfaces that display content and actions on a
single topic. They should be easy to scan for relevant and
actionable information.
- [nord-checkbox](/raw/components/checkbox.md): Checkboxes allow user to choose one or more options from a limited set of options.
If you have more than 10 options, please use Select component instead.
- [nord-collapsible](/raw/components/collapsible.md): Collapsible is a disclosure that shows or hides a section of content. It wires
together a Collapsible Trigger and a
Collapsible Panel, animating the panel
height as it opens and closes.
- [nord-combobox](/raw/components/combobox.md): Combobox lets users choose one option (or several) from a list by typing to
filter, then picking with the keyboard or pointer. Use it when a Select
would be unwieldy because there are many options to scan.

Combobox is a control only — it has no built-in label, hint or error. Compose
it inside a Field to give it a label, hint and error
message, the same way you would a native input.

The committed value is an option's value (or an array of them with
multiple); the input is a filter/search field whose text is discarded on
commit. For a free-text input with suggestions where the typed text is the
value, use Autocomplete instead.
- [nord-command-menu](/raw/components/command-menu.md): Command Menu allows users to navigate and use an app without
touching the mouse and helps them transform into “power users”
who can harness more advanced features far faster.
- [nord-date-picker](/raw/components/date-picker.md): 
Date Picker allows user to enter a date either through text input,
or by choosing a date from the calendar. Please note that the date
must be passed in ISO-8601 format: YYYY-MM-DD.
- [nord-date-range-picker](/raw/components/date-range-picker.md): Date Range Picker lets people choose a start and end date as a single range,
either from a built-in list of presets (Today, Last 7 days, This month, …) or
from a range calendar. It is a control only — compose it inside a
Field for a label, hint or error, like a native input.

The committed value is an ISO-8601 interval string YYYY-MM-DD/YYYY-MM-DD;
the convenience start-date / end-date props and the valueAsDateRange
getter/setter stay in sync with it. Selecting in the popout builds a *pending*
range; **Apply** commits it (firing change), **Cancel** reverts to the last
committed value, and **Clear** empties it.
- [nord-divider](/raw/components/divider.md): Divider components are used to separate and distinguish sections of
content or groups of menu items. Visually, they look like
horizontal or vertical lines.
- [nord-drawer](/raw/components/drawer.md): Drawer is used to display context-sensitive actions and  information.
Drawer doesn’t block users from completing their task, like a modal would.
- [nord-dropdown](/raw/components/dropdown.md): Dropdown menu displays a list of actions or selectable options for
a user. Dropdown uses popout component internally to create
the overlay functionality.
- [nord-empty-state](/raw/components/empty-state.md): Empty state can be used when there is no data to display to
describe what the user can do next. Empty state provides
explanation and guidance to help user progress.
- [nord-field](/raw/components/field.md): Field is the wrapper for a single form control. It lays out a
Field Label, a control (such as an
Input), an optional
Field Description and a
Field Error with consistent spacing.

Combine several together in a Field Group and
group related groups with a Field Set.

The Field shares its state with the control through context: a Nord control
placed inside a Field suppresses its own built-in label/hint/error and takes
its accessible name, description and invalid/disabled state from the Field.
- [nord-fieldset](/raw/components/fieldset.md): Deprecated: for new code, group related controls with the composable Field
family — see grouping fields with Field.
nord-fieldset remains supported for backwards compatibility and is not
scheduled for removal.

Fieldset is used for grouping sets of input components. It is necessary to use a
fieldset with radio and checkbox components, and can also be useful for logically
grouping other types of inputs.
- [nord-footer](/raw/components/footer.md): The footer is a block of designated space for providing additional information or actions that are positioned below the main content.
- [nord-header](/raw/components/header.md): The header is a block of designated space for labelling the currently
viewed context as well as providing primary actions.
- [nord-icon](/raw/components/icon.md): Icons are used to provide additional meaning or in places where text label doesn’t fit.
Icon component allows you to display an icon from the Nordicons library.
- [nord-input](/raw/components/input.md): Inputs are used to allow users to provide text input when the expected input is short.
As well as plain text, Input supports various types of text, including passwords and numbers.
- [nord-input-group](/raw/components/input-group.md): Input Group composes exactly one Nord Input or Textarea with reusable add-ons
while leaving the editable control, form state, and all consumer nodes owned
by the consumer.
- [nord-item](/raw/components/item.md): Item is a flexible, composable row used to display a piece of content such as
a person, a file or a setting. Combine it with Item Media,
Item Content, Item Title,
Item Description and Item Actions
to build rich list rows. Stack several together with Item Group.

To make a whole Item act as a link, wrap it in an <a> element. The row
highlights on hover when wrapped this way.
- [nord-kbd](/raw/components/kbd.md): Kbd is used to display a keyboard key, such as a shortcut or a key the user
should press. Group related keys together with Kbd Group.
- [nord-layout](/raw/components/layout.md): Layout component is used to create the main layout of an app. Layout
currently comes with one main configuration: two-column.
- [nord-message](/raw/components/message.md): Message represents a specific item within a collection,
such as notifications, tasks or conversations. Message
can be placed directly inside a dropdown component.
- [nord-meter](/raw/components/meter.md): Meter is a graphical display of a numeric value within a known range,
such as disk usage, a battery level or a score. Unlike Progress Bar, it
represents a static measurement rather than the completion of a task.
- [nord-modal](/raw/components/modal.md): Modal component is used to display content that temporarily blocks interactions
with the main view of an application. Modal should be used sparingly and
only when necessary.
- [nord-navigation](/raw/components/navigation.md): Navigation is used to display the primary navigation in the sidebar
of an application. Navigation includes a list of links that users
use to move between sections of the application.
- [nord-notification](/raw/components/notification.md): Notifications provide important information that requires action or acknowledgement.
A notification is displayed until the user dismisses it.
- [nord-number-field](/raw/components/number-field.md): Number Field is a control for entering a numeric value, with decrement and
increment stepper buttons, optional drag-to-scrub, and locale-aware
formatting. It ports the behaviour of Base UI's Number Field: arrow/Page
stepping, Home/End to the bounds, press-and-hold auto-repeat, optional
wheel/scrub, clamping, and Intl.NumberFormat formatting.

Number Field is a control only — it has no built-in label, hint or error.
Compose it inside a Field with a
Field Label to give it a label, hint and error,
the same way you would a native input.

FORM PARTICIPATION: the value is submitted as the raw numeric string under the
host name via FormDataController (the inner input has no name, avoiding a
double submit). Unlike Base UI there is no hidden native number input, and —
like the other new Nord controls — Number Field does NOT use
ElementInternals, so it performs no native constraint validation: required,
min, max and step are NOT enforced as form-blocking validity. min/max
govern interactive stepping and (unless allow-out-of-range is set) clamp the
value; required only surfaces as required/aria-required on the inner input
for assistive technology. Authors must validate constraints themselves and
reflect failures via invalid and a nord-field-error.

ACCESSIBILITY NOTE: the inner control is a text input (with inputmode) and
aria-roledescription="Number field", NOT role="spinbutton" and NOT a
native type="number". A text input lets us show locale-formatted text
(currency, percent, grouping) while keeping full text editing — assistive tech
reads the formatted value from the input's text. We do NOT add
aria-valuenow/valuemin/valuemax/valuetext: those are only valid on a
range role (e.g. spinbutton/slider) and would fail aria-allowed-attr
validation on a text input. This mirrors what Base UI's NumberFieldInput
actually ships (only aria-roledescription).
- [nord-otp-field](/raw/components/otp-field.md): OTP Field is a segmented one-time-code input: it renders length individual
character cells plus a visually-hidden input that holds the full value, enabling
SMS / keychain autofill and native pattern/required validation. Typing fills
and auto-advances, Backspace clears and moves back, the arrow keys navigate, and
pasting a code distributes its characters across the cells.

OTP Field is a control only — it has no built-in label, hint or error. Compose
it inside a Field with a Field Label
(connected with for) to give it an accessible name, helper text and an error
message, exactly like a native input.
- [nord-outline](/raw/components/outline.md): Outline is an in-page table of contents that lists a page's headings and
highlights the section currently in view as you scroll.

Provide Outline Item children, or point for at
a container to build the list from its headings.
- [nord-overflow-list](/raw/components/overflow-list.md): Overflow List shows the contiguous set of direct child items that fits in
the available inline size and exposes the remaining items to a consumer-owned
overflow affordance.
- [nord-pagination](/raw/components/pagination.md): Pagination is the navigation root for a paginated collection. It is
composition-first: it owns no page state, renders no controls, and emits no
events. Your app owns the page state, URL/query syncing, cursors and any data
fetching; Nord supplies the semantic/layout primitives, the styling and the
paginate() math utility for building the page window.

As a root it is a navigation landmark — it sets role="navigation" and a
default accessible label so screen-reader users can jump to it. Compose the
lower-level primitives inside it:

- Pagination Content — the list row.
- Pagination Item — a slot in the row.
- Pagination Link — a page link (set current).
- Pagination Previous — the previous control.
- Pagination Next — the next control.
- Pagination Ellipsis — the collapsed-pages marker.

Bring your own interactive element — an <a> (e.g. a framework <Link> /
<NuxtLink>) or a nord-button — and own its href, navigation and
disabled state. See the framework adapters in the docs.
- [nord-popout](/raw/components/popout.md): Popouts are small overlays that open on demand. They let users access additional content and actions without cluttering the page.
- [nord-progress](/raw/components/progress.md): Progress component is used to display a circular pie-chart style progress indicator.
You can customize the size and color of the progress indicator with the
provided properties.
- [nord-progress-bar](/raw/components/progress-bar.md): Progress Bar is used to visually represent the completion
of a task or process. It shows how much of the task has
been completed and how much is still left.
- [nord-qrcode](/raw/components/qrcode.md): QR Code component is used for providing information or links
to users which they can quickly scan with their smartphone.
- [nord-radio](/raw/components/radio.md): Radio buttons are graphical user interface elements that allow user to choose only one option from
a predefined set of mutually exclusive options.
- [nord-range](/raw/components/range.md): Range input lets user specify a numeric value using a slider which
must be no less than a given value, and no more than another given value.
- [nord-resizable](/raw/components/resizable.md): Resizable coordinates an alternating sequence of panels and handles using
immutable percentage layouts and native pointer/keyboard interactions.
- [nord-scroll-area](/raw/components/scroll-area.md): Scroll Area is a container that wraps overflowing content in a custom scroll
viewport with consistently-styled scrollbars. Native scrollbars are hidden and
replaced with a thin overlay thumb that appears on hover or while scrolling.

It also exposes the distance from each edge as CSS custom properties
(--scroll-area-overflow-*), which can drive an edge-fade mask on
::part(viewport) — see the docs example.

The scroll machinery lives in shadow DOM; slot your content directly inside.
- [nord-segmented-control](/raw/components/segmented-control.md): Segmented control is used to pick one choice from a set of
closely related choices, and immediately apply that selection.
- [nord-select](/raw/components/select.md): Select lets users choose one option from an options menu.
Consider using select when you have 5 or more options to choose from.
- [nord-skeleton](/raw/components/skeleton.md): Skeletons are used to provide a low fidelity representation of content
before it appears in a view. This improves the perceived loading time
for our users.
- [nord-spinner](/raw/components/spinner.md): Spinner component is used to indicate users that their action is being
processed. You can customize the size and color of the spinner with the
provided properties.
- [nord-stack](/raw/components/stack.md): Stack component manages layout of immediate children along the
vertical or horizontal axis with optional spacing between each child.
- [nord-tab](/raw/components/tab.md): The interactive tab button for use within the tab group component.
- [nord-table](/raw/components/table.md): Table is used to organize and display information from a data set.
Provides table styles in addition to features like sticky
headers and support for narrow viewports.
- [nord-tag](/raw/components/tag.md): Tags represent a set of keywords that help label, categorize,
and organize objects. Commonly used to signify the attributes of an object.
- [nord-textarea](/raw/components/textarea.md): Textarea is a component that allows user to write text over
multiple rows. Used when the expected user input is long.
For shorter input, use the Input component.
- [nord-time-picker](/raw/components/time-picker.md): Time Picker pairs the browser's native time field with a dropdown of quick
options, generated at a configurable interval between start and end.
The native field handles typing, locale-aware display and validation; the
dropdown is a shortcut for common times.

The value is held in ISO HH:mm format.

Like a native input, Time Picker is a control only — it has no built-in
label, hint or error. Compose it inside a Field (with a
Field Label, Field Description
and Field Error) to label it and add help or error text.
- [nord-timestamp](/raw/components/timestamp.md): Timestamp presents an instant as localized, stable system, relative, or
automatically selected text while retaining native date-time semantics.
- [nord-toast](/raw/components/toast.md): Toasts are non-disruptive messages that appear in the interface
to provide quick, at-a-glance feedback on the outcome of an action.
- [nord-toggle](/raw/components/toggle.md): Toggle switch gives control over a feature or option that can be
turned on or off. If a physical switch would work for the action, a
toggle is probably the best component to use.
- [nord-tooltip](/raw/components/tooltip.md): Tooltips are floating containers for displaying additional information
for the currently focused element. A tooltip can be useful when you want
to e.g. give a hint about an existing Command Menu shortcut.
- [nord-top-bar](/raw/components/top-bar.md): Top bar is a header component that is always visible at the top of the interface. Top bar allows functionality such as search and contextual menus to be placed at the top of the interface.
- [nord-truncate](/raw/components/truncate.md): Truncate clips text with a single- or multi-line ellipsis and reveals a tooltip with the full text when the content overflows.
- [nord-visually-hidden](/raw/components/visually-hidden.md): Visually hidden is used when an element needs to be available
to assistive technologies like screen readers, but be otherwise
hidden.

<!--
Source: https://nordhealth.design/raw/components.md
-->
