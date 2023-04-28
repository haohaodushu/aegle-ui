// 引入 @internal/page-components 解决组件内部注册报错
import pageComponents from '@internal/page-components'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AegleUI from '../../src/index'
import '../../styles/index.scss'


export default async ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    for (const [name, component] of Object.entries(pageComponents)) {
      Vue.component(name, component)
    }
    // await AegleUI.updateUITheme({
    //   primaryColor: '#FFAA00',
    //   primarySecondColor: '#231909',
    //   oldTheme: window.oldTheme || '#409EFF'
    // })
    Vue.use(AegleUI);
    Vue.use(ElementUI);
    // Vue.prototype.$elIcons = elIcons
    // Vue.prototype.$dlIcons = dlIcons
    // window.oldTheme = '#FFAA00'
    // window.primarySecond = '#231909'
  }
};
