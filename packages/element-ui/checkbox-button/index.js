import AegleCheckboxButton from '../checkbox/src/AegleCheckboxButton.vue'


AegleCheckboxButton.install = (Vue, options = {}) => {
  Vue.component(AegleCheckboxButton.name, AegleCheckboxButton)
}

export default AegleCheckboxButton
