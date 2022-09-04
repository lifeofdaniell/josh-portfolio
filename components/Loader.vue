<template>
  <div class="loader">
    <div class="bus-track white">
      <div class="loading-bus"></div>
    </div>
    <div class="loader-inner">
      <div class="logo white"></div>
      <div>
        <div class="loader-percentage">
          0%
        </div>
        <div class="loader-text">
          Loading Experience...
        </div>
        <!-- <img alt="" :src="testImage"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagesLoaded: 0,
      totalImages: 0,
      percent: 0,
      img: []
    }
  },

  mounted() {
    this.fetchImages()
  },

  methods: {
    async fetchImages() {
      const images = await this.$store.dispatch('fetchImages')
      this.img = images.map(a => a.url)
      this.totalImages = this.img.length
      this.imgLoaded()
      for (let i = 0; i < this.totalImages; i++) {
        const tImg = new Image()
        tImg.onload = this.imgLoaded
        tImg.onerror = this.imgLoaded
        tImg.src = this.img[i]
      }
    },

    imgLoaded() {
      this.imagesLoaded += 1
      this.percent = ((100 / this.totalImages) * this.imagesLoaded - 1) << 0
      document.querySelector(
        '.loading-bus'
      ).style.transform = `translateX(${this.percent}vw)`
      document.querySelector(
        '.loader-percentage'
      ).textContent = `${this.percent}%`
      if (this.imagesLoaded === this.totalImages) {
        return this.doneLoading()
      }
    },

    doneLoading() {
      setTimeout(function () {
        document.querySelector('.loader').style.opacity = 0
      }, 800)
      setTimeout(function () {
        document.querySelector('.loader').style.display = 'none'
      }, 1300)
    }
  }
}
</script>
