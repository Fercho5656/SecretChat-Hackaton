<template>
  <p>{{message.body}}</p>
  <small>{{message.author}}</small>
</template>

<script setup lang="ts">
import IMessage from '../interfaces/IMessage';
interface Props {
  message: IMessage
}
const props = defineProps<Props>()
</script>

<style scoped>
</style>