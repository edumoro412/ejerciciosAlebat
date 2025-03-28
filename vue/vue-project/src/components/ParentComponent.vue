<script setup lang="ts">
import ChildComponent from './ChildComponent.vue'
import { ref } from 'vue'

const childMessage = ref('')
const receiveGreet = (mensaje: string) => {
  childMessage.value = mensaje
}
</script>
<template>
  <div>
    <ChildComponent @parent-greet="receiveGreet" />
    <p v-if="childMessage">{{ childMessage }}</p>
  </div>
</template>

<style scoped></style>
