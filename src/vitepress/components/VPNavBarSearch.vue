<script lang="ts" setup>
import { useData } from 'vitepress'
import { ref, defineAsyncComponent, onMounted, onUnmounted } from 'vue'

const { theme } = useData()
const VPAlgoliaSearchBox = defineAsyncComponent(
  () => import('./VPAlgoliaSearchBox.vue')
)

// to avoid loading the docsearch js upfront (which is more than 1/3 of the
// payload), we delay initializing it until the user has actually clicked or
// hit the hotkey to invoke it
const loaded = ref(false)

onMounted(() => {
  const handleSearchHotKey = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      load()
      remove()
    }
  }
  const remove = () => {
    window.removeEventListener('keydown', handleSearchHotKey)
  }
  window.addEventListener('keydown', handleSearchHotKey)
  onUnmounted(remove)
})

function load () {
  if (!loaded.value)
    loaded.value = true
  else
    document.querySelector<HTMLElement>('.DocSearch-Button')?.click()
}
</script>

<template>
  <button
    v-if="theme.algolia"
    type="button"
    class="search-button"
    aria-label="Search"
    @click="load"
  >
    <span class="search-button-container">
      <svg
        width="20"
        height="20"
        class="DocSearch-Search-Icon"
        viewBox="0 0 20 20"
      >
        <path
          d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
          stroke="currentColor"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <span class="search-placeholder">Search</span>
    </span>
    <span class="search-keys">
      <span class="search-key">⌘</span>
      <span class="search-key">K</span>
    </span>
  </button>
  <VPAlgoliaSearchBox v-if="loaded"/>
</template>

<style>
#docsearch {
  display: none;
}

.search-button-container {
  align-items: center;
  display: flex;
}

.search-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  width: 48px;
  height: 55px;
  margin-right: 16px;
  background: transparent;
}

@media (min-width: 768px) {
  .search-button {
    flex-grow: 1;
    margin-right: 3rem;
    justify-content: flex-end;
    width: 100%;
  }
}

.search-button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

.search-button:focus:not(:focus-visible) {
  outline: none !important;
}

.search-button .DocSearch-Search-Icon {
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  fill: currentColor;
  width: 18px;
  height: 18px;
  position: relative;
}

@media (min-width: 768px) {
  .search-button .DocSearch-Search-Icon {
    top: 1px;
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
}

.search-button:hover .DocSearch-Search-Icon {
  color: var(--vt-c-text-1);
}

.search-placeholder {
  transition: color 0.5s;
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  display: none;
  padding: 0 10px 0 0;
}

@media (min-width: 960px) {
  .search-placeholder {
    display: inline-block;
  }
}

.search-button:hover .search-placeholder {
  color: var(--vt-c-text-1);
}

.search-button .search-key {
  margin-top: 2px;
  border: 1px solid var(--vt-c-divider);
  border-right: none;
  border-radius: 4px 0 0 4px;
  display: none;
  padding-left: 6px;
  height: 22px;
  line-height: 22px;
  transition: color 0.5s, border-color 0.5s;
  min-width: 0;
}

.search-button .search-key + .search-key {
  border-right: 1px solid var(--vt-c-divider);
  border-left: none;
  border-radius: 0 4px 4px 0;
  padding-left: 2px;
  padding-right: 6px;
}

.search-button:hover .search-key {
  border-color: var(--vt-c-brand-light);
  color: var(--vt-c-brand-light);
}

@media (min-width: 768px) {
  .search-button .search-key {
    display: inline-block;
  }
}

.search-key {
  font-size: 12px;
  font-weight: 500;
  height: 20px;
  margin: 0;
  width: auto;
  color: var(--vt-c-text-3);
  transition: color 0.5s;
  display: inline-block;
  padding: 0 1px;
}
</style>
