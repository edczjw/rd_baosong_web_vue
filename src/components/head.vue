<template>
  <div class="topBanner">
    <div class="side-tit">
      <p class="left animated fadeIn">民盛中控系统</p>
    </div>
    <div class="fl">
    <p class="right animated fadeIn" @click="goBack" title="安全退出">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye" />
      </svg>
    </p>
    <p class="right animated fadeIn" title="用户名">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-character" />
      </svg>
      {{userName}}
    </p>

    <p class="right animated fadeIn" @click="screenfull" title="全屏显示">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-quanping4" />
      </svg>
    </p>
    <p class="i-left animated fadeIn" @click="tabcontrol" title="折叠菜单">
      
      <svg class="icon" aria-hidden="true"> 
        <use v-if="this.$store.state.isLeftHiden"  xlink:href="#icon-cebianlandanchu"/>
        <use v-else xlink:href="#icon-cebianlanshousuo"/>
      </svg>
    </p>
    <p class="i-left animated fadeIn" @click="gomshome" title="返回主页">
      
      <svg class="icon" aria-hidden="true"> 
        <use xlink:href="#icon-dapingshouye"/>
      </svg>
    </p>

    <p class="right animated fadeIn" @click="lastpage" title="返回上一页">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui2" />
      </svg>
    </p>

    <p class="right animated fadeIn" title="修改密码">
      <router-link to="/users/mimaxiugai" class="roulink">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mimazhongzhi" />
        </svg>
      </router-link>
    </p>
    </div>
  </div>
</template>
<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      isFullscreen: false,
      userName:''
    };
  },
  mounted() {
    this.getName();
    window.onresize = () => {
      // 全屏下监控是否按键了ESC
      if (!this.checkFull()) {
        // 全屏下按键esc后要执行的动作
        this.isFullscreen = false;
      }
    };
  },
  methods: {
    gomshome(){
          this.$router.push("/mshome");
          this.$store.state.isLeftHiden = true;
    },
    //返回上一页
    lastpage() {
      window.history.go(-1);
    },
    /**
     * 全屏事件
     */
    screenfull() {
      if (!screenfull.enabled) {
        this.$message({
          message: "Your browser does not work",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
      this.isFullscreen = true;
    },
    getName() {
      let userName = sessionStorage.getItem("name");
      this.userName = userName;
    },
    /**
     * 是否全屏并按键ESC键的方法
     */
    checkFull() {
      var isFull =
        document.fullscreenEnabled ||
        window.fullScreen ||
        document.webkitIsFullScreen ||
        document.msFullscreenEnabled;
      // to fix : false || undefined == undefined
      if (isFull === undefined) {
        isFull = false;
      }
      return isFull;
    },

    //退出登陆
    goBack() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {});
    },

    //折叠
    tabcontrol() {
      this.$store.state.isLeftHiden = !this.$store.state.isLeftHiden;
      // console.log(this.$store.state.isLeftHiden);
    }
  }
};
</script>

<style scoped>
* {
  font-family: "黑体";

  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.roulink {
  font-size: 12px;
  color: white;
}
.roulink:hover {
  color: white;
}

p {
  padding-left: 10px;
}

.left {
  position: fixed;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 32px;
  font-weight: bold;
  float: left;
  z-index: 991;
  line-height: 52px;
  height: 56px;
  border-right: 2px solid rgba(212, 214, 214, 0.137);
  border-bottom: 1px solid rgba(206, 207, 207, 0.164);
  padding-right: 20px;
  background-color: rgb(10, 10, 10);
  box-shadow: 1px 1px 1px rgba(10, 1, 1, 0.479);

  color: rgb(243, 243, 241);
}
.i-left{
  font-size: 12px;

  float: left;
  font-weight: bolder;

  margin-left: 22px;
  padding: 0 5px 41px 5px;
  position: relative;
  height: 33px;
  line-height: 32px;
  top:20%;
  cursor: pointer;
  color: white;
}
.i-left:hover{
  transition: all 0.3s;
  color: white;
  border-bottom: 3px solid white;
}
.fl{
  line-height: 55px;

  position: fixed;
  z-index: 99;
  right: 0;
  left: 223px;
  color: white;
  height: 55px;
  background-color: rgb(1, 35, 48);
  box-shadow: 1px 1px 1px rgb(1, 35, 48);
}
.right {
  font-size: 12px;

  padding: 0 5px 39px 5px;
  position: relative;
  float: right;
  height: 33px;
  line-height: 32px;

  margin-right: 22px;

  top:25%;
  cursor: pointer;
}

.right:hover {
  transition: all 0.3s;
  color: white;
  border-bottom: 3px solid white;
}

svg {
  width: 33px;
  height: 33px;
  line-height: 32px;
  padding: 5px 8px;
}
</style>
