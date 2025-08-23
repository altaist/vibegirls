<template>
  <div class="section-header text-center mb-5">
    <h2 class="section-title">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="section-subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
}

defineProps<Props>();
</script>

<style scoped>
.section-title {
  color: white;
  font-size: 5.5rem;
  line-height: 1;
  letter-spacing: -0.05em;
  text-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.3),
    0 8px 16px rgba(0, 0, 0, 0.2);
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  margin: 0 0 1rem 0;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  line-height: 1.4;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
