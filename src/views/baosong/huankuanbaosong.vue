<template>
  <!-- 样式在app.vue -->
  <div class="page-human">
    <div class="li-title">
      <b>监管报送/还款报送</b>
    </div>
    <el-card class="mb">
    <div class="searcharea">
      <el-form :model="searchform" size="mini" ref="searchform">
        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="合同编号" prop="contractNumber">
              <el-input v-model="searchform.contractNumber" placeholder="合同编号" clearable></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="searchform.name" placeholder="借款人姓名" clearable></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="报送状态" prop="status">
              <el-select v-model="searchform.status" placeholder="报送状态" clearable>
                <el-option
                  v-for="item in regionlist"
                  :key="item.code"
                  :label="item.desc"
                  :value="item.code"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="产品" prop="channel">
              <el-select v-model="searchform.channel" placeholder="产品" clearable>
                <el-option
                  v-for="item in channellist"
                  :key="item.code"
                  :label="item.code"
                  :value="item.code"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="开始时间" id="dateid" prop="startDate">
              <el-date-picker
                v-model="searchform.startDate"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="还款开始时间"
                clearable
              ></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="至" prop="endDate">
              <el-date-picker
                v-model="searchform.endDate"
                type="date"
                value-format="yyyy-MM-dd"
                clearable
                placeholder="还款结束时间"
                style="width: 80%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>

        <el-row>
          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="search">查询</el-button>
              <el-button type="primary" @click="resetForm('searchform')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        </el-row>
      </el-form>
    </div>
    </el-card>

    <!-- <div class="page-cen">
            
            <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                累计还款本金
                <el-badge :value="totalloans" />
                </el-dropdown-item>
                <el-dropdown-item>
                今日还款本金
                <el-badge :value="lendingcount" />
                </el-dropdown-item>
                <el-dropdown-item>
                今日收息
                <el-badge :value="tdlendingamount" />
                </el-dropdown-item>
                <el-dropdown-item>
                今日报送笔数
                <el-badge :value="tdlendingnum" />
                </el-dropdown-item>
                <el-dropdown-item>
                笔均还款金额
                <el-badge :value="tdsendnum" />
                </el-dropdown-item>
                <el-dropdown-item>
                报送失败：
                <el-badge :value="failsend" />
                </el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
    </div>-->

    <el-card>
    <el-table
      :data="tableData"
      v-loading="listLoading"
      element-loading-text="拼命加载中"
      border
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      size="medium"
      stripe
      style="width: 100%;"
    >
      <el-table-column prop="contractNumber" label="合同编号" align="center"></el-table-column>
      <el-table-column prop="channel" label="产品" align="center"></el-table-column>
      <el-table-column prop="name" label="借款人" align="center">
        <!-- 点击某个客户姓名查看详情 -->
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="gouserdetail(scope.row.contractNumber,scope.row.channel)"
          >{{scope.row.name}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="money" label="今日已还本金" align="center"></el-table-column>
      <el-table-column prop="interest" label="今日已还利息" align="center"></el-table-column>
      <el-table-column prop="repayTime" label="还款时间" align="center"></el-table-column>
      <el-table-column prop="reportDate" label="报送时间" align="center"></el-table-column>
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
export default {
  data() {
    return {
      listLoading: false,
      count: 0,
      pageIndex: 1, //当前页
      count: 1, //条数
      pageSize: 50, //每页展示的条数

      //渠道数据容器
      channellist: [],

      //状态容器
      regionlist: [],

      tableData: [],
      searchform: {
        contractNumber: "", //合同编号
        name: "", //借款人姓名
        status: "", //报送状态
        channel: "", //渠道
        startDate: "", //签署开始时间
        endDate: "", //结束时间
        pageIndex: 1, //当前页
        pageSize: 50 //每页展示的条数
      }
    };
  },
  // mounted只执行一次
  mounted() {
    this.getlist(); //获取用户列表

    this.getchannellist(); //获取搜索框渠道接口列表

    this.getregionlist(); //获取状态列表
  },
  methods: {
    // 点击用户名跳转至详情页
    gouserdetail(contractNumber, channelCode) {
      //判断跳转
      this.$router.push("/users/detail?contractNumber=" + contractNumber);
    },

    //获取状态列表
    getregionlist() {
      let data = {
        channelCd: this.searchform.channelCd
      };
      this.$http
        .post(this.$store.state.domain + "/report/common/status", data)
        .then(
          //成功
          response => {
            if (response.data.code == 0) {
              this.regionlist = response.data.detail.statusList;
            }
            //失败
            else {
              this.$message({
                message: response.data.msg,
                type: "error"
              });
            }
          },
          //打印
          response => {
            this.$message({
              dangerouslyUseHTMLString: true, //表示提示的是html片段
              message:
                '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-shengqi"></use> </svg> ' +
                response.body.message,
              type: "error"
            });
            // console.log(response);
          }
        );
    },

    // 获取渠道接口列表数据
    getchannellist() {
      let data = {
        channelee: this.searchform.channelee
      };
      this.$http
        .post(this.$store.state.domain + "/report/common/channel", data)
        .then(
          //成功
          response => {
            if (response.data.code == 0) {
              this.channellist = response.data.detail.channelList;
            }
            //失败
            else {
              this.$message({
                message: response.data.msg,
                type: "error"
              });
            }
          },
          //打印
          response => {
            this.$message({
              dangerouslyUseHTMLString: true, //表示提示的是html片段
              message:
                '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-shengqi"></use> </svg> ' +
                response.body.message,
              type: "error"
            });
            // console.log(response);
          }
        );
    },
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
          this.$store.state.domain + "/report/repay/record",
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
