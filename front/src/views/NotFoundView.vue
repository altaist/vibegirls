<template>
  <AppLayout>
    <div class="not-found">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Запрашиваемая страница не существует</p>
      <router-link to="/" class="btn btn-primary">Вернуться на главную</router-link>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/components/common/AppLayout.vue'
// Компонент 404
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: var(--spacing-8);
  min-height: calc(100vh - 56px - 80px); /* Вычитаем высоту header и footer */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.not-found h1 {
  font-size: 6rem;
  color: var(--gray-400);
  margin-bottom: var(--spacing-4);
}

.not-found h2 {
  margin-bottom: var(--spacing-6);
}
</style>
