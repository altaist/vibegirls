<template>
  <BaseModal 
    v-model="isOpen" 
    :title="$t('profile.title')"
  >
    <!-- Аватар и основная информация -->
    <div class="profile-header">
      <div class="profile-avatar">
        <img src="@/assets/images/avatars/default-avatar.jpg" alt="Profile" class="avatar-image" />
        <div class="avatar-status online"></div>
      </div>
      <div class="profile-info">
        <h2 class="profile-name">{{ $t('profile.name') }}</h2>
        <p class="profile-status">{{ $t('profile.status') }}</p>
        <div class="profile-stats">
          <div class="stat-item">
            <span class="stat-value">127</span>
            <span class="stat-label">{{ $t('profile.chats') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">89</span>
            <span class="stat-label">{{ $t('profile.friends') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">4.8</span>
            <span class="stat-label">{{ $t('profile.rating') }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Описание профиля -->
    <div class="profile-description">
      <h3>{{ $t('profile.about_title') }}</h3>
      <p>{{ $t('profile.about_text') }}</p>
      
      <h3>{{ $t('profile.interests_title') }}</h3>
      <div class="interests-tags">
        <span class="badge bg-danger me-2 mb-2">{{ $t('profile.interests.music') }}</span>
        <span class="badge bg-danger me-2 mb-2">{{ $t('profile.interests.travel') }}</span>
        <span class="badge bg-danger me-2 mb-2">{{ $t('profile.interests.books') }}</span>
        <span class="badge bg-danger me-2 mb-2">{{ $t('profile.interests.cooking') }}</span>
        <span class="badge bg-danger me-2 mb-2">{{ $t('profile.interests.photography') }}</span>
        <span class="badge bg-danger me-2 mb-2">{{ $t('profile.interests.sports') }}</span>
      </div>

      <h3>{{ $t('profile.personality_title') }}</h3>
      <p>{{ $t('profile.personality_text') }}</p>

      <h3>{{ $t('profile.goals_title') }}</h3>
      <p>{{ $t('profile.goals_text') }}</p>

      <h3>{{ $t('profile.favorites_title') }}</h3>
      <div class="favorites-grid">
        <div class="favorite-item">
          <span class="favorite-icon">🎵</span>
          <span class="favorite-label">{{ $t('profile.favorites.music') }}</span>
        </div>
        <div class="favorite-item">
          <span class="favorite-icon">🍕</span>
          <span class="favorite-label">{{ $t('profile.favorites.food') }}</span>
        </div>
        <div class="favorite-item">
          <span class="favorite-icon">🎬</span>
          <span class="favorite-label">{{ $t('profile.favorites.movie') }}</span>
        </div>
        <div class="favorite-item">
          <span class="favorite-icon">🌍</span>
          <span class="favorite-label">{{ $t('profile.favorites.place') }}</span>
        </div>
      </div>
    </div>

    <!-- Кнопка закрыть внизу -->
    <template #footer>
      <BaseButton 
        variant="outline" 
        size="lg" 
        @click="closeModal"
      >
        {{ $t('profile.close') }}
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseModal from '@/components/common/base/BaseModal.vue'
import BaseButton from '@/components/common/base/BaseButton.vue'

const { t } = useI18n()

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

// Экспортируем методы для использования в родительском компоненте
defineExpose({
  openModal,
  closeModal
})
</script>

<style scoped>
:deep(.modal-container) {
  max-width: 600px;
  max-height: 85vh;
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

:deep(.modal-content) {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
}



:deep(.modal-close) {
  background: rgba(255, 255, 255, 0.95) !important;
  border: 2px solid rgba(255, 255, 255, 0.9) !important;
  border-radius: 50% !important;
  width: 44px !important;
  height: 44px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: all 0.2s ease !important;
  color: #ff6b6b !important;
  font-weight: bold !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
  padding: 0 !important;
  font-size: 1.25rem !important;
}

:deep(.modal-close:hover) {
  background: white !important;
  transform: scale(1.1) !important;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3) !important;
  color: #ee5a52 !important;
}

:deep(.modal-body) {
  padding: 0;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 107, 107, 0.05) 100%);
  border-bottom: 1px solid var(--gray-100);
}

.profile-avatar {
  position: relative;
  flex-shrink: 0;
}

.avatar-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.avatar-status {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid white;
}

.avatar-status.online {
  background: #28a745;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--gray-900);
  margin: 0 0 0.5rem 0;
}

.profile-status {
  color: var(--gray-600);
  font-size: 1rem;
  margin: 0 0 1rem 0;
}

.profile-stats {
  display: flex;
  gap: 1.5rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gray-900);
}

.stat-label {
  display: block;
  font-size: 0.875rem;
  color: var(--gray-600);
  margin-top: 0.25rem;
}

.profile-description {
  padding: 1.5rem;
}

.profile-description h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--gray-900);
  margin: 1.5rem 0 1rem 0;
}

.profile-description h3:first-child {
  margin-top: 0;
}

.profile-description p {
  color: var(--gray-700);
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.interests-tags {
  margin-bottom: 1rem;
}



.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.favorite-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: var(--gray-50);
  border-radius: 12px;
  border: 1px solid var(--gray-200);
  transition: all 0.2s ease;
}

.favorite-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.favorite-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.favorite-label {
  font-size: 0.875rem;
  color: var(--gray-700);
  text-align: center;
  font-weight: 500;
}



/* Мобильная адаптация */
@media (max-width: 768px) {
  :deep(.modal-container) {
    margin: 0.5rem;
    max-height: 90vh;
  }

  :deep(.modal-header) {
    padding: 1.25rem;
  }

  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1.5rem 1rem;
  }

  .profile-stats {
    justify-content: center;
  }

  .profile-description {
    padding: 1rem;
  }

  .favorites-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .interests-tags {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  :deep(.modal-header) {
    padding: 1rem;
  }

  :deep(.modal-title) {
    font-size: 1.25rem;
  }

  :deep(.modal-close) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .profile-name {
    font-size: 1.5rem;
  }

  .profile-stats {
    gap: 1rem;
  }

  .stat-value {
    font-size: 1.25rem;
  }

  .favorites-grid {
    grid-template-columns: 1fr;
  }
}
</style>
