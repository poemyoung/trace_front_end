<template>
  <div id="womanage">
    <el-tabs v-model="activeName" type="border-card" >
      <el-tab-pane label="全部工单" name="first">
          <list :articles="allwo" v-on:deal-article="dealWo($event)"/>
      </el-tab-pane>
      <el-tab-pane label="未处理工单" name="second">
          <list :articles="unhandle"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Reqs from '.././requests'
import List from './list.vue'
export default {
  name: "womanage",
  components:{
      List
  },
  data() {
    return {
      activeName: "first",
      allwo:[],
      unhandle:[]
    };
  },
  mounted() {
      // 发起请求拿到全部工单列表并分类
      let _this = this;
      Reqs.allArticles()
      .then((response) => {
          if(response.data.code == 1) {
              // 按照时间排序
              response.data.data.sort((a,b) => {
                  return a.time < b.time ? -1 : 1;
              })
              _this.allwo = response.data.data;
              // 分类未处理
              for(let i = 0;i < response.data.data.length;i++) {
                  let d = response.data.data[i];
                  if(d.status == 2) {
                      _this.unhandle.push(d);
                  }
              }
          }
      })
      .catch((response) => {
          console.log(response);
      }) 
  },

  methods: {
    dealWo(aid) {
        this.$router.push({path : "wodeal/" + aid});
    }
  },
};
</script>
<style scoped>
</style>