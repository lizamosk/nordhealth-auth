import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { nextTick, ref } from 'vue'
import { signUp as defaultSignUp } from '~/services/auth'
import type { SignUpResult } from '~/services/auth'
import { signUpSchema } from '~/utils/signUpSchema'
import type { SignUpValues } from '~/utils/signUpSchema'

const FIELDS = ['email', 'password'] as const
export type SignUpField = (typeof FIELDS)[number]

interface UseSignUpFormOptions {
  /** The request to send. Injectable so tests (and later a real API) can replace the mock. */
  signUp?: typeof defaultSignUp
  /** Called after a successful request. */
  onSuccess?: (result: SignUpResult) => void | Promise<void>
  /** Called after a failed submit, once the error summary is rendered (to move focus to it). */
  onInvalid?: () => void
}

export function useSignUpForm({ signUp = defaultSignUp, onSuccess, onInvalid }: UseSignUpFormOptions = {}) {
  const { defineField, handleSubmit, errors, isSubmitting, submitCount } = useForm<SignUpValues>({
    validationSchema: toTypedSchema(signUpSchema),
    initialValues: { email: '', password: '', updates: false },
  })

  // Nord's Input guidance: don't validate while someone is still typing their first attempt.
  const validateLive = (state: { touched: boolean }) => ({
    validateOnModelUpdate: state.touched || submitCount.value > 0,
  })

  const [email, emailAttrs] = defineField('email', validateLive)
  const [password, passwordAttrs] = defineField('password', validateLive)
  const [updates] = defineField('updates')

  /** The request itself failed (not a validation error). */
  const submitError = ref(false)

  /**
   * Errors listed in the summary above the form (message = i18n key). Captured at each submit. It deliberately
   * doesn't update while the user fixes fields: a summary that shrinks mid-edit makes the whole form jump.
   * The inline errors update live instead.
   */
  const summary = ref<{ field: SignUpField; message: string }[]>([])

  const submit = handleSubmit(
    async (values) => {
      summary.value = []
      try {
        await onSuccess?.(await signUp(values))
      } catch {
        submitError.value = true
      }
    },
    async ({ errors }) => {
      summary.value = FIELDS.filter((field) => errors[field]).map((field) => ({ field, message: errors[field]! }))
      await nextTick() // let the summary render before the caller focuses it
      onInvalid?.()
    },
  )

  async function onSubmit() {
    if (isSubmitting.value) return
    submitError.value = false
    await submit()
  }

  return { email, emailAttrs, password, passwordAttrs, updates, errors, summary, isSubmitting, submitError, onSubmit }
}
