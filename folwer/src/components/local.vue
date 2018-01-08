<template>
	<div>
	<img src="https://img.thebeastshop.com/app/retail/retail/sh-ysxtd.png@90q.png" style="width:100%;">
		<el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">店铺地址：大连市开发区</span>
        <i class="el-icon-arrow-right" style="float:right;line-height: 56px;"></i>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-phone"></i>
        <span slot="title">店铺电话：13322237959</span>
        <i class="el-icon-arrow-right" style="float:right;line-height: 56px;"></i>
      </el-menu-item>
       <el-menu-item index="3">
        <i class="el-icon-time"></i>
        <span slot="title">营业时间：10:00～22:00</span>
        <i class="el-icon-arrow-right" style="float:right;line-height: 56px;"></i>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
	</div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>

	.el-col-12{
  width:100%;
}

</style>