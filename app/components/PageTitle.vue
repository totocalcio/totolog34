<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()

type Props = {
  en: string
  ja: string
}

defineProps<Props>()
</script>

<template>
  <h2 class="page-title" :class="{ 'page-title--mobile': !smAndUp }">
    {{ en }}
    <small class="d-block">{{ ja }}</small>
  </h2>
</template>

<style scoped>
.page-title {
  font-size: 2rem;
  small {
    font-size: 0.75rem;
  }
}
.page-title--mobile {
  font-size: 1.5rem;
}
</style>
