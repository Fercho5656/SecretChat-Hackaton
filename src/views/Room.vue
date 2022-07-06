<template>
  <h2>{{ roomStore.room.uniqueName }}</h2>
  <Conversation />
  <ConversationInput />
</template>

<script setup lang="ts">
import Conversation from '../components/Conversation.vue'
import ConversationInput from '../components/ConversationInput.vue'
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useRoomStore } from '../store/room.store'

const router = useRouter()
const roomStore = useRoomStore()

onBeforeMount(() => {
  // if there's no room, redirect to the home page
  if (roomStore.room == null) {
    router.push('/')
  }
})
</script>

<style scoped>
</style>