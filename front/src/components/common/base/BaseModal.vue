<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal-overlay" @click="handleOverlayClick">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 v-if="title" class="modal-title">{{ title }}</h3>
          <button 
            @click="$emit('update:modelValue', false)"
            class="modal-close"
          >
            ✕
          </button>
        </div>
        <div class="modal-content">
          <div class="modal-body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean;
  title?: string;
  closeOnOverlay?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  closeOnOverlay: true
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    emit('update:modelValue', false);
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
  padding: 1rem;
}

.modal-container {
  background: white;
  border-radius: 16px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: #667eea;
  color: white;
  border-radius: 16px 16px 0 0;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 10;
}

.modal-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
}

.modal-close {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.modal-content {
  flex: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-track {
  background: transparent;
}

.modal-content::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-body {
  padding: 1.5rem;
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid var(--gray-200);
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  flex-shrink: 0;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 0.5rem;
  }
  
  .modal-container {
    max-height: 95vh;
  }
  
  .modal-header {
    padding: 1.25rem;
  }
  
  .modal-title {
    font-size: 1.125rem;
  }
  
  .modal-content::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  
  .modal-content {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
}

@media (max-width: 480px) {
  .modal-header {
    padding: 1rem;
  }
  
  .modal-title {
    font-size: 1rem;
  }
  
  .modal-close {
    width: 36px;
    height: 36px;
    font-size: 1.1rem;
  }
}
</style>
