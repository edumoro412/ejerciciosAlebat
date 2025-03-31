<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import TheCounter from '@/components/TheCounter.vue'
import mockProducts from '@/data/mock'
</script>

<template>
  <div>
    <h1>Catalog Page</h1>
    <ProductCard v-for="product in mockProducts" :key="product.title" :product="product" />

    <TheCounter />
  </div>
</template>
