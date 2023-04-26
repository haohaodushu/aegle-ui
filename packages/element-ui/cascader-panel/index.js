import AegleCascaderPanel from '../cascader/src/AegleCascaderPanel.vue';

AegleCascaderPanel.install = (Vue, options = {}) => {
  Vue.component(AegleCascaderPanel.name, AegleCascaderPanel);
}

export default AegleCascaderPanel;