<template>
  <div class="bot-view">
    <!-- Главная навигация -->
    <AppHeader />
    
    <!-- Большая фотография девушки -->
    <div class="bot-hero">
      <div class="bot-hero-image">
        <img :src="bot?.avatar || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=800&fit=crop&crop=face'" :alt="bot?.name" class="hero-image" />
        <div class="hero-overlay">
          <BotStatus 
            :is-online="bot?.isOnline || false"
            :communication-status="bot?.communicationStatus || 'free'"
            size="lg"
          />
        </div>
        <div class="hero-favorite" @click="toggleFavorite">
          <svg 
            :class="{ 'favorite-active': bot?.isFavorite }"
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>
    </div>
    
    <div class="content-wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-11 col-12">
                      <!-- Основная информация -->
          <div class="profile-header">
            <div class="profile-info">
              <h2 class="profile-name">{{ bot?.name || 'Загрузка...' }}</h2>
              <div class="profile-stats">
                <div class="stat-item">
                  <span class="stat-value">{{ bot?.personality?.sociability || 0 }}</span>
                  <span class="stat-label">Общительность</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value">{{ bot?.personality?.romanticism || 0 }}</span>
                  <span class="stat-label">Романтичность</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value">{{ bot?.personality?.openness || 0 }}</span>
                  <span class="stat-label">Открытость</span>
                </div>
              </div>
            </div>
          </div>

                      <!-- О себе -->
          <div class="profile-card">
            <h3>О себе</h3>
            <p>{{ bot?.description || 'Описание недоступно' }}</p>
          </div>

          <!-- Настроение -->
          <div class="profile-card">
            <h3>Настроение</h3>
            <div class="mood-indicator">
              <div class="mood-bar">
                <div class="mood-fill" :style="{ width: moodPercentage + '%' }"></div>
              </div>
              <span class="mood-text">{{ moodText }}</span>
            </div>
          </div>

          <!-- Лента активностей -->
          <ActivityFeed :activities="bot?.activityHistory || []" />

          <!-- Описание профиля -->
          <div class="profile-description">
            <h3>Интересы</h3>
            <div class="interests-tags">
              <span class="badge bg-danger me-2 mb-2">{{ bot?.personality?.character?.hobby || 'Хобби' }}</span>
              <span class="badge bg-danger me-2 mb-2">{{ bot?.personality?.profession?.position || 'Профессия' }}</span>
              <span class="badge bg-danger me-2 mb-2">{{ bot?.personality?.character?.type || 'Тип личности' }}</span>
            </div>

            <h3>Внешность</h3>
            <div class="appearance-info">
              <p><strong>Рост:</strong> {{ bot?.personality?.appearance?.height || 'Не указан' }}</p>
              <p><strong>Вес:</strong> {{ bot?.personality?.appearance?.weight || 'Не указан' }}</p>
              <p><strong>Цвет волос:</strong> {{ bot?.personality?.appearance?.hairColor || 'Не указан' }}</p>
              <p><strong>Прическа:</strong> {{ bot?.personality?.appearance?.hairStyle || 'Не указана' }}</p>
              <p><strong>Телосложение:</strong> {{ bot?.personality?.appearance?.bodyType || 'Не указано' }}</p>
            </div>

            <h3>Образование и работа</h3>
            <p><strong>Образование:</strong> {{ bot?.personality?.profession?.education || 'Не указано' }}</p>
            <p><strong>Должность:</strong> {{ bot?.personality?.profession?.position || 'Не указана' }}</p>

            <h3>Текущая активность</h3>
            <p>{{ bot?.currentActivity || 'Не указана' }}</p>
          </div>

                    <!-- Кнопки действий - показываем только если девушка свободна -->
                    <div v-if="!isBusy" class="action-buttons">
                      <div class="price-info">
                        <span class="price-label">Стоимость чата</span>
                        <span class="price-value">{{ bot?.chatPrice || 0 }} валентинок</span>
                      </div>
                      <BaseButton 
                        variant="primary" 
                        size="lg" 
                        @click="startChat"
                      >
                        Начать чат
                      </BaseButton>
                    </div>
                    
                    <!-- Эксклюзив - показываем только если девушка свободна -->
                    <div v-if="!isBusy" class="exclusive-section">
                      <div class="price-info">
                        <span class="price-label">Стоимость эксклюзива</span>
                        <span class="price-value">{{ bot?.exclusivePrice || 0 }} валентинок</span>
                      </div>
                      <BaseButton 
                        variant="secondary" 
                        size="lg" 
                        @click="buyExclusive"
                      >
                        Купить эксклюзив
                      </BaseButton>
                    </div>

                    <!-- Блок для занятых девушек -->
                    <div v-if="isBusy" class="busy-notification-section">
                      <div class="price-info">
                        <span class="price-label">Попросить написать когда освободится</span>
                        <span class="price-value">20 валентинок</span>
                      </div>
                      <BaseButton 
                        variant="primary" 
                        size="lg" 
                        @click="requestNotification"
                      >
                        Запросить уведомление
                      </BaseButton>
                    </div>

                    <!-- Комментарий о стоимости -->
                    <div class="cost-comment">
                      <p class="comment-text">
                        Стоимость работы с ботом зависит от прокачки вашего профиля. 
                        <router-link to="/profile" class="profile-link">Прокачать профиль</router-link>
                      </p>
                    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mockBots } from '@/mockData/bots'
