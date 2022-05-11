<template>
  <client-only>
    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        direction: 'vertical',
        smooth: true,
        getSpeed: true,
        multiplier: 0.5,
        lerp: 0.1,
        smartphone: {
          smooth: false
        },
        tablet: {
          smooth: true
        }
      }">
      <div class="welcome">
        Webflow x NuxtSSR x LocomotiveScroll x GSAP Boilerplate
      </div>
      <div class="welcome">
        Webflow x NuxtSSR x LocomotiveScroll x GSAP Boilerplate
      </div>
      <div class="welcome">
        Webflow x NuxtSSR x LocomotiveScroll x GSAP Boilerplate
      </div>
    </LocomotiveScroll>
  </client-only>
</template>

<script>
  export default {
    data () {
      return {
      }
    },

    head () {
      return {
        htmlAttrs: {
          lang: 'en',
          'data-wf-page': '',
          'data-wf-site': ''
        },
        title: this.title,
        meta: [...this.meta]
      }
    },

    computed: {
      meta () {
        return this.mxMetaUtils({
          title: this.title,
          description: this.description
        })
      },

      description () {
         return this.mxDescription
      },

      title () {
        return 'Nuxt SSR LocomotiveScroll GSAP Boilerplate'
      }
    },

    mounted () {
      this.$nextTick(() => {
        this.$initWebflow()
      })
      this.$nuxt.$emit('update-locomotive')
    },

    updated() {
       this.$initScrolltrigger(this.$refs.scroller.locomotive)
    },

    methods: {

    }
  }

</script>

<style>
.welcome {
  height: 100vh;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
