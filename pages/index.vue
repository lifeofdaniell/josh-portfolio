<template>
  <div>
    <Nav />
    <Menu />
    <BusTrack />
    <div ref="container" class="container">
      <div class="hero">
        <div class="hero-canvas__wrapper">
          <div class="hero-canvas">
            <div class="relative no-touch">
              <div class="hero-canvas__inner">
                <h1 class="h0">
                  Hello I&#x27;m Josh,<br>A Visual Designer<br>Based in <span class="yellow-bg">Lagos</span>
                </h1>
              </div>
              <div class="hero-canvas__subtext">
                <h5>I’m about to take you on a visual journey with me. Enjoy!</h5>
              </div>
              <a class="button w-inline-block" href="#">
                <div class="button__inner">
                  <div>View my journey</div>
                </div>
                <div class="button__double"></div>
              </a>
            </div>
            <div class="canvas-wrapper">
              <div class="w-embed">
                <canvas id="myArtboard" class="drawing" height="100%" width="100%"></canvas>
                <style>
                  .no-touch,
                  .tool-block {
                  pointer-events: none;
                  user-select: none;
                  }

                  .button {
                  pointer-events: auto;
                  }
                </style>
              </div>
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
      <div class="about-section">
        <div class="about-section__inner">
          <div>
            <div class="about-text__wrapper">
              <h3>I craft beautiful experiences &amp; solve business problems using design.</h3>
              <h5>
                I’m a T-shaped designer with over 3 years of experience. What makes me stand out is my intricate
                attention to details and this enables me always deliver highly executed projects. Currently I work
                with the rockstar design team at <a class="text-link" href="http://check-dc.com" target="_blank">Check
                  DC</a> where I also get to highly contribute on <a
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
                <a class="button w-inline-block" href="#">
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
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1652466044/portrait_14bc047765.jpg">
              </div>
              <div class="about-image__double"></div>
              <div class="about-image__hanger"></div>
            </div>
            <div class="about-image__subtext">
              <h5>
                When I’m not designing I’m either listening to SDC 🌴, The Cavemen 🌴 &amp; Burna Boy 🦍 or
                rewatching an old Al Pacino classic.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="project-section first">
        <div class="project-section__inner">
          <div class="project-section__header">
            <h2>Recent Projects</h2>
          </div>
          <div class="project-block__wrapper">
            <nuxt-link v-for="project in projectsData.data" :key="project.id" class="project-block w-inline-block" :to="'projects/' + project.attributes.slug">
              <div class="project-block__inner">
                <div class="project-image__block">
                  <img
                    alt=""
                    class="image"
                    loading="lazy"
                    :src="project.attributes.cover_image.data !== null
                      ? project.attributes.cover_image.data.attributes.url
                      : require('static/assets/images/placeholderimg.svg')">
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
      <div class="project-section fun">
        <div class="project-section__inner">
          <div class="project-section__header fun">
            <h2 class="no-margin">
              Fun Projects
            </h2>
            <div class="line"></div>
          </div>
          <div class="project-block__wrapper">
            <a class="project-block__wide w-inline-block" href="#">
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
            </a>
            <a class="project-block__wide w-inline-block" href="#">
              <div class="project-block__inner">
                <div class="project-image__block wide"><img
                  alt=""
                  class="image"
                  loading="lazy"
                  src="https://res.cloudinary.com/areoladaniel-com/image/upload/v1652466024/Frame_6_7aed7aa1b8.jpg"></div>
                <div class="project-details__block">
                  <div>Explore Music 🌴</div>
                </div>
              </div>
              <div class="project-block__double"></div>
              <div class="project-block__details bottom">Explore music 🌴 is a project dedicated to all alternative
                artistes in Nigeria that I am big fan of.</div>
            </a>
          </div>
        </div>
        <div class="bg-text">
          Fun Projects
        </div>
      </div>
      <div class="contact-section">
        <div class="billboard-container">
          <div class="billboard-wrapper">
            <div class="billboard">
              <div class="billboard-inner">
                <h1><strong>Let&#x27;s make great stuff together!</strong></h1>
                <div class="billboard-subtext">
                  Feel free to reach out if you want to work with me or collaborate on a project. 👋🏾
                </div>
              </div>
              <div class="copyright">
                Copyright © 2022 Joshua Oladiti. All rights reserved
              </div>
            </div>
            <div class="billboard__double"></div>
            <div class="lamp"></div>
            <div class="lamp right"></div>
          </div>
          <div class="billboard-stand"></div>
        </div>
        <div class="contact-block">
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
      return Promise.all([fetchProjects])
      .then((responses) => {
      const [projectsData] = responses
       return { projectsData }
      })
      .catch(responseError => error(responseError))
    },

    data () {
      return {}
    },

    head () {
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
        return 'Joshua Oladiti | Portfolio'
      }
    },

    mounted () {
      this.$nextTick(() => {
        this.$initWebflow()
      })
      this.$nuxt.$emit('update-locomotive')
      this.$horizontalScroll(this.$refs.container)
      this.styleProjects()
    },

    updated () {
      // this.styleProjects()
    },

    methods: {
      styleProjects() {
        const projects = document.querySelectorAll('.project-block')
        projects.forEach((item, index) => {
          if (index % 2 === 0) {
            item.classList.add('bottom')
          }
        })
      }
    }
  }

</script>
