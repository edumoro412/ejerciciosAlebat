<script setup lang="ts">
import mockProducts, { type Product } from '@/data/mock'
import { defineProps } from 'vue'

defineProps<{
  products: Product[]
}>()
</script>
<template>
  <div>
    <article class="producto" v-for="product in products" :key="product.title">
      <img :src="product.image" :alt="product.title" />
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <span class="producto__precio"> {{ product.price }}</span>
      <button>{{ product.button }}</button>
    </article>
  </div>
</template>

<style scoped>
.producto {
  margin-bottom: 2em;
}
.producto__precio {
  margin: 1em;
  text-decoration: underline;
  font-weight: bold;
}
</style>
