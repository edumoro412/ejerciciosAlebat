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
  <div class="contador">
    <TheTitle>Titulo estático</TheTitle>
    <p>Contador: {{ contador }}</p>
    <button class="contador__button" v-if="contador < 10" @click="increment">Increment</button>
    <button class="contador__button" v-if="contador > 0" @click="decrement">Decrement</button>
  </div>
</template>

<style scoped>
.contador {
  margin: 1.3em;
}
.contador__button {
  font-size: 1.2em;
}
</style>
