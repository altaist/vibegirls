<template>
  <div class="home">
    <!-- Главная навигация -->
    <AppHeader />
    
    <!-- Приветственная секция -->
    <HeroSection />
    
    <!-- Особенности платформы -->
    <FeaturesSection />
    
    <!-- Каталог девушек -->
    <BotGrid />
    
    <!-- Статистика сервиса -->
    <StatsSection />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/common/AppHeader.vue';
import HeroSection from '../components/home/HeroSection.vue';
import StatsSection from '../components/home/StatsSection.vue';
import FeaturesSection from '../components/home/FeaturesSection.vue';
import BotGrid from '../components/home/BotGrid.vue';
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #f8fafc;
}
</style>
