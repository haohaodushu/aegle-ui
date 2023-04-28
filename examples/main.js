// main.js
import Vue from 'vue'
import App from './src/App.vue'
import router from './src/router/index.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import AegleUI from '../src/index.js'
// import '../styles/src/index.scss'

Vue.use(ElementUI)
Vue.use(AegleUI)

const creatApp = async () => {
  try {
    await AegleUI.updateUITheme({
      primaryColor: '#FFAA00',
      primarySecondColor: '#231909'
    })

    new Vue({
      el: '#app',
      router,
      render: (h) => h(App)
    }).$mount()
  } catch (error) {
    new Vue({
      el: '#app',
      router,
      render: (h) => h(App)
    }).$mount()
    console.error('主题更新失败')
  }
}

creatApp()
