import { useRouter } from 'vue-router'

/**
 * Composable для навигации с автоматическим скроллом наверх
 * 
 * @example
 * const { navigateTo } = useNavigation()
 * 
 * // Переход на страницу
 * navigateTo('/profile')
 * 
 * // Переход с параметрами
 * navigateTo('/bot/123')
 * 
 * // Переход назад
 * navigateTo('back')
 * 
 * // Переход с заменой истории
 * navigateTo('/home', { replace: true })
 */
export function useNavigation() {
  const router = useRouter()

  /**
   * Универсальный метод навигации
   * @param to - Путь для перехода или 'back' для возврата
   * @param options - Дополнительные опции навигации
   */
  const navigateTo = (
    to: string | 'back',
    options: {
      replace?: boolean
      scrollToTop?: boolean
    } = {}
  ) => {
    const { replace = false, scrollToTop = true } = options

    if (to === 'back') {
      router.back()
    } else {
      if (replace) {
        router.replace(to)
      } else {
        router.push(to)
      }
    }

    // Автоматический скролл наверх при переходе на новую страницу
    if (scrollToTop && to !== 'back') {
      // Небольшая задержка для корректного скролла после перехода
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }, 100)
    }
  }

  /**
   * Переход на главную страницу
   */
  const goHome = () => {
    navigateTo('/')
  }

  /**
   * Переход на страницу профиля
   */
  const goToProfile = () => {
    navigateTo('/profile')
  }

  /**
   * Переход на страницу бота
   * @param botId - ID бота
   */
  const goToBot = (botId: string) => {
    navigateTo(`/bot/${botId}`)
  }

  /**
   * Переход в чат с ботом
   * @param botId - ID бота
   */
  const goToChat = (botId: string) => {
    navigateTo(`/chat/${botId}`)
  }

  /**
   * Возврат назад
   */
  const goBack = () => {
    navigateTo('back')
  }

  return {
    navigateTo,
    goHome,
    goToProfile,
    goToBot,
    goToChat,
    goBack
  }
}
