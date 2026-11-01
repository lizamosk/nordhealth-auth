<script setup lang="ts">
const { t } = useI18n()
const { clear } = useSignUpResult()

useHead({ title: () => t('signUp.pageTitle') })
clear()
</script>

<template>
  <SignupForm />
</template>
