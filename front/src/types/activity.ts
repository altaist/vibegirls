export interface Activity {
  id: string;
  botId: string;
  type: string; // тип активности
  description: string; // описание
  timestamp: Date;
  isActive: boolean; // текущая активность
}

export interface ActivityType {
  id: string;
  name: string;
  description: string;
  icon?: string;
  category: 'social' | 'personal' | 'work' | 'entertainment';
}
