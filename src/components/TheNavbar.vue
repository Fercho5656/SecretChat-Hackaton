<template>
    <nav>
        <AppLogo />
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/chat">Chat</router-link>
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