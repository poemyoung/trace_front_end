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
            <span>时间</span>
          </div>
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="至"
            value-format="yyyy-MM-dd"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="dateChoose"
          >
          </el-date-picker>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>症状</span>
          </div>
          <el-radio v-model="symtom" label="1">有症状</el-radio>
          <el-radio v-model="symtom" label="2">无症状</el-radio>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
       <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>个人信息</span>
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
            <span>地点</span>
          </div>
          <div
            style="display: flex; flex-direction: column; text-align: center"
          >
            <span style="color: #8492a6; font-size: 15px">经过地</span>
            <el-input
              v-model="passAddrInput"
              placeholder="打卡经过地址详细信息"
            ></el-input>
            <span style="color: #8492a6; font-size: 15px">居住地</span>
            <el-input
              v-model="liveAddrInput"
              placeholder="居住地地址详细信息"
            ></el-input>
          </div>
        </el-card>
      </el-col>
    </el-row>
     <el-divider>结果</el-divider>
    <PersonList :persons="persons" />
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
      startDate: "",
      endDate: "",
      passAddrInput: "",
      liveAddrInput:"",
      symtom: "",
      name:"",
      idCard:"",
      persons:[],
      timer:''
    };
  },
  mounted() {
      let _this = this;
      this.timer = setInterval(() => {
          _this.submitData()
      },5000)
  },
  methods: {
    dateChoose() {
      this.startDate = this.date[0];
      this.endDate = this.date[1];
    },
    submitData() {
        let _this = this;
        let s = (this.symtom == '1' ? true : false);
        Reqs.search(this.startDate,this.endDate,this.liveAddrInput,this.passAddrInput,this.name,this.idCard,s)
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
    startDate:function () {
      this.submitData()
    },
    endDate:function () {
      this.submitData()
    },
    liveAddrInput:function () {
      this.submitData()
    },
    passAddrInput:function () {
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