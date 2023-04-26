import AegleCheckbox from './src/AegleCheckbox.vue'


AegleCheckbox.install = (Vue, options = {}) => {
  Vue.component(AegleCheckbox.name, AegleCheckbox)
}

export default AegleCheckbox
