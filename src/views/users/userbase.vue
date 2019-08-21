<template>
  <div>

    <div class="el-table">
      <table width="100%">
        <tr colspan="6">
          <!-- <th colspan="6">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jibenxinxi"></use>
            </svg>基本信息
          </th> -->
        </tr>
        <ul>
          <li>
            <label >借款人：</label>{{detail.name}}
          </li>
          <li>
            <label >贷款合同编号：</label>{{detail.contractNumber}}</li>
          <li>
            <label >贷款开始日期：</label>{{detail.startDate}}</li>
          <li>
            <label >贷款截止日期：</label>{{detail.endDate}}</li>
          <li>
            <label >贷款金额：</label>{{detail.money}}</li>
          <li>
            <label >贷款期限类型：</label>{{detail.termType}}</li>
          <li>
            <label >贷款方式：</label>{{detail.loanMethod}}</li>
          <li>
            <label >贷款利率(%)：</label>{{detail.rate}}</li>

          <li>
            <label >折化年利率(%)：</label>{{detail.annualRate}}</li>
          <li>
            <label >还款方式：</label>{{detail.repayMethod}}</li>
          <li>
            <label >借款地区：</label>{{detail.districtName}}</li>
          <li>
            <label >借款人类型：</label>{{detail.borrowType}}</li>
          <li>
            <label >投向行业：</label>{{detail.business}}</li>
          <li>
            <label >贷款用途：</label>{{detail.purpose}}</li>
        </ul>
      </table>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {

      //基本信息
      detail:{},
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
              this.detail = response.data.detail.loanContractDetail;

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
