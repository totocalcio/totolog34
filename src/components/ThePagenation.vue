<script setup lang="ts">
type Props = {
  length: number;
};

defineProps<Props>();
const model = defineModel<number>();
</script>

<template>
  <v-pagination v-model="model" :length />
</template>
