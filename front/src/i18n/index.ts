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
  messages
})
