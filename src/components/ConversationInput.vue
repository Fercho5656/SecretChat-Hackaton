<template>
  <input @keydown="handleSendMessage" v-model="message" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoomStore } from '../store/room.store'
const roomStore = useRoomStore()
const room = computed(() => roomStore.room!)

const message = ref<string>('')

const handleSendMessage = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    room.value.sendMessage(message.value)
    message.value = ''
  }
}
</script>

<style scoped>
input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid var(--primary-color-mid);
}
</style>