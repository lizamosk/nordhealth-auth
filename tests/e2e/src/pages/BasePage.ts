import type { Locator, Page } from '@playwright/test'

export abstract class BasePage {
  abstract readonly path: string

  constructor(readonly page: Page) {}

  get html(): Locator {
    return this.page.locator('html')
  }

  async goto() {
    await this.page.goto(this.path)
  }
}
