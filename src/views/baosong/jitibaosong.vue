<template>
  <!-- 样式在app.vue -->
  <div class="page-human">
    <div class="li-title">
      <b>监管报送/计提报送</b>
    </div>

    <el-card>
      选择时间：
      <el-select v-model="value" placeholder="请选择时间" size="small" @change="overchange($event)">
        <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    <table class="jititable" border>
      <tr>
        <td>类别项目</td>
        <td>余额（万元）</td>
        <td>计提比例（%）</td>
        <td>计提金额（万元）</td>
        <td>报送时间</td>
      </tr>

      <tr>
        <td>正常类贷款</td>
        <td>{{this.normalBalance}}</td>
        <td>{{this.normalRate}}</td>
        <td>{{this.normalReal}}</td>
        <td rowspan="6">{{this.reportDate}}</td>
      </tr>

      <tr>
        <td>关注类贷款</td>
        <td>{{this.followBalance}}</td>
        <td>{{this.followRate}}</td>
        <td>{{this.followReal}}</td>
      </tr>

      <tr>
        <td>次级类贷款</td>
        <td>{{this.minorBalance}}</td>
        <td>{{this.minorRate}}</td>
        <td>{{this.minorReal}}</td>
      </tr>

      <tr>
        <td>可疑类贷款</td>
        <td>{{this.suspiciousBalance}}</td>
        <td>{{this.suspiciousRate}}</td>
        <td>{{this.suspiciousReal}}</td>
      </tr>

      <tr>
        <td>损失类贷款</td>
        <td>{{this.lossBalance}}</td>
        <td>{{this.lossRate}}</td>
        <td>{{this.lossReal}}</td>
      </tr>

      <tr>
        <td>合计</td>
        <td>{{ this.yuesum }}</td>
        <td>无</td>
        <td>{{ this.loansum }}</td>
      </tr>
    </table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      options: [], //下拉框的值

      yuesum: "", //余额总计
      loansum: "", //计提金额

      searchform: {
        dateMonth: ""
      },

      normalBalance: "", //BigDecimal 正常类贷款余额(万元)
      normalRate: "", //BigDecimal 正常类计提比例(%)
      normalReal: "", //BigDecimal 正常类计提金额(万元)
      followBalance: "", //BigDecimal 关注类贷款余额(万元)
      followRate: "", //BigDecimal 关注类计提比例(%)
      followReal: "", //BigDecimal 关注类计提金额(万元)
      minorBalance: "", //BigDecimal 次级类贷款余额(万元)
      minorRate: "", //BigDecimal 次级类计提比例(%)
      minorReal: "", //BigDecimal 次级类计提金额(万元)
      suspiciousBalance: "", //BigDecimal 可疑类贷款余额(万元)
      suspiciousRate: "", //BigDecimal 可疑类计提比例(%)
      suspiciousReal: "", //BigDecimal 可疑类计提金额(万元)
      lossBalance: "", //BigDecimal 	损失类贷款余额(万元)
      lossRate: "", //BigDecimal 损失类计提比例(%)
      lossReal: "", //BigDecimal 损失类计提金额(万元)
      reportDate: "" //String     	报送成功日期，格式yyyy-MM-dd
    };
  },
  mounted() {
    this.gettime();
  },

  methods: {
    //求和
    getSum() {
      var arr = [
        this.normalBalance,
        this.followBalance,
        this.minorBalance,
        this.suspiciousBalance,
        this.lossBalance
      ];
      var arr1 = [
        this.lossReal,
        this.suspiciousReal,
        this.minorReal,
        this.followReal,
        this.normalReal
      ];

      var sum = 0;
      var sum1 = 0;

      //遍历所有参数并相加
      for (var key in arr) {
        sum += arr[key];
      }

      //遍历所有参数并相加
      for (var key1 in arr1) {
        sum1 += arr1[key1];
      }

      //返回结果
      this.yuesum = sum.toFixed(2); //余额

      this.loansum = sum1.toFixed(2); //计提金额
    },

    //选择项变化事件
    overchange(val) {
      this.searchform.dateMonth = val;
      this.$http
        .post(
          this.$store.state.domain + "/report/supAssetLoss/detail",
          this.searchform
        )
        //then()方法异步执行，就是当then()前面的方法执行完之后再执行then()里面的方法，这样就不会发生获取不到数据的问题
        .then(
          // Lambda写法
          response => {
            this.normalBalance = response.data.normalBalance;
            this.normalRate = response.data.normalRate;
            this.normalReal = response.data.normalReal;
            this.followBalance = response.data.followBalance;
            this.followRate = response.data.followRate;
            this.followReal = response.data.followReal;
            this.minorBalance = response.data.minorBalance;
            this.minorRate = response.data.minorRate;
            this.minorReal = response.data.minorReal;
            this.suspiciousBalance = response.data.suspiciousBalance;
            this.suspiciousRate = response.data.suspiciousRate;
            this.suspiciousReal = response.data.suspiciousReal;
            this.lossBalance = response.data.lossBalance;
            this.lossRate = response.data.lossRate;
            this.lossReal = response.data.lossReal;
            this.reportDate = response.data.reportDate;

            this.getSum();
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
            //请求失败回调函数
          }
        );
    },

    //获取下拉框时间
    gettime() {
      this.$http
        .post(this.$store.state.domain + "/report/supAssetLoss/getDateMonth")
        //then()方法异步执行，就是当then()前面的方法执行完之后再执行then()里面的方法，这样就不会发生获取不到数据的问题
        .then(
          // Lambda写法
          response => {
            //请求成功回调函数
            //请求返回的数据赋给tableData
            this.options = response.data.dateMonths;
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
    },

    //查询
    search() {},
    // 重置功能
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang='less'>
//  导入统一样式less样式
@import "../users/style.css";

.text {
  font-size: 14px;
}

.clearfix {
  font-weight: bolder;

  color: rgba(255, 102, 0, 0.87);
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;

  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  float: left;

  width: 49%;
  margin-bottom: 20px;
}

.box-card1 {
  float: right;

  width: 49%;
  margin-bottom: 20px;
}

ul.a {
  list-style-type: none;
}

ul.a span {
  color: rgb(38, 67, 231);
}
</style>
