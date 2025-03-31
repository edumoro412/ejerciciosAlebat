import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const increment = () => {
    if (count.value < 10) count.value++
  }

  const decrement = () => {
    if (count.value > 0) count.value--
  }

  const doubleCount = computed(() => count.value * 2)

  return { count, increment, decrement, doubleCount }
})
