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
        <component :is="userStore.user ? UserHeader : NoUserHeader" />
    </header>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { getUser } from '../services/session';
import supabase from '../services/supabase';
import { useUserStore } from '../store/user.store';
import AppLogo from './Icons/AppLogo.vue'
import NoUserHeader from './NoUserHeader.vue';
import UserHeader from './UserHeader.vue';

const userStore = useUserStore()

const session = supabase.auth.session()
supabase.auth.onAuthStateChange(async (event, session) => {
    console.log('aaaa')
    if (event === 'SIGNED_IN' && session != null) {
        const user = await getUser(session)
        userStore.$patch({
            user: user
        })
    }

    if (event === 'SIGNED_OUT') {
        userStore.$state = {
            user: null,
        }
    }
})

onMounted(async () => {
    if (session != null) {
        const user = await getUser(session)
        userStore.user = user
    }
})


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