import BaseButton from '@/components/common/base/BaseButton.vue'
import AppHeader from '@/components/common/AppHeader.vue'
import BotStatus from '@/components/common/BotStatus.vue'
import ActivityFeed from '@/components/common/ActivityFeed.vue'
import type { Bot } from '@/types/bot'

const route = useRoute()
const router = useRouter()

const bot = ref<Bot | null>(null)

onMounted(() => {
  const botId = route.params.id as string
  bot.value = mockBots.find(b => b.id === botId) || null
  
  // Скролл на начало страницы
  window.scrollTo(0, 0)
})

// Следим за изменением маршрута для перехода между ботами
watch(() => route.params.id, (newBotId) => {
  if (newBotId) {
    bot.value = mockBots.find(b => b.id === newBotId) || null
    // Скролл на начало страницы при смене бота
    window.scrollTo(0, 0)
  }
})



const moodPercentage = computed(() => {
  const moodValue = bot.value?.personality?.mood
  console.log('Mood value:', moodValue, 'Type:', typeof moodValue)
  if (typeof moodValue !== 'number') return 50
  return Math.max(0, Math.min(100, (moodValue + 100) / 2))
})

const moodText = computed(() => {
  const mood = bot.value?.personality?.mood
  if (typeof mood !== 'number') return 'Настроение не указано'
  
  if (mood > 70) return 'Отличное настроение 😊'
  if (mood > 40) return 'Хорошее настроение 🙂'
  if (mood > 0) return 'Нормальное настроение 😐'
  if (mood > -40) return 'Плохое настроение 😔'
  return 'Очень плохое настроение 😢'
})

const startChat = () => {
  if (bot.value) {
    router.push(`/chat/${bot.value.id}`)
  }
}

const buyExclusive = () => {
  // Логика покупки эксклюзива
  console.log('Покупаем эксклюзив у', bot.value?.name)
}

const toggleFavorite = () => {
  if (bot.value) {
    bot.value.isFavorite = !bot.value.isFavorite
  }
}

// Проверяем, занята ли девушка
const isBusy = computed(() => {
  return bot.value?.communicationStatus === 'busy'
})

// Функция для запроса уведомления о свободе
const requestNotification = () => {
  console.log('Запрашиваем уведомление когда освободится', bot.value?.name)
  // Здесь будет логика отправки запроса
}
</script>

<style scoped>
.bot-view {
  min-height: 100vh;
  background: #f8fafc;
}

/* Большая фотография девушки */
.bot-hero {
  position: relative;
  width: 100%;
  height: 50vh;
  min-height: 300px;
  max-height: 500px;
  overflow: hidden;
}

.bot-hero-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}

.hero-overlay {
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.hero-favorite {
  position: absolute;
  top: 2rem;
  left: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.hero-favorite:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 1);
}

.hero-favorite svg {
  color: #9ca3af;
  transition: all 0.3s ease;
}

