<template>
    <NoUserHeader v-if="!userAvailable" />
    <UserHeader v-else />
    <RoomSelector v-if="userAvailable" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NoUserHeader from '../components/NoUserHeader.vue'
import RoomSelector from '../components/RoomSelector.vue';
import UserHeader from '../components/UserHeader.vue';
import { useUserStore } from '../store/user.store';

const user = useUserStore();
const userAvailable = ref();

user.$subscribe(() => userAvailable.value = user.$state.user)
</script>

<style scoped>
</style>