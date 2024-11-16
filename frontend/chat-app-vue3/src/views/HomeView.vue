<script setup lang="ts">
import ChatHeader from '@/components/ChatHeader.vue'
import ChatList from '@/components/ChatList.vue'
import ChatInput from '@/components/ChatInput.vue'
import { onMounted, ref, watch, computed } from 'vue'
import { v4 } from 'uuid'

const userId = ref<string>()
const chats = ref<{ id: string; chat: string }[]>()

const socket = new WebSocket('ws://localhost:3000')

socket.addEventListener('message', (e) => {
  chats.value?.push(JSON.parse(e.data))
})
function submitMessage(message: string) {
  socket.send(JSON.stringify({ id: userId.value, chat: message }))
}
watch(chats, () => {})
onMounted(async () => {
  userId.value = v4()
  if (chats.value == undefined) {
    const res = await fetch('http://localhost:3000/chats')

    if (!res.ok) {
      throw Error('Fetching Error')
    }
    chats.value = await res.json()
  }
})
</script>

<template>
  <main class="grid-cols-1 h-screen w-screen justify-items-center content-center">
    <div class="h-3/4 w-1/2 bg-slate-300 border-4 border-slate-400/50">
      <div class="flex flex-col h-full">
        <ChatHeader />
        <ChatList :user-id="userId" :chats="chats" />
        <ChatInput @message="submitMessage" />
      </div>
    </div>
  </main>
</template>
