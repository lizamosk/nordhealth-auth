import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'

const scan = (page: Page) =>
  new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze()

async function openErrors(page: Page) {
  await page.getByRole('button', { name: 'Create account' }).click()
  await expect(page.locator('nord-banner')).toBeVisible()
}

async function openSuccess(page: Page) {
  await page.getByLabel('Email').fill('laura.williams@example.com')
  await page.getByLabel('Password').fill('Str0ng!pass')
  await page.getByRole('button', { name: 'Create account' }).click()
  await expect(page.getByRole('heading', { name: 'Your account is ready' })).toBeVisible()
}

for (const colorScheme of ['light', 'dark'] as const) {
  test.describe(`axe, ${colorScheme} theme`, () => {
    test.use({ colorScheme })

    test.beforeEach(async ({ page }) => {
      await page.goto('/')
      await expect(page.locator('html')).toHaveAttribute('data-theme', colorScheme)
      await page.waitForLoadState('networkidle')
    })

    test('sign-up form', async ({ page }) => {
      expect((await scan(page)).violations).toEqual([])
    })

    test('required-field errors', async ({ page }) => {
      await openErrors(page)
      expect((await scan(page)).violations).toEqual([])
    })

    test('success page', async ({ page }) => {
      await openSuccess(page)
      expect((await scan(page)).violations).toEqual([])
    })
  })
}
