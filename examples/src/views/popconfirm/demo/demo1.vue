<template>
  <div>
    <h2>基本用法</h2>
    <dl-popconfirm
      title="这是一段内容确定删除吗？"
    >
      <aegle-button slot="reference">删除</aegle-button>
    </dl-popconfirm>

    <h2>自定义</h2>
    <dl-popconfirm
      confirm-button-text='好的'
      cancaegle-button-text='不用了'
      icon="dl-icon-info"
      icon-color="red"
      title="这是一段内容确定删除吗？"
    >
      <aegle-button slot="reference">删除</aegle-button>
    </dl-popconfirm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
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
      visible1: false
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

<style scoped>
.aegle-button {
  margin-left: 10px;
}
</style>
