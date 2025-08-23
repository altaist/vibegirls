<template>
  <header class="navbar navbar-expand-lg sticky-top" style="background: var(--gradient-primary);">
    <div class="container">
      <div class="navbar-brand">
        <div class="d-flex align-items-center">
          <img src="@/assets/images/icons/logo.svg" alt="Logo" class="header-logo me-2" />
          <h1 class="font-display-bold text-white mb-0">VibeGirls</h1>
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
import { ref } from 'vue'
import ProfileModal from '@/components/profile/ProfileModal.vue'

// Пока используем статические данные
const balance = 200;

const profileModalRef = ref<InstanceType<typeof ProfileModal> | null>(null)

const openProfile = () => {
  profileModalRef.value?.openModal()
};
</script>

<style scoped>
/* Стили для header */
.header-logo {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1); /* Делаем логотип белым */
  transition: transform 0.2s ease-in-out;
}

.header-logo:hover {
  transform: scale(1.1);
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
  .balance-amount {
    font-size: 1.125rem;
  }
  
  .profile-avatar {
    width: 40px;
    height: 40px;
  }
}
</style>
