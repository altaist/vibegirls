<template>
  <div class="bot-status" :class="statusClass">
    {{ statusText }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  isOnline: boolean
  communicationStatus: 'free' | 'busy'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const { t } = useI18n()

const statusClass = computed(() => {
  const baseClass = `bot-status-${props.size}`
  
  if (!props.isOnline) return `${baseClass} offline`
  return props.communicationStatus === 'free' ? `${baseClass} free` : `${baseClass} busy`
})

const statusText = computed(() => {
  if (!props.isOnline) return t('bots.status.offline')
  return props.communicationStatus === 'free' ? t('bots.status.free') : t('bots.status.busy')
})
</script>

<style scoped>
/* Базовые стили */
.bot-status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: none;
  cursor: default;
  user-select: none;
  pointer-events: none;
  position: relative;
  z-index: 50;
}

/* Размеры */
.bot-status-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
}

.bot-status-md {
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
}

.bot-status-lg {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* Цвета статусов */
.bot-status.free {
  background: #059669;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 700;
}

.bot-status.busy {
  background: #ef4444;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 700;
}

.bot-status.offline {
  background: rgba(107, 114, 128, 0.9);
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 700;
}

/* Стили для hero секции (на фотографии) */
.bot-status-lg {
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .bot-status-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
  }
  
  .bot-status-md {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
  }
  
  .bot-status-lg {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
  }
}
</style>
