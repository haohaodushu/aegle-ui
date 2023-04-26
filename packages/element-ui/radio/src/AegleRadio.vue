<template>
  <el-radio v-bind="$attrs" v-on="$listeners" class="aegle-radio">
    <slot></slot>
  </el-radio>
</template>

<script>
export default {
  name: 'AegleRadio'
}
</script>

<style lang="scss">
.el-radio.aegle-radio {
  margin-right: 12px;
  .el-radio__inner {
    width: 16px;
    height: 16px;
  }
}

.aegle-radio.el-radio {
  & .el-radio__input.is-checked .el-radio__inner {
    background: #ffffff;
  }
  & .el-radio__input.is-checked .el-radio__inner::after {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #1890ff;
  }
  & .el-radio__input.is-checked.is-disabled .el-radio__inner::after {
     background-color: rgba(0,0,0,0.20);
  }

  & .el-radio__label {
    padding-left: 8px;
  }
}
</style>
