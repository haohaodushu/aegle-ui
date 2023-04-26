<template>
  <el-radio-button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio-button>
</template>

<script>
export default {
  name: 'AegleRadioButton',
}
</script>
