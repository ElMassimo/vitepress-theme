import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'

/**
 * The VitePress default theme with a small set of shared refinements.
 *
 * Keeping this package as an extension—rather than a fork—means consumers get
 * new VitePress markup, behavior, accessibility, and bug fixes automatically.
 */
const VPTheme = {
  extends: DefaultTheme
} satisfies Theme

export { VPTheme }
export type { Config } from './config'
