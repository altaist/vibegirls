<template>
  <section class="section-stats">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="d-flex justify-content-center flex-wrap">
            <div class="stats-item">
              <div class="stats-number font-display-bold text-white">1430</div>
              <div class="stats-label font-body text-white">{{ $t('home.stats.total') }}</div>
            </div>
            <div class="stats-item">
              <div class="stats-number font-display-bold text-white">765</div>
              <div class="stats-label font-body text-white">{{ $t('home.stats.online') }}</div>
            </div>
            <div class="stats-item">
              <div class="stats-number font-display-bold text-white">170</div>
              <div class="stats-label font-body text-white">{{ $t('home.stats.free') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Компонент статистики
</script>

<style scoped>
/* Стили для элементов статистики */
.stats-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  min-width: 200px;
  margin: 0 4rem 2rem 0;
}

.stats-number {
  font-size: 4rem;
  line-height: 1;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: -0.05em;
}

.stats-label {
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 0.5rem;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .stats-item {
    width: 100%;
    max-width: 300px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    margin: 0 0 1rem 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .stats-number {
    font-size: 2.5rem;
  }
  
  .stats-label {
    font-size: 1rem;
    font-weight: 600;
  }
}

@media (max-width: 480px) {
  .stats-item {
    max-width: 100%;
    padding: 1.25rem 1.5rem;
  }
  
  .stats-number {
    font-size: 2rem;
  }
  
  .stats-label {
    font-size: 0.875rem;
  }
}
</style>
