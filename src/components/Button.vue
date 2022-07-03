<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
button {
    font-family: inherit;
    font-size: 1.2rem;
    background-color: var(--primary-color);
    color: var(--white-text);
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-position: center;
    transition: background 0.8s;
}

button:hover {
    background: #7458ed radial-gradient(circle, transparent 1%, #7458ed 1%) center/15000%;
}

button:active {
    background-color: #9b86f4;
    background-size: 100%;
    transition: background 0s;
}
</style>