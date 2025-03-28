<script setup lang="ts">
import { ref } from 'vue'
import TheTitle from './components/TheTitle.vue'

const tituloEstatico = 'Titulo Estático'
</script>

<template>
  <header>
    <div class="wrapper">
      <TheTitle :propTitle="tituloEstatico" />
    </div>
  </header>
</template>

<style></style>
