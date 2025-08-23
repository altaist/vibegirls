export const allActivities = [
  'Гуляю',
  'Мечтаю',
  'Катаюсь на велике',
  'Тренируюсь',
  'На учебе',
  'На работе',
  'Смотрю в окно',
  'Изучаю меню',
  'Смотрю на звезды',
  'Смотрю телек',
  'Смотрю фильм',
  'Общаюсь с другом',
  'Сплю',
  'Готовлю ужин',
  'Слушаю музыку',
  'Читаю книгу',
  'Рисую',
  'Играю на гитаре',
  'Делаю макияж',
  'Принимаю душ',
  'Пью кофе',
  'Занимаюсь йогой',
  'Говорю по телефону',
  'Проверяю почту',
  'Слушаю подкаст',
  'Планирую выходные',
  'Заказываю еду',
  'Смотрю TikTok',
  'Делаю селфи',
  'Покупаю одежду'
]

// Функция для получения случайного времени
export const getRandomTime = (): string => {
  const days = ['1 день назад', '2 дня назад', '3 дня назад']
  const times = ['утро', 'день', 'вечер']
  
  const randomDay = days[Math.floor(Math.random() * days.length)]
  const randomTime = times[Math.floor(Math.random() * times.length)]
  
  return `${randomDay}, ${randomTime}`
}

// Функция для получения случайных активностей с временем
export const getRandomActivitiesWithTime = (count: number): Array<{
  activity: string;
  time: string;
}> => {
  const shuffled = [...allActivities].sort(() => 0.5 - Math.random())
  const selectedActivities = shuffled.slice(0, count)
  
  return selectedActivities.map(activity => ({
    activity,
    time: getRandomTime()
  }))
}

// Функция для получения случайных активностей (для обратной совместимости)
export const getRandomActivities = (count: number): string[] => {
  const shuffled = [...allActivities].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
