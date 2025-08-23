<template>
  <div class="section-header text-center mb-5">
    <h2 class="section-title" :style="{ color: titleColor }">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="section-subtitle" :style="{ color: subtitleColor }">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title: string;
  subtitle?: string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'white'
});

const titleColor = computed(() => props.color);
const subtitleColor = computed(() => {
  if (props.color === 'white') {
    return 'rgba(255, 255, 255, 0.8)';
  } else if (props.color === '#1e3a8a') {
    return '#3b82f6'; // Более светлый синий для подзаголовка
  } else {
    return 'rgba(0, 0, 0, 0.7)';
  }
});
</script>

<style scoped>
.section-title {
  font-size: 5.5rem;
  line-height: 1;
  letter-spacing: -0.05em;
  font-weight: 900;
  position: relative;
  margin: 0 0 1rem 0;
}

.section-subtitle {
  font-size: 1.5rem;
  line-height: 1.4;
  letter-spacing: 0.01em;
  margin: 0;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .section-title {
    font-size: 3rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .section-subtitle {
    font-size: 0.875rem;
  }
}
</style>
