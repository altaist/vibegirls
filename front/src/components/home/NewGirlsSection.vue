<template>
  <section class="section-new-girls position-relative">
    <div class="new-girls-pattern"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <SectionTitle 
            title="Новенькие" 
            subtitle="Самые свежие анкеты девушек" 
          />
          
          <div class="row g-4 mb-5">
            <div class="col-lg-6" v-for="bot in bots" :key="bot.id">
              <BotCard :bot="bot" />
            </div>
          </div>
          
          <div class="text-center">
            <BaseButton 
              variant="rounded" 
              size="lg" 
              @click="viewAllNewGirls"
            >
              Все новенькие
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BotCard from '../bots/BotCard.vue';
import SectionTitle from '../common/SectionTitle.vue';
import BaseButton from '../common/base/BaseButton.vue';
import { mockBots } from '@/mockData/bots';

// Используем данные из mockBots
const bots = mockBots;

const viewAllNewGirls = () => {
  console.log('Показать всех новеньких');
};
</script>

<style scoped>
/* Стили для секции новеньких */
.new-girls-pattern {
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

/* Стили для кнопок вынесены в BaseButton компонент */
</style>
