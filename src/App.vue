<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <main>
    <router-view />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap');

:root {
  --primary-color: #5030e5;
  --primary-color-mid: #947df3;
  --primary-color-light: #ddd7fa;
  --secondary-color: #f5a547;
  --secondary-color-light: #f8c07f;
  --black-text: #222;
  --white-text: #fff;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--primary-color-light);
}

#app {
  font-family: 'Fredoka', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

main {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 72rem;
  margin: auto;
  position: relative;
}
</style>
