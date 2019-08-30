<template>
  <div class="page-human">
    <div class="li-title">
      <b>黑名单管理 / 黑名单批量导入</b>
    </div>
    <el-card>
        <div style="margin-right:100px;width:500px">
            <input type="file" name="myfiles" @change="pickFile">
            <el-button size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        canUpload:false,
        form:{
            fileType:"",
            fileName:"",
            base64:""
        }
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    // this.load(this.searchform);
  },

  methods: {
      //上传按钮
      pickFile(e){
          var files = e.target.files || e.dataTransfer.files;
          if(!files.length) return;
          this.excelTobase(files[0]);
      },

      excelTobase(file){
          var that = this;
          var pos = file.name.lastIndexOf('.');
          var type = file.name.substring(pos + 1);
          if(type.toLowerCase() != 'xls' && type.toLowerCase() != 'xlsx' && type.toLowerCase() !='csv'){
              this.$message.error('请上传xls、xlsx、csv格式的excel文件.');
              this.canUpload = false;
          }else{
              this.fileType = type;
              this.canUpload = true;
              this.fileName = file.name.substring(0,pos);
              var reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = function(e){
                  that.base64 = e.target.result;
              };
           }
      },

      async submitUpload(){
          if(this.canUpload){
              //axios调后台接口
              console.log(this.fileType)
              console.log(this.fileName)
              console.log(this.base64)
          }
      }
  },
  watch: {}
};
</script>
<style lang='less' scoped>
//  导入统一样式less样式
@import "../users/style.css";
/deep/ .el-card {
  // background: rgba(255, 255, 255, 0.1);
  /deep/ .el-table tr,
  .el-table th {
    background: rgba(173, 173, 173, 0.3);
    // background: rgb(248, 246, 246);
    color: rgb(118, 104, 104);
    font-family: "苹方";
  }
  /deep/ .el-table--border td,
  .el-table--border th,
  .el-table__body-wrapper
    .el-table--border.is-scrolling-left
    ~ .el-table__fixed {
    border-right: 1px solid #fff;
  }
  .el-form-item__content {
    margin-left: 130px !important;
  }
}
.page-human {
  padding: 25px 50px;
  // background: rgb(202, 201, 201);
  .human-table {
    margin-top: 40px;
  }
  .human-pagination {
    margin-top: 30px;
  }
}
</style>