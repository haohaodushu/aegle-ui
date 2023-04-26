<template>
  <el-checkbox-group class="aegle-checkbox-group" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'AegleCheckboxGroup',
}
</script>
