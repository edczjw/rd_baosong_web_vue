<template>
  <!-- 样式在app.vue中 -->
  <div class="wrapper-inner" id="app">
    <!-- 返回顶部 -->
    <el-card id="dtop" class="gotop" title="返回顶部">
     <div  @click="movetop()"> 顶部</div>
    </el-card>
    <div class="top">
      <head-banner></head-banner>
    </div>
    <me-nu></me-nu>
    <div class="main-ten" :class="{'container-width':this.$store.state.isLeftHiden}">
      <!-- 路由页面 -->
      <!-- <div v-if="userName=='admin'? true:false">
        <router-view></router-view>
      </div>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 格式要特别注意字母大小写
import meNu from "../../components/menu.vue";
import headBanner from "../../components/head.vue";
import $ from "jquery";
export default {
  data() {
    return {
      userName: ""
    };
  },
  mounted() {
    this.getName();
    //登陆成功提示
    this.openCenter();
    
    window.addEventListener("scroll", function(e) {
      // 监听（绑定）滚轮滚动事件
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t > 350) {
        document.getElementById("dtop").style.display = "block";
      } else {
        document.getElementById("dtop").style.display = "none";
      }
    });
  },
  methods: {
    movetop() {
      $("body,html").animate({ scrollTop: 0 }, 2000);
    },
    openCenter() {
      if (this.userName) {
        this.$message({
          dangerouslyUseHTMLString: true, //表示提示的是html片段
          message:
            '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-jiqiren"></use> </svg> ' +
            "欢迎登陆您民盛报送系统！",
          type: "success",
          center: true
        });
      } else {
        this.$message({
          dangerouslyUseHTMLString: true,
          message:
            '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-shengqi"></use> </svg> ' +
            "请先登录！",
          type: "warning",
          center: true
        });
      }
    },

    //获取用户名，vue 本地存储数据 sessionStorage
    getName() {
      let userName = sessionStorage.getItem("name");
      this.userName = userName;
    }
  },
  watch: {},
  components: {
    meNu,
    headBanner
  }
};
</script>

<style lang='less'>
.top {
  width: 100%;
  height: 50px;
}

//右边部分整个大页面
.main-ten {
  margin-left: 240px;
  padding: 0 5px;

  transition: all 0.5s;
}

// 右半部分扩张
.container-width {
  margin-left: 64px;
  padding: 0 8px;

  transition: all 0.5s;
}

// 整个页面
.wrapper-inner {
  width: 100%;
  height: 100%;

  background: #fff;
}
/* 返回顶部 */
.gotop {
  position: fixed;
  z-index: 9999;
  right: 23px;
  bottom: 30px;
  display: none;
  cursor: pointer;
  width: 64px;
  height: 66px;
  text-align: center;
  font-size: 12px;
  font-weight: bolder;
  color:rgb(117, 117, 151);
  border-radius: 100%;
}
.gotop2:hover{
  border: 1px solid rgb(187, 184, 184);
}
</style>
