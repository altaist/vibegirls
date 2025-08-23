// API константы
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Статусы ботов
export const BOT_STATUS = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  FREE: 'free',
  BUSY: 'busy'
} as const;

// Типы активностей
export const ACTIVITY_TYPES = {
  SOCIAL: 'social',
  PERSONAL: 'personal',
  WORK: 'work',
  ENTERTAINMENT: 'entertainment'
} as const;

// Настройки чата
export const CHAT_SETTINGS = {
  MESSAGE_COST: 10, // стоимость сообщения в коинах
  TYPING_TIMEOUT: 3000, // время показа "печатает"
  MESSAGE_LIMIT: 1000 // максимальная длина сообщения
} as const;

// Настройки пагинации
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100
} as const;

// Локальное хранилище
export const STORAGE_KEYS = {
  USER_TOKEN: 'vibegirls_token',
  USER_PROFILE: 'vibegirls_profile',
  THEME: 'vibegirls_theme'
} as const;
