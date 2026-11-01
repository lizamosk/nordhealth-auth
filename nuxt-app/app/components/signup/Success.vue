<script setup lang="ts">
import '@nordhealth/components/lib/Button'
import '@nordhealth/components/lib/Card'
import '@nordhealth/components/lib/Icon'
import '@nordhealth/components/lib/Stack'
import type { SignUpResult } from '~/services/auth'

defineProps<{ result: SignUpResult }>()

const { t } = useI18n()
const heading = useTemplateRef<HTMLHeadingElement>('heading')

useNuxtApp().hooks.hookOnce('page:finish', () => heading.value?.focus())
</script>

<template>
  <nord-card padding="l">
    <nord-stack gap="l" align-items="center" class="n:py-4 n:text-center">
      <div class="success-icon">
        <nord-icon name="interface-checked" size="xl" />
      </div>

      <nord-stack gap="s" align-items="center" class="n:text-center">
        <h1 ref="heading" tabindex="-1" class="n:m-0 n:text-xxl n:font-heading n:leading-heading">
          {{ t('success.heading') }}
        </h1>
        <p class="n:m-0 n:text-l n:text-weak n:[overflow-wrap:anywhere]">
          <i18n-t keypath="success.confirmation" tag="span" scope="global">
            <template #email>
              <strong class="n:font-heading n:text-default">{{ result.email }}</strong>
            </template>
          </i18n-t>
        </p>
        <p v-if="result.updates" class="n:m-0 n:text-l n:text-weak">{{ t('success.updatesOptIn') }}</p>
      </nord-stack>

      <nord-stack gap="s" class="n:w-full">
        <NuxtLink v-slot="{ href, navigate }" to="/dashboard" custom>
          <nord-button variant="primary" size="l" expand :href="href ?? undefined" @click="navigate">
            <span>{{ t('success.continue') }}</span>
          </nord-button>
        </NuxtLink>
        <NuxtLink v-slot="{ href, navigate }" to="/" custom>
          <nord-button variant="plain" size="l" expand :href="href ?? undefined" @click="navigate">
            <span>{{ t('success.back') }}</span>
          </nord-button>
        </NuxtLink>
      </nord-stack>
    </nord-stack>
  </nord-card>
</template>
