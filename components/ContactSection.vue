<template>
  <div class="contact-section" :class="{ inner: isProjectPage }">
    <div class="billboard-container">
      <div class="billboard-wrapper">
        <div class="billboard" :class="{ inner: isProjectPage }">
          <div class="billboard-inner">
            <h1><strong>Let&#x27;s make great stuff together!</strong></h1>
            <div class="billboard-subtext" :class="{ inner: isProjectPage }">
              Feel free to reach out if you want to work with me or collaborate on a project. 👋🏾
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
      <a class="button mb-20 w-inline-block" href="#">
        <div class="button__inner contact">
          <div>Email</div>
        </div>
        <div class="button__double"></div>
      </a>
      <a class="button mb-20 w-inline-block" href="#">
        <div class="button__inner contact">
          <div>Behance</div>
        </div>
        <div class="button__double"></div>
      </a>
      <a class="button mb-20 w-inline-block" href="#">
        <div class="button__inner contact">
          <div>Linkedin</div>
        </div>
        <div class="button__double"></div>
      </a>
      <a class="button mb-20 w-inline-block" href="#">
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
      <div>Motion Extras - Godwin Olatunde<br></div>
      <div>Frontend Developer - Areola Daniel</div>
      <a class="button mt-50 w-inline-block" href="#">
        <div class="button__inner">
          <div>Back to Home</div>
        </div>
        <div class="button__double"></div>
      </a>
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
  }
}
</script>

<style scoped>
.contact-section.inner{
  flex-wrap: nowrap;
  overflow: hidden;
}
</style>
