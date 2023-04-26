import AegleRadioGroup from '../radio/src/AegleRadioGroup.vue'


AegleRadioGroup.install = (Vue, options = {}) => {
  Vue.component(AegleRadioGroup.name, AegleRadioGroup)
}

export default AegleRadioGroup
