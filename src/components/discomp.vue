<template>
  <div id="discom">
    <span style="color: #8492a6; font-size: 20px; margin-bottom: 20px"
      >按照日期查看当天的人员分布</span
    >
    <el-row>
      <el-col :span="8"></el-col>
      <el-col :span="24">
        <el-date-picker
          v-model="value1"
          :editable="false"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="选择日期"
          @change="choose"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row>
      <el-col :span="22">
        <div id="container">
        </div>
      </el-col>
    </el-row>
  </div>
</template>
    <script src="https://map.qq.com/api/gljs?v=2.exp&key=RCEBZ-A3PK2-LGHU2-CWQKI-DVM23-NYBQ6&libraries=visualization"></script>
<script>
import Reqs from ".././requests";
export default {
  name: "discomp",
  components: {},
  data() {
    return {
      value1: "",
      dot: "",
    };
  },
  methods: {
    initMap() {
      var center = new TMap.LatLng(37.80787, 112.269029);
      //初始化地图
      var map = new TMap.Map("container", {
        zoom: 4, //设置地图缩放级别
        pitch: 0,
        center: center, //设置地图中心点坐标
        mapStyleId: "style1", //个性化样式
      });
      // 创建散点图
      var dot = new TMap.visualization.Dot({
        faceTo: "screen", // 设置散点朝向
        styles: {
          redCircle: {
            // 定义一个红色圆形样式
            type: "circle",
            fillColor: "#00FFFF",
          },
        },
      }).addTo(map); // 通过addTo()添加到指定地图实例
      // 设置数据，若需要更新数据则再次调用setData方法即可
      this.dot = dot;
      //定义事件处理方法
      var clickHandler = function (evt) {
        var lat = evt.latLng.getLat().toFixed(6);
        var lng = evt.latLng.getLng().toFixed(6);
      };
      //Map实例创建后，通过on方法绑定点击事件
      
    },
    choose(d) {
      // 传入服务器取得数据并设置数据
      Reqs.adrsByDay(d)
        .then((resp) => {
          console.log(resp);
          let _this = this;
          if (resp.data.code == 1) {
            for (let addr in resp.data.data) {
              // 添加自定义样式
              resp.data.data[addr].styleId = "redCircle";
            }
          }
          // 设置数据
          _this.dot.setData(resp.data.data);
        })
        .catch((resp) => {
          console.log(resp);
        });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>
<style scoped>
#discom {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 5px 20px 20px;
}

#container {
  width: 100%;
  height: 500px;
  margin: 25px 0 0 25px;
}
.el-date-picker {
  margin-left: 40%;
}
</style>