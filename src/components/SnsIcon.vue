<script setup lang="ts">
import { useDisplay } from "vuetify";

type Props = {
  src: string;
  alt: string;
};

defineProps<Props>();

const { smAndUp } = useDisplay();

function getWidthSnsIcon() {
  if (smAndUp.value) {
    return "1.5rem";
  }
  return "1.25rem";
}
</script>

<template>
  <div class="sns-icon" :style="{ '--width-sns-icon': getWidthSnsIcon() }">
    <img :src="src" :alt="alt">
  </div>
</template>

<style scoped>
.sns-icon {
  --width-sns-icon: 2rem;

  display: inline-block;
  width: var(--width-sns-icon);
  img {
    width: 100%;
  }
}
</style>
