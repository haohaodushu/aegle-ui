<template>
  <el-select class="aegle-select" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <template #prefix>
      <slot name="prefix"></slot>
    </template>
    <template #empty>
      <slot name="empty"></slot>
    </template>
  </el-select>
</template>
<script>
export default {
  name: 'AegleSelect'
}
</script>
<style lang="scss">
.aegle-select .el-input {
  &.el-input--prefix {
    .el-input__inner {
      padding-left: 32px;
    }
  }
  &.el-input--suffix {
    .el-input__inner {
      padding-right: 32px;
    }
  }
  .el-input__inner {
    height: 32px;
    padding: 0px 12px;
    font-size: 14px;
    border-radius: 2px;
  }
  & .el-input__prefix,
  & .el-input__suffix {
    .el-input__icon,
    .aegle-input__icon {
      line-height: 32px;
    }
  }
}
.aegle-select .el-input.el-input--medium {
  .el-input__inner {
    height: 28px;
    padding: 0px 12px;
    font-size: 14px;
  }

  &.el-input--prefix {
    .el-input__inner {
      padding-left: 32px;
    }
  }
  &.el-input--suffix {
    .el-input__inner {
      padding-right: 32px;
    }
  }
  & .el-input__prefix,
  & .el-input__suffix {
    .el-input__icon,
    .aegle-input__icon {
      line-height: 28px;
    }
  }
}
.aegle-select .el-input.el-input--small,
.aegle-select .el-input.el-input--mini {
  .el-input__inner {
    height: 24px;
    padding: 0px 8px;
    font-size: 14px;
  }

  &.el-input--prefix {
    .el-input__inner {
      padding-left: 32px;
    }
  }
  &.el-input--suffix {
    .el-input__inner {
      padding-right: 32px;
    }
  }
  & .el-input__prefix,
  & .el-input__suffix {
    .el-input__icon,
    .aegle-input__icon {
      line-height: 24px;
    }
  }
}
</style>