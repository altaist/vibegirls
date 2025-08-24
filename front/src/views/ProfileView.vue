<template>
  <AppLayout>
    <div class="profile-container">
      <div class="profile-content">
        <div class="profile-placeholder">
          <div class="placeholder-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h2 class="placeholder-title">Страница находится в разработке</h2>
          <p class="placeholder-text">Функция профиля пользователя будет доступна в ближайшее время</p>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/components/common/AppLayout.vue'
</script>

<style scoped>
.profile-container {
  padding-top: 0; /* Убираем padding, так как header теперь в layout */
}

.profile-content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 56px);
  padding: 2rem;
}

.profile-placeholder {
  text-align: center;
  max-width: 400px;
}

.placeholder-icon {
  margin-bottom: 2rem;
  color: var(--gray-400);
}

.placeholder-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 1rem;
}

.placeholder-text {
  font-size: 1.125rem;
  color: var(--gray-600);
  line-height: 1.6;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .profile-content {
    padding: 1rem;
  }
  
  .placeholder-title {
    font-size: 1.5rem;
  }
  
  .placeholder-text {
    font-size: 1rem;
  }
  
  .placeholder-icon svg {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 480px) {
  .profile-content {
    padding: 0.5rem;
  }
  
  .placeholder-title {
    font-size: 1.25rem;
  }
  
  .placeholder-text {
    font-size: 0.875rem;
  }
  
  .placeholder-icon svg {
    width: 40px;
    height: 40px;
  }
}
</style>
