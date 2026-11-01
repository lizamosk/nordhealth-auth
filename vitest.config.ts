import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

// Unit tests cover the pure logic (schema, message formatting, form composable). Components are covered by e2e.
export default defineConfig({
  resolve: {
    alias: { '~': fileURLToPath(new URL('./app', import.meta.url)) },
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/unit/**/*.spec.ts'],
  },
})
