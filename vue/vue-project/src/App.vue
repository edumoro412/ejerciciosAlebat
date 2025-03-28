<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">Home</RouterLink> | <RouterLink to="/catalog">Catalog</RouterLink> |
    </div>
    <RouterView />
  </header>
</template>
