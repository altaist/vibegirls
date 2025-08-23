<template>
  <section class="section-features position-relative">
    <div class="features-pattern"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row features-row" style="padding: 3rem 0;">
            <div class="col-lg-6 mb-4">
              <div class="feature-card">
                <p class="feature-description font-body">
                  {{ $t('home.features.unique_character') }}
                </p>
              </div>
            </div>
            
            <div class="col-lg-6 mb-4">
              <div class="feature-card">
                <p class="feature-description font-body">
                  {{ $t('home.features.open_communication') }}
                </p>
              </div>
            </div>
            
            <div class="col-lg-6 mb-4">
              <div class="feature-card">
                <p class="feature-description font-body">
                  {{ $t('home.features.group_chat') }}
                </p>
              </div>
            </div>
            
            <div class="col-lg-6 mb-4">
              <div class="feature-card feature-card-highlight">
                <p class="feature-description font-body">
                  {{ $t('home.features.start_chat') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Компонент особенностей сервиса
</script>

<style scoped>
/* Только специфичные стили для features */
.features-pattern {
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

.feature-card {
  background: var(--bs-white);
  padding: 5rem 4rem;
  border-radius: 24px 24px 24px 8px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-bottom-color: var(--bs-white);
  border-left-color: var(--bs-white);
  border-bottom-left-radius: 8px;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(168, 237, 234, 0.05) 0%, rgba(254, 214, 227, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 35px 70px rgba(0, 0, 0, 0.15);
}

.feature-card-highlight {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.feature-card-highlight .feature-description {
  color: white;
}

.feature-card-highlight::after {
  border-bottom-color: #f093fb;
  border-left-color: #f093fb;
}

.feature-card-highlight:hover {
  transform: translateY(-8px);
  box-shadow: 0 35px 70px rgba(240, 147, 251, 0.3);
}

.features-row {
  align-items: stretch;
}

.feature-description {
  color: var(--bs-gray-800);
  font-size: 1.75rem;
  line-height: 1.5;
  margin: 0;
  position: relative;
  z-index: 1;
  font-weight: 400;
  letter-spacing: 0.01em;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .feature-card {
    padding: 3rem 2rem;
    border-radius: 20px 20px 20px 6px;
  }
  
  .feature-card::after {
    border-width: 15px;
    border-bottom-left-radius: 6px;
  }
  
  .feature-description {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .feature-card {
    padding: 1.25rem;
  }
}
</style>
