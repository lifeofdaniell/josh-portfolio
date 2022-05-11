// PWA properties
const name = 'Nuxt SSR LocomotiveScroll GSAP Boilerplate'
const shortName = 'Nuxt SSR LocomotiveScroll GSAP'
const description = ''

export const getManifest = (manifest) => {
  return {
    name: (manifest && manifest.name) || name,
    short_name: (manifest && manifest.short_name) || shortName,
    description: (manifest && manifest.description) || description,
    background_color: '#ffffff',
    theme_color: '#fb528d',
    lang: 'en'
  }
}
