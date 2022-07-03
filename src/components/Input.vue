<template>
    <input :placeholder="placeholder" :type="type" :required="required" :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<script setup lang="ts">
interface Props {
    placeholder?: string
    type?: string
    required?: boolean
    modelValue: number | string
}
defineProps<Props>()
</script>

<style scoped>
input {
    display: block;
    width: 100%;
    font-family: inherit;
    color: var(--black-text);
    background-color: #F3F4F5;
    border: 2px;
    border-radius: 8px;
    padding: 0.5rem;
    margin: 0.5rem;
    max-width: 100%;
    transition: border-color, box-shadow 0.2s ease-in-out;
}

input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
}
</style>