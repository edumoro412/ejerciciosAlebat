<script setup lang="ts">
import redirectHome from "~/middlewares/redirectHome";
definePageMeta({
  middleware: [redirectHome],
});
</script>

<template>
  <div>
    <h1>Esta es la página de productos</h1>
  </div>
</template>

<style scoped></style>
