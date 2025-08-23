<template>
  <div class="input-wrapper">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <div class="input-group">
      <BaseIcon v-if="icon" :name="icon" class="input-icon" />
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="inputClasses"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
    </div>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseIcon from './BaseIcon.vue';

interface Props {
  modelValue: string;
  type?: 'text' | 'email' | 'password' | 'number';
  label?: string;
  placeholder?: string;
  icon?: string;
  error?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  size: 'md'
});

defineEmits<{
  'update:modelValue': [value: string];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
}>();

const id = computed(() => `input-${Math.random().toString(36).substr(2, 9)}`);

const inputClasses = computed(() => [
  'form-control',
  `form-control-${props.size}`,
  {
    'is-invalid': props.error,
    'has-icon': props.icon
  }
]);
</script>

<style scoped>
.input-wrapper {
  position: relative;
}

.input-group {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray-500);
  z-index: 2;
}

.has-icon {
  padding-left: 2.5rem;
}

.error-message {
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.form-control {
  border-radius: 12px;
  border: 2px solid var(--gray-200);
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.form-control.is-invalid {
  border-color: var(--error);
}
</style>
