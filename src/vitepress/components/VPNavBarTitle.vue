<script setup lang="ts">
import { useData } from 'vitepress'

const { site, theme } = useData()
</script>

<template>
  <a class="VPNavBarTitle" href="/">
    <img class="logo" :src="theme.logo" alt="Logo"/>
    <span class="text" v-text="site.title"/>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
