export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Guangxi Cai - Digital Designer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: 'black',
    height: '2px',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-vite'],

  // Global style resources - https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: ['~/assets/css/config.scss', '~/assets/css/mixins.scss'],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // sourceMap: true,
          additionalData: `@import "@/assets/css/config.scss";@import "@/assets/css/mixins.scss"; `,
        },
      },
    },
  },

  /*
   ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
   */

  modules: ['@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
