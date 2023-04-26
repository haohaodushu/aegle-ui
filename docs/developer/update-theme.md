---
title: 更改主题换肤
pageClass: demo-theme
---

## 更改主题

:::demo
```vue
<el-color-picker
  :value="color"
  :predefine="predefineColors"
  @change="updateTheme">
</el-color-picker>

<script>
  export default {
    data() {
      return {
        color: '#409EFF',
        predefineColors: [
          '#409EFF',
          '#FFAA00',
          '#632CD5'
        ]
      }
    },
    methods: {
      async updateTheme (color) {
        if (color == window.oldTheme) {
          this.$message({
            message: '选择相同的主题，请重新选择',
            type: 'error'
          });
          return
        }
        if (color === '#FFAA00') {
          await window.$updateTheme({
            primaryColor: color,
            primarySecondColor: window.primarySecond || '#231909',
            oldTheme: window.oldTheme
          })
        } else {
          await window.$updateTheme({
            primaryColor: color,
            oldTheme: window.oldTheme
          })
        }
        window.oldTheme = color
      }
    },
  };
</script>
```
:::

## button 按钮

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<el-row>
  <aegle-button>默认按钮</aegle-button>
  <aegle-button type="primary">主要按钮</aegle-button>
  <aegle-button type="success">成功按钮</aegle-button>
  <aegle-button type="info">信息按钮</aegle-button>
  <aegle-button type="warning">警告按钮</aegle-button>
  <aegle-button type="danger">危险按钮</aegle-button>
</el-row>

<el-row>
  <aegle-button plain>朴素按钮</aegle-button>
  <aegle-button type="primary" plain>主要按钮</aegle-button>
  <aegle-button type="success" plain>成功按钮</aegle-button>
  <aegle-button type="info" plain>信息按钮</aegle-button>
  <aegle-button type="warning" plain>警告按钮</aegle-button>
  <aegle-button type="danger" plain>危险按钮</aegle-button>
</el-row>

<el-row>
  <aegle-button>幽灵按钮</aegle-button>
  <aegle-button type="primary" ghost>主要按钮</aegle-button>
  <aegle-button type="success" ghost>成功按钮</aegle-button>
  <aegle-button type="info" ghost>信息按钮</aegle-button>
  <aegle-button type="warning" ghost>警告按钮</aegle-button>
  <aegle-button type="danger" ghost>危险按钮</aegle-button>
</el-row>

<el-row>
  <aegle-button round>圆角按钮</aegle-button>
  <aegle-button type="primary" round>主要按钮</aegle-button>
  <aegle-button type="success" round>成功按钮</aegle-button>
  <aegle-button type="info" round>信息按钮</aegle-button>
  <aegle-button type="warning" round>警告按钮</aegle-button>
  <aegle-button type="danger" round>危险按钮</aegle-button>
</el-row>

<el-row>
  <aegle-button icon="el-icon-search" circle></aegle-button>
  <aegle-button type="primary" icon="el-icon-edit" circle></aegle-button>
  <aegle-button type="success" icon="el-icon-check" circle></aegle-button>
  <aegle-button type="info" icon="el-icon-message" circle></aegle-button>
  <aegle-button type="warning" icon="el-icon-star-off" circle></aegle-button>
  <aegle-button type="danger" icon="el-icon-delete" circle></aegle-button>
</el-row>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<el-row>
  <aegle-button disabled>默认按钮</aegle-button>
  <aegle-button type="primary" disabled>主要按钮</aegle-button>
  <aegle-button type="success" disabled>成功按钮</aegle-button>
  <aegle-button type="info" disabled>信息按钮</aegle-button>
  <aegle-button type="warning" disabled>警告按钮</aegle-button>
  <aegle-button type="danger" disabled>危险按钮</aegle-button>
</el-row>

<el-row>
  <aegle-button plain disabled>朴素按钮</aegle-button>
  <aegle-button type="primary" plain disabled>主要按钮</aegle-button>
  <aegle-button type="success" plain disabled>成功按钮</aegle-button>
  <aegle-button type="info" plain disabled>信息按钮</aegle-button>
  <aegle-button type="warning" plain disabled>警告按钮</aegle-button>
  <aegle-button type="danger" plain disabled>危险按钮</aegle-button>
</el-row>

<el-row>
  <aegle-button plain disabled>幽灵按钮</aegle-button>
  <aegle-button type="primary" ghost disabled>主要按钮</aegle-button>
  <aegle-button type="success" ghost disabled>成功按钮</aegle-button>
  <aegle-button type="info" ghost disabled>信息按钮</aegle-button>
  <aegle-button type="warning" ghost disabled>警告按钮</aegle-button>
  <aegle-button type="danger" ghost disabled>危险按钮</aegle-button>
</el-row>

<el-row>
  <aegle-button link disabled>幽灵按钮</aegle-button>
  <aegle-button type="primary" link disabled>主要按钮</aegle-button>
  <aegle-button type="success" link disabled>成功按钮</aegle-button>
  <aegle-button type="info" link disabled>信息按钮</aegle-button>
  <aegle-button type="warning" link disabled>警告按钮</aegle-button>
  <aegle-button type="danger" link disabled>危险按钮</aegle-button>
</el-row>
```
:::


## radio 单选按钮

### 按钮样式

按钮样式的单选组合。

:::demo 只需要把`aegle-radio`元素换成`aegle-radio-button`元素即可，此外，Element 还提供了`size`属性。
```html
<template>
  <div>
    <aegle-radio-group v-model="radio1">
      <aegle-radio-button label="上海"></aegle-radio-button>
      <aegle-radio-button label="北京"></aegle-radio-button>
      <aegle-radio-button label="广州"></aegle-radio-button>
      <aegle-radio-button label="深圳"></aegle-radio-button>
    </aegle-radio-group>
  </div>
  <div style="margin-top: 20px">
    <aegle-radio-group v-model="radio2" size="medium">
      <aegle-radio-button label="上海" ></aegle-radio-button>
      <aegle-radio-button label="北京"></aegle-radio-button>
      <aegle-radio-button label="广州"></aegle-radio-button>
      <aegle-radio-button label="深圳"></aegle-radio-button>
    </aegle-radio-group>
  </div>
  <div style="margin-top: 20px">
    <aegle-radio-group v-model="radio3" size="small">
      <aegle-radio-button label="上海"></aegle-radio-button>
      <aegle-radio-button label="北京" disabled ></aegle-radio-button>
      <aegle-radio-button label="广州"></aegle-radio-button>
      <aegle-radio-button label="深圳"></aegle-radio-button>
    </aegle-radio-group>
  </div>
  <div style="margin-top: 20px">
    <aegle-radio-group v-model="radio4" disabled size="mini">
      <aegle-radio-button label="上海"></aegle-radio-button>
      <aegle-radio-button label="北京"></aegle-radio-button>
      <aegle-radio-button label="广州"></aegle-radio-button>
      <aegle-radio-button label="深圳"></aegle-radio-button>
    </aegle-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海'
      };
    }
  }
</script>
```
:::

### 禁用状态

单选框不可用的状态。

:::demo 只要在`aegle-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。
```html
<template>
  <aegle-radio disabled v-model="radio" label="禁用">备选项</aegle-radio>
  <aegle-radio disabled v-model="radio" label="选中且禁用">备选项</aegle-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
</script>
```
:::
