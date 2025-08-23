import type { Bot } from '@/types/bot';

export const mockBots: Bot[] = [
  {
    id: '1',
    name: 'Анна',
    age: 24,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop&crop=face',
    isOnline: true,
    communicationStatus: 'free',
    currentActivity: 'Смотрю фильм',
    mood: 'Веселая',
    description: 'Привет! Я Анна, дизайнер по профессии и оптимистка по натуре. Люблю создавать красивые вещи и путешествовать по миру. Всегда открыта к новым знакомствам и интересным разговорам. В свободное время рисую, читаю книги и готовлю вкусные блюда.',
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
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=800&fit=crop&crop=face',
    isOnline: true,
    communicationStatus: 'busy',
    currentActivity: 'Общаюсь с другом',
    mood: 'Сосредоточенная',
    description: 'Здравствуйте! Меня зовут Мария, я медсестра. Люблю заботиться о людях и помогать им. В свободное время читаю книги, особенно люблю романы и психологию. Ищу серьезные отношения с умным и добрым человеком.',
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
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop&crop=face',
    isOnline: false,
    communicationStatus: 'free',
    currentActivity: 'Сплю',
    mood: 'Спокойная',
    description: 'Привет! Я Елена, маркетолог по профессии. Люблю йогу и медитацию, это помогает мне оставаться спокойной и уравновешенной. Целеустремленная и люблю планировать все заранее. Ищу гармоничные отношения.',
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
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=800&h=800&fit=crop&crop=face',
    isOnline: true,
    communicationStatus: 'free',
    currentActivity: 'Готовлю ужин',
    mood: 'Веселая',
    description: 'Привет! Я Ольга, повар по профессии и страстная кулинарка. Люблю готовить вкусные блюда и радовать людей. Веселая и общительная, всегда найду тему для разговора. Ищу человека, который ценит домашний уют и вкусную еду.',
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
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop&crop=face',
    isOnline: true,
    communicationStatus: 'free',
    currentActivity: 'Слушаю музыку',
    mood: 'Задумчивая',
    description: 'Привет! Я Ирина, музыкант и творческая личность. Люблю играть на гитаре и сочинять музыку. Романтичная и мечтательная, ищу человека, который понимает искусство и ценит душевность. Люблю долгие разговоры под звездами.',
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
  },
  {
    id: '6',
    name: 'Наталья',
    age: 21,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=800&fit=crop&crop=face',
    isOnline: true,
    communicationStatus: 'busy',
    currentActivity: 'Тренируюсь',
    mood: 'Энергичная',
    description: 'Привет! Я Наталья, фитнес-тренер и спортсменка. Люблю активный образ жизни и помогаю людям быть здоровыми. Энергичная и целеустремленная, всегда в движении. Ищу человека, который разделяет мою любовь к спорту и здоровому образу жизни.',
    personality: {
      profession: {
        education: 'Среднее специальное',
        position: 'Фитнес-тренер'
      },
      appearance: {
        height: '168 см',
        weight: '56 кг',
        hairColor: 'Темно-русые',
        hairStyle: 'Короткие',
        bodyType: 'Спортивная'
      },
      character: {
        type: 'Экстраверт',
        trait: 'Энергичная',
        hobby: 'Спорт и фитнес'
      },
      sociability: 80,
      romanticism: 60,
      openness: 70,
      mood: 80
    },
    isFavorite: false,
    lastMessageAt: new Date('2024-01-15T13:30:00')
  }
];
