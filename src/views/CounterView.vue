<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>

<style scoped>
div{
  width: 20%;
  border: 1px solid #000;
box-shadow: 1px 1px 1px 1px #000;
  margin-left: auto;
  margin-right: auto;

}

p{
  text-align: center;
}
button {
  margin: 5px;
  margin-left: 50px;
}

button:hover{
  background-color: #878686;
}
</style>