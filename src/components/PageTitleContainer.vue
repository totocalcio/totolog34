<script setup lang="ts">
import { useDisplay } from "vuetify";

type Props = {
  en: string;
  ja: string;
};

const _props = defineProps<Props>();

const { smAndUp } = useDisplay();
</script>

<template>
  <client-only>
    <v-container
      class="page-title-container"
      fluid
      :class="{ 'page-title-container--mobile': !smAndUp }"
    >
      <PageTitle :="_props" />
    </v-container>
  </client-only>
</template>

<style scoped>
.page-title-container {
  margin-bottom: 2rem;
  padding: 0;
  text-align: center;
}
.page-title-container--mobile {
  margin-bottom: 1rem;
}
</style>
