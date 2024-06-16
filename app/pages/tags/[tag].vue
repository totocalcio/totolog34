<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
const route = useRoute()
const pageTitle = getTagName(route.params.tag as string)
const blogPostListAll = await queryContent('/blog')
  .where({ tags: { $contains: getTagName(route.params.tag as string) } })
  .find()

useHead({
  title: `${pageTitle} | ${SITE_TITLE}`,
})
</script>

<template>
  <h1 class="page-title">
    <PageTitleContainer :en="pageTitle" :ja="`${blogPostListAll.length}記事`" />
  </h1>
  <BlogPostListTag />
</template>

<style scoped>
.page-title {
  margin-top: 3rem;
}
</style>
