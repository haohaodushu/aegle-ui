<template>
  <el-checkbox-button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-checkbox-button>
</template>

<script>
export default {
  name: 'AegleCheckboxButton',
}
</script>
