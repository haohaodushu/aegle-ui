# Tag 标签


### 基本用法

:::demo 
```html
<template>
 <aegle-button @click="handleClick">打开</aegle-button>
  <aegle-result count="12" :visible.sync="visible">
  </aegle-result>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      handleClick() {
        this.visible = true
      }
    }
  }
</script>
```
:::

### 插槽用法

:::demo 
```html
<template>
 <aegle-button @click="handleClick">打开</aegle-button>
  <aegle-result count="12" :visible.sync="visible">
    <span>这是提示文本</span>
    <span slot="action">关闭</span>
  </aegle-result>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      handleClick() {
        this.visible = true
      }
    }
  }
</script>
```
:::

### Tag Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible | 是否显示 Result，支持 .sync 修饰符 | boolean  | - | false | 
| count | 数量 | number | string  | - | - |

### Result Slots
| 名称     | 说明 |
|---------|-------------|
| - | 左边内容 |
| action | 右边操作按钮 |





