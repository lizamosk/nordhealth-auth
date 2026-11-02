// Synthetic data only. The e2e build has no EmailJS keys, so no email is ever sent to these addresses.

export const VALID_PASSWORD = 'Str0ng!pass'

/** Unique per call so parallel scenarios never share an address. */
export function uniqueEmail(prefix = 'qa.signup') {
  return `${prefix}+${Date.now()}-${Math.random().toString(36).slice(2, 8)}@example.com`
}

export const PASSWORD_REQUIREMENT_STATE = {
  met: 'true',
  'not met': 'false',
} as const
