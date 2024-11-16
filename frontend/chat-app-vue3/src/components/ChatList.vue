<script lang="ts">
import Chat from './Chat.vue'

interface Chats {
  id: string
  chat: string
}

export default {
  components: { Chat },
  props: {
    userId: String,
    chats: Object,
  },
}
</script>
<template>
  <div class="bg-transparent border-b border-slate-800/10 w-full p-[2%] flex-grow overflow-auto">
    <Chat :user-id="userId" v-for="chat in chats" :chat="chat" />
  </div>
</template>
