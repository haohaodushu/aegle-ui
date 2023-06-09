
const { config } = require('vuepress-theme-hope')
const alias = require('../../config/alias');
const guideRoutes = require('./sidebarRoutes/guide.js')
const developerGuideRoutes = require('./sidebarRoutes/developer.js')
const elementUIRoutes = require('./sidebarRoutes/element.js')
const businessRoutes = require('./sidebarRoutes/business.js')

module.exports = config({
  title: 'Aegle-UI',
  description: 'A UI library build by Vue 2.0',
  markdown: {
    lineNumbers: true
  },
  lang: 'zh-CN',
  base: '/',
  head: [ // 网站标题栏的相关设置
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  locales: {
    '/': {
      selectText: '选择语言',
      lang: 'zh-CN',
      label: '简体中文',
      title: 'Aegle-UI',
      description: '基于 Vue2.0 的组件库'
    }
  },
  themeConfig: {
    // iconPrefix: 'icon-',
    // 配置顶部导航栏
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '开发规范',
        link: '/guide/instroduce'
      },
      // {
      //   text: '开发指南',
      //   link: '/developer/installation'
      // },
      {
        text: 'element 组件',
        link: '/packages/element/button'
      },
      {
        text: '业务组件',
        link: '/packages/business/tag'
      }
    ],
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        sidebar: {
          '/guide': guideRoutes,
          '/developer': developerGuideRoutes,
          '/packages/element': elementUIRoutes,
          '/packages/business': businessRoutes,

        }
      }
    },
    mdEnhance: {
      codegroup: true
    },
    themeColor: false,
    darkmode: 'disable',
    fullscreen: false,
    pageInfo: false,
  },

  // 配置插件
  plugins: ['demo-container'],
  // 修改内部的webpack设置
  configureWebpack: {
    resolve: {
      alias: alias
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          use: [
            'cache-loader',
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: [
                  '@babel/preset-env', // 可以识别es6语法
                  '@vue/babel-preset-jsx' // 解析jsx语法
                ]
              }
            }
          ]
        }
      ]
    }
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
  },
  shouldPrefetch: false
})
