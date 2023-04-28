import AegleAlert from './src/AegleAlert.vue';

AegleAlert.install = (Vue, options = {}) => {
  Vue.component(AegleAlert.name, AegleAlert);
}

export default AegleAlert;
