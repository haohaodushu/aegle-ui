import AegleCascader from './src/AegleCascader.vue';

AegleCascader.install = (Vue, options = {}) => {
  Vue.component(AegleCascader.name, AegleCascader);
}

export default AegleCascader;