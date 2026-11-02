import type { Locator } from '@playwright/test'
import { BasePage } from './BasePage'

/** Placeholder pages (/sign-in, /dashboard) the design links to. */
export class StubPage extends BasePage {
  path = '/sign-in'

  get heading(): Locator {
    return this.page.getByTestId('qa-stub-heading')
  }
}
