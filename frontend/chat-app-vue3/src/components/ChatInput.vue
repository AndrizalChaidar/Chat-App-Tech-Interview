<script lang="ts">
export default {
  data() {
    return {
      message: '',
    }
  },
  emits: ['message'],
  methods: {
    handleMessage(this) {
      this.$emit('message', this.message)
      this.message = ''
    },
  },
}
</script>

<template>
  <div class="grid grid-cols-1 bg-transparent p-[1%] content-center">
    <div class="flex gap-2 items-center">
      <input
        ref="inputMessage"
        type="text"
        placeholder="Type here..."
        class="input input-bordered grow bg-transparent text-black"
        v-model="message"
        v-on:keyup.enter="handleMessage"
      />
      <button class="btn btn-ghost flex justify-center" @click="handleMessage">
        <img src="../assets/send-message.png" class="min-w-3 max-w-8 max-h-8" />
      </button>
    </div>
  </div>
</template>
