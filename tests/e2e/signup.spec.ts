import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'

const EMAIL = 'laura.williams@example.com'
const PASSWORD = 'Str0ng!pass'

// Nord inputs keep their <input> in shadow DOM; Playwright's label/role locators pierce it.
const emailField = (page: Page) => page.getByLabel('Email')
const passwordField = (page: Page) => page.getByLabel('Password')
const submit = (page: Page) => page.getByRole('button', { name: 'Create account' })
const summary = (page: Page) => page.locator('nord-banner')

async function fillValid(page: Page, { updates = false } = {}) {
  await emailField(page).fill(EMAIL)
  await passwordField(page).fill(PASSWORD)
  if (updates) await page.getByLabel('Send me occasional product updates and announcements').check()
}

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Create your account' })).toBeVisible()
})

test.describe('required fields', () => {
  test('an empty submit shows inline errors and a focused summary', async ({ page }) => {
    await submit(page).click()

    await expect(summary(page)).toContainText('Fix 2 errors to create your account.')
    await expect(page.getByText('Enter your email address.')).toHaveCount(2) // summary + inline
    await expect(page.getByText('Enter a password.')).toHaveCount(2)
    await expect(page).toHaveURL('/')

    // Focus moves to the summary so screen reader users hear what to fix.
    await expect.poll(() => page.evaluate(() => document.activeElement?.tagName)).toBe('NORD-BANNER')
  })

  test('a summary link moves focus to its field', async ({ page }) => {
    await submit(page).click()
    await summary(page).getByRole('link', { name: 'Enter a password.' }).click()

    await expect(passwordField(page)).toBeFocused()
  })

  test('leaving an empty field shows its error without the summary', async ({ page }) => {
    await emailField(page).focus()
    await page.keyboard.press('Tab')

    await expect(page.getByText('Enter your email address.')).toBeVisible()
    await expect(summary(page)).toHaveCount(0)
  })

  test('inline errors clear as soon as the field is fixed; the summary updates on the next submit', async ({
    page,
  }) => {
    await submit(page).click()
    await expect(summary(page)).toContainText('Fix 2 errors to create your account.')
    await emailField(page).fill(EMAIL)

    // Inline error gone; the summary keeps its content so the form doesn't jump while the user is editing.
    await expect(page.getByText('Enter your email address.')).toHaveCount(1) // only in the summary
    await expect(summary(page)).toContainText('Fix 2 errors to create your account.')

    await submit(page).click()
    await expect(summary(page)).toContainText('Fix 1 error to create your account.')
    await expect(page.getByText('Enter your email address.')).toHaveCount(0)
  })
})

test.describe('validation rules', () => {
  test('rejects a malformed email', async ({ page }) => {
    await emailField(page).fill('not-an-email')
    await page.keyboard.press('Tab')

    await expect(page.getByText('Enter a valid email address, for example name@example.com.')).toBeVisible()
  })

  test('the password checklist ticks off requirements as the user types', async ({ page }) => {
    const requirement = (text: string) => page.getByRole('listitem').filter({ hasText: text })

    await passwordField(page).fill('abc')
    await expect(requirement('Minimum 8 characters')).toContainText('Requirement not met')
    await expect(requirement('lowercase letter')).toContainText('Requirement met')
    await expect(requirement('uppercase letter')).toContainText('Requirement not met')
    await expect(requirement('symbol')).toContainText('Requirement not met')

    await passwordField(page).fill(PASSWORD)
    await expect(page.getByRole('listitem').filter({ hasText: 'Requirement not met' })).toHaveCount(0)
  })

  test('a weak password shows an error once the field is left', async ({ page }) => {
    await passwordField(page).fill('abc')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab') // past the show / hide button

    await expect(page.getByText("Your password doesn't meet all the requirements.")).toBeVisible()
  })
})

test.describe('password visibility', () => {
  test('toggles between hidden and visible, with a matching accessible name', async ({ page }) => {
    await passwordField(page).fill(PASSWORD)
    await expect(passwordField(page)).toHaveAttribute('type', 'password')

    await page.getByRole('button', { name: 'Show password' }).click()
    await expect(passwordField(page)).toHaveAttribute('type', 'text')

    await page.getByRole('button', { name: 'Hide password' }).click()
    await expect(passwordField(page)).toHaveAttribute('type', 'password')
  })

  test('moving to the toggle does not validate the password yet', async ({ page }) => {
    await passwordField(page).focus()
    await page.keyboard.press('Tab')

    await expect(page.getByRole('button', { name: 'Show password' })).toBeFocused()
    await expect(page.getByText('Enter a password.')).toHaveCount(0)
  })
})

test.describe('successful sign-up', () => {
  test('shows the success page with the email used', async ({ page }) => {
    await fillValid(page)
    await submit(page).click()

    await expect(page).toHaveURL('/success')
    const heading = page.getByRole('heading', { name: 'Your account is ready' })
    await expect(heading).toBeFocused()
    await expect(page.getByText(EMAIL)).toBeVisible()
    await expect(page.getByText('occasional product updates and announcements')).toHaveCount(0)
    await expect(page).toHaveTitle('Your account is ready')
  })

  test('mentions product updates only when the user opted in', async ({ page }) => {
    await fillValid(page, { updates: true })
    await submit(page).click()

    await expect(page.getByText('You will also receive occasional product updates and announcements.')).toBeVisible()
  })

  test('"Back to sign up" returns to an empty form', async ({ page }) => {
    await fillValid(page, { updates: true })
    await submit(page).click()
    await page.getByRole('link', { name: 'Back to sign up' }).click()

    await expect(page).toHaveURL('/')
    await expect(emailField(page)).toHaveValue('')
    await expect(page.getByLabel('Send me occasional product updates and announcements')).not.toBeChecked()
  })

  test('the success page cannot be opened directly', async ({ page }) => {
    await page.goto('/success')

    await expect(page).toHaveURL('/')
    await expect(page.getByRole('heading', { name: 'Create your account' })).toBeVisible()
  })
})

test.describe('stub destinations', () => {
  test('"Sign in" opens a placeholder page', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign in' }).click()

    await expect(page).toHaveURL('/sign-in')
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible()
  })
})

test.describe('theme', () => {
  test('follows the system setting on first visit', async ({ browser }) => {
    const context = await browser.newContext({ colorScheme: 'dark' })
    const page = await context.newPage()
    await page.goto('/')

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await context.close()
  })

  test('remembers the choice across reloads', async ({ page }) => {
    const toggle = page.getByRole('switch', { name: 'Dark theme' })
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')

    await toggle.check()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')

    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await expect(page.getByRole('switch', { name: 'Dark theme' })).toBeChecked()
  })
})

test('page language is declared for assistive technology and Nord localization', async ({ page }) => {
  await expect(page.locator('html')).toHaveAttribute('lang', 'en-US')
  await expect(page.locator('html')).toHaveAttribute('dir', 'ltr')
})

test('the whole journey logs no console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()))
  page.on('pageerror', (error) => errors.push(error.message))
  await page.reload()

  await submit(page).click()
  await expect(summary(page)).toBeVisible()
  await fillValid(page, { updates: true })
  await page.getByRole('button', { name: 'Show password' }).click()
  await page.getByRole('switch', { name: 'Dark theme' }).check()
  await submit(page).click()
  await expect(page).toHaveURL('/success')
  await page.getByRole('link', { name: 'Back to sign up' }).click()
  await expect(page).toHaveURL('/')

  expect(errors).toEqual([])
})
