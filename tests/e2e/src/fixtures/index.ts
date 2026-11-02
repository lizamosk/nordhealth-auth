import { createBdd, test as base } from 'playwright-bdd'
import { AppHeader } from '../pages/components/AppHeader'
import { SignUpPage } from '../pages/SignUpPage'
import { StubPage } from '../pages/StubPage'
import { SuccessPage } from '../pages/SuccessPage'

/** Values a scenario needs to carry between steps, e.g. the email it signed up with. */
export interface ScenarioData {
  email?: string
}

interface Fixtures {
  signUpPage: SignUpPage
  successPage: SuccessPage
  stubPage: StubPage
  appHeader: AppHeader
  scenarioData: ScenarioData
  consoleErrors: string[]
}

export const test = base.extend<Fixtures>({
  signUpPage: async ({ page }, use) => use(new SignUpPage(page)),
  successPage: async ({ page }, use) => use(new SuccessPage(page)),
  stubPage: async ({ page }, use) => use(new StubPage(page)),
  appHeader: async ({ page }, use) => use(new AppHeader(page)),
  // eslint-disable-next-line no-empty-pattern
  scenarioData: async ({}, use) => use({}),
  // Starts recording when a step first asks for it, so request it before the first navigation.
  consoleErrors: async ({ page }, use) => {
    const errors: string[] = []
    page.on('console', (message) => message.type() === 'error' && errors.push(message.text()))
    page.on('pageerror', (error) => errors.push(error.message))
    await use(errors)
  },
})

export const { Given, When, Then } = createBdd(test)
