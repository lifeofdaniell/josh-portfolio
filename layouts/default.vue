<template>
  <div>
    <Nav />
    <PageExit />
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <Menu v-if="menuOpen" />
    </transition>
    <Nuxt />
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  computed: {
    menuOpen() {
      return this.$store.getters.menuState
    }
  },
  watch: {
    $route(to, from) {
      this.closeMenu()
    }
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        xPercent: -100
      })
    },

    enter(el, done) {
      gsap.to(el, {
        xPercent: 0,
        duration: 0.5,
        ease: 'Sine.easeInOut'
      })
      gsap.from(
        '.nav-link',
        {
          y: 20,
          autoAlpha: 0,
          stagger: 0.1
        },
        '>'
      )
    },

    leave(el, done) {
      gsap.to('.nav-link', {
        y: 15,
        autoAlpha: 0,
        stagger: 0.1
      })
      gsap.to(
        el,
        {
          xPercent: -100,
          duration: 0.5,
          ease: 'Sine.easeInOut',
          onComplete: done
        },
        '<+0.45'
      )
    },

    closeMenu() {
      this.$store.commit('toggleMenu', false)
    }
  }
}
</script>
