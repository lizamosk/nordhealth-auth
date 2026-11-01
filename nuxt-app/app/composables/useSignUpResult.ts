import type { SignUpResult } from '~/services/auth'

/** Shared between the sign-up form and the success page. `null` means no sign-up has completed. */
export function useSignUpResult() {
  const result = useState<SignUpResult | null>('signup-result', () => null)

  function clear() {
    result.value = null
  }

  return { result, clear }
}
