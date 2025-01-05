// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { DEFAULT_IMAGE_PATH, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "./src/utils/constants";

export default defineNuxtConfig({
  srcDir: "src/",
  ssr: false,
  app: {
    baseURL: "/",
    head: {
      title: SITE_TITLE,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "og:site_name", name: "og:site_name", content: SITE_TITLE },
        { hid: "og:type", name: "og:type", content: "website" },
        { hid: "og:url", name: "og:url", content: SITE_URL },
        { hid: "og:image:secure_url", name: "og:image:secure_url", content: `${SITE_URL}${DEFAULT_IMAGE_PATH}` },
        { hid: "twitter:card", name: "twitter:card", content: "summary" },

        { hid: "og:title", name: "og:title", content: SITE_TITLE },
        { hid: "description", name: "description", content: SITE_DESCRIPTION },
        { hid: "og:description", name: "og:description", content: SITE_DESCRIPTION },
        { hid: "og:image", name: "og:image", content: `${SITE_URL}${DEFAULT_IMAGE_PATH}` },
        { hid: "og:image:alt", name: "og:image:alt", content: SITE_TITLE },
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
