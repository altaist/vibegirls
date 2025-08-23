# План структуры приложения VibeGirls

## Общая архитектура
Приложение представляет собой SPA (Single Page Application) на Vue 3 + TypeScript для общения с AI-ассистентами (ботами-девушками).

## Структура данных

### 1. Типы данных

#### User (Пользователь)
```typescript
interface User {
  id: string;
  username: string;
  email: string;
  balance: number; // баланс в коинах
  avatar?: string;
  createdAt: Date;
}
```

#### Bot (Бот-девушка)
```typescript
interface Bot {
  id: string;
  name: string;
  age: number;
  avatar: string;
  
  // Статусы
  isOnline: boolean; // активна/неактивна
  communicationStatus: 'free' | 'busy'; // свободна/занята
  currentActivity: string; // что сейчас делает
  
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
```

#### Activity (Активность бота)
```typescript
interface Activity {
  id: string;
  botId: string;
  type: string; // тип активности
  description: string; // описание
  timestamp: Date;
  isActive: boolean; // текущая активность
}
```

#### Chat (Чат)
```typescript
interface Chat {
  id: string;
  userId: string;
  botId: string;
  messages: Message[];
  startedAt: Date;
  lastActivityAt: Date;
  isActive: boolean;
}
```

#### Message (Сообщение)
```typescript
interface Message {
  id: string;
  chatId: string;
  senderId: string; // userId или botId
  senderType: 'user' | 'bot';
  content: string;
  timestamp: Date;
}
```

### 2. API структура (для будущего бэкенда)

#### Endpoints
```
GET /api/user/profile - профиль пользователя
PUT /api/user/profile - обновление профиля
GET /api/user/balance - баланс
POST /api/user/balance/recharge - пополнение баланса

GET /api/bots - список ботов с фильтрацией
GET /api/bots/:id - информация о боте
POST /api/bots/:id/favorite - добавить в избранное
DELETE /api/bots/:id/favorite - убрать из избранного

GET /api/bots/:id/activities - активности бота
GET /api/bots/:id/status - текущий статус бота

GET /api/chats - чаты пользователя
POST /api/chats - создать чат с ботом
GET /api/chats/:id/messages - сообщения чата
POST /api/chats/:id/messages - отправить сообщение
```

## Структура компонентов

### 1. Основные страницы
- `App.vue` - корневой компонент
- `HomePage.vue` - главная страница
- `BotPage.vue` - страница бота
- `UserProfilePage.vue` - профиль пользователя
- `ChatPage.vue` - страница чата

### 2. Компоненты
- `AppHeader.vue` - хедер с балансом и профилем
- `HeroSection.vue` - hero секция на главной
- `BotCard.vue` - карточка бота
- `BotGrid.vue` - сетка ботов
- `BotInfo.vue` - информация о боте
- `ChatInterface.vue` - интерфейс чата
- `MessageList.vue` - список сообщений
- `MessageInput.vue` - поле ввода сообщения
- `ActivityFeed.vue` - лента активностей бота

### 3. Composables
- `useUser.ts` - управление пользователем
- `useBots.ts` - управление ботами
- `useChat.ts` - управление чатами
- `useActivities.ts` - управление активностями
- `useBalance.ts` - управление балансом

## Логика интерфейса

### 1. Главная страница
- Хедер с балансом и кнопкой профиля
- Hero секция с описанием сервиса
- Каталог ботов (5 карточек)
- Фильтрация по статусам (онлайн/оффлайн, свободна/занята)

### 2. Карточка бота
- Фото бота
- Имя и возраст
- Статус (онлайн/оффлайн, свободна/занята)
- Текущая активность
- Индикатор настроения

### 3. Страница бота
- Подробная информация о боте
- Лента активностей
- Кнопка начала чата (если бот свободен)
- Кнопка добавления в избранное

### 4. Профиль пользователя
- Информация о пользователе
- Баланс и пополнение
- История чатов
- Список избранных ботов

### 5. Чат
- Список сообщений
- Поле ввода
- Индикатор статуса бота
- Счетчик стоимости сообщений

## Состояние приложения

