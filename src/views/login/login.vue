<template>
  <div class="wapper">
    <p class="pl">
      Welcome To
      <span class="pspan">民盛中控系统</span>
      &mdash; ** &mdash;
    </p>

    <form>
      <h1></h1>
      <div class="inset">
        <p>
          <label>账号</label>
          <el-input type="text" placeholder="请输入账号" v-model.trim="form.mobile" size="small"></el-input>
        </p>
        <p>
          <label>密码</label>
          <el-input type="password" placeholder="请输入密码" v-model.trim="form.password" size="small"></el-input>
        </p>
        <p>
          <!-- <input type="checkbox" name="remember" id="remember"> -->
          <!-- <label for="remember">Remember me for 14 days</label> -->
        </p>
      </div>
      <p class="p-container">
        <el-button type="primary" style="width:88%" @click="login()" size="mini">登录</el-button>
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
        mobile: "", //账号
        password: "" //密码
      }
    };
  },
  mounted() {
    //安全退出后，阻止浏览器返回原有页面
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function() {
      history.pushState(null, null, document.URL);
    });
  },
  methods: {
    //登录
    login() {
      let _this = this;
      let data = {
        mobile: _this.form.mobile,
        password: _this.form.password
      };
      // 校验账号密码
      this.$http
        .post(this.$store.state.domain + "/manage/user/login", data)
        .then(
          //成功
          response => {
            if (response.data.code == 0) {
              _this.$message({
                message: response.data.msg,
                type: "success"
              });
              var str = response.data.detail.name;
              var strid = response.data.detail.auditor_id;

              for (var x = 0; x < response.data.detail.role.length; x++) {
                if (response.data.detail.role[x].roleName == "systemOperator") {
                  var rolename = "showtrue";
                  sessionStorage.setItem("role", rolename); //本地存储角色
                } else {
                  console.log(response.data.detail.role[x].roleName);
                  sessionStorage.setItem("role", null);
                }
              }
              //前端控制权限
              sessionStorage.setItem("name", str); //本地存储用户名
              _this.$router.push("/home"); //跳转
              sessionStorage.setItem("userId", strid); //本地存储用户ID
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
  position: absolute;
  top: 5%;
  left: 50%;

  display: inline-block;

  width: 40em;
  margin: 0 0 0 -20em;
  padding: 1.5em 0;

  letter-spacing: 0.5em;
  text-transform: uppercase;

  border: 4px double rgba(255, 255, 255, 0.25);
  border-width: 4px 0;
}

.pl .pspan {
  font: 700 4em/1 "Oswald", sans-serif;

  display: block;

  margin: 0 auto;
  padding: 0.25em 0 0.325em;

  /* Activate hardware acceleration for smoother animations */

  -webkit-transform: translate3d(0, 0, 0);
  -webkit-animation: aitf 80s linear infinite;
  letter-spacing: 0;

  /* Clip Background Image */

  background: url("http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png")
    repeat-y;
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

  /* Animate Background Image */

  -webkit-text-fill-color: transparent;
  -webkit-backface-visibility: hidden;
}

@keyframes aitf {
  0% {
    background-position: 0 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

/* Animate Background Image */
@-webkit-keyframes aitf {
  0% {
    background-position: 0 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

.wapper {
  font: 400 1em/1.5 "Neuton";
  font-size: 12px;

  overflow: hidden;

  height: 100%;
  margin: 0;

  text-align: center;

  color: rgba(255, 255, 255, 0.25);
  background-color: rgba(34, 3, 3, 0.87);
}

form {
  position: relative;

  overflow: hidden;

  width: 400px;
  margin: 240px auto;

  border: 1px solid #191919;
  border-radius: 0.4em;
  background: #111;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.2);
}

form:after {
  position: absolute;
  top: 0;
  left: 20%;

  display: block;

  width: 200px;
  height: 3px;

  content: "";

  background: linear-gradient(to right, #111, #444, #b6b6b8, #444, #111);
}

form:before {
  position: absolute;
  top: -7px;
  left: 34%;

  display: block;

  width: 12px;
  height: 6px;

  content: "";

  border-radius: 50%;
  box-shadow: 0 0 6px 4px #fff;
}

.inset {
  padding: 40px;

  border-top: 1px solid #19191a;
}

form h1 {
  font-size: 18px;

  position: relative;

  padding: 15px 0;

  text-align: center;

  border-bottom: 1px solid black;
  text-shadow: 0 1px 0 black;
}

form h1:after {
  position: absolute;
  top: 0;
  left: 50px;

  display: block;

  width: 250px;
  height: 100px;

  content: "";
  transform: rotate(70deg);
  pointer-events: none;

  background: linear-gradient(
    50deg,
    rgba(255, 255, 255, 0.15),
    rgba(0, 0, 0, 0)
  );
}

label {
  display: block;

  padding-bottom: 9px;

  color: rgb(252, 248, 248);
}

input[type="text"],
input[type="password"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 8px 5px;

  border: 1px solid #222;
  border-radius: 0.3em;
  background: linear-gradient(#1f2124, #27292c);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
}

label[for="remember"] {
  display: inline-block;

  padding-top: 5px;
  padding-bottom: 0;

  color: white;
}

input[type="checkbox"] {
  display: inline-block;

  vertical-align: top;
}

.p-container {
  padding: 0 20px 20px 20px;
}

.p-container:after {
  display: table;
  clear: both;

  content: "";
}

.p-container span {
  display: block;
  float: left;

  padding-top: 8px;

  color: #0d93ff;
}

input[type="submit"] {
  font-size: 13px;
  font-weight: bold;

  float: right;

  padding: 5px 20px;

  cursor: pointer;

  color: white;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 0.3em;
  background: #0184ff;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 10px 10px rgba(255, 255, 255, 0.1);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
}

input[type="submit"]:hover {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -10px 10px rgba(255, 255, 255, 0.1);
}

input[type="text"]:hover,
input[type="password"]:hover,
label:hover ~ input[type="text"],
label:hover ~ input[type="password"] {
  background: #27292c;
}
</style>
