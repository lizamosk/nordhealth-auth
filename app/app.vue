<script setup lang="ts">
const { localeProperties } = useI18n()

useHead({
  htmlAttrs: {
    lang: () => localeProperties.value.language ?? 'en',
    dir: () => localeProperties.value.dir ?? 'ltr',
  },
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
