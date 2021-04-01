<template>
  <div id="list">
    <el-table :data="articles" style="width: 100%">
      <el-table-column prop="aid" label="工单号"> </el-table-column>
      <el-table-column prop="headline" label="标题">
        <template slot-scope="scope">
          <span>{{ catStr(scope.row.headline) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope">
          <span>{{ catStr(scope.row.content) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <span>{{ statusDesc(scope.row.status) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="时间">
        <template slot-scope="scope">
          <span>{{ formatDate(scope.row.time) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status == 2"  type="text" size="medium" @click="$emit('deal-article',scope.row.aid)">处理</el-button>
          <span v-else></span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Utils from '.././utils/utils'
export default {
  name: "list",
  props: ["articles"],
  methods: {
      formatDate(time) {
          return Utils.formatTime(time);
      },
    catStr(str) {
      if (str.length > 8) {
        return str.substr(0, 8) + "...";
      } else {
        return str;
      }
    },
    statusDesc(status) {
      switch (status) {
        case 0:
          return "已处理";
        case 1:
          return "待用户处理";
        case 2:
          return "待我处理";
        default:
          return "已处理";
      }
    },
  },
};
</script>
<style scoped>
</style>