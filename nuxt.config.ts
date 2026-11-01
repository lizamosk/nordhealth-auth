import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import tailwindcss from '@tailwindcss/vite'

const darkTheme = readFileSync(
  createRequire(import.meta.url).resolve('@nordhealth/themes/lib/nord-dark.css'),
  'utf8',
).replaceAll(':root', ':root[data-theme="dark"]')

const savedThemeBootstrap = `
try {
  var saved = localStorage.getItem('mode');
  var dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
} catch (e) {}
`

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Client-side only SPA (the ticket's requirement); Nord's shadow DOM isn't server-rendered anyway.
  ssr: false,

  modules: ['@nuxt/eslint', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag.startsWith('nord-'),
    },
  },

  app: {
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        // ICO first as the fallback for old browsers. `sizes="32x32"` (not "any") keeps Chrome from preferring it over
        // the SVG. Modern browsers pick the SVG; the dark variant is used when the OS is in dark mode.
        { rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
      ],
      style: [{ innerHTML: darkTheme }],
      script: [{ innerHTML: savedThemeBootstrap, tagPosition: 'head' }],
    },
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [{ code: 'en', language: 'en-US', name: 'English', dir: 'ltr', file: 'en.json' }],
    detectBrowserLanguage: false,
  },

  typescript: {
    strict: true,
  },
})
