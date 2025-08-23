import { defineStore } from 'pinia'
import type { Bot, BotFilters } from '@/types/bot'
import { mockBots } from '@/mockData/bots'

export const useBotsStore = defineStore('bots', {
  state: () => ({
    bots: [] as Bot[],
    currentBot: null as Bot | null,
    filters: {
      onlineOnly: false,
      freeOnly: false,
      ageRange: undefined as [number, number] | undefined,
      moodRange: undefined as [number, number] | undefined
    } as BotFilters,
    isLoading: false,
    error: null as string | null
  }),

  getters: {
    filteredBots: (state) => {
      let filtered = state.bots

      if (state.filters.onlineOnly) {
        filtered = filtered.filter(bot => bot.isOnline)
      }

      if (state.filters.freeOnly) {
        filtered = filtered.filter(bot => bot.communicationStatus === 'free')
      }

      if (state.filters.ageRange) {
        const [min, max] = state.filters.ageRange
        filtered = filtered.filter(bot => bot.age >= min && bot.age <= max)
      }

      if (state.filters.moodRange) {
        const [min, max] = state.filters.moodRange
        filtered = filtered.filter(bot => bot.personality.mood >= min && bot.personality.mood <= max)
      }

      return filtered
    },

    onlineBots: (state) => state.bots.filter(bot => bot.isOnline),
    freeBots: (state) => state.bots.filter(bot => bot.communicationStatus === 'free'),
    favoriteBots: (state) => state.bots.filter(bot => bot.isFavorite)
  },

  actions: {
    async fetchBots() {
      this.isLoading = true
      this.error = null
      
      try {
        // TODO: Заменить на реальный API вызов
        // const response = await api.get('/bots')
        // this.bots = response.data
        
        // Используем мок данные
        this.bots = mockBots
      } catch (error) {
        this.error = 'Ошибка загрузки ботов'
        console.error('Error fetching bots:', error)
      } finally {
        this.isLoading = false
      }
    },

    async fetchBot(id: string) {
      this.isLoading = true
      this.error = null
      
      try {
        // TODO: Заменить на реальный API вызов
        // const response = await api.get(`/bots/${id}`)
        // this.currentBot = response.data
        
        // Используем мок данные
        this.currentBot = this.bots.find(bot => bot.id === id) || null
      } catch (error) {
        this.error = 'Ошибка загрузки бота'
        console.error('Error fetching bot:', error)
      } finally {
        this.isLoading = false
      }
    },

    updateFilters(filters: Partial<BotFilters>) {
      this.filters = { ...this.filters, ...filters }
    },

    clearFilters() {
      this.filters = {
        onlineOnly: false,
        freeOnly: false,
        ageRange: undefined,
        moodRange: undefined
      }
    },

    toggleFavorite(botId: string) {
      const bot = this.bots.find(b => b.id === botId)
      if (bot) {
        bot.isFavorite = !bot.isFavorite
      }
    }
  }
})
