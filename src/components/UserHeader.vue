<template>
    <header>
        <strong>Hello, {{ user.user?.username }}!</strong>
        <img :src="user.user?.avatar" :alt="user.user?.name">
        <Button @click="logout">
            <LogoutIcon />
            Logout
        </Button>
    </header>
</template>

<script setup lang="ts">
import LogoutIcon from './Icons/LogoutIcon.vue'
import { useUserStore } from '../store/user.store'
import Button from './Button.vue';
const user = useUserStore()

const logout = () => {
    user.$state = {
        user: null,
    }
}
</script>

<style scoped>
header {
    display: flex;
    margin-bottom: 1rem;
    width: 100vw;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
    background-color: #F3F4F6;
    border-bottom: 1px solid #ddd;
    box-shadow: 0px 2px 4px rgba(148, 125, 243, 0.2);
}

strong {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--black-text);
}

img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
}

button {
    line-height: 1;
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
}

button:hover {
    text-decoration: underline;
}
</style>