<template>
  <div>
    <h2>基本用法</h2>
    <div class="box">
      <div class="top">
        <aegle-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <aegle-button>上左</aegle-button>
        </aegle-tooltip>
        <aegle-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
          <aegle-button>上边</aegle-button>
        </aegle-tooltip>
        <aegle-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
          <aegle-button>上右</aegle-button>
        </aegle-tooltip>
      </div>
      <div class="left">
        <aegle-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
          <aegle-button>左上</aegle-button>
        </aegle-tooltip>
        <aegle-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
          <aegle-button>左边</aegle-button>
        </aegle-tooltip>
        <aegle-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
          <aegle-button>左下</aegle-button>
        </aegle-tooltip>
      </div>

      <div class="right">
        <aegle-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
          <aegle-button>右上</aegle-button>
        </aegle-tooltip>
        <aegle-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
          <aegle-button>右边</aegle-button>
        </aegle-tooltip>
        <aegle-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
          <aegle-button>右下</aegle-button>
        </aegle-tooltip>
      </div>
      <div class="bottom">
        <aegle-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
          <aegle-button>下左</aegle-button>
        </aegle-tooltip>
        <aegle-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
          <aegle-button>下边</aegle-button>
        </aegle-tooltip>
        <aegle-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
          <aegle-button>下右</aegle-button>
        </aegle-tooltip>
      </div>
    </div>

    <h2>主题</h2>
    <aegle-tooltip content="Top center" placement="top">
      <aegle-button>Dark</aegle-button>
    </aegle-tooltip>
    <aegle-tooltip content="Bottom center" placement="bottom" effect="light">
      <aegle-button>Light</aegle-button>
    </aegle-tooltip>

    <h2>更多 Content</h2>
    <aegle-tooltip placement="top">
      <div slot="content">多行信息<br/>第二行信息</div>
      <aegle-button>Top center</aegle-button>
    </aegle-tooltip>

    <h2>高级扩展</h2>
    <aegle-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
      <aegle-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</aegle-button>
    </aegle-tooltip>
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
      visible1: false,
      disabled: false
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

<style scoped lang="scss">
.box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .aegle-tooltip__popper,
    .right .aegle-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>
