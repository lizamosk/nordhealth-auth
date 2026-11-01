# Design Tokens

> Design tokens are a tech-agnostic way to store variables. We use tokens instead of hard coded values to ensure a better UI consistency across different platforms.

*Design tokens are a tech-agnostic way to store variables. We use tokens instead of hard coded values to ensure a better UI consistency across different platforms.*

## Color

### General

These colors can be used anywhere and map to Tailwind's `text-*`, `bg-*` and `border-*` utilities (e.g. `n:text-accent`).

- `--n-color-accent`: `rgb(53, 89, 199)` — Primary accent for buttons, links and highlighted areas.
- `--n-color-accent-secondary`: `rgb(53, 89, 199)` — Used for theming purposes to style the background of the top bar in addition to the navigation header. By default, this aliases the accent colour, but can be set to a custom colour if necessary.
- `--n-color-active`: `rgb(246, 248, 248)` — Default active colour.
- `--n-color-background`: `rgb(250, 251, 251)` — Default application background colour. Should be set to either html or body element.
- `--n-color-border`: `rgb(216, 222, 228)` — Default border colour.
- `--n-color-border-danger`: `rgb(250, 199, 190)` — Danger border colour. Used for the danger badge border style.
- `--n-color-border-highlight`: `rgb(227, 204, 244)` — Highlight border colour. Used for the highlight badge border style.
- `--n-color-border-hover`: `rgb(102, 118, 128)` — Default border hover colour.
- `--n-color-border-info`: `rgb(198, 212, 249)` — Info border colour. Used for the info badge border style.
- `--n-color-border-neutral`: `rgb(215, 220, 224)` — Neutral border colour. Used for the neutral badge border style.
- `--n-color-border-progress`: `rgb(176, 229, 238)` — Progress border colour.
- `--n-color-border-strong`: `rgb(188, 197, 204)` — Strong border colour for highlighting specific parts in the user interface.
- `--n-color-border-success`: `rgb(183, 223, 186)` — Success border colour. Used for the success badge border style.
- `--n-color-border-warning`: `rgb(248, 216, 124)` — Warning border colour. Used for the warning badge border style.
- `--n-color-button`: `rgb(255, 255, 255)` — Default button background colour.
- `--n-color-button-hover`: `rgb(246, 248, 248)` — Default button hover background colour.
- `--n-color-header`: `rgb(246, 248, 248)` — Default header background colour for modals.
- `--n-color-icon`: `rgb(102, 118, 128)` — Default icon colour.
- `--n-color-icon-hover`: `rgb(12, 26, 61)` — Default icon hover colour.
- `--n-color-nav-heading`: `rgb(143, 161, 170)` — Default heading colour for sidebar navigation.
- `--n-color-nav-hover`: `rgb(240, 241, 243)` — Default hover colour for sidebar navigation.
- `--n-color-nav-selected`: `rgb(233, 234, 237)` — Default selected colour for sidebar navigation.
- `--n-color-nav-surface`: `rgb(255, 255, 255)` — Default surface colour for sidebar navigation. Used as alias for default button hover background and active hover colour as well.
- `--n-color-overlay`: `rgba(144, 152, 152, 0.4)` — Default overlay colour. Use this to distinguish modal and popout layers from the layer underneath.
- `--n-color-status-danger`: `rgb(210, 64, 35)` — Default danger status colour. Used to communicate problems that have to be resolved so that user can continue forward. This colour should be always used for e.g. highlighting errors.
- `--n-color-status-danger-weak`: `rgb(255, 240, 238)` — Weak danger status colour. Used to communicate problems that have to be resolved so that user can continue forward. This colour should be always used for e.g. highlighting errors.
- `--n-color-status-highlight`: `rgb(142, 78, 198)` — Default highlight status colour. Used to highlight specific items in the interface.
- `--n-color-status-highlight-weak`: `rgb(249, 241, 254)` — Weak highlight status colour. Used to highlight specific items in the interface.
- `--n-color-status-info`: `rgb(62, 99, 221)` — Default info status colour. Used to convey something informal.
- `--n-color-status-info-weak`: `rgb(240, 244, 255)` — Weak info status colour. Used to convey something informal.
- `--n-color-status-neutral`: `rgb(255, 255, 255)` — Default neutral status colour.
- `--n-color-status-neutral-weak`: `rgb(241, 243, 245)` — Weak neutral status colour. Used for the badge default state.
- `--n-color-status-notification`: `rgb(231, 84, 54)` — Default notification indicator colour. Used to convey unread information.
- `--n-color-status-progress`: `rgb(0, 127, 153)` — Default progress status colour. Used to convey something is in progress.
- `--n-color-status-progress-weak`: `rgb(231, 249, 251)` — Weak progress status colour. Used to convey something is in progress.
- `--n-color-status-success`: `rgb(29, 134, 51)` — Default success status colour. Used to convey success states. For example, you might show a success message that tells the user that changes were saved or something was completed.
- `--n-color-status-success-weak`: `rgb(235, 249, 235)` — Weak success status colour.  Used to convey success states. For example, you might show a success message that tells the user that changes were saved or something was completed.
- `--n-color-status-warning`: `rgb(246, 205, 90)` — Default warning status colour. Used to display information that needs user’s attention and may require further steps.
- `--n-color-status-warning-weak`: `rgb(255, 250, 225)` — Weak warning status colour. Used to display information that needs a user’s attention and may require further steps.
- `--n-color-surface`: `rgb(255, 255, 255)` — Default application surface colour. Use this for e.g. card backgrounds.
- `--n-color-surface-background`: `rgb(247, 247, 248)` — Default surface background colour. Use this for the application background layer behind raised surfaces.
- `--n-color-surface-canvas`: `rgb(252, 252, 252)` — Default canvas surface colour. Use this for the outermost canvas layer beneath the application background.
- `--n-color-surface-lowered`: `rgb(230, 232, 235)` — Default lowered surface colour. Use this when you need to make a specific layer to appear lower than the surface colour, e.g. progress bar.
- `--n-color-surface-raised`: `rgb(250, 251, 251)` — Default raised surface colour. Use this when you need to separate a specific layer from the surface colour, e.g. table headers.
- `--n-color-text`: `rgb(12, 26, 61)` — Default text colour. Used as the main text colour throughout the UI. Provides good and legible contrast for our content.
- `--n-color-text-danger`: `rgb(178, 48, 21)` — Default text colour for danger messages. Also used for the danger badge text.
- `--n-color-text-error`: `rgb(210, 64, 35)` — Default text colour for error messages. Also used for the danger badge text.
- `--n-color-text-highlight`: `rgb(121, 58, 175)` — Highlight text colour. Used for the highlight badge text.
- `--n-color-text-info`: `rgb(52, 81, 178)` — Info text colour. Used for the info badge text.
- `--n-color-text-link`: `rgb(53, 89, 199)` — Default link text colour. Used for all paragraph level links in an user interface.
- `--n-color-text-neutral`: `rgb(85, 89, 93)` — Neutral text colour. Used for the neutral badge text.
- `--n-color-text-neutral-strong`: `rgb(17, 24, 28)` — Strong neutral text colour. Used for the strong neutral badge text.
- `--n-color-text-on-accent`: `rgb(255, 255, 255)` — Default text on accent colour. Used when text sits on the acccent colour or a dark background.
- `--n-color-text-progress`: `rgb(1, 109, 131)` — Progress text colour.
- `--n-color-text-success`: `rgb(17, 118, 39)` — Default text colour for success messages. Also used for the success badge text.
- `--n-color-text-warning`: `rgb(148, 105, 0)` — Warning text colour. Used for the warning badge text.
- `--n-color-text-warning-strong`: `rgb(51, 40, 16)` — Strong warning text colour. Used for the strong warning badge text.
- `--n-color-text-weak`: `rgb(54, 67, 74)` — Weak text colour. Used for e.g. introduction paragraphs and help texts that are coupled with form elements.
- `--n-color-text-weaker`: `rgb(102, 118, 128)` — Weaker text colour. Used for e.g. disabled buttons, footers, table headings, captions and placeholder texts.
- `--n-color-text-weakest`: `rgb(178, 186, 191)` — Weakest text colour. Used for e.g. disabled input text and placeholder text in focused inputs.

