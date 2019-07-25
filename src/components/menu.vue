<template>
  <!-- template必须包裹一个div，否则会报错 -->
  <div class="side" :class="{'side-menu' : this.$store.state.isLeftHiden}">
    <el-row>
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#090d00"
          text-color="#fff"
          :collapse="this.$store.state.isLeftHiden"
          active-text-color="#ffa04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">监管报送</span>
            </template>
            <el-menu-item-group>
              <router-link to="/baosong/hetongbaosong">
                <el-menu-item index="1-1">合同报送</el-menu-item>
              </router-link>

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
              <!-- <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yonghuguanli" />
              </svg>-->
              <i class="el-icon-location"></i>
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
          <!-- <el-menu-item index="2" disabled>
            <i class="el-icon-menu"></i>
            <span slot="title">其他</span>
          </el-menu-item>-->
          <!-- <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">其他</span>
          </el-menu-item>
          <el-menu-item index="4" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">其他</span>
          </el-menu-item>-->
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

  /* background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551785745967&di=97a0ad10d328f665c40b9e8fb7a94fcb&imgtype=0&src=http%3A%2F%2Fs1.1zoom.me%2Fbig0%2F439%2FFerrari_2012-18_F12_berlinetta_Pininfarina_Black_541005_1280x854.jpg');
  background-repeat: no-repeat;
  background-position: center; */

  background-color: #090d00;
}

.side-menu {
  width: 62px;

  background-color: #090d00;
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