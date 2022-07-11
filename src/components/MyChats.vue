<template>
  <CreateChat />
  <div class="conversations" v-if="conversations.length > 0">
    <div class="conversation" v-for="conversation in conversations" :key="conversation.SID"
      @click="onJoinConversation(conversation.SID)">
      <ChatCard :conversation-details="conversation" />
    </div>
  </div>
  <div v-else>
    <p>No conversations found</p>
  </div>
</template>

<script setup lang="ts">
import { getAccessToken } from '../services/auth';
import { getJoinedConversations, joinConversation } from '../services/chat';
import { onMounted, ref } from 'vue';
import { useUserStore } from '../store/user.store';
import { Conversation } from '@twilio/conversations';
import { useRouter } from 'vue-router';
import { useRoomStore } from '../store/room.store';
import IConversationDetails from '../interfaces/IConversationDetails'
import ChatCard from './ChatCard.vue';
import CreateChat from './CreateChat.vue';

const router = useRouter();
const roomStore = useRoomStore()
const userStore = useUserStore();
const conversations = ref<IConversationDetails[]>([])
const accessToken = ref<string>('')

onMounted(async () => {
  accessToken.value = await getAccessToken(userStore.user?.token!);
  const joinedConversations = await getJoinedConversations(accessToken.value);
  console.log(joinedConversations)
  conversations.value = joinedConversations.items.map((conversation: Conversation): IConversationDetails => {
    return {
      SID: conversation.sid,
      uniqueName: conversation.uniqueName!,
      createdBy: conversation.createdBy
    }
  })
})

const onJoinConversation = async (conversationSID: string) => {
  const conversation = await joinConversation(conversationSID, accessToken.value);
  if (conversation) {
    roomStore.room = conversation;
    router.push(`/chat/${conversationSID}`);
  }
}

</script>

<style scoped>
.conversations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin-top: 1rem;
}
</style>