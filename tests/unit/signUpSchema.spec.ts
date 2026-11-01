import { describe, expect, it } from 'vitest'
import { PASSWORD_RULES, signUpSchema } from '~/utils/signUpSchema'

const VALID = { email: 'laura.williams@example.com', password: 'Str0ng!pass', updates: false }

/** The first error (an i18n key) per field, as the form shows it. */
function firstErrors(input: unknown) {
  const result = signUpSchema.safeParse(input)
  if (result.success) return {}
  const errors: Record<string, string> = {}
  for (const issue of result.error.issues) errors[String(issue.path[0])] ??= issue.message
  return errors
}

describe('signUpSchema', () => {
  it('accepts valid values and trims the email', () => {
    const result = signUpSchema.safeParse({ ...VALID, email: '  laura.williams@example.com  ' })
    expect(result.success && result.data.email).toBe('laura.williams@example.com')
  })

  it.each(['', '   '])('requires an email (%j)', (email) => {
    expect(firstErrors({ ...VALID, email }).email).toBe('validation.email.required')
  })

  it.each(['plain', 'no-at.example.com', 'missing@tld', '@example.com', 'two words@example.com'])(
    'rejects the malformed email %j',
    (email) => {
      expect(firstErrors({ ...VALID, email }).email).toBe('validation.email.invalid')
    },
  )

  it('requires a password', () => {
    expect(firstErrors({ ...VALID, password: '' }).password).toBe('validation.password.required')
  })

  it.each(['Sh0rt!a', 'PASSWORD1!', 'password1!', 'Passw0rdOK', 'Passw0rd ok'])(
    'rejects %j, which misses a requirement',
    (password) => {
      expect(firstErrors({ ...VALID, password }).password).toBe('validation.password.weak')
    },
  )

  it.each(['Passw0rd_', 'Aa!aaaaa', 'correct-Horse-9'])('accepts %j', (password) => {
    expect(firstErrors({ ...VALID, password }).password).toBeUndefined()
  })
})

describe('PASSWORD_RULES', () => {
  const failing = (password: string) => PASSWORD_RULES.filter((rule) => !rule.test(password)).map((rule) => rule.id)

  it('reports each unmet requirement for the checklist', () => {
    expect(failing('')).toEqual(['minLength', 'lowercase', 'uppercase', 'symbol'])
    expect(failing('abc')).toEqual(['minLength', 'uppercase', 'symbol'])
    expect(failing('Abcdefg!')).toEqual([])
  })

  it('does not count whitespace as a symbol', () => {
    expect(failing('Passw0rd ok')).toEqual(['symbol'])
  })
})
