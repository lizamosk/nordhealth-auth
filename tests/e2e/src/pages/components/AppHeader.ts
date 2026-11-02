import type { Locator, Page } from '@playwright/test'

export class AppHeader {
  constructor(readonly page: Page) {}

  get themeToggle(): Locator {
    return this.page.getByTestId('qa-theme-toggle')
  }

  // The switch role lives on the <input> in the toggle's shadow DOM; check() needs that element, not the host.
  get darkThemeSwitch(): Locator {
    return this.page.getByRole('switch', { name: 'Dark theme' })
  }
}
