<template>
  <div class="aegle-result" v-if="visible">
    <template v-if="isDefaultSlot"
      ><span class="aegle-result-content"><slot /></span
    ></template>
    <span class="aegle-result-content" v-else>已选中 {{ count }} 项</span>
    <template v-if="isActionSlot">
      <span class="aegle-result-action" @click="handleClick"><slot name="action" /></span>
    </template>
    <span class="aegle-result-action" v-else @click="handleClick">取消选择</span>
  </div>
</template>

<script>
export default {
  name: 'AegleResult',
  props: {
    count: {
      type: [Number, String],
      default: 0
    },
    visible: Boolean,
  },
  data() {
    return {
     
    }
  },

  computed: {
    isDefaultSlot() {
      return this.$slots.default ? true : false
    },
    isActionSlot() {
      return this.$slots.action ? true : false
    }
  },

  created() {
    console.log(this, 'this')
  },

  methods: {
    handleClick() {
      this.$emit("update:visible", false);
    }
  }
}
</script>

<style lang="scss">
@mixin aegle-result-base {
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #1890ff;
  line-height: 20px;
  letter-spacing: 0.21px;
}
.aegle-result {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  padding: 6px 12px;
  background: rgba(24, 144, 255, 0.1);
  border: 1px solid #1890ff;
  cursor: pointer;
  &-content {
    @include aegle-result-base;
  }
  &-action {
    @include aegle-result-base;
    text-decoration: underline;
  }
}
</style>