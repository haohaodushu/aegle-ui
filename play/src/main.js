// main.js
import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 这是本地组件测试的包

// import '../../styles/src/index.scss'
// import '../../lib/theme/index.css'

Vue.use(ElementUI)
Vue.use(Button)
console.log(Button)



new Vue({
  el: '#app',
  render: (h) => h(App)
}).$mount()
