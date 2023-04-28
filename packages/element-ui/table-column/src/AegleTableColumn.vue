<template>
  <el-table-column class="aegle-table-column" v-bind="$attrs" v-on="$listeners">


   


  </el-table-column>
</template>

<script>
export default {
  name: 'AegleTableColumn',
  created() {
    console.log(this.$slots);
  }
}
</script>

<style>
</style>