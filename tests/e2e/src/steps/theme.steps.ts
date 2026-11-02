import { expect } from '@playwright/test'
import { Given, Then, When } from '../fixtures'

Given('the system color scheme is {string}', async ({ page }, colorScheme: 'light' | 'dark') => {
  // Must run before the first navigation: the inline head script reads it before first paint.
  await page.emulateMedia({ colorScheme })
})

Then('the page theme is {string}', async ({ signUpPage }, theme: string) => {
  await expect(signUpPage.html).toHaveAttribute('data-theme', theme)
})

When('they switch the dark theme on', async ({ appHeader }) => {
  await appHeader.darkThemeSwitch.check()
})

Then('the dark theme switch is on', async ({ appHeader }) => {
  await expect(appHeader.darkThemeSwitch).toBeChecked()
})
