<template>
  <div class="chat-messages" ref="messagesContainer">
    <!-- Приветственное сообщение -->
    <div v-if="messages.length === 0" class="welcome-message">
      <div class="welcome-content">
        <div class="welcome-avatar">
          <img :src="botAvatar" :alt="botName" />
        </div>
        <div class="welcome-text">
          <h3>Привет! 👋</h3>
          <p>Я {{ botName }}. Давай познакомимся поближе!</p>
        </div>
      </div>
    </div>
    
    <!-- Список сообщений -->
    <div v-else class="messages-list">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message-wrapper"
        :class="{ 'message-own': message.isOwn }"
      >
        <div class="message">
          <!-- Аватар -->
          <div v-if="!message.isOwn" class="message-avatar">
            <img :src="botAvatar" :alt="botName" />
          </div>
          
          <!-- Содержимое сообщения -->
          <div class="message-content">
            <div class="message-bubble" :class="{ 'message-bubble-own': message.isOwn }">
              <div class="message-text">{{ message.text }}</div>
              <div class="message-time">{{ formatTime(message.timestamp) }}</div>
            </div>
          </div>
          
          <!-- Аватар пользователя -->
          <div v-if="message.isOwn" class="message-avatar message-avatar-own">
            <div class="user-avatar">
              <span>👤</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Индикатор набора текста -->
    <div v-if="isTyping" class="typing-indicator">
      <div class="message">
        <div class="message-avatar">
          <img :src="botAvatar" :alt="botName" />
        </div>
        <div class="message-content">
          <div class="message-bubble typing-bubble">
            <div class="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'

interface Message {
  id: string
  text: string
  timestamp: Date
  isOwn: boolean
}

interface Props {
  messages: Message[]
  isTyping?: boolean
  botName?: string
  botAvatar?: string
}

const props = withDefaults(defineProps<Props>(), {
  isTyping: false,
  botName: 'AI-Девушка',
  botAvatar: 'https://i.pravatar.cc/100?img=1'
})

const messagesContainer = ref<HTMLElement>()

// Автопрокрутка к последнему сообщению
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// Форматирование времени
const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Следим за изменениями сообщений и прокручиваем вниз
watch(() => props.messages.length, () => {
  nextTick(() => {
    scrollToBottom()
  })
})

// Следим за индикатором набора текста
watch(() => props.isTyping, () => {
  nextTick(() => {
    scrollToBottom()
  })
})

onMounted(() => {
  scrollToBottom()
})
</script>

<style scoped>
.chat-messages {
  height: 100%;
  overflow-y: auto;
  padding: 1rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.welcome-message {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
}

.welcome-content {
  text-align: center;
  max-width: 400px;
}

.welcome-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  border: 3px solid #3b82f6;
}

.welcome-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.welcome-text h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 0.5rem;
}

.welcome-text p {
  font-size: 1.125rem;
  color: var(--gray-600);
  line-height: 1.6;
}

.messages-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message-wrapper {
  display: flex;
  flex-direction: column;
}

.message {
  display: flex;
  gap: 0.75rem;
  max-width: 80%;
  width: fit-content;
}

.message-own {
  align-self: flex-end;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.message-own .message {
  flex-direction: row-reverse;
}

.message-avatar {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.message-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.message-avatar-own {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 1.25rem;
  border: 2px solid #e5e7eb;
}

.message-content {
  flex: 1;
  min-width: 0;
  max-width: calc(100% - 50px); /* Учитываем ширину аватара + gap */
}

.message-bubble {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: relative;
}

.message-bubble-own {
  background: #3b82f6;
  color: white;
  border: none;
  box-shadow: 0 1px 3px rgba(59, 130, 246, 0.2);
}

.message-text {
  font-size: 1rem;
  line-height: 1.5;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  margin-bottom: 0.25rem;
}

.message-time {
  font-size: 0.75rem;
  opacity: 0.7;
  text-align: right;
}

.message-bubble-own .message-time {
  color: rgba(255, 255, 255, 0.8);
}

.typing-indicator {
  margin-top: 1rem;
}

.typing-bubble {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  padding: 1rem;
}

.typing-dots {
  display: flex;
  gap: 0.25rem;
  align-items: center;
}

.typing-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #9ca3af;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-dots span:nth-child(1) { animation-delay: -0.32s; }
.typing-dots span:nth-child(2) { animation-delay: -0.16s; }

@keyframes typing {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .chat-messages {
    padding: 0.75rem;
  }
  
  .message {
    max-width: 90%;
  }
  
  .message-avatar {
    width: 36px;
    height: 36px;
  }
  
  .message-avatar-own {
    width: 36px;
    height: 36px;
    font-size: 1.125rem;
  }
  
  .message-bubble {
    padding: 0.625rem 0.875rem;
  }
  
  .message-text {
    font-size: 0.875rem;
  }
  
  .welcome-avatar {
    width: 64px;
    height: 64px;
  }
  
  .welcome-text h3 {
    font-size: 1.25rem;
  }
  
  .welcome-text p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .chat-messages {
    padding: 0.5rem;
  }
  
  .message {
    max-width: 95%;
  }
  
  .message-avatar {
    width: 32px;
    height: 32px;
  }
  
  .message-avatar-own {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }
  
  .message-bubble {
    padding: 0.5rem 0.75rem;
  }
  
  .message-text {
    font-size: 0.875rem;
  }
}
</style>
