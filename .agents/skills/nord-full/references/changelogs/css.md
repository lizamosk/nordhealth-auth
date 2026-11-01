# CSS Framework Changelog

> 

*Nord Design System’s parts are versioned and released using Node Package Manager. NPM’s [organization page](https://www.npmjs.com/org/nordhealth) lists all packages available and their most recent versions.*

## CSS Framework

### 5.3.0

- Makes numeric Tailwind spacing the preferred consumer API, with a statically emitted `0.25rem` base (`--n-spacing`) for native CSS and inline styles.
- Supports numeric utilities such as `n:p-2`, `n:gap-4` and the fixed one-pixel `px` step, including negative logical margins.
- Makes Tailwind the source of truth for spacing in its entry point. Deprecated `--n-space-*` defaults now derive from `--n-spacing`, so legacy and numeric spacing scale together with the root font size and global theme customisations. Default sizes are unchanged at a 16px root. Standalone token exports and the legacy CSS entry point are unchanged.
- Retains deprecated named spacing utilities and `--n-space-*` variables throughout the 5.x release series. Individual legacy token overrides still affect legacy consumers, but do not change numeric utilities. See the [numeric spacing migration guide](/migrations/tailwind/#numeric-spacing). Typography, icon sizes and component size APIs are unchanged.
- Release date 23.10.2026.

### 5.2.4

- Maintenance release that aligns the package with the July 2026 Nord component release; no CSS framework source changes.
- Release date 29.7.2026.

### 5.2.0 `New`

- Generates `n-` utility classes and Tailwind `bg-*` mappings for the new navigation and surface color tokens (`surface-canvas`, `surface-background`, `nav-selected`) from the NDS-180 color refresh. (#670)
- Release date 2.7.2026.

### 5.1.0

- Exposes a new `text-xxs` Tailwind utility class and `n-font-size-xxs` CSS class backed by the `--n-font-size-xxs` design token (10px / 0.625rem), used by the `counter` utility and small badge labels in [Web Components](/components/).
- Release date 16.6.2026.

### 5.0.8 → 5.0.9

- Coupled version bump alongside the main monorepo release; no CSS framework source changes.

### 5.0.7

- Fixes the default background of the `.n-input` utility class and the Tailwind `@utility input` from `--n-color-active` to `--n-color-surface`.
- Adds explicit disabled state background (`--n-color-active`) and readonly state background (`--n-color-active`) with preserved text color to both `.n-input` and the Tailwind `@utility input`.
- Release date 6.5.2026.

### 5.0.6

- Updates all package dependencies to latest.

### 5.0.5

- Updates all package dependencies to latest.

### 5.0.4

- Includes Nord design token CSS custom properties (`tokens.custom-properties.css`) in the Tailwind CSS bundle, ensuring theme variables are available when using the CSS framework standalone.
- Release date 23.3.2026.

### 5.0.2 `New`

- Adds `@nordhealth/fonts` as an optional peer dependency. This helps package managers surface the recommended font package without requiring it.
- Release date 27.2.2026.

### 5.0.1

- Fixes the `.n:reset` component to correctly apply the theme configured font-family, font-weight, font-feature-settings, text color, and accent color.
- Release date 24.2.2026.

### 5.0.0

- **New major release that replaces our custom logical property utilities with Tailwind CSS v4's [built-in logical property support](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.2.0){target="_blank"}. This aligns our CSS framework with the Tailwind ecosystem and reduces custom code maintenance.** ✨
- **BREAKING:** Removes custom logical property utilities that are now provided by Tailwind CSS v4 built-ins.

  - **Padding:** `p-is-*`, `p-ie-*`, `p-bs-*`, `p-be-*`, `p-i-*`, `p-b-*` → use TW4's `ps-*`, `pe-*`, `pbs-*`, `pbe-*`, `px-*`, `py-*`
  - **Margin:** `m-is-*`, `m-ie-*`, `m-bs-*`, `m-be-*`, `m-i-*`, `m-b-*` (including negative and auto variants) → use TW4's `ms-*`, `me-*`, `mbs-*`, `mbe-*`, `mx-*`, `my-*`
  - **Sizing:** `is-*`, `bs-*`, `min-is-*`, `max-is-*`, `min-bs-*`, `max-bs-*` → use TW4's `inline-*`, `block-*`, `min-inline-*`, `max-inline-*`, `min-block-*`, `max-block-*`
  - **Insets:** `inset-bs-*`, `inset-be-*`, `-inset-bs-*`, `-inset-be-*` → use TW4's built-in equivalents (same names)
  - **Borders:** `border-is`, `border-ie`, `border-bs`, `border-be`, `border-block`, `border-inline` (Nord-styled) → removed due to naming conflict with TW4's `border-bs`/`border-be` width utilities. Use TW4 border width + `border-default` for color.
  - **Space between:** `space-i-*`, `space-b-*` → use TW4's `space-x-*`, `space-y-*` (now use logical CSS)
- **Removed:** `resize-block/inline`, `overscroll-b/i-*`, `rounded-bs/be-*` custom utilities (expected to be added in future TW4 releases).
- **Kept:** `container-*` (no TW4 equivalent).
- Release date 19.2.2026.

### 4.4.1

- Renames `shadow` to `shadow-default` Tailwind utility for consistency with other default-suffixed tokens (e.g., `rounded-default`, `border-default`).
- Release date 18.2.2026.

### 4.4.0

- Adds negative logical margin utilities for all directions: inline-start, inline-end, block-start, block-end, inline, and block (e.g., `n:-m-is-m`, `n:-m-b-l`).
- Adds negative logical inset utilities for block-start and block-end (e.g., `n:-block-start-s`).
- Release date 11.2.2026.

### 4.3.1

- Fixes radius configuration to correctly support `n:rounded` as the default border radius value.
- Release date 6.2.2026.

### 4.3.0

- **Adds [Tailwind CSS v4 integration](/css/tailwind/)** - a new entry point (`@nordhealth/css/tailwind`) that maps all Nord Design Tokens to Tailwind theme variables.
- All utilities use the `n:` prefix (variant syntax) to prevent collisions with other frameworks.
- Includes Nord components as Tailwind utilities: `.n:reset`, `.n:typeset`, `.n:dl`, and form utilities.
- Adds logical property utilities for RTL/LTR support (`n:p-is-m`, `n:m-ie-l`, etc.).
- See the [Tailwind CSS documentation](/css/tailwind/) for usage details.
- See the [Migration Guide](/migrations/tailwind/) for migrating from legacy CSS.
- Release date 3.2.2026.

### 4.2.0

- Adds new `.n-inline-size-full` [utility helper](/docs/developer/css-framework/#miscellaneous-utilities) for setting the inline size of an element to 100%.
- Adds new `.n-flex-1` and `.n-flex-auto` [stack utility helpers](/docs/developer/css-framework/#stack-utilities) for setting the `flex` property of an element to `1` or `auto`.
- Release date 4.11.2025.

### 4.1.0

- Adds type definition file with an ambient module declaration. This prevents a TypeScript error when you have `noUncheckedSideEffectImports` enabled and try to `import "@nordhealth/css"` in TypeScript.
- Release date 19.5.2025.

### 4.0.0

- **New major release that unifies the two design system platforms into a one platform that can serve all of Nordhealth. This change allows us to better support the next generation of apps and generative AI experiences at Nordhealth.** ✨
- This new version ships with two distinctive brands, [therapy](/?theme=nord) and [veterinary](?theme=vet). You can choose the currently active brand from the top left corner of this documentation website. Once chosen, you will get content that is tailored specifically for the brand and the business unit you’re working in. [Read more](/migrations/4.0.0/).
- This release doesn’t include breaking changes for the existing users of Nord Design System.
- For detailed description of all changes and the steps required for migration, please see the [Migration Guide](/migrations/4.0.0/).
- Release date 6.5.2025.

### 3.4.0

- Expands the [stack utility helpers](/docs/developer/css-framework/#stack-utilities) for more fine-grained positioning, by having a way to directly set `justify-content` and `align-items`.
- Adds a `.n-stack-no-wrap` utility helper to remove the default wrapping of the [stack utility helpers](/docs/developer/css-framework/#stack-utilities).
- Release date 29.1.2025.

### 3.3.1

- Migrates the monorepo to use [pnpm workspaces](https://pnpm.io/workspaces){rel="[\"nofollow\"]"} instead.
- Release date 24.9.2024.

### 3.3.0

- Updates all package dependencies to latest.
- Release date 17.9.2024.

### 3.2.1

- Updates readme document details.
- Release date 14.6.2024.

### 3.2.0

- Adds new `var(--n-size-top-bar)` [sizing token](/tokens/#size) that is used for setting the default height of the [Top Bar component](/components/top-bar/).
- Release date 11.4.2024.

### 3.1.1

- Remove redundant `overscroll-behavior-block: none;` from CSS Framework.
- Release date 18.10.2023.

### 3.1.0

- This release adds a new [Counter utility](/docs/developer/css-framework/#miscellaneous-utilities) that can be used for showing the unread messages count in the [Top Bar component](/components/top-bar/?example=advanced).
- Release date 31.5.2023.

### 3.0.0

- **New major release that brings [various improvements and bug fixes](/migrations/3.0.0/)!!** ✨🥳
- `.n-stack` and `.n-gap` now has a gap of [`--n-space-m`](/tokens/#space) by default instead of none, to mirror the [Stack component’s](/components/stack/) default behaviour.
- We’ve introduced the following new color variables:

  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-text-danger);"></span> `var(--n-color-text-danger)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-text-highlight);"></span> `var(--n-color-text-highlight)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-text-info);"></span> `var(--n-color-text-info)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-text-neutral);"></span> `var(--n-color-text-neutral)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-text-neutral-strong);"></span> `var(--n-color-text-neutral-strong)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-text-progress);"></span> `var(--n-color-text-progress)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-text-warning);"></span> `var(--n-color-text-warning)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-text-warning-strong);"></span> `var(--n-color-text-warning-strong)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-border-danger);"></span> `var(--n-color-border-danger)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-border-highlight);"></span> `var(--n-color-border-highlight)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-border-info);"></span> `var(--n-color-border-info)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-border-neutral);"></span> `var(--n-color-border-neutral)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-border-progress);"></span> `var(--n-color-border-progress)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-border-success);"></span> `var(--n-color-border-success)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-border-warning);"></span> `var(--n-color-border-warning)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-surface-lowered);"></span> `var(--n-color-surface-lowered)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-status-notification);"></span> `var(--n-color-status-notification)`
  - <span className="[\"n:border\",\"n:border-strong\",\"n:rounded\"]" style="display:inline-block;width:20px;height:20px;background:var(--n-color-accent-secondary);"></span> `var(--n-color-accent-secondary)`
- For detailed description of all changes, please see [Migration guide](/migrations/3.0.0/).
- Breaking changes are also covered in the [migration guide](/migrations/3.0.0/).
- Release date 19.5.2023.

[Migration guide](/migrations/3.0.0/)



### 2.5.1

- Add support for using `n-input` class on wrapper elements.
- Add accompanying `n-input-invalid` class.
- Improves documentation for misc utilities in [CSS Framework](/docs/developer/css-framework/).
- Improves documentation for border utilities in [CSS Framework](/docs/developer/css-framework/).
- Release date 10.5.2023.

### 2.5.0

- Adds new `var(--n-space-xs)` space token.
- Adds new `xs` space utilities and missing alignment helpers to [CSS Framework](/docs/developer/css-framework/).
- Release date 29.3.2023.

### 2.4.1

- Updates Nord Design Tokens to the latest version.
- Release date 24.10.2022.

### 2.4.0

- Adds [Description List utility helper](/docs/developer/css-framework/#description-list-utility) to the CSS Framework.
- See updated [usage examples for Drawer component](/components/drawer/?example=complex).
- Release date 28.9.2022.

### 2.3.0

- Adds new `xs` (10px) and `xxs` (8px) icon sizes which are replacements for the old `xs` size. This is a non-breaking change so no actions are required from your side.
- This is done to improve the rendering of our smallest icons since they now align with the [pixel grid used for icons](/design/foundations/iconography/).
- Release date 16.9.2022.

### 2.2.1

- Improves documentation and examples for new status colors.
- Release date 15.9.2022.

### 2.2.0

- The small icon dimensions are changed from `11px` to `12px`.
- Release date 9.9.2022.

### 2.1.0

- Adds border radius tokens as utility helpers to apply rounded corners to elements.
- Adds box shadow utility helpers to help reflect the elevation of a component or element.
- Release date 9.9.2022.

### 2.0.0

- We’ve redesigned the underlying color system to make it more extensible and better cover the use cases of our different products. For more details, please see [migration guidelines](/migrations/2.0.0/).
- Release date 7.9.2022.

[Migration guidelines](/migrations/2.0.0/)

### 1.4.1

- Converts `var(--n-size-icon-s)` token from 12px to 11px, so that it looks visually more balanced inside buttons and similar elements.
- Updates all Node.js dependencies to latest.
- Release date 17.8.2022.

### 1.4.0

- Adds margin auto helpers so elements can be centered vertically, horizontally, and both.
- Adds grid item helpers to do the same within a grid.
- Updates demos so that stack and grid helpers are more clearly presented.
- Updates demos to show new helpers.
- Updates docs to explain new helpers.
- Release date 10.8.2022.

### 1.3.5

- Deprecates `n-index-header` and `n-index-dropdown` tokens.
- Adds new `n-index-nav` design token.
- Release date 4.8.2022.

### 1.3.4

- Bugfix: Missing borders and colors in CSS Framework.
- Release date 27.6.2022.

### 1.3.3

- Adds two new high contrast [Nord themes](/design/themes/).
- Release date 20.6.2022.

### 1.3.2

- Small bug fixed and performance improvements.
- Release date 17.6.2022.

### 1.3.1

- We’ve removed skeleton related gradients from CSS Framework, since the new [Skeleton component](/components/skeleton/) does not use them anymore.
- Release date 16.6.2022.

### 1.3.0

- Switches to using REM based font-sizes instead of pixels for better accessibility.
- Adds new `n-color-overlay` design token that allows you to distinguish a modal layer from the layer underneath.
- Release date 14.6.2022.

### 1.2.1

- Updates to documentation and examples.
- Release date 24.5.2022.

### 1.2.0

- Adds new `.n-clinic-icon` helper class to generate clinic icons for Navigation and Dropdown components.
- Updates documentation for misc helpers to include examples of new clinic icons.
- Release date 20.5.2022.

### 1.1.2

- Adds new accent color styles into `.n-reset` utility class.
- Adds prepare script to fill gaps in `npm run bootstrap` so that components pkg is ready to start immediately after.
- Release date 20.5.2022.

### 1.1.1

- Adds web server for easier local development of the CSS Framework.
- Add new grid helpers and usage example, please see the [documentation](/docs/developer/css-framework/#grid-and-container-utilities).
- Release date 11.5.2022.

### 1.0.5

- Adjust the specificity level of typescale styles to allow margin helpers to apply when using typescale classes.
- Adds `n-typecale-m` helper back into CSS Framework.
- Darkens the `color-nav-surface` in vet light theme to provide better contrast.
- Release date 2.5.2022.

### 1.0.3

- Adds even stronger border color styles for all light themes.
- Adds new card shadow styles with raised surfaces.
- Release date 11.4.2022.

### 1.0.2

- Converts [border colors in default Nord theme](/tokens/?theme=nord) to be stronger to match [Veterinary theme](/tokens/?theme=vet) better.
- Adds new less prominent default, card and header [box shadows](/tokens/#box-shadow) for all themes.
- Release date 10.4.2022.

### 1.0.0

- Initial release of `@nordhealth/css`.
- For documentation and usage guidelines, please see [CSS Framework](/docs/developer/css-framework/).
- Release date 30.3.2022.

### 1.0.0-beta.1

- Remove margins from `.n-typescale` helpers in CSS Framework.
- Only apply margins to typography elements when they’re inside the `.n-typeset` helper.
- Reduce specificity on `.n-typescale` helpers.
- Opt out of typeset on the typescale example to demonstrate the lack of margins on them.
- Adjust typescale helpers to be more powerful selectors.
- Release date 30.3.2022.

### 1.0.0-beta.0

- Full rewrite of CSS Framework with bug fixes and performance improvements.
- Adds new form utility classes `.n-input`, `.n-label`, `.n-hint`, `.n-error` and related states for building custom form fields.
- Adds new `.n-caption` text utility class.
- Adds new `.n-color-accent` background color utility class.
- Adds new `.n-color-status-*` utility classes for applying status background colors.
- Adds new `.n-color-status-*-weak` utility classes for applying weak status background colors.
- Adds new `.n-color-text-success` utility class for applying success text color.
- Release date 19.3.2022.

### 1.0.0-alpha.26

- Adds new `color-text-success` token.
- Release date 17.3.2022.

### 1.0.0-alpha.25

- We’re renaming `color-primary` to `color-accent` to better support our [themes](/design/themes/).
- We’re renaming `color-text-inverse` to `color-text-on-accent` to better support our [themes](/design/themes/) and better explain where the color should be used.
- Release date 14.3.2022.

### 1.0.0-alpha.24

- We’re removing `color-primary-strong` token from the system as it was only referenced in one location.
- Release date 12.3.2022.

### 1.0.0-alpha.23

- Adds new `.n-divider` helper utility class.
- Release date 7.3.2022.

### 1.0.0-alpha.22

- Adds new weak status colors into tokens.
- Release date 5.3.2022.

### 1.0.0-alpha.21

- Redesigned dark gray shades for Vet and Nord dark themes.
- Release date 5.3.2022.

### 1.0.0-alpha.19

- Add anchor styles into reset.
- Add general typography into reset.
- Adjusts typography helpers to use `:where()` to reduce specificity.
- Adjusts reset to use `:where()` to reduce specificity.
- Switch to using token variables rather than static values.
- Release date 26.2.2022.

### 1.0.0-alpha.18

- Updates licensing and package.json details.
- Release date 24.2.2022.

### 1.0.0-alpha.17

- Adds new text align utilities.
- Release date 23.2.2022.

### 1.0.0-alpha.16

- We’ve created new typographic helpers for our CSS Framework.
- These make it easier to apply an HTML class to a containing element to get the basic type styles you’d expect to present content as clearly and efficiently as possible.
- Release date 18.2.2022.

### 1.0.0-alpha.15

- Updates all library dependencies and migrates to Stylelint 14.
- Release date 11.2.2022.

### 1.0.0-alpha.14

- CSS Framework package does not depend on design tokens package anymore.
- We’ve removed font CSS from the Webfonts package and moved it into this package instead.
- CSS Framework now comes with a base theme (Nord), so that it can be used standalone.
- We’ve updated the CSS Framework utils to generate margin and padding helpers with sizes at the end to improve readability.
- We’ve added diagrams to the documentation to explain how logical properties apply to different sides of an element.
- Release date 8.2.2022.

### 1.0.0-alpha.13

- Brings in latest changes from Design Tokens v2.0.3.
- Release date 13.1.2022.

### 1.0.0-alpha.12

- Complete rewrite of our CSS Framework.
- Provides a method of styling elements with as little friction as possible.
- Makes it possible to use our Design Tokens through memorable CSS based utility classes.
- We’ve tried to strike a balance between readable but brief class names in this release.
- We’ve also made sure that applying tokens using the CSS Framework comes with a reduced risk of error, to e.g. ensure you’re using our colors as they were intended to be used.
- Release date 23.12.2021.

### 1.0.0-alpha.11

- Now only includes the base tokens and relies on theming package for theming.
- Previously output file size was 21.27 KB, now is only 5.62 KB.
- Not ready for production usage.
- Release date 9.12.2021.

<!--
Source: https://nordhealth.design/raw/changelogs/css.md
-->
