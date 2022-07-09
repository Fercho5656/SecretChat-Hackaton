<template>
    <div>
        <picture @click="showDropdown = true" ref="pictureRef">
            <source srcset="../assets/logo.png">
            <img :src="user.user?.avatar" :alt="user.user?.name">
            <DropdownProfile v-if="showDropdown" :user="user.user!" />
        </picture>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../store/user.store'
import { useClickOutside } from '../composables/useClickOutside'
import DropdownProfile from './DropdownProfile.vue';

const user = useUserStore()
const pictureRef = ref<HTMLElement>()
const showDropdown = ref<boolean>(false)

useClickOutside(pictureRef, () => showDropdown.value = false)

</script>

<style scoped>
picture {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
}

picture:hover img {
    background-color: var(--primary-color-light);
    box-shadow: 0px 0px 30px 2px rgba(255, 255, 255, 0.2);
}

img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    transition: background-color 0.5s, box-shadow 0.5s;
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