import type { DefaultTheme } from 'vitepress'

/** Theme configuration accepted by the current VitePress default theme. */
export type Config = DefaultTheme.Config

/** Backwards-compatible type exports for existing config files. */
export type NavItem = DefaultTheme.NavItem
export type SidebarConfig = DefaultTheme.Sidebar
export type SidebarGroup = DefaultTheme.SidebarItem
export type AlgoliaSearchOptions = DefaultTheme.AlgoliaSearchOptions
