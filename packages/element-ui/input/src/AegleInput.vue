<template>
  <el-input class="aegle-input" :style="customStyle" v-bind="$attrs" v-on="$listeners">
    <template #append>
      <slot name="append"></slot>
    </template>
    <template #prefix>
      <slot name="prefix"></slot>
    </template>
    <template #suffix>
      <slot name="suffix"></slot>
    </template>
    <template #prepend>
      <slot name="prepend"></slot>
    </template>
  </el-input>
</template>

<script>
export default {
  name: 'AegleInput',
  props: {
    width: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    customStyle() {
      const style = {}
      if (this.width) {
        style.width = this.width + 'px'
      }
      return style
    }
  }
}
</script>

<style lang="scss">
.aegle-input.el-input {
  
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
.aegle-input.el-input.el-input--medium {
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
.aegle-input.el-input.el-input--small,
.aegle-input.el-input.el-input--mini {
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
