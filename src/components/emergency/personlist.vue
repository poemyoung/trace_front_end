<template>
  <div id="personList">
    <el-table
      :data="persons"
      style="width: 100%"
      :highlight-current-row="true"
      ref="multipleTable"
      tooltip-effect="dark"
      @selection-change="mark"
    >
      <el-table-column prop="uid" label="用户号"> </el-table-column>
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="身份证号">
        <template slot-scope="scope">
          <span>{{ scope.row.cardId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="居住地">
        <template slot-scope="scope">
          <span>{{ scope.row.livePlace }}</span>
        </template>
      </el-table-column>
      <el-table-column label="症状">
        <template slot-scope="scope">
          <span :style="{ color: scope.row.symptom ? 'red' : 'black' }">{{
            scope.row.symptom ? "异常" : "正常"
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="详细信息">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="medium"
            @click="$emit('check-detail', scope.row.uid)"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
      <el-table-column type="selection" width="55"> </el-table-column>
    </el-table>
    <div style="margin-top: 20px;text-align:right">
      <el-button @click="markNormal()">标为正常</el-button>
      <el-button @click="markBad()">标为异常</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "personList",
  props: ["persons"],
  data() {
    return {
      marks: [],
    };
  },
  watch: {},
  methods: {
    mark(val) {
      console.log(val);
      this.marks = val;
    },
    markNormal() {
      // 非正常标记为正常
      console.log(this.marks);
    },
    markBad() {
      console.log(this.marks);
    },
  },
};
</script>
<style scoped>
#personList {
  margin-bottom: 60px;
}
.el-radio-group {
  display: flex;
  flex-direction: row;
  text-align: center;
}
</style>