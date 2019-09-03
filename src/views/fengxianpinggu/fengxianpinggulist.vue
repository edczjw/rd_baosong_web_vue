<template>
  <div class="page-human">
    <div class="li-title">
      <b>风险评估报告 / 个人列表</b>
    </div>
    <el-card>
      <el-form :model="searchform" ref="searchform" label-width="130px">
        <el-row type="flex" class="human-form">
          <el-col :span="8">
            <el-form-item label="流水号" prop="usrNo">
              <el-input size="mini" v-model.trim="searchform.usrNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名" prop="name">
              <el-input size="mini" v-model.trim="searchform.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="身份证号" prop="idCard">
              <el-input size="mini" v-model.trim="searchform.idCard"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        
        <el-row>
            <el-col :span="8">
            <el-form-item label="手机号" prop="phone">
              <el-input size="mini" v-model.trim="searchform.phone"></el-input>
            </el-form-item>
            </el-col>
          </el-col>

           <el-col :span="8">
            <el-form-item label="产品名称" prop="productCode">
              <el-input size="mini" v-model.trim="searchform.productCode"></el-input>
            </el-form-item>
            </el-col>
          </el-col>
        </el-row>
            
        <el-row>
          <el-col :span="8">
            <el-form-item label="开始时间" prop="beginDate">
              <el-date-picker
                size="mini"
                v-model="searchform.beginDate"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="请选择开始时间"
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
                placeholder="请选择结束时间"
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
        <el-table-column prop="createTime" label="查询时间" align="center"></el-table-column>
        <el-table-column prop="usrNo" label="流水号" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
            <template slot-scope="scope">
            <el-button type="text" size="small" @click="godetail(scope.row.id)">{{scope.row.name}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="idCard" label="身份证号" align="center"></el-table-column>
        <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
        <el-table-column prop="productCode" label="产品名称" align="center"></el-table-column>
        
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
      searchform: {
        usrNo: null,
        name: null,
        idCard: null,
        productCode: null,
        phone: null,
        beginDate: null,
        endDate:null,
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
        path: "/fengxianpinggubaogao/fengxiandetail",
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
        url: this.$store.state.domain + "/appsvr/riskAssessment",
        data: data
      }).then(
        response => {
          var res = response.data;
          if(res.code == 0){
            if(res.detail.result.pageList == "" || res.detail.result.pageList == null || res.detail.result.pageList==[]){
              this.$notify({
                    message: '搜索失败，无此数据，请重新搜索。',
                    type: 'warning',
                    duration:"2000"//持续时间
                  });
            }else{
              this.tableData = res.detail.result.pageList;
              this.count = res.detail.result.count;
              this.searchform.pageIndex = res.detail.result.pageIndex;
              this.searchform.pageSize = res.detail.result.pageSize;
            }
          }else{
            this.$message({
              message: res.msg,
              type: "error"
            });
          } 
        },
        error => {
            this.$message({
              message: response,
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