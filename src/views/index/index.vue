<template>
  <!-- 样式在app.vue中 -->
  <div class="wrapper-inner" id="app">
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
  },
  methods: {
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
  
  transition: all .5s;
}

// 右半部分扩张
.container-width {
  margin-left: 64px;
  padding: 0 8px;
  
  transition: all .5s;
}

// 整个页面
.wrapper-inner {
  width: 100%;
  height: 100%;

  background: #fff;
}
</style>
