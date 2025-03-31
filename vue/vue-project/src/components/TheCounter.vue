<script setup lang="ts">
import useCounter from '@/composables/counter'
import TheTitle from './TheTitle.vue'
import { computed, ref, watch } from 'vue'

const { counter, increment, decrement } = useCounter()
const multiply = computed(() => counter.value * 2)
let message = ref('')

watch(counter, (newValue, oldValue) => {
  if (newValue === 0) {
    message.value = 'Estás en el valor mínimo'
  } else if (newValue === 10) {
    message.value = 'Estás en el valor máximo '
  } else {
    message.value = 'Estás en los parámetros adecuados'
  }
})
</script>
<template>
  <div class="contador">
    <TheTitle>Titulo estático</TheTitle>
    <p :class="counter === 10 ? 'contador__green' : 'contador__black'">
      Contador: {{ counter }} <span> {{ message }}</span>
    </p>
    <p>El valor de {{ counter }} * 2 = {{ multiply }}</p>
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
