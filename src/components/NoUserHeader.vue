<template>
    <header>
        <Button class="join" @click="signIn('google')">
            Sign in with Google
        </Button>
    </header>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref, watchEffect } from 'vue';
import { useUserStore } from '../store/user.store';
import { getUser } from '../services/session';
import supabase, { getSession, signIn, getAccessToken } from '../services/supabase';
import Button from './Button.vue'

const userStore = useUserStore()

const session = supabase.auth.session()
supabase.auth.onAuthStateChange(async (event, session) => {
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
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}

button {
    width: 100%;
}

.join {
    max-width: 200px;
}

form {
    display: flex;
    flex-flow: column;
    align-items: center;
}
</style>