<template>
  <div ref="scroll">
    <template v-for="message in messages" :key="message.body">
      <p>{{ message.body }}</p>
      <small>{{ message.author }}</small>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUpdated, ref } from 'vue';
import { useRoomStore } from '../store/room.store';
import Message from '../components/Message.vue';
import IMessage from '../interfaces/IMessage'

const roomStore = useRoomStore()
const room = computed(() => roomStore.room!)
const messages = ref<Array<IMessage>>([])

onMounted(() => {
  room.value.getMessages()
    .then((newMessages: any) => {
      messages.value = newMessages.items
      console.log(messages.value)
    })

  room.value.on('messageAdded', (message: IMessage) => {
    messages.value.push(message)
  })
})

</script>

<style scoped>
</style>