<template>
  <el-checkbox v-bind="$attrs" v-on="$listeners" class="aegle-checkbox"><slot /></el-checkbox>
</template>

<script>
export default {
  name: 'AegleCheckbox'
}
</script>

<style lang="scss">
.aegle-checkbox.el-checkbox {
  margin-right: 12px;
  .el-checkbox__input {
    .el-checkbox__inner {
      width: 16px;
      height: 16px;
    }

    .el-checkbox__inner::after {
      left: 5px;
      top: 2px;
    }
  }

  .el-checkbox__label {
    padding-left: 8px;
  }
}
</style>