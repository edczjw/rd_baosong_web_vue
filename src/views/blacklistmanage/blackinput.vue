<template>
  <div class="page-human">
    <div class="li-title">
      <b>黑名单管理 / 黑名单批量导入 & 移除</b>
    </div>
    <el-card style="padding:20px; ">
      <el-row :gutter="24">
        <el-col :span="12">
          <el-card class="lod" style="padding:20px;margin:50px auto;width:450px;border-radius:50px;cursor:pointer;text-align:center;">
            <form id="form-article-add" method="post" enctype="multipart/form-data">  
              <input type="file" name="file" @change="pickFileADD" accept=".xls, .xlsx, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
              <el-button size="small" type="primary" @click="submitUploadADD">批量上传<i class="el-icon-upload el-icon--right"></i></el-button>
            </form>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="lod" style="padding:20px;margin:50px auto;width:450px;border-radius:50px;cursor:pointer;text-align:center;">
            <form id="form-article-add" method="post" enctype="multipart/form-data">  
              <input type="file" name="file" @change="pickFileDEL" accept=".xlsx, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
              <el-button size="small" type="danger" @click="submitUploadDEL">批量移除<i class="el-icon-delete el-icon--right"></i></el-button>
            </form>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
        canUpload1:false,
        canUpload2:false,
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {

  },

  methods: {
      //上传按钮
      pickFileADD(e){
          var files = e.target.files || e.dataTransfer.files;
          if(!files.length) return;
          this.excelTobaseADD(files[0]);
      },

      excelTobaseADD(file){
          var that = this;
          var pos = file.name.lastIndexOf('.');
          var type = file.name.substring(pos + 1);
          if(type.toLowerCase() != 'xls' && type.toLowerCase() != 'xlsx' && type.toLowerCase() !='csv'){
              this.$message.error('请上传xls、xlsx、csv格式的excel文件.');
              this.canUpload1 = false;
          }else{
              this.fileType = type;
              this.canUpload1 = true;
              this.fileName = file.name.substring(0,pos);
              this.file = file;
              var reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = function(e){
                  that.base64 = e.target.result;
              };
           }
      },

//异步上传
      async submitUploadADD(){
          if(this.canUpload1){
			    var FormDatas=new FormData($("#form-article-add")[0]);
              FormDatas.append("file",FormDatas);
              this.$axios({
                  method: "post",
                  url: this.$store.state.domain + "/blacklist/batchAdd",
                  data: FormDatas,
                  headers:{'Content-Type':'multipart/form-data'}
                }).then(
                  response => {
                    var res = response.data;
                    if (res.code == 0) {
                        this.$message({
                          message: '导入成功!',
                          type: 'success'
                        });
                    } else {
                      this.$message({
                        message: res.msg,
                        type: "error"
                      });
                    }
                  },
                  error => {
                    this.$message({
                        message: '500错误!',
                        type: "error"
                      });
                      }
                );
          }else{
          this.$message({
            type: 'danger',
            message: '请选取文件上传.'
          }); 
      }
      },

      //上传按钮
      pickFileDEL(e){
          var files = e.target.files || e.dataTransfer.files;
          if(!files.length) return;
          this.excelTobaseDEL(files[0]);
      },

      excelTobaseDEL(file){
          var that = this;
          var pos = file.name.lastIndexOf('.');
          var type = file.name.substring(pos + 1);
          if(type.toLowerCase() != 'xls' && type.toLowerCase() != 'xlsx' && type.toLowerCase() !='csv'){
              this.$message.error('请上传xls、xlsx、csv格式的excel文件.');
              this.canUpload2 = false;
          }else{
              this.fileType = type;
              this.canUpload2 = true;
              this.fileName = file.name.substring(0,pos);
              this.file = file;
              var reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = function(e){
                  that.base64 = e.target.result;
              };
           }
      },

//异步上传
      async submitUploadDEL(){
          if(this.canUpload2){
            this.$confirm('此操作将从服务器中删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
			    var FormDatas=new FormData($("#form-article-add")[0]);
                FormDatas.append("file",FormDatas);
                this.$axios({
                    method: "post",
                    url: this.$store.state.domain + "/blacklist/batchDel",
                    data: FormDatas,
                    headers:{'Content-Type':'multipart/form-data'}
                    }).then(
                    response => {
                        var res = response.data;
                        if (res.code == 0) {
                            this.$message({
                            message: '批量删除成功!',
                            type: 'success'
                            });
                        } else {
                        this.$message({
                            message: res.msg,
                            type: "error"
                        });
                        }
                    },
                    error => {
                        this.$message({
                            message: '500错误!',
                            type: "error"
                        });
                        }
                    );
          }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });       
        });
      }else{
          this.$message({
            type: 'danger',
            message: '请选取文件上传.'
          }); 
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
    background: rgba(174, 228, 240, 0.822);
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
    margin-top: 10px;
  }
  .human-pagination {
    margin-top: 30px;
  }
}
.lod{
  border: 1px solid rgba(162, 199, 197, 0.589);
}
.lod:hover{
  border: 1px solid rgba(34, 223, 214, 0.589);
}
</style>