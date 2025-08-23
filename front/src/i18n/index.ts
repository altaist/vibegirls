import { createI18n } from 'vue-i18n'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

const messages = {
  ru,
  en
}

export default createI18n({
  legacy: false, // Используем Composition API
  locale: 'ru', // Язык по умолчанию
  fallbackLocale: 'en', // Резервный язык
  messages,
  missingWarn: false, // Отключаем предупреждения о пропущенных ключах в production
  fallbackWarn: false, // Отключаем предупреждения о fallback в production
  silentTranslationWarn: true, // Отключаем предупреждения о тихих переводах
  silentFallbackWarn: true // Отключаем предупреждения о тихих fallback
})
