# Title 标签


### 基本用法


:::demo
```html
<template>
  <aegle-title>
    输入文本
  </aegle-title>
</template>
```
:::

### 前置图形形状

可以改变 `aegle-title` 的前置图形

:::demo  aegle-title 提供 `prefix` 属性来选择前置图像的形状,默认`rectangle`，可供选择 `rectangle`，`circle`.
```html
<template>
  <aegle-title>
    输入文本
  </aegle-title>
    <aegle-title prefix="rectangle">
    输入文本
  </aegle-title>
  <aegle-title prefix="circle">
    输入文本
  </aegle-title>

</template>
```
:::


### 尺寸
提供 `size` 属性来选择大小

:::demo 提供 `size` 属性来选择大小 默认`default`,可供选择`large`, `small`。
```html
<template>
  <aegle-title>
    输入文本
  </aegle-title>
    <aegle-title size="large">
    输入文本
  </aegle-title>
  <aegle-title prefix="circle" size="small">
    输入文本
  </aegle-title>

</template>
```
:::


### 实现 dropdown 
通过 `type` 属性来实现 dropdown 功能

:::demo  默认`text`, 用来展示一个标题,可供选择`dropdown`来实现标题具有 dropdown  。
```html
<template>
  <aegle-title type="dropdown" :dropdownOptions="dropdownOptions" @command="handleCommand">
   下拉菜单
  </aegle-title>

</template>
<script>
    export default {
        data() {
            return {
               dropdownOptions: [
                {value: "黄金糕",label: "黄金糕"},
                {value: "狮子头",label: "螺蛳粉"},
                {value: "双皮奶",label: "双皮奶"},
                {value: "蚵仔煎",label: "蚵仔煎"},
               ] 
            }
        },
        methods: {
            handleCommand(v) {
                console.log(v)
            }
        }
    }
</script>
```
:::



### Title Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| prefix  | 前置图形形状 | string  | rectangle / circle | rectangle |
| size | 尺寸 | string |large / small | default | 
| type  | 类型 | string | text / dropdown | text
| dropdownOptions  | dropdown 的数据选项 | array | - | []

### dropdownOptions Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value  | 指令的值 | string/number/object  | - | - |
| label  | 前置图形形状 | string  | - | - |
| disabled  | 禁用 | boolean  | - | - |
| divided  | 显示分割线 | boolean  | - | - |
| icon  | 图标类名 | string  | - | - |


### Dropdown Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| placement    | 菜单弹出位置     | string | top/top-start/top-end/bottom/bottom-start/bottom-end  | bottom-end |
| trigger       | 触发下拉的行为     | string          | hover, click  | hover |
| hide-on-click | 是否在点击菜单项后隐藏菜单     | boolean          | — | true |
| show-timeout  | 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）| number          | — | 250 |
| hide-timeout  | 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）| number          | — | 150 |
| tabindex      | Dropdown 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number | — | 0 |
| disabled      | 是否禁用        | boolean         | —                      | false |


### Dropdown Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| command  | 点击菜单项触发的事件回调 | dropdown-item 的指令 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |


