<template>
  <div class="page-detail">
    <!-- <h1>借款信息</h1> -->
    <div class="detail-table">
      <el-card>
        <el-button type="primary" size="mini" style="margin-bottom:10px;">详细信息</el-button>
        <el-row class="table-row">
          <el-col :span="4">
            <div class="left">姓名</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.name}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">身份证号码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.pid}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">手机号码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.mobile}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">贷款编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.loanId}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">当前还款期数</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.termNo}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">本期还款状态</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.termStatus}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">本期应还款日</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.targetRepaymentDate | formatDate}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">实际还款时间</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.realRepaymentDate | formatDate}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">本期计划应还款金额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.plannedPayment}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">本期剩余应还款金额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.targetRepayment}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">本次还款金额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.realRepayment}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">当前逾期天数</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.overdueStatus}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">本期还款状态确认时间</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.statusConfirmAt | formatDate}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">当前逾期总额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.overdueAmount}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">贷款余额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.remainingAmount}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">本笔贷款状态</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.loanStatus == 1">已签约</span>
              <span v-if="data.loanStatus == 2">放款中</span>
              <span v-if="data.loanStatus == 3">放款失败</span>
              <span v-if="data.loanStatus == 4">还款中</span>
              <span v-if="data.loanStatus == 6">已逾期</span>
              <span v-if="data.loanStatus == 7">已结清</span>
              <span v-if="data.loanStatus == 8">放款异常</span>
              <span v-if="data.loanStatus == 9">财务审核拒绝</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left"></div>
          </el-col>
          <el-col :span="4">
            <div class="right"></div>
          </el-col>
          <el-col :span="4">
            <div class="left"></div>
          </el-col>
          <el-col :span="4" style="border-right:1px solid #ccc;">
            <div class="right"></div>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../common/date.js";
export default {
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  data() {
    return {
      data: {}
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    var data = {
      id: this.$route.query.id
    };
    this.load(data);
  },

  methods: {
    load(data) {
      this.$axios({
        method: "get",
        url: this.$store.state.domain + "/loanRepay/findDetailsById",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {
            this.data = res.data;
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
.page-detail {
  h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  .detail-table {
    .table-row {
      border: 1px solid #ccc;
      border-bottom: none;
      border-right: none;
      &:last-child {
        margin-bottom: 0;
        border-bottom: none;
      }
    }
    .el-col {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      .left {
        padding: 0 10px;
        height: 39px;
        background: #e5e5e5;
        color: #666;
      }
      .right {
        padding: 0 10px;
      }
      &:last-child {
        border-right: none;
      }
      a {
        color: #66b1ff;
        padding: 0px 20px;
      }
    }
  }
  .comfirmButton {
    margin-top: 30px;
  }
  .table {
    margin-top: 40px;
  }
}
</style>