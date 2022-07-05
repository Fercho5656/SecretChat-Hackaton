import { defineStore } from 'pinia'
import User from '../interfaces/User'

interface IUserStore {
  user: User | null
}

export const useUserStore = defineStore('user', {
  state: (): IUserStore => {
    return {
      user: null
    }
  }
})
