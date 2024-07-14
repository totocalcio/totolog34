<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();

const currentPage = ref(1);
const blogPostList = ref([] as ParsedContent[]);

const { refresh } = useAsyncData("blogPostList", async () => {
  const data = await queryContent("/blog")
    .sort({ date: -1 })
    .limit(PER_PAGE)
    .skip(PER_PAGE * (currentPage.value - 1))
    .find();
  blogPostList.value = data;
});

const blogPostListAll = await queryContent("/blog").find();
const pagenationLength = Math.ceil(blogPostListAll.length / PER_PAGE);

watchEffect(() => {
  refresh();
});
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
  <ThePagenation v-model="currentPage" :length="pagenationLength" />
</template>

<style>
.card-list {
  --margin-top-card-list: 2.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin-top: var(--margin-top-card-list);
  margin-bottom: 1rem;
}
</style>
