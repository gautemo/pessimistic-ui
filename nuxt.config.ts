export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Pessimistic UI',
      htmlAttrs: {
        lang: 'en-US'
      },
      link: [
        {
          rel: 'icon',
          href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😖</text></svg>'
        },
        {
          rel: 'canonical',
          href: 'https://pessimistic-ui.vercel.app'
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'Demo of the pessimistic UI pattern, with a TODO list. Assume the worst until proven succesfull'
        },
        {
          name: 'author',
          content: 'Gaute Meek Olsen'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: '@GauteMeekOlsen'
        },
        {
          property: 'og:title',
          content: 'Pessimistic UI'
        },
        {
          property: 'og:url',
          content: 'https://pessimistic-ui.vercel.app'
        },
        {
          property: 'og:description',
          content: 'Demo of the pessimistic UI pattern, with a TODO list. Assume the worst until proven succesfull'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: 'https://pessimistic-ui.vercel.app/og_image.png'
        },
      ]
    }
  },
  nitro: {
    storage: {
      db: {
        driver: 'vercelKV',
      }
    },
    devStorage: {
      db: {
        driver: 'memory',
      }
    }
  }
})
