<template>
  <header class="navbar navbar-expand-lg sticky-top" style="background: var(--gradient-primary);">
    <div class="container">
      <div class="navbar-brand">
        <div class="d-flex align-items-center">
          <!-- Кнопка назад для страниц второго уровня -->
          <button 
            v-if="isSecondLevelPage" 
            class="btn btn-link p-0 me-3" 
            @click="goBack"
            style="color: white; text-decoration: none;"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <!-- Название страницы для страниц второго уровня -->
          <h1 v-if="isSecondLevelPage" class="font-display-bold text-white mb-0">{{ pageTitle }}</h1>
          
          <!-- Логотип для других страниц -->
          <template v-else>
            <img src="@/assets/images/icons/logo.svg" alt="Logo" class="header-logo me-2" />
            <h1 class="font-display-bold text-white mb-0">VibeGirls</h1>
          </template>
        </div>
      </div>
      
      <div class="d-flex align-items-center">
        <div class="balance">
          <span class="balance-amount">{{ balance }}</span>
        </div>
        
        <button class="btn btn-link p-0" @click="openProfile">
          <div class="profile-avatar">
            <div class="avatar-placeholder">
              <span>👤</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  </header>
  
  <!-- Модальное окно профиля -->
  <ProfileModal ref="profileModalRef" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProfileModal from '@/components/profile/ProfileModal.vue'

const route = useRoute()
const router = useRouter()

// Пока используем статические данные
const balance = 200;

const profileModalRef = ref<InstanceType<typeof ProfileModal> | null>(null)

const isSecondLevelPage = computed(() => {
  // Страницы второго уровня: bot, chat, profile
  return ['bot', 'chat', 'profile'].includes(route.name as string)
})

const pageTitle = computed(() => {
  switch (route.name) {
    case 'bot':
      return 'AI-Девушка'
    case 'chat':
      return 'Чат'
    case 'profile':
      return 'Мой профиль'
    default:
      return ''
  }
})

const openProfile = () => {
  // Переходим на страницу профиля
  router.push('/profile')
};

const goBack = () => {
  router.back()
};
</script>

<style scoped>
/* Стили для header */
.navbar {
  height: 56px;
  min-height: 56px;
}

.header-logo {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1); /* Делаем логотип белым */
  transition: transform 0.2s ease-in-out;
}

.header-logo:hover {
  transform: scale(1.1);
}

/* Стили для кнопки назад */
.btn-link {
  transition: transform 0.2s ease-in-out;
}

.btn-link:hover {
  transform: scale(1.1);
}

/* Стили для заголовков */
h1 {
  font-size: 1.25rem;
}

.balance {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-right: 1rem;
}

.balance-amount {
  color: var(--bs-white);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.profile-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--bs-white);
  background: var(--bs-white);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.15s ease-in-out;
}

.profile-avatar:hover {
  transform: scale(1.05);
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bs-white);
  font-size: 1.25rem;
  color: var(--bs-gray-800);
  border-radius: 50%;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .navbar {
    height: 64px;
    min-height: 64px;
  }
  
  .balance {
    padding: 0.375rem 0.75rem;
    margin-right: 0.75rem;
  }
  
  .balance-amount {
    font-size: 1rem;
  }
  
  .profile-avatar {
    width: 36px;
    height: 36px;
  }
  
  .avatar-placeholder {
    font-size: 1rem;
  }
  
  .header-logo {
    width: 28px;
    height: 28px;
  }
  
  h1 {
    font-size: 1.25rem !important;
  }
}
</style>
