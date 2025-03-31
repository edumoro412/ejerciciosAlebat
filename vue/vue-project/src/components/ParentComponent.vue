<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const parentMessage = ref('Hola desde el padre')

function onClic() {
  parentMessage.value = 'Mensaje actualizado desde el padre'
}
</script>
<template>
  <ChildComponent :parentFunction="onClic" :parentMessage="parentMessage" />
  <div></div>
</template>

<style scoped></style>
