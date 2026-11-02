import { expect } from '@playwright/test'
import type { DataTable } from 'playwright-bdd'
import { Given, Then, When } from '../fixtures'
import { PASSWORD_REQUIREMENT_STATE, uniqueEmail, VALID_PASSWORD } from '../support/testData'

const SUCCESS_ICON_COLOR = 'var(--n-color-status-success)'

// Form input

When('they enter email {string}', async ({ signUpPage, scenarioData }, email: string) => {
  await signUpPage.fillEmail(email)
  scenarioData.email = email
})

When('they enter password {string}', async ({ signUpPage }, password: string) => {
  await signUpPage.fillPassword(password)
})

When('they focus on password field', async ({ signUpPage }) => {
  await signUpPage.passwordInput.focus()
})

When('they leave the email field', async ({ signUpPage }) => {
  await signUpPage.leaveEmail()
})

When('they leave the password field', async ({ signUpPage }) => {
  await signUpPage.leavePassword()
})

When('they opt in to product updates', async ({ signUpPage }) => {
  await signUpPage.updatesCheckbox.check()
})

When('they sign up with a valid email and password', async ({ signUpPage, scenarioData }) => {
  scenarioData.email = uniqueEmail()
  await signUpPage.signUp({ email: scenarioData.email, password: VALID_PASSWORD })
})

When(
  'they sign up with a valid email and password, opting in to product updates',
  async ({ signUpPage, scenarioData }) => {
    scenarioData.email = uniqueEmail()
    await signUpPage.signUp({ email: scenarioData.email, password: VALID_PASSWORD, updates: true })
  },
)

Given('a user has signed up', async ({ signUpPage, successPage, scenarioData }) => {
  scenarioData.email = uniqueEmail()
  await signUpPage.goto()
  await signUpPage.signUp({ email: scenarioData.email, password: VALID_PASSWORD })
  await expect(successPage.heading).toBeVisible()
})

Given('a user has signed up, opting in to product updates', async ({ signUpPage, successPage, scenarioData }) => {
  scenarioData.email = uniqueEmail()
  await signUpPage.goto()
  await signUpPage.signUp({ email: scenarioData.email, password: VALID_PASSWORD, updates: true })
  await expect(successPage.heading).toBeVisible()
})

// Field errors

Then('an email field is red', async ({ signUpPage }) => {
  // Nord draws the danger border and inline message from the host's `error` attribute.
  await expect(signUpPage.emailField).toHaveAttribute('error', /.+/)
  await expect(signUpPage.page.getByText('Enter a valid email address, for example name@example.com.')).toBeVisible()
})

Then('the error {string} is shown', async ({ page }, message: string) => {
  await expect(page.getByText(message, { exact: true }).first()).toBeVisible()
})

Then('the error {string} is not shown', async ({ page }, message: string) => {
  await expect(page.getByText(message, { exact: true })).toHaveCount(0)
})

Then('the error {string} is shown inline and in the summary', async ({ page, signUpPage }, message: string) => {
  await expect(page.getByText(message, { exact: true })).toHaveCount(2)
  await expect(signUpPage.errorSummary.getByRole('link', { name: message })).toBeVisible()
})

Then('the error {string} is shown only in the summary', async ({ page, signUpPage }, message: string) => {
  await expect(page.getByText(message, { exact: true })).toHaveCount(1)
  await expect(signUpPage.errorSummary.getByRole('link', { name: message })).toBeVisible()
})

// Error summary

Then('a error is displayed', async ({ signUpPage }) => {
  await expect(signUpPage.errorSummary).toBeVisible()
  await expect(signUpPage.errorSummary).toBeFocused()
})

Then('no errors displayed', async ({ signUpPage }) => {
  await expect(signUpPage.errorSummary).toHaveCount(0)
  await expect(signUpPage.emailField).not.toHaveAttribute('error')
  await expect(signUpPage.passwordField).not.toHaveAttribute('error')
})

Then('the error summary says {string}', async ({ signUpPage }, title: string) => {
  await expect(signUpPage.errorSummary).toContainText(title)
})

Then('the error summary is focused', async ({ signUpPage }) => {
  // Focus moves to the summary so screen reader users hear what to fix.
  await expect(signUpPage.errorSummary).toBeFocused()
})

Then('the error summary is not shown', async ({ signUpPage }) => {
  await expect(signUpPage.errorSummary).toHaveCount(0)
})

When('they select {string} in the error summary', async ({ signUpPage }, message: string) => {
  await signUpPage.errorSummary.getByRole('link', { name: message }).click()
})

Then('the password field is focused', async ({ signUpPage }) => {
  await expect(signUpPage.passwordInput).toBeFocused()
})

// Password checklist and visibility

Then('the password requirements are:', async ({ signUpPage }, table: DataTable) => {
  for (const { requirement, state } of table.hashes()) {
    const item = signUpPage.passwordRequirement(requirement)
    const met = PASSWORD_REQUIREMENT_STATE[state as keyof typeof PASSWORD_REQUIREMENT_STATE]
    expect(met, `unknown state "${state}"`).toBeDefined()
    await expect(item).toHaveAttribute('data-met', met)
    await expect(item).toContainText(met === 'true' ? 'Requirement met' : 'Requirement not met')
  }
})

Then('all password requirements are green', async ({ signUpPage }) => {
  await expect(signUpPage.passwordRequirements).toHaveCount(4)
  for (const requirement of await signUpPage.passwordRequirements.all()) {
    await expect(requirement).toHaveAttribute('data-met', 'true')
    await expect(requirement.locator('nord-icon')).toHaveAttribute('color', SUCCESS_ICON_COLOR)
  }
})

Then('not all password requirements are green', async ({ signUpPage }) => {
  await expect(signUpPage.passwordRequirements).toHaveCount(4)
  await expect(signUpPage.passwordRequirements.and(signUpPage.page.locator('[data-met="false"]'))).not.toHaveCount(0)
})

Then('the password is hidden', async ({ signUpPage }) => {
  await expect(signUpPage.passwordInput).toHaveAttribute('type', 'password')
})

Then('the password is visible', async ({ signUpPage }) => {
  await expect(signUpPage.passwordInput).toHaveAttribute('type', 'text')
})

// Outcome

Then('they see the Success page', async ({ page, successPage }) => {
  await expect(page).toHaveURL(successPage.path)
  await expect(successPage.heading).toHaveText('Your account is ready')
})

Then("they don't see the Success page", async ({ page, successPage }) => {
  await expect(page).toHaveURL('/')
  await expect(successPage.heading).toHaveCount(0)
})

Then('the success heading is focused', async ({ successPage }) => {
  await expect(successPage.heading).toBeFocused()
})

Then('the success page shows the email they signed up with', async ({ successPage, scenarioData }) => {
  await expect(successPage.email).toHaveText(scenarioData.email!)
})

Then('the product updates note is shown', async ({ successPage }) => {
  await expect(successPage.updatesNote).toHaveText(
    'You will also receive occasional product updates and announcements.',
  )
})

Then('the product updates note is not shown', async ({ successPage }) => {
  await expect(successPage.updatesNote).toHaveCount(0)
})

Then('the sign up form is empty', async ({ signUpPage }) => {
  await expect(signUpPage.emailInput).toHaveValue('')
  await expect(signUpPage.updatesCheckbox).not.toBeChecked()
})
