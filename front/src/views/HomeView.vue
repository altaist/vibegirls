<template>
  <AppLayout>
    <!-- Приветственная секция -->
    <HeroSection />
    
    <!-- Особенности платформы -->
    <FeaturesSection />
    
    <!-- Каталог девушек -->
    <BotGrid />
    
    <!-- Новенькие -->
    <NewGirlsSection />
    
    <!-- Самые активные -->
    <ActiveGirlsSection />
    
    <!-- Статистика сервиса -->
    <StatsSection />
    
    <!-- Почему мы? -->
    <WhyUsSection />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/components/common/AppLayout.vue';
import HeroSection from '../components/home/HeroSection.vue';
import StatsSection from '../components/home/StatsSection.vue';
import FeaturesSection from '../components/home/FeaturesSection.vue';
import BotGrid from '../components/home/BotGrid.vue';
import NewGirlsSection from '../components/home/NewGirlsSection.vue';
import ActiveGirlsSection from '../components/home/ActiveGirlsSection.vue';
import WhyUsSection from '../components/home/WhyUsSection.vue';
</script>

<style scoped>
/* Стили перенесены в AppLayout */
</style>
