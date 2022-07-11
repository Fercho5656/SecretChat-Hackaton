<template>
  <div class="chat-card" :style="styles">
    <strong>{{ conversationDetails.uniqueName }}</strong>
    <p>Created by: {{ conversationDetails.createdBy }}</p>
  </div>
</template>

<script setup lang="ts">
import IConversationDetails from '../interfaces/IConversationDetails';
import { useGradient } from '../composables/useGradient';
import { computed } from 'vue';

interface Props {
  conversationDetails: IConversationDetails
}

defineProps<Props>()

const { gradient, color, randomDeg } = useGradient()

const styles = computed(() => {
  return gradient.value.length === 3
    ? `background-image: linear-gradient(${randomDeg.value}deg, ${gradient.value[0]} 0%, ${gradient.value[1]} 52%, ${gradient.value[2]} 90%)`
    : `background-image: linear-gradient(${randomDeg.value}deg, ${gradient.value[0]} 0%, ${gradient.value[1]} 100%)`
})

</script>

<style scoped>
.chat-card {
  cursor: pointer;
  background-color: v-bind('color');
  color: var(--white-text);
  padding: 0.75rem;
  border-radius: 4px;
  transition: transform 0.2s;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
}

.chat-card:hover {
  transform: translate(0.25rem, -0.25rem);
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
}
</style>