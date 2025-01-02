<template>
  <v-theme-provider>
    <v-layout>
      <TheHeader />
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </v-theme-provider>
</template>

<style>
html {
  font-size: 16px;
  font-family: "Noto Sans JP", sans-serif;
}
</style>

<style scoped>
:deep(.v-main) {
  padding-bottom: 3rem;
}
</style>
