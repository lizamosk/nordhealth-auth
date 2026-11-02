# Nord sign-up

A client-side only Nuxt 4 application where people sign up for a product: email and password (both required),
a show / hide password control, an opt-in for occasional product updates and announcements, and a success page.
Built with the [Nord Design System](https://nordhealth.design/) web components, TypeScript, vee-validate + zod,
and `@nuxtjs/i18n`.

## Deployment

To see the deployed application, please open the [Preview link](https://b8fb454a.nordhealth-auth.pages.dev/).

## Getting started

Requires Node `^22.21.0 || ^24.11.0 || >=26.0.0` (Nuxt 4.6's requirement).

```bash
npm install
npm run dev          # http://localhost:3000
```

To send the welcome email, copy `.env.example` to `.env` and fill in your EmailJS public key, service ID and template
ID. Without them the app still works and just skips the email.

| Script                                   | What it does                                                                        |
| ---------------------------------------- | ----------------------------------------------------------------------------------- |
| `npm run build` / `generate` / `preview` | Production build, static SPA output, serve the build                                |
| `npm run lint`                           | ESLint (`@nuxt/eslint`)                                                             |
| `npm run typecheck`                      | `vue-tsc` through `nuxt typecheck`                                                  |
| `npm test`                               | Vitest unit tests                                                                   |
| `npm run test:e2e`                       | Playwright BDD features, headless, against the production build, desktop and mobile |
| `npm run test:e2e:headed` / `:ui`        | Same suite in a visible browser / Playwright UI mode (`:debug` opens the inspector) |
| `npm run test:e2e:a11y`                  | Only the `@a11y` scenarios: axe scans of each state in both themes                  |

## How it works

- **Client-side only:** `ssr: false`. Nord ships shadow-DOM web components that don't server-render.
- **Routes:** `/` sign-up, `/success` (redirects to `/` if no sign-up just happened), `/sign-in` and `/dashboard`
  (placeholders, because the design links to them).
- **Validation** (`app/utils/signUpSchema.ts`, `app/composables/useSignUpForm.ts`): one zod schema is the source of
  truth for the rules and the `SignUpValues` type; vee-validate drives state. Email is required and must be an email
  address. The password needs 8+ characters, a lowercase letter, an uppercase letter and a symbol, shown as a live
  checklist under the field. A field validates when the user leaves it, then re-validates as they type. A failed submit
  shows an error summary (a Nord banner) and moves focus to it; the summary only changes on the next submit, so the form
  doesn't jump while the user is fixing fields.
- **Sign-up request:** `app/services/auth.ts` is a mock that resolves after ~900ms. There is no backend. Replace the
  body and keep the signature. The password is never stored or passed to the success page.
- **Welcome email:** before the success page shows, `app/services/email.ts` sends a welcome email to the entered
  address through EmailJS. It never fails the sign-up: if the keys are missing or the request fails, it logs to the
  console and the success page shows anyway. The e2e build clears the keys so tests never send real email.
  **Important:** for security purposes email functionality is removed from deployment. If you want to test it, please write me and I will add environment keys.  
  <img width="496" height="306" alt="Снимок экрана — 2026-11-02 в 11 38 53" src="https://github.com/user-attachments/assets/6f527e95-f22f-49ed-a265-c1aaedd1aaa4" />  
  
- **Theme:** light by default, or the system setting; the "Dark theme" switch remembers the choice in `localStorage`
  (`mode`). Nord's `nord-dark.css` is inlined in `<head>` at build time, scoped to `html[data-theme="dark"]`, and a tiny
  script sets that attribute before first paint. Switching theme only flips the attribute: no download, no flash.

## Nord usage

- Components are installed from npm and imported per component (`@nordhealth/components/lib/Input`), so only the
  ones used are bundled, and types come from `@nordhealth/components/lib/vue.d.ts`. The CDN `<script>` tag is meant for
  prototypes; it can't give tree-shaking, types or locked versions.
- Styling uses Nord's Tailwind v4 entry (`@nordhealth/css/tailwind`, `n:` prefix) and tokens. It needs
  `@nordhealth/tokens` and `@nordhealth/fonts`, which `@nordhealth/css` doesn't install for you.
- `isCustomElement` only matches `nord-*`, so Nuxt components such as `<NuxtLink>` still resolve.
- `nord-icon` fetches icons from nordcdn.net by default; the icons used are registered locally
  (`app/plugins/nord-icons.client.ts`) so the app has no runtime CDN dependency.
- `nord-button` renders its own nodes into its light DOM, so its text is always wrapped in a `<span>`. A bare text
  child makes Vue rewrite the button's whole `textContent` when the label changes, which breaks Lit
  ("ChildPart has no parentNode").
- Nord forces slotted card headers to the small font size with `!important`, so headings sit in the card body.

### Deliberate deviations from Nord defaults

| Deviation                                                         | Why                                                                                                                               |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `--n-input-border-color: var(--n-color-border-hover)` on the form | Nord's default input border is about 1.7:1 on white; WCAG 1.4.11 needs 3:1.                                                       |
| `--n-color-text-error` set to `--n-color-text-danger` on the form | `nord-dark.css`'s error text is 3.2:1 on the dark card; AA needs 4.5:1. Caught by the axe test.                                   |
| `size="l"` inputs and buttons                                     | 48px controls keep touch targets at 44px or more.                                                                                 |
| `nord-toggle` (a switch) for the theme instead of a button        | A switch announces its state and keeps a constant name.                                                                           |
| Success page built from card + icon, not `nord-empty-state`       | Empty state is documented for "no data to show", not for confirmations.                                                           |
| Password toggle has a visually hidden name and no border          | Nord's "Custom Button" example only describes the button through a tooltip; the border is removed with `--n-button-border-color`. |

## Localization

All copy lives in `i18n/locales/<code>.json` (English only for now); templates contain no hard-coded text. Error
messages in the zod schema are translation **keys**, resolved at render time.

To add a language, e.g. Finnish:

1. Add `{ code: 'fi', language: 'fi-FI', name: 'Suomi', dir: 'ltr', file: 'fi.json' }` to `i18n.locales` in
   `nuxt.config.ts`.
2. Create `i18n/locales/fi.json` with the same keys as `en.json`.

`<html lang dir>` follows the active locale, which is also how Nord picks its own built-in strings. None of the Nord
components used here has built-in text; if one is added later, register its translation with Nord's
`registerTranslation()` ([docs](https://nordhealth.design/docs/developer/localization/)). There is no language switcher
yet; call `useI18n().setLocale('fi')` from one when needed.

## Accessibility

Checked in the Playwright suite with axe (WCAG 2.2 AA tags) for the form, error and success states in both themes.
Also: skip link, one `h1` per view, labelled form, focus moves to the error summary and to the success heading,
loading state announced through a live region, errors tied to fields, zoom not disabled. Screen readers and Windows
high contrast were not tested manually.
