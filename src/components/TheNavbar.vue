<template>
    <nav>
        <AppLogo />
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Chat</a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import AppLogo from './Icons/AppLogo.vue'
</script>

<style scoped>
nav {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    background-color: var(--primary-color);
}

ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}

a {
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--white-text);
    text-decoration: none;
}

li {
    margin: 0.5rem;
}
</style>