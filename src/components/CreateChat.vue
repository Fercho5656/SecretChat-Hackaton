<template>
  <Teleport to="#modal">
    <Modal :show="showCreateChat" @close="showCreateChat = false">
      <form @submit.prevent="onCreateConversation">
        <Input v-model="conversationName" placeholder="Conversation Name" :required="true" />
        <Button type="secondary">Create</Button>
      </form>
    </Modal>
  </Teleport>
  <button class="add" @click="showCreateChat = true">
    <span>
      <PlusIcon />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import PlusIcon from './Icons/PlusIcon.vue';
import Modal from './Modal.vue';
import Button from './Button.vue';
import Input from './Input.vue';
import { createConversation } from '../services/chat';
import { useUserStore } from '../store/user.store';
import { getAccessToken } from '../services/auth';
import { useRoomStore } from '../store/room.store';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const roomStore = useRoomStore();
const router = useRouter()
const user = computed(() => userStore.user!);
const showCreateChat = ref<boolean>(false)
const conversationName = ref<string>('');

const onCreateConversation = async () => {
  if (!user.value || user.value.token == null) return

  const accessToken = await getAccessToken(user.value.token)
  const roomToJoin = await createConversation(conversationName.value, accessToken)
  if (roomToJoin) {
    roomStore.room = roomToJoin
    router.push(`/chat/${roomToJoin.sid}`)
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

form>button {
  padding: 0.25rem;
  width: 100%;
}

button.add {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;
  background-color: var(--secondary-color);
  color: var(--white-text);
  border-radius: 50%;
  border: none;
  padding: 0.5rem;
  font-size: 1.5rem;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

span {
  display: inline-block;
  transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

button:active span {
  transform: rotate(225deg);
}

button.add,
span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
}
</style>