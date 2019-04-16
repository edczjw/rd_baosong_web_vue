<template>
  <div class="wrapper">
    <div class="main-content  login-container">
      <div class="login-inner">
        <div class="login-box">
          <div class="form-container" :class="{ 'is-error' : is_error }">
            <h1 class="login-title">民盛报送系统</h1>
            
            <el-form ref="form" :model="form">
              <div class="login-content">
                <el-input placeholder="请输入帐号" v-model.trim="form.mobile" style="width:250px!important;">
                  <template slot="prepend">
                    <i class="el-icon-edit"></i>
                  </template>
                </el-input>
              </div>
              <div class="login-content">
                <el-input type="password" placeholder="请输入密码" v-model.trim="form.password" style="width:250px!important;">
                  <template slot="prepend">
                    <i class="el-icon-view"></i>
                  </template>
                </el-input>
              </div>
              <div class="button-content">
                <el-button type="primary" @click="login()">登录</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Router from "vue-router";
export default {
  data() {
    return {
      form: {
        mobile: "",
        password: ""
      },
      tips: "提示信息",
      tips_show: false,
      is_error: false
    };
  },
  mounted() {},
  methods: {
    login() {
      let _this = this;
      let data = {
        mobile: _this.form.mobile,
        password: _this.form.password
      };
      // 校验账号密码
      this.$http
        .post("http://dev.msxiaodai.com/qdzj/user/login", data, {
          // 如果Web服务器无法处理编码为application/json的请求，你可以启用emulateJSON选项
          // emulateJSON: false
          })
          .then(
          //成功
          response => {
            if (response.data.code == 0) { 
              var str = response.data.detail.name;
              sessionStorage.setItem("name", str);//本地存储用户名
              _this.$router.push("/zhifuguanli/fangkuanjilu");//跳转
            } 
            //失败
            else {
              _this.$message({
                message: response.data.msg,
                type: "error"
              });
              _this.tips_show = true;
              _this.tips = response.data.description;
              _this.is_error = true;
            }
          },
          //打印
          response => {
            console.log(response);
          }
        );
    }
  },
  computed: {},
  components: {}
};
</script>

<style lang='less' scoped>
.wrapper {
  height: 100%;
}

.login-container {
  height: 100%;

  .login-title {
    font-size: 20px;
    color: #617283;
    margin-bottom: 24px;
    text-align: center;
  }

  .login-inner {
    position: relative;
    padding-top: 100px;
    width: 322px;
    margin: 0 auto;
  }

  .form-container {
    width: 250px;
    margin: 0 auto;
  }

  .tips {
    margin-bottom: 16px;
    text-align: left;

    .el-alert--error {
      background: #efd3d7;
      color: #be504c;
      border: 1px solid #eed1d5;
    }
  }

  .login-box {
    background: rgba(255, 255, 255, 0.698039215686274);
    border-radius: 4px;
    padding: 36px 0;
    position: relative;
  }

  .login-content {
    margin-bottom: 8px;
  }

  .el-input-group__append {
    cursor: pointer;
  }

  .button-content {
    margin-top: 24px;
    position: relative;

    button {
      width: 100%;
    }
  }

  .is-error {
    .icon-password {
      color: #ff5722;
    }

    .icon-user {
      color: #ff5722;
    }
  }
}

.logo {
  height: 64px;
  width: 43px;
  position: absolute;
  bottom: 24px;
  right: 24px;

  img {
    width: 100%;
  }
}
</style>
