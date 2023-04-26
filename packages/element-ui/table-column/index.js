import AegleTableColumn from './src/AegleTableColumn.vue';


AegleTableColumn.install = (Vue, options = {}) => {
  Vue.component(AegleTableColumn.name, AegleTableColumn);
}

export default AegleTableColumn;