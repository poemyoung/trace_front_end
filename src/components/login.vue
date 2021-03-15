<template>
  <div id="login">
    <h2>管理员登录</h2>
    <el-input v-model="adm" placeholder="请输入账号"></el-input>
    <el-input v-model="pwd" show-password placeholder="请输入密码"></el-input>
  </div>
</template>
<script>
export default {
  name: "login",
  props:['adm','pwd']
};

</script>
<style scoped>

</style>