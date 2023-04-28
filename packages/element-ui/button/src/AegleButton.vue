<template>
  <el-button :style="computedBorderStyle" class="aegle-button" v-bind="$attrs" v-on="$listeners"><slot /></el-button>
</template>

<script>
export default {
  name: 'AegleButton',
  props: {
    borderStyle: {
      type: String,
      default: ""
    }
  },
  computed: {
    computedBorderStyle() {
       if(this.borderStyle) {
        return {
          borderStyle: this.borderStyle
        }
       }
    }
  }
}
</script>

<style lang="scss">
.el-button.aegle-button {
  height: 28px;
  padding: 0px 12px;
  font-size: 14px;
  border-radius: 2px;

  &.el-button--default {
  }

  &.el-button--large  {
    height: 32px;
    padding: 0px 16px;
    font-size: 14px;
  }

  &.el-button--medium {
    height: 28px;
    padding: 0px 12px;
    font-size: 14px;
  }

  &.el-button--small {
    height: 24px;
    padding: 0px 8px;
    font-size: 14px;
  }

  &.el-button--mini {
    height: 24px;
    padding: 0px 8px;
    font-size: 14px;
  }
  &.is-round {
   padding: 0 12px;
  }
}
</style>