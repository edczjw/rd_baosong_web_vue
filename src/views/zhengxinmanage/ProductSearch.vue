<template>
  <div class="page-human">
    <div class="li-title">
      <b>征信管理 / 产品查询统计</b>
    </div>
    <el-card>
      <el-form :model="searchform" ref="searchform" label-width="210px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="产品名称" prop="productName">
              <el-select size="mini" v-model="searchform.productName" placeholder="请选择产品名称">
                <el-option
                  v-for="item in productData"
                  :key="item.code"
                  :label="item.name"
                  :value="item.code"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
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
          <el-col :span="8">
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
        <el-row type="flex" class="human-form">
          <el-col :span="8">
            <el-form-item label="业务系统查询征信平台开始日期" prop="beginDate">
              <el-date-picker
                size="mini"
                v-model="searchform.beginDate"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="请选择开始日期"
                :picker-options="pickerOptions1"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="至" prop="endDate">
              <el-date-picker
                size="mini"
                v-model="searchform.endDate"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="请选择结束日期"
                :picker-options="pickerOptions1"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
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
        <el-table-column type="index" label="序号" align="center" width="60"></el-table-column>
        <el-table-column prop="productName" label="产品名称" align="center"></el-table-column>
        <el-table-column prop="sourceName" label="数据源名称" align="center"></el-table-column>
        <el-table-column prop="interfaceName" label="征信接口" align="center"></el-table-column>
        <el-table-column prop="queryNumber" label="查询次数" align="center"></el-table-column>
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
      productData: [],
      originData: [],
      interfaceData: [],
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 24 * 60 * 60 * 1000;
        }
      },
      searchform: {
        sourceName: "", //数据源名称
        interfaceName: "", //接口名称
        productName: "", //产品名称
        beginDate: "", //申请开始时间
        endDate: "", //至
        pageIndex: 1, //初始页
        pageSize: 50 //显示当前行的条数
      },
      tableData: []
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    this.originList();
    this.interProduct({});
    this.load(this.searchform);
  },

  methods: {
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
    //数据名称值改变
    originChage(value) {
      var data = {
        originCode: value
      };
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
    //产品名称获取
    interProduct(data) {
      this.$http
        .post(this.$store.state.domain + "/crcs/product/list", data)
        .then(
          response => {
            var res = response.data;
            if (res.code == 0) {
              this.productData = res.detail.result;
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
        .post(this.$store.state.domain + "/crcs/product/queryList", data)
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