<template>
  <div class="menu">
    <div class="nav-link-wrapper">
      <div class="nav-link w-inline-block" @click="goToHome">
        <div>Home</div>
        <div class="bus link"></div>
      </div>
      <div class="nav-link w-inline-block" @click="goToAbout">
        <div>About Me</div>
        <div class="bus link"></div>
      </div>
      <div class="nav-link w-inline-block" @click="goToProjects">
        <div>Client Projects</div>
        <div class="bus link"></div>
      </div>
      <div class="nav-link w-inline-block" @click="goToPlayground">
        <div>Playground</div>
        <div class="bus link"></div>
      </div>
      <div class="nav-link w-inline-block" @click="goToContact">
        <div>Contact</div>
        <div class="bus link"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$store.commit('toggleMenu', false)
    },

    goToHome() {
      this.$router.push('/')
      this.closeMenu()
      if (window.innerWidth > 767) {
        this.$gsap.to('.container', {
          duration: 1,
          scrollTo: '#hero'
        })
      } else {
        this.$gsap.to(window, {
          duration: 1,
          scrollTo: '#hero'
        })
      }
    },

    goToAbout() {
      this.$router.push('/')
      this.closeMenu()
      if (window.innerWidth > 767) {
        this.$gsap.to('.container', {
          duration: 1,
          scrollTo: '#about'
        })
      } else {
        this.$gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: '#about',
            offsetY: 50
          }
        })
      }
    },

    goToProjects() {
      this.$router.push('/')
      this.closeMenu()
      if (window.innerWidth > 767) {
        this.$gsap.to('.container', {
          duration: 1,
          scrollTo: '#client'
        })
      } else {
        this.$gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: '#client',
            offsetY: 50
          }
        })
      }
    },

    goToPlayground() {
      this.$router.push('/')
      this.closeMenu()
      if (window.innerWidth > 767) {
        this.$gsap.to('.container', {
          duration: 1,
          scrollTo: '#fun'
        })
      } else {
        this.$gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: '#fun',
            offsetY: 50
          }
        })
      }
    },

    goToContact() {
      this.$router.push('/')
      this.closeMenu()
      if (window.innerWidth > 767) {
        this.$gsap.to('.container', {
          duration: 1,
          scrollTo: '#contact'
        })
      } else {
        this.$gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: '#contact',
            offsetY: 50
          }
        })
      }
    }
  }
}
</script>

<style>
.nav-link {
  cursor: pointer;
}

.nav-link:hover > .bus.link {
  opacity: 1;
  transform: translateX(0px);
}

.bus.link {
  left: auto;
  top: auto;
  transform: translateX(-200px);
  right: -100px;
  bottom: -10px;
  opacity: 0;
  transition: opacity 300ms ease, transform 500ms linear;
  /* transition-property: opacity;
  transition-duration: 400ms;
  transition-property: transform;
  transition-duration: 400ms; */
}

@media screen and (max-width: 991px) {
  .bus.link {
    right: -50px;
    bottom: -10px;
    width: 80px;
    height: 40px;
  }
}
@media screen and (max-width: 767px) {
  .bus.link {
    display: block;
  }
}
@media screen and (max-width: 479px) {
  .bus.link {
    width: 60px;
  }
}
</style>
