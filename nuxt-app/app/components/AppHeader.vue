<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="n:flex n:min-h-16 n:items-center n:justify-between n:gap-3 n:bg-surface n:px-4 n:shadow-header">
    <NuxtLink
      to="/"
      class="n:inline-flex n:min-h-11 n:items-center n:gap-2 n:text-l n:font-heading n:text-default n:no-underline"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="6" style="fill: var(--n-color-accent)" />
        <path
          d="M14 7v14M7 14h14"
          fill="none"
          stroke-width="3"
          stroke-linecap="round"
          style="stroke: var(--n-color-text-on-accent)"
        />
      </svg>
      {{ t('app.name') }}
    </NuxtLink>
    <ThemeToggle />
  </header>
</template>
