<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <BaseIcon v-if="icon && iconPosition === 'left'" :name="icon" class="me-2" />
    <slot />
    <BaseIcon v-if="icon && iconPosition === 'right'" :name="icon" class="ms-2" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseIcon from './BaseIcon.vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  rounded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  iconPosition: 'left',
  rounded: false
});

defineEmits<{
  click: [event: MouseEvent]
}>();

const buttonClasses = computed(() => [
  'btn',
  `btn-${props.variant}`,
  `btn-${props.size}`,
  {
    'btn-custom': props.variant === 'primary',
    'btn-outline-custom': props.variant === 'outline',
    'btn-ghost': props.variant === 'ghost',
    'rounded-pill': props.rounded
  }
]);
</script>

<style scoped>
.btn-custom {
  background: var(--gradient-primary);
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  color: white;
}

.btn-custom:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
}

.btn-outline-custom {
  background: transparent;
  border: 2px solid #ff6b6b;
  color: #ff6b6b;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline-custom:hover {
  background: #ff6b6b;
  color: white;
  transform: translateY(-2px);
}

.btn-ghost {
  background: transparent;
  border: none;
  color: #ff6b6b;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-ghost:hover {
  background: rgba(255, 107, 107, 0.1);
  transform: translateY(-1px);
}
</style>
