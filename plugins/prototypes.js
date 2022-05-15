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

Vue.prototype.$horizontalScroll = (refContainer) => {
  ScrollTrigger.matchMedia({
    // desktop
    '(min-width: 768px)': () => {
      // const horizontalScroll =
        gsap.to(refContainer, {
         force3D: false,
        x: () => -(refContainer.scrollWidth - window.innerWidth) + 'px',
        ease: 'none',
        scrollTrigger: {
          ease: 'none',
          trigger: refContainer,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 2,
          end: () => '+=' + refContainer.offsetWidth
        }
      })
      // const tl = gsap.timeline({})
      //  tl.to('.bus', {
      //   translateX: '18vw',
      //   force3D: false,
      //   scrollTrigger: {
      //     containerAnimation: horizontalScroll,
      //     ease: 'none',
      //     trigger: '.about-section',
      //     start: 'left 90%',
      //     scrub: true,
      //     end: 'left 0%'
      //   }
      //  })
      //  tl.to('.bus', {
      //   translateX: '36vw',
      //   force3D: false,
      //   scrollTrigger: {
      //     containerAnimation: horizontalScroll,
      //     ease: 'none',
      //     trigger: '.project-section.first',
      //     start: 'left 90%',
      //     scrub: true,
      //     end: 'left 0%'
      //   }
      //  }, '>')
      //  tl.to('.bus', {
      //   translateX: '54vw',
      //   force3D: false,
      //   scrollTrigger: {
      //     containerAnimation: horizontalScroll,
      //     ease: 'none',
      //     trigger: '.project-section.fun',
      //     start: 'left 90%',
      //     scrub: true,
      //     end: 'left 0%'
      //   }
      //  }, '>')
      //  tl.to('.bus', {
      //   translateX: '72vw',
      //   force3D: false,
      //   scrollTrigger: {
      //     containerAnimation: horizontalScroll,
      //     ease: 'none',
      //     trigger: '.contact-section',
      //     start: 'left 90%',
      //     scrub: true,
      //     end: 'left 0%'
      //   }
      //  }, '>')
    }
  })
}
