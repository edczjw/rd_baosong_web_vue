<template>
<div class="wapper">
  <p class="pl">
    Welcome To
    <span class="pspan">
      民盛报送平台
    </span>
    &mdash; ** &mdash;
  </p>

  <form>
  <h1></h1>
  <div class="inset">
  <p>
    <label for="email">账号</label>
    <input type="text" name="email" id="email" v-model.trim="form.account" >
  </p>
  <p>
    <label for="password">密码</label>
    <input type="password" name="password" id="password" v-model.trim="form.pwd">
  </p>
  <p>
    <!-- <input type="checkbox" name="remember" id="remember"> -->
    <!-- <label for="remember">Remember me for 14 days</label> -->
  </p>
  </div>
  <p class="p-container">
    <span>Forgot password ?</span>
    <input type="submit" name="go" id="go" value="登录" @click="login()">
  </p>
</form>

</div>
</template>
<script>
import Router from "vue-router";
export default {
  data() {
    return {

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
* {
  box-sizing: border-box;
}

.pl {
  text-transform: uppercase;
  letter-spacing: .5em;
  display: inline-block;
  border: 4px double rgba(255, 255, 255, 0.25);
  border-width: 4px 0;
  padding: 1.5em 0em;
  position: absolute;
  top: 3%;
  left: 50%;
  width: 40em;
  margin: 0 0 0 -20em;
}
.pl .pspan {
  font: 700 4em/1 "Oswald", sans-serif;
  letter-spacing: 0;
  padding: .25em 0 .325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
  /* Clip Background Image */
  background: url(http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png) repeat-y;
  -webkit-background-clip: text;
  background-clip: text;
  /* Animate Background Image */
  -webkit-text-fill-color: transparent;
  -webkit-animation: aitf 80s linear infinite;
  /* Activate hardware acceleration for smoother animations */
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
}
@keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
/* Animate Background Image */
@-webkit-keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
.wapper {
  text-align: center;
  margin: 0;
  font: 400 1em/1.5 "Neuton";
  height: 100%;
  
  color: rgba(255, 255, 255, 0.25);
  font-size: 12px;
  background: #090d00;
  overflow: hidden;
}

form {
  background: #111;
  width: 400px;
  margin: 220px auto;
  border-radius: 0.4em;
  border: 1px solid #191919;
  overflow: hidden;
  position: relative;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.2);
}

form:after {
  content: "";
  display: block;
  position: absolute;
  height: 3px;
  width: 200px;
  left: 20%;
  background: linear-gradient(to right, #111111, #444444, #b6b6b8, #444444, #111111);
  top: 0;
}

form:before {
  content: "";
  display: block;
  position: absolute;
  width: 12px;
  height: 6px;
  border-radius: 50%;
  left: 34%;
  top: -7px;
  box-shadow: 0 0 6px 4px #fff;
}

.inset {
  padding: 40px;
  border-top: 1px solid #19191a;
}

form h1 {
  font-size: 18px;
  text-shadow: 0 1px 0 black;
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid black;
  position: relative;
}

form h1:after {
  content: "";
  display: block;
  width: 250px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 50px;
  pointer-events: none;
  transform: rotate(70deg);
  background: linear-gradient(50deg, rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0));
}

label {
  color: #666;
  display: block;
  padding-bottom: 9px;
}

input[type=text],
input[type=password] {
  width: 100%;
  padding: 8px 5px;
  background: linear-gradient(#1f2124, #27292c);
  border: 1px solid #222;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
  border-radius: 0.3em;
  margin-bottom: 20px;
}

label[for=remember] {
  color: white;
  display: inline-block;
  padding-bottom: 0;
  padding-top: 5px;
}

input[type=checkbox] {
  display: inline-block;
  vertical-align: top;
}

.p-container {
  padding: 0 20px 20px 20px;
}

.p-container:after {
  clear: both;
  display: table;
  content: "";
}

.p-container span {
  display: block;
  float: left;
  color: #0d93ff;
  padding-top: 8px;
}

input[type=submit] {
  padding: 5px 20px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 10px 10px rgba(255, 255, 255, 0.1);
  border-radius: 0.3em;
  background: #0184ff;
  color: white;
  float: right;
  font-weight: bold;
  cursor: pointer;
  font-size: 13px;
}

input[type=submit]:hover {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -10px 10px rgba(255, 255, 255, 0.1);
}

input[type=text]:hover,
input[type=password]:hover,
label:hover ~ input[type=text],
label:hover ~ input[type=password] {
  background: #27292c;
}

</style>
