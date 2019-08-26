<template>
<div>
           <el-form style="width:92%;float:right" :model="ruleForm" ref="ruleForm" label-width="170px" 
           class="demo-ruleForm">
           <el-tag type="warning" class="tag">还款信息</el-tag>
        <div class="contt">
           <el-row >
            <el-col :span="8">
                <el-form-item label="渠道代码：" prop="channelCode" 
                :rules="rules">
                   <el-select v-model.trim="ruleForm.channelCode" placeholder="渠道代码" size="mini" clearable>
                        <el-option v-for="item in channellist"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                    </el-form-item>
                </el-col>

            <el-col :span="8">
                <el-form-item label="合同号：" prop="contractNumber"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.contractNumber" clearable size="mini"></el-input>
                </el-form-item>
                </el-col>
            
            <el-col :span="8">
                 <el-form-item label="还款本金(元)：" prop="money" :rules="rules">
                    <el-input v-model.trim="ruleForm.money" clearable size="mini" placeholder="输入数字"></el-input>
                </el-form-item>
                </el-col>

            <el-col :span="8" v-if="false">
                <el-form-item label="渠道名称：" prop="channelName"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.channelName" clearable size="mini"></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8" v-if="false">
                 <el-form-item label="产品代码：" prop="productCode"
                 :rules="rules">
                    <el-input v-model.trim="ruleForm.productCode" clearable size="mini"></el-input>
                </el-form-item>
                </el-col>
            </el-row>

            <el-row>
            <el-col :span="8" v-if="false">
                <el-form-item label="产品名称：" prop="productName"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.productName" clearable size="mini"></el-input>
                </el-form-item>
                </el-col>
            
            <el-col :span="8">
                <el-form-item label="还款利息(元)：" prop="interest" :rules="rules">
                    <el-input v-model.trim="ruleForm.interest" clearable size="mini" placeholder="输入数字"></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="罚息(元)：" prop="penaltyInterest" :rules="rules">
                    <el-input v-model.trim="ruleForm.penaltyInterest" clearable size="mini" placeholder="输入数字"></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="违约金(元)：" prop="penalty" :rules="rules">
                    <el-input v-model.trim="ruleForm.penalty" clearable size="mini" placeholder="输入数字"></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                 <el-form-item label="服务费(元)：" prop="serviceCharge" :rules="rules">
                    <el-input v-model.trim="ruleForm.serviceCharge" clearable size="mini" placeholder="输入数字"></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="其他费用(元)：" prop="otherCharge" :rules="rules">
                    <el-input v-model.trim="ruleForm.otherCharge" clearable size="mini" placeholder="输入数字"></el-input>
                </el-form-item>
                </el-col>
                <el-col :span="8">
                <el-form-item label="还款日期：" prop="repayTime" :rules="rules">
                    <el-date-picker v-model.trim="ruleForm.repayTime" clearable value-format="yyyy-MM-dd" 
                    type="date" placeholder="还款日期" size="mini">
                    </el-date-picker>
                </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="8">
                <el-form-item label="查询编号：" prop="reqNo"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.reqNo" placeholder="合同号+yyyyMMdd+1位随机字母" clearable size="mini"></el-input>
                </el-form-item>
                </el-col>

                 <el-col :span="8">
                <el-form-item label="数据类型：" prop="dataType" 
                :rules="rules">
                    <el-input v-model.trim="ruleForm.dataType" disabled clearable size="mini"></el-input>
                </el-form-item>
                </el-col>
            </el-row>

        </div>
