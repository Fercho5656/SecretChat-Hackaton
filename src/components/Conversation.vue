<template>
  <div class="messages">
    <template v-for="message in messages" :key="message.sid">
      <Message :message="message" :localMessage="user.name === message.author" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoomStore } from '../store/room.store';
import { useUserStore } from '../store/user.store';
import Message from '../components/Message.vue';
import IMessage from '../interfaces/IMessage'

const roomStore = useRoomStore()
const userStore = useUserStore()
const room = computed(() => roomStore.room!)
const user = computed(() => userStore.user!)
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
.messages {
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  padding: 0 1rem;
  padding-bottom: 3rem;
  overflow-y: scroll;
}
</style>