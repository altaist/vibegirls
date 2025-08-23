<template>
  <section class="hero-section">
    <div class="hero-background"></div>
    <div class="hero-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-xl-6">
            <h1 class="hero-title">
              {{ $t('home.hero.title') }}
            </h1>
            <p class="hero-subtitle">
              {{ $t('home.hero.subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Компонент hero секции
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(135deg, rgba(255, 107, 157, 0.3) 0%, rgba(196, 69, 105, 0.3) 50%, rgba(102, 126, 234, 0.3) 100%),
    url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1920&h=1080&fit=crop&crop=center');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 1;
}



.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  color: white;
  text-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.3),
    0 8px 16px rgba(0, 0, 0, 0.2);
  margin: 0 0 1rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  color: white;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
  line-height: 1.4;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.2s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .hero-section {
    height: 80vh;
    min-height: 500px;
  }
  
  .hero-title {
    font-size: 2.5rem;
    padding: 0 1rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }
  
  .hero-background {
    background-attachment: scroll;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 70vh;
    min-height: 400px;
  }
  
  .hero-title {
    font-size: 2rem;
    padding: 0 0.5rem;
  }
  
  .hero-subtitle {
    font-size: 0.875rem;
    padding: 0 0.5rem;
  }
}

/* Планшеты */
@media (min-width: 769px) and (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

/* Большие экраны */
@media (min-width: 1200px) {
  .hero-title {
    font-size: 5rem;
  }
}
</style>
