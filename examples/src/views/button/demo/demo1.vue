<template>
  <div>
    <h2>基础用法</h2>
    <el-row>
      <aegle-button icon="&#xe60f;">默认按钮</aegle-button>
      <aegle-button type="primary">主要按钮</aegle-button>
      <aegle-button icon="aegle-icon-lock" type="success">成功按钮</aegle-button>
      <aegle-button type="info">信息按钮</aegle-button>
      <aegle-button type="warning">警告按钮</aegle-button>
      <aegle-button type="danger">危险按钮</aegle-button>
    </el-row>

    <el-row>
      <aegle-button plain>朴素按钮</aegle-button>
      <aegle-button type="primary" plain>主要按钮</aegle-button>
      <aegle-button type="success" plain>成功按钮</aegle-button>
      <aegle-button type="info" plain>信息按钮</aegle-button>
      <aegle-button type="warning" plain>警告按钮</aegle-button>
      <aegle-button type="danger" plain>危险按钮</aegle-button>
    </el-row>

    <el-row>
      <aegle-button>幽灵按钮</aegle-button>
      <aegle-button type="primary" ghost>主要按钮</aegle-button>
      <aegle-button type="success" ghost>成功按钮</aegle-button>
      <aegle-button type="info" ghost>信息按钮</aegle-button>
      <aegle-button type="warning" ghost>警告按钮</aegle-button>
      <aegle-button type="danger" ghost>危险按钮</aegle-button>
    </el-row>

    <el-row>
      <aegle-button round>圆角按钮</aegle-button>
      <aegle-button type="primary" round>主要按钮</aegle-button>
      <aegle-button type="success" round>成功按钮</aegle-button>
      <aegle-button type="info" round>信息按钮</aegle-button>
      <aegle-button type="warning" round>警告按钮</aegle-button>
      <aegle-button type="danger" round>危险按钮</aegle-button>
    </el-row>

    <el-row>
      <aegle-button icon="el-icon-search" circle />
      <aegle-button type="primary" icon="el-icon-edit" circle />
      <aegle-button type="success" icon="el-icon-check" circle />
      <aegle-button type="info" icon="el-icon-message" circle />
      <aegle-button type="warning" icon="el-icon-star-off" circle />
      <aegle-button type="danger" icon="el-icon-delete" circle />
    </el-row>

    <h2>禁用状态</h2>
    <el-row>
      <aegle-button disabled>默认按钮</aegle-button>
      <aegle-button type="primary" disabled>主要按钮</aegle-button>
      <aegle-button type="success" disabled>成功按钮</aegle-button>
      <aegle-button type="info" disabled>信息按钮</aegle-button>
      <aegle-button type="warning" disabled>警告按钮</aegle-button>
      <aegle-button type="danger" disabled>危险按钮</aegle-button>
    </el-row>

    <el-row>
      <aegle-button plain disabled>朴素按钮</aegle-button>
      <aegle-button type="primary" plain disabled>主要按钮</aegle-button>
      <aegle-button type="success" plain disabled>成功按钮</aegle-button>
      <aegle-button type="info" plain disabled>信息按钮</aegle-button>
      <aegle-button type="warning" plain disabled>警告按钮</aegle-button>
      <aegle-button type="danger" plain disabled>危险按钮</aegle-button>
    </el-row>

    <el-row>
      <aegle-button ghost disabled>幽灵按钮</aegle-button>
      <aegle-button type="primary" ghost disabled>主要按钮</aegle-button>
      <aegle-button type="success" ghost disabled>成功按钮</aegle-button>
      <aegle-button type="info" ghost disabled>信息按钮</aegle-button>
      <aegle-button type="warning" ghost disabled>警告按钮</aegle-button>
      <aegle-button type="danger" ghost disabled>危险按钮</aegle-button>
    </el-row>

    <el-row>
      <aegle-button link disabled>幽灵按钮</aegle-button>
      <aegle-button type="primary" link disabled>主要按钮</aegle-button>
      <aegle-button type="success" link disabled>成功按钮</aegle-button>
      <aegle-button type="info" link disabled>信息按钮</aegle-button>
      <aegle-button type="warning" link disabled>警告按钮</aegle-button>
      <aegle-button type="danger" link disabled>危险按钮</aegle-button>
    </el-row>

    <h2>链接按钮</h2>
    <el-row>
      <aegle-button link>链接按钮</aegle-button>
      <aegle-button type="primary" link>主要按钮</aegle-button>
      <aegle-button type="success" link>成功按钮</aegle-button>
      <aegle-button type="info" link>信息按钮</aegle-button>
      <aegle-button type="warning" link>警告按钮</aegle-button>
      <aegle-button type="danger" link>危险按钮</aegle-button>
    </el-row>

    <h2>文字按钮</h2>
    <aegle-button type="text">文字按钮</aegle-button>
    <aegle-button type="text" disabled>文字按钮</aegle-button>

    <h2>图标按钮</h2>
    <aegle-button type="primary" icon="el-icon-edit" />
    <aegle-button type="primary" icon="el-icon-share" />
    <aegle-button type="primary" icon="el-icon-delete" />
    <aegle-button type="primary" icon="el-icon-search">搜索</aegle-button>
    <aegle-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></aegle-button>

    <h2>按钮组</h2>
    <el-button-group>
      <aegle-button type="primary" icon="el-icon-arrow-left">上一页</aegle-button>
      <aegle-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></aegle-button>
    </el-button-group>
    <el-button-group>
      <aegle-button type="primary" icon="el-icon-edit" />
      <aegle-button type="primary" icon="el-icon-share" />
      <aegle-button type="primary" icon="el-icon-delete" />
    </el-button-group>

    <h2>加载中</h2>
    <aegle-button type="primary" :loading="true">加载中</aegle-button>

    <h2>不同尺寸</h2>
    <el-row>
      <aegle-button size="large">大等按钮</aegle-button>
      <aegle-button>默认按钮</aegle-button>
      <aegle-button size="small">小型按钮</aegle-button>
      <aegle-button size="mini">超小型按钮</aegle-button>
    </el-row>
    <el-row>
      <aegle-button size="large" round>大等按钮</aegle-button>
      <aegle-button round>默认按钮</aegle-button>
      <aegle-button size="small" round>小型按钮</aegle-button>
      <aegle-button size="mini" round>超小型按钮</aegle-button>
    </el-row>
  </div>
</template>
