import { createNamespace, useNamespace } from './utils/use-namespace.js'
import { updateElementTheme } from './utils/update-element-theme.js'
import { updateUITheme } from './utils/update-ui-theme.js'

// 注册组件
import AegleButton from 'packages/element-ui/button/index.js'
import Icon from 'packages/element-ui/icon/index.js'
import AegleDatePicker from 'packages/element-ui/date-picker/index.js'
import AegleTimeSelect from 'packages/element-ui/time-select/index.js'
import AegleTimePicker from 'packages/element-ui/time-picker/index.js'
import AegleRadio from 'packages/element-ui/radio/index.js'
import AegleRadioButton from 'packages/element-ui/radio-button/index.js'
import AegleRadioGroup from 'packages/element-ui/radio-group/index.js'
import AegleCheckbox from 'packages/element-ui/checkbox/index.js'
import AegleCheckboxButton from 'packages/element-ui/checkbox-button/index.js'
import AegleCheckboxGroup from 'packages/element-ui/checkbox-group/index.js'
import AegleCascader from 'packages/element-ui/cascader/index.js'
import AegleCascaderPanel from 'packages/element-ui/cascader-panel/index.js'
import AegleInput from 'packages/element-ui/input/index.js'
import AegleAutocomplete from 'packages/element-ui/autocomplete/index.js'
import AegleTable from 'packages/element-ui/table/index.js'
import AegleTableColumn from 'packages/element-ui/table-column/index.js'


import Dialog from 'packages/element-ui/dialog/index.js'
import Drawer from 'packages/element-ui/drawer/index.js'
import Tooltip from 'packages/element-ui/tooltip/index.js'
import AegleSelect from 'packages/element-ui/select/index.js'
import Tag from 'packages/element-ui/tag/index.js'
import TagGroup from 'packages/element-ui/tag-group/index.js'

const components = [
  AegleButton,
  Icon,
  AegleDatePicker,
  AegleTimePicker,
  AegleTimeSelect,
  AegleRadio,
  AegleRadioButton,
  AegleRadioGroup,
  AegleCheckbox,
  AegleCheckboxButton,
  AegleCheckboxGroup,
  AegleInput,
  AegleAutocomplete,
  AegleSelect,
  AegleCascader,
  AegleCascaderPanel,
  AegleTable,
  AegleTableColumn,
  Dialog,
  Drawer,
  Tooltip,

  Tag,
  TagGroup,

]

const install = (Vue, options = {}) => {
  // 判断是否安装
  if (install.installed) return
  install.installed = true

  components.forEach((component) => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$dlIconfont = options.iconfont || 'iconfont'
  Vue.prototype.$dlUseNamespace = useNamespace
}

// 判断调用vue加载器，实现全局加载
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// Vue.use 和按需加载都可以
export default {
  install,
  updateElementTheme,
  updateUITheme,
  ...components
}
