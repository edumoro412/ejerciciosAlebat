<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import mockProducts from '@/data/mock'
</script>

<template>
  <div>
    <h1>Catalog Page</h1>
    <ProductCard :products="mockProducts" />
  </div>
</template>
