<script setup lang="ts">
import '@nordhealth/components/lib/Button'
import '@nordhealth/components/lib/Card'
import '@nordhealth/components/lib/Checkbox'
import '@nordhealth/components/lib/Input'
import '@nordhealth/components/lib/Stack'
import '@nordhealth/components/lib/VisuallyHidden'
import type { Input } from '@nordhealth/components'
import type { SignUpField } from '~/composables/useSignUpForm'

const { t } = useI18n()
const { result } = useSignUpResult()

const summaryBanner = useTemplateRef<{ focus: () => void }>('summaryBanner')
const emailInput = useTemplateRef<Input>('emailInput')
const passwordField = useTemplateRef<{ focus: () => void }>('passwordField')

const { email, emailAttrs, password, passwordAttrs, updates, errors, summary, isSubmitting, submitError, onSubmit } =
  useSignUpForm({
    onSuccess: async (signUpResult) => {
      result.value = signUpResult
      await navigateTo('/success')
    },
    onInvalid: () => summaryBanner.value?.focus(),
  })

const errorText = (field: SignUpField) => (errors.value[field] ? t(errors.value[field]) : undefined)

const summaryItems = computed(() => summary.value.map(({ field, message }) => ({ field, text: t(message) })))

const summaryTitle = computed(() =>
  submitError.value
    ? t('signUp.serverError')
    : t('signUp.summary.title', { count: summaryItems.value.length }, summaryItems.value.length),
)

const summaryVisible = computed(() => submitError.value || summaryItems.value.length > 0)

function focusField(field: SignUpField) {
  if (field === 'email') emailInput.value?.focus()
  else passwordField.value?.focus()
}
</script>

<template>
  <nord-stack gap="m">
    <SignupErrorSummary
      v-if="summaryVisible"
      ref="summaryBanner"
      :title="summaryTitle"
      :items="submitError ? [] : summaryItems"
      @select="focusField"
    />

    <nord-card padding="l">
      <h1 id="signup-heading" class="n:m-0 n:mbe-6 n:text-xxl n:font-heading n:leading-heading">
        {{ t('signUp.heading') }}
      </h1>

      <form class="auth-form" novalidate aria-labelledby="signup-heading" @submit.prevent="onSubmit">
        <nord-stack gap="l">
          <nord-input
            id="signup-email"
            ref="emailInput"
            v-model="email"
            v-bind="emailAttrs"
            :label="t('signUp.email.label')"
            :placeholder="t('signUp.email.placeholder')"
            :error="errorText('email')"
            type="email"
            name="email"
            autocomplete="email"
            size="l"
            expand
            required
            hide-required
          />

          <SignupPasswordField
            id="signup-password"
            ref="passwordField"
            v-model="password"
            :error="errorText('password')"
            @blur="passwordAttrs.onBlur"
          />

          <nord-checkbox
            v-model="updates"
            type="checkbox"
            name="updates"
            size="l"
            :label="t('signUp.updates.label')"
            :hint="t('signUp.updates.hint')"
            hint-below
          />

          <nord-button type="submit" variant="primary" size="l" expand :loading="isSubmitting" :disabled="isSubmitting">
            <span>{{ isSubmitting ? t('signUp.submitting') : t('signUp.submit') }}</span>
          </nord-button>
        </nord-stack>
      </form>

      <nord-visually-hidden role="status">
        {{ isSubmitting ? t('signUp.submittingAnnouncement') : '' }}
      </nord-visually-hidden>
    </nord-card>

    <nord-card class="n:text-center">
      <i18n-t keypath="signUp.existingAccount" tag="span" scope="global">
        <template #link>
          <NuxtLink to="/sign-in" class="n:text-link n:underline">{{ t('signUp.signInLink') }}</NuxtLink>
        </template>
      </i18n-t>
    </nord-card>
  </nord-stack>
</template>
