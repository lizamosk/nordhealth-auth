import type { Locator } from '@playwright/test'
import { BasePage } from './BasePage'

export class SignUpPage extends BasePage {
  readonly path = '/'

  get heading(): Locator {
    return this.page.getByRole('heading', { name: 'Create your account' })
  }

  // Nord inputs keep their <input> in shadow DOM: fill through the label, assert state on the host (data-qa).
  get emailInput(): Locator {
    return this.page.getByLabel('Email')
  }

  get emailField(): Locator {
    return this.page.getByTestId('qa-signup-email')
  }

  get passwordInput(): Locator {
    return this.page.getByLabel('Password')
  }

  get passwordField(): Locator {
    return this.page.getByTestId('qa-signup-password')
  }

  get updatesCheckbox(): Locator {
    return this.page.getByLabel('Send me occasional product updates and announcements')
  }

  get submitButton(): Locator {
    return this.page.getByTestId('qa-signup-submit')
  }

  get errorSummary(): Locator {
    return this.page.getByTestId('qa-error-summary')
  }

  get passwordRequirements(): Locator {
    return this.page.getByTestId('qa-password-requirement')
  }

  passwordRequirement(text: string): Locator {
    return this.passwordRequirements.filter({ hasText: text })
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email)
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password)
  }

  async leaveEmail() {
    await this.emailInput.focus()
    await this.page.keyboard.press('Tab')
  }

  async leavePassword() {
    await this.passwordInput.focus()
    await this.page.keyboard.press('Tab') // to the show / hide button, which still counts as the field
    await this.page.keyboard.press('Tab')
  }

  async signUp({ email, password, updates = false }: { email: string; password: string; updates?: boolean }) {
    await this.fillEmail(email)
    await this.fillPassword(password)
    if (updates) await this.updatesCheckbox.check()
    await this.submitButton.click()
  }
}
