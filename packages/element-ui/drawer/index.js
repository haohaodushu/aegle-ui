import AegleDrawer from './src/AegleDrawer.vue';


AegleDrawer.install = (Vue, options = {}) => {
  Vue.component(AegleDrawer.name, AegleDrawer);
}

export default AegleDrawer;
