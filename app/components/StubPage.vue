<script setup lang="ts">
import '@nordhealth/components/lib/Button'
import '@nordhealth/components/lib/Card'
import '@nordhealth/components/lib/Stack'

// Placeholder for pages the design links to but the ticket doesn't cover (sign in, dashboard).
const props = defineProps<{ name: 'signIn' | 'dashboard' }>()

const { t } = useI18n()
useHead({ title: () => t(`stub.${props.name}.pageTitle`) })
</script>

<template>
  <nord-card padding="l">
    <nord-stack gap="l">
      <nord-stack gap="s">
        <h1 class="n:m-0 n:text-xxl n:font-heading n:leading-heading">{{ t(`stub.${name}.heading`) }}</h1>
        <p class="n:m-0 n:text-l n:text-weak">{{ t(`stub.${name}.body`) }}</p>
      </nord-stack>
      <NuxtLink v-slot="{ href, navigate }" to="/" custom>
        <nord-button size="l" expand :href="href ?? undefined" @click="navigate">
          <span>{{ t('stub.backToSignUp') }}</span>
        </nord-button>
      </NuxtLink>
    </nord-stack>
  </nord-card>
</template>
