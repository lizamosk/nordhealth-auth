# Themes Changelog

> 

*Nord Design System’s parts are versioned and released using Node Package Manager. NPM’s [organization page](https://www.npmjs.com/org/nordhealth) lists all packages available and their most recent versions.*

## Themes

### 10.0.4

- Maintenance release that aligns the package with the July 2026 Nord component release; no theme source changes.
- Release date 29.7.2026.

### 10.0.0 `New`

- Wires the new navigation and surface color tokens (`surface-canvas`, `surface-background`, `nav-selected`, refreshed `nav-hover` / `surface-lowered`, and `background` → `surface-raised`) and the Nordhealth-aligned Veterinary accent into all 8 theme SCSS files (NDS-180). (#670)
- The compiled color values change, so existing UIs shift visually — this is a major release. No custom-property names were removed, so no code changes are required, but consumers should regenerate their visual-regression baselines.
- Release date 2.7.2026.

### 9.0.9

- Updates all package dependencies to latest.
- Release date 16.6.2026.

### 9.0.7 → 9.0.8

- Updates all package dependencies to latest.

### 9.0.6

- Updates `nord-dark` and `vet-dark` themes to override input and textarea background colors so that the default state uses `--n-color-active` (slightly elevated) and the inactive (disabled/readonly) state uses `--n-color-surface` (receded), maintaining correct visual hierarchy in dark mode.
- Release date 6.5.2026.

### 9.0.5

- Updates all package dependencies to latest.

### 9.0.4

- Updates all package dependencies to latest.

### 9.0.3

- Updates all package dependencies to latest.

### 9.0.2

- Updates all package dependencies to latest.

### 9.0.1

- Updates all package dependencies to latest.

### 9.0.0

- **New major release that unifies the two design system platforms into a one platform that can serve all of Nordhealth. This change allows us to better support the next generation of apps and generative AI experiences at Nordhealth.** ✨
- This new version ships with two distinctive brands, [therapy](/?theme=nord) and [veterinary](?theme=vet). You can choose the currently active brand from the top left corner of this documentation website. Once chosen, you will get content that is tailored specifically for the brand and the business unit you’re working in. [Read more](/migrations/4.0.0/).
- The Themes package now includes four additional themes: `vet`, `vet-dark`, `vet-high-contrast`, and `vet-dark-high-contrast`.
- This release doesn’t include breaking changes for the existing users of Nord Design System.
- For detailed description of all changes and the steps required for migration, please see the [Migration Guide](/migrations/4.0.0/).
- See also the updated [theming guidelines](/design/themes/) which now adapt the contents depending on which brand is chosen.
- Release date 6.5.2025.

### 8.1.1

- Migrates the monorepo to use [pnpm workspaces](https://pnpm.io/workspaces){rel="[\"nofollow\"]"} instead.
- Release date 24.9.2024.

### 8.1.0

- Updates all package dependencies to latest.
- Release date 17.9.2024.

### 8.0.3

- Updates readme document details.
- Release date 14.6.2024.

### 8.0.2

- Updates Nord Design Tokens to the latest version.
- Release date 11.4.2024.

### 8.0.1

- Improves `var(--n-color-nav-hover)` to be more consistent with other colors in the light high contrast theme.
- Release date 31.5.2023.

### 8.0.0

- **New major release that brings [various improvements and bug fixes](/migrations/3.0.0/)!!** ✨🥳
- We’ve improved the underlying [color system](/tokens/) to make it more extensible and better cover the use cases of our different products.
- We’ve introduced the following new colors into each theme:

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



### 7.0.4

- Updates Nord Design Tokens to the latest version.
- Release date 29.3.2023.

### 7.0.3

- Updates Nord Design Tokens to the latest version.
- Release date 24.10.2022.

### 7.0.2

- Updates Nord Design Tokens to the latest version.
- Release date 16.9.2022.

### 7.0.0

- We’ve redesigned the underlying [color system](/tokens/) to make it more extensible and better cover the use cases of our different products.
- The latest version of [Themes](/design/themes/) introduces a few fundamental changes to the way Nord’s status colors work.
- For more details, please see [migration guidelines](/migrations/2.0.0/).
- Release date 7.9.2022.

[Migration guidelines](/migrations/2.0.0/)

### 6.3.2

- Updates all Node.js dependencies to latest.
- Release date 17.8.2022.

### 6.3.1

- Updates themes to use the latest Nord Design Tokens.
- Release date 4.8.2022.

### 6.3.0

- Adds new `nord-high-contrast` theme.
- Adds new `nord-dark-high-contrast` theme.
- Release date 20.6.2022.

### 6.2.1

- Small bug fixed and performance improvements.
- Release date 17.6.2022.

### 6.2.0

- We’ve removed skeleton related gradients from themes, since the new [Skeleton component](/components/skeleton/) does not need them.
- Release date 16.6.2022.

### 6.1.0

- Adds new `n-color-overlay` design token that allows you to distinguish a modal layer from the layer underneath.
- Adds `color-scheme: light/dark;` into themes so that the browser uses correct theme for native elements such as scroll bars.
- Release date 14.6.2022.

### 6.0.0

- We’re deprecating `health-light`, `health-dark`, `vet-light` and `vet-dark` themes to simplify and unify Nordhealth’s branding for all digital products.
- Release date 20.5.2022.

### 5.1.8

- Adds new `transition-mobile` token for mobile menu transitions. Used in mobile versions of Popout and Dropdown components.
- Release date 11.5.2022.

### 5.1.6

- Darkens the `color-nav-surface` in vet light theme to provide better contrast.
- Release date 2.5.2022.

### 5.1.5

- Adds even stronger border color styles for all light themes.
- Adds new card shadow styles with raised surfaces.
- Release date 12.4.2022.

### 5.1.3

- Converts [border colors in default Nord theme](/tokens/?theme=nord) to be stronger to match [Veterinary theme](/tokens/?theme=vet) better.
- Adds new less prominent default, card and header [box shadows](/tokens/#box-shadow) for all themes.
- Release date 10.4.2022.

### 5.1.1

- Brings in latest changes from Design Tokens v4.2.0.
- Release date 19.3.2022.

### 5.1.0

- Adds new `color-text-success` token.
- Release date 17.3.2022.

### 5.0.0

- We’re renaming `color-primary` to `color-accent` to better support our [themes](/design/themes/).
- We’re renaming `color-text-inverse` to `color-text-on-accent` to better support our [themes](/design/themes/) and better explain where the color should be used.
- We’re removing `color-primary-strong` token from the system as it was only referenced in one location.
- This color is now replaced with CSS filters inside the system which darken the existing `color-primary`.
- Hence all of these are breaking changes, we’re releasing a new major version.
- Release date 14.3.2022.

### 3.2.1

- Updates previous weak status colors with new dark variants.
- Release date 7.3.2022.

### 3.2.0

- Adds new weak status colors into themes.
- Release date 5.3.2022.

### 3.1.0

- Redesigned dark gray shades for Vet and Nord dark themes.
- Release date 3.3.2022.

### 3.0.6

- Updates licensing and package.json details.
- Release date 24.2.2022.

### 3.0.5

- Simplifies test framework for themes package.
- Release date 23.2.2022.

### 3.0.4

- Brings in latest changes from Design Tokens v2.0.4.
- Release date 8.2.2022.

### 3.0.3

- Brings in latest changes from Design Tokens v2.0.3.
- Release date 13.1.2022.

### 3.0.2

- Brings in latest changes from Design Tokens v2.0.2.
- Release date 9.12.2021.

### 3.0.1

- Brings in latest changes from Design Tokens v2.0.1.
- Release date 4.12.2021.

### 2.0.8

- Adds new `color-surface-raised` style into theming.
- Release date 20.10.2021.

### 2.0.6

- Small bug fixes and feature improvements.
- Updates Nord package dependencies to latest.
- Release date 17.10.2021.

### 2.0.0

- Themes package reaches stable state and is now ready for production usage.
- We’ve reworked all the colors from the ground up.
- Additionally there’re new gradients and box-shadows added.
- We’ve added new dark themes as well, so in total there are now 6 themes included in the package: `nord light`, `nord dark`, `veterinary light`, `veterinary dark`, `healthcare light`, and `healthcare dark`.
- Please see the updated [Themes documentation](/design/themes/) for more details.
- Release date 12.10.2021.

### 1.4.1

- Adds new `box-shadow`, `box-shadow-modal`, `box-shadow-tooltip`, `box-shadow-nav` and `box-shadow-card` tokens.
- Modifies `color-border` and `color-background` and adds new `color-border-dark` for each theme.
- Adds new `color-overlay` token for modal overlays.
- Removes `color-active-menu` token and deprecates it.
- Release date 10.8.2021.

### 1.2.1

- Modifies dark primary color shades.
- Updates all package dependencies to latest.
- Release date 10.6.2021.

### 1.2.0

- This release refactors and renames the different color themes to be `nord`, `health`, and `vet`.
- Simplifies the overall naming for colors.
- Adds Subresource Integrity support (SRI).
- Release date 5.6.2021.

### 1.1.0

- Adds new Nordhealth theme.
- Renames all CSS custom properties to follow new design token structure.
- Release date 15.5.2021.

### 1.0.2

- Adds readme and license into the package.

### 1.0.0

- Initial release of `@nordhealth/themes` which includes **Provet** and **Diarium** themes. For documentation and usage guidelines, please see [themes](/design/themes/).
- Release date 22.2.2021.

<!--
Source: https://nordhealth.design/raw/changelogs/themes.md
-->
