<template>
    <div class="chat">
        <MyChats />
        <div class="vr" />
        <Room />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MyChats from '../components/MyChats.vue';
import Room from './Room.vue';
import { useUserStore } from '../store/user.store';

const user = useUserStore();
const userAvailable = ref();

user.$subscribe(() => userAvailable.value = user.$state.user != null);
</script>

<style scoped>
.chat {
    display: flex;
    flex-flow: row nowrap;
    width: 95vw;
}

.vr {
    position: static;
    width: 1px;
    height: 100%;
    background-color: #bbb
}
</style>