<template>
    <div id="wodeal">
        <h2>{{headLine}}</h2>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="8">工单号: {{$route.params.aid}} </el-col>
            <el-col :span="8">状态: {{status}} </el-col>
            <el-col :span="8">提交时间: {{submitTime}} </el-col>
        </el-row>
        <el-divider></el-divider>
        <ul>
            <li v-for="wo in wos" :key="wo.aid">
                <SingleWo :wo="wo"/>
            </li>
        </ul>
        <el-divider>回复</el-divider>
        <Input :aid="$route.params.aid" :wo="true" :headline="headline" v-on:deal-submit="submit()"/>
    </div>

</template>
<script>
import Reqs from '.././requests'
import Util from '../utils/utils'
import SingleWo from '../components/singlewo.vue'
import Input from "./input.vue"

export default {
    name:"wodeal",
    data() {
        return {
            headLine : '',
            status : '',
            submitTime : '',
            wos:''
        }
    },
    components:{
        SingleWo,Input
    },
    mounted() {
        let _this = this;
        Reqs.articleDetail(this.$route.params.aid)
        .then(res => {
            console.log(res);
            let data = res.data.data;
            let d = new Date(data.wos[0].time);
            _this.submitTime = Util.formatTime(d);
            _this.status = data.statusDesc;
            _this.headLine = data.wos[0].headLine;
            _this.wos = data.wos;
        })
        .catch(res => console.log(res))
    },
    methods:{
        submit() {
            this.$router.go(0);
        }
    }
}
</script>
<style scoped>
    #wodeal{
        background-color: white;
        text-align: center;
    }
    h2 {
        margin-bottom: 1em;
    }
    li{
        list-style-type: none;
    }
</style>