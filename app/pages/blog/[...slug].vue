<script setup lang="ts">
const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

const getDate = (dateTime) => {
  if (!dateTime) {
    return ''
  }
  return dateTime.split(' ')[0]
}
</script>

<template>
  <v-container fluid class="article-detail-container">
    <v-row>
      <v-col cols="12">
        <p>{{ getDate(blogPost.date) }}</p>
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
      </v-col>
    </v-row>
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
:deep(ul) {
  margin-left: 1em;
  margin-bottom: 1rem;
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
