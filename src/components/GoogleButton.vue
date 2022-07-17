<template>
  <button class="btn-google">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
.btn-google {
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: inherit;
  justify-content: center;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  width: 50px;
  height: 50px;
  padding: 0;
}

.btn-google:hover {
  background: #F6F9FE;
  color: #174ea6;
}

.btn-google:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.btn-google:focus {
  outline: 2px solid var(--primary-color);
}
</style>