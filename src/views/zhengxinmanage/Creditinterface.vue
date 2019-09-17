<template>
  <div class="page-human">
    <div class="li-title">
      <b>征信管理 / 征信接口统计</b>
    </div>
    <el-card>
      <el-form :model="searchform" ref="searchform" label-width="210px">
        <el-row type="flex" class="human-form">
          <el-col :span="10">
            <el-form-item label="数据源名称" prop="sourceName">
              <el-select
                size="mini"
                v-model="searchform.sourceName"
                placeholder="请选择数据源"
                @change="originChage"
              >
                <el-option
                  v-for="item in originData"
                  :key="item.code"
                  :label="item.name"
                  :value="item.code"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="接口名称" prop="interfaceName">
              <el-select size="mini" v-model="searchform.interfaceName" placeholder="请选择接口名称">
                <el-option
                  v-for="item in interfaceData"
                  :key="item.code"
                  :label="item.name"
                  :value="item.code"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="征信平台调第三方开始日期" prop="beginDate">
              <el-date-picker
                size="mini"
                v-model="searchform.beginDate"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="开始日期"
                :picker-options="pickerOptions1"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="至" prop="endDate">
              <el-date-picker
                size="mini"
                v-model="searchform.endDate"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions1"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item>
              <el-button size="mini" type="primary" @click="submitForm()">搜索</el-button>
              <el-button size="mini" @click="resetForm('searchform')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="human-table">
      <el-table
        :data="tableData"
        border
        size="mini"
        stripe
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%; height:100%;"
      >
        <el-table-column type="index" label="序号" align="center" width="55"></el-table-column>
        <el-table-column prop="sourceName" label="数据源名称" align="center"></el-table-column>
        <el-table-column prop="sourceCode" label="英文名称" align="center"></el-table-column>
        <el-table-column prop="interfaceCode" label="征信接口" align="center"></el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.status=='N'">关闭</span>
            <span v-if="scope.row.status=='Y'">开启</span>
          </template>
        </el-table-column>
        <el-table-column prop="callNumber" label="调用次数" align="center"></el-table-column>
        <el-table-column prop="successCallNumber" label="成功次数" align="center"></el-table-column>
        <el-table-column prop="successCallRate" label="成功率" align="center">
          <template slot-scope="scope">
            {{scope.row.successCallRate*100}}%
          </template>
        </el-table-column>
        <el-table-column prop="result" label="调用规则" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="ctime" label="接口文档" align="center">
          <template slot-scope="scope">
            <a :href="scope.row.url" target ="_blank">下载</a>
            <!-- <el-button type="text" size="small" @click="download()"></el-button>  -->
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="human-pagination">
        <el-pagination
          background
          style="text-align:center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="this.searchform.pageIndex"
          :page-sizes="[20,50,100]"
          :page-size="this.searchform.pageSize"
          layout="total, sizes, prev, pager, next"
          :total="count"
        >
          <!--这是显示总共有多少数据-->
        </el-pagination>

        <el-dialog title="调用规则" width="30%" center :visible.sync="dialogFormVisible">
          <el-form :model="form" class="showform">
            <el-form-item label="有效天数" :label-width="formLabelWidth">
              <el-input
                style="width:90%"
                size="mini"
                v-model="form.effectiveDay"
                auto-complete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="识别关联勾选">
              <el-checkbox-group v-model="checkList">
                <el-checkbox border size="mini" label="身份证"></el-checkbox>
                <el-checkbox border size="mini" label="手机号"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </el-card>
  </div>
</template>

