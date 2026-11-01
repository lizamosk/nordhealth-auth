import Icon from '@nordhealth/components/lib/Icon'
import checked from '@nordhealth/icons/lib/assets/interface-checked.js'
import completeSmall from '@nordhealth/icons/lib/assets/interface-complete-small.js'
import editOff from '@nordhealth/icons/lib/assets/interface-edit-off.js'
import editOn from '@nordhealth/icons/lib/assets/interface-edit-on.js'
import incompleteSmall from '@nordhealth/icons/lib/assets/interface-incomplete-small.js'

export default defineNuxtPlugin(() => {
  Icon.registerIcon('interface-checked', checked)
  Icon.registerIcon('interface-complete-small', completeSmall)
  Icon.registerIcon('interface-edit-off', editOff)
  Icon.registerIcon('interface-edit-on', editOn)
  Icon.registerIcon('interface-incomplete-small', incompleteSmall)
})
