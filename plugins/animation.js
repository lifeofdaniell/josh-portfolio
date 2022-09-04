import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

Vue.prototype.$gsap = gsap

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

Vue.prototype.$mountScrollTrigger = () => {
  ScrollTrigger.refresh(true)
}

Vue.prototype.$horizontalScroll = (refContainer) => {
  // ScrollTrigger.matchMedia({
  //   '(min-width: 768px)': () => {
  //     const scrollPanel = gsap.to(refContainer, {
  //       x: () =>
  //         -(refContainer.scrollWidth - document.documentElement.clientWidth) +
  //         'px',
  //       ease: 'none',
  //       force3D: false,
  //       scrollTrigger: {
  //         // scroller: refContainer,
  //         trigger: refContainer,
  //         markers: true,
  //         invalidateOnRefresh: true,
  //         end: () => refContainer.scrollWidth - window.innerWidth,
  //         pin: true,
  //         scrub: 2
  //       }
  //     })
  //     gsap.to('.bus', {
  //       scrollTrigger: {
  //         // scroller: refContainer,
  //         trigger: refContainer,
  //         start: 'left -1%',
  //         end: `+${refContainer.scrollWidth - window.innerWidth}`,
  //         scrub: true,
  //         containerAnimation: scrollPanel
  //       },
  //       x: () => document.documentElement.clientWidth - 50 + 'px',
  //       ease: 'none'
  //     })
  //   }
  // })
  // const scrollPanel = gsap.to(refContainer, {
  //   x: () =>
  //     -(refContainer.scrollWidth - document.documentElement.clientWidth) + 'px',
  //   ease: 'none',
  //   force3D: false,
  //   scrollTrigger: {
  //     // scroller: refScroller,
  //     trigger: refContainer,
  //     invalidateOnRefresh: true,
  //     end: () => refContainer.scrollWidth - window.innerWidth,
  //     pin: true,
  //     scrub: 2
  //   }
  // })
  // gsap.to('.bus', {
  //   scrollTrigger: {
  //     // scroller: refContainer,
  //     trigger: refContainer,
  //     start: 'left -1%',
  //     end: `+${refContainer.scrollWidth - window.innerWidth}`,
  //     scrub: true,
  //     containerAnimation: scrollPanel
  //   },
  //   x: () => document.documentElement.clientWidth - 50 + 'px',
  //   ease: 'none'
  // })
}

Vue.prototype.$floatingBox = () => {
  const bounce = gsap.timeline({ repeat: -1 })
  bounce
    .to('.tool-block', 1, { y: '-=10', ease: 'Sine.easeInOut' })
    .to('.tool-block', 1, { y: '+=10', ease: 'Sine.easeInOut' })

  const float = gsap.timeline({ repeat: -1 })
  float
    .to('.project-block', 1.5, { y: '-=15', ease: 'Sine.easeInOut' })
    .to('.project-block', 1.5, { y: '+=15', ease: 'Sine.easeInOut' })

  const wfloat = gsap.timeline({ repeat: -1 })
  wfloat
    .to('.project-block__wide', 1.5, { y: '+=15', ease: 'Sine.easeInOut' })
    .to('.project-block__wide', 1.5, { y: '-=15', ease: 'Sine.easeInOut' })
}

Vue.prototype.$swingingImage = () => {
  const swing = gsap.timeline({ repeat: -1, yoyo: true })
  swing.to('.about-image__wrapper', 1.5, {
    rotate: '+=1.5',
    ease: 'Sine.easeInOut'
  })
  swing.to('.about-image__wrapper', 1.5, {
    rotate: '-=3',
    ease: 'Sine.easeInOut'
  })
  swing.to('.about-image__wrapper', 1.5, {
    rotate: '+=3',
    ease: 'Sine.easeInOut'
  })
}
