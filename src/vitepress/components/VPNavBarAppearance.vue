<script lang="ts" setup>
import { VTSwitchAppearance } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<template>
  <div v-if="config.appearance" class="VPNavBarAppearance">
    <VTSwitchAppearance />
  </div>
</template>

<style scoped>
.VPNavBarAppearance {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBarAppearance {
    display: block;
  }
}
</style>
