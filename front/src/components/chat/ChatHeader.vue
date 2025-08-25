<template>
  <header class="navbar navbar-expand-lg sticky-top" style="background: var(--gradient-primary);">
    <div class="container">
      <div class="navbar-brand">
        <div class="d-flex align-items-center">
          <!-- Кнопка назад -->
          <button 
            class="btn btn-link p-0 me-3" 
            @click="goBack"
            style="color: white; text-decoration: none;"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <!-- Заголовок -->
          <h1 class="font-display-bold text-white mb-0">ЧАТ</h1>
        </div>
      </div>
      
      <div class="d-flex align-items-center">
        <!-- Кнопка волшебной палочки -->
        <button class="btn btn-link p-0" @click="openMagicWand">
          <div class="magic-wand-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}

const openMagicWand = () => {
  // Здесь будет логика для волшебной палочки
  console.log('Волшебная палочка активирована!')
}
</script>

<style scoped>
/* Стили для header */
.navbar {
  height: 56px;
  min-height: 56px;
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

.magic-wand-avatar {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease-in-out;
}

.magic-wand-avatar:hover {
  transform: scale(1.05);
}

.magic-wand-avatar svg {
  color: white;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .navbar {
    height: 64px;
    min-height: 64px;
  }
  
  .magic-wand-avatar {
    width: 36px;
    height: 36px;
  }
  
  .magic-wand-avatar svg {
    width: 20px;
    height: 20px;
  }
}
</style>
