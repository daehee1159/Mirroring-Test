export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // server: {
  //   host: '192.168.1.111',
  //   port: 3001
  // },
  // manifest: {
  //   name: 'nuxt_pwa',
  //   short_name: 'NuxtPwa',
  //   display: 'standalone',
  //   background_color: '#000'
  // },
  // workbox: {
  //   offline: false,
  //   runtimeCaching: [
  //     {
  //       urlPattern: "/*",
  //       handler: "networkFirst",
  //       method: "GET"
  //     }
  //   ]
  // },
  // pwa: {
  //   icon: false
  // },
  head: {
    title: 'nuxt-example',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~plugins/tui-editor.js",
      ssr: false
    },
    {
      src: '~plugins/persistedState.js',
      // ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // toast ui editor


  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
