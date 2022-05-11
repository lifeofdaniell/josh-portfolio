import Vue from 'vue'
import VueSocialSharing from 'vue-social-sharing'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Internal Imports
import * as utils from '@/commons/utils'

gsap.registerPlugin(ScrollTrigger)
Vue.prototype.$gsap = gsap

// <ShareNetwork .../>
Vue.use(VueSocialSharing)

if (!globalThis.document) {
  global.document = {}
}

for (const k in utils) {
  if (Object.hasOwnProperty.call(utils, k)) {
    const v = utils[k]
    Vue.prototype['$' + k] = v
  }
}

Vue.prototype.$initScrolltrigger = (refScroller) => {
  // const locomotive = this.$refs.scroller.locomotive
  const locomotive = refScroller
  locomotive.on('scroll', ScrollTrigger.update)
  ScrollTrigger.scrollerProxy(locomotive.el, {
    scrollTop(value) {
      return arguments.length
        ? locomotive.scrollTo(value, 0, 0)
        : locomotive.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  })
}
