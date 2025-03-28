<script lang="ts" setup>
import { ref } from 'vue'
defineProps<{
  propTitle: {
    type: string
    required: true
  }
}>()
</script>
<template>
  <div>
    <h2>{{ propTitle }}</h2>
  </div>
</template>

<style>
h2 {
  font-size: 2em;
  text-decoration: underline;
}
</style>