### Text

These colors are intended for text and map to Tailwind's `text-*` utilities (e.g. `n:text-weak`).

- `--n-color-accent`: `rgb(53, 89, 199)` — Primary accent for buttons, links and highlighted areas.
- `--n-color-accent-secondary`: `rgb(53, 89, 199)` — Used for theming purposes to style the background of the top bar in addition to the navigation header. By default, this aliases the accent colour, but can be set to a custom colour if necessary.
- `--n-color-active`: `rgb(246, 248, 248)` — Default active colour.
- `--n-color-background`: `rgb(250, 251, 251)` — Default application background colour. Should be set to either html or body element.
- `--n-color-border`: `rgb(216, 222, 228)` — Default border colour.
- `--n-color-border-danger`: `rgb(250, 199, 190)` — Danger border colour. Used for the danger badge border style.
- `--n-color-border-highlight`: `rgb(227, 204, 244)` — Highlight border colour. Used for the highlight badge border style.
- `--n-color-border-hover`: `rgb(102, 118, 128)` — Default border hover colour.
- `--n-color-border-info`: `rgb(198, 212, 249)` — Info border colour. Used for the info badge border style.
- `--n-color-border-neutral`: `rgb(215, 220, 224)` — Neutral border colour. Used for the neutral badge border style.
- `--n-color-border-progress`: `rgb(176, 229, 238)` — Progress border colour.
- `--n-color-border-strong`: `rgb(188, 197, 204)` — Strong border colour for highlighting specific parts in the user interface.
- `--n-color-border-success`: `rgb(183, 223, 186)` — Success border colour. Used for the success badge border style.
- `--n-color-border-warning`: `rgb(248, 216, 124)` — Warning border colour. Used for the warning badge border style.
- `--n-color-button`: `rgb(255, 255, 255)` — Default button background colour.
- `--n-color-button-hover`: `rgb(246, 248, 248)` — Default button hover background colour.
- `--n-color-header`: `rgb(246, 248, 248)` — Default header background colour for modals.
- `--n-color-icon`: `rgb(102, 118, 128)` — Default icon colour.
- `--n-color-icon-hover`: `rgb(12, 26, 61)` — Default icon hover colour.
- `--n-color-nav-heading`: `rgb(143, 161, 170)` — Default heading colour for sidebar navigation.
- `--n-color-nav-hover`: `rgb(240, 241, 243)` — Default hover colour for sidebar navigation.
- `--n-color-nav-selected`: `rgb(233, 234, 237)` — Default selected colour for sidebar navigation.
- `--n-color-nav-surface`: `rgb(255, 255, 255)` — Default surface colour for sidebar navigation. Used as alias for default button hover background and active hover colour as well.
- `--n-color-overlay`: `rgba(144, 152, 152, 0.4)` — Default overlay colour. Use this to distinguish modal and popout layers from the layer underneath.
- `--n-color-status-danger`: `rgb(210, 64, 35)` — Default danger status colour. Used to communicate problems that have to be resolved so that user can continue forward. This colour should be always used for e.g. highlighting errors.
- `--n-color-status-danger-weak`: `rgb(255, 240, 238)` — Weak danger status colour. Used to communicate problems that have to be resolved so that user can continue forward. This colour should be always used for e.g. highlighting errors.
- `--n-color-status-highlight`: `rgb(142, 78, 198)` — Default highlight status colour. Used to highlight specific items in the interface.
- `--n-color-status-highlight-weak`: `rgb(249, 241, 254)` — Weak highlight status colour. Used to highlight specific items in the interface.
- `--n-color-status-info`: `rgb(62, 99, 221)` — Default info status colour. Used to convey something informal.
- `--n-color-status-info-weak`: `rgb(240, 244, 255)` — Weak info status colour. Used to convey something informal.
- `--n-color-status-neutral`: `rgb(255, 255, 255)` — Default neutral status colour.
- `--n-color-status-neutral-weak`: `rgb(241, 243, 245)` — Weak neutral status colour. Used for the badge default state.
- `--n-color-status-notification`: `rgb(231, 84, 54)` — Default notification indicator colour. Used to convey unread information.
- `--n-color-status-progress`: `rgb(0, 127, 153)` — Default progress status colour. Used to convey something is in progress.
- `--n-color-status-progress-weak`: `rgb(231, 249, 251)` — Weak progress status colour. Used to convey something is in progress.
- `--n-color-status-success`: `rgb(29, 134, 51)` — Default success status colour. Used to convey success states. For example, you might show a success message that tells the user that changes were saved or something was completed.
- `--n-color-status-success-weak`: `rgb(235, 249, 235)` — Weak success status colour.  Used to convey success states. For example, you might show a success message that tells the user that changes were saved or something was completed.
- `--n-color-status-warning`: `rgb(246, 205, 90)` — Default warning status colour. Used to display information that needs user’s attention and may require further steps.
- `--n-color-status-warning-weak`: `rgb(255, 250, 225)` — Weak warning status colour. Used to display information that needs a user’s attention and may require further steps.
- `--n-color-surface`: `rgb(255, 255, 255)` — Default application surface colour. Use this for e.g. card backgrounds.
- `--n-color-surface-background`: `rgb(247, 247, 248)` — Default surface background colour. Use this for the application background layer behind raised surfaces.
- `--n-color-surface-canvas`: `rgb(252, 252, 252)` — Default canvas surface colour. Use this for the outermost canvas layer beneath the application background.
- `--n-color-surface-lowered`: `rgb(230, 232, 235)` — Default lowered surface colour. Use this when you need to make a specific layer to appear lower than the surface colour, e.g. progress bar.
- `--n-color-surface-raised`: `rgb(250, 251, 251)` — Default raised surface colour. Use this when you need to separate a specific layer from the surface colour, e.g. table headers.
- `--n-color-text`: `rgb(12, 26, 61)` — Default text colour. Used as the main text colour throughout the UI. Provides good and legible contrast for our content.
- `--n-color-text-danger`: `rgb(178, 48, 21)` — Default text colour for danger messages. Also used for the danger badge text.
- `--n-color-text-error`: `rgb(210, 64, 35)` — Default text colour for error messages. Also used for the danger badge text.
- `--n-color-text-highlight`: `rgb(121, 58, 175)` — Highlight text colour. Used for the highlight badge text.
- `--n-color-text-info`: `rgb(52, 81, 178)` — Info text colour. Used for the info badge text.
- `--n-color-text-link`: `rgb(53, 89, 199)` — Default link text colour. Used for all paragraph level links in an user interface.
- `--n-color-text-neutral`: `rgb(85, 89, 93)` — Neutral text colour. Used for the neutral badge text.
- `--n-color-text-neutral-strong`: `rgb(17, 24, 28)` — Strong neutral text colour. Used for the strong neutral badge text.
- `--n-color-text-on-accent`: `rgb(255, 255, 255)` — Default text on accent colour. Used when text sits on the acccent colour or a dark background.
- `--n-color-text-progress`: `rgb(1, 109, 131)` — Progress text colour.
- `--n-color-text-success`: `rgb(17, 118, 39)` — Default text colour for success messages. Also used for the success badge text.
- `--n-color-text-warning`: `rgb(148, 105, 0)` — Warning text colour. Used for the warning badge text.
- `--n-color-text-warning-strong`: `rgb(51, 40, 16)` — Strong warning text colour. Used for the strong warning badge text.
- `--n-color-text-weak`: `rgb(54, 67, 74)` — Weak text colour. Used for e.g. introduction paragraphs and help texts that are coupled with form elements.
- `--n-color-text-weaker`: `rgb(102, 118, 128)` — Weaker text colour. Used for e.g. disabled buttons, footers, table headings, captions and placeholder texts.
- `--n-color-text-weakest`: `rgb(178, 186, 191)` — Weakest text colour. Used for e.g. disabled input text and placeholder text in focused inputs.

