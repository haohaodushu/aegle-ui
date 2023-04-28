<template>
  <div>
    <h2>基本用法</h2>
    <aegle-radio-group v-model="direction">
      <aegle-radio label="ltr">从左往右开</aegle-radio>
      <aegle-radio label="rtl">从右往左开</aegle-radio>
      <aegle-radio label="ttb">从上往下开</aegle-radio>
      <aegle-radio label="btt">从下往上开</aegle-radio>
    </aegle-radio-group>

    <aegle-button @click="drawer = true" type="primary" style="margin-left: 16px"> 点我打开 </aegle-button>

    <aegle-drawer title="我是标题" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <span>我来啦!</span>
    </aegle-drawer>

    <h2>不添加 Title</h2>
    <aegle-button @click="drawer1 = true" type="primary" style="margin-left: 16px"> 点我打开 </aegle-button>

    <aegle-drawer title="我是标题" :visible.sync="drawer1" :with-header="false">
      <span>我来啦!</span>
    </aegle-drawer>

    <h2>自定义内容</h2>
    <aegle-button type="text" @click="table = true">打开嵌套表格的 Drawer</aegle-button>
    <aegle-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</aegle-button>
    <aegle-drawer title="我嵌套了表格!" :visible.sync="table" direction="rtl" size="50%">
      <aegle-table :data="gridData">
        <aegle-table-column property="date" label="日期" width="150" />
        <aegle-table-column property="name" label="姓名" width="200" />
        <aegle-table-column property="address" label="地址" />
      </aegle-table>
    </aegle-drawer>

    <aegle-drawer
      title="我嵌套了 Form !"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <aegle-form :model="form">
          <aegle-form-item label="活动名称" :labaegle-width="formLabelWidth">
            <aegle-input v-model="form.name" autocomplete="off" />
          </aegle-form-item>
          <aegle-form-item label="活动区域" :labaegle-width="formLabelWidth">
            <aegle-select v-model="form.region" placeholder="请选择活动区域">
              <aegle-option label="区域一" value="shanghai" />
              <aegle-option label="区域二" value="beijing" />
            </aegle-select>
          </aegle-form-item>
        </aegle-form>
        <div class="demo-drawer__footer">
          <aegle-button @click="cancelForm">取 消</aegle-button>
          <aegle-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{
            loading ? '提交中 ...' : '确 定'
          }}</aegle-button>
        </div>
      </div>
    </aegle-drawer>

    <h2>多层嵌套</h2>
    <aegle-button @click="drawer2 = true" type="primary" style="margin-left: 16px"> 点我打开 </aegle-button>

    <aegle-drawer title="我是外面的 Drawer" :visible.sync="drawer2" size="50%">
      <div>
        <aegle-button @click="innerDrawer = true">打开里面的!</aegle-button>
        <aegle-drawer title="我是里面的" :append-to-body="true" :before-close="handleClose" :visible.sync="innerDrawer">
          <p>_(:зゝ∠)_</p>
        </aegle-drawer>
      </div>
    </aegle-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      drawer1: false,
      drawer2: false,
      direction: 'rtl',
      table: false,
      dialog: false,
      loading: false,
      gridData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      timer: null,
      innerDrawer: false
    }
  },
  methods: {
    handleClose(done) {
      done()
    },
    cancelForm() {
      this.loading = false
      this.dialog = false
      clearTimeout(this.timer)
    }
  }
}
</script>
