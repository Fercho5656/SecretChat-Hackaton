<template>
  <div class="message-wrapper" :class="localMessage ? 'message-in' : 'message-out'">
    <div class="message-content">
      <span>
        <svg viewBox="0 0 8 13" width="8" height="13">
          <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z" />
          <path d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z" />
        </svg>
      </span>
      <small>{{ message.author }}</small>
      <p>{{ message.body }}</p>
      <small class="date">{{ new Date().toDateString() }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import IMessage from '../interfaces/IMessage';
interface Props {
  message: IMessage
  localMessage: boolean
}
const props = defineProps<Props>()
</script>

<style scoped>
.message-wrapper {
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 0.5rem;
  max-width: 75%;
  border-radius: 0.5rem;
}

.message-content {
  position: relative;
  padding: 1rem;
  overflow-wrap: break-word;
}

.message-out {
  background-color: var(--primary-color);
  color: var(--white-text);
  align-self: flex-end;
  border-top-right-radius: 0;
}

.message-in {
  background-color: var(--secondary-color);
  color: var(--black-text);
  align-self: flex-start;
  border-top-left-radius: 0;
}

.date {
  display: block;
  text-align: right;
}

.message-out span {
  position: absolute;
  top: -3px;
  right: -7px;
}

.message-in span {
  position: absolute;
  top: -3px;
  left: -7px;
  transform: scaleX(-1);
}

.message-out path {
  fill: var(--primary-color);
}

.message-in path {
  fill: var(--secondary-color);
}
</style>