<template>
  <i :class="iconClasses" :style="iconStyle"></i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
interface Props {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'currentColor'
});

const iconClasses = computed(() => [
  'icon',
  `icon-${props.size}`,
  props.name
]);

const iconStyle = computed(() => ({
  color: props.color
}));
</script>

<style scoped>
.icon {
  display: inline-block;
  line-height: 1;
}

.icon-sm {
  font-size: 0.875rem;
}

.icon-md {
  font-size: 1rem;
}

.icon-lg {
  font-size: 1.25rem;
}
</style>
