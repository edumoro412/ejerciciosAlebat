<script setup lang="ts">
import { provide, ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

provide('message', 'Message from the parent')
</script>
<template>
  <ChildComponent />
  <div></div>
</template>

<style scoped></style>
