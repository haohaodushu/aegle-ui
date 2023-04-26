<template>
  <div>
    <h2>表单内组件尺寸控制</h2>
    <dl-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <dl-form-item label="活动名称">
        <el-input v-model="sizeForm.name" />
      </dl-form-item>
      <dl-form-item label="活动区域">
        <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </dl-form-item>
      <dl-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%" />
        </el-col>
      </dl-form-item>
      <dl-form-item label="活动性质">
        <aegle-checkbox-group v-model="sizeForm.type">
          <aegle-checkbox-button label="美食/餐厅线上活动" name="type" />
          <aegle-checkbox-button label="地推活动" name="type" />
          <aegle-checkbox-button label="线下主题活动" name="type" />
        </aegle-checkbox-group>
      </dl-form-item>
      <dl-form-item label="特殊资源">
        <aegle-radio-group v-model="sizeForm.resource" size="medium">
          <aegle-radio border label="线上品牌商赞助" />
          <aegle-radio border label="线下场地免费" />
        </aegle-radio-group>
      </dl-form-item>
      <dl-form-item size="large">
        <aegle-button type="primary" @click="onSubmit">立即创建</aegle-button>
        <aegle-button>取消</aegle-button>
      </dl-form-item>
    </dl-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
