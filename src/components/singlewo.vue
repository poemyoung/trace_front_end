<template>
  <div id="singlewo">
      <el-row>
      <el-col :span="24"
        ><h3>内容</h3></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24" 
        ><span>{{ wo.content }}</span></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24" 
        ><h3>图片</h3></el-col
      >
    </el-row>
    <ul v-for="(image, index) in wo.images" :key="index">
      <el-image
        style="width: 300px; height: 300px"
        :src="image"
        fit="contain"
      ></el-image>
    </ul>
    <el-row>
      <el-col :span="24" 
        ><h3>时间</h3></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24" 
        ><span>{{ wo.time }}</span></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24" 
        ><h3>回复人</h3></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="8"
        ><span style="color:red">{{ wo.whom ? '用户' : '管理员' }}</span></el-col
      >
    </el-row>
    <el-divider content-position="left"></el-divider>
    
  </div>
</template>
<script>
import Reqs from ".././requests";
import Util from "../utils/utils";

export default {
  name: "singlewo",
  props: ["wo"],
  created() {
    // 处理图片
    let _this = this;
    if (this.wo.whom) {
      Reqs.downLoadImages(this.wo.images)
        .then((res) => {
          _this.wo.images = JSON.parse(res.data.data);
        })
        .catch((res) => console.log(res));
    }else {
      _this.wo.images = Reqs.getAdminImage(this.wo.images)
    }
    _this.wo.time = Util.formatTime(new Date(_this.wo.time));
  }
};
</script>
<style scoped>
#singlewo{
     text-align: left;
}
ul {
  float: left;
}
.up-class {
    font-size: 1.3em;
}
h3 {
    color : blue;
   
}
</style>