<template>
    <header>
        <Button v-if="!showAnonymousInput" class="joinAnonymous" @click="showAnonymousInput = true">
            Join as anonymous
        </Button>
        <form @submit.prevent="handleFormSubmit" v-else>
            <Input v-model="anonimousName" placeholder="Enter your anonymous name" />
            <Button>Join</Button>
        </form>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../store/user.store';
import Button from './Button.vue'
import Input from './Input.vue'

const anonimousName = ref<string>('');
const showAnonymousInput = ref<boolean>(false)
const user = useUserStore()

const handleFormSubmit = () => {
    user.$patch({
        user: {
            email: 'a@a.com',
            name: anonimousName.value,
            username: anonimousName.value,
            token: `anonymous_${anonimousName.value}`,
            avatar: `https://i.pravatar.cc/150?u=${anonimousName.value}`,
        }
    })
}
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
.joinAnonymous {
    max-width: 200px;
}

form {
    display: flex;
    flex-flow: column;
    align-items: center;
}
</style>