### Border

These colors are intended for borders and map to Tailwind's `border-*` utilities (e.g. `n:border-strong`).

- `--n-color-accent`: `rgb(53, 89, 199)` — Primary accent for buttons, links and highlighted areas.
- `--n-color-accent-secondary`: `rgb(53, 89, 199)` — Used for theming purposes to style the background of the top bar in addition to the navigation header. By default, this aliases the accent colour, but can be set to a custom colour if necessary.
- `--n-color-active`: `rgb(246, 248, 248)` — Default active colour.
- `--n-color-background`: `rgb(250, 251, 251)` — Default application background colour. Should be set to either html or body element.
- `--n-color-border`: `rgb(216, 222, 228)` — Default border colour.
- `--n-color-border-danger`: `rgb(250, 199, 190)` — Danger border colour. Used for the danger badge border style.
- `--n-color-border-highlight`: `rgb(227, 204, 244)` — Highlight border colour. Used for the highlight badge border style.
- `--n-color-border-hover`: `rgb(102, 118, 128)` — Default border hover colour.
- `--n-color-border-info`: `rgb(198, 212, 249)` — Info border colour. Used for the info badge border style.
- `--n-color-border-neutral`: `rgb(215, 220, 224)` — Neutral border colour. Used for the neutral badge border style.
- `--n-color-border-progress`: `rgb(176, 229, 238)` — Progress border colour.
- `--n-color-border-strong`: `rgb(188, 197, 204)` — Strong border colour for highlighting specific parts in the user interface.
- `--n-color-border-success`: `rgb(183, 223, 186)` — Success border colour. Used for the success badge border style.
- `--n-color-border-warning`: `rgb(248, 216, 124)` — Warning border colour. Used for the warning badge border style.
- `--n-color-button`: `rgb(255, 255, 255)` — Default button background colour.
- `--n-color-button-hover`: `rgb(246, 248, 248)` — Default button hover background colour.
- `--n-color-header`: `rgb(246, 248, 248)` — Default header background colour for modals.
- `--n-color-icon`: `rgb(102, 118, 128)` — Default icon colour.
- `--n-color-icon-hover`: `rgb(12, 26, 61)` — Default icon hover colour.
- `--n-color-nav-heading`: `rgb(143, 161, 170)` — Default heading colour for sidebar navigation.
- `--n-color-nav-hover`: `rgb(240, 241, 243)` — Default hover colour for sidebar navigation.
- `--n-color-nav-selected`: `rgb(233, 234, 237)` — Default selected colour for sidebar navigation.
- `--n-color-nav-surface`: `rgb(255, 255, 255)` — Default surface colour for sidebar navigation. Used as alias for default button hover background and active hover colour as well.
- `--n-color-overlay`: `rgba(144, 152, 152, 0.4)` — Default overlay colour. Use this to distinguish modal and popout layers from the layer underneath.
- `--n-color-status-danger`: `rgb(210, 64, 35)` — Default danger status colour. Used to communicate problems that have to be resolved so that user can continue forward. This colour should be always used for e.g. highlighting errors.
- `--n-color-status-danger-weak`: `rgb(255, 240, 238)` — Weak danger status colour. Used to communicate problems that have to be resolved so that user can continue forward. This colour should be always used for e.g. highlighting errors.
- `--n-color-status-highlight`: `rgb(142, 78, 198)` — Default highlight status colour. Used to highlight specific items in the interface.
- `--n-color-status-highlight-weak`: `rgb(249, 241, 254)` — Weak highlight status colour. Used to highlight specific items in the interface.
- `--n-color-status-info`: `rgb(62, 99, 221)` — Default info status colour. Used to convey something informal.
- `--n-color-status-info-weak`: `rgb(240, 244, 255)` — Weak info status colour. Used to convey something informal.
- `--n-color-status-neutral`: `rgb(255, 255, 255)` — Default neutral status colour.
- `--n-color-status-neutral-weak`: `rgb(241, 243, 245)` — Weak neutral status colour. Used for the badge default state.
- `--n-color-status-notification`: `rgb(231, 84, 54)` — Default notification indicator colour. Used to convey unread information.
- `--n-color-status-progress`: `rgb(0, 127, 153)` — Default progress status colour. Used to convey something is in progress.
- `--n-color-status-progress-weak`: `rgb(231, 249, 251)` — Weak progress status colour. Used to convey something is in progress.
- `--n-color-status-success`: `rgb(29, 134, 51)` — Default success status colour. Used to convey success states. For example, you might show a success message that tells the user that changes were saved or something was completed.
- `--n-color-status-success-weak`: `rgb(235, 249, 235)` — Weak success status colour.  Used to convey success states. For example, you might show a success message that tells the user that changes were saved or something was completed.
- `--n-color-status-warning`: `rgb(246, 205, 90)` — Default warning status colour. Used to display information that needs user’s attention and may require further steps.
- `--n-color-status-warning-weak`: `rgb(255, 250, 225)` — Weak warning status colour. Used to display information that needs a user’s attention and may require further steps.
- `--n-color-surface`: `rgb(255, 255, 255)` — Default application surface colour. Use this for e.g. card backgrounds.
- `--n-color-surface-background`: `rgb(247, 247, 248)` — Default surface background colour. Use this for the application background layer behind raised surfaces.
- `--n-color-surface-canvas`: `rgb(252, 252, 252)` — Default canvas surface colour. Use this for the outermost canvas layer beneath the application background.
- `--n-color-surface-lowered`: `rgb(230, 232, 235)` — Default lowered surface colour. Use this when you need to make a specific layer to appear lower than the surface colour, e.g. progress bar.
- `--n-color-surface-raised`: `rgb(250, 251, 251)` — Default raised surface colour. Use this when you need to separate a specific layer from the surface colour, e.g. table headers.
- `--n-color-text`: `rgb(12, 26, 61)` — Default text colour. Used as the main text colour throughout the UI. Provides good and legible contrast for our content.
- `--n-color-text-danger`: `rgb(178, 48, 21)` — Default text colour for danger messages. Also used for the danger badge text.
- `--n-color-text-error`: `rgb(210, 64, 35)` — Default text colour for error messages. Also used for the danger badge text.
- `--n-color-text-highlight`: `rgb(121, 58, 175)` — Highlight text colour. Used for the highlight badge text.
- `--n-color-text-info`: `rgb(52, 81, 178)` — Info text colour. Used for the info badge text.
- `--n-color-text-link`: `rgb(53, 89, 199)` — Default link text colour. Used for all paragraph level links in an user interface.
- `--n-color-text-neutral`: `rgb(85, 89, 93)` — Neutral text colour. Used for the neutral badge text.
- `--n-color-text-neutral-strong`: `rgb(17, 24, 28)` — Strong neutral text colour. Used for the strong neutral badge text.
- `--n-color-text-on-accent`: `rgb(255, 255, 255)` — Default text on accent colour. Used when text sits on the acccent colour or a dark background.
- `--n-color-text-progress`: `rgb(1, 109, 131)` — Progress text colour.
- `--n-color-text-success`: `rgb(17, 118, 39)` — Default text colour for success messages. Also used for the success badge text.
- `--n-color-text-warning`: `rgb(148, 105, 0)` — Warning text colour. Used for the warning badge text.
- `--n-color-text-warning-strong`: `rgb(51, 40, 16)` — Strong warning text colour. Used for the strong warning badge text.
- `--n-color-text-weak`: `rgb(54, 67, 74)` — Weak text colour. Used for e.g. introduction paragraphs and help texts that are coupled with form elements.
- `--n-color-text-weaker`: `rgb(102, 118, 128)` — Weaker text colour. Used for e.g. disabled buttons, footers, table headings, captions and placeholder texts.
- `--n-color-text-weakest`: `rgb(178, 186, 191)` — Weakest text colour. Used for e.g. disabled input text and placeholder text in focused inputs.

