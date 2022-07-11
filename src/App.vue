<script setup lang="ts">
import { onMounted } from 'vue';
import TheHeader from './components/TheHeader.vue'
import { getUser } from './services/session';
import supabase from './services/supabase';
import { useUserStore } from './store/user.store';

const userStore = useUserStore()

const session = supabase.auth.session()
onMounted(async () => {
  if (session != null) {
    const user = await getUser(session)
    userStore.user = user
  }
})

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

</script>

<template>
  <TheHeader />
  <main>
    <router-view />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap');

:root {
  --primary-color: #5030e5;
  --primary-color-mid: #947df3;
  --primary-color-light: #ddd7fa;
  --secondary-color: #f5a547;
  --secondary-color-light: #f8c07f;
  --black-text: #222;
  --white-text: #fff;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--primary-color-light);
}

#app {
  font-family: 'Fredoka', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

main {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 72rem;
  margin: auto;
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
