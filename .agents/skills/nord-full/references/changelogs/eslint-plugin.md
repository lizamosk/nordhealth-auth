# ESLint Plugin Changelog

> 

*Nord Design System's parts are versioned and released using Node Package Manager. NPM's [organization page](https://www.npmjs.com/org/nordhealth) lists all packages available and their most recent versions.*

## ESLint Plugin

### 1.2.0

- Adds the opt-in `migrate-spacing` preset for CSS framework 5.3.0. Uses existing restricted-class fixes and spacing-only legacy migration to convert named spacing to numeric utilities while preserving variants, negative values and important modifiers.
- Reports arbitrary class references to `--n-space-*` for manual review; numeric spacing, `px`, typography, radii and icon sizes are unchanged.
- Adds HTML class support to legacy migration with `@html-eslint/parser`.
- Adds opt-in `no-legacy-spacing-vars` fixes for Vue style blocks and standalone CSS configured with `@eslint/css`. Replaces deprecated spacing references with native calculations using `--n-spacing`, including references inside calculations and shorthands. Preserves comments and strings; fallbacks, local legacy-token overrides and unsupported Vue styles require manual review. The `migrate-spacing` preset enables the rule for Vue styles.
- Release date 23.10.2026.

### 1.1.3

- Maintenance release that aligns the package with the July 2026 Nord component release; no ESLint rule changes.
- Release date 29.7.2026.

### 1.1.0 `New`

- Updates Nord dependencies to the latest.
- Release date 2.7.2026.

### 1.0.6

- Adds `n-font-size-xxs` to the set of recognised valid legacy classes, mirroring the new `--n-font-size-xxs` design token.
- Release date 16.6.2026.

### 1.0.4 → 1.0.5

- Coupled version bump alongside the main monorepo release; no plugin source changes.

### 1.0.3

- **`n-stack` legacy class: Fix incorrect autofix output.** The autofix now includes `n:flex-wrap`, which was previously missing from the generated replacement classes.
- Release date 24.3.2026.

### 1.0.2

- **`no-legacy-classes`: Fixes background color migration mapping.** The `n-color-background` legacy class now correctly migrates to `n:bg-default` instead of `n:bg-background`.
- Release date 27.2.2026.

### 1.0.0

- **New major release that updates all ESLint rules to use Tailwind CSS v4's [built-in logical property utilities](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.2.0){target="_blank"}, replacing our previous custom utility names.** ✨
- **BREAKING:** `logical-selectors` rule now uses Tailwind CSS v4 built-in utility names:

  - Padding: `pt` → `pbs` (was `p-bs`), `pl` → `ps` (was `p-is`), etc.
  - Margin: `mt` → `mbs` (was `m-bs`), `ml` → `ms` (was `m-is`), etc.
  - Border: `border-l` → `border-s` (was `border-is`), `border-r` → `border-e` (was `border-ie`)
  - Size: `w` → `inline` (was `is`), `h` → `block` (was `bs`)
  - Scroll: `scroll-mt` → `scroll-mbs` (was `scroll-m-bs`), etc.
  - Removed `py`/`px`, `my`/`mx`, `border-x`/`border-y` mappings — TW4 already uses logical CSS.
  - Removed `space-x`/`space-y` mappings — TW4 already uses logical CSS (`margin-inline`/`margin-block`).
  - Removed `divide-x`/`divide-y` mappings — no custom divide utilities existed.
- **BREAKING:** `no-legacy-classes` rule now outputs TW4 utility names for spacing, border, and size migrations:

  - `n-margin-is-m` → `n:ms-m` (was `n:m-is-m`)
  - `n-border-is` → `n:border-s` (was `n:border-is`)
  - `n-inline-size-full` → `n:inline-full` (was `n:is-full`)
- Release date 19.2.2026.

### 0.3.1

- **`no-legacy-classes`: Updates shadow migration mapping.** The `n-box-shadow` legacy class now migrates to `n:shadow-default` instead of `n:shadow`.
- Release date 18.2.2026.

### 0.3.0

- **`logical-selectors`: Updated rule to handle negative value patterns.** The rule now correctly detects and auto-fixes negative logical utilities (e.g., `n:-ml-m` → `n:-m-is-m`).
- **`logical-selectors`: Improved variant prefix matching.** Now supports arbitrary value variants like `max-[1299px]:` in addition to standard variants like `hover:` and `n:`.
- Release date 11.2.2026.

### 0.2.2

- **`no-legacy-classes`: Simplify replacement mappings.** Removes redundant mappings and consolidates the legacy class to Tailwind class conversion logic.
- Release date 6.2.2026.

### 0.2.1

- **`no-legacy-classes`: Add conflict detection for compound class replacements.** When replacing classes like `n-stack` or `n-grid` that expand to multiple Tailwind classes, the rule now detects conflicting utilities (e.g., `n:gap-m` vs `n:gap-l`) and resolves them intelligently:

  - Explicit single-output classes (e.g., `n-gap-l`) take priority over compound defaults.
  - Existing `n:*` classes take priority over compound defaults.
  - For compound vs compound conflicts, the rightmost class wins.
- Fixes duplicate `n-grid` mapping that was incorrectly overwriting the layout version.

### 0.2.0

- **Initial release of `@nordhealth/eslint-plugin`** - ESLint plugin for Nord Design System.
- Adds `@nordhealth/logical-selectors` rule to enforce logical CSS properties (e.g., `n:p-is-m` instead of `n:pl-m`) for better RTL/LTR support. Auto-fixable.
- Adds `@nordhealth/no-unknown-legacy-classes` rule to catch typos and invalid `n-*` legacy classes.
- Adds `@nordhealth/no-legacy-classes` rule to migrate deprecated `n-*` classes to Tailwind `n:*` equivalents. Auto-fixable. Off by default.
- Includes `recommended` and `vue` preset configurations with integrated [better-tailwindcss](https://www.npmjs.com/package/eslint-plugin-better-tailwindcss){rel="[\"nofollow\"]"} rules.
- Supports multiple frameworks: React, Vue, Svelte, Angular, and Astro.
- Detects classes in utility functions: `clsx`, `cn`, `cva`, `tv`, `twMerge`, and more.
- See [ESLint Plugin documentation](/docs/developer/eslint/) for usage details.
- Release date 3.2.2026.

<!--
Source: https://nordhealth.design/raw/changelogs/eslint-plugin.md
-->
