<script setup lang="ts">
import useCounter from '@/composables/counter'
import TheTitle from './TheTitle.vue'

const { counter, increment, decrement } = useCounter()
</script>
<template>
  <div class="contador">
    <TheTitle>Titulo estático</TheTitle>
    <p :class="counter === 10 ? 'contador__green' : 'contador__black'">Contador: {{ counter }}</p>
    <button class="contador__button" v-if="counter < 10" @click="increment">Increment</button>
    <button class="contador__button" v-if="counter > 0" @click="decrement">Decrement</button>
  </div>
</template>

<style scoped>
.contador {
  margin: 1.3em;
}
.contador__button {
  font-size: 1.2em;
}
.contador__green {
  color: green;
}

.contador__black {
  color: black;
}
</style>
