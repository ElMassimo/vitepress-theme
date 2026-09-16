import { defineConfig } from 'vitepress'

/**
 * Shared defaults for sites using this theme.
 *
 * VitePress now owns syntax highlighting, color-mode initialization, font
 * loading, and Algolia chunk preloading, so no custom runtime hooks are needed.
 */
export default defineConfig({
  appearance: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
