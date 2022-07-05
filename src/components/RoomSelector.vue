<template>
    <form @submit.prevent="handleSubmit">
        <label>Introduce a Chat-ID</label>
        <Input v-model="roomId" placeholder="Chat-ID" />
        <Button>Join!</Button>
    </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { getAccessToken } from '../services/auth';
import { useUserStore } from '../store/user.store'
import { useRoomStore } from '../store/room.store'
import { createOrJoinRoom } from '../services/chat';
import { useRouter } from 'vue-router';
import Input from './Input.vue';
import Button from './Button.vue';

const roomId = ref<string>('');
const userStore = useUserStore()
const roomStore = useRoomStore()
const user = computed(() => userStore.user!)
const router = useRouter()

const handleSubmit = async () => {
    // no user or no token
    if (!user.value || user.value.token == null) return

    const accessToken = await getAccessToken(user.value.token)
    const roomToJoin = await createOrJoinRoom(roomId.value, accessToken)

    if (roomToJoin) {
        roomStore.room = roomToJoin
        router.push(`/chat/${roomId.value}`)
    }
};
</script>

<style scoped>
label {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;
    display: block;
    margin-bottom: 0.5rem;
}

form {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    max-width: 320px;
}

button {
    width: 100%;
}
</style>