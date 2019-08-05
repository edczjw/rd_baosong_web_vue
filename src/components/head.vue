<template>
  <div class="topBanner">
    <div class="side-tit">
      <p class="left">民盛中控系统</p>
    </div>
    <p class="right" @click="goBack" title="安全退出">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye" />
      </svg>
    </p>
    <p class="right" title="用户名">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-character" />
      </svg>admin
    </p>
    <p class="right" @click="screenfull" title="全屏显示">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-quanping4" />
      </svg>
    </p>
    <p class="right" @click="tabcontrol" title="折叠菜单">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cebianlanshousuo" />
      </svg>
    </p>
    <p class="right" @click="lastpage" title="返回上一页">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui2" />
      </svg>
    </p>

    <p class="right" title="密码修改">
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
      isFullscreen: false
    };
  },
  mounted() {
    window.onresize = () => {
      // 全屏下监控是否按键了ESC
      if (!this.checkFull()) {
        // 全屏下按键esc后要执行的动作
        this.isFullscreen = false;
      }
    };
  },
  methods: {
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
      console.log(this.$store.state.isLeftHiden);
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
  line-height: 50px;

  position: fixed;
  z-index: 99;

  width: 100%;
  height: 50px;

  background-color: rgba(34, 3, 3, 0.87);
  box-shadow: 1px 1px 1px black;
}

p {
  padding-left: 10px;
}

.left {
  font-family: "黑体";
  font-size: 32px;
  font-weight: bold;
  margin-left: 10px;
  float: left;

  color: rgb(229, 230, 223);
  text-shadow: 2px 2px 3px rgb(82, 80, 80);
}

.right {
  font-size: 12px;

  float: right;

  margin-right: 22px;

  cursor: pointer;

  color: rgb(255, 255, 255);
}

.right:hover {
  color: rgba(116, 216, 194, 0.842);
}

svg {
  width: 32px;
  height: 32px;
  line-height: 32px;
  padding: 5px 8px;
}
</style>
