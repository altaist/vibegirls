import type { Bot } from '@/types/bot';

export const mockBots: Bot[] = [
  {
    id: '1',
    name: 'Анна',
    age: 24,
    avatar: '/avatars/anna.jpg',
    isOnline: true,
    communicationStatus: 'free',
    currentActivity: 'Смотрит фильм',
    personality: {
      profession: {
        education: 'Высшее образование',
        position: 'Дизайнер'
      },
      appearance: {
        height: '165 см',
        weight: '55 кг',
        hairColor: 'Русые',
        hairStyle: 'Длинные',
        bodyType: 'Стройная'
      },
      character: {
        type: 'Экстраверт',
        trait: 'Оптимистка',
        hobby: 'Любит путешествия'
      },
      sociability: 85,
      romanticism: 70,
      openness: 60,
      mood: 75
    },
    isFavorite: false,
    lastMessageAt: new Date('2024-01-15T10:30:00')
  },
  {
    id: '2',
    name: 'Мария',
    age: 22,
    avatar: '/avatars/maria.jpg',
    isOnline: true,
    communicationStatus: 'busy',
    currentActivity: 'Общается с другом',
    personality: {
      profession: {
        education: 'Среднее специальное',
        position: 'Медсестра'
      },
      appearance: {
        height: '170 см',
        weight: '58 кг',
        hairColor: 'Темно-русые',
        hairStyle: 'Средние',
        bodyType: 'Спортивная'
      },
      character: {
        type: 'Интроверт',
        trait: 'Заботливая',
        hobby: 'Читает книги'
      },
      sociability: 45,
      romanticism: 80,
      openness: 40,
      mood: 60
    },
    isFavorite: true,
    lastMessageAt: new Date('2024-01-15T09:15:00')
  },
  {
    id: '3',
    name: 'Елена',
    age: 26,
    avatar: '/avatars/elena.jpg',
    isOnline: false,
    communicationStatus: 'free',
    currentActivity: 'Спит',
    personality: {
      profession: {
        education: 'Высшее образование',
        position: 'Маркетолог'
      },
      appearance: {
        height: '168 см',
        weight: '52 кг',
        hairColor: 'Блондинка',
        hairStyle: 'Короткие',
        bodyType: 'Худощавая'
      },
      character: {
        type: 'Амбиверт',
        trait: 'Целеустремленная',
        hobby: 'Йога и медитация'
      },
      sociability: 65,
      romanticism: 55,
      openness: 75,
      mood: 30
    },
    isFavorite: false,
    lastMessageAt: new Date('2024-01-14T23:45:00')
  },
  {
    id: '4',
    name: 'Ольга',
    age: 23,
    avatar: '/avatars/olga.jpg',
    isOnline: true,
    communicationStatus: 'free',
    currentActivity: 'Готовит ужин',
    personality: {
      profession: {
        education: 'Высшее образование',
        position: 'Повар'
      },
      appearance: {
        height: '172 см',
        weight: '60 кг',
        hairColor: 'Каштановые',
        hairStyle: 'Коса',
        bodyType: 'Полная'
      },
      character: {
        type: 'Экстраверт',
        trait: 'Веселая',
        hobby: 'Кулинария'
      },
      sociability: 90,
      romanticism: 65,
      openness: 85,
      mood: 85
    },
    isFavorite: false,
    lastMessageAt: new Date('2024-01-15T11:20:00')
  },
  {
    id: '5',
    name: 'Ирина',
    age: 25,
    avatar: '/avatars/irina.jpg',
    isOnline: true,
    communicationStatus: 'free',
    currentActivity: 'Слушает музыку',
    personality: {
      profession: {
        education: 'Высшее образование',
        position: 'Музыкант'
      },
      appearance: {
        height: '166 см',
        weight: '54 кг',
        hairColor: 'Рыжие',
        hairStyle: 'Волнистые',
        bodyType: 'Средняя'
      },
      character: {
        type: 'Интроверт',
        trait: 'Творческая',
        hobby: 'Играет на гитаре'
      },
      sociability: 40,
      romanticism: 90,
      openness: 50,
      mood: 70
    },
    isFavorite: true,
    lastMessageAt: new Date('2024-01-15T12:00:00')
  }
];
