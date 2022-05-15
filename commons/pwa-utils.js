// PWA properties
const name = 'Joshua Oladiti | Portfolio'
const shortName = 'Josh\'s Portfolio'
const description = ''

export const getManifest = (manifest) => {
  return {
    name: (manifest && manifest.name) || name,
    short_name: (manifest && manifest.short_name) || shortName,
    description: (manifest && manifest.description) || description,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    lang: 'en'
  }
}
