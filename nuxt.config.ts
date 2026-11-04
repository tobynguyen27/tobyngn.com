export default defineNuxtConfig({
  // App
  css: ['~/assets/css/global.css'],
  app: {
    head: {
      htmlAttrs: {
        class: 'bg-bg',
      },
      meta: [
        { name: 'theme-color', content: '#FFFCF0' },
        { name: 'theme-color', content: '#100F0F', media: '(prefers-color-scheme: dark)' },
      ],
    },
  },

  // Dev
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Build
  builder: 'vite',
  nitro: {
    preset: 'cloudflare-module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        name: 'personal-website',
        preview_urls: false,
        workers_dev: false,
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'personal-website',
            database_id: 'ca4b213b-2dd8-43c1-a031-c01897790e6f',
          },
        ],
      },
    },
  },

  // Modules
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxt/scripts',
    '@nuxt/hints',
    '@nuxt/a11y',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  fonts: {

    families: [
      {
        name: 'Geist',
        weights: [400],
        global: true,
        provider: 'local',
      },
      {
        name: 'Geist Mono',
        weights: [400],
        global: true,
        provider: 'local',
      },
      {
        name: 'Geist Serif',
        weights: [300, 400],
        global: true,
        provider: 'local',
      },
    ],
  },
  image: {
    format: ['avif', 'webp'],
    dir: 'assets/images',
  },
  scripts: {
    registry: {
      cloudflareWebAnalytics: {
        token: '9f9851e2882c483fa10750eaaf3fbb69',
        trigger: 'onNuxtReady',
      },
    },
  },
  content: {
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
    experimental: {
      sqliteConnector: 'native',
    },
  },
  // SEO
  site: {
    url: 'https://tobyngn.com',
    name: 'Toby Nguyen',
    description: 'Toby Nguyen\'s personal website',
    defaultLocale: 'en',
  },
  robots: {
    blockNonSeoBots: true,
  },
  schemaOrg: {
    enabled: false,
  },
  sitemap: {
    zeroRuntime: true,
  },
  aiReady: {
    enabled: false,
  },
  skewProtection: {
    enabled: false,
  },
})
