<template>
  <!-- template必须包裹一个div，否则会报错 -->
  <div class="side" :class="{'side-menu' : this.$store.state.isLeftHiden}">
    <el-row>
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="rgb(9, 10, 10)"
          text-color="#eee"
          :collapse="this.$store.state.isLeftHiden"
          active-text-color="#ffa04b"
          unique-opened
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span>监管报送</span>
            </template>
            <el-menu-item-group>
              <!-- <router-link to="/baosong/hetongbaosong"> -->
                <el-menu-item index="1-1">合同报送</el-menu-item>
              <!-- </router-link> -->

              <router-link to="/baosong/fangkuanbaosong">
                <el-menu-item index="1-2">放款报送</el-menu-item>
              </router-link>

              <router-link to="/baosong/huankuanbaosong">
                <el-menu-item index="1-3">还款报送</el-menu-item>
              </router-link>

              <router-link to="/baosong/huaizhangbaosong">
                <el-menu-item index="1-4">坏账报送</el-menu-item>
              </router-link>

              <router-link to="/baosong/rijiebaosong">
                <el-menu-item index="1-5">日结报送</el-menu-item>
              </router-link>

              <router-link to="/baosong/jitibaosong">
                <el-menu-item index="1-6">计提报送</el-menu-item>
              </router-link>

              <router-link to="/baosong/xianxiabaosong">
                <el-menu-item index="1-7">线下报送</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>百行管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/baihangguanli/applyList">
                <el-menu-item index="2-1">申请列表</el-menu-item>
              </router-link>
              <router-link to="/baihangguanli/userList">
                <el-menu-item index="2-2">账户列表</el-menu-item>
              </router-link>
              <router-link to="/baihangguanli/loanList">
                <el-menu-item index="2-3">贷后列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped  lang=less>
/* 菜单 */
.side {
  position: fixed;

  width: 199px;
  height: 100%;
  background-color: rgb(9, 10, 10);
}

.side-menu {
  width: 62px;
  background-color: rgb(9, 10, 10);
}

/* 修边 */
.el-menu {
  /* important的意义在于优先于它内部定义的样式 */
  margin: -0.9px !important;
}

.el-menu-item-group {
  text-align: center;
}
</style>