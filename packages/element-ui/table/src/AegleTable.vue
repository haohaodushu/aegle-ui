<template>
  <el-table class="aegle-table" :class="[clazz]" v-bind="$attrs" v-on="$listeners">
    <slot />
    <template #append>
      <slot name="append" />
    </template>
  </el-table>
</template>

<script>
export default {
    name: "AegleTable",
    props: {
        size: String
    },
    computed: {
        clazz() {
            if(this.size) {
                return this.size + '-table'
            }
            return null
        }
    }
}
</script>

<style>
</style>