// Type support for <nord-*> elements in Vue templates (IntelliSense + vue-tsc).
// https://nordhealth.design/docs/developer/web-components#types-and-editor-integration-with-vue
/// <reference types="@nordhealth/components/lib/vue.d.ts" />

declare module '@nordhealth/icons/lib/assets/*.js' {
  const svg: string
  export default svg
}
