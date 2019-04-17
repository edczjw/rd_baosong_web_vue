<template>
  <div class="topBanner">
    <div class="side-tit">
      <p class='left'>民盛报送系统</p>
    </div>
    <p class='right' @click="goBack">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
      </svg>安全退出</p>
    <p class='right'>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-character"></use>
      </svg>游客</p>
    <p class='right' @click="screenfull">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-quanping4"></use>
      </svg>全屏显示</p>
    <p class='right' @click="tabcontrol">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cebianlanshousuo"></use>
      </svg>菜单折叠</p>
    <p class='right' @click="returntop">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhuidingbu"></use>
      </svg>返回顶部</p>
    
    <p class='right' @click="lastpage">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui2"></use>
      </svg>返回上一页</p>
    
    <!-- <p class='right' title="密码修改">
      <router-link to="/users/mimaxiugai" class="roulink">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-mimazhongzhi"></use>
      </svg>密码修改
      </router-link>
      </p> -->
      
  </div>
</template>
<script>

import screenfull from 'screenfull'
export default {
  data(){
      return{
      isFullscreen: false
    }
  },
  mounted() {
      window.onresize = () => {
            // 全屏下监控是否按键了ESC
            if (!this.checkFull()) {
              // 全屏下按键esc后要执行的动作
              this.isFullscreen = false
            }
          }
       },
  methods: {
    //返回上一页
    lastpage(){
      window.history.go(-1);
    },
    
    //返回顶部
    returntop(){
      //返回顶部
      if(document.body.scrollTop > 0) {
                console.log(1);
                window.scrollTo(0, -1);
                document.body.scrollTop = 0;
            }
            window.scrollTo(0, -1);
            document.body.scrollTop = 0;
    },
     /**
     * 全屏事件
     */
    screenfull() {
      if (!screenfull.enabled) {
        this.$message({
          message: 'Your browser does not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
      this.isFullscreen = true
    },
    /**
     * 是否全屏并按键ESC键的方法
     */
    checkFull() {
      var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled
      // to fix : false || undefined == undefined
      if (isFull === undefined) {
          isFull = false
      }
      return isFull
    },

    //退出登陆
    goBack() {
      var _this = this;
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      }).then(() => {
        // sessionStorage.removeItem('user');
        sessionStorage.setItem("name", 'str');//本地存储用户名
        this.$router.push('/login');
      }).catch(() => {

      });
      // this.$router.push("/login");
    },

    //折叠
    tabcontrol(){
      this.$store.state.isLeftHiden=!this.$store.state.isLeftHiden;
      console.log(this.$store.state.isLeftHiden)
    }
  }
};
</script>

<style scoped>
* {
  font-family: '黑体';

  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.roulink{
  font-size: 12px;
  color: #fff;
}
.roulink:hover{
  color: rgba(223, 186, 20, .842);
}
.topBanner {
  line-height: 50px;

  position: fixed;
  z-index: 99;

  width: 100%;
  height: 50px;

  background-color: rgb(46, 44, 53);
  background-image: url('http://cn.best-wallpaper.net/wallpaper/1600x900/1611/Superman-logo_1600x900.jpg');
}

p {
  padding-left: 20px;
}

.left {
  font-family: '黑体';
  font-size: 28px;
  font-weight: bold;

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
  color: rgba(223, 186, 20, .842);
}

svg {
  width: 30px;
  height: 30px;
  padding: 3px 8px;
}




















































</style>
