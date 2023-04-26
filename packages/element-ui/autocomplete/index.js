import AegleAutocomplete from './src/AegleAutocomplete.vue';


AegleAutocomplete.install = (Vue, options = {}) => {
  Vue.component(AegleAutocomplete.name, AegleAutocomplete);
}

export default AegleAutocomplete;
