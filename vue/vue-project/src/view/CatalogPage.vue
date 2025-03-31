<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import TheCounter from '@/components/TheCounter.vue'
import mockProducts from '@/data/mock'
</script>

<template>
  <div>
    <h1>Catalog Page</h1>
    <ProductCard :products="mockProducts" />
    <TheCounter />
  </div>
</template>
