<template>
  <div class="chat-input-container">
    <div class="chat-input-wrapper">
      <div class="input-group">
        <!-- Кнопка вложения -->
        <button class="btn btn-link attachment-button" @click="toggleAttachmentMenu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        
        <!-- Основное поле ввода -->
        <div class="input-field-wrapper">
          <textarea
            v-model="messageText"
            class="chat-input"
            placeholder="Введите сообщение..."
            @keydown.enter.prevent="handleEnterKey"
            @input="autoResize"
            ref="inputRef"
            rows="1"
          ></textarea>
          
          <!-- Счетчик символов -->
          <div v-if="messageText.length > 0" class="char-counter">
            {{ messageText.length }}/1000
          </div>
        </div>
        

        
        <!-- Кнопка отправки -->
        <button
          class="btn send-button"
          @click="sendMessage"
          :disabled="!messageText.trim()"
          :class="{ 'active': messageText.trim() }"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      
      <!-- Индикатор набора текста -->
      <div v-if="isTyping" class="typing-indicator">
        <span>Печатает</span>
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const messageText = ref('')
const inputRef = ref<HTMLTextAreaElement>()
const isTyping = ref(false)

const emit = defineEmits<{
  send: [message: string]
}>()

const sendMessage = () => {
  const message = messageText.value.trim()
  if (message) {
    emit('send', message)
    messageText.value = ''
    // Фокусируемся обратно на поле ввода
    nextTick(() => {
      inputRef.value?.focus()
      autoResize()
    })
  }
}

const handleEnterKey = (event: KeyboardEvent) => {
  if (event.shiftKey) {
    // Shift+Enter для новой строки
    return
  }
  // Enter для отправки
  sendMessage()
}

const autoResize = () => {
  const textarea = inputRef.value
  if (textarea) {
    textarea.style.height = 'auto'
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
  }
}

const toggleAttachmentMenu = () => {
  // TODO: Реализовать меню вложений
  console.log('Открыть меню вложений')
}


</script>

<style scoped>
.chat-input-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  background: white;
  border-top: 1px solid var(--gray-200);
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);
}

.chat-input-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.input-group {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  background: var(--gray-50);
  border-radius: 1.5rem;
  padding: 0.75rem;
  border: 1px solid var(--gray-200);
  transition: all 0.2s ease-in-out;
}

.input-group:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
  background: white;
}

.attachment-button {
  color: var(--gray-500);
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.attachment-button:hover {
  color: var(--primary);
  background: rgba(var(--primary-rgb), 0.1);
}

.input-field-wrapper {
  flex: 1;
  position: relative;
  min-height: 40px;
  display: flex;
  align-items: center;
}

.chat-input {
  width: 100%;
  border: none;
  background: transparent;
  padding: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.5;
  resize: none;
  outline: none;
  font-family: inherit;
  max-height: 120px;
  overflow-y: auto;
  box-shadow: none;
}

.chat-input:focus {
  outline: none;
  box-shadow: none;
  border: none;
}

.chat-input::placeholder {
  color: var(--gray-400);
}

.char-counter {
  position: absolute;
  bottom: -1.5rem;
  right: 0;
  font-size: 0.75rem;
  color: var(--gray-400);
}

.send-button {
  border-radius: 50%;
  width: 48px;
  height: 48px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-300);
  border: none;
  transition: all 0.2s ease-in-out;
  color: var(--gray-500);
}

.send-button.active {
  background: var(--gradient-primary);
  color: white;
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.3);
}

.send-button:hover:not(:disabled) {
  transform: scale(1.05);
}

.send-button.active:hover:not(:disabled) {
  box-shadow: 0 6px 16px rgba(var(--primary-rgb), 0.4);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.typing-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding-left: 1rem;
  font-size: 0.875rem;
  color: var(--gray-500);
}

.typing-dots {
  display: flex;
  gap: 0.25rem;
}

.typing-dots span {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--gray-400);
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
  .chat-input-container {
    left: 0;
    transform: none;
    max-width: none;
    padding: 0.75rem;
  }
  
  .input-group {
    gap: 0.5rem;
    padding: 0.625rem;
  }
  
  .attachment-button,
  .emoji-button {
    min-width: 36px;
    height: 36px;
  }
  
  .send-button {
    width: 44px;
    height: 44px;
  }
  
  .chat-input {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .chat-input-container {
    padding: 0.5rem;
  }
  
  .input-group {
    padding: 0.5rem;
    gap: 0.375rem;
  }
  
  .attachment-button,
  .emoji-button {
    min-width: 32px;
    height: 32px;
  }
  
  .send-button {
    width: 40px;
    height: 40px;
  }
  
  .chat-input {
    font-size: 0.875rem;
  }
}
</style>
