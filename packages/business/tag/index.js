import AegleTag from './src/AegleTag.vue';

AegleTag.install = (Vue, options = {}) => {
  Vue.component(AegleTag.name, AegleTag);
}

export default AegleTag;
