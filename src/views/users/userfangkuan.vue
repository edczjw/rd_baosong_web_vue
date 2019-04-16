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
            <label >放款日期：</label>{{detail.loanTime}}
          </li>
          <li>
            <label >放款金额：</label>{{detail.money}}</li>
          <li>
            <label >债权开始日期：</label>{{detail.startDate}}</li>
          <li>
            <label >债权结束日期：</label>{{detail.endDate}}</li>
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
      detail: {},
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
              this.detail = response.data.detail.loanInfoDetail;

            }
          },
          response => {
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
