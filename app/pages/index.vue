<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
</script>

<template>
  <v-container fluid class="pa-0">
    <v-img src="/img/hero.jpg" max-height="700px" width="100vw" />
    <h1 class="page-title" :class="{ 'page-title--is-mobile': !smAndUp }">
      うさぎが好きなエンジニアのブログ
      <br v-if="!smAndUp" />
      <small> Nuxt / Vue.js / jQuery / HTML / CSS </small>
    </h1>
  </v-container>
</template>

<style scoped>
.page-title {
  background-color: rgb(var(--v-theme-primary));
  text-align: center;
  font-size: 1.25rem;
  padding: 2rem;
  small {
    font-size: 0.75em;
  }
}
.page-title--is-mobile {
  font-size: 1rem;
  padding: 1rem;
}
</style>
