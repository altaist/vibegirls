export interface Bot {
  id: string;
  name: string;
  age: number;
  avatar: string;
  
  // Статусы
  isOnline: boolean; // активна/неактивна
  communicationStatus: 'free' | 'busy'; // свободна/занята
  currentActivity: string; // что сейчас делает
  activityHistory: Array<{
    activity: string;
    time: string; // "2 дня назад, вечер" или "1 день назад, день"
  }>; // история активностей
  mood: string; // текущее настроение
  description: string; // описание о себе
  
  // Персональность
  personality: {
    profession: Record<string, string>; // образование, должность
    appearance: Record<string, string>; // внешние черты
    character: Record<string, string>; // характер
    sociability: number; // 1-100
    romanticism: number; // 1-100
    openness: number; // 1-100
    mood: number; // -100 до 100 (негатив-позитив)
  };
  
  // Отношения с пользователем
  isFavorite: boolean;
  lastMessageAt?: Date;
}

export interface BotFilters {
  onlineOnly: boolean;
  freeOnly: boolean;
  ageRange?: [number, number];
  moodRange?: [number, number];
}
