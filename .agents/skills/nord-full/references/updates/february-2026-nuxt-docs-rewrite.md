# Rewriting Nord Docs with Nuxt

> 

*We've completely rewritten the Nord Design System documentation site from the ground up, replacing the previous Eleventy-based static site with a modern Nuxt 4 application.*

## Why the rewrite?

The original documentation site served us well, but as Nord Design System grew, we needed a platform that could keep up with our ambitions. The Eleventy setup was becoming increasingly difficult to extend with interactive features, and we wanted to unlock new capabilities that a Vue-based framework could offer.

Key motivations included:

- **Nuxt Studio integration** — enabling designers and content editors to contribute directly to the docs without touching code.
- **Vue component ecosystem** — leveraging Vue's component model for richer, more interactive documentation pages.
- **AI support** — laying the groundwork for AI-assisted tooling and integrations.
- **Better developer experience** — hot module replacement, TypeScript throughout, and a more maintainable codebase.

## What's new

### Built on Nuxt 4 with Content v3

The new docs site uses [Nuxt 4](https://nuxt.com){rel="[\"nofollow\"]"} with [@nuxt/content v3](https://content.nuxt.com){rel="[\"nofollow\"]"} for content management. All existing markdown content was migrated, and we've added custom MDC (Markdown Components) for interactive elements like callouts, component usage blocks, and live examples.

### Full-text search

We've implemented client-side full-text search powered by [MiniSearch](https://lucaong.github.io/minisearch/){rel="[\"nofollow\"]"}, allowing you to quickly find components, guidelines, tokens, and documentation pages.

### Component documentation from source

Component pages are now generated directly from the web component source code using `nuxt-component-meta`. Properties, events, slots, methods, and CSS custom properties are extracted automatically, ensuring the docs always match the latest release.

### Live examples in iframes

Every component example runs in its own isolated iframe, providing a clean rendering environment that accurately represents how components behave in production. Examples are prerendered as part of the build for fast loading.

### LLMs.txt support

We've added `/llms.txt` and `/llms-full.txt` routes that provide AI-friendly versions of our documentation, making it easier for large language models to understand and reference Nord Design System.

### Sitemap, SEO and accessibility

The site includes automatic sitemap generation, structured data with Schema.org, and comprehensive meta tags. We've maintained our commitment to accessibility throughout the rebuild.

### Theme Builder and Color Generator

The [Theme Builder](/theme-builder) and [Color Generator](/color-generator) tools have been rebuilt as Vue pages, with full theme switching support and URL-based state persistence.

## Technical highlights

- **Nuxt 4** with Vue 3.5 and Vite
- **@nuxt/content v3** with SQLite-backed content queries
- **Tailwind CSS v4** with the Nord CSS utility layer
- **Shiki** for syntax highlighting with Nord-themed code blocks
- **Server API routes** for component metadata, examples, navigation, and assets
- **Static generation** with nearly 2,000 prerendered routes
- **GitHub Pages** deployment with PR preview support

## What's next

This rewrite opens the door for several exciting improvements we have planned:

- **Nuxt Studio** for visual content editing
- **Vue web component** experiments
- **Interactive playground** with Storybook for trying components in the browser
- **AI skills** for integrating Nord Design System with AI-assisted development workflows
- **MCP server** for connecting Nord Design System directly to AI-powered development tools

We're excited about the foundation this provides and look forward to building on it.

<!--
Source: https://nordhealth.design/raw/updates/february-2026-nuxt-docs-rewrite.md
-->
