<script setup lang="ts">
import { ref } from 'vue'

// const Main = styled('main')`
//   max-width: 1140px;
//   margin-inline: auto;
// `

const title = ref('USA GIJUTSU')
const twitter = ref('')
const github = ref('')
const toolbarProps = ref({})
</script>

<template>
  <v-theme-provider>
    <v-layout>
      <Header />
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </v-theme-provider>
</template>

<style>
html {
  font-size: 16px;
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
