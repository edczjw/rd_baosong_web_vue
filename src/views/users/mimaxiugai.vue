<template>

  <div class="content">
  <el-row>
  <el-col :span="24">
    <div class="changepw">
        <el-form :model="setform" status-icon ref="setform" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="account">
                <el-input type="text" show-password v-model="setform.account" autocomplete="off" clearable></el-input>
            </el-form-item>

            <el-form-item label="旧密码" prop="oldPwd">
                <el-input type="password" show-password v-model="setform.oldPwd" autocomplete="off" clearable></el-input>
            </el-form-item>
            
            <el-form-item label="新密码" prop="newPwd">
                <el-input type="password" show-password v-model="setform.newPwd" autocomplete="off" clearable></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPwd">
                <el-input type="password" show-password v-model="setform.checkPwd" autocomplete="off" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" plain @click="changepwd()" size="small">提交</el-button>
                <el-button type="primary" plain @click="resetForm('setform')" size="small">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</el-col>
</el-row>
  </div>
</template>
<script>

export default {
  data() {
      
    return {

      //修改密码
      setform:{
        account:"",//账号
        oldPwd:"",//旧密码
        newPwd:"",//新密码
        checkPwd:"",//确认密码
      },
        
    };
  },
  // mounted只执行一次,在模板渲染成html后调用
  mounted() {
  },

  methods: {
    //修改密码
    changepwd(){
      let _this = this;
      // 校验账号密码
      this.$http
        .post(this.$store.state.domain+"/report/common/editPwd", this.setform,)
          .then(
          //成功
          response => {
            if (response.data.code == 0) { 
              _this.$message({
                message: response.data.msg,
                type: "success"
              });
              
            } 
            //失败
            else {
              _this.$message({
                message: response.data.msg,
                type: "error"
              });
            }
          },
          //打印
          response => {
            console.log(response);
          }
        );
    },
    // 重置
    resetForm(formName) {
        this.$refs[formName].resetFields();
    },
  },
    
};
</script>

 <style lang='less'>

//  导入统一样式less样式

.changepw {
  padding: 50px 200px 50px 500px;

  background-color: rgba(238, 238, 238, .835);
}



































</style>
