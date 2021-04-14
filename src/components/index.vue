<template>
  <div id="index">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>本管理员端说明</span>
      </div>
    <div style="text-align:center">
        <p>
            此管理员端为超级管理员端，需遵守以下规定：
            <el-divider></el-divider>
            1,管理员主要职责有三点：标记用户感染或者未感染、处理工单请求、查看当天系统报备情况确保稳定性
            <el-divider></el-divider>
            2,不得擅自标记用户为已感染或者未感染，需通过工单系统申请报备之后方可标记
            <el-divider></el-divider>
            3，涉及用户隐私事情，一律通过工单系统上报
        </p>
    </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "index",
};
</script>
<style scoped>
</style>