<script>
import { formatDate } from "../../common/date.js";
export default {
  data() {
    return {
      count: 0,
      dialogFormVisible: false,
      formLabelWidth: "90px",
      checkList: [],
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 24 * 60 * 60 * 1000;
        }
      },
      interfaceCode: "",
      originData: [],
      interfaceData: [],
      searchform: {
        sourceName: "", //数据源名称
        interfaceName: "", //接口名称
        beginDate: "", //申请开始时间
        endDate: "", //至
        pageIndex: 1, //初始页
        pageSize: 50 //显示当前行的条数
      },
      form: {
        effectiveDay: "",
        resource: ""
      },
      tableData: []
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    this.originList();
    this.load(this.searchform);
  },

  methods: {
    //编辑规则
    edit(data) {
      this.dialogFormVisible = true;
      this.interfaceCode = data.interfaceCode;
      var arr = [];
      this.checkList = [];
      switch (Number(data.identifyType)) {
        case 1:
          arr = ["手机号"];
          break;
        case 2:
          arr = ["身份证"];
          break;
        case 3:
          arr = ["手机号", "身份证"];
          break;
        case 0:
          arr = [];
          break;
      }
      this.form.effectiveDay = data.effectiveDay;
      this.checkList = arr;
    },
    //数据源获取
    originList() {
      this.$http({
        method: "post",
        url: this.$store.state.domain + "/crcs/origin/list",
        data: {}
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {
            this.originData = res.detail.result;
          } else {
            this.$message({
              message: res.message,
              type: "error"
            });
          }
        },
        error => {
          this.$message({
            dangerouslyUseHTMLString: true, //表示提示的是html片段
            message:
              '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-shengqi"></use> </svg> ' +
              error.body.message,
            type: "error"
          });
        }
      );
    },
    confirm() {
      let userId = sessionStorage.getItem("userId");
      if (this.form.effectiveDay < 0) {
        this.$message({
          message: "有效天数不能小于0"
        });
        return;
      } else {
        var data = {
          interfaceCode: this.interfaceCode,
          effectiveDay: Number(this.form.effectiveDay),
          identifyType: null,
          userId: userId
        };
        var len = this.checkList.length;
        switch (len) {
          case 0:
            Object.assign(data, { identifyType: 0 });
            break;
          case 1:
            if (this.checkList.indexOf("手机号") >= 0) {
              Object.assign(data, { identifyType: 1 });
            } else {
              Object.assign(data, { identifyType: 2 });
            }
            break;
          case 2:
            Object.assign(data, { identifyType: 3 });
            break;
        }
        this.$http
          .post(this.$store.state.domain + "/crcs/interface/update", data)
          .then(
            response => {
              var res = response.data;
              if (res.code == 0) {
                this.$message({
                  message: res.detail.result,
                  type: "success"
                });
                this.load(this.searchform);
                this.dialogFormVisible = false;
              } else {
                this.$message({
                  message: res.message,
                  type: "error"
                });
              }
            },
            error => {
              this.$message({
                dangerouslyUseHTMLString: true, //表示提示的是html片段
                message:
                  '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-shengqi"></use> </svg> ' +
                  error.body.message,
                type: "error"
              });
            }
          );
      }
    },
    //数据名称值改变
    originChage(value) {
      var data = {
        originCode: value
      };
      this.searchform.interfaceName = ''
      this.interfaceList(data);
    },
    //接口名称获取
    interfaceList(data) {
      this.$http
        .post(this.$store.state.domain + "/crcs/interface/list", data)
        .then(
          response => {
            var res = response.data;
            if (res.code == 0) {
              this.interfaceData = res.detail.result;
            } else {
              this.$message({
                message: res.message,
                type: "error"
              });
            }
          },
          error => {}
        );
    },
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
    submitForm() {
      this.load(this.searchform);
    },
    // 重置功能
    resetForm(formName) {
      this.$refs[formName].resetFields();
      // this.getlist();
    },
    handleSizeChange(psize) {
      // 改变每页显示的条数
      this.searchform.pageSize = psize;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.searchform.pageIndex = 1;
      this.load(this.searchform);
    },

    // 初始页currentPage
    handleCurrentChange(pindex) {
      this.searchform.pageIndex = pindex;
      this.load(this.searchform);
    },
    //表单操作
    handleClick() {},
    godetail(id) {
      this.$router.push({
        path: "/details/applyDetail",
        query: {
          id: id
        }
      });
    },
    //初始化数据
    load(data) {
      this.tableData = [];
      this.$http
        .post(this.$store.state.domain + "/crcs/credit/interfaceList", data)
        .then(
          response => {
            var res = response.data;
            if (res.code == 0) {
              this.tableData = res.detail.result.pageList;
              this.count = res.detail.result.count;
              this.searchform.pageIndex = res.detail.result.pageIndex;
              this.searchform.pageSize = res.detail.result.pageSize;
            } else {
              this.$message({
                message: res.msg,
                type: "error"
              });
            }
          },
          error => {
            this.$message({
              dangerouslyUseHTMLString: true, //表示提示的是html片段
              message:
                '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-shengqi"></use> </svg> ' +
                error.body.message,
              type: "error"
            });
          }
        );
    }
  },
  watch: {}
};
</script>
<style lang='less' scoped>
//  导入统一样式less样式
@import "../users/style.css";
/deep/ .el-card {
  /deep/ .el-table tr,
  .el-table th {
    background: rgba(173, 173, 173, 0.3);
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
  .human-table {
    margin-top: 20px;
  }
  .human-pagination {
    margin-top: 30px;
  }
  a {
    color: #409eff;
  }
}

.showform {
  border: 1px dashed rgb(245, 197, 175);
  padding: 15px;
}
</style>