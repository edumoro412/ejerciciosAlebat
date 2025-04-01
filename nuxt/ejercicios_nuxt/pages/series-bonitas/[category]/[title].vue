<template>
  <div>
    <h2>Categoría: {{ category }}</h2>
    <h1>Título: {{ title }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const category = route.params.category;
const title = route.params.title;
</script>
