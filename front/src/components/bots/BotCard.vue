<template>
  <div class="bot-card" @click="openBot">
    <div class="bot-image-container">
      <img :src="bot.avatar" :alt="bot.name" class="bot-image" />
      <div class="bot-overlay">
        <div class="bot-status" :class="statusClass">
          {{ statusText }}
        </div>
      </div>
    </div>
    
    <div class="bot-info">
      <div class="bot-header">
        <h3 class="bot-name font-display">{{ bot.name }}</h3>
        <span class="bot-age font-body">{{ bot.age }} {{ $t('bots.age') }}</span>
      </div>
      
      <div class="bot-mood">
        <span class="mood-icon">{{ moodIcon }}</span>
        <span class="mood-text font-body">{{ bot.mood }}</span>
      </div>
      
      <div class="bot-activity" v-if="bot.currentActivity">
        <span class="activity-text font-body">{{ bot.currentActivity }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Bot {
  id: string;
  name: string;
  age: number;
  avatar: string;
  isOnline: boolean;
  communicationStatus: 'free' | 'busy';
  currentActivity?: string;
  mood: string;
}

interface Props {
  bot: Bot;
}

const props = defineProps<Props>();

const statusClass = computed(() => {
  if (!props.bot.isOnline) return 'offline';
  return props.bot.communicationStatus === 'free' ? 'free' : 'busy';
});

const statusText = computed(() => {
  if (!props.bot.isOnline) return t('bots.status.offline');
  return props.bot.communicationStatus === 'free' ? t('bots.status.free') : t('bots.status.busy');
});

const moodIcon = computed(() => {
  const mood = props.bot.mood.toLowerCase();
  if (mood.includes('веселая') || mood.includes('радостная')) return '😊';
  if (mood.includes('грустная') || mood.includes('печальная')) return '😔';
  if (mood.includes('возбужденная') || mood.includes('энергичная')) return '🤩';
  if (mood.includes('спокойная') || mood.includes('умиротворенная')) return '😌';
  if (mood.includes('игривая') || mood.includes('шаловливая')) return '😏';
  return '😊';
});

const openBot = () => {
  // Пока ничего не делаем
  console.log('Открыть бота:', props.bot.name);
};
</script>

<style scoped>
/* Стили для карточки бота */
.bot-card {
  background: var(--bs-white);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  position: relative;
}

.bot-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
}

.bot-image-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.bot-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.bot-card:hover .bot-image {
  transform: scale(1.05);
}

.bot-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.bot-status {
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.bot-status.free {
  background: rgba(16, 185, 129, 0.9);
  color: var(--bs-white);
}

.bot-status.busy {
  background: rgba(245, 158, 11, 0.9);
  color: var(--bs-white);
}

.bot-status.offline {
  background: rgba(107, 114, 128, 0.9);
  color: var(--bs-white);
}

.bot-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  z-index: 2;
}

.bot-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.bot-name {
  color: var(--bs-white);
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  position: relative;
  z-index: 2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
}

.bot-age {
  color: var(--bs-white);
  font-size: 1.125rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
}

.bot-mood {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.mood-icon {
  font-size: 1.125rem;
}

.mood-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  font-weight: 500;
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.bot-activity {
  margin-top: 0.5rem;
}

.activity-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-style: italic;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  display: inline-block;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .bot-image-container {
    height: 300px;
  }
  
  .bot-info {
    padding: 1.5rem;
  }
  
  .bot-name {
    font-size: 1.5rem;
  }
  
  .bot-age {
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
  }
  
  .mood-icon {
    font-size: 1.25rem;
  }
  
  .mood-text {
    font-size: 1rem;
  }
}
</style>
