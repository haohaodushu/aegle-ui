import AegleDatePicker from './src/AegleDatePicker.vue';

AegleDatePicker.install = (Vue, options = {}) => {
  Vue.component(AegleDatePicker.name, AegleDatePicker);
}

export default AegleDatePicker;
