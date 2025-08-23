<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Основная информация -->
        <div class="footer-section">
          <div class="footer-brand">
            <img src="@/assets/images/icons/logo.svg" alt="Logo" class="footer-logo" />
            <h3 class="footer-title">VibeGirls</h3>
          </div>
          <p class="footer-description">
            {{ t('footer.description') }}
          </p>
        </div>

        <!-- Ссылки на документы -->
        <div class="footer-section">
          <h4 class="footer-heading">{{ t('footer.documents') }}</h4>
          <ul class="footer-links">
            <li><a href="/terms" class="footer-link">{{ t('footer.terms') }}</a></li>
            <li><a href="/privacy" class="footer-link">{{ t('footer.privacy') }}</a></li>
            <li><a href="/cookies" class="footer-link">{{ t('footer.cookies') }}</a></li>
            <li><a href="/refund" class="footer-link">{{ t('footer.refund') }}</a></li>
          </ul>
        </div>

        <!-- Контакты -->
        <div class="footer-section">
          <h4 class="footer-heading">{{ t('footer.contacts') }}</h4>
          <ul class="footer-links">
            <li><a href="mailto:support@vibegirls.com" class="footer-link">support@vibegirls.com</a></li>
            <li><a href="tel:+78001234567" class="footer-link">8-800-123-45-67</a></li>
            <li><a href="/contact" class="footer-link">{{ t('footer.feedback_form') }}</a></li>
          </ul>
        </div>

        <!-- Социальные сети -->
        <div class="footer-section">
          <h4 class="footer-heading">{{ t('footer.social_media') }}</h4>
          <div class="social-links">
            <a href="https://t.me/vibegirls" class="social-link" target="_blank" rel="noopener">
              <span class="social-icon">📱</span>
              Telegram
            </a>
            <a href="https://vk.com/vibegirls" class="social-link" target="_blank" rel="noopener">
              <span class="social-icon">💬</span>
              VK
            </a>
          </div>
        </div>
      </div>

      <!-- Нижняя полоска с копирайтом -->
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>&copy; 2024 VibeGirls. {{ t('footer.copyright') }}</p>
        </div>
        <div class="footer-legal">
          <a href="/terms" class="footer-link-small">{{ t('footer.terms_short') }}</a>
          <span class="separator">•</span>
          <a href="/privacy" class="footer-link-small">{{ t('footer.privacy_short') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.footer {
  background: var(--gradient-primary);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-brand {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.footer-logo {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
  margin-right: 0.5rem;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: white;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: white;
  text-decoration: underline;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.social-link:hover {
  color: white;
}

.social-icon {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copyright p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-link-small {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s ease;
}

.footer-link-small:hover {
  color: white;
}

.separator {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-legal {
    justify-content: center;
  }
}
</style>
