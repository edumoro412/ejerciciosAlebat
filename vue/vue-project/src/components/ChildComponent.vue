<script setup lang="ts">
defineProps<{
  parentFunction: () => void
  parentMessage: string
}>()
</script>
<template>
  <div>
    <button class="child-button" @click="parentFunction">Mostrar el mensaje del padre</button>
    <h1 v-if="parentMessage">{{ parentMessage }}</h1>
  </div>
</template>

<style scoped>
.child-button {
  margin-top: 1em;
}
</style>
