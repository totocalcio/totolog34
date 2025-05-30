<script setup lang="ts">
import type { MarkdownRoot } from "@nuxt/content";

const { path } = useRoute();

const MAX_DESCRIPTION_LENGTH = 120;

const removedTrailingSlashPath = path.replace(/\/$/, "");

const { data: blogPost } = await useAsyncData<any>(
  `content-${removedTrailingSlashPath}`,
  () => {
    return queryContent()
      .where({ _path: { $eq: removedTrailingSlashPath } })
      .findOne();
  },
);

function getDate(datetime: any) {
  if (!datetime) {
    return "";
  }
  return datetime.split(" ")[0];
}

const metaTitle = `${blogPost.value.title} | ${SITE_TITLE}`;

if (!blogPost.value.description) {
  const firstPElement = (blogPost.value.body as MarkdownRoot).children.find(
    element => element.type === "element" && element.tag === "p",
  );

  if (firstPElement && firstPElement.children) {
    const textContent = firstPElement.children
      .map((child) => {
        if (child.type === "text") {
          return child.value;
        }
        else if (
          child.type === "element"
          && child.children
          && child.children.length > 0
        ) {
          return child.children.map(grandchild => grandchild.value).join("");
        }
        return "";
      })
      .join("");

    blogPost.value.description = textContent.slice(0, MAX_DESCRIPTION_LENGTH);
  }
}
useSeoMeta({
  title: () => metaTitle,
  ogTitle: () => metaTitle,
  description: () => blogPost.value.description,
  ogDescription: () => blogPost.value.description,
  ogImage: () => blogPost.value.thumbnail ?? DEFAULT_IMAGE_PATH,
});
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
        :to="`/tags/${getTagSlug(tag)}`"
        class="tag-button"
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
  scroll-margin-top: 4rem;
}
:deep(a[href^="#"]) {
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
}
:deep(pre) {
  padding: 1rem;
  margin-top: 1rem;
  background-color: rgb(var(--v-theme-primary));
  white-space: pre-wrap;
}
:deep(code:not(pre code)) {
  font-weight: bold;
}
:deep(blockquote) {
  background-color: rgb(var(--v-theme-primary));
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  &::before {
    content: ">";
  }
}

.article-detail-container {
  width: min(900px, 100%);
}
.tag-list {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.tag-button {
  text-transform: none;
}
</style>