.hero-favorite .favorite-active {
  color: #ef4444;
}

.hero-favorite:hover svg {
  color: #ef4444;
}





/* Контент под фотографией */
.content-wrapper {
  position: relative;
  background: #f8fafc;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Основная информация */
.profile-header {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  margin: -3rem 0 2rem 0;
  position: relative;
  z-index: 10;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.profile-info {
  text-align: center;
}

.profile-name {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--gray-900);
  margin: 0 0 0.5rem 0;
}

.profile-status {
  color: var(--gray-600);
  font-size: 1.125rem;
  margin: 0 0 1.5rem 0;
}



.profile-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--gray-900);
}

.stat-label {
  display: block;
  font-size: 0.875rem;
  color: var(--gray-600);
  margin-top: 0.25rem;
}

.profile-card {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.profile-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gray-900);
  margin: 0 0 1rem 0;
}

.profile-card p {
  color: var(--gray-700);
  line-height: 1.6;
  margin: 0;
}

.profile-description {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.profile-description h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gray-900);
  margin: 2rem 0 1rem 0;
}

.profile-description h3:first-child {
  margin-top: 0;
}

.profile-description p {
  color: var(--gray-700);
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.appearance-info p {
  margin: 0.5rem 0;
}

.interests-tags {
  margin-bottom: 1rem;
}

.mood-indicator {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.mood-bar {
  flex: 1;
  height: 12px;
  background: var(--gray-200);
  border-radius: 6px;
  overflow: hidden;
}

.mood-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f);
  transition: width 0.3s ease;
}

.mood-text {
  font-weight: 500;
  color: var(--gray-700);
  min-width: 200px;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
}

/* Эксклюзив секция */
.exclusive-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

/* Блок уведомления для занятых девушек */
.busy-notification-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

/* Комментарий о стоимости */
.cost-comment {
  text-align: center;
  padding: 2rem;
  margin-top: 1rem;
}

.comment-text {
  font-size: 1.125rem;
  color: var(--gray-600);
  line-height: 1.6;
  margin: 0;
}

.profile-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.profile-link:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

/* Информация о цене */
.price-info {
  text-align: center;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.price-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray-600);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.price-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gray-900);
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .bot-hero {
    height: 40vh;
    min-height: 250px;
  }

  .hero-overlay {
    top: 1rem;
    right: 1rem;
  }

  .hero-favorite {
    top: 1rem;
    left: 1rem;
    width: 40px;
    height: 40px;
  }





  .content-wrapper {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .profile-header {
    margin: -2rem 0 1.5rem 0;
    padding: 1.5rem;
  }

  .profile-name {
    font-size: 2rem;
  }

  .profile-stats {
    gap: 1.5rem;
  }

  .profile-card {
    padding: 1.5rem;
  }

  .profile-description {
    padding: 1.5rem;
  }

  .mood-indicator {
    gap: 0.75rem;
  }

  .mood-text {
    min-width: 150px;
    font-size: 0.875rem;
  }

  .action-buttons {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
  
  .exclusive-section {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
  
  .busy-notification-section {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
  
  .price-label {
    font-size: 0.75rem;
  }
  
  .price-value {
    font-size: 1.25rem;
  }
  
  .cost-comment {
    padding: 1.5rem;
  }
  
  .comment-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .bot-hero {
    height: 35vh;
    min-height: 200px;
  }

  .profile-header {
    margin: -1.5rem 0 1rem 0;
    padding: 1rem;
  }

  .profile-name {
    font-size: 1.75rem;
  }

  .profile-stats {
    gap: 1rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .profile-card {
    padding: 1rem;
  }

  .profile-description {
    padding: 1rem;
  }

  .mood-indicator {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    width: 100%;
  }

  .mood-bar {
    width: 100%;
    height: 10px;
  }

  .mood-text {
    min-width: auto;
    font-size: 0.875rem;
  }

  .action-buttons {
    padding: 1rem;
  }
  
  .busy-notification-section {
    padding: 1rem;
  }
  
  .cost-comment {
    padding: 1.5rem;
  }
  
  .comment-text {
    font-size: 1rem;
  }
}
</style>
