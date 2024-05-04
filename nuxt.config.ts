// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { SITE_TITLE, DESCRIPTION } from './app/utils/constants'

export default defineNuxtConfig({
  srcDir: 'app/',
  app: {
    buildAssetsDir: '/_nuxt/',
    head: {
      title: SITE_TITLE,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: DESCRIPTION },
      ],
      htmlAttrs: {
        lang: 'ja',
      },
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  googleFonts: {
    families: {
      'Noto+Sans+JP': [400, 700],
    },
  },
  css: ['~/assets/css/custom.css'],
  content: {
    highlight: {
      langs: ['html', 'javascript', 'css', 'vue'],
    },
  },
})
