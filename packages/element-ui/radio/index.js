import AegleRadio from './src/AegleRadio.vue'

AegleRadio.install = (Vue, options = {}) => {
  Vue.component(AegleRadio.name, AegleRadio)
}

export default AegleRadio
