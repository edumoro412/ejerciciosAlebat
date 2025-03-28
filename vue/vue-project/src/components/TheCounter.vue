<script setup lang="ts">
import TheTitle from './TheTitle.vue'
import { ref } from 'vue'

const contador = ref(0)

function increment() {
  contador.value++
}

function decrement() {
  contador.value--
}
</script>
<template>
  <div>
    <TheTitle>Titulo estático</TheTitle>
    <p>Contador: {{ contador }}</p>
    <button v-if="contador < 10" @click="increment">Increment</button>
    <button v-if="contador > 0" @click="decrement">Decrement</button>
  </div>
</template>

<style scoped>
button {
  font-size: 0.5em;
}
</style>
