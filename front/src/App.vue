<script setup lang="ts">
import AppFooter from '@/components/common/AppFooter.vue'
</script>

<template>
  <div id="app">
    <router-view />
    <AppFooter />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  background-color: var(--gray-50);
}
</style>