### Background

These colors are intended for backgrounds and map to Tailwind's `bg-*` utilities (e.g. `n:bg-surface`).

- `--n-color-accent`: `rgb(53, 89, 199)` — Primary accent for buttons, links and highlighted areas.
- `--n-color-accent-secondary`: `rgb(53, 89, 199)` — Used for theming purposes to style the background of the top bar in addition to the navigation header. By default, this aliases the accent colour, but can be set to a custom colour if necessary.
- `--n-color-active`: `rgb(246, 248, 248)` — Default active colour.
- `--n-color-background`: `rgb(250, 251, 251)` — Default application background colour. Should be set to either html or body element.
- `--n-color-border`: `rgb(216, 222, 228)` — Default border colour.
- `--n-color-border-danger`: `rgb(250, 199, 190)` — Danger border colour. Used for the danger badge border style.
- `--n-color-border-highlight`: `rgb(227, 204, 244)` — Highlight border colour. Used for the highlight badge border style.
- `--n-color-border-hover`: `rgb(102, 118, 128)` — Default border hover colour.
- `--n-color-border-info`: `rgb(198, 212, 249)` — Info border colour. Used for the info badge border style.
- `--n-color-border-neutral`: `rgb(215, 220, 224)` — Neutral border colour. Used for the neutral badge border style.
- `--n-color-border-progress`: `rgb(176, 229, 238)` — Progress border colour.
- `--n-color-border-strong`: `rgb(188, 197, 204)` — Strong border colour for highlighting specific parts in the user interface.
- `--n-color-border-success`: `rgb(183, 223, 186)` — Success border colour. Used for the success badge border style.
- `--n-color-border-warning`: `rgb(248, 216, 124)` — Warning border colour. Used for the warning badge border style.
- `--n-color-button`: `rgb(255, 255, 255)` — Default button background colour.
- `--n-color-button-hover`: `rgb(246, 248, 248)` — Default button hover background colour.
- `--n-color-header`: `rgb(246, 248, 248)` — Default header background colour for modals.
- `--n-color-icon`: `rgb(102, 118, 128)` — Default icon colour.
- `--n-color-icon-hover`: `rgb(12, 26, 61)` — Default icon hover colour.
- `--n-color-nav-heading`: `rgb(143, 161, 170)` — Default heading colour for sidebar navigation.
- `--n-color-nav-hover`: `rgb(240, 241, 243)` — Default hover colour for sidebar navigation.
- `--n-color-nav-selected`: `rgb(233, 234, 237)` — Default selected colour for sidebar navigation.
- `--n-color-nav-surface`: `rgb(255, 255, 255)` — Default surface colour for sidebar navigation. Used as alias for default button hover background and active hover colour as well.
- `--n-color-overlay`: `rgba(144, 152, 152, 0.4)` — Default overlay colour. Use this to distinguish modal and popout layers from the layer underneath.
- `--n-color-status-danger`: `rgb(210, 64, 35)` — Default danger status colour. Used to communicate problems that have to be resolved so that user can continue forward. This colour should be always used for e.g. highlighting errors.
- `--n-color-status-danger-weak`: `rgb(255, 240, 238)` — Weak danger status colour. Used to communicate problems that have to be resolved so that user can continue forward. This colour should be always used for e.g. highlighting errors.
- `--n-color-status-highlight`: `rgb(142, 78, 198)` — Default highlight status colour. Used to highlight specific items in the interface.
- `--n-color-status-highlight-weak`: `rgb(249, 241, 254)` — Weak highlight status colour. Used to highlight specific items in the interface.
- `--n-color-status-info`: `rgb(62, 99, 221)` — Default info status colour. Used to convey something informal.
- `--n-color-status-info-weak`: `rgb(240, 244, 255)` — Weak info status colour. Used to convey something informal.
- `--n-color-status-neutral`: `rgb(255, 255, 255)` — Default neutral status colour.
- `--n-color-status-neutral-weak`: `rgb(241, 243, 245)` — Weak neutral status colour. Used for the badge default state.
- `--n-color-status-notification`: `rgb(231, 84, 54)` — Default notification indicator colour. Used to convey unread information.
- `--n-color-status-progress`: `rgb(0, 127, 153)` — Default progress status colour. Used to convey something is in progress.
- `--n-color-status-progress-weak`: `rgb(231, 249, 251)` — Weak progress status colour. Used to convey something is in progress.
- `--n-color-status-success`: `rgb(29, 134, 51)` — Default success status colour. Used to convey success states. For example, you might show a success message that tells the user that changes were saved or something was completed.
- `--n-color-status-success-weak`: `rgb(235, 249, 235)` — Weak success status colour.  Used to convey success states. For example, you might show a success message that tells the user that changes were saved or something was completed.
- `--n-color-status-warning`: `rgb(246, 205, 90)` — Default warning status colour. Used to display information that needs user’s attention and may require further steps.
- `--n-color-status-warning-weak`: `rgb(255, 250, 225)` — Weak warning status colour. Used to display information that needs a user’s attention and may require further steps.
- `--n-color-surface`: `rgb(255, 255, 255)` — Default application surface colour. Use this for e.g. card backgrounds.
- `--n-color-surface-background`: `rgb(247, 247, 248)` — Default surface background colour. Use this for the application background layer behind raised surfaces.
- `--n-color-surface-canvas`: `rgb(252, 252, 252)` — Default canvas surface colour. Use this for the outermost canvas layer beneath the application background.
- `--n-color-surface-lowered`: `rgb(230, 232, 235)` — Default lowered surface colour. Use this when you need to make a specific layer to appear lower than the surface colour, e.g. progress bar.
- `--n-color-surface-raised`: `rgb(250, 251, 251)` — Default raised surface colour. Use this when you need to separate a specific layer from the surface colour, e.g. table headers.
- `--n-color-text`: `rgb(12, 26, 61)` — Default text colour. Used as the main text colour throughout the UI. Provides good and legible contrast for our content.
- `--n-color-text-danger`: `rgb(178, 48, 21)` — Default text colour for danger messages. Also used for the danger badge text.
- `--n-color-text-error`: `rgb(210, 64, 35)` — Default text colour for error messages. Also used for the danger badge text.
- `--n-color-text-highlight`: `rgb(121, 58, 175)` — Highlight text colour. Used for the highlight badge text.
- `--n-color-text-info`: `rgb(52, 81, 178)` — Info text colour. Used for the info badge text.
- `--n-color-text-link`: `rgb(53, 89, 199)` — Default link text colour. Used for all paragraph level links in an user interface.
- `--n-color-text-neutral`: `rgb(85, 89, 93)` — Neutral text colour. Used for the neutral badge text.
- `--n-color-text-neutral-strong`: `rgb(17, 24, 28)` — Strong neutral text colour. Used for the strong neutral badge text.
- `--n-color-text-on-accent`: `rgb(255, 255, 255)` — Default text on accent colour. Used when text sits on the acccent colour or a dark background.
- `--n-color-text-progress`: `rgb(1, 109, 131)` — Progress text colour.
- `--n-color-text-success`: `rgb(17, 118, 39)` — Default text colour for success messages. Also used for the success badge text.
- `--n-color-text-warning`: `rgb(148, 105, 0)` — Warning text colour. Used for the warning badge text.
- `--n-color-text-warning-strong`: `rgb(51, 40, 16)` — Strong warning text colour. Used for the strong warning badge text.
- `--n-color-text-weak`: `rgb(54, 67, 74)` — Weak text colour. Used for e.g. introduction paragraphs and help texts that are coupled with form elements.
- `--n-color-text-weaker`: `rgb(102, 118, 128)` — Weaker text colour. Used for e.g. disabled buttons, footers, table headings, captions and placeholder texts.
- `--n-color-text-weakest`: `rgb(178, 186, 191)` — Weakest text colour. Used for e.g. disabled input text and placeholder text in focused inputs.

