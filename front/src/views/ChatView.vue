<template>
  <div class="chat-view">
    <h2>Чат с ботом</h2>
    <p>ID бота: {{ $route.params.botId }}</p>
  </div>
</template>

<script setup lang="ts">
// Route используется в template через $route
</script>

<style scoped>
.chat-view {
  padding: var(--spacing-8);
}
</style>
