<script setup lang="ts">
import AppLayout from '@/components/common/AppLayout.vue'
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  background-color: var(--gray-50);
}
</style>
