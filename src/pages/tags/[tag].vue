<script setup lang="ts">
const route = useRoute();
const pageTitle = getTagName(route.params.tag as string);

const blogPostListAll = await queryContent("/blog")
  .where({ tags: { $contains: getTagName(route.params.tag as string) } })
  .find();

useSeoMeta({
  title: `${pageTitle} | ${SITE_TITLE}`,
  ogTitle: `${pageTitle} | ${SITE_TITLE}`,
  description: `${pageTitle}の記事一覧`,
  ogDescription: `${pageTitle}の記事一覧`,
  ogImage: DEFAULT_IMAGE_PATH,
});
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
