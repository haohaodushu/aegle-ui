import AegleTitle from './src/AegleTitle.vue';

AegleTitle.install = (Vue, options = {}) => {
  Vue.component(AegleTitle.name, AegleTitle);
}

export default AegleTitle;
