<script setup lang="ts">
import BrandLogo from '@/components/BrandLogo.vue'

const h1 = `${import.meta.env.VITE_PROJECT_NAME}`
</script>

<template>
  <main>
    <header>
      <BrandLogo :width="250" :height="250"></BrandLogo>
      <h1>{{ h1 }}</h1>
    </header>
  </main>
</template>
