import { describe, expect, it, vi } from 'vitest'
import { createApp } from 'vue'
import { useSignUpForm } from '~/composables/useSignUpForm'
import type { SignUpPayload, SignUpResult } from '~/services/auth'

const echo = async ({ email, updates }: SignUpPayload): Promise<SignUpResult> => ({ email, updates })

/** vee-validate registers lifecycle hooks, so run the composable inside a real (unrendered) component. */
function inComponent<T>(run: () => T): T {
  let result!: T
  createApp({
    setup() {
      result = run()
      return () => null
    },
  }).mount(document.createElement('div'))
  return result
}

function setup(signUp: typeof echo = echo) {
  const signUpSpy = vi.fn(signUp)
  const onSuccess = vi.fn()
  const onInvalid = vi.fn()
  const form = inComponent(() => useSignUpForm({ signUp: signUpSpy, onSuccess, onInvalid }))
  return { form, signUp: signUpSpy, onSuccess, onInvalid }
}

function fillValid(form: ReturnType<typeof useSignUpForm>, updates = false) {
  form.email.value = '  laura.williams@example.com '
  form.password.value = 'Str0ng!pass'
  form.updates.value = updates
}

describe('useSignUpForm', () => {
  it('blocks an empty submit, lists both fields and notifies the caller', async () => {
    const { form, signUp, onSuccess, onInvalid } = setup()

    await form.onSubmit()

    expect(signUp).not.toHaveBeenCalled()
    expect(onSuccess).not.toHaveBeenCalled()
    expect(onInvalid).toHaveBeenCalledOnce()
    expect(form.summary.value).toEqual([
      { field: 'email', message: 'validation.email.required' },
      { field: 'password', message: 'validation.password.required' },
    ])
    expect(form.errors.value.email).toBe('validation.email.required')
    expect(form.errors.value.password).toBe('validation.password.required')
  })

  it('submits the trimmed values and reports the result', async () => {
    const { form, signUp, onSuccess } = setup()
    fillValid(form, true)

    await form.onSubmit()

    expect(signUp).toHaveBeenCalledWith({ email: 'laura.williams@example.com', password: 'Str0ng!pass', updates: true })
    expect(onSuccess).toHaveBeenCalledWith({ email: 'laura.williams@example.com', updates: true })
    expect(form.submitError.value).toBe(false)
  })

  it('does not opt in to updates by default', async () => {
    const { form, signUp } = setup()
    form.email.value = 'a@b.co'
    form.password.value = 'Str0ng!pass'

    await form.onSubmit()

    expect(signUp).toHaveBeenCalledWith(expect.objectContaining({ updates: false }))
  })

  it('flags a failed request without reporting success', async () => {
    const { form, onSuccess } = setup(() => Promise.reject(new Error('network')))
    fillValid(form)

    await form.onSubmit()

    expect(form.submitError.value).toBe(true)
    expect(onSuccess).not.toHaveBeenCalled()
    expect(form.isSubmitting.value).toBe(false)
  })

  it('ignores a second submit while the first is in flight', async () => {
    let finish!: (result: SignUpResult) => void
    const pending = new Promise<SignUpResult>((resolve) => {
      finish = resolve
    })
    const { form, signUp } = setup(() => pending)
    fillValid(form)

    const first = form.onSubmit()
    await vi.waitFor(() => expect(form.isSubmitting.value).toBe(true))
    await form.onSubmit()
    finish({ email: 'a@b.co', updates: false })
    await first

    expect(signUp).toHaveBeenCalledOnce()
  })

  it('shows the password error once the field is validated (blur), without a summary', async () => {
    const { form } = setup()

    form.passwordAttrs.value.onBlur?.()

    await vi.waitFor(() => expect(form.errors.value.password).toBe('validation.password.required'))
    expect(form.summary.value).toEqual([])
  })

  it('clears an inline error as soon as the field is fixed, keeping the summary until the next submit', async () => {
    const { form } = setup()
    await form.onSubmit()

    form.email.value = 'laura.williams@example.com'

    await vi.waitFor(() => expect(form.errors.value.email).toBeUndefined())
    expect(form.summary.value.map((item) => item.field)).toEqual(['email', 'password'])

    await form.onSubmit()
    expect(form.summary.value.map((item) => item.field)).toEqual(['password'])
  })

  it('does not validate while typing before the field has been touched', async () => {
    const { form } = setup()

    form.email.value = 'not-an-email'
    await new Promise((resolve) => setTimeout(resolve, 50))

    expect(form.errors.value).toEqual({})
  })
})
