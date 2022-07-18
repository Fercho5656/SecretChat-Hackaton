<template>
  <header>
    <GoogleButton @click="onReturnChats">
      <Arrow />
    </GoogleButton>
    <h2 v-if="conversationName">{{ conversationName }}</h2>
    <button>⬅</button>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import GoogleButton from '../components/GoogleButton.vue'
import { useRoomStore } from '../store/room.store';
import Arrow from './Icons/Arrow.vue'

const roomStore = useRoomStore()
const router = useRouter()

interface Props {
  conversationName?: string
}

defineProps<Props>()

const onReturnChats = () => {
  roomStore.room = null
  router.push('/chat')
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;
  background-color: var(--secondary-color);
  width: 100%;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

button>svg {
  transform: scaleX(-1);
}
</style>