module.exports = {
  base: '/hmingUI/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '组件',
        link: '/component/demo'
      }
    ],
    sidebar: {
      '/guide/': ['' /* /guide/ */, 'start' /* /guide/start.html*/],
      '/component/': ['demo' /* /component/demo.html*/],
      /* fallback */
      '/': ['' /* / */]
    }
  }
}
