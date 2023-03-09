<script setup lang="ts">
import src from '@/assets/logo.svg'

const name = `${import.meta.env.VITE_PROJECT_NAME}`

export interface Props {
  width?: number
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: 1000,
  height: 1000
})
</script>

<template>
  <img
    :alt="$t('logo.alt', { name: name })"
    :src="src"
    :width="width"
    :height="height"
    class="brand-logo"
  />
</template>

<style scoped lang="scss">
.brand-logo {
  max-width: 100%;
  height: auto;
}
</style>
