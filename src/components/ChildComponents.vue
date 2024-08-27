<template>
    <div>
      <input v-model="inputText" />
      <button @click="sendText">Send</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText: ''
      };
    },
    methods: {
      sendText() {
        this.$emit('send-text', this.inputText);
      }
    }
  }
  </script>
  