## Border Radius

- `--n-border-radius-sharp`: `0.02em` — This is sharp border radius.
- `--n-border-radius-s`: `3px` — This is small border radius.
- `--n-border-radius`: `5px` — This is the default border radius.
- `--n-border-radius-circle`: `50%` — This is for creating rounded avatars and similar objects.
- `--n-border-radius-pill`: `999px` — This is for creating pill shaped tags and similar.

## Box Shadow

- `--n-box-shadow`: `0 1px 3px rgba(12, 12, 12, 0.09)` — Default box shadow. Used with buttons, active states, and such.
- `--n-box-shadow-header`: `0 1px 5px rgba(12, 12, 12, 0.05)` — Default box shadow for header component.
- `--n-box-shadow-card`: `0 0 0 1px var(--n-color-border), 0 1px 5px rgba(12, 12, 12, 0.05), 0 0 40px rgba(12, 12, 12, 0.015)` — Default box shadow for card component that creates drop shadow, raised surface, and a border around the card.
- `--n-box-shadow-nav`: `0 0 0 1px var(--n-color-border), 0 5px 17px rgba(12, 12, 12, 0.14)` — Default box shadow for navigation component. Used in collapsed state.
- `--n-box-shadow-popout`: `0 4px 12px rgba(12, 12, 12, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)` — Default box shadow to be used with all pop out windows.
- `--n-box-shadow-modal`: `0 24px 38px 3px rgba(12, 12, 12, 0.16), 0 9px 86px 8px rgba(12, 12, 12, 0.1), 0 11px 15px -7px rgba(12, 12, 12, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)` — Default box shadow for modal component. Used in dialogs, modals, and such.

