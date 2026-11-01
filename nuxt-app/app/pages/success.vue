<script setup lang="ts">
definePageMeta({ middleware: 'signup-complete' })

const { t } = useI18n()
const { result } = useSignUpResult()

useHead({ title: () => t('success.pageTitle') })
</script>

<template>
  <SignupSuccess v-if="result" :result="result" />
</template>
