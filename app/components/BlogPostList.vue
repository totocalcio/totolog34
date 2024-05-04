<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()

const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').limit(5).find()
})
</script>

<template>
  <v-container
    class="pa-o card-list"
    fluid
    :style="{ '--margin-top-card-list': mdAndUp ? '2.5rem' : '1rem' }"
  >
    <TheCard
      v-for="blogPost in blogPostList"
      :key="blogPost._path"
      :="blogPost"
    />
  </v-container>
</template>

<style>
.card-list {
  --margin-top-card-list: 2.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin-top: var(--margin-top-card-list);
}
</style>
