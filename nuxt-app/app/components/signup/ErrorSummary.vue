<script setup lang="ts">
import '@nordhealth/components/lib/Banner'
import type { Banner } from '@nordhealth/components'
import type { SignUpField } from '~/composables/useSignUpForm'

export interface SummaryItem {
  field: SignUpField
  text: string
}

defineProps<{
  title: string
  items?: SummaryItem[]
}>()

const emit = defineEmits<{ select: [field: SignUpField] }>()

const titleId = useId()
const banner = useTemplateRef<Banner>('banner')

defineExpose({ focus: () => banner.value?.focus() })
</script>

<template>
  <nord-banner ref="banner" variant="danger" tabindex="-1" role="group" :aria-labelledby="titleId">
    <p :id="titleId" class="n:m-0 n:font-heading">{{ title }}</p>
    <ul v-if="items?.length" class="n:m-0 n:mbs-1 n:list-disc n:ps-4">
      <li v-for="item in items" :key="item.field">
        <a
          :href="`#signup-${item.field}`"
          class="n:inline-flex n:min-h-11 n:items-center n:underline"
          @click.prevent="emit('select', item.field)"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nord-banner>
</template>
