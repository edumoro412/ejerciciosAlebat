<script setup lang="ts">
import { inject } from 'vue'

const message = inject('message')
</script>
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<style scoped>
.child-button {
  margin-top: 1em;
}
</style>
