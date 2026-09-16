# Changelog

## 2.0.0 - 2026-09-16

### Breaking changes

- Require VitePress 2.0.0-alpha.20 or newer.
- Replace the vendored VitePress 0.20 theme with an extension of the maintained default theme.
- Use VitePress's default theme configuration directly.
- Remove the legacy `./highlight` export and custom Shiki integration.
- Remove the public `core` component and icon exports.
- Replace `--vt-*` variables and `.vt-doc` selectors with VitePress's `--vp-*` variables and `.vp-doc` selectors.

### Added

- Modern VitePress code blocks, navigation, search, responsive behavior, and accessibility.
- Shared styling for feature cards, keyboard labels, copy buttons, and documentation links.
- VitePress 1.x to 2.x migration instructions and before/after screenshots.

### Removed

- Vendored VitePress components, composables, icons, fonts, dark-mode initialization, DocSearch integration, and syntax highlighter.
- Runtime dependencies that are now provided by VitePress.
