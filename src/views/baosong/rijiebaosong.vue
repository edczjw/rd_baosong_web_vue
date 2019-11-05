<template>
  <!-- 样式在app.vue -->
  <div class="page-human">
    <div class="li-title">
      <b>监管报送/日结报送</b>
    </div>
    <el-card class="mb">
    <div class="searcharea">
      <el-form :model="searchform" size="mini" ref="searchform">
        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="日结时间" prop="checkDate">
              <el-date-picker
                v-model="searchform.checkDate"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="日结日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="2">
            <el-form-item>
              <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
          </el-col>

          <el-col :span="2">
            <el-form-item>
              <el-button type="primary" @click="resetForm('searchform')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    </el-card>

    <el-card>
    <el-table
      :data="tableData"
      v-loading="listLoading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      border
      element-loading-background="rgba(0, 0, 0, 0.8)"
      size="medium"
      stripe
      style="width: 100%;"
    >
      <el-table-column prop="checkDate" label="日结日期" align="center"></el-table-column>
      <el-table-column prop="loanMoney" label="贷款金额（万）小贷" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.loanMoney*1000000000/10000/1000000000}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="loanBalance" label="贷款余额（万）小贷" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.loanBalance*1000000000/10000/1000000000}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="loanCount" label="笔数小贷" align="center"></el-table-column>
      <el-table-column prop="dayLoan" label="今日贷款金额小贷" align="center"></el-table-column>
      <el-table-column prop="dayCount" label="今日贷款笔数小贷" align="center"></el-table-column>
      <el-table-column prop="dayRepay" label="今日还款本金小贷" align="center"></el-table-column>
      <el-table-column prop="dayMoney" label="今日放款金额小贷" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.status == 'S'">成功</span>
          <span v-else-if="scope.row.status == 'F'">失败</span>
          <span v-else-if="scope.row.status == 'P'">处理中</span>
          <span v-else-if="scope.row.status == 'D'">删除</span>
          <span v-else-if="scope.row.status == 'N'">待处理</span>
          <span v-else></span>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="block">
      <el-pagination
        background
        style="text-align:center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[20,50,100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next"
        :total="count"
      ></el-pagination>
    </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      pageIndex: 1, //当前页
      pageSize: 50, //每页展示的条数
      listLoading: false,
      tableData: [],

      searchform: {
        checkDate: "", //日结时间
        pageIndex: 1, //当前页
        pageSize: 50 //每页展示的条数
      }
    };
  },
  // mounted只执行一次
  mounted() {
    this.getlist(); //获取用户列表
  },
  methods: {
    // 初始每页数据数pagesize
    handleSizeChange(psize) {
      this.searchform.pageSize = psize;
      this.getlist();
    },
    // 初始页currentPage
    handleCurrentChange(pindex) {
      this.searchform.pageIndex = pindex;
      this.getlist();
    },

    //查询
    search() {
      this.searchform.pageIndex = 1;
      this.listLoading = true; //刷新进度图标
      this.getlist();
    },

    // 重置功能
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // ajax异步数据交互：Vue 实例提供了 this.$http 服务可用于发送 HTTP 请求
    getlist() {
      this.listLoading = true;
      this.$http
        .post(
          this.$store.state.domain + "/report/dayReport/record",
          this.searchform
        )
        //then()方法异步执行，就是当then()前面的方法执行完之后再执行then()里面的方法，这样就不会发生获取不到数据的问题
        .then(
          // Lambda写法
          response => {
            if (response.data.code == 0) {
              //请求成功回调函数
              //请求返回的数据赋给tableData
              if (response.data.detail != null) {
                this.tableData = response.data.detail.resultList;
                this.pageSize = response.data.detail.pageSize;
                this.pageIndex = response.data.detail.pageIndex;
                this.count = response.data.detail.count;
                this.listLoading = false;
              } else {
                this.tableData = null;
                this.listLoading = false;
                this.$notify({
                  message: "搜索失败，无此数据，请重新搜索。",
                  type: "warning",
                  duration: "2000" //持续时间
                });
              }
            } else {
              this.$message.error(response.data.msg);
            }
          },
          response => {
            this.listLoading = false;
            this.$message({
              dangerouslyUseHTMLString: true, //表示提示的是html片段
              message:
                '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-shengqi"></use> </svg> ' +
                response.body.message,
              type: "error"
            });
            //console.log(response);
            //请求失败回调函数
          }
        );
    }
  },

  //过滤器，用于格式化时间格式
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>

<style lang='less'>
//  导入统一样式less样式
@import "../users/style.css";
</style>
