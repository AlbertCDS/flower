<template>
	<div>
		<el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1"> 
        <template slot="title"> 
          <span>鲜花</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          
          <span>永生花</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        
        <span slot="title">花器</span>
      </el-menu-item>
      <el-menu-item index="4">
        
        <span slot="title">清凉单品</span>
      </el-menu-item>
      <el-menu-item index="5">
        
        <span slot="title">极致混合</span>
      </el-menu-item>
      <el-menu-item index="6">
        
        <span slot="title">惊喜MIX</span>
      </el-menu-item>
      <el-menu-item index="7">
        
        <span slot="title">升级PRO</span>
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


<style lang="css" scoped>

.el-col-12{
  width:100%;
}
</style>