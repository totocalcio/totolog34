<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()

const getDensity = () => {
  if (smAndUp.value) {
    return 'default'
  }
  return 'compact'
}

const getStyleSnsLinkContainer = () => {
  if (smAndUp.value) {
    return {
      '--min-width-sns-link-container': '4rem',
      '--padding-sns-link-container': '1rem',
    }
  }
  return {
    '--min-width-sns-link-container': '2rem',
    '--padding-sns-link-container': '0.5rem',
  }
}
</script>

<template>
  <v-app-bar color="primary" elevation="0" :density="getDensity()">
    <div class="header-content">
      <div class="header-logo">
        <nuxt-link to="/">
          <v-btn variant="text" color="primary">
            <v-typography
              class="header-title"
              :class="smAndUp ? 'text-h5' : 'text-h6'"
              >{{ siteTitle }}</v-typography
            >
          </v-btn>
        </nuxt-link>
      </div>
      <div class="sns-links">
        <template v-for="(socialInfo, i) in socialInfoList" :key="i">
          <v-btn
            variant="text"
            color="primary"
            class="sns-link-container"
            :style="{ ...getStyleSnsLinkContainer() }"
            :href="socialInfo.url"
            target="_blank"
          >
            <SnsIcon :src="socialInfo.img.path" :alt="socialInfo.img.alt" />
          </v-btn>
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
  /* font-weight: 700; */
}
</style>
