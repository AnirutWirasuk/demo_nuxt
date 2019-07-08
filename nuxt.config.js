const webpack = require("webpack");
module.exports = {
  mode: 'universal',
  template: 'app.html',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // {
      //   src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      //   type: "text/javascript"
      // },
      // {
      //   src:
      //     "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      //   type: "text/javascript"
      // }
      // {
      //   src:
      //     "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
      //   type: "text/javascript"
      // }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/now-ui-dashboard.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/bootstrap.js",
    // "~plugins/now-ui-dashboard.min.js",
    // { src: '~/plugins/jquery.min.js', ssr: false },
    // { src: '~/plugins/popper.min.js', ssr: false },
    { src: '~/plugins/now-ui-dashboard.js',mode: 'client',ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faDollarSign','faAddressBook']
        }
      ]
    }],
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
