<script setup lang="ts">
import { useDisplay } from "vuetify";

const route = useRoute();
const { mdAndUp } = useDisplay();

const currentPage = ref(1);

const { data: blogPostList, refresh } = await useAsyncData("blogPostList", () =>
  queryContent()
    .sort({ date: -1 })
    .limit(PER_PAGE)
    .skip(PER_PAGE * (currentPage.value - 1))
    .where({ tags: { $contains: getTagName(route.params.tag as string) } })
    .find());

const { data: blogPostListAll } = await useAsyncData("blogPostListAll", () =>
  queryContent().where({ tags: { $contains: getTagName(route.params.tag as string) } }).find());

const pagenationLength = Math.ceil((blogPostListAll.value?.length ?? 0) / PER_PAGE);

watch(
  currentPage,
  () => {
    refresh();
  },
);
</script>

<template>
  <client-only>
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
  </client-only>
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
