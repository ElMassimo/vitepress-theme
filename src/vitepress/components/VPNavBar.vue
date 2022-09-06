<script lang="ts" setup>
import VPNavBarTitle from './VPNavBarTitle.vue'
import VPNavBarSearch from './VPNavBarSearch.vue'
import VPNavBarMenu from './VPNavBarMenu.vue'
import VPNavBarAppearance from './VPNavBarAppearance.vue'
import VPNavBarSocialLinks from './VPNavBarSocialLinks.vue'
import VPNavBarHamburger from './VPNavBarHamburger.vue'

defineProps<{
  isScreenOpen: boolean
}>()
</script>

<template>
  <div class="VPNavBar">
    <div class="container">
      <VPNavBarTitle />

      <div class="content">
        <VPNavBarSearch/>
        <VPNavBarMenu class="menu" />
        <VPNavBarSocialLinks class="social-links" />
        <VPNavBarAppearance class="appearance" />
        <VPNavBarHamburger
          class="hamburger"
          :active="isScreenOpen"
          @click="$emit('toggle-screen')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPNavBar {
  position: relative;
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 0 12px 0 24px;
  height: var(--vt-nav-height);
  white-space: nowrap;
  background-color: var(--vt-c-bg);
  transition: border-color 0.5s, background-color 0.5s;
}

@media (min-width: 768px) {
  .VPNavBar {
    padding: 0 12px 0 32px;
  }
}

@media (min-width: 1280px) {
  .VPNavBar {
    padding: 0 32px;
  }
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--vp-screen-max-width);
}

.content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}

.appearance {
  margin-left: 2rem;
}

.social-links {
  margin-left: 1.5rem;
}
</style>
