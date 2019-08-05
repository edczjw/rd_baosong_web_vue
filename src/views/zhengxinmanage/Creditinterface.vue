<template>
  <div class="page-human">
      <div class="li-title">
      <b>征信管理 / 征信接口统计</b>
    </div>
    <el-card>
      <el-form :model="searchform" ref="searchform" label-width="210px">
        <el-row type="flex" class="human-form">
          <el-col :span="10">
            <el-form-item label="数据源名称" prop="product">
              <el-select size="mini" v-model="searchform.result" placeholder="请选择状态">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="接口名称" prop="name">
              <el-select size="mini" v-model="searchform.result" placeholder="请选择状态">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          </el-row>
          <el-row>
          <el-col :span="10">
            <el-form-item label="征信平台调第三方开始日期" prop="startTime">
              <el-date-picker
                size="mini"
                v-model="searchform.startTime"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="开始日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="至" prop="endTime">
              <el-date-picker
                size="mini"
                v-model="searchform.endTime"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="请选择结束日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
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
        <el-table-column type="index" label="序号" align="center" width="55"></el-table-column>
        <el-table-column prop="product" label="数据源名称" align="center"></el-table-column>
        <el-table-column prop="name" label="英文名称" align="center"></el-table-column>
        <el-table-column prop="pid" label="征信接口" align="center"></el-table-column>
        <el-table-column prop="mobile" label="状态" align="center"></el-table-column>
        <el-table-column prop="applyAmount" label="调用次数" align="center"></el-table-column>
        <el-table-column prop="result" label="成功次数" align="center"></el-table-column>
        <el-table-column prop="ctime" label="成功率" align="center"></el-table-column>
        <el-table-column prop="result" label="调用规则" align="center">
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
            </template>
        </el-table-column>
        <el-table-column prop="ctime" label="接口文档" align="center">
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="download(scope.row.ctime)">下载</el-button>
            </template>
        </el-table-column>
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

        <el-dialog title="调用规则" 
        width="30%"
        center
        :visible.sync="dialogFormVisible">
            <el-form :model="form" class="showform">
                <el-form-item label="有效天数" :label-width="formLabelWidth">
                <el-input style="width:90%" size="mini" v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="识别关联勾选">
                    <el-radio-group v-model="form.resource">
                    <el-radio border size="mini" label="身份证"></el-radio>
                    <el-radio border size="mini" label="手机号"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
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
      dialogFormVisible: false,
      formLabelWidth: '90px',
      options: [
        {
          value: "S",
          label: "成功"
        },
        {
          value: "F",
          label: "失败"
        },
        {
          value: "N",
          label: "待处理"
        }
      ],
      searchform: {
        product: "",
        name: "",
        pid: "",
        startTime: "", //申请开始时间
        endTime: "", //至
        result: "",
        pageNum: 1, //初始页
        pageSize: 50 //显示当前行的条数
      },
      form:{
          name:"",
          region:"",
          type:""
      },
      tableData: [{
          mobile:"111111111111",
      }]
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    // this.load(this.searchform);
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
        path: "/details/applyDetail",
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
        url: this.$store.state.domain + "/loanApply/findByPage",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 200) {
            res.data.list.forEach(data => {
              data.ctime = this.formatDate(data.ctime);
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
  /deep/ .el-table tr,
  .el-table th {
    background: rgba(173, 173, 173, 0.3);
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

.showform{
    border: 1px dashed rgb(245, 197, 175);
    padding: 15px;
}
</style>