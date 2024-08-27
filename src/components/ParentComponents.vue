<template>
    <div>
      <Child @send-text="handleText" />
      <p>Received Text: {{ receivedText }}</p>
    </div>
  </template>
  
  <script>
  import ChildComponents from './ChildComponents.vue';
  
  export default {
    components: { Child },
    data() {
      return {
        receivedText: ''
      };
    },
    methods: {
      handleText(text) {
        this.receivedText = text;
      }
    }
  }
  </script>
  