<template>
  <div class="app-layout">
    <!-- Кастомный хедер или дефолтный -->
    <slot name="header">
      <AppHeader v-if="!hideHeader" />
    </slot>
    
    <!-- Основной контент -->
    <main class="main-content" :class="{ 'no-header': hideHeader, 'no-footer': hideFooter }">
      <slot />
    </main>
    
    <!-- Футер (можно отключить) -->
    <AppFooter v-if="!hideFooter" />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'

/**
 * AppLayout - Кастомизируемый layout компонент
 * 
 * Позволяет гибко настраивать структуру страницы:
 * - Показывать/скрывать стандартный хедер
 * - Показывать/скрывать футер
 * - Подставлять кастомный хедер через slot
 * 
 * @example
 * // Стандартный layout с хедером и футером
 * <AppLayout>
 *   <div>Контент страницы</div>
 * </AppLayout>
 * 
 * // Layout без футера (для чатов)
 * <AppLayout :hide-footer="true">
 *   <div>Контент чата</div>
 * </AppLayout>
 * 
 * // Layout с кастомным хедером
 * <AppLayout :hide-footer="true">
 *   <template #header>
 *     <ChatHeader />
 *   </template>
 *   <div>Контент с кастомным хедером</div>
 * </AppLayout>
 * 
 * // Layout без хедера и футера (для полноэкранных приложений)
 * <AppLayout :hide-header="true" :hide-footer="true">
 *   <div>Полноэкранный контент</div>
 * </AppLayout>
 */
interface Props {
  /** Скрыть стандартный хедер */
  hideHeader?: boolean
  /** Скрыть футер */
  hideFooter?: boolean
}

withDefaults(defineProps<Props>(), {
  hideHeader: false,
  hideFooter: false
})
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--gray-50);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-content.no-header {
  padding-top: 0;
}

.main-content.no-footer {
  padding-bottom: 0;
}
</style>
