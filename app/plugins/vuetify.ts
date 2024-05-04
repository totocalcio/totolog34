// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#eee',
    'primary-light': '#bb6bc9',
    'primary-dark': '#ddd',
    'primary-contrast-text': '#000',
    secondary: '#2979ff',
    'secondary-light': '#1c54b2',
    'secondary-dark': '#5393ff',
    'secondary-contrast-text': '#fff',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme,
      },
    },
  })
  app.vueApp.use(vuetify)
})
