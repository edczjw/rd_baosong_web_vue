<template>
<div>
  <div class='poster'></div>
<div class='central badge' id='logmodule'>
  <div class='start'>
    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/138405/buffalo.png' width='100'>
    <div class='back' style="color:red;"  onclick='document.getElementById("logmodule").className = "central badge"'>返回登录界面</div>
  </div>
  <div class='ribbon' style="color:red;"  onclick='document.getElementById("logmodule").className = "central badge signup"'>修改密码? 点这里.</div>
  <h1>WELCOME</h1>
  <h2>
    民盛 报送 平台
    <input id='regname' placeholder='账号' type='text' v-model.trim="setform.account">
    <input id='regpass' placeholder='原密码' type='password' v-model.trim="setform.oldPwd">
    <input id='regpass2' placeholder='新密码' type='password' v-model.trim="setform.newPwd">
    <input id='regemail' placeholder='确认密码' type='password' v-model.trim="setform.checkPwd">
    <!-- <a href=''>Terms and Conditions</a> -->
  </h2>
  <div class='end'>
    <input id='username' placeholder='账号' type='text' v-model.trim="form.account" >
    <input id='password' placeholder='密码' type='password' v-model.trim="form.pwd">
    <div class='roundel login' style="cursor: pointer;" @click="login()">登录</div>
    <div class='roundel register' style="cursor: pointer;" @click="changepwd()">确认</div>
  </div>
</div>
</div>
</template>
<script>
import Router from "vue-router";
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

    //登录
      form: {
        account: "",//账号
        pwd: ""//密码
      },
    };
  },
  mounted() {
    //安全退出后，阻止浏览器返回原有页面
    history.pushState(null, null, document.URL); 
      window.addEventListener('popstate', function() { 
      history.pushState(null, null, document.URL); 
    });
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

   //登录
    login() {
      let _this = this;
      let data = {
        account: _this.form.account,
        pwd: _this.form.pwd
      };
      // 校验账号密码
      this.$http
        .post(this.$store.state.domain+"/report/common/login", data,)
          .then(
          //成功
          response => {
            if (response.data.code == 0) { 
              _this.$message({
                message: response.data.msg,
                type: "success"
              });
              
              //前端控制权限
              var str="admin";
              sessionStorage.setItem("name", str);//本地存储用户名
              _this.$router.push("/home");//跳转
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
    }
  },
  computed: {},
  components: {}
};
</script>

<style scoped>
input{
  height: 26px;
}

body {
  overflow: hidden;
}

.poster {
  background: url("https://source.unsplash.com/mWRR1xj95hg/1600x900");
  display: block;
  width: 100vw;
  height: 100vh;
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0 0 20vw #000;
  -webkit-filter: sepia(0.4) brightness(0.7);
}

.central {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 300ms;
}

.badge {
  width: 500px;
  max-width: 100vw;
  text-align: center;
  font-family: cabin;
  color: white;
}
.badge .start {
  display: inline-block;
  width: 500px;
  height: 150px;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/138405/diamondline.png");
  background-position: top center;
  margin-bottom: -6px;
  text-align: center;
  transition: height 300ms;
}
.badge .start img {
  display: inline-block;
  margin-top: 50px;
  width: 100px;
  transition: width 300ms, margin-top 300ms;
}
.badge .start .back {
  display: none;
}
.badge .end {
  display: inline-block;
  width: 500px;
  height: 150px;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/138405/diamondline.png");
  background-position: bottom center;
  margin-top: -3px;
  text-align: center;
  transition: height 300ms;
}
.badge h1 {
  display: inine-block;
  width: 520px;
  box-sizing: border-box;
  color: white;
  height: 2em;
  line-height: 1.8em;
  padding: 0;
  margin: 0;
  border-radius: 10%;
  margin-left: -10px;
  border: 3px solid white;
  font-family: montserrat;
}
.badge h2 {
  font-weight: 500;
  font-size: 2em;
  padding: 0;
  margin: 0;
  width: 494px;
  margin-top: -2px;
  border-left: 3px solid white;
  border-right: 3px solid white;
  max-height: 40px;
  overflow: hidden;
  transition: max-height 400ms;
}
.badge h2 input {
  font-size: 17px;
  margin: 0;
}
.badge h2 a {
  display: inline-block;
  width: 300px;
  font-size: 16px;
  height: 30px;
  line-height: 30px;
  color: white;
  text-decoration: none;
}
.badge input {
  text-align: center;
  display: inline-block;
  width: 300px;
  margin: 6px;
  color: black;
  border: none;
}
.badge .roundel {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  line-height: 47px;
  border: 3px solid white;
  font-size: 13px;
  background: linear-gradient(white 20%, transparent 20%, transparent 80%, white 80%);
  margin: 8px 100px 0 100px;
}
.roundel:hover{
  border: 3px solid rgb(143, 180, 143);
}
.badge .ribbon {
  display: inline-block;
  font-size: 16px;
  height: 2em;
  line-height: 2em;
  width: 494px;
  margin-bottom: -6px;
  border-left: 3px solid white;
  border-right: 3px solid white;
  overflow: hidden;
  cursor: pointer;
}
.badge:not(.signup) .roundel.register {
  display: none;
}

.signup .start {
  height: 70px;
}
.signup .start img {
  width: 50px;
  margin-top: 10px;
}
.signup .start .back {
  display: block;
  cursor: pointer;
}
.signup .ribbon {
  display: none;
}
.signup .end {
  height: 70px;
  margin-top: 0px;
}
.signup .end input {
  height: 0;
  margin: 0;
  padding: 0;
  display: none;
}
.signup h2 {
  border-bottom: 2px solid white;
  padding-bottom: 5px;
  max-height: 100vh;
}
.signup .roundel.login {
  display: none;
}

</style>
