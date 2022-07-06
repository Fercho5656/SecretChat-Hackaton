import { defineStore } from 'pinia'
import IUser from '../interfaces/IUser'

interface IUserStore {
  user: IUser | null
}

export const useUserStore = defineStore('user', {
  state: (): IUserStore => {
    return {
      user: null
    }
  }
})
