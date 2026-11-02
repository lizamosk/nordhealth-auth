import { expect } from '@playwright/test'
import { Given, Then, When } from '../fixtures'

Given('a user lands on the sign up page', async ({ signUpPage }) => {
  await signUpPage.goto()
  await expect(signUpPage.heading).toBeVisible()
})

When('they open {string} directly', async ({ page }, path: string) => {
  await page.goto(path)
})

When('they reload the page', async ({ page }) => {
  await page.reload()
})

When('they press Tab', async ({ page }) => {
  await page.keyboard.press('Tab')
})

When('they click {string} CTA', async ({ page }, name: string) => {
  await page.getByRole('button', { name }).click()
})

When('they click the {string} button', async ({ page }, name: string) => {
  await page.getByRole('button', { name }).click()
})

When('they click the {string} link', async ({ page }, name: string) => {
  await page.getByRole('link', { name }).click()
})

Then('the {string} button is focused', async ({ page }, name: string) => {
  await expect(page.getByRole('button', { name })).toBeFocused()
})

Then('they stay on the sign up page', async ({ page, signUpPage }) => {
  await expect(page).toHaveURL('/')
  await expect(signUpPage.heading).toBeVisible()
})

Then('the page title is {string}', async ({ page }, title: string) => {
  await expect(page).toHaveTitle(title)
})

Then(
  'they see the {string} placeholder page at {string}',
  async ({ page, stubPage }, heading: string, path: string) => {
    await expect(page).toHaveURL(path)
    await expect(stubPage.heading).toHaveText(heading)
  },
)

Then('the page language is {string} with {string} direction', async ({ signUpPage }, lang: string, dir: string) => {
  await expect(signUpPage.html).toHaveAttribute('lang', lang)
  await expect(signUpPage.html).toHaveAttribute('dir', dir)
})

Given('console errors are being recorded', async ({ consoleErrors }) => {
  expect(consoleErrors).toEqual([])
})

Then('no console errors were logged', async ({ consoleErrors }) => {
  expect(consoleErrors).toEqual([])
})
