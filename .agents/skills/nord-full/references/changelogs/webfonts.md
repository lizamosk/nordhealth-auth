# Webfonts Changelog

> 

*Nord Design System’s parts are versioned and released using Node Package Manager. NPM’s [organization page](https://www.npmjs.com/org/nordhealth) lists all packages available and their most recent versions.*

## Webfonts

### 3.0.3 `New`

- Updates readme document details.
- Release date 6.5.2025.

### 3.0.2

- Migrates the monorepo to use [pnpm workspaces](https://pnpm.io/workspaces){rel="[\"nofollow\"]"} instead.
- Release date 24.9.2024.

### 3.0.1

- Updates readme document details.
- Release date 14.6.2024.

### 3.0.0

- **New major release that brings [various improvements and bug fixes](/migrations/3.0.0/)!!** ✨🥳
- For detailed description of all changes, please see [Migration guide](/migrations/3.0.0/).
- Release date 19.5.2023.

[Migration guide](/migrations/3.0.0/)



### 2.0.15

- Updates all Node.js dependencies to latest.
- Release date 17.8.2022.

### 2.0.14

- Adds prepare script to fill gaps in `npm run bootstrap` so that components pkg is ready to start immediately after.
- Release date 20.5.2022.

### 2.0.13

- Updates licensing and package.json details.
- Release date 24.2.2022.

### 2.0.12

- Cleans up build dir before build to prevent accidentally publishing old files.
- Release date 23.2.2022.

### 2.0.11

- Updates all library dependencies and migrates to Stylelint 14.
- Release date 11.2.2022.

### 2.0.10

- We’ve removed font CSS from the package, but left the font-face definitions.
- Font CSS is now the responsibility of Nord’s CSS Framework.
- Webfonts package does not depend on design tokens anymore.
- Release date 8.2.2022.

### 2.0.9

- Small bug fixes and feature improvements.
- Release date 4.12.2021.

### 2.0.7

- Small bug fixes and feature improvements.
- Updates Nord package dependencies to latest.
- Release date 20.10.2021.

### 2.0.0

- Webfonts package reaches stable state and is now ready for production usage.
- Please see the updated [Webfonts documentation](/docs/developer/webfonts/) for more details.
- Release date 12.10.2021.

### 1.1.3

- Updates all internal design system package dependencies to latest.
- Release date 10.8.2021.

### 1.1.0

- Unifies the naming of assets and simplifies the package overall.
- Adds base font-feature-settings for different heading levels.
- Adds Subresource Integrity support (SRI).
- Release date 5.6.2021.

### 1.0.4

- Internal improvements and bug fixes.
- Release date 15.5.2021.

### 1.0.3

- Makes `@nordhealth/fonts` package completely independent from `@nordhealth/tokens`.
- Can now be used standalone without any other package from Nord.
- Adds readme and license into the package.
- Release date 11.2.2021.

### 1.0.0

- Initial release of `@nordhealth/fonts` which includes **Nordhealth Sans** and **Nordhealth Mono.**
- For documentation and usage guidelines, please see [Webfonts](/docs/developer/webfonts/).
- Release date 11.2.2021.

<!--
Source: https://nordhealth.design/raw/changelogs/webfonts.md
-->
