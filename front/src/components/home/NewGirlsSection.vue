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
            <button class="btn btn-primary view-all-btn" @click="viewAllNewGirls">
              Все новенькие
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

// Используем те же данные для примера
const bots = [
  {
    id: '1',
    name: 'Анна',
    age: 24,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    isOnline: true,
    communicationStatus: 'free' as const,
    currentActivity: 'Готовлю ужин',
    mood: 'Веселая'
  },
  {
    id: '2',
    name: 'Мария',
    age: 22,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face',
    isOnline: true,
    communicationStatus: 'busy' as const,
    currentActivity: 'Работаю',
    mood: 'Сосредоточенная'
  },
  {
    id: '3',
    name: 'Елена',
    age: 26,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    isOnline: true,
    communicationStatus: 'free' as const,
    currentActivity: 'Смотрю фильм',
    mood: 'Расслабленная'
  },
  {
    id: '4',
    name: 'Ольга',
    age: 23,
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&h=400&fit=crop&crop=face',
    isOnline: false,
    communicationStatus: 'free' as const,
    currentActivity: 'Лежу в постельке',
    mood: 'Спокойная'
  },
  {
    id: '5',
    name: 'Ирина',
    age: 25,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    isOnline: true,
    communicationStatus: 'free' as const,
    currentActivity: 'Читаю книгу',
    mood: 'Задумчивая'
  },
  {
    id: '6',
    name: 'Наталья',
    age: 21,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face',
    isOnline: true,
    communicationStatus: 'busy' as const,
    currentActivity: 'Тренируюсь',
    mood: 'Энергичная'
  }
];

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
