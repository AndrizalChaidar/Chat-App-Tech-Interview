<script lang="ts">
export default {
  props: {
    userId: String,
    chat: Object,
  },
}
</script>
<template>
  <div class="chat" :class="[chat?.id === userId ? 'chat-end' : 'chat-start']">
    <div class="chat-bubble" :class="[chat?.id === userId ? 'chat-bubble-primary' : '']">
      {{ chat?.chat }}
    </div>
  </div>
</template>
