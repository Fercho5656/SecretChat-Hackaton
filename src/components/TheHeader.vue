<template>
    <header>
        <AppLogo />
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/chat">Chat</router-link>
                </li>
            </ul>
        </nav>
        <UserHeader v-if="userStore.user" />
        <NoUserHeader v-else />
    </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getUser } from '../services/session';
import supabase from '../services/supabase';
import { useUserStore } from '../store/user.store';
import AppLogo from './Icons/AppLogo.vue'
import NoUserHeader from './NoUserHeader.vue';
import UserHeader from './UserHeader.vue';

const userStore = useUserStore()

</script>

<style scoped>
header {
    background-color: var(--primary-color);
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
}

nav {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
}

ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}

a {
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--white-text);
    text-decoration: none;
}

li {
    margin: 0.5rem;
}
</style>