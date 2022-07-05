import { defineStore } from 'pinia'

interface IRoomStore {
  room: any | null
}

export const useRoomStore = defineStore('room', {
  state: (): IRoomStore => {
    return {
      room: null
    }
  }
})
