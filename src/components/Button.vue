<template>
    <button :class="type">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
interface Props {
    type?: 'primary' | 'secondary';
}

defineProps<Props>()
</script>

<style scoped>
button {
    font-family: inherit;
    font-size: 1.2rem;
    background-color: var(--primary-color);
    color: var(--white-text);
    border: none;
    border-radius: 8px;
    padding: 0 1rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-position: center;
    transition: background 0.8s;
}

button.secondary {
    background-color: #fff;
    color: var(--primary-color);
}

button:hover {
    background: #7458ed radial-gradient(circle, transparent 1%, #7458ed 1%) center/15000%;
    color: var(--white-text);
}

button:active {
    background-color: #9b86f4;
    color: var(--white-text);
    background-size: 100%;
    transition: background 0s;
}
</style>