## Font Size

- `--n-font-size-xxxl`: `2.25rem` — This is the xxx-large font size.
- `--n-font-size-xxl`: `1.5rem` — This is the xx-large font size.
- `--n-font-size-xl`: `1.25rem` — This is the x-large font size.
- `--n-font-size-l`: `1rem` — This is the large font size.
- `--n-font-size-m`: `0.875rem` — This is the base font size.
- `--n-font-size-s`: `0.75rem` — This is the small font size.
- `--n-font-size-xs`: `0.6875rem` — This is the x-small font size.
- `--n-font-size-xxs`: `0.625rem` — This is the xx-small font size.

## Font

- `--n-font-family`: `'Nordhealth Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'` — Inter is the default UI font family utilized by all our applications.
- `--n-font-family-code`: `'Nordhealth Mono', monospace, monospace` — This font family is utilized by all our themes for code.
- `--n-font-features`: `'kern' 1, 'tnum' 1, 'calt' 1, 'case' 1, 'cv05' 1, 'zero' 1, 'cv08' 0, 'ss03' 1` — This token includes the default font feature settings to be used together with our font family.
- `--n-font-features-reduced`: `'kern' 1, 'tnum' 0, 'calt' 1, 'case' 1, 'cv05' 1, 'zero' 0, 'cv08' 0, 'ss03' 1` — This token includes a font feature variation with reduced legibility. This is mainly used for display headings.
- `--n-font-weight`: `400` — Default font weight for body text.
- `--n-font-weight-active`: `500` — Default font weight for active items.
- `--n-font-weight-heading`: `600` — Default font weight for headings.
- `--n-font-weight-strong`: `670` — Default font weight for strong.

