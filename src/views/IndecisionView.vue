<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-green-700 p-4 text-white flex justify-between items-center">
      <span>The Lord of Truth</span>
      <span class="font-medium"
        ><a href="https://www.linkedin.com/in/leandro-aguirre/" target="_blank">LinkedIn</a></span
      >
    </div>
    <ChatMessages :messages="messages" :is-typing="isTyping" />
    <MessageBox @send-message="onMessage" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';

const { messages, isTyping, onMessage } = useChat();
</script>
