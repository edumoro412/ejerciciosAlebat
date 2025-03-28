<script setup lang="ts">
import TheCounter from './components/TheCounter.vue'
import ProductCard from './components/ProductCard.vue'
import mockProducts from './data/mock'

const tituloEstatico = 'Titulo Estático'
</script>

<template>
  <header>
    <div class="wrapper">
      <TheCounter />
      <ProductCard :products="mockProducts" />
    </div>
  </header>
</template>

<style></style>
