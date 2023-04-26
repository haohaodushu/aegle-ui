import AegleTable from './src/AegleTable.vue';


AegleTable.install = (Vue, options = {}) => {
  Vue.component(AegleTable.name, AegleTable);
}

export default AegleTable;