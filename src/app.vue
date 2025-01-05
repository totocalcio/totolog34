<script setup lang="ts">
//   title: SITE_TITLE,
//   meta: [
//     { name: "viewport", content: "width=device-width, initial-scale=1" },
//     { hid: "description", name: "description", content: SITE_DESCRIPTION },
//     { hid: "og:site_name", name: "og:site_name", content: SITE_TITLE },
//     { hid: "og:type", name: "og:type", content: "website" },
//     { hid: "og:description", name: "og:description", content: SITE_DESCRIPTION },
//     { hid: "og:title", name: "og:title", content: SITE_TITLE },
//     { hid: "og:url", name: "og:url", content: SITE_URL },
//     { hid: "og:image", name: "og:image", content: `${SITE_URL}${DEFAULT_IMAGE_PATH}` },
//     { hid: "og:image:secure_url", name: "og:image:secure_url", content: `${SITE_URL}${DEFAULT_IMAGE_PATH}` },
//     { hid: "og:image:alt", name: "og:image:alt", content: SITE_TITLE },
//     { hid: "twitter:card", name: "twitter:card", content: "summary" },
//   ],
//   htmlAttrs: {
//     lang: "ja",
//   },
// });
// useSeoMeta({
//   title: SITE_TITLE,
//   ogTitle: SITE_TITLE,
//   description: "top",
//   ogDescription: SITE_DESCRIPTION,
// });
const config = useRuntimeConfig();
console.log(config);
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
