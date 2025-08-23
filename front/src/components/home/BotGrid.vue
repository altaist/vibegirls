<template>
  <section class="section-bot-grid position-relative">
    <div class="bot-grid-pattern"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <SectionTitle 
            title="Девушки онлайн" 
            subtitle="Выберите девушку для общения" 
          />
          
          <div class="row g-4 mb-5">
            <div class="col-lg-6" v-for="bot in bots" :key="bot.id">
              <BotCard :bot="bot" />
            </div>
          </div>
          
          <div class="text-center">
            <button class="btn btn-primary view-all-btn" @click="viewAllBots">
              Все девушки онлайн
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BotCard from '../bots/BotCard.vue';
import SectionTitle from '../common/SectionTitle.vue';
import { mockBots } from '@/mockData/bots';

// Используем моковые данные
const bots = mockBots;

const viewAllBots = () => {
  // Пока ничего не делаем
  console.log('Показать всех ботов');
};
</script>

<style scoped>
/* Только специфичные стили для bot grid */
.bot-grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
}



.view-all-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50px;
  padding: 1rem 3rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  margin-top: 2rem;
}

.view-all-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  color: white;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .view-all-btn {
    padding: 0.875rem 2.5rem;
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .view-all-btn {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
}
</style>
