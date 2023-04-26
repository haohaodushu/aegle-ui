<template>
  <div>
    <h2>典型表单</h2>
    <dl-form ref="form" :model="form" label-width="80px">
      <dl-form-item label="活动名称">
        <el-input v-model="form.name" />
      </dl-form-item>
      <dl-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </dl-form-item>
      <dl-form-item label="活动时间">
        <el-col :span="11">
          <aegle-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <dl-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%" />
        </el-col>
      </dl-form-item>
      <dl-form-item label="即时配送">
        <el-switch v-model="form.delivery" />
      </dl-form-item>
      <dl-form-item label="活动性质">
        <aegle-checkbox-group v-model="form.type">
          <aegle-checkbox label="美食/餐厅线上活动" name="type" />
          <aegle-checkbox label="地推活动" name="type" />
          <aegle-checkbox label="线下主题活动" name="type" />
          <aegle-checkbox label="单纯品牌曝光" name="type" />
        </aegle-checkbox-group>
      </dl-form-item>
      <dl-form-item label="特殊资源">
        <aegle-radio-group v-model="form.resource">
          <aegle-radio label="线上品牌商赞助" />
          <aegle-radio label="线下场地免费" />
        </aegle-radio-group>
      </dl-form-item>
      <dl-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc" />
      </dl-form-item>
      <dl-form-item>
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
      form: {
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
