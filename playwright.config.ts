import { defineConfig, devices } from '@playwright/test'
import { defineBddConfig } from 'playwright-bdd'

const PORT = 3200

// Gherkin features are the test source; bddgen compiles them into Playwright specs in .features-gen.
const testDir = defineBddConfig({
  features: 'tests/e2e/features/**/*.feature',
  steps: 'tests/e2e/src/**/*.ts',
  outputDir: '.features-gen',
})

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    // Tests that need dark mode opt in explicitly.
    colorScheme: 'light',
    // QA hooks in the templates: data-qa="qa-…", located with getByTestId.
    testIdAttribute: 'data-qa',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'] } },
  ],
  // Test the production build, not the dev server: it's what ships.
  webServer: {
    command: `npm run build && npm run preview -- --port ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 240_000,
    // Build without EmailJS keys so test runs never send real emails. Existing env vars beat the ones in .env.
    env: { VITE_EMAILJS_PUBLIC_KEY: '' },
  },
})
