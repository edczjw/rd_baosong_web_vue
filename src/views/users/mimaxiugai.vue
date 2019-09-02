<template>
  <div class="content">
    <el-card>
    <el-row>
      <el-col :span="24">
        <div class="changepw">
          <el-card>
          <el-form
            :model="setform"
            status-icon
            :rules="rules2"
            ref="setform"
            label-width="210px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号:" prop="account">
              <el-input
                show-password
                v-model.trim="setform.account"
                autocomplete="off"
                clearable
              ></el-input>
            </el-form-item>

            <el-form-item label="旧密码:" prop="oldPwd">
              <el-input
                type="password"
                show-password
                v-model.trim="setform.oldPwd"
                autocomplete="off"
                clearable
              ></el-input>
            </el-form-item>

            <el-form-item label="新密码:" prop="newPwd">
              <el-input
                type="password"
                show-password
                v-model.trim="setform.newPwd"
                autocomplete="off"
                clearable
              ></el-input>
            </el-form-item>

            <el-form-item label="确认密码:" prop="checkPwd">
              <el-input
                type="password"
                show-password
                v-model.trim="setform.checkPwd"
                autocomplete="off"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain @click="changepwd()" size="small">提交</el-button>
              <el-button type="primary" plain @click="resetForm('setform')" size="small">重置</el-button>
            </el-form-item>
          </el-form>
          </el-card>
        </div>
      </el-col>
    </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    //账号
    var validatePass0 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("账号不能为空!"));
      } else {
        callback();
      }
    };
    //旧密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("旧密码不能为空!"));
      } else {
        callback();
      }
    };

    //新密码
    var validatePass1 = (rule, value, callback) => {
      if (value == this.setform.oldPwd) {
        callback(new Error("新密码和旧密码不能相同!"));
      } else if (value === "") {
        callback(new Error("新密码不能为空!"));
      } else if (this.setform.oldPwd === "") {
        callback(new Error("请先输入旧密码!"));
      } else {
        callback();
      }
    };

    //确认密码
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("确认密码不能为空"));
      } else if (value !== this.setform.newPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      //规则
      rules2: {
        //账号
        account: [{ validator: validatePass0, trigger: "blur" }],
        //旧密码
        oldPwd: [{ validator: validatePass, trigger: "blur" }],
        //新密码
        newPwd: [{ validator: validatePass1, trigger: "blur" }],
        //确认密码
        checkPwd: [{ validator: validatePass2, trigger: "blur" }]
      },
      //修改密码
      setform: {
        account: "", //账号
        oldPwd: "", //旧密码
        newPwd: "", //新密码
        checkPwd: "" //确认密码
      }
    };
  },
  // mounted只执行一次,在模板渲染成html后调用
  mounted() {},

  methods: {
    //修改密码
    changepwd() {
      let _this = this;
      // 校验账号密码
      this.$http
        .post(this.$store.state.domain + "/report/common/editPwd", this.setform)
        .then(
          //成功
          response => {
            if (response.data.code == 0) {
              _this.$alert(response.data.msg, "密码修改", {
                confirmButtonText: "确定并返回主页",
                type: "success",
                callback: action => {
                  //确定后直接跳转到home
                  this.$router.push("../home");
                }
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
    }
  }
};
</script>

 <style lang='less'>

//  导入统一样式less样式
@import '../users/style.css';

.changepw {
  padding: 50px 30% 50px 30%;

  background-color: rgba(238, 238, 238, .835);
}

.demo-ruleForm{
  padding: 20px;
  background-image: url('../../assets/tt.jpeg');
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
}



</style>
