<template>
  <div class="topBanner">
    <div class="side-tit">
      <p class="left animated fadeIn">民盛中控系统</p>
    </div>
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

    <p class="right animated fadeIn" title="密码修改">
      <router-link to="/users/mimaxiugai" class="roulink">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mimazhongzhi" />
        </svg>
      </router-link>
    </p>
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
  color: #fff;
}
.roulink:hover {
  color: rgba(116, 216, 194, 0.842);
}
.topBanner {
  line-height: 60px;

  position: fixed;
  z-index: 99;

  width: 100%;
  height: 55px;

  background-color: rgb(15, 15, 15);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.479);
}

p {
  padding-left: 10px;
}

.left {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 32px;
  font-weight: bold;
  float: left;
  line-height: 55px;

  color: rgb(229, 230, 223);
  text-shadow: 2px 2px 3px rgb(82, 80, 80);
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
  color: rgb(255, 255, 255);
}
.i-left:hover{
  transition: all 0.3s;
  color: rgba(116, 216, 194, 0.842);
  border-bottom: 3px solid rgba(116, 216, 194, 0.842);
  /* background: rgba(238, 238, 238, 0.068) */
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

  color: rgb(255, 255, 255);
}

.right:hover {
  transition: all 0.3s;
  color: rgba(116, 216, 194, 0.842);
  border-bottom: 3px solid rgba(116, 216, 194, 0.842);
  /* background: rgba(238, 238, 238, 0.068) */
}

svg {
  width: 33px;
  height: 33px;
  line-height: 32px;
  padding: 5px 8px;
}
</style>
