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
    baseURL: process.env.BASE_URL,
    mediaURL: process.env.MEDIA_URL,
    token: process.env.TOKEN
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Joshua Oladiti | Portfolio',
    meta: [...metaUtils()],
    link: [...linkUtils()],
    script: [...scriptUtils()]
  },

  trailingSlash: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios',
    '@/plugins/mixins',
    { src: '@/plugins/animation', ssr: false },
    { src: '@/plugins/both', ssr: false },
    { src: '@/plugins/client', ssr: false }
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
  },

  pageTransition: {
    name: 'exit',
    mode: 'out-in',
    css: false,
    appear: false,

    beforeEnter(el, done) {
      this.$gsap.set('.page-transition', {
        xPercent: 100
      })
    },

    enter(el, done) {
      const tl = this.$gsap.timeline({
        onComplete: done
      })
      tl.to('.page-transition', {
        delay: 0.25,
        xPercent: 200,
        duration: 0.75,
        ease: 'power2.inOut'
      })
    },

    beforeLeave(el, done) {
      this.$gsap.set('.page-transition', {
        xPercent: 0
      })
    },

    leave(el, done) {
      const tl = this.$gsap.timeline({
        onComplete: done
      })
      tl.to('.page-transition', {
        xPercent: 100,
        duration: 0.75,
        ease: 'power2.inOut'
      })
    }
  }
}
