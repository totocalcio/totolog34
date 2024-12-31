<script setup lang="ts">
import { useDisplay } from "vuetify";

const { smAndUp } = useDisplay();

type Props = {
  en: string;
  ja: string;
};

const props = defineProps<Props>();
</script>

<template>
  <client-only>
    <v-container
      class="page-title-container"
      fluid
      :class="{ 'page-title-container--mobile': !smAndUp }"
    >
      <PageTitle :="props" />
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
