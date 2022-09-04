<template>
  <div class="noscroll">
    <BusTrack />

    <div ref="container" class="container" @scroll="moveBus">
      <div id="hero" class="hero">
        <div class="hero-canvas__wrapper">
          <div class="hero-canvas">
            <div class="relative no-touch">
              <div class="hero-canvas__inner">
                <h1 class="h0">
                  Hello I&#x27;m Josh,<br />A Visual Designer<br />Based in
                  <span class="yellow-bg">Lagos</span>
                </h1>
              </div>
              <div class="hero-canvas__subtext">
                <h5>
                  I’m about to take you on a visual journey with me. Enjoy!
                </h5>
              </div>
              <div class="button w-inline-block" @click="goToAbout">
                <div class="button__inner">
                  <div>View my journey</div>
                </div>
                <div class="button__double"></div>
              </div>
            </div>
            <div class="canvas-wrapper">
              <canvas
                id="myArtboard"
                class="drawing"
                height="100%"
                width="100%"></canvas>
            </div>
            <div class="tool-block ai"></div>
            <div class="tool-block ps"></div>
            <div class="tool-block figma"></div>
            <div class="tool-block id"></div>
            <div class="tool-block"></div>
          </div>
          <div class="hero-canvas__double"></div>
        </div>
      </div>
      <div id="about" class="about-section">
        <div class="about-section__inner">
          <div>
            <div class="about-text__wrapper">
              <h3>
                I craft beautiful experiences &amp; solve business problems
                using design.
              </h3>
              <h5>
                I’m a T-shaped designer with over 3 years of experience. What
                makes me stand out is my intricate attention to details and this
                enables me always deliver highly executed projects. Currently I
                work with the rockstar design team at
                <a
                  class="text-link"
                  href="http://check-dc.com"
                  target="_blank">Check DC</a>
                where I also get to highly contribute on
                <a
                  class="text-link"
                  href="http://nigerianmockups.com"
                  target="_blank">nigerianmockups.com</a>.
              </h5>
            </div>
            <div class="about-inner__flex">
              <div>
                <h5 class="sbold">
                  Services
                </h5>
                <ul class="service-list" role="list">
                  <li class="service-list__item">
                    <h5 class="no-margin">
                      Branding
                    </h5>
                  </li>
                  <li class="service-list__item">
                    <h5 class="no-margin">
                      User Interface Design
                    </h5>
                  </li>
                  <li class="service-list__item">
                    <h5 class="no-margin">
                      Publications
                    </h5>
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="sbold">
                  Want to know more?
                </h5>
                <a
                  class="button w-inline-block"
                  href="https://www.dropbox.com/s/s952d81odsz36wc/Joshua%20Oladiti%20Resume.pdf?dl=0"
                  target="_blank">
                  <div class="button__inner external">
                    <div>View my resume</div>
                  </div>
                  <div class="button__double"></div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="about-image__wrapper">
              <div class="about-image__block">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  sizes="298px"
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1652466044/portrait_14bc047765.jpg" />
              </div>
              <div class="about-image__double"></div>
              <div class="about-image__hanger"></div>
            </div>
            <div class="about-image__subtext">
              <h5>
                When I’m not designing I’m either listening to SDC 🌴, The
                Cavemen 🌴 &amp; Burna Boy 🦍 or rewatching an old Al Pacino
                classic.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div id="client" class="project-section first">
        <div class="project-section__inner">
          <div class="project-section__header">
            <h2>Recent Projects</h2>
          </div>
          <div class="project-block__wrapper">
            <nuxt-link
              v-for="project in projectsData.data"
              :key="project.id"
              class="project-block w-inline-block"
              :to="'projects/' + project.attributes.slug">
              <div class="project-block__inner">
                <div class="project-image__block">
                  <img
                    alt=""
                    class="image"
                    loading="lazy"
                    :src="
                      project.attributes.cover_image.data !== null
                        ? project.attributes.cover_image.data.attributes.url
                        : require('static/assets/images/placeholderimg.svg')
                    " />
                </div>
                <div class="project-details__block">
                  <div>
                    {{ project.attributes.name }}
                  </div>
                  <div class="project-type">
                    {{ project.attributes.project_type }}
                  </div>
                </div>
              </div>
              <div class="project-block__double"></div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div id="fun" class="project-section fun">
        <div class="project-section__inner">
          <div class="project-section__header fun">
            <h2 class="no-margin">
              Fun Projects
            </h2>
            <div class="line"></div>
          </div>
          <div class="project-block__wrapper">
            <!--   <a class="project-block__wide w-inline-block" href="#">
              <div class="project-block__inner">
                <div class="project-image__block wide"><img
                  alt=""
                  class="image"
                  loading="lazy"
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1652466022/Frame_5_c829c4f77e.jpg"></div>
                <div class="project-details__block">
                  <div>Moovies</div>
                </div>
              </div>
              <div class="project-block__double"></div>
              <div class="project-block__details">Moovies is a repository of nostalgic scenes from classic movies,
                sereis &amp; TV shows. Designed by me and developed by Tomide Alonge</div>
            </a> -->
            <a
              v-for="project in funProjectsData.data"
              :key="project.id"
              class="project-block__wide w-inline-block"
              :href="project.attributes.link"
              target="_blank">
              <div class="project-block__inner">
                <div class="project-image__block wide">
                  <img
                    alt=""
                    class="image"
                    loading="lazy"
                    :src="
                      project.attributes.cover_image.data !== null
                        ? project.attributes.cover_image.data.attributes.url
                        : require('static/assets/images/placeholderimg.svg')
                    " />
                </div>
                <div class="project-details__block">
                  <div>{{ project.attributes.name }}</div>
                </div>
              </div>
              <div class="project-block__double"></div>
              <div class="project-block__details bottom">
                {{ project.attributes.description }}
              </div>
            </a>
          </div>
        </div>
        <div class="bg-text">
          Fun Projects
        </div>
      </div>
      <ContactSection id="contact" />
    </div>
  </div>
