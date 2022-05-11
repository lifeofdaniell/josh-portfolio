import linkUtils from './commons/link-utils'
import scriptUtils from './commons/script-utils'
import metaUtils from './commons/meta-utils'
import * as pwaUtils from './commons/pwa-utils'
export default {
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

 env: {
    siteURL: process.env.SITE_URL,
    baseURL: process.env.BASE_URL
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt SSR LocomotiveScroll GSAP Boilerplate',
    meta: [...metaUtils()],
    link: [...linkUtils()],
    script: [...scriptUtils()]
  },

  trailingSlash: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/both.client',
    '@/plugins/client.client',
    '@/plugins/mixins',
    '@/plugins/prototypes',
    '@/plugins/axios',
    '@/plugins/filters',
    '@/plugins/component.client',
    '@/plugins/directive.client',
    '@/plugins/webflow.client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components

  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  generate: {
    fallback: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
      manifest: pwaUtils.getManifest()
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap']
  }
}
