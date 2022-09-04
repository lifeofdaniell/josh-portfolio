<template>
  <div class="contact-section" :class="{ inner: isProjectPage }">
    <div class="billboard-container">
      <div class="billboard-wrapper">
        <div class="billboard" :class="{ inner: isProjectPage }">
          <div class="billboard-inner">
            <h1><strong>Let&#x27;s make great stuff together!</strong></h1>
            <div class="billboard-subtext" :class="{ inner: isProjectPage }">
              Feel free to reach out if you want to work with me or collaborate
              on a project. 👋🏾
            </div>
          </div>
          <div class="copyright">
            Copyright © {{ year }} Joshua Oladiti. All rights reserved
          </div>
        </div>
        <div class="billboard__double"></div>
        <div class="lamp"></div>
        <div class="lamp right"></div>
      </div>
      <div class="billboard-stand" :class="{ inner: isProjectPage }"></div>
    </div>
    <div class="contact-block" :class="{ inner: isProjectPage }">
      <a
        class="button mb-20 w-inline-block"
        href="mailto:joshuaoladiti.design@gmail.com">
        <div class="button__inner contact">
          <div>Email</div>
        </div>
        <div class="button__double"></div>
      </a>
      <a
        class="button mb-20 w-inline-block"
        href="https://www.behance.net/oladitij37378f"
        target="_blank">
        <div class="button__inner contact">
          <div>Behance</div>
        </div>
        <div class="button__double"></div>
      </a>
      <a
        class="button mb-20 w-inline-block"
        href="https://www.linkedin.com/in/joshua-oladiti-217286160/"
        target="_blank">
        <div class="button__inner contact">
          <div>Linkedin</div>
        </div>
        <div class="button__double"></div>
      </a>
      <a
        class="button mb-20 w-inline-block"
        href="https://twitter.com/_eljosh"
        target="_blank">
        <div class="button__inner contact">
          <div>Twitter</div>
        </div>
        <div class="button__double"></div>
      </a>
    </div>
    <div class="credits">
      <div class="sbold">
        Credits
      </div>
      <div>Motion Extras - Godwin Olatunde<br /></div>
      <div>Frontend Developer - Areola Daniel</div>
      <div class="button mt-50 w-inline-block" @click="goToHome">
        <div class="button__inner">
          <div>Back to Home</div>
        </div>
        <div class="button__double"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isProjectPage: Boolean
  },

  data() {
    return {
      year: new Date().getFullYear()
    }
  },

  methods: {
    closeMenu() {
      this.$store.commit('toggleMenu', false)
    },

    goToHome() {
      this.$router.push('/')
      this.closeMenu()
      this.$gsap.to('.container', {
        duration: 1,
        scrollTo: {
          x: '#hero'
        }
      })
    }
  }
}
</script>
