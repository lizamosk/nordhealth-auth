<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="n:reset n:flex n:min-h-dvh n:flex-col">
    <a class="skip-link" href="#main">{{ t('app.skipToContent') }}</a>
    <AppHeader />
    <main
      id="main"
      tabindex="-1"
      class="n:flex n:flex-1 n:items-start n:justify-center n:px-4 n:py-8 n:s:items-center n:s:py-12"
    >
      <div class="n:w-full n:max-w-[440px]">
        <slot />
      </div>
    </main>
  </div>
</template>
