<template>
  <div id="login">
    <h2>管理员登录</h2>
    <el-input v-model="adm" placeholder="请输入账号"></el-input>
    <el-input v-model="pwd" show-password placeholder="请输入密码"></el-input>
    <el-button @click="login" type="primary">登录</el-button>
  </div>
</template>
<script>
import Requests from "../requests";
export default {
  name: "login",
  data() {
    return {
      adm: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      // 向springboot后台发起登录请求
      Requests.login(this.adm, this.pwd)
      .then((rep) => {
        // 判断是否登录成功
        if (rep == null || rep.code == 20002) {
           localStorage.IsLogin = false;
          this.$alert("账号或密码错误!", "错误", {
            confirmButtonText: "确定",
          });
        } else {
           // 本地存储
          localStorage.IsLogin = true;
          localStorage.LoginTime = new Date();
          // 跳转
          window.location.href = "/idx";
        }
      })
      .catch(res => console.log(res));
    },
  },
};
</script>
<style scoped>
#login {
  text-align: center;
  margin:8% 38% 0 38%;
  padding: 3% 3% 3% 3%
}
.el-button {
  width: 100%;
  margin-top: 5%;
}
.el-input {
  padding-top: 1%;
}
</style>