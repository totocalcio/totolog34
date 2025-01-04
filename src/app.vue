<script setup lang="ts">
useHead({
  title: SITE_TITLE,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: SITE_DESCRIPTION },
  ],
  htmlAttrs: {
    lang: "ja",
  },
});
useSeoMeta({
  twitterCard: "summary",
});
</script>

<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<style>
body {
  font-family: "Noto Sans JP", sans-serif;
}
</style>
