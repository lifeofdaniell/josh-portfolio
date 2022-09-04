<template>
  <div>
    <LocomotiveScroll
      id="whole-page"
      ref="scroller"
      :getted-options="{
        direction: 'vertical',
        smooth: true,
        multiplier: 1,
        lerp: 0.075
      }">
      <div class="project-hero">
        <img
          alt=""
          class="project-hero__image"
          loading="lazy"
          :src="
            singleProjectContent.attributes.project_image.data
              ? singleProjectContent.attributes.project_image.data[0].attributes
                .url
              : require('static/assets/images/placeholderimg.svg')
          " />
        <div class="project-credits">
          <div class="project-credits__inner">
            <h4 class="no-margin">
              Date Completed<br />
            </h4>
            <h4 class="no-margin">
              {{ singleProjectContent.attributes.year_created }}
            </h4>
          </div>
          <div class="project-credits__inner">
            <h4 class="no-margin">
              Project Type<br />
            </h4>
            <h4 class="no-margin">
              {{ singleProjectContent.attributes.project_type }}
            </h4>
          </div>
          <div
            v-if="singleProjectContent.attributes.owners"
            class="project-credits__inner">
            <h4 class="no-margin">
              Owners<br />
            </h4>
            <h4 class="no-margin">
              {{ singleProjectContent.attributes.owners }}
            </h4>
          </div>
          <div
            v-if="singleProjectContent.attributes.contributors"
            class="project-credits__inner">
            <h4 class="no-margin">
              Co-Contributors<br />
            </h4>
            <h4 class="no-margin">
              {{ singleProjectContent.attributes.contributors }}
            </h4>
          </div>
        </div>
        <div class="project-hero__overlay"></div>
      </div>
      <div class="project-content">
        <div class="project-content__container">
          <div class="project-brief__block">
            <div class="project-brief__text">
              <h2 class="no-margin">
                {{ singleProjectContent.attributes.first_project_text }}
              </h2>
            </div>
            <div class="project-brief__subtext">
              <p>
                {{ singleProjectContent.attributes.first_project_subtext }}
              </p>
            </div>
          </div>
          <div class="project-grid">
            <div class="project-grid__column wide">
              <div class="project-grid__image wide">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  :src="
                    singleProjectContent.attributes.project_image.data
                      ? singleProjectContent.attributes.project_image.data[1]
                        .attributes.url
                      : require('static/assets/images/placeholderimg.svg')
                  " />
              </div>
            </div>
            <div class="project-grid__column">
              <div class="project-grid__image">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  :src="
                    singleProjectContent.attributes.project_image.data
                      ? singleProjectContent.attributes.project_image.data[2]
                        .attributes.url
                      : require('static/assets/images/placeholderimg.svg')
                  " />
              </div>
            </div>
            <div class="project-grid__column">
              <div class="project-grid__image">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  :src="
                    singleProjectContent.attributes.project_image.data
                      ? singleProjectContent.attributes.project_image.data[3]
                        .attributes.url
                      : require('static/assets/images/placeholderimg.svg')
                  " />
              </div>
            </div>
          </div>
          <div class="project-brief__block">
            <div class="project-brief__text">
              <h2 class="no-margin">
                {{ singleProjectContent.attributes.second_project_text }}
              </h2>
            </div>
            <div class="project-brief__subtext">
              <p>
                {{ singleProjectContent.attributes.second_project_subtext }}
              </p>
            </div>
          </div>
          <div class="project-grid">
            <div class="project-grid__column">
              <div class="project-grid__image">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  :src="
                    singleProjectContent.attributes.project_image.data
                      ? singleProjectContent.attributes.project_image.data[4]
                        .attributes.url
                      : require('static/assets/images/placeholderimg.svg')
                  " />
              </div>
            </div>
            <div class="project-grid__column">
              <div class="project-grid__image">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  :src="
                    singleProjectContent.attributes.project_image.data
                      ? singleProjectContent.attributes.project_image.data[5]
                        .attributes.url
                      : require('static/assets/images/placeholderimg.svg')
                  " />
              </div>
            </div>
            <div class="project-grid__column">
              <div class="project-grid__image">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  :src="
                    singleProjectContent.attributes.project_image.data
                      ? singleProjectContent.attributes.project_image.data[6]
                        .attributes.url
                      : require('static/assets/images/placeholderimg.svg')
                  " />
              </div>
            </div>
            <div class="project-grid__column">
              <div class="project-grid__image">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  :src="
                    singleProjectContent.attributes.project_image.data
                      ? singleProjectContent.attributes.project_image.data[7]
                        .attributes.url
                      : require('static/assets/images/placeholderimg.svg')
                  " />
              </div>
            </div>
            <div class="project-grid__column wide">
              <div class="project-grid__image wide">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  :src="
                    singleProjectContent.attributes.project_image.data
                      ? singleProjectContent.attributes.project_image.data[8]
                        .attributes.url
                      : require('static/assets/images/placeholderimg.svg')
                  " />
              </div>
            </div>
            <div class="project-grid__column">
              <div class="project-grid__image">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  :src="
                    singleProjectContent.attributes.project_image.data
                      ? singleProjectContent.attributes.project_image.data[9]
                        .attributes.url
                      : require('static/assets/images/placeholderimg.svg')
                  " />
              </div>
            </div>
            <div class="project-grid__column">
              <div class="project-grid__image">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  :src="
                    singleProjectContent.attributes.project_image.data
                      ? singleProjectContent.attributes.project_image.data[10]
                        .attributes.url
                      : require('static/assets/images/placeholderimg.svg')
                  " />
              </div>
            </div>
            <div
              v-if="singleProjectContent.attributes.project_image.data[11]"
              class="project-grid__column wide">
              <div class="project-grid__image wide">
                <img
                  alt=""
                  class="image"
                  loading="lazy"
                  :src="
                    singleProjectContent.attributes.project_image.data
                      ? singleProjectContent.attributes.project_image.data[11]
                        .attributes.url
                      : require('static/assets/images/placeholderimg.svg')
                  " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="other-projects">
        <div class="other-projects__container">
          <div class="other-projects__inner">
            <div class="other-projects__header">
              <h2 class="no-margin">
                View More Projects
              </h2>
            </div>
            <div class="other-projects__wrapper">
              <nuxt-link
                v-for="project in otherProjects"
                :key="project.id"
                class="project-block other w-inline-block"
                :to="`/projects/${project.attributes.slug}`">
                <div class="project-block__inner">
                  <div class="project-image__block other">
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
                  <div class="project-details__block other">
                    <div>{{ project.attributes.name }}</div>
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
      </div>

      <ContactSection :is-project-page="true" />
    </LocomotiveScroll>
  </div>
</template>

<script>
export default {
  async asyncData({ store, error, params }) {
    const fetchProject = await store.dispatch('fetchProject', {
      slug: params.slug
    })
    const fetchProjects = store.dispatch('fetchContent', {
      page: 'projects'
    })
    return Promise.all([fetchProject, fetchProjects])
      .then((responses) => {
        const [projectContent, projectsData] = responses
        const singleProjectContent = projectContent.data[0]
        return { projectContent, singleProjectContent, projectsData }
      })
      .catch(responseError => error(responseError))
  },

  computed: {
    otherProjects() {
      const otherProjects = this.projectsData.data.filter(
        project => project.attributes.slug !== this.$route.params.slug
      )
      return otherProjects
    }
  },

  mounted() {}
}
</script>

<style>
.project-grid__column.wide {
  -ms-grid-column: span 2;
  grid-column-start: span 2;
  -ms-grid-column-span: 2;
  grid-column-end: span 2;
  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1;
}
</style>