## Line Height

- `--n-line-height-tightest`: `1` — This token sets line height equal to the font size (no extra leading), equivalent to 100%. Tighter than Line Height Tight.
- `--n-line-height-tight`: `1.15` — This token can be used when you don’t want line height taking any extra space.
- `--n-line-height-heading`: `1.2` — This is the default line height for headings.
- `--n-line-height-caption`: `1.3` — This is the default line height for captions, hint texts and form errors.
- `--n-line-height`: `1.5` — This is the default line height for body text.
- `--n-line-height-form`: `20px` — This is the default line height for form inputs, textareas and buttons.

## Size

- `--n-size-icon-xxs`: `8px` — This is a xx-small size for icons. Most commonly used for the caret icons inside navigation items and page progress icons.
- `--n-size-icon-xs`: `10px` — This is a x-small size for icons. Most commonly used inside small form fields and buttons.
- `--n-size-icon-s`: `12px` — This is a small size for icons. Most commonly used for icons inside buttons and select menu toggles.
- `--n-size-icon-m`: `16px` — This is a medium size for icons. Most commonly used for icons that sit inside large buttons.
- `--n-size-icon-l`: `24px` — This is a large size for icons. Most commonly used for illustrative purposes.
- `--n-size-icon-xl`: `36px` — This is a x-large size for icons. Most commonly used for illustrative purposes.
- `--n-size-top-bar`: `52px` — This is the default height of the top bar. It is also used for the small header variant.
- `--n-size-icon-xxl`: `72px` — This is a xx-large size for icons. Most commonly used for illustrative purposes.

## Space

