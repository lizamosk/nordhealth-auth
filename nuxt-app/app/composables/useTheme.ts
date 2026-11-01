export type ThemeMode = 'light' | 'dark'

// Keep in sync with the bootstrap script in nuxt.config.ts.
const STORAGE_KEY = 'mode'

export function useTheme() {
  const mode = useState<ThemeMode>('theme-mode', () =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  function setMode(next: ThemeMode) {
    mode.value = next
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage can be blocked; the choice then just won't persist.
      console.warn('Local storage is blocked. Cannot save theme mode')
    }
  }

  return { isDark: computed(() => mode.value === 'dark'), setMode }
}
