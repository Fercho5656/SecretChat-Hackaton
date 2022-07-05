import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: async () => await import('../views/Home.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: async () => await import('../views/Chat.vue')
  },
  {
    path: '/chat/:id',
    name: 'ChatRoom',
    component: async () => await import('../views/Room.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
