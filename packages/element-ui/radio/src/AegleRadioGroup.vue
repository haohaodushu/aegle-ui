<template>
  <el-radio-group class="aegle-radio-group" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio-group>
</template>

<script>
export default {
  name: 'AegleRadioGroup',
}
</script>

<style lang="scss">
.el-radio-group.aegle-radio-group {
  .aegle-radio {
    // margin-right: 12px;
  }
}
</style>
