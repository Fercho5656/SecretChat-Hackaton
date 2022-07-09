<template>
  <ul>
    <li class="username"><strong>{{ user.name.split(' ')[0] }}</strong></li>
    <li @click="logout" class="logout">
      <a href="">
        Logout
        <LogoutIcon />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">

import IUser from '../interfaces/IUser';
import LogoutIcon from './Icons/LogoutIcon.vue';
import { useUserStore } from '../store/user.store';
import { signOut } from '../services/supabase';

interface Props {
  user: IUser;
}

defineProps<Props>()

const userStore = useUserStore()

const logout = async () => {
  await signOut()
  userStore.$state = {
    user: null,
  }
}

</script>

<style scoped>
ul {
  list-style: none;
  position: absolute;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: fit-content;
  padding: 0.5em;
  top: 7.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(80, 48, 229, 0.2);
  z-index: 10;
}

li {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

strong {
  font-weight: 500;
  font-size: 1.2rem;
}

li.username {
  align-self: center;
}

p {
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
}

a {
  display: inherit;
  align-items: center;
}

@media (min-width: 570px) {
  ul {
    top: 4rem;
    right: 1rem;
  }
}
</style>