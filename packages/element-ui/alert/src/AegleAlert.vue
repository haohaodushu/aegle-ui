<template>
  <el-alert class="aegle-alert" v-bind="$attrs" v-on="$listeners">
    <slot />
    <template #title>
      <slot name="title" />
    </template>
  </el-alert>
</template>

<script>
export default {
  name: 'AegleAlert'
}
</script>

<style lang="scss">
// .aegle-alert.el-alert {
//   padding: 10px 12px 10px 17px;
//   border-radius: 2px;
//   .el-alert__content {
//      font-size: 14px;
//     .el-alert__title {
//       font-size: 14px;
//     }
//   }

//   .el-alert__icon {
//     width: 16px;
//     // font-size: 14px;
//   }

//   .el-alert__closebtn {
//     width: 16px;
//     height: 16px;
//     right: 12px;
//     line-height: 16px;
//     text-align: center;
//   }
// }

// .aegle-alert.is-light {
//   &.el-alert--success {
//     border: 1px solid rgba(46, 177, 110, 0.3);
//   }
// }
</style>