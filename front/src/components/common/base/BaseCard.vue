<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
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
  variant?: 'default' | 'elevated' | 'interactive';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
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

.card-padding-sm .card-body {
  padding: 1rem;
}

.card-padding-md .card-body {
  padding: 1.5rem;
}

.card-padding-lg .card-body {
  padding: 2rem;
}
</style>
