<template>
<div>
           <el-form style="width:92%;float:right" :model="ruleForm" ref="ruleForm" label-width="170px" 
           class="demo-ruleForm">
           <el-tag type="warning" class="tag">坏账信息</el-tag>
        <div class="contt">
           <el-row >
            <el-col :span="8">
                <el-form-item label="渠道代码：" prop="channelCode" :rules="rules">
                    <el-select v-model.trim="ruleForm.channelCode" placeholder="渠道代码" size="mini" clearable>
                        <el-option v-for="item in channellist"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                    </el-form-item></el-col>

            
            <el-col :span="8">
                <el-form-item label="合同号：" prop="contractNumber" :rules="rules">
                    <el-input v-model.trim="ruleForm.contractNumber" clearable size="mini"></el-input>
                </el-form-item></el-col>
            
            <el-col :span="8">
                 <el-form-item label="坏账金额(元)：" prop="badMoney" :rules="rules">
                    <el-input v-model.trim="ruleForm.badMoney" clearable size="mini" placeholder="输入数字"></el-input>
                </el-form-item></el-col>

            <el-col :span="8" v-if="false">
                <el-form-item label="渠道名称：" prop="channelName" :rules="rules">
                    <el-input v-model.trim="ruleForm.channelName" clearable size="mini"></el-input>
                </el-form-item></el-col>

            <el-col :span="8" v-if="false">
                 <el-form-item label="产品代码：" prop="productCode" :rules="rules">
                    <el-input v-model.trim="ruleForm.productCode" clearable size="mini"></el-input>
                </el-form-item></el-col>

            </el-row>

            <el-row >
            <el-col :span="8" v-if="false">
                <el-form-item label="产品名称：" prop="productName" :rules="rules">
                    <el-input v-model.trim="ruleForm.productName" clearable size="mini"></el-input>
                </el-form-item></el-col>


            <el-col :span="8">
                <el-form-item label="坏账类型：" prop="badType" :rules="rules">
                    <el-select v-model.trim="ruleForm.badType"  placeholder="请选择" size="mini">
                        <el-option
                        v-for="item in bad_typelist"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item></el-col>

            <el-col :span="8">
                <el-form-item label="后续工作：" prop="followUp" :rules="rules">
                    <el-input v-model.trim="ruleForm.followUp" clearable size="mini"></el-input>
                </el-form-item></el-col>

            <el-col :span="8">
                <el-form-item label="定损日期：" prop="lossDate" :rules="rules">
                    <el-date-picker v-model.trim="ruleForm.lossDate" value-format="yyyy-MM-dd" 
                    type="date" placeholder="截止日期" size="mini">
                    </el-date-picker>
                </el-form-item></el-col>
            </el-row>

            <el-row>
                <el-col :span="8">
                <el-form-item label="查询编号：" prop="reqNo"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.reqNo" placeholder="合同号" clearable size="mini"></el-input>
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
                      坏账信息
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
                      <label >坏账金额(元)：</label>{{ this.ruleForm.badMoney }} </li>
                    <li>
                      <label >坏账类型：</label>
                      <span v-if="this.ruleForm.badType == '1'">
                        普通坏账
                      </span>
                      <span v-if="this.ruleForm.badType == '2'">
                        预期转账坏账
                      </span></li>
                    <li>
                      <label >后续工作：</label>{{ this.ruleForm.followUp }}</li>
                      <li>
                      <label >定损日期：</label>{{ this.ruleForm.lossDate }}</li>
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
      //坏账类型
      bad_typelist:[{
          value: '1',
          label: '普通坏账'
        },{
          value: '2',
          label: '预期转账坏账'
        },],
      ruleForm: {
          channelName:'',//渠道名称
          productCode:'',//产品编号
          productName:'',//产品名称
          channelCode:'',//渠道编号
          contractNumber:'',//合同号
          badMoney:'',//坏账金额
          badType:'',//坏账类型
          followUp:'',//后续工作
          lossDate:'',//定损日期
          reqNo:"",//查询编号
          dataType:"ContractLoss",//数据类型
        },
        rules: [{ required: true, message: '不能为空'}]
          
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
      this.$confirm('此操作将提交坏账信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

            this.$http
        .post(
            this.$store.state.domain +"/under/pushContractLoss", this.ruleForm  
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
