# Design Tokens Changelog

> 

*Nord Design System’s parts are versioned and released using Node Package Manager. NPM’s [organization page](https://www.npmjs.com/org/nordhealth) lists all packages available and their most recent versions.*

## Design Tokens

### 9.0.4

- Maintenance release that aligns the package with the July 2026 Nord component release; no token source changes.
- Release date 29.7.2026.

### 9.0.0 `New`

- Refreshes the navigation and surface color system (NDS-180). Adds `surface-canvas`, `surface-background`, and `nav-selected` tokens; refreshes `nav-hover` and `surface-lowered`; and points `background` at `surface-raised`. Aligns the Veterinary `color-accent` with Nordhealth (light `#3559c7`, dark `#2a469d`, high-contrast `#1d50f7`). Applies across all 8 variants (nord / vet × light / dark / high-contrast / dark-high-contrast). (#670)
- Adds a new `--n-line-height-tightest` token (`1`) that sets line height equal to the font size (no extra leading, equivalent to 100%) — tighter than `--n-line-height-tight`. (#656)
- These changed token values shift existing UIs visually, so this is a major release. No token names were removed, so no code changes are required, but consumers should regenerate their visual-regression baselines.
- Release date 2.7.2026.

### 8.1.0

- Adds a new `--n-font-size-xxs` design token (10px / 0.625rem) for tightly-spaced UI elements such as counters and small badges.
- Release date 16.6.2026.

### 8.0.4 → 8.0.5

- Coupled version bump alongside the main monorepo release; no token source changes.

### 8.0.3

- Fixes the z-index stacking order so that toast messages (`--n-index-toast: 1000`) stack above modals (`--n-index-modal: 900`), ensuring toast notifications remain visible when a modal is open.
- Release date 23.3.2026.

### 8.0.2

- Adds missing TypeScript declaration files (`.d.ts`) for token modules, enabling proper type checking and auto-completion when importing tokens in TypeScript projects.
- Release date 6.3.2026.

### 8.0.0

- **New major release that unifies the two design system platforms into a one platform that can serve all of Nordhealth. This change allows us to better support the next generation of apps and generative AI experiences at Nordhealth.** ✨
- This new version ships with two distinctive brands, [therapy](/?theme=nord) and [veterinary](?theme=vet). You can choose the currently active brand from the top left corner of this documentation website. Once chosen, you will get content that is tailored specifically for the brand and the business unit you’re working in. [Read more](/migrations/4.0.0/).
- The Design Tokens package now includes veterinary brand colors.
- This release doesn’t include breaking changes for the existing users of Nord Design System.
- For detailed description of all changes and the steps required for migration, please see the [Migration Guide](/migrations/4.0.0/).
- See also the updated [brand theme guidelines](/tokens/#accessing-brand-themes-in-javascript-and-sass) in the Design Tokens documentation page.
- Release date 6.5.2025.

### 7.1.2

- Migrates the monorepo to use [pnpm workspaces](https://pnpm.io/workspaces){rel="[\"nofollow\"]"} instead.
- Release date 24.9.2024.

### 7.1.1

- Updates readme document details.
- Release date 14.6.2024.

### 7.1.0

- Adds new `var(--n-size-top-bar)` [sizing token](/tokens/#size) that is used for setting the default height of the [Top Bar component](/components/top-bar/).
- Release date 11.4.2024.

### 7.0.1

- Improves `var(--n-color-nav-hover)` to be more consistent with other colors in the light high contrast theme.
- Release date 31.5.2023.

### 7.0.0

- **New major release that brings [various improvements and bug fixes](/migrations/3.0.0/)!!** ✨🥳
- We’ve improved the underlying [color system](/tokens/) to make it more extensible and better cover the use cases of our different products.
- We’ve introduced the following new color tokens:

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



### 6.4.0

- Adds new `var(--n-space-xs)` space token.
- See updated [documentation](/tokens/).
- Release date 24.10.2022.

### 6.3.0

- We now export design tokens as ES modules for easier usage and better tree shaking.
- See updated [usage documentation](/tokens/#usage).
- Release date 24.10.2022.

### 6.2.0

- Adds new `xs` (10px) and `xxs` (8px) icon sizes which are replacements for the old `xs` size. This is a non-breaking change so no actions are required from your side.
- This is done to improve the rendering of our smallest icons since they now align with the [pixel grid used for icons](/design/foundations/iconography/).
- Release date 16.9.2022.

### 6.1.0

- The small icon dimensions are changed from `11px` to `12px`.
- Release date 9.9.2022.

### 6.0.0

- We’ve redesigned the underlying [color system](/tokens/) to make it more extensible and better cover the use cases of our different products.
- The latest version of [Design Tokens](/tokens/) introduces a few fundamental changes to the way Nord’s status colors work.
- For more details, please see [migration guidelines](/migrations/2.0.0/).
- Release date 7.9.2022.

[Migration guidelines](/migrations/2.0.0/)

### 5.4.1

- Improves documentation for [Size Design Tokens](/tokens/#size).
- Converts `var(--n-size-icon-s)` token from 12px to 11px, so that it looks visually more balanced inside buttons and similar elements.
- Updates all Node.js dependencies to latest.
- Release date 17.8.2022.

### 5.4.0

- Deprecates `n-index-header` and `n-index-dropdown` tokens.
- Adds new `n-index-nav` design token.
- Release date 4.8.2022.

### 5.3.0

- Adds new `nord-high-contrast` theme and related design tokens.
- Adds new `nord-dark-high-contrast` theme and related design tokens.
- Removes old `ui` properties and replaces them with `theme` properties instead.
- Release date 20.6.2022.

### 5.2.1

- Small bug fixed and performance improvements.
- Release date 17.6.2022.

### 5.2.0

- We’ve removed gradients section and skeleton colors, since the new [Skeleton component](/components/skeleton/) does not utilize these anymore.
- Release date 16.6.2022.

### 5.1.0

- Switches to using REM based font-sizes instead of pixels for better accessibility.
- Adds new `n-color-overlay` design token that allows you to distinguish a modal layer from the layer underneath.
- Release date 14.6.2022.

### 5.0.0

- We’re deprecating `health-light`, `health-dark`, `vet-light` and `vet-dark` themes to simplify and unify Nordhealth’s branding for all digital products.
- Release date 20.5.2022.

### 4.2.7

- Adds new `transition-mobile` token for mobile menu transitions. Used in mobile versions of Popout and Dropdown components.
- Release date 11.5.2022.

### 4.2.5

- Darkens the `color-nav-surface` in vet light theme to provide better contrast.
- Release date 2.5.2022.

### 4.2.4

- Adds even stronger border color styles for all light themes.
- Adds new card shadow styles with raised surfaces.
- Release date 12.4.2022.

### 4.2.2

- Converts [border colors in default Nord theme](/tokens/?theme=nord) to be stronger to match [Veterinary theme](/tokens/?theme=vet) better.
- Adds new less prominent default, card and header [box shadows](/tokens/#box-shadow) for all themes.
- Release date 10.4.2022.

### 4.2.0

- Adds new `line-height-caption` token.
- Release date 19.3.2022.

### 4.1.0

- Adds new `color-text-success` token.
- Improves underlying token aliasing.
- Release date 17.3.2022.

### 4.0.0

- We’re renaming `color-primary` to `color-accent` to better support our [themes](/design/themes/).
- We’re renaming `color-text-inverse` to `color-text-on-accent` to better support our [themes](/design/themes/) and better explain where the color should be used.
- We’re removing `color-primary-strong` token from the system as it was only referenced in one location.
- This color is now replaced with CSS filters inside the system which darken the existing `color-primary`.
- Hence all of these are breaking changes, we’re releasing a new major version.
- Release date 14.3.2022.

### 2.2.1

- Updates previous weak status colors with new dark variants.
- Release date 7.3.2022.

### 2.2.0

- Adds new weak status colors into design tokens.
- Release date 5.3.2022.

### 2.1.0

- Redesigned dark gray shades for Vet and Nord dark themes.
- Release date 3.3.2022.

### 2.0.5

- Updates licensing and package.json details.
- Release date 24.2.2022.

### 2.0.4

- We’ve changed tokens output to only include nord light theme, and produce additional tokens output for alternative themes to simplify usage.
- Release date 8.2.2022.

### 2.0.3

- Modifies `color-border-strong` for Nord light theme to match the rest of the themes better.
- Release date 13.1.2022.

### 2.0.2

- Removes `size-icon-input` design token.
- Release date 9.12.2021.

### 2.0.1

- Adds completely new redesigned and more accessible status colors.
- Adds new text weakest color tokens.
- Adds new text error color token.
- Better automatic sorting for tokens behind the scenes.
- Release date 4.12.2021.

### 1.0.8

- Adds new `n-color-surface-raised`, `n-color-surface-raised-dark`, `n-color-surface-raised-vet`, `n-color-surface-raised-vet-dark`, `n-color-surface-raised-health`, `n-color-surface-raised-health-dark` design tokens.
- Fixes order meta data on color tokens.
- Release date 20.10.2021.

### 1.0.6

- Converts z-index and transition design tokens to use more consistent naming.
- Small bug fixes and feature improvements.
- Updates Nord package dependencies to latest.
- Release date 17.10.2021.

### 1.0.0

- Design Tokens package reaches stable state and is now ready for production usage.
- We’ve worked on adding extensive [usage documentation](/tokens/#usage) for the design tokens.
- Additionally, we’ve added new z-index, transition, and gradient categories.
- All color themes have been re-designed form the ground up to support dark UI.
- All dropshadows have been re-designed.
- Please see the update [Design Tokens documentation](/tokens/) for more details.
- Release date 12.10.2021.

### 1.0.0-alpha.13

- Adds new `box-shadow`, `box-shadow-modal`, `box-shadow-tooltip`, `box-shadow-nav` and `box-shadow-card` tokens.
- Modifies `color-border` and `color-background` and adds new `color-border-dark` for each theme.
- Renames `border-radius-small` to `border-radius-s`.
- Changes default border-radius from 8px to 5px.
- Adds new `color-overlay` token for modal overlays.
- Release date 10.8.2021.

### 1.0.0-alpha.10

- Modifies dark primary color shades.
- Updates all package dependencies to latest.
- Release date 10.6.2021.

<!--
Source: https://nordhealth.design/raw/changelogs/tokens.md
-->