</template>

<script>
if (!globalThis.document) {
  global.document = {}
}
export default {
  asyncData({ store, error }) {
    const fetchProjects = store.dispatch('fetchContent', {
      page: 'projects'
    })
    const fetchFunProjects = store.dispatch('fetchContent', {
      page: 'fun-projects?populate=cover_image'
    })
    return Promise.all([fetchProjects, fetchFunProjects])
      .then((responses) => {
        const [projectsData, funProjectsData] = responses
        return { projectsData, funProjectsData }
      })
      .catch(responseError => error(responseError))
  },

  data() {
    return {}
  },

  head() {
    return {
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '62409edd7b3a33dfad3b3e9f',
        'data-wf-site': '62409edd7b3a3354f43b3e9e'
      },
      title: this.title,
      meta: [...this.meta]
    }
  },

  computed: {
    meta() {
      return this.mxMetaUtils({
        title: this.title,
        description: this.description
      })
    },

    description() {
      return this.mxDescription
    },

    title() {
      return 'Joshua Oladiti | Portfolio'
    }
  },

  mounted() {
    this.$nuxt.$emit('update-locomotive')
    this.$floatingBox()
    this.$swingingImage()
    this.styleProjects()
    this.attachEvents()
  },

  methods: {
    styleProjects() {
      const projects = document.querySelectorAll('.project-block')
      projects.forEach((item, index) => {
        if (index % 2 === 0) {
          item.classList.add('bottom')
        }
      })
    },

    canvasDrawing() {
      // When true, moving the mouse draws on the canvas
      let isDrawing = false
      let x = 0
      let y = 0

      const myArtboard = document.getElementById('myArtboard')
      const context = myArtboard.getContext('2d')
      context.canvas.width = window.innerWidth
      context.canvas.height = window.innerHeight
      // event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

      // Add the event listeners for mousedown, mousemove, and mouseup
      window.addEventListener('resize', function resize() {
        context.canvas.width = window.innerWidth
        context.canvas.height = window.innerHeight
      })

      myArtboard.addEventListener('mousedown', (e) => {
        x = e.offsetX
        y = e.offsetY
        isDrawing = true
        console.log(isDrawing)
      })

      myArtboard.addEventListener('mousemove', (e) => {
        if (isDrawing === true) {
          drawLine(context, x, y, e.offsetX, e.offsetY)
          x = e.offsetX
          y = e.offsetY
        }
      })

      window.addEventListener('mouseup', (e) => {
        if (isDrawing === true) {
          drawLine(context, x, y, e.offsetX, e.offsetY)
          x = 0
          y = 0
          isDrawing = false
        }
      })

      function drawLine(context, x1, y1, x2, y2) {
        context.beginPath()
        context.strokeStyle = 'black'
        context.lineWidth = 2
        context.moveTo(x1, y1)
        context.lineTo(x2, y2)
        context.stroke()
        context.closePath()
      }
    },

    horizontalScroll(e) {
      e.currentTarget.scrollLeft += e.deltaY
    },

    attachEvents() {
      const scroller = document.querySelector('.container')
      if (window.innerWidth > 767) {
        scroller.addEventListener('mousewheel', this.horizontalScroll)
      } else {
        scroller.removeEventListener('mousewheel', this.horizontalScroll)
      }
    },

    moveBus(e) {
      const bus = document.querySelector('.bus')
      this.$gsap.to(bus, {
        left: `${(e.target.scrollLeft / e.target.scrollWidth) * 100 + 10}vw`
      })
    },

    goToAbout() {
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
    }
  }
}
</script>

<style>
.noscroll {
  overflow: hidden;
}

.button__inner {
  right: 0px;
  bottom: 0px;
  transition: bottom 300ms ease, right 300ms ease;
}

.button:hover > .button__inner {
  right: -5px;
  bottom: -5px;
}
.about-image__wrapper {
  transform-origin: 50% 0%;
}
.about-section {
  overflow: hidden;
}
</style>
