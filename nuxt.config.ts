// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "./src/utils/constants";

export default defineNuxtConfig({
  srcDir: "src/",
  ssr: false,
  app: {
    baseURL: "/",
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
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@zadigetvoltaire/nuxt-gtm",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error: vuetify plugin type mismatch
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
    experimental: {
      clientDB: true,
    },
    documentDriven: true,
  },

  site: {
    url: SITE_URL,
    name: SITE_TITLE,
    trailingSlash: true,
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      routes: ["/rss.xml"],
    },
  },

  gtm: {
    id: "GTM-PVNPNSX",
  },

  compatibilityDate: "2024-11-16",
});
