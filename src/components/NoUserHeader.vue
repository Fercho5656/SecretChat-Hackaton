<template>
    <div>
        <Button type="secondary" class="join" @click="signIn('google')">
            <p>Login</p>
        </Button>
    </div>
</template>

<script setup lang="ts">
import { signIn } from '../services/supabase';
import Button from './Button.vue'
</script>

<style scoped>
header {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}

form {
    display: flex;
    flex-flow: column;
    align-items: center;
}

p {
    font-weight: 500;
}
</style>