<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";
import { useDisplay } from "vuetify";

type Props = {
  thumbnail?: string;
  tags?: string[];
} & ParsedContent;

defineProps<Props>();

const { smAndUp } = useDisplay();
</script>

<template>
  <v-card class="card" flat>
    <nuxt-link
      :to="`${_path}/`"
      class="card-link"
      :class="{ 'card-link--mobile': !smAndUp }"
    >
      <v-container class="pa-0 card-container">
        <v-row justify="center">
          <v-img
            :src="thumbnail || DEFAULT_IMAGE_PATH"
            height="100%"
            class="card-image"
            :class="{
              'card-image--mobile': !smAndUp,
              'card-image--default': !thumbnail,
            }"
          />
        </v-row>
      </v-container>
      <v-card-title
        class="card-title"
        :class="{ 'card-title--mobile': !smAndUp }"
      >
        {{ title }}
      </v-card-title>
    </nuxt-link>
    <v-card-actions class="tag-list">
      <v-btn
        v-for="tag in tags"
        :key="tag"
        variant="tonal"
        :to="`/tags/${getTagSlug(tag)}/`"
        class="tag-button"
      >
        {{ tag }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.card-container {
  display: flex;
  place-content: center;
}

.card {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: subgrid;
  grid-row: 3 span;
  gap: 0;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: none;
  &:has(.card-link:focus-visible) {
    overflow: visible;
  }
}

.card-link {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: 2 span;
  padding: 1rem;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: rgb(var(--v-theme-primary));
  }
}
.card-link--mobile {
  :deep(.v-row) {
    margin: 0;
  }
}

.card-title {
  font-size: 0.9375rem;
  font-weight: 700;
  padding-inline: 0;
  line-height: 1.5rem !important;
  overflow: auto;
  white-space: normal;
}
.card-title--mobile {
  font-size: 1rem;
}

.card-image {
  padding-block: 1rem;
  object-fit: contain;
  max-width: 300px;
}
.card-image--mobile {
  padding-block: 0.5rem;
}
.card-image--default {
  max-width: 200px;
}

.tag-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0 0.5rem 1rem;
}
.tag-button {
  text-transform: none;
}
</style>
