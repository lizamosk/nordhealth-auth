<script setup lang="ts">
import '@nordhealth/components/lib/Toggle'

const { t } = useI18n()
const { isDark, setMode } = useTheme()

function onChange(event: Event) {
  setMode((event.target as HTMLInputElement).checked ? 'dark' : 'light')
}
</script>

<template>
  <nord-toggle :label="t('theme.toggle')" :checked="isDark" @change="onChange" />
</template>
