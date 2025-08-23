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
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            <a href="https://vk.com/vibegirls" class="social-link" target="_blank" rel="noopener">
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.9-1.744-.9-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.441 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.744.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
              </svg>
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
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;
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
