import type { Bot } from '@/types/bot';
import type { Activity } from '@/types/activity';

// Форматирование даты
export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Форматирование времени
export const formatTime = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Относительное время
export const getRelativeTime = (date: Date | string): string => {
  const now = new Date();
  const d = new Date(date);
  const diffInMinutes = Math.floor((now.getTime() - d.getTime()) / (1000 * 60));

  if (diffInMinutes < 1) return 'только что';
  if (diffInMinutes < 60) return `${diffInMinutes} мин назад`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} ч назад`;
  return formatDate(d);
};

// Получение статуса бота
export const getBotStatus = (bot: Bot): string => {
  if (!bot.isOnline) return 'Оффлайн';
  if (bot.communicationStatus === 'busy') return 'Занята';
  return 'Свободна';
};

// Получение цвета статуса
export const getStatusColor = (bot: Bot): string => {
  if (!bot.isOnline) return 'gray';
  if (bot.communicationStatus === 'busy') return 'red';
  return 'green';
};

// Получение настроения бота
export const getMoodEmoji = (mood: number): string => {
  if (mood >= 80) return '😊';
  if (mood >= 60) return '🙂';
  if (mood >= 40) return '😐';
  if (mood >= 20) return '😕';
  return '😢';
};

// Фильтрация ботов
export const filterBots = (bots: Bot[], filters: {
  onlineOnly?: boolean;
  freeOnly?: boolean;
  search?: string;
}): Bot[] => {
  return bots.filter(bot => {
    if (filters.onlineOnly && !bot.isOnline) return false;
    if (filters.freeOnly && bot.communicationStatus === 'busy') return false;
    if (filters.search && !bot.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });
};

// Получение текущей активности бота
export const getCurrentActivity = (activities: Activity[]): Activity | null => {
  return activities.find(activity => activity.isActive) || null;
};

// Генерация ID
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// Проверка на мобильное устройство
export const isMobile = (): boolean => {
  return window.innerWidth <= 768;
};

// Дебаунс функция
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
