<template>
  <div id="input">
    <el-input
      type="textarea"
      :rows="8"
      placeholder="请输入内容"
      v-model="content"
      :show-word-limit="true"
    >
    </el-input>
    <!-- 图片上传 -->
    <el-upload
      :action="image_upload_addr"
      :auto-upload="false"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-change="handleChange"
      :file-list="imageFiles"
      :data=allData
      ref="upload"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script>
import Reqs from "../requests";
export default {
  name: "template",
  data() {
    return {
      content: "",
      image_upload_addr: "",
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      imageFiles: [],
      allData: {},
      imgNum:0,
    };
  },
  props: ["aid", "wo","headline"],
  mounted() {
    this.image_upload_addr = Reqs.imageLoad;
  },
  methods: {
    submit() {
      this.allData.content = this.content;
      this.allData.aid = this.aid;
      this.allData.wo = this.wo;
      this.allData.imgNum = this.imgNum;
      this.allData.headline = this.headline
      this.$refs.upload.submit();
      this.$emit("deal-submit");
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
      this.imageFiles = fileList;
      this.imgNum = fileList.length;
    },
    handleChange(file, fileList) {
      this.imageFiles = fileList;
      this.imgNum = fileList.length;
    },
  },
};
</script>
<style scoped>
#input {
  text-align: left;
}
.el-button {
  width: 15em;
  margin: 20px 50px 30px 0;
}
</style>