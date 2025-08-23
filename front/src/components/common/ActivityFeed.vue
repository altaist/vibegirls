<template>
  <div class="activity-feed">
    <h3>Лента активностей</h3>
    <div class="activity-gallery">
      <!-- Кнопка влево -->
      <button 
        class="gallery-nav gallery-nav-left" 
        @click="scrollLeft"
        :disabled="!canScrollLeft"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <!-- Контейнер с карточками -->
      <div class="activity-scroll" ref="scrollContainer">
        <div 
          v-for="(activityItem, index) in sortedActivities" 
          :key="index"
          class="activity-item"
          :style="{ backgroundColor: getActivityColor(activityItem.activity) }"
        >
          <div class="activity-content">
            <div class="activity-time">{{ activityItem.time }}</div>
            <div class="activity-text">{{ activityItem.activity }}</div>
          </div>
        </div>
      </div>
      
      <!-- Кнопка вправо -->
      <button 
        class="gallery-nav gallery-nav-right" 
        @click="scrollRight"
        :disabled="!canScrollRight"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'

interface ActivityItem {
  activity: string;
  time: string;
}

interface Props {
  activities: ActivityItem[]
}

const props = defineProps<Props>()

const scrollContainer = ref<HTMLElement>()
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

// Функция для парсинга времени активности
const parseActivityTime = (timeStr: string) => {
  const daysMap: { [key: string]: number } = {
    '1 день назад': 1,
    '2 дня назад': 2,
    '3 дня назад': 3
  }
  
  const timeMap: { [key: string]: number } = {
    'утро': 0,
    'день': 1,
    'вечер': 2
  }
  
  const [days, time] = timeStr.split(', ')
  const daysNum = daysMap[days] || 0
  const timeNum = timeMap[time] || 0
  
  return daysNum * 3 + timeNum // Создаем числовое представление для сортировки
}

// Отсортированные активности по дате (новые сначала)
const sortedActivities = computed(() => {
  return [...props.activities].sort((a, b) => {
    const timeA = parseActivityTime(a.time)
    const timeB = parseActivityTime(b.time)
    return timeA - timeB // Сортировка по возрастанию (новые сначала)
  })
})

// Функция для получения цвета активности
const getActivityColor = (activity: string): string => {
  const colors = [
    '#6366f1', // primary-color из стиля
    '#ff6b6b'  // красный из градиента
  ]
  
  // Простая хеш-функция для получения цвета на основе текста
  let hash = 0
  for (let i = 0; i < activity.length; i++) {
    hash = activity.charCodeAt(i) + ((hash << 5) - hash)
  }
  const index = Math.abs(hash) % colors.length
  return colors[index]
}

// Функция для проверки возможности скролла
const updateScrollButtons = () => {
  if (!scrollContainer.value) return
  
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
  canScrollLeft.value = scrollLeft > 0
  canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 1
}

// Функция скролла влево
const scrollLeft = () => {
  if (!scrollContainer.value) return
  
  const scrollAmount = scrollContainer.value.clientWidth * 0.8
  scrollContainer.value.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  })
}

// Функция скролла вправо
const scrollRight = () => {
  if (!scrollContainer.value) return
  
  const scrollAmount = scrollContainer.value.clientWidth * 0.8
  scrollContainer.value.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  })
}

// Обновляем состояние кнопок при скролле
const handleScroll = () => {
  updateScrollButtons()
}

onMounted(() => {
  nextTick(() => {
    updateScrollButtons()
    if (scrollContainer.value) {
      scrollContainer.value.addEventListener('scroll', handleScroll)
    }
  })
})
</script>

<style scoped>
.activity-feed {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.activity-feed h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gray-900);
  margin: 0 0 1.5rem 0;
}

.activity-gallery {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.activity-scroll {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: none; /* Скрываем скроллбар */
  -ms-overflow-style: none; /* IE и Edge */
  scroll-behavior: smooth;
}

.activity-scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari и Opera */
}

/* Кнопки навигации */
.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.gallery-nav:hover:not(:disabled) {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.gallery-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.gallery-nav-left {
  left: -24px;
}

.gallery-nav-right {
  right: -24px;
}

.activity-item {
  flex-shrink: 0;
  min-height: 160px;
  padding: 2rem 2.5rem;
  border-radius: 16px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
}

.activity-item:hover {
  transform: translateY(-2px);
}

.activity-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
}

.activity-time {
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
}

.activity-text {
  font-weight: 400;
  font-size: 0.875rem;
  opacity: 0.9;
  line-height: 1.2;
}

/* Десктоп: показываем 5 активностей */
@media (min-width: 768px) {
  .activity-item {
    min-width: calc((100% - 4rem) / 5);
  }
}

/* Мобильный: показываем 2 активности */
@media (max-width: 767px) {
  .activity-item {
    min-width: calc((100% - 1rem) / 2);
    min-height: 140px;
    padding: 1.5rem 1.75rem;
  }
  
  .activity-feed {
    padding: 1.5rem;
  }
  
  .gallery-nav {
    width: 40px;
    height: 40px;
  }
  
  .gallery-nav-left {
    left: -20px;
  }
  
  .gallery-nav-right {
    right: -20px;
  }
}

@media (max-width: 480px) {
  .activity-feed {
    padding: 1rem;
  }
  
  .activity-feed h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  
  .activity-item {
    min-height: 120px;
    padding: 1rem 1.25rem;
  }
  
  .activity-time {
    font-size: 1rem;
  }
  
  .activity-text {
    font-size: 0.75rem;
  }
  
  .gallery-nav {
    width: 36px;
    height: 36px;
  }
  
  .gallery-nav-left {
    left: -18px;
  }
  
  .gallery-nav-right {
    right: -18px;
  }
}
</style>
