<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
</script>

<template>
  <v-container
    fluid
    class="pa-0 site-title-container"
    :style="{
      '--margin-bottom-site-title-container': smAndUp ? '6.25rem' : '3.125rem',
    }"
  >
    <v-img src="/img/hero.jpg" max-height="700" cover />
    <h1 class="site-title" :class="{ 'site-title--is-mobile': !smAndUp }">
      うさぎが好きなエンジニアのブログ
      <br v-if="!smAndUp" />
      <small> Nuxt / Vue.js / jQuery / HTML / CSS </small>
    </h1>
  </v-container>
  <PageTitleContainer en="Article" ja="記事" />
  <div>test</div>
</template>

<style scoped>
.site-title-container {
  --margin-bottom-site-title-container: 6.25rem;

  margin-bottom: var(--margin-bottom-site-title-container);
}
.site-title {
  background-color: rgb(var(--v-theme-primary));
  text-align: center;
  font-size: 1.25rem;
  padding: 2rem;
  small {
    font-size: 0.75em;
  }
}
.site-title--is-mobile {
  font-size: 1rem;
  padding: 1rem;
}
</style>
