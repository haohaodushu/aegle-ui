<template>
  <div>
    <h2>基础用法</h2>
    <aegle-radio v-model="radio" label="1">备选项</aegle-radio>
    <aegle-radio v-model="radio" label="2">备选项</aegle-radio>

    <h2>单选框组</h2>
    <aegle-radio-group v-model="radio2">
      <aegle-radio :label="3">备选项</aegle-radio>
      <aegle-radio :label="6">备选项</aegle-radio>
      <aegle-radio :label="9">备选项</aegle-radio>
    </aegle-radio-group>

    <h2>禁用状态</h2>
    <div>
      <aegle-radio disabled v-model="radio1" label="禁用">备选项</aegle-radio>
      <aegle-radio disabled v-model="radio1" label="选中且禁用">备选项</aegle-radio>
    </div>


    <h2>按钮样式</h2>
    <div>
      <aegle-radio-group v-model="button1" disabled>
        <aegle-radio-button label="上海" />
        <aegle-radio-button label="北京" />
        <aegle-radio-button label="广州" />
        <aegle-radio-button label="深圳" />
      </aegle-radio-group>
    </div>
    <div style="margin-top: 20px">
      <aegle-radio-group v-model="button2" size="medium">
        <aegle-radio-button label="上海" />
        <aegle-radio-button label="北京" />
        <aegle-radio-button label="广州" />
        <aegle-radio-button label="深圳" />
      </aegle-radio-group>
    </div>
    <div style="margin-top: 20px">
      <aegle-radio-group v-model="button3" size="small" disabled>
        <aegle-radio-button label="上海" />
        <aegle-radio-button label="北京" />
        <aegle-radio-button label="广州" />
        <aegle-radio-button label="深圳" />
      </aegle-radio-group>
    </div>
    <div style="margin-top: 20px">
      <aegle-radio-group v-model="button4" size="mini">
        <aegle-radio-button label="上海" />
        <aegle-radio-button label="北京" />
        <aegle-radio-button label="广州" />
        <aegle-radio-button label="深圳" />
      </aegle-radio-group>
    </div>


    <h2>带有边框</h2>
    <div>
      <aegle-radio v-model="border1" label="1" border>备选项1</aegle-radio>
      <aegle-radio v-model="border1" label="2" border>备选项2</aegle-radio>
    </div>
    <div style="margin-top: 20px">
      <aegle-radio v-model="border2" label="1" border size="medium">备选项1</aegle-radio>
      <aegle-radio v-model="border2" label="2" border size="medium">备选项2</aegle-radio>
    </div>
    <div style="margin-top: 20px">
      <aegle-radio-group v-model="border3" size="small">
        <aegle-radio label="1" border>备选项1</aegle-radio>
        <aegle-radio label="2" border disabled>备选项2</aegle-radio>
      </aegle-radio-group>
    </div>
    <div style="margin-top: 20px">
      <aegle-radio-group v-model="border4" size="mini" disabled>
        <aegle-radio label="1" border>备选项1</aegle-radio>
        <aegle-radio label="2" border>备选项2</aegle-radio>
      </aegle-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: '选中且禁用',
      radio2: 3,
      button1: '上海',
      button2: '上海',
      button3: '上海',
      button4: '上海',
      border1: '1',
      border2: '1',
      border3: '1',
      border4: '1'
    }
  }
}
</script>

<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>
