# Tag 标签


### 基本用法



:::demo aegle-tag 组件提供四种主题，由`type`属性指定，默认值为`primary`。
```html
<template>
  <aegle-tag type="primary">
    蓝色
  </aegle-tag>
    <aegle-tag type="success">
    绿色
  </aegle-tag>
    <aegle-tag type="info">
    灰色
  </aegle-tag>
    <aegle-tag type="warning">
    黄色
  </aegle-tag>
</template>
```
:::

### 自定义颜色
:::demo aegle-tag 通过color 属性来自定义颜色。
```html
<template>
    <aegle-tag color="#9341FF">紫色</aegle-tag>
</template>
```
:::

### 形状
:::demo aegle-tag 提供 round 属性来改变形状
```html
<template>
    <aegle-tag color="#9341FF" round>紫色</aegle-tag>
</template>
```
:::

### 尺寸
:::demo aegle-tag 提供 small 尺寸改变大小。
```html
<template>
    <aegle-tag  size="small">蓝色</aegle-tag>
</template>
```
:::


### Tag Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | string  | primary / success / warning / info | 
| size | 尺寸 | string |small | - | 
| round | 是否圆角 | boolean | - | false
| color | 自定义颜色（必须是HEX） | string | - | 


### Tag-Group Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| click | 点击添加标签按钮触发 | - |

