<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />

      <TypingIndicator v-if="isTyping" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';
import TypingIndicator from './TypingIndicator.vue';

interface Props {
  messages: ChatMessage[];
  isTyping?: boolean;
}

const { messages, isTyping } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

watch(
  () => [messages, isTyping],
  () => {
    setTimeout(() => {
      chatRef.value?.scrollTo({
        top: chatRef.value.scrollHeight,
        behavior: 'smooth',
      });
    }, 50);
  },
  { deep: true },
);
</script>
