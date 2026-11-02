<script setup lang="ts">
import '@nordhealth/components/lib/Button'
import '@nordhealth/components/lib/Icon'
import '@nordhealth/components/lib/Input'
import '@nordhealth/components/lib/Tooltip'
import '@nordhealth/components/lib/VisuallyHidden'
import type { Input } from '@nordhealth/components'
import { PASSWORD_RULES } from '~/utils/signUpSchema'

defineProps<{
  id: string
  error?: string
}>()

const model = defineModel<string>({ required: true })
const emit = defineEmits<{ blur: [] }>()

const { t } = useI18n()
const visible = ref(false)
const tooltipId = useId()
const input = useTemplateRef<Input>('input')

const passwordRequirements = computed(() =>
  PASSWORD_RULES.map((rule) => ({ id: rule.id, met: rule.test(model.value) })),
)

// The input and its show/hide button act as one control: only report "blur" when focus leaves both,
// so tabbing to the button doesn't show an error yet.
function onFocusOut(event: FocusEvent) {
  const next = event.relatedTarget as Node | null
  if (next && input.value?.contains(next)) return
  emit('blur')
}

defineExpose({ focus: () => input.value?.focus() })
</script>

<template>
  <nord-input
    :id="id"
    ref="input"
    v-model="model"
    data-qa="qa-signup-password"
    :label="t('signUp.password.label')"
    :placeholder="t('signUp.password.placeholder')"
    :error="error"
    :type="visible ? 'text' : 'password'"
    name="password"
    autocomplete="new-password"
    size="l"
    hint-below
    expand
    required
    hide-required
    @blur="onFocusOut"
  >
    <nord-button
      slot="end"
      data-qa="qa-password-toggle"
      type="button"
      variant="plain"
      square
      class="n:[--n-button-background-color:transparent] n:[--n-button-border-color:transparent]"
      :aria-describedby="tooltipId"
      @click="visible = !visible"
      @blur="onFocusOut"
    >
      <nord-icon :name="visible ? 'interface-edit-off' : 'interface-edit-on'" size="l" />
      <nord-visually-hidden>{{ visible ? t('signUp.password.hide') : t('signUp.password.show') }}</nord-visually-hidden>
    </nord-button>

    <ul
      slot="hint"
      class="n:m-0 n:mbs-2 n:flex n:list-none n:flex-col n:gap-2 n:rounded-default n:bg-surface-lowered n:p-4"
    >
      <li
        v-for="requirement in passwordRequirements"
        :key="requirement.id"
        data-qa="qa-password-requirement"
        :data-requirement="requirement.id"
        :data-met="requirement.met"
        class="n:flex n:items-center n:gap-2 n:text-m n:text-weak"
      >
        <nord-icon
          :name="requirement.met ? 'interface-complete-small' : 'interface-incomplete-small'"
          :color="requirement.met ? 'var(--n-color-status-success)' : 'var(--n-color-icon)'"
          size="m"
        />
        <span>
          <nord-visually-hidden>
            {{ requirement.met ? t('signUp.password.requirements.met') : t('signUp.password.requirements.notMet') }}
          </nord-visually-hidden>
          {{ t(`signUp.password.requirements.${requirement.id}`) }}
        </span>
      </li>
    </ul>
  </nord-input>
  <nord-tooltip :id="tooltipId">{{ t('signUp.password.toggleTooltip') }}</nord-tooltip>
</template>