The `--n-space-*` tokens are deprecated for consumer styling. Prefer [numeric Tailwind spacing](/css/tailwind/#spacing), such as `n:p-2`, and the fixed `px` step, such as `n:p-px`. Existing tokens and named spacing utilities remain available throughout the 5.x release series. When loading `@nordhealth/css/tailwind`, their defaults derive from Tailwind's spacing base and scale with the root font size. The values below describe the standalone token exports and match Tailwind's defaults at a 16px root. Component internals continue to use these tokens; typography and icon size tokens are unaffected.

See the [migration guide](/migrations/tailwind/#numeric-spacing) for replacements in classes, CSS and inline styles.

- `--n-space-xs`: `4px` — This is a x-small space.
- `--n-space-s`: `8px` — This is a small space.
- `--n-space-m`: `16px` — This is a medium space.
- `--n-space-l`: `24px` — This is a large space.
- `--n-space-xl`: `36px` — This is a x-large space.
- `--n-space-xxl`: `72px` — This is a xx-large space.

## Transition

- `--n-transition-quickly`: `0.05s ease` — Use this design token for a quick transition. Most often used for quick hover effects on things such as links, icons and more.
- `--n-transition-slowly`: `0.2s ease` — Use this design token for a slow transition. Used for example in modals, tooltips, collapsing elements, and more.
- `--n-transition-mobile`: `0.4s ease` — Use this design token for mobile menu transitions. Used for example in the mobile version of popout and dropdown.

## Z-index

- `--n-index-deep`: `-999999` — Deep z-index is used to stack something behind everything else.
- `--n-index-default`: `1` — The default z-index for components and elements inside components.
- `--n-index-masked`: `100` — Default z-index for masked interface elements.
- `--n-index-mask`: `200` — Default z-index for masking interface elements.
- `--n-index-sticky`: `300` — Default z-index for sticky interface elements.
- `--n-index-nav`: `400` — Default z-index for navigation.
- `--n-index-top-bar`: `500` — Default z-index for top bar.
- `--n-index-overlay`: `600` — Default z-index for modal and popup overlays.
- `--n-index-spinner`: `700` — Default z-index for spinners, stacking on top of overlay.
- `--n-index-popout`: `800` — Default z-index for popouts that stacks on top of all other elements.
- `--n-index-modal`: `900` — Default z-index for modals that stacks on top of overlays and other elements.
- `--n-index-toast`: `1000` — Default z-index for toast messages that stacks on top of all other elements including modals.

---

## Usage

Design tokens are a central location to store design related information such as colors, fonts, sizes and transitions. These raw values are automatically transformed to different formats like Sass, CSS, JSON and more.

Nord Design System uses design tokens instead of hard coded values to ensure a better UI consistency across different platforms.

> [!WARNING]
> Please note that in most cases you will want to install our 
> [
> CSS Framework
> ](/docs/developer/css-framework/)
>  instead of Design Tokens package directly. CSS Framework imports this package internally and gives you both the design tokens and a wide range of shorthand utility classes to modify an element's appearance in your application.

### Installation

Before moving further, please make sure you have [Node.js](https://nodejs.org/en/){rel="[\"nofollow\"]"} installed on your machine. You can install the latest version through their website.

If you're planning on using Nord Design Tokens in a project that doesn't yet use [Node Package Manager](https://www.npmjs.com/){rel="[\"nofollow\"]"}, you'll have to first create a [package.json](https://docs.npmjs.com/files/package.json){rel="[\"nofollow\"]"} file. To do this, run npm init and follow the steps provided. Once finished, you can install Nord Design Tokens by following the instructions below.

### Install using NPM

Run in your project or website root directory (where package.json lives):

```bash
npm install @nordhealth/tokens
```

### Importing CSS Custom Properties

CSS Custom properties (sometimes referred to as CSS variables) are the recommended way to use Nord's Design Tokens. You can import them in plain CSS or Sass:

```scss
/* Import as CSS variables */
@import '~@nordhealth/tokens/lib/tokens.custom-properties.css';

.example {
  color: var(--n-color-accent);
}
```

If you're not using [Webpack](https://webpack.github.io/){rel="[\"nofollow\"]"} or similar tool for your build process, you may have to provide the full path to Node Modules:

```scss
// Import as basic variables
@import '/node_modules/@nordhealth/tokens/lib/tokens.custom-properties.css';

.example {
  color: var(--n-color-accent);
}
```

### Importing in HTML

CSS Custom properties can be imported in HTML as well. This is the most common and straightforward way to use them. Add the following to the `<head>` section of your app to get started:

```html
<link rel="stylesheet" href="https://nordcdn.net/ds/tokens/9.0.4/tokens.custom-properties.css" />
```

### Importing in JavaScript

In JavaScript, token names are formatted in lower camelCase. To import the design tokens, require the provided ES module:

```js
// Import design tokens
const tokens = require('@nordhealth/tokens')

// Console.log accent color value
console.log(tokens.nColorAccent)
```

In JSON, design token names are formatted in snake_case:

```js
// Import design tokens
const tokens = require('@nordhealth/tokens/lib/tokens.json')

// Console.log accent color value
console.log(tokens.n_color_accent)
```

If your project supports ECMAScript Modules, you can also use the import syntax:

```js
// Import design tokens
import * as tokens from '@nordhealth/tokens'

// …or… import a single design token
import { nColorAccent } from '@nordhealth/tokens'
```

### Importing in Sass

Sass variables and map keys are formatted in kebab-case. There're a few ways to import them. The simplest way is to reference and import the tokens partial directly:

```scss
// Import as basic variables
@import '~@nordhealth/tokens/lib/tokens.scss';

.example {
  color: $n-color-accent;
}

// Import a Sass map of all tokens
@import '~@nordhealth/tokens/lib/tokens.map.scss';

.example {
  color: map-get($tokens-map, 'n-color-accent');
}
```

### Accessing brand themes in JavaScript and Sass

All our brand specific tokens have an appendix in their name. We don't surface this in the token documentation because the recommended way to use the tokens is via CSS Custom Properties that allows us to use the [Nord Themes package](/themes/) to override the default colors.

If you have a need to directly access specific brand's colors in e.g. Sass or JavaScript, you can do it by adding the following appendix into the color name:

```scss
.example {
  // To access veterinary brand colors, use -vet appendix
  color: $n-color-accent-vet;

  // To access therapy brand colors (default), no appendix is needed
  color: $n-color-accent;
}
```

Same when using our Common.js module:

```js
// To access veterinary brand colors, use Vet appendix
console.log(tokens.nColorAccentVet)

// To access therapy brand colors (default), no appendix is needed
console.log(tokens.nColorAccent)
```

### List of all available formats

Below you can find a list of all available formats and paths to them.

- **Sass:** `@nordhealth/tokens/lib/tokens.scss`
- **Sass Map:** `@nordhealth/tokens/lib/tokens.map.scss`
- **CSS Custom Properties:** `@nordhealth/tokens/lib/tokens.custom-properties.css`
- **Less:** `@nordhealth/tokens/lib/tokens.less`
- **Stylus:** `@nordhealth/tokens/lib/tokens.styl`
- **Module.js:** `@nordhealth/tokens/lib/tokens.module.js`
- **Common.js:** `@nordhealth/tokens/lib/tokens.common.js`
- **JSON:** `@nordhealth/tokens/lib/tokens.json`
- **Raw JSON:** `@nordhealth/tokens/lib/tokens.raw.json`
- **iOS JSON:** `@nordhealth/tokens/lib/tokens.ios.json`
- **Android XML:** `@nordhealth/tokens/lib/tokens.android.xml`

### Testing integration

To quickly test if Nord Design Tokens are correctly installed, follow the below steps.

1. Require common.js module: `const tokens = require("@nordhealth/tokens")`
2. Use console log to output a list of all tokens: `console.log(tokens)`
3. If everything works, you should now see a long list of Design Tokens in your console.

### Examples

- The very page you're looking at is using tokens: [Nord Design Tokens](/tokens/)
- For more concrete examples, see [Nordhealth Pay prototype](https://nordhealth.github.io/nordhealth-pay-prototype/os-theme-support/){rel="[\"nofollow\"]"}.

### Developing tokens

The design tokens package in Nord Design System can be found under `packages/tokens`. It's built with [Theo](https://github.com/salesforce-ux/theo){rel="[\"nofollow\"]"} that transforms YAML based design tokens into a variety of output formats.

The following are the most commonly used commands during development:

- `pnpm start` - Compile tokens, start watching for changes.
- `pnpm build` - Builds the project.
- `pnpm test` - Run all tests once.

### Can I use Nord in my own project?

Nord Design System is solely meant for building digital products and experiences for [Nordhealth](https://nordhealth.com){rel="[\"nofollow\"]"}. Please see the [terms of use](/resources/terms/) for full license details.

### Getting support

If you experience any issues while getting started with Nord Design Tokens, please head over to the [Support page](/resources/support/) for more guidelines and help.

<!--
Source: https://nordhealth.design/raw/tokens.md
-->
