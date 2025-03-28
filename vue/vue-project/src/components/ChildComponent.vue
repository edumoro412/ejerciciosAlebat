<script setup lang="ts">
const emit = defineEmits(['parent-greet'])

const sendGreet = () => {
  emit('parent-greet', 'Hola, componente padre')
}
</script>
<template>
  <div>
    <button class="child-button" @click="sendGreet">Pulsa para saludar al padre</button>
  </div>
</template>

<style scoped>
.child-button {
  margin-top: 1em;
}
</style>
