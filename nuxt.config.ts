// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { SITE_TITLE, SITE_DESCRIPTION } from "./src/utils/constants";

export default defineNuxtConfig({
  srcDir: "src/",
  app: {
    buildAssetsDir: "/_nuxt/",
    head: {
      title: SITE_TITLE,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: SITE_DESCRIPTION },
      ],
      htmlAttrs: {
        lang: "ja",
      },
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxtjs/device",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    server: {
      hmr: {
        clientPort: 3000,
        port: 24678,
        protocol: "ws",
      },
    },
  },
  css: ["~/assets/css/custom.css"],
  googleFonts: {
    families: {
      "Noto+Sans+JP": [400, 700],
    },
  },
  content: {
    highlight: {
      langs: ["html", "javascript", "css", "vue", "shell", "sh", "jsx"],
    },
    contentHead: false,
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
});
