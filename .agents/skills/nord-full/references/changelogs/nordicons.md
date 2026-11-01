# Nordicons Changelog

> 

*Nord Design System’s parts are versioned and released using Node Package Manager. NPM’s [organization page](https://www.npmjs.com/org/nordhealth) lists all packages available and their most recent versions.*

## Nordicons

### 3.21.0 `New`

- Adds 3 new icons to [Nordicons](/icons/), taking the set from 308 to 311: `text-color`, `text-highlight` and `text-horizontal-line`. They are rich text editor marks for text colour, background colour and a horizontal rule. `text-color` and `text-highlight` leave the bottom of the icon empty: an icon has one colour, so the editor draws the selected colour as a bar in that space. (#734)
- Release date 15.10.2026.

### 3.20.0

- Adds 3 new icons to [Nordicons](/icons/), taking the set from 305 to 308: `interface-add-day`, `interface-calendar-add` and `interface-calendar-extend`. All three are scheduling marks: adding a day, adding an appointment to a calendar, and extending an existing booking. (#728)
- Release date 18.9.2026.

### 3.19.0

- Adds 5 new icons to [Nordicons](/icons/), taking the set from 300 to 305: `generic-patient-unassigned`, `user-unassigned`, `interface-checked-circle-filled`, `interface-checked-circle-dashed`, and `medical-weight`. The two unassigned icons pair a dashed outline with the existing patient and user marks, for a record that has nobody attached to it yet. The two checked-circle variants sit beside `interface-checked-circle` — one solid, one dashed for a step that is provisional rather than confirmed.
- Release date 13.8.2026.

### 3.18.0

- Maintenance release published alongside the July 2026 Nord component release; no icon assets changed.
- Release date 29.7.2026.

### 3.17.0

- Removes 4 icons from [Nordicons](/icons/) that duplicated existing ones: `arrow-skip-back` and `interface-fast-backward` (duplicates of `interface-rewind`), `interface-help-circle` (duplicate of `interface-help`), and `interface-sign-in` (visually identical to `interface-logout` — consumers can flip the survivor with `transform: scaleX(-1)` for the sign-in direction).
- Merges keywords from the removed icons into surviving ones so search still surfaces them: `interface-rewind` now matches `back`, `previous`, `media`, `player`, `step backward`, and `fast`; `interface-help` now matches `tooltip` and `info`.
- Release date 16.6.2026.

### 3.16.2

- Replaces hardcoded black fill with `currentColor` on `navigation-drawer-left-collapse`, `navigation-drawer-left-expand`, `navigation-drawer-right-collapse`, `navigation-drawer-right-expand`, and `navigation-scheduling` so the icons inherit text color.
- Release date 11.6.2026.

### 3.16.1

- Adds 3 new icons to [Nordicons](/icons/): `interface-expand`, `interface-stop-filled`, and `navigation-scheduling`.
- Release date 11.6.2026.

### 3.16.0

- Adds 28 new icons to [Nordicons](/icons/): `arrow-down-double`, `arrow-skip-back`, `arrow-up-double`, `generic-ambulance`, `generic-calculator`, `generic-car`, `generic-cube`, `generic-gift`, `generic-signal`, `interface-circle`, `interface-clipboard`, `interface-container`, `interface-emoji-happy`, `interface-emoji-neutral`, `interface-emoji-sad`, `interface-eyedropper`, `interface-fast-backward`, `interface-help-circle`, `interface-inbox`, `interface-key`, `interface-loading`, `interface-sign-in`, `interface-spinner`, `interface-tag-filled`, `navigation-drawer-left-collapse`, `navigation-drawer-left-expand`, `navigation-drawer-right-collapse`, and `navigation-drawer-right-expand`.
- Adds legacy keyword aliases to icon tags so renamed icons remain searchable by their previous names.
- Syncs reskinned icons with the centering offsets defined in the mapping page.
- Release date 9.6.2026.

### 3.15.0

- Adds new icon to [Nordicons](/icons/): `arrow-replace`.
- Release date 11.2.2026.

### 3.11.0

- Adds new icon to [Nordicons](/icons/): `generic-pet-food`.
- Release date 2.7.2025.

### 3.10.0

- Adds new icon to [Nordicons](/icons/): `interface-table`.
- Release date 5.6.2025.

### 3.9.0

- Adds 3 new icons to [Nordicons](/icons/): `text-heading-1`, `text-heading-2` and `text-heading-3`.
- Release date 12.5.2025.

### 3.8.0

- Adds new icon to [Nordicons](/icons/): `text-ordered-list`.
- Release date 8.5.2025.

### 3.7.1

- Updates readme document details.
- Release date 6.5.2025.

### 3.7.0

- Adds 4 new icons to [Nordicons](/icons/): `generic-consent-agreed`, `generic-consent-declined`, `generic-consent-expired` and `generic-consent-not-asked`.
- Release date 13.2.2025.

### 3.6.0

- Adds `arrow-right-double` and `arrow-left-double` icons to [Nordicons](/icons/).
- Release date 29.1.2025.

### 3.5.2

- Fixes an issue where the components package was loading an outdated version of the Nordicons from the CDN.
- Release date 27.9.2024.

### 3.5.1

- Migrates the monorepo to use [pnpm workspaces](https://pnpm.io/workspaces){rel="[\"nofollow\"]"} instead.
- Release date 24.9.2024.

### 3.5.0

- Updates all package dependencies to latest.
- Release date 17.9.2024.

### 3.4.0

- Adds 4 new icons to [Nordicons](/icons/): `interface-dnr`, `interface-cpr-acpr`, `interface-cpr-unknown` and `interface-ai`.
- Release date 22.5.2024.

### 3.3.0

- Adds `interface-archive`, `interface-error`, `medical-birthday` and `navigation-catalog` icons to [Nordicons](/icons/).
- Release date 14.2.2024.

### 3.2.0

- Adds `interface-whiteboard`, `interface-payment-terminal` and `generic-unchipped` icons to [Nordicons](/icons/).
- Release date 17.10.2023.

### 3.1.0

- Adds new `interface-duplicate` icon into [Nordicons](/icons/).
- Release date 9.8.2023.

### 3.0.1

- Replaces the old `navigation-tasks` icon with a new larger one.
- Release date 31.5.2023.

### 3.0.0

- **New major release that brings [various improvements and bug fixes](/migrations/3.0.0/)!!** ✨🥳
- This release introduces 13 new icons called `interface-warning-small`, `file-invoice`, `file-patient-records`, `file-treatment-plan`, `generic-company`, `generic-farm`, `generic-hospital`, `medical-drip`, `medical-neutered`, `medical-spayed`, `medical-surgery`, `navigation-finances`, `navigation-reports-2`.
- For detailed description of all changes, please see [Migration guide](/migrations/3.0.0/).
- Release date 19.5.2023.

[Migration guide](/migrations/3.0.0/)



### 2.0.1

- Updates the documentation for the package.
- Release date 29.3.2023.

### 2.0.0

- New major release, updates all existing [Nordicons with a new design style](/icons/)!
- This update moves our icon style closer to the Nordhealth brand. All icons now closely follow the brand guidelines and have strong affiliation with our logomark and design language.
- With this update we’re overcoming issues with the old icon style which was somewhat limiting our creativity and possibilities.
- This update allows us to get rid of licensing issues with the previous iconset as it prevented us from sharing any of our work in Figma community or GitHub.
- Adds new `medical-prescription`, `interface-send`, `interface-login`, `interface-like-filled`, `interface-favorite-filled`, `interface-globe`, `interface-dislike-filled`, and `interface-bookmark-filled` icons.
- Make SVG Lint config more strict about the size of the icons which should always be 20 × 20px.
- Removes `keyboard-alt` and `interface-help-2` icons from Nordicons. If you’re using `interface-help-2`, please replace with more universal `interface-help` icon.
- Fixes the order of icons metadata to be consistent for all icons.
- Updates all screenshot diff tests for icons and components.
- Updates [iconography documentation](/design/foundations/iconography/) to match the new style and guidelines.
- Release date 25.2.2023.

### 1.8.0

- Adds new `navigation-timeline` icon to [Nordicons](/icons/).
- Release date 4.10.2022.

### 1.7.0

- Adds new animal category icons: `generic-suidae`, `generic-sheep`, `generic-rodents`, `generic-reptilia`, `generic-leporidae`, `generic-fish`, `generic-feline`, `generic-equidae`, `generic-cattle`, `generic-canine`, `generic-birds`, `generic-arachnida`, `generic-amphibia`.
- Changes `medical-insurance` icon from “a hand holding a plus sign” to represent “a shield.”
- The small icon dimensions are changed from `11px` to `12px`.
- Improves `interface-dropdown-small` icon positioning.
- Release date 9.9.2022.

### 1.6.0

- Adds new `interface-cancelled-small`, `interface-complete-small`, `interface-incomplete-small`, and `interface-partially-complete-small` icons.
- Release date 7.9.2022.

### 1.5.0

- Adds new `medical-insurance` icon.
- Updates tags for `medical-heart-rate` icon to cover usage with health plans.
- Release date 24.8.2022.

### 1.4.0

- Adds new `interface-grabber`, `interface-grid`, `interface-sort-small`, `interface-sort-up-small` and `interface-sort-down-small` icons.
- Release date 10.8.2022.

### 1.3.9

- Fixes potential security vulnerability in the dependencies.
- Release date 14.6.2022.

### 1.3.8

- Adds prepare script to fill gaps in `npm run bootstrap` so that components pkg is ready to start immediately after.
- Release date 20.5.2022.

### 1.3.7

- Adds two new icons into Nordicons: `interface-info` and `interface-warning`.
- Release date 10.3.2022.

### 1.3.5

- Adds new `interface-checked-circle` icon.
- Release date 7.3.2022.

### 1.3.4

- Adds new `interface-info` icon.
- Release date 5.3.2022.

### 1.3.3

- Updates `medical-bandage`, `medical-blood`, `medical-instrument-stethoscope`, `medical-pill` and `medical-radiology-scan` to match the style of the rest of the icons.
- Adds new `interface-content-book` icon.
- Release date 3.3.2022.

### 1.3.2

- Updates licensing and package.json details.
- Release date 24.2.2022.

### 1.3.1

- Outputs all icons as ES Modules now.
- Simplifies the build logic behind the scenes.
- Release date 4.12.2021

### 1.2.2

- Adds three new icons into the library: `generic-bug`, `generic-github` and `generic-slack`.
- Release date 20.10.2021

### 1.2.0

- We updates [Nordicons](/icons/) interface to support downloading icons in addition to directly copying the vectors to a Figma file.
- We manually fixed 42 icons to work in Figma when you use the copy paste functionality.
- Release date 17.10.2021

### 1.1.2

- Fix currentColor definitions in 14 icons. An issue that prevented changing color of these icons.
- Updates all tags in Nordicons package to make them more consistent.
- Release date 16.10.2021

### 1.0.1

- Improves the meta data of icons and tagging.
- Updates Nord package dependencies to latest.
- Release date 15.10.2021.

### 1.0.0

- Initial release of `@nordhealth/icons`.
- Comes with 188 carefully hand picked and designed icons.
- For documentation and usage guidelines, please see [Nordicons](/icons/).
- Release date 14.10.2021.

<!--
Source: https://nordhealth.design/raw/changelogs/nordicons.md
-->
