<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCounterStore } from '@/stores/CounterStore'
import TheTitle from './TheTitle.vue'

const counterStore = useCounterStore()

let message = ref('')

watch(
  () => counterStore.count,
  (newValue) => {
    if (newValue === 0) {
      message.value = 'Estás en el valor máximo'
    } else if (newValue === 10) {
      message.value = 'Estás en el valor mínimo'
    } else {
      message.value = 'Estás en los parámetros adecuados'
    }
  },
)
</script>

<template>
  <div class="contador">
    <TheTitle>Titulo estático</TheTitle>
    <p :class="counterStore.count === 10 ? 'contador__green' : 'contador__black'">
      Contador: {{ counterStore.count }}
    </p>
    <p>El valor de {{ counterStore.count }} * 2 = {{ counterStore.doubleCount }}</p>
    <button class="contador__button" v-if="counterStore.count < 10" @click="counterStore.increment">
      Increment
    </button>
    <button class="contador__button" v-if="counterStore.count > 0" @click="counterStore.decrement">
      Decrement
    </button>
  </div>
</template>
