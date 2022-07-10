<template>
    <MyChats />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MyChats from '../components/MyChats.vue';
import { useUserStore } from '../store/user.store';

const user = useUserStore();
const userAvailable = ref();

user.$subscribe(() => userAvailable.value = user.$state.user != null);
</script>

<style scoped>
</style>