### 1. Глобальное состояние (Pinia)
```typescript
// User Store
interface UserStore {
  user: User | null;
  balance: number;
  favoriteBots: string[];
  chatHistory: Chat[];
}

// Bots Store
interface BotsStore {
  bots: Bot[];
  currentBot: Bot | null;
  filters: {
    onlineOnly: boolean;
    freeOnly: boolean;
  };
}

// Chat Store
interface ChatStore {
  activeChat: Chat | null;
  messages: Message[];
  isTyping: boolean;
}
```

### 2. Локальное состояние
- Фильтры на главной странице
- Состояние форм
- UI состояния (модальные окна, загрузки)

## Тестовые данные

### Структура мок-данных
```typescript
// mockData/
├── users.ts
├── bots.ts
├── activities.ts
├── chats.ts
└── messages.ts
```

## Технические детали

### 1. Стилизация
- CSS модули или Tailwind CSS
- Адаптивный дизайн
- Темная/светлая тема

### 2. Роутинг
- Vue Router 4
- Защищенные маршруты
- Ленивая загрузка компонентов

### 3. HTTP клиент
- Axios или Fetch API
- Интерцепторы для авторизации
- Обработка ошибок

### 4. Валидация
- Vuelidate или Yup
- Валидация форм
- Обработка ошибок API

## Этапы разработки

1. **Этап 1** ✅ - Планирование структуры (текущий)
2. **Этап 2** - Создание базовой структуры проекта
3. **Этап 3** - Верстка главной страницы
4. **Этап 4** - Компоненты карточек ботов
5. **Этап 5** - Страница бота
6. **Этап 6** - Профиль пользователя
7. **Этап 7** - Интерфейс чата
8. **Этап 8** - Интеграция с API (когда будет готов бэкенд)

## Результирующая файловая структура проекта

```
vibegirls-app/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── avatars/
│   │   │   ├── bots/
│   │   │   └── icons/
│   │   └── styles/
│   │       ├── main.css
│   │       ├── variables.css
│   │       └── components/
│   │           ├── header.css
│   │           ├── bot-card.css
│   │           └── chat.css
│   ├── components/
│   │   ├── common/
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppFooter.vue
│   │   │   ├── LoadingSpinner.vue
│   │   │   └── Modal.vue
│   │   ├── home/
│   │   │   ├── HeroSection.vue
│   │   │   ├── BotGrid.vue
│   │   │   └── FilterPanel.vue
│   │   ├── bots/
│   │   │   ├── BotCard.vue
│   │   │   ├── BotInfo.vue
│   │   │   └── ActivityFeed.vue
│   │   ├── chat/
│   │   │   ├── ChatInterface.vue
│   │   │   ├── MessageList.vue
│   │   │   ├── MessageInput.vue
│   │   │   └── Message.vue
│   │   └── profile/
│   │       ├── UserProfile.vue
│   │       ├── BalanceCard.vue
│   │       └── FavoriteBots.vue
│   ├── views/
│   │   ├── HomePage.vue
│   │   ├── BotPage.vue
│   │   ├── UserProfilePage.vue
│   │   ├── ChatPage.vue
│   │   └── NotFoundPage.vue
│   ├── stores/
│   │   ├── user.ts
│   │   ├── bots.ts
│   │   ├── chat.ts
│   │   └── activities.ts
│   ├── composables/
│   │   ├── useUser.ts
│   │   ├── useBots.ts
│   │   ├── useChat.ts
│   │   ├── useActivities.ts
│   │   ├── useBalance.ts
│   │   └── useApi.ts
│   ├── types/
│   │   ├── user.ts
│   │   ├── bot.ts
│   │   ├── chat.ts
│   │   ├── activity.ts
│   │   └── api.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   ├── validators.ts
│   │   └── formatters.ts
│   ├── services/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── bots.ts
│   │   ├── chat.ts
│   │   └── user.ts
│   ├── mockData/
│   │   ├── users.ts
│   │   ├── bots.ts
│   │   ├── activities.ts
│   │   ├── chats.ts
│   │   └── messages.ts
│   ├── router/
│   │   └── index.ts
│   ├── App.vue
│   └── main.ts
├── tests/
│   ├── unit/
│   │   ├── components/
│   │   ├── composables/
│   │   └── utils/
│   └── e2e/
├── .env
├── .env.development
├── .env.production
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