<!-- ================================================================================ -->

        <div class="butt">
            <el-form-item>
                <el-button size="mini" type="primary" @click="yulan()">预览</el-button>
                <el-button size="mini" @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </div>
        </el-form>

         <!-- 合同预览框 -->
        <el-dialog
            append-to-body
            title="预览"
            :visible.sync="dialogVisible"
            width="86%" top=5vh center>
            
              <div class="el-table">
                <table width="100%">
                  <tr colspan="6">
                    <th colspan="6">
                      还款信息
                    </th>
                  </tr>
                  <ul class="miul">
                    <li>
                      <label >渠道代码：</label>
                     <span v-if="this.ruleForm.channelCode == 'M201'">
                        线下小微企业借款
                      </span>
                    <span v-if="this.ruleForm.channelCode == 'M202'">
                        线下个人借款
                      </span>
                      </li>
                    <li>
                      <label >合同号：</label>{{ this.ruleForm.contractNumber }}</li>
                    <li>
                      <label >还款金额(元)：</label>{{ this.ruleForm.money }} </li>
                    <li>
                      <label >还款利息(元)：</label>{{ this.ruleForm.interest }}</li>
                    <li>
                      <label >罚息(元)：</label>{{ this.ruleForm.penaltyInterest }}</li>
                      <li>
                      <label >违约金(元)：</label>{{ this.ruleForm.serviceCharge }}</li>
                    <li>
                      <label >服务费(元)：</label>{{ this.ruleForm.penalty }}</li>
                    <li>
                      <label >其他费用(元)：</label>{{ this.ruleForm.otherCharge }}</li>
                    <li>
                      <label >还款日期：</label>{{ this.ruleForm.repayTime }}</li>
                    
                    <li>
                      <label >查询编号：</label>{{ this.ruleForm.reqNo }}</li>
                    <li>
                      <label >数据类型：</label>{{ this.ruleForm.dataType }}</li>
                  </ul>
                </table>
              </div>


            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary"  @click="submitForm('ruleForm')">上传</el-button>
            </span>
          </el-dialog>
</div>
</template>


<script>
export default {
  data() {
    return {
        dialogVisible: false,//预览框显示
        //渠道数据容器
        channellist:[{
          value: 'M201',
          label: '线下小微企业借款'
        },{
          value: 'M202',
          label: '线下个人借款'
        },],
      ruleForm: {
          repayTime:'',//还款日期
          contractNumber:'',//合同号
          money:'',//还款金额
          interest:'',//还款利息
          penalty:'',//违约金
          penaltyInterest:'',//罚息
          serviceCharge:'',//服务费
          otherCharge:'',//其他费用
          channelCode:'',//渠道编号
          channelName:'',//渠道名称
          productCode:'',//产品编号
          productName:'',//产品名称
          reqNo:"",//查询编号
          dataType:"Repay",//数据类型
        },
        rules:[{ required: true, message: '不能为空'}]
    };
  },
  mounted() {
  },
  methods: {
      //预览
    yulan(){
      this.dialogVisible = true
      //跳转返回顶部
      if(document.body.scrollTop > 0) {
                console.log(1);
                window.scrollTo(0, -1);
                document.body.scrollTop = 0;
            }
            window.scrollTo(0, -1);
            document.body.scrollTop = 0;
    },


       //查询
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
      this.$confirm('此操作将提交还款信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        
             this.$http
        .post(
            this.$store.state.domain +"/under/pushRepay", this.ruleForm  
        )
        //then()方法异步执行，就是当then()前面的方法执行完之后再执行then()里面的方法，这样就不会发生获取不到数据的问题
        .then(  
            // Lambda写法
            response => {
            if (response.data.code == 0) {
                 this.$message({
                    message: response.data.msg,
                    type: 'success'
                    });
                    this.dialogVisible=false;
            } else {
                this.$message({
                    message: response.data.msg,
                    type: 'warning'
                    });
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
            //请求失败回调函数
            }
        );

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });          
        });
         } else {
            console.log('error submit!!');
            return false;
          }
          });
    },

    // 重置功能
    resetForm(formName) {
    this.$refs[formName].resetFields();
    },
  },
  watch: {},
  components: {}
};
</script>

 <style lang='less' scoped>
.big-tabform {
  overflow-y: scroll;

  width: 100%;
  height: 100%;
}

table {
  border: none;
}

.miul {
  display: flex;
  flex-wrap: wrap;

  width: 100%;

// 上左右下
  margin: 15px 0 10px;

  li {
    line-height: 35px;

    width: 20%;
    height: 35px;

    label {
      float: left;

      width: 130px;
      margin-right: 10px;

      text-align: right;

      color: #646964;
    }
  }
}

.el-table {
  margin-top: 10px;
}

.el-table th {
  padding-left: 10px;
}































</style>
