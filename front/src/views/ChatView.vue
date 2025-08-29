<template>
  <AppLayout :hide-footer="true">
    <!-- Кастомный хедер для чата -->
    <template #header>
      <ChatHeader 
        :bot-name="botName"
        :bot-avatar="botAvatar"
        :bot-status="botStatus"
      />
    </template>
    
    <!-- Основная область чата -->
    <div class="chat-main">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-11 col-12">
            <ChatMessages 
              :messages="messages" 
              :is-typing="isTyping"
              :bot-name="botName"
              :bot-avatar="botAvatar"
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Поле ввода сообщений -->
    <ChatInput @send="handleSendMessage" />
  </AppLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { mockBots } from '@/mockData/bots'
import AppLayout from '@/components/common/AppLayout.vue'
import ChatHeader from '@/components/chat/ChatHeader.vue'
import ChatInput from '@/components/chat/ChatInput.vue'
import ChatMessages from '@/components/chat/ChatMessages.vue'
import type { Bot } from '@/types/bot'

const route = useRoute()

// Получаем ID бота из параметров маршрута
const botId = route.params.botId as string

// Находим бота по ID
const bot = ref<Bot | null>(null)

onMounted(() => {
  bot.value = mockBots.find(b => b.id === botId) || null
})

// Вычисляемые свойства для данных бота
const botName = computed(() => bot.value?.name || 'Неизвестный бот')
const botAvatar = computed(() => bot.value?.avatar || 'https://i.pravatar.cc/100?img=1')
const botStatus = computed(() => {
  if (!bot.value) return 'Неизвестно'
  if (bot.value.isOnline) {
    return bot.value.communicationStatus === 'free' ? 'Свободна' : 'Занята'
  }
  return 'Оффлайн'
})

// Состояние чата
const messages = ref([
  {
    id: '1',
    text: 'Привет! Как дела? 😊',
    timestamp: new Date(Date.now() - 300000), // 5 минут назад
    isOwn: false
  },
  {
    id: '2',
    text: 'Привет! Все отлично, спасибо! А у тебя как?',
    timestamp: new Date(Date.now() - 240000), // 4 минуты назад
    isOwn: true
  },
  {
    id: '3',
    text: 'Тоже хорошо! Рада, что ты заглянул. Чем занимаешься?',
    timestamp: new Date(Date.now() - 180000), // 3 минуты назад
    isOwn: false
  },
  {
    id: '4',
    text: 'Работаю над проектом. А ты что делаешь?',
    timestamp: new Date(Date.now() - 120000), // 2 минуты назад
    isOwn: true
  },
  {
    id: '5',
    text: 'Я тоже работаю! Создаю новый контент для своих подписчиков. Это очень увлекательно!',
    timestamp: new Date(Date.now() - 60000), // 1 минуту назад
    isOwn: false
  },
  {
    id: '6',
    text: 'Звучит интересно! Какой именно контент создаешь?',
    timestamp: new Date(Date.now() - 55000),
    isOwn: true
  },
  {
    id: '7',
    text: 'Фотографии, видео, истории из жизни. Люблю делиться своими мыслями и опытом с подписчиками!',
    timestamp: new Date(Date.now() - 50000),
    isOwn: false
  },
  {
    id: '8',
    text: 'Круто! А сколько у тебя подписчиков?',
    timestamp: new Date(Date.now() - 45000),
    isOwn: true
  },
  {
    id: '9',
    text: 'Около 50 тысяч! Но для меня важнее не количество, а качество общения с людьми 😊',
    timestamp: new Date(Date.now() - 40000),
    isOwn: false
  },
  {
    id: '10',
    text: 'Впечатляет! Как давно ведешь блог?',
    timestamp: new Date(Date.now() - 35000),
    isOwn: true
  },
  {
    id: '11',
    text: 'Уже 3 года! Начинала с простых постов, а теперь это стало важной частью моей жизни',
    timestamp: new Date(Date.now() - 30000),
    isOwn: false
  },
  {
    id: '12',
    text: 'А что тебя вдохновляет на создание контента?',
    timestamp: new Date(Date.now() - 25000),
    isOwn: true
  },
  {
    id: '13',
    text: 'Люди, природа, путешествия, книги... Вдохновение можно найти везде, если внимательно смотреть вокруг!',
    timestamp: new Date(Date.now() - 20000),
    isOwn: false
  },
  {
    id: '14',
    text: 'Согласен! А какие у тебя любимые места для путешествий?',
    timestamp: new Date(Date.now() - 15000),
    isOwn: true
  },
  {
    id: '15',
    text: 'Обожаю горы и море! В горах чувствую себя свободной, а море успокаивает и заряжает энергией 🌊',
    timestamp: new Date(Date.now() - 10000),
    isOwn: false
  }
])

const isTyping = ref(false)

const handleSendMessage = (message: string) => {
  console.log('Отправка сообщения:', message, 'боту:', botId)
  
  // Добавляем сообщение пользователя
  const userMessage = {
    id: Date.now().toString(),
    text: message,
    timestamp: new Date(),
    isOwn: true
  }
  messages.value.push(userMessage)
  
  // Имитируем ответ бота
  isTyping.value = true
  setTimeout(() => {
    isTyping.value = false
    
    const botResponses = [
      'Интересно! Расскажи подробнее 😊',
      'Понятно! А что тебя больше всего интересует в этом?',
      'Звучит увлекательно! Хочешь обсудить это детальнее?',
      'Спасибо за рассказ! Мне очень интересно узнать твое мнение.',
      'Отлично! А какие у тебя планы на будущее?'
    ]
    
    const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
    
    const botMessage = {
      id: (Date.now() + 1).toString(),
      text: randomResponse,
      timestamp: new Date(),
      isOwn: false
    }
    messages.value.push(botMessage)
  }, 1500 + Math.random() * 1000) // Случайная задержка 1.5-2.5 секунды
}
</script>

<style scoped>
.chat-main {
  flex: 1;
  overflow: hidden;
  padding-bottom: 120px; /* Увеличиваем отступ для поля ввода */
}



/* Мобильная адаптация */
@media (max-width: 768px) {
  .chat-main {
    padding-bottom: 100px;
  }
}
</style>
