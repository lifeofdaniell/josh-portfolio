<template>
  <div class="bus-track">
    <div class="bus-stop" @click="goToHome"></div>
    <div class="bus-stop" @click="goToAbout"></div>
    <div class="bus-stop" @click="goToProjects"></div>
    <div class="bus-stop" @click="goToPlayground"></div>
    <div class="bus-stop" @click="goToContact"></div>
    <div class="bus"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$gsap.to('.container', {
        duration: 1,
        scrollTo: '#hero'
      })
    },

    goToAbout() {
      this.$gsap.to('.container', {
        duration: 1,
        scrollTo: '#about'
      })
    },

    goToProjects() {
      this.$gsap.to('.container', {
        duration: 1,
        scrollTo: '#client'
      })
    },

    goToPlayground() {
      this.$gsap.to('.container', {
        duration: 1,
        scrollTo: '#fun'
      })
    },

    goToContact() {
      this.$gsap.to('.container', {
        duration: 1,
        scrollTo: '#contact'
      })
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .bus {
    display: none;
  }
}
.bus-stop {
  cursor: pointer;
}
</style>
