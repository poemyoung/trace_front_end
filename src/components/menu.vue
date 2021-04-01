<template>
  <div id="v-menu">
    <el-row>
      <el-col :span="24">
    <el-menu
      v-bind:default-active="active"
      mode="vertical"
      background-color="#2f4f4f"
      text-color="#FFF"
      active-text-color="#00bfff"
      
    > 
    <!-- 首页 -->
    <el-menu-item index="0" @click="goIndex">
        <i ></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="checkDis">
            <i class="el-icon-view"></i>
            人员分布
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 消息管理 -->
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-chat-line-round"></i>
          <span>消息管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" @click="woMag">
            <i class="el-icon-s-order"></i>
            工单管理
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-warning"></i>
          <span>应急管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click="pMark">
            <i class="el-icon-s-flag"></i>
            风险标记
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "v-menu",
  data() {
    return {
      active:'1'
    };
  },
  computed: {
   
  },
  methods: {
    pMark() {
      this.$router.push("/pmark")
    },
    checkDis() {
        this.$router.push("/distribute")
    },
    woMag() {
      this.$router.push({path : "/workorder"})
    },
    goIndex() {
      this.$router.push("/index")
    }
  },
};
</script>
<style scoped>
.el-menu{
  position: relative;
  width: 100%;
}
#v-menu {
  font-size: 30px;
  width: 250px;
  font-family: "Helvetica Neue";
  position: absolute;
  
}
span {
  margin-left: 20px;
}
</style>