<template>
  <el-cascader class="aegle-cascader" v-bind="$attrs" v-on="$listeners">
    <template slot-scope="{ node, data }">
      <slot v-bind:node="node" v-bind:data="data" />
    </template>
    <template #empty>
        <slot name="empty" />
    </template>
</el-cascader>
</template>

<script>
export default {
    name: "AegleCascader",
    computed: {
        computeStyle() {
           if( this.$attrs && this.$attrs.options && this.$attrs.options.multiple) {
            return {
                height: '32px'
            }
           }
        }
    }
}
</script>

<style lang="scss">
.el-cascader.aegle-cascader {
  .el-input {
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
}
</style>