import { z } from 'zod'

/**
 * Password requirements. Shown as a live checklist under the password field; `id` is also the i18n key
 * (`signUp.password.requirements.<id>`).
 */
export const PASSWORD_RULES = [
  { id: 'minLength', test: (value: string) => value.length >= 8 },
  { id: 'lowercase', test: (value: string) => /[a-z]/.test(value) },
  { id: 'uppercase', test: (value: string) => /[A-Z]/.test(value) },
  { id: 'symbol', test: (value: string) => /[^A-Za-z0-9\s]/.test(value) },
] as const

// Error messages are i18n keys, not text: the form translates them when it renders.
export const signUpSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'validation.email.required')
    // Only check the format once something was typed, so an empty field shows just "required".
    .pipe(z.string().email('validation.email.invalid')),
  password: z
    .string()
    .min(1, 'validation.password.required')
    .refine((value) => !value || PASSWORD_RULES.every((rule) => rule.test(value)), 'validation.password.weak'),
  updates: z.boolean(),
})

export type SignUpValues = z.infer<typeof signUpSchema>
