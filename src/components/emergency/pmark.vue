<template>
  <div id="pmark">
    <el-row>
      <el-col :span="24" style="margin-left: 0">
        <span style="color: #8492a6; font-size: 20px; margin-bottom: 20px"
          >条件搜索</span
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
       <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>基本信息</span>
          </div>
          <div
            style="display: flex; flex-direction: column; text-align: center"
          >
            <span style="color: #8492a6; font-size: 15px">姓名</span>
            <el-input
              v-model="name"
              placeholder="姓名"
            ></el-input>
            <span style="color: #8492a6; font-size: 15px">身份证号</span>
            <el-input
              v-model="idCard"
              placeholder="身份证"
            ></el-input>
          </div>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>地址和症状</span>
          </div>
          <div
            style="display: flex; flex-direction: column; text-align: center"
          >
            <span style="color: #8492a6; font-size: 15px">症状</span>
            <div style="display:flex;flex-direction:row;text-align:center;margin:20px 20px 5px 30%">
            <el-radio label="1" v-model="symtom">有症状</el-radio>
            <el-radio label="2" v-model="symtom">全部</el-radio>
            </div>
            <span style="color: #8492a6; font-size: 15px">居住地</span>
            <el-input
              v-model="liveAddrInput"
              placeholder="居住地地址详细信息"
            ></el-input>
          </div>
        </el-card>
      </el-col>
    </el-row>
     <el-divider>
       <span>结果</span>
     </el-divider>
          <el-button @click="fresh">刷新结果</el-button>
    <PersonList :persons="persons" v-on:mark="mark"/>
  </div>
</template>
<script>
import Reqs from '../.././requests'
import PersonList from './personlist.vue'
export default {
  name: "pmark",
  components:{
      PersonList
  },
  data() {
    return {
      date: "",
      liveAddrInput:"",
      symtom: "",
      name:"",
      idCard:"",
      persons:[],
      timer:''
    };
  },
  mounted() {
      this.submitData()   
  },
  methods: {
    fresh() {
      this.submitData();
    },
    mark() {
      this.submitData();
    },
    dateChoose() {
      this.startDate = this.date[0];
      this.endDate = this.date[1];
    },
    submitData() {
        let _this = this;
        let s = (this.symtom == '1' ? true : false);
        Reqs.search(this.liveAddrInput,this.name,this.idCard,s)
        .then(res => {
            if(res.data.code == 1) {
                _this.persons = res.data.data;
            }
        })
        .catch(res => console.log(res))
    }
  },
  watch: {
    symtom: function () {
      this.submitData()
    },
    liveAddrInput:function () {
      this.submitData()
    },
    name:function () {
      this.submitData()
    },
    idCard:function () {
      this.submitData()
    }
  },
};
</script>
<style scoped>
#pmark {
  background-color: white;
}
.el-row {
  margin: 20px 20px 0 20px;
  font-size: 17px;
  color: dimgrey;
}
.small-container {
  font-size: 15px;
  color: black;
  margin-right: 4px;
}
.el-col {
  margin-left: 60px;
  margin-top: 20px;
}
.el-input {
  margin-top: 5px;
}
</style>