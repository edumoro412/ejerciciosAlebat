<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const category = route.params.category;

const series = [
  {
    title: "spiderman",
  },
  {
    title: "superman",
  },
  {
    title: "aquaman",
  },
  {
    title: "flash",
  },
  {
    title: "mario munilla",
  },
];
</script>

<template>
  <div class="category-page">
    <h1>Series de la categoría: {{ category }}</h1>

    <div class="series-list">
      <h2>Series disponibles:</h2>
      <ul>
        <li v-for="(serie, index) in series" :key="index">
          <NuxtLink :to="`/series-bonitas/${category}/${serie.title}`">
            {{ serie.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
