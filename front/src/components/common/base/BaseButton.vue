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

/**
 * BaseButton - универсальный компонент кнопки
 * 
 * Типы кнопок:
 * - standard: Обычные кнопки со скругленными углами (12px) и большими буквами для действий типа "Начать чат" (ПО УМОЛЧАНИЮ)
 * - primary/secondary: Основные кнопки с градиентом и скругленными углами (12px)
 * - rounded: Кнопки для каталога с полным скруглением (50px) и градиентом
 * - outline: Кнопки с обводкой для вторичных действий
 * - ghost: Прозрачные кнопки для минималистичного дизайна
 */
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'rounded' | 'standard';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'standard',
  size: 'md',
  disabled: false,
  iconPosition: 'left',
  fullWidth: false
});

defineEmits<{
  click: [event: MouseEvent]
}>();

const buttonClasses = computed(() => [
  'btn',
  `btn-${props.size}`,
  {
    'btn-custom': props.variant === 'primary' || props.variant === 'secondary',
    'btn-outline-custom': props.variant === 'outline',
    'btn-ghost': props.variant === 'ghost',
    'btn-rounded': props.variant === 'rounded',
    'btn-standard': props.variant === 'standard',
    'w-100': props.fullWidth
  }
]);
</script>

<style scoped>
/* Основные кнопки (primary, secondary) */
.btn-custom {
  background: var(--gradient-primary);
  border: none;
  border-radius: 12px;
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

/* Outline кнопки */
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

/* Ghost кнопки */
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

/* Rounded кнопки (для каталога) */
.btn-rounded {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  color: white;
}

.btn-rounded:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  color: white;
}

/* Standard кнопки (обычные со скругленными углами) */
.btn-standard {
  background: var(--gradient-primary);
  border: none;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  color: white;
}

.btn-standard:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
}

/* Размеры кнопок */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-md {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .btn-rounded {
    padding: 0.875rem 2.5rem;
    font-size: 1.125rem;
  }
  
  .btn-lg {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .btn-rounded {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
  
  .btn-lg {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
}
</style>
