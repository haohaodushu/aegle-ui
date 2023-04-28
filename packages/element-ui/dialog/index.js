import AegleDialog from './src/AegleDialog.vue';


AegleDialog.install = (Vue, options = {}) => {
  Vue.component(AegleDialog.name, AegleDialog);
}

export default AegleDialog;
