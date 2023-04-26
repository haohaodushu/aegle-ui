import AegleButton from './src/AegleButton.vue';

AegleButton.install = (Vue, options = {}) => {
  Vue.component(AegleButton.name, AegleButton);
}

export default AegleButton;
