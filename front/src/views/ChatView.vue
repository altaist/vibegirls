<template>
  <div class="chat-view">
    <AppHeader />
    
    <div class="chat-container">
      <div class="chat-content">
        <div class="chat-placeholder">
          <div class="placeholder-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h2 class="placeholder-title">Здесь будет чат</h2>
          <p class="placeholder-text">Функция чата находится в разработке</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
</script>

<style scoped>
.chat-view {
  min-height: 100vh;
  background: #f8fafc;
}

.chat-container {
  padding-top: 56px; /* Высота header */
}

.chat-content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 56px);
  padding: 2rem;
}

.chat-placeholder {
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
  .chat-content {
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
  .chat-content {
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
