<template>
  <div class="bot-view">
    <h2>Страница бота</h2>
    <p>ID бота: {{ $route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
// Route используется в template через $route
</script>

<style scoped>
.bot-view {
  padding: var(--spacing-8);
}
</style>
