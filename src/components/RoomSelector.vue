<template>
    <form>
        <label>Introduce a Chat-ID</label>
        <Input v-model="roomId" placeholder="Chat-ID" />
        <Button>Join!</Button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from './Input.vue';
import Button from './Button.vue';

const roomId = ref<string>('');
</script>

<style scoped>
label {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;
    display: block;
    margin-bottom: 0.5rem;
}

form {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    max-width: 320px;
}

button {
    width: 100%;
}
</style>