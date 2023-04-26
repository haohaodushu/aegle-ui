<template>
  <el-table-column class="aegle-table-column" v-bind="$attrs" v-on="$listeners">
    <slot />
    <template #header>
      <slot name="header" />
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'AegleTableColumn'
}
</script>

<style>
</style>