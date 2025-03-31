import { ref } from 'vue'

export default function useCounter() {
  let counter = ref(0)

  function increment() {
    counter.value++
  }

  function decrement() {
    counter.value--
  }

  return {
    counter,
    increment,
    decrement,
  }
}
