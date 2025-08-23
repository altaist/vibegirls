import { defineStore } from 'pinia'
import type { User } from '@/types/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    balance: 0,
    favoriteBots: [] as string[],
    isLoading: false,
    error: null as string | null
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    hasBalance: (state) => state.balance > 0,
    favoriteBotsCount: (state) => state.favoriteBots.length
  },

  actions: {
    async fetchUser() {
      this.isLoading = true
      this.error = null
      
      try {
        // TODO: Заменить на реальный API вызов
        // const response = await api.get('/user/profile')
        // this.user = response.data
        
        // Временные данные для разработки
        this.user = {
          id: '1',
          username: 'Пользователь',
          email: 'user@example.com',
          balance: 200,
          avatar: '/avatars/user.jpg',
          createdAt: new Date()
        }
        this.balance = 200
      } catch (error) {
        this.error = 'Ошибка загрузки профиля'
        console.error('Error fetching user:', error)
      } finally {
        this.isLoading = false
      }
    },

    async updateBalance(amount: number) {
      this.balance += amount
    },

    async addToFavorites(botId: string) {
      if (!this.favoriteBots.includes(botId)) {
        this.favoriteBots.push(botId)
      }
    },

    async removeFromFavorites(botId: string) {
      const index = this.favoriteBots.indexOf(botId)
      if (index > -1) {
        this.favoriteBots.splice(index, 1)
      }
    },

    async logout() {
      this.user = null
      this.balance = 0
      this.favoriteBots = []
    }
  }
})
