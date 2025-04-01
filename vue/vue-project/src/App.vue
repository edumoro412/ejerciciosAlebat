<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import FacebookIcon from './icon/FacebookIcon.vue'
import TwitterIcon from './icon/TwitterIcon.vue'
const socialMedia = ref([
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com', component: FacebookIcon },
  {
    name: 'Twitter',
    icon: 'twitter',
    url: 'https://www.twitter.com',
    component: TwitterIcon,
  },
])
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <component v-for="media in socialMedia" :key="media.name" :is="media.component">
        </component>
      </nav>
      <RouterLink to="/">Home</RouterLink> | <RouterLink to="/catalog">Catalog</RouterLink> |
      <RouterLink to="/parent">Parent</RouterLink>
    </div>
    <RouterView />
  </header>
</template>
