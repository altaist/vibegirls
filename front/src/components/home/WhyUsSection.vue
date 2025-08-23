<template>
  <section class="section-why-us">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <SectionTitle 
            title="Почему мы?" 
            subtitle="Преимущества нашей платформы"
            color="#1e3a8a"
          />
          
          <div class="row g-4">
            <div class="col-lg-4 mb-4">
              <div class="why-us-card why-us-card-1">
                <h3 class="why-us-title">Максимально похожи на настоящих</h3>
                <p class="why-us-text">
                  Активности, статусы, характеры - все как в жизни.
                </p>
              </div>
            </div>
            
            <div class="col-lg-4 mb-4">
              <div class="why-us-card why-us-card-2">
                <h3 class="why-us-title">Всегда есть свободные</h3>
                <p class="why-us-text">
                  В отличие от обычной жизни вы всегда найдете ту, которая ответит взаимностью.
                </p>
              </div>
            </div>
            
            <div class="col-lg-4 mb-4">
              <div class="why-us-card why-us-card-3">
                <h3 class="why-us-title">Отличный тренажер отношений</h3>
                <p class="why-us-text">
                  Вы можете преодолеть стеснительность, научившись общаться с виртуальными девушками.
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
import SectionTitle from '../common/SectionTitle.vue';
</script>

<style scoped>
/* Стили для секции "Почему мы?" */
.section-why-us {
  background: #f3f4f6; /* Светло-серый фон */
  padding: var(--section-padding);
}

.why-us-card {
  padding: 3rem 2rem;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.why-us-card-1 {
  background: var(--gradient-primary); /* Основной градиент сайта */
}

.why-us-card-2 {
  background: var(--gradient-stats); /* Градиент статистики */
}

.why-us-card-3 {
  background: var(--gradient-features); /* Градиент особенностей */
}

.why-us-card:hover {
  transform: translateY(-8px);
}

.why-us-card-1:hover {
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.why-us-card-2:hover {
  box-shadow: 0 20px 40px rgba(224, 133, 240, 0.3);
}

.why-us-card-3:hover {
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.why-us-title {
  color: white; /* Белый цвет для заголовка */
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.why-us-text {
  color: rgba(255, 255, 255, 0.9); /* Белый цвет с прозрачностью для текста */
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .why-us-card {
    padding: 2rem 1.5rem;
  }
  
  .why-us-title {
    font-size: 1.25rem;
  }
  
  .why-us-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .why-us-card {
    padding: 1.5rem 1rem;
  }
  
  .why-us-title {
    font-size: 1.125rem;
  }
  
  .why-us-text {
    font-size: 0.875rem;
  }
}
</style>
