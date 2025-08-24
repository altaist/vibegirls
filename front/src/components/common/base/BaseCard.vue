<template>
  <div :class="cardClasses">
    <div class="card-body">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
      <slot name="header" />
      <slot />
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
interface Props {
  variant?: 'default' | 'elevated' | 'interactive' | 'white';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hover: false
});

const cardClasses = computed(() => [
  'card',
  'card-custom',
  `card-${props.variant}`,
  `card-padding-${props.padding}`,
  {
    'card-hover': props.hover
  }
]);
</script>

<style scoped>
.card-custom {
  background: var(--bs-white);
  border-radius: 24px;
  box-shadow: var(--shadow-custom);
  transition: all 0.3s ease;
  border: none;
}

.card-elevated {
  box-shadow: var(--shadow-hover);
}

.card-interactive {
  cursor: pointer;
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

/* Белая карточка как на странице бота */
.card-white {
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.card-white p {
  color: var(--gray-700);
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.card-padding-sm .card-body {
  padding: 1rem;
}

.card-padding-md .card-body {
  padding: 1.5rem;
}

.card-padding-lg .card-body {
  padding: 2rem;
}

/* Заголовок карточки */
.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}
</style>
