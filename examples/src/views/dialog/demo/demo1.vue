<template>
  <div>
    <h2>基本用法</h2>
    <aegle-button type="text" @click="dialogVisible = true">点击打开 Dialog</aegle-button>

    <aegle-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <aegle-button @click="dialogVisible = false">取 消</aegle-button>
        <aegle-button type="primary" @click="dialogVisible = false">确 定</aegle-button>
      </span>
    </aegle-dialog>

    <h2>自定义内容</h2>

    <!-- Table -->
    <aegle-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</aegle-button>

    <aegle-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <aegle-table :data="gridData">
        <aegle-table-column property="date" label="日期" width="150" />
        <aegle-table-column property="name" label="姓名" width="200" />
        <aegle-table-column property="address" label="地址" />
      </aegle-table>
    </aegle-dialog>

    <!-- Form -->
    <aegle-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</aegle-button>

    <aegle-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <aegle-form :model="form">
        <aegle-form-item label="活动名称" :labaegle-width="formLabelWidth">
          <aegle-input v-model="form.name" autocomplete="off" />
        </aegle-form-item>
        <aegle-form-item label="活动区域" :labaegle-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </aegle-form-item>
      </aegle-form>
      <div slot="footer" class="dialog-footer">
        <aegle-button @click="dialogFormVisible = false">取 消</aegle-button>
        <aegle-button type="primary" @click="dialogFormVisible = false">确 定</aegle-button>
      </div>
    </aegle-dialog>

    <h2>嵌套的 Dialog</h2>
    <aegle-button type="text" @click="outerVisible = true">点击打开外层 Dialog</aegle-button>

    <aegle-dialog title="外层 Dialog" :visible.sync="outerVisible">
      <aegle-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body />
      <div slot="footer" class="dialog-footer">
        <aegle-button @click="outerVisible = false">取 消</aegle-button>
        <aegle-button type="primary" @click="innerVisible = true">打开内层 Dialog</aegle-button>
      </div>
    </aegle-dialog>

    <h2>居中布局</h2>

    <aegle-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</aegle-button>

    <aegle-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <aegle-button @click="centerDialogVisible = false">取 消</aegle-button>
        <aegle-button type="primary" @click="centerDialogVisible = false">确 定</aegle-button>
      </span>
    </aegle-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,

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
      dialogTableVisible: false,
      dialogFormVisible: false,
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
      formLabelWidth: '120px',

      outerVisible: false,
      innerVisible: false,

      centerDialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      done()
    }
  }
}
</script>
