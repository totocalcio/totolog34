<script setup lang="ts">
const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

const getDate = (datetime) => {
  if (!datetime) {
    return ''
  }
  return datetime.split(' ')[0]
}
</script>

<template>
  <v-container fluid class="article-detail-container">
    <div>
      <time :datetime="getDate(blogPost.date)">{{
        getDate(blogPost.date)
      }}</time>
    </div>
    <h1>{{ blogPost.title }}</h1>
    <div v-if="blogPost.tags" class="tag-list">
      <v-btn
        v-for="tag in blogPost.tags"
        :key="tag"
        variant="tonal"
        density="compact"
        :to="tag"
      >
        {{ tag }}
      </v-btn>
    </div>
    <ContentDoc />
  </v-container>
</template>

<style scoped>
:deep(h1) {
  font-size: 1.5rem;
}
:deep(:is(h1, h2, h3, h4, h5, h6)) {
  margin-block: 1em;
}
:deep(a) {
  color: #000;
  text-decoration: none;
}
:deep(img) {
  max-width: 100%;
  object-fit: contain;
  margin-block: 1rem;
}
:deep(:is(ul, ol)) {
  margin-left: 1em;
  margin-block: 1rem;
  font-style: italic;
}
:deep(pre) {
  padding: 1rem;
  margin-top: 1rem;
  background-color: rgb(var(--v-theme-primary));
}
.article-detail-container {
  width: min(900px, 100%) !important;
}
.tag-list {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
</style>
