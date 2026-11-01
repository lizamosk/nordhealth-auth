# Migration to Tailwind CSS

> 

*This guide will help you migrate from the legacy CSS framework to the new Tailwind CSS integration.*

## Why migrate?

The new Tailwind CSS integration offers several advantages:

- **Smaller bundle sizes** through automatic purging of unused styles
- **Better developer experience** with IDE support, linting and autocompletion
- **Industry standard** utilities and patterns
- **Modern tooling** with Tailwind CSS v4

<div>

---



</div>

## Compatibility

The legacy CSS framework and Tailwind CSS can be used together. You can migrate incrementally, adopting Tailwind utilities in new code while keeping existing legacy classes.

> [!WARNING]
> **
> Required change:
> **
>  You must replace 
> `
> .n-reset
> `
>  with 
> `
> .n:reset
> `
>  to ensure Tailwind utilities can override styles correctly.

<div>

---



</div>

## Installation

First, ensure you have [Tailwind CSS v4 installed](https://tailwindcss.com/docs/installation){target="_blank"} in your project.

> [!NOTE]
> **
> Side-by-side support:
> **
>  Use both Tailwind and the legacy CSS framework simultaneously. You can migrate incrementally while both systems coexist in your codebase.

Then update your CSS import:

```css
/* Before (legacy) */
@import "@nordhealth/css";

/* After (Tailwind) */
@import "@nordhealth/css/tailwind";
```

> [!NOTE]
> **
> Automate your migration!
> **
>  Use our 
> [
> ESLint plugin
> ](#automated-migration-with-eslint)
>  to automatically convert legacy classes to Tailwind equivalents with 
> `
> --fix
> `
> .

<div>

---



</div>

## Required changes

### Reset class

The reset class **must** be updated to use the Tailwind prefix syntax:

```html
<!-- Before -->
<html class="n-reset">

<!-- After -->
<html class="n:reset">
```

This is required because the colon syntax ensures proper CSS specificity, allowing Tailwind utilities to override the reset styles.

<div>

---



</div>

## Optional changes

The following classes can be migrated gradually. Legacy classes will continue to work alongside Tailwind utilities.

### Component classes

| Legacy CSS   | Tailwind CSS              |
| ------------ | ------------------------- |
| `.n-reset`   | `.n:reset` **(required)** |
| `.n-typeset` | `.n:typeset`              |
| `.n-dl`      | `.n:dl`                   |
| `.n-label`   | `.n:label`                |
| `.n-hint`    | `.n:hint`                 |
| `.n-error`   | `.n:error`                |
| `.n-input`   | `.n:input`                |

### Utility classes

For new code, prefer Tailwind utilities over legacy classes:

| Legacy CSS             | Tailwind CSS           |
| ---------------------- | ---------------------- |
| `.n-padding-m`         | `.n:p-4`               |
| `.n-margin-m`          | `.n:m-4`               |
| `.n-color-text`        | `.n:text-default`      |
| `.n-color-text-weak`   | `.n:text-weak`         |
| `.n-color-accent`      | `.n:text-accent`       |
| `.n-bg-surface`        | `.n:bg-surface`        |
| `.n-bg-status-success` | `.n:bg-status-success` |
| `.n-border-color`      | `.n:border-default`    |
| `.n-font-size-l`       | `.n:text-l`            |

<div>

---



</div>

## Automated migration with ESLint

The `@nordhealth/eslint-plugin` provides an auto-fixable rule to help migrate legacy classes to Tailwind equivalents.

### Installation

```bash
pnpm add -D @nordhealth/eslint-plugin
```

### Configuration

The migration rules are included in the recommended config but **off by default**. Enable them during migration:

```javascript
// eslint.config.mjs
import nordPlugin from '@nordhealth/eslint-plugin'

export default [
  nordPlugin.configs.recommended,
  {
    rules: {
      // Enable migration rules - disable after migration is complete
      '@nordhealth/no-legacy-classes': 'warn'
    }
  }
]
```

### Incremental migration

To migrate gradually, enable only specific categories:

```javascript
rules: {
  // Start with spacing and colors, add more categories over time
  "@nordhealth/no-legacy-classes": ["warn", {
    categories: ["spacing", "colors"]
  }]
}
```

Available categories:

| Category     | Classes migrated                                                |
| ------------ | --------------------------------------------------------------- |
| `spacing`    | Margin, padding, gap (`n-margin-*`, `n-padding-*`, `n-gap-*`)   |
| `borders`    | Border styles, colors, radius (`n-border-*`)                    |
| `typography` | Font sizes, weights, line heights (`n-font-*`, `n-typescale-*`) |
| `colors`     | Text, background, status colors (`n-color-*`)                   |
| `layout`     | Flex, grid, alignment (`n-stack-*`, `n-grid-*`, `n-justify-*`)  |
| `components` | Form elements, icons (`n-label`, `n-input`, `n-size-icon-*`)    |
| `utilities`  | Shadows, z-index, misc (`n-box-shadow-*`, `n-index-*`)          |

### Running the fix

Once configured, run ESLint with the `--fix` flag to automatically migrate classes:

```bash
pnpm eslint --fix "src/**/*.{ts,tsx,vue,html}"
```

> [!NOTE]
> The rule will report each deprecated class and automatically replace it with the Tailwind equivalent when you run 
> `
> --fix
> `
> .

<div>

---



</div>

## Numeric spacing

CSS framework 5.3.0 makes Tailwind's spacing scale the source of truth and numeric spacing the preferred API for consumer styling. Existing `--n-space-*` tokens and named utilities such as `n:p-s` are deprecated but remain available by default throughout the 5.x release series. When loading `@nordhealth/css/tailwind`, their defaults derive from Tailwind's spacing base. Component internals continue to use these tokens; font sizes, icon sizes, radii and component size APIs are unchanged.

Upgrade to `@nordhealth/css` 5.3.0 or later and `@nordhealth/eslint-plugin` 1.2.0 or later before applying migration fixes. Keep aliases while migrating consumers, and consider removal only in a later major after consumers and component internals have migrated.

### Spacing scale

Each numeric step is `0.25rem`. Keep the `n:` prefix:

| Existing suffix | Preferred suffix | Value at a 16px root |
| --------------- | ---------------- | -------------------- |
| —               | `px`             | 1px, fixed           |
| `xs`            | `1`              | 4px                  |
| `s`             | `2`              | 8px                  |
| `m`             | `4`              | 16px                 |
| `l`             | `6`              | 24px                 |
| `xl`            | `9`              | 36px                 |
| `xxl`           | `18`             | 72px                 |

For example, replace `n:p-s n:gap-m` with `n:p-2 n:gap-4`. Use the built-in `px` suffix for a single CSS pixel: `n:p-px`, `n:gap-px`, `n:ms-px` or `n:-ms-px`. No extra Nord token is required. Numeric spacing also supports fractional steps, such as `n:gap-0.5`.

Legacy spacing defaults now follow the root font size alongside numeric spacing. At a 16px root, `n:p-2`, `n:p-s` and `var(--n-space-s)` are all 8px. At a 20px root, all three are 10px. The `px` step remains exactly 1px. Standalone token exports and the legacy CSS entry point retain their existing values when used without the Tailwind entry point.

Customise the global spacing scale through Tailwind's theme so numeric utilities and legacy aliases follow it together:

```css
@import "@nordhealth/css/tailwind";

@theme {
  --spacing: 0.5rem;
}
```

Tailwind exports the base as `--n-spacing`. Each deprecated variable is an alias, for example `--n-space-s: calc(var(--n-spacing) * 2)`. These aliases resolve at `:root` or `:host`; overriding the base only in a descendant changes numeric utilities there but does not recalculate inherited aliases.

Individual `--n-space-*` overrides still affect legacy consumers, but numeric utilities read Tailwind's base directly. Move global scale customisations to `--spacing` and review any intentional per-token overrides before applying fixes.

### ESLint migration preset

Add the opt-in preset **after** your usual presets and parser configuration:

```javascript
import nordPlugin from '@nordhealth/eslint-plugin'

export default [
  nordPlugin.configs.recommended,
  nordPlugin.configs.vue, // Include for Vue projects.
  nordPlugin.configs['migrate-spacing'],
]
```

The preset enables warnings for spacing-only legacy class migration, configures the existing `better-tailwindcss/no-restricted-classes` rule with numeric replacements, and enables `@nordhealth/no-legacy-spacing-vars` for Vue style blocks. Successive fix passes convert `n-padding-s → n:p-s → n:p-2`. The standalone legacy-class rule still outputs named aliases unless this preset is enabled.

```bash
pnpm eslint --fix "src/**/*.{ts,tsx,vue,html}"
```

Keep your existing TypeScript, JSX, Vue and HTML parser setup. HTML files need an HTML parser such as `@html-eslint/parser`; the preset does not select a parser for them. Fix complete, statically known class strings in small batches and review the diff. Dynamically assembled class names and inline styles need manual review.

```html
<!-- Before -->
<div class="n:p-s n:m:gap-xl n:hover:-ms-xs!">

<!-- After -->
<div class="n:p-2 n:m:gap-9 n:hover:-ms-1!">
```

The preset leaves numeric and `px` utilities unchanged, along with classes from unrelated scales such as `n:text-s`, `n:rounded-s` and `n:size-icon-s`. Arbitrary classes referencing legacy tokens, such as `n:p-[var(--n-space-s)]` or `n:gap-(--n-space-m)`, warn without autofixes so calculations and fallbacks can be reviewed.

The preset replaces options for the two class-migration rules. If your configuration already restricts other classes or migrates other legacy categories, merge those options with the preset's rules. Once a migrated directory is clean, retain the checks and promote them to errors without discarding their options:

```javascript
const migrationRules = nordPlugin.configs['migrate-spacing'].rules

// Append after the migration preset. Narrow files to each migrated directory.
const migratedDirectory = {
  files: ['src/migrated/**/*.{ts,tsx,vue,html}'],
  rules: Object.fromEntries(
    Object.entries(migrationRules).map(([name, setting]) => [
      name,
      ['error', ...setting.slice(1)],
    ]),
  ),
}
```

### CSS and inline styles

The migration preset also fixes deprecated variables in plain CSS inside Vue `<style>` blocks. It supports scoped styles, CSS modules and multiple style blocks. Fixes replace references in declaration values, including shorthands, calculations and custom-property values, while preserving comments, strings and surrounding syntax:

```css
/* Before */
.example {
  padding: var(--n-space-s);
}

/* After eslint --fix */
.example {
  padding: calc(var(--n-spacing) * 2);
}
```

These fixes emit native CSS, so individual Vue style blocks do not need `@reference`. Load Nord's compiled Tailwind CSS to provide `--n-spacing`; the base is always emitted, even when no numeric utility classes are detected. In CSS processed by Tailwind, you can also write `padding: --spacing(2)`. That function requires `@reference` in separately processed Vue style blocks. Use literal `1px` for fixed single-pixel values. Stylesheets in applications without Tailwind can continue using the deprecated tokens until they adopt a replacement.

For standalone `.css` files, use ESLint 9.7 or later with its optional CSS language plugin:

```bash
pnpm add -D @eslint/css
```

Scope JavaScript-only and class-migration configurations to script, Vue and HTML files, then enable the stylesheet rule separately for CSS. Preserve your existing parser setup for TypeScript, JSX, Vue and HTML:

```javascript
import css from '@eslint/css'
import nordPlugin from '@nordhealth/eslint-plugin'

const scriptFiles = ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue,html}']

export default [
  { ...nordPlugin.configs.recommended, files: scriptFiles },
  nordPlugin.configs.vue,
  { ...nordPlugin.configs['migrate-spacing'], files: scriptFiles },
  {
    files: ['**/*.css'],
    plugins: { css, '@nordhealth': nordPlugin },
    language: 'css/css',
    rules: { '@nordhealth/no-legacy-spacing-vars': 'warn' },
  },
]
```

```bash
pnpm eslint --fix "src/**/*.{ts,tsx,vue,html,css}"
```

Deprecated variables with fallbacks, such as `var(--n-space-s, 8px)`, warn without autofixes. Legacy token overrides such as `--n-space-s: 12px` also require review; references to that token anywhere in the same file are left unchanged. Review global overrides in other files before applying fixes. SCSS, Less and malformed Vue style blocks are reported without rewriting their contents; legacy references in those blocks prevent automatic fixes elsewhere in that file. External Vue `<style src="...">` stylesheets must be linted as separate CSS files. Inline HTML styles and JavaScript style objects still require manual migration.

### Stylelint warnings

Merge this rule into your Stylelint configuration to report deprecated spacing references in CSS declarations, including calculations, custom properties and fallbacks. It reports warnings without autofixes:

```javascript
module.exports = {
  rules: {
    'declaration-property-value-disallowed-list': [
      {
        '/.*/': ['/var\\(\\s*--n-space-(?:xs|s|m|l|xl|xxl)(?![\\w-])/'],
      },
      { severity: 'warning' },
    ],
  },
}
```

Preserve any existing entries for this rule. Configure the appropriate Stylelint syntax for SCSS, Less or Vue `<style>` blocks. Inline HTML styles and JavaScript style objects require manual review.

## Getting support

Have questions about migrating to Tailwind CSS? Please head over to the [Support page](/resources/support/) for more guidelines and ways to contact us.

<!--
Source: https://nordhealth.design/raw/migrations/tailwind.md
-->
