import AegleCheckboxGroup from '../checkbox/src/AegleCheckboxGroup.vue'

AegleCheckboxGroup.install = (Vue, options = {}) => {
  Vue.component(AegleCheckboxGroup.name, AegleCheckboxGroup)
}

export default AegleCheckboxGroup
