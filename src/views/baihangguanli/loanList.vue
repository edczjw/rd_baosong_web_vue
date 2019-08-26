<template>
  <div class="page-human">
    <div class="li-title">
      <b>报送管理 / 贷后列表</b>
    </div>
    <el-card>
      <el-form :model="searchform" ref="searchform" label-width="130px">
        <el-row type="flex" class="human-form">
          <el-col :span="8">
            <el-form-item label="贷款编号" prop="loanId">
              <el-input size="mini" v-model.trim="searchform.loanId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名" prop="name">
              <el-input size="mini" v-model.trim="searchform.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="身份证号码" prop="pid">
              <el-input size="mini" v-model.trim="searchform.pid"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="手机号码" prop="mobile">
              <el-input size="mini" v-model.trim="searchform.mobile"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="贷款状态" prop="loanStatus">
              <el-select size="mini" v-model="searchform.loanStatus" placeholder="贷款状态">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="还款日期" prop="beginDate">
              <el-date-picker
                size="mini"
                v-model="searchform.beginDate"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="请选择开始日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="至" prop="endDate">
              <el-date-picker
                size="mini"
                v-model="searchform.endDate"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="请选择结束日期"
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
        <el-table-column type="index" label="序号" align="center" width="80"></el-table-column>
        <el-table-column prop="loanId" label="贷款编号" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="godetail(scope.row.id)">{{scope.row.name}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="pid" label="身份证号码" align="center"></el-table-column>
        <el-table-column prop="mobile" label="手机号码" align="center"></el-table-column>
        <el-table-column prop="overdueStatus" label="逾期天数" align="center"></el-table-column>
        <el-table-column prop="targetRepayment" label="本期剩余应还金额" align="center"></el-table-column>
        <el-table-column prop="loanStatus" label="贷款状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.loanStatus == 1">正常</span>
            <span v-if="scope.row.loanStatus == 2">逾期</span>
            <span v-if="scope.row.loanStatus == 3">结清</span>
            <span v-if="scope.row.loanStatus == 4">撤销</span>
          </template>
        </el-table-column>
        <el-table-column prop="realRepaymentDate" label="还款时间" align="center"></el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="human-pagination">
        <el-pagination
          background
          style="text-align:center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="this.searchform.pageNum"
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
      options: [
        {
          value: 1,
          label: "正常"
        },
        {
          value: 2,
          label: "逾期"
        },

        {
          value: 3,
          label: "结清"
        },
        {
          value: 4,
          label: "撤销"
        }
      ],
      searchform: {
        loanId: "",
        name: "",
        pid: "",
        mobile: "",
        beginDate: "", //申请开始时间
        endTime: "", //至
        loanStatus: "",
        pageNum: 1, //初始页
        pageSize: 50 //显示当前行的条数
      },
      tableData: []
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    this.load(this.searchform);
  },

  methods: {
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
      this.searchform.pageNum = 1;
      this.load(this.searchform);
    },

    // 初始页currentPage
    handleCurrentChange(pindex) {
      this.searchform.pageNum = pindex;
      this.load(this.searchform);
    },
    //表单操作
    handleClick() {},
    godetail(id) {
      this.$router.push({
        path: "/details/loanDetail",
        query: {
          id: id
        }
      });
    },
    //初始化数据
    load(data) {
      this.tableData = [];
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "/loanRepay/findByPage",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 200) {
            res.data.list.forEach(data => {
              data.realRepaymentDate = this.formatDate(data.realRepaymentDate);
              this.tableData.push(data);
            });
            this.count = res.data.total;
            this.searchform.pageNum = res.data.pageNum;
            this.searchform.pageSize = res.data.pageSize;
          } else {
            this.$message({
              message: res.message,
              type: "error"
            });
          }
        },
        error => {}
      );
    }
  },
  watch: {}
};
</script>
<style lang='less' scoped>
//  导入统一样式less样式
@import '../users/style.css';
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
  .human-table {
    margin-top: 40px;
  }
  .human-pagination {
    margin-top: 30px;
  }
}
</style>