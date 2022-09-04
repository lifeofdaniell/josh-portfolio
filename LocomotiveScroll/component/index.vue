<template>
  <div v-locomotive="{ options }" class="js-locomotive">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LocomotiveScroll',
  directives: {
    locomotive: {
      inserted(el, binding, vnode) {
        vnode.context.locomotive = new vnode.context.LocomotiveScroll({
          el,
          ...binding.value.options
        })
        vnode.context.locomotive.on('scroll', (e) => {
          vnode.context.onScroll(e)
          vnode.context.$emit('scroll')
        })
        vnode.context.$emit('init')
      },
      unbind(el, binding, vnode) {
        vnode.context.locomotive.destroy()
        vnode.context.locomotive = undefined
      }
    }
  },
  props: {
    gettedOptions: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    locomotive: undefined,
    defaultOptions: {
      smooth: true
    }
  }),
  computed: {
    options() {
      return { ...this.defaultOptions, ...this.gettedOptions }
    }
  },
  /**
   *  You can remove mounted hook if you don't needs custom updates
   *  Call this.$nuxt.$emit('update-locomotive') wherever you want
   */
  mounted() {
    this.$nuxt.$on('update-locomotive', () => {
      this?.locomotive?.update()
    })
    this.$nuxt.$on('scrollTo', (target, options) => {
      this?.locomotive?.scrollTo(target, options)
    })
    this.$nuxt.$on('scroll', (obj) => {
      this?.locomotive?.scroll(obj)
    })
  },
  methods: {
    onScroll(e) {
      if (typeof this.$store._mutations['app/setScroll'] !== 'undefined') {
        this.$store.commit('app/setScroll', {
          isScrolling: this.locomotive.scroll.isScrolling,
          limit: { ...e.limit },
          ...e.scroll // x, y
        })
      }
    }
  }
}
</script>

<!-- <style>
html.has-scroll-smooth {
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.has-scroll-smooth body {
  overflow: hidden;
}

.has-scroll-smooth .js-locomotive {
  min-height: 100vh;
  opacity: 1 !important;
  width: auto;
  pointer-events: all !important;
  position: relative;
}

.js-locomotive::-webkit-scrollbar {
  display: none;
}

.has-scroll-smooth .js-locomotive.horizontal {
  /* width: 100%; */
  display: block;
}
@media screen and (max-width: 767px) {
  .js-locomotive {
    overflow-y: inherit !important;
  }
}
@media (min-width: 769px) {
  .has-scroll-smooth .js-locomotive.horizontal {
    width: fit-content;
    display: table;
  }
}
</style> -->
