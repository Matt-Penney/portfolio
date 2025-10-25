export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'slate'
    }
  },
  seo: {
    siteName: 'Matthew\'s Portfolio'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: 'Header Logo Image',
      light: '',
      dark: '/logo_16x9.png'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Matt-Penney/portfolio',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Profile',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/matt-penney/portfolio',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Nuxt UI docs',
        to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
        target: '_blank'
      }]
    }
  }
})
