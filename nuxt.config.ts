export default defineNuxtConfig({
  css: ['./assets/css/main.css'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },
  // features: {
  //   inlineStyles: true
  // },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@pinia/nuxt'
  ],
  fonts: {
    families: [
      {
        name: 'Roboto',
        weights: [400, 500, 600, 700]
      },
      {
        name: 'Inter',
        weights: [400, 500, 600, 700]
      },
      {
        name: 'Montserrat',
        weights: [400, 500, 600, 700]
      }
    ]
  }

})