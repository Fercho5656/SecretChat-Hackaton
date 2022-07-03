import { defineStore } from 'pinia'
import User from '../interfaces/User'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {} as User | null
    }
  }
})
