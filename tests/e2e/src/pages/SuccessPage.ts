import type { Locator } from '@playwright/test'
import { BasePage } from './BasePage'

export class SuccessPage extends BasePage {
  readonly path = '/success'

  get heading(): Locator {
    return this.page.getByTestId('qa-success-heading')
  }

  get email(): Locator {
    return this.page.getByTestId('qa-success-email')
  }

  get updatesNote(): Locator {
    return this.page.getByTestId('qa-success-updates')
  }
}
