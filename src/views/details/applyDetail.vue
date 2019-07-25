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
            <div class="left">查询原因</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.queryReason==1">授信审批</span>
              <span v-if="data.queryReason==2">贷中管理</span>
              <span v-if="data.queryReason==3">贷后管理</span>
              <span v-if="data.queryReason==4">个人查询</span>
              <span v-if="data.queryReason==5">异议处理</span>
              <span v-if="data.queryReason==6">担保查询</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left">贷款担保类型</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.guaranteeType==1">信用</span>
              <span v-if="data.guaranteeType==2">抵押</span>
              <span v-if="data.guaranteeType==3">质押</span>
              <span v-if="data.guaranteeType==4">保证</span>
              <span v-if="data.guaranteeType==5">组合</span>
              <span v-if="data.guaranteeType==9">其他</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left">贷款用途</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.loanPurpose==1">无场景贷款</span>
              <span v-if="data.loanPurpose==2">教育</span>
              <span v-if="data.loanPurpose==3">医美</span>
              <span v-if="data.loanPurpose==4">租房</span>
              <span v-if="data.loanPurpose==5">数码</span>
              <span v-if="data.loanPurpose==6">买车</span>
              <span v-if="data.loanPurpose==7">装修</span>
              <span v-if="data.loanPurpose==8">旅游</span>
              <span v-if="data.loanPurpose==9">农业生产</span>
              <span v-if="data.loanPurpose==10">企业经营</span>
              <span v-if="data.loanPurpose==11">综合用款</span>
              <span v-if="data.loanPurpose==12">商场购物</span>
              <span v-if="data.loanPurpose==13">日常消费</span>
              <span v-if="data.loanPurpose==99">未知</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left">客户类型</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.customType==1">在校学生</span>
              <span v-if="data.customType==2">在职人员</span>
              <span v-if="data.customType==2">自雇人员</span>
              <span v-if="data.customType==3">其他人士</span>
              <span v-if="data.customType==9">人群未知</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left">申请贷款金额</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.applyAmount}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">贷款编号</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.product}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">申请状态</div>
          </el-col>
          <el-col :span="4">
            <div class="right">
              <span v-if="data.result == 'S'">成功</span>
              <span v-if="data.result == 'F'">失败</span>
              <span v-if="data.result == 'N'">待处理</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left">备注</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.remark}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">业务编码</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.channel}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">报送响应信息</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.msg}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">创建时间</div>
          </el-col>
          <el-col :span="4">
            <div class="right">{{data.ctime | formatDate}}</div>
          </el-col>
          <el-col :span="4">
            <div class="left">更新时间</div>
          </el-col>
          <el-col :span="4" style="border-right:1px solid #ccc;">
            <div class="right">{{data.utime | formatDate}}</div>
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
    console.log("data", data);
    this.load(data);
  },

  methods: {
    load(data) {
      this.$axios({
        method: "get",
        url: this.$store.state.domain + "/loanApply/findDetailsById",
        params: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 200) {
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