import { expect } from '@playwright/test'
import { Then, When } from '../fixtures'
import { scanForViolations } from '../support/axe'
import { uniqueEmail, VALID_PASSWORD } from '../support/testData'

When('they open the {string} state', async ({ page, signUpPage, successPage }, state: string) => {
  // Fonts and icons settle after load; scanning earlier can report transient contrast issues.
  await page.waitForLoadState('networkidle')
  switch (state) {
    case 'sign-up form':
      return
    case 'error summary':
      await signUpPage.submitButton.click()
      await expect(signUpPage.errorSummary).toBeVisible()
      return
    case 'success page':
      await signUpPage.signUp({ email: uniqueEmail(), password: VALID_PASSWORD })
      await expect(successPage.heading).toBeVisible()
      return
    default:
      throw new Error(`Unknown accessibility state "${state}"`)
  }
})

Then('the page has no detectable accessibility violations', async ({ page }) => {
  expect(await scanForViolations(page)).toEqual([])
})
