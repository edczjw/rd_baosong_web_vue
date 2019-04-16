<template>
           <el-form style="width:92%;float:right" :model="ruleForm" ref="ruleForm" label-width="170px" 
           class="demo-ruleForm">
           <el-tag type="warning" class="tag">日结数据</el-tag>
        <div class="contt">
           <el-row >
            <el-col :span="8">
                <el-form-item label="渠道代码：" prop="channel_code" :rules="rules">
                    <el-input v-model="ruleForm.channel_code" clearable size="mini"></el-input>
                </el-form-item></el-col>

            <el-col :span="8">
                <el-form-item label="渠道名称：" prop="channel_name" :rules="rules">
                    <el-input v-model="ruleForm.channel_name" clearable size="mini"></el-input>
                </el-form-item></el-col>

            <el-col :span="8">
                <el-form-item label="贷款金额(元)：" prop="money" :rules="rules">
                    <el-input v-model="ruleForm.money" clearable size="mini"></el-input>
                </el-form-item></el-col>
            </el-row>

            <el-row >
            <el-col :span="8">
                <el-form-item label="贷款总额(元)：" prop="loan_money" :rules="rules">
                    <el-input v-model="ruleForm.loan_money" clearable size="mini"></el-input>
                </el-form-item></el-col>

            <el-col :span="8">
                <el-form-item label="贷款总笔数：" prop="loan_count" :rules="rules">
                    <el-input v-model="ruleForm.loan_count" clearable size="mini"></el-input>
                </el-form-item></el-col>

            <el-col :span="8">
                 <el-form-item label="日结日期：" prop="check_date" :rules="rules">
                    <el-date-picker v-model="ruleForm.check_date" value-format="yyyy-MM-dd" 
                    type="date" placeholder="日结日期" size="mini">
                    </el-date-picker>
                </el-form-item></el-col>
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
</template>


<script>
export default {
  data() {
    return {
    dialogVisible: false,//预览框显示
      ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: [{ required: true, message: '不能为空'}]
    };
  },
  mounted() {
   
  },
  methods: {
      //预览
    yulan(){
      //跳转返回顶部
      if(document.body.scrollTop > 0) {
                console.log(1);
                window.scrollTo(0, -1);
                document.body.scrollTop = 0;
            }
            window.scrollTo(0, -1);
            document.body.scrollTop = 0;
      this.dialogVisible = true
    },
       //查询
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
      this.$confirm('此操作将提交该合同, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.getlist();
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

* {
  font-size: 12px;

  box-sizing: border-box;

  list-style: none;
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
  margin-top: 40px;
}

.el-table th {
  padding-left: 10px;
}




















</style>
