<template>
  <el-table class="aegle-table" v-bind="$attrs" v-on="$listeners">
    <slot />
    <template #append>
      <slot name="append" />
    </template>
  </el-table>
</template>

<script>
export default {
    name: "AegleTable"
}
</script>

<style>
</style>