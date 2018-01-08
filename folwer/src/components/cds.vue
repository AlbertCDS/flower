<template>
	<el-tabs type="border-card">
  <el-tab-pane label="手机号登陆">
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="手机号">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="验证码">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  </el-form>
</el-tab-pane>
  <el-tab-pane label="邮箱登陆">
  <div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="邮箱">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="验证码">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  </el-form></el-tab-pane>
</el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>


<style lang="scss" scoped>
.el-tab-pane[data-v-7cf2b55c]{
  width:100%;
}

</style>