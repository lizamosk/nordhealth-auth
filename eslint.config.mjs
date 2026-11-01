// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt(
  {
    rules: {
      // Nord elements are web components registered at runtime, not Vue components, and they use the
      // native `slot` attribute (Vue 2's slot syntax is what this rule guards against).
      'vue/no-undef-components': 'off',
      'vue/no-deprecated-slot-attribute': 'off',
    },
  },
  // Prettier is the only formatter: it runs as an ESLint rule, and eslint-config-prettier (included in the
  // recommended preset) turns off every ESLint formatting rule that would conflict with it. Keep this last.
  prettierRecommended,
)
