<template>
  <span :class="tagClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

/**
 * BaseTag - компонент для тэгов/бейджей
 * 
 * Варианты:
 * - danger: Красный (по умолчанию)
 * - primary: Основной цвет
 * - secondary: Вторичный цвет
 * - success: Зеленый
 * - warning: Желтый
 * - info: Синий
 */
interface Props {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'danger',
  size: 'md',
  rounded: false
});

const tagClasses = computed(() => [
  'badge',
  `bg-${props.variant}`,
  `badge-${props.size}`,
  {
    'rounded-pill': props.rounded
  }
]);
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.badge-sm {
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
}

.badge-md {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.badge-lg {
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
}

.badge.rounded-pill {
  border-radius: 50rem;
}

/* Цвета */
.bg-primary {
  background-color: var(--primary-color) !important;
  color: white;
}

.bg-secondary {
  background-color: var(--secondary-color) !important;
  color: white;
}

.bg-success {
  background-color: var(--success) !important;
  color: white;
}

.bg-warning {
  background-color: var(--warning) !important;
  color: white;
}

.bg-danger {
  background-color: var(--error) !important;
  color: white;
}

.bg-info {
  background-color: var(--info) !important;
  color: white;
}
</style>
