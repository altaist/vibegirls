<template>
  <AppLayout>
    <div class="profile-container">
      <div class="profile-wrapper">
      <!-- Профильная карточка -->
      <div class="profile-header">
        <div class="profile-card">
          <div class="profile-main">
            <div class="profile-avatar">
              <div class="avatar-circle">
                <span class="avatar-text">{{ userStore.user?.username?.charAt(0) || 'П' }}</span>
              </div>
            </div>
            <div class="profile-details">
              <h1 class="profile-name">{{ userStore.user?.username || 'Пользователь' }}</h1>
              <BaseButton 
                variant="rounded" 
                size="md"
                @click="editProfile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="me-2">
                  <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ userStore.balance }} ₽
              </BaseButton>
            </div>
          </div>
          
          <div class="profile-actions">
            <BaseButton 
              variant="outline" 
              size="md" 
              @click="editProfile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="me-2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Изменить профиль
            </BaseButton>
            <BaseButton 
              variant="primary" 
              size="md" 
              @click="completeTelegramRegistration"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="me-2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Завершить регистрацию в Telegram
            </BaseButton>
          </div>
        </div>
      </div>

      <!-- Основной контент -->
      <div class="profile-content">
        <!-- Секция избранных девушек -->
        <div class="section">
          <div class="section-header">
            <h2 class="section-title">Избранные девушки</h2>
            <span class="section-count">{{ favoriteBots.length }}</span>
          </div>
          
          <div v-if="favoriteBots.length === 0" class="empty-state">
            <div class="empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="empty-title">Нет избранных девушек</h3>
            <p class="empty-text">Добавляйте понравившихся девушек в избранное, чтобы быстро находить их</p>
          </div>
          
          <div v-else class="bots-grid">
            <div class="row g-4">
              <div class="col-lg-6" v-for="bot in favoriteBots" :key="bot.id">
                <BotCard :bot="bot" />
              </div>
            </div>
          </div>
        </div>

        <!-- Секция добавленных девушек -->
        <div class="section">
          <div class="section-header">
            <h2 class="section-title">Добавленные девушки</h2>
            <span class="section-count">{{ addedBots.length }}</span>
          </div>
          
          <div v-if="addedBots.length === 0" class="empty-state">
            <div class="empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 8v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 11h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="empty-title">Нет добавленных девушек</h3>
            <p class="empty-text">Девушки, которых вы добавили, появятся здесь</p>
          </div>
          
          <div v-else class="bots-grid">
            <div class="row g-4">
              <div class="col-lg-6" v-for="bot in addedBots" :key="bot.id">
                <BotCard :bot="bot" />
              </div>
            </div>
          </div>
        </div>

        <!-- Секция выбранных девушек -->
        <div class="section">
          <div class="section-header">
            <h2 class="section-title">Выбранные девушки</h2>
            <span class="section-count">{{ selectedBots.length }}</span>
          </div>
          
          <div v-if="selectedBots.length === 0" class="empty-state">
            <div class="empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="empty-title">Нет выбранных девушек</h3>
            <p class="empty-text">Девушки, которых вы выбрали для общения, появятся здесь</p>
          </div>
          
          <div v-else class="bots-grid">
            <div class="row g-4">
              <div class="col-lg-6" v-for="bot in selectedBots" :key="bot.id">
                <BotCard :bot="bot" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppLayout from '@/components/common/AppLayout.vue'
import BaseButton from '@/components/common/base/BaseButton.vue'
import BotCard from '@/components/bots/BotCard.vue'
import { useUserStore } from '@/stores/user'
import { useBotsStore } from '@/stores/bots'
import type { Bot } from '@/types/bot'

const router = useRouter()
const userStore = useUserStore()
const botsStore = useBotsStore()

// Получаем данные о девушках
const favoriteBots = computed(() => botsStore.favoriteBots)
const addedBots = computed(() => botsStore.bots.filter(bot => bot.isFavorite)) // Временно используем избранных как добавленных
const selectedBots = computed(() => botsStore.bots.filter(bot => bot.communicationStatus === 'busy')) // Временно используем занятых как выбранных

// Методы
const editProfile = () => {
  // TODO: Открыть модальное окно редактирования профиля
  console.log('Открыть редактирование профиля')
}

const completeTelegramRegistration = () => {
  // TODO: Перенаправить на завершение регистрации в Telegram
  console.log('Завершить регистрацию в Telegram')
}

// Загружаем данные при монтировании компонента
onMounted(async () => {
  if (!userStore.user) {
    await userStore.fetchUser()
  }
  if (botsStore.bots.length === 0) {
    await botsStore.fetchBots()
  }
})
</script>

<style scoped>
.profile-container {
  padding-top: 0;
}

.profile-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Профильная карточка */
.profile-header {
  margin-bottom: 2rem;
}

.profile-card {
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.profile-main {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-bottom: 1px solid rgba(226, 232, 240, 0.6);
}

.profile-avatar {
  flex-shrink: 0;
}

.avatar-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.25);
  border: 3px solid white;
}

.avatar-text {
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.profile-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.profile-details :deep(.btn) {
  align-self: flex-start;
  min-width: auto;
  width: auto;
}

.profile-name {
  font-size: 2.25rem;
  font-weight: 800;
  color: #2d3748;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}



.profile-actions {
  display: flex;
  gap: 1rem;
  padding: 2rem 2.5rem;
  background: white;
  border-top: 1px solid rgba(226, 232, 240, 0.6);
}

.profile-actions :deep(.btn) {
  min-width: 200px;
}



/* Основной контент */
.profile-content {
  padding-bottom: 2rem;
}

.section {
  margin-bottom: 3rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gray-900);
  margin: 0;
}

.section-count {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.375rem 0.875rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
}

/* Состояние пустого списка */
.empty-state {
  text-align: center;
  padding: 3rem 2rem;
  background: var(--gray-50);
  border-radius: 0.75rem;
  border: 2px dashed var(--gray-200);
}

.empty-icon {
  color: var(--gray-400);
  margin-bottom: 1rem;
}

.empty-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--gray-700);
  margin-bottom: 0.5rem;
}

.empty-text {
  color: var(--gray-600);
  line-height: 1.5;
}

/* Сетка ботов */
.bots-grid {
  margin-bottom: 1rem;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .profile-wrapper {
    padding: 0 1.5rem;
  }
  
  .profile-header {
    margin-bottom: 1.5rem;
  }
  
  .profile-main {
    padding: 2rem;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .avatar-circle {
    width: 70px;
    height: 70px;
  }

  .avatar-text {
    font-size: 1.75rem;
  }

  .profile-name {
    font-size: 1.875rem;
  }

  .profile-actions {
    flex-direction: column;
    padding: 1.5rem 2rem;
    background: rgba(255, 255, 255, 0.98);
  }

  .profile-actions :deep(.btn) {
    width: 100%;
  }
  
  .profile-content {
    padding-bottom: 1.5rem;
  }
  
  .section-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .profile-wrapper {
    padding: 0 1rem;
  }
  
  .profile-main {
    padding: 1.5rem;
  }
  
  .avatar-circle {
    width: 60px;
    height: 60px;
  }
  
  .avatar-text {
    font-size: 1.5rem;
  }
  
  .profile-name {
    font-size: 1.5rem;
  }
  
  .profile-actions {
    padding: 1rem 1.5rem;
  }
  
  .profile-content {
    padding-bottom: 1rem;
  }
  
  .empty-state {
    padding: 2rem 1rem;
  }
}
</style>
