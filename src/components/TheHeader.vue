<script setup lang="ts">
import type { VAppBar } from "vuetify/components";
import { useDisplay } from "vuetify";

type Density = VAppBar["density"];

const { smAndUp } = useDisplay();
const density = ref<Extract<Density, "default" | "comfortable">>("default");

const getStyleSnsLinkContainer = computed(() => {
  if (smAndUp.value) {
    return {
      "--min-width-sns-link-container": "4rem",
      "--padding-sns-link-container": "1rem",
    };
  }
  return {
    "--min-width-sns-link-container": "2rem",
    "--padding-sns-link-container": "0.5rem",
  };
});

onMounted(() => {
  density.value = smAndUp.value ? "default" : "comfortable";
});
</script>

<template>
  <v-app-bar color="primary" elevation="0" :density>
    <div class="header-content">
      <div class="header-logo">
        <nuxt-link to="/">
          <v-btn variant="text" color="primary">
            <v-img src="/img/hero.jpg" max-height="700" cover />
            <client-only>
              <div class="header-title" :class="smAndUp ? 'text-h5' : 'text-h6'">
                {{ SITE_TITLE }}
              </div>
            </client-only>
          </v-btn>
        </nuxt-link>
      </div>
      <div class="sns-links">
        <template v-for="(socialInfo, i) in SOCIAL_INFO_LIST" :key="i">
          <client-only>
            <v-btn
              variant="text"
              color="primary"
              class="sns-link-container"
              :style="{ ...getStyleSnsLinkContainer }"
              :href="socialInfo.url"
              target="_blank"
            >
              <SnsIcon :src="socialInfo.img.path" :alt="socialInfo.img.alt" />
            </v-btn>
          </client-only>
        </template>
      </div>
    </div>
  </v-app-bar>
</template>

<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.header-logo {
  display: flex;
  align-items: center;
}
.sns-link-container {
  --min-width-sns-link-container: 2rem;
  --padding-sns-link-container: 1rem;

  min-width: var(--min-width-sns-link-container);
  padding-inline: var(--padding-sns-link-container);
}
.sns-links {
  display: flex;
  gap: 0.625rem;
  padding-right: 1rem;
}
.header-title {
  color: #000;
}
</style>
