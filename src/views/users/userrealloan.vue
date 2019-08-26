<template>
  <div>

    <div class="el-table el-table--fit  el-table--enable-row-hover el-table--enable-row-transition">
      <table width="100%">
        <tr colspan="6">
        </tr>
           <el-table :data="detail" size="mini" border style="color:blue; font-size:8px">
                <el-table-column prop="reportDate" label="报备时间" align="center">
                </el-table-column>
                <el-table-column prop="repayTime" label="还款时间" align="center">
                </el-table-column>
                <el-table-column prop="money" label="还款本金" align="center">
                </el-table-column>
                <el-table-column prop="interest" label="还款利息" align="center">
                </el-table-column>
                <el-table-column prop="penaltyInterest" label="罚息" align="center">
                </el-table-column>
                <el-table-column prop="penalty" label="违约金" align="center">
                </el-table-column>
                <el-table-column prop="serviceCharge" label="服务费" align="center">
                </el-table-column>
                <el-table-column prop="otherCharge" label="其他费用" align="center">
                </el-table-column>
            </el-table>
      </table>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {

      //基本信息
      detail:[],
    };
  },
  mounted() {
    this.getdetail();
  },
  methods: {
    
    getdetail() {
      let data={
        contractNumber:this.$route.query.contractNumber
      };
      this.$http
        .post(this.$store.state.domain +"/report/common/loanDetail",data)
        .then(
          response => {
            if (response.data.code == 0) {
              this.detail = response.data.detail.repayDetail;

            }
          },
          response => {
              this.$message({
                      dangerouslyUseHTMLString: true, //表示提示的是html片段
                      message:
                        '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-shengqi"></use> </svg> ' +
                        response.body.message,
                      type: "error"
                    });
            //console.log(response);
          }
        );
    }
  },
  watch: {},
  components: {}
};
</script>

 <style lang='less' scoped>

// @import "index.less";
* {
  font-size: 14px;

  box-sizing: border-box;

  list-style: none;
}

table {
  border: none;
}

ul {
  display: flex;
  flex-wrap: wrap;

  width: 100%;

// 上左右下
  margin: 10px 0 10px;

  li {
    line-height: 40px;

    width: 40%;
    height: 40px;

    label {
      float: left;

      width: 130px;
      margin-right: 10px;

      text-align: right;

      color: #b48e3d;
    }
  }
}

.outpadding {
  padding: 30px 0;
}

svg {
  padding: -1px 8px !important;
}















































</style>
