<template>
  <div class="nav">
    <div class="hamburger" :class="menuOpen ? 'open' : ''" @click="toggleMenu">
      <div class="menu-line top"></div>
      <div class="menu-line mid"></div>
      <div class="menu-line bottom"></div>
    </div>
    <div class="nav-inner">
      <div class="nav-text">
        Visual Experience Designer - Joshua Oladiti&#x27;s Portfolio
      </div>
    </div>
    <nuxt-link
      aria-current="page"
      class="logo w-inline-block w--current"
      to="/"></nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    menuOpen() {
      return this.$store.getters.menuState
    }
  },

  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu', !this.menuOpen)
    }
  }
}
</script>

<style>
.nav {
  z-index: 102;
}
.hamburger {
  cursor: pointer;
}
.hamburger.open > .menu-line.top {
  transform: translate(0px, 10px) rotate(45deg);
}
.hamburger.open > .menu-line.bottom {
  transform: translate(0px, -10px) rotate(-45deg);
}
.hamburger.open > .menu-line.mid {
  opacity: 0;
  transform: translate(-100%, 0px);
}
.menu-line {
  transition-property: transform, opacity;
  transition-duration: 350ms, 350ms;
  transition-timing-function: ease, ease;
}
</style>
