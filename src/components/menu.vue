<template>
  <!-- template必须包裹一个div，否则会报错 -->
  <div class="side" :class="{'side-menu' : this.$store.state.isLeftHiden}">
    <el-row>
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="rgb(18, 38, 61)"
          text-color="#fff"
          :collapse="this.$store.state.isLeftHiden"
          unique-opened
        >
          <div class="menu-img">
            <img style="border-radius:35px" class="animated fadeIn" src="../assets/user.png" alt="欢迎您" width="55px"> 
          </div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>报送管理</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">
                <!-- <i class="el-icon-news"></i> -->
                <span>金融局监管报送</span>
              </template>
              <el-menu-item-group>
                <router-link to="/baosong/hetongbaosong">
                  <el-menu-item index="1-1-1">合同报送</el-menu-item>
                </router-link>
                <router-link to="/baosong/fangkuanbaosong">
                  <el-menu-item index="1-1-2">放款报送</el-menu-item>
                </router-link>
                <router-link to="/baosong/huankuanbaosong">
                  <el-menu-item index="1-1-3">还款报送</el-menu-item>
                </router-link>
                <router-link to="/baosong/huaizhangbaosong">
                  <el-menu-item index="1-1-4">坏账报送</el-menu-item>
                </router-link>
                <router-link to="/baosong/rijiebaosong">
                  <el-menu-item index="1-1-5">日结报送</el-menu-item>
                </router-link>
                <router-link to="/baosong/jitibaosong">
                  <el-menu-item index="1-1-6">计提报送</el-menu-item>
                </router-link>
                <router-link to="/baosong/xianxiabaosong">
                  <el-menu-item index="1-1-7">线下报送</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">百行报送管理</template>
              <el-menu-item-group>
                <router-link to="/baihangguanli/applyList">
                  <el-menu-item index="1-2-1">申请列表</el-menu-item>
                </router-link>
                <router-link to="/baihangguanli/userList">
                  <el-menu-item index="1-2-2">账户列表</el-menu-item>
                </router-link>
                <router-link to="/baihangguanli/loanList">
                  <el-menu-item index="1-2-3">贷后列表</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>征信管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/zhengxinmanage/creditinterface">
                <el-menu-item index="2-1">征信接口统计</el-menu-item>
              </router-link>
              <router-link to="/zhengxinmanage/productsearch">
                <el-menu-item index="2-2">产品查询统计</el-menu-item>
              </router-link>
              <router-link to="/zhengxinmanage/creditdetail">
                <el-menu-item index="2-3">征信查询明细</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-zoom-in"></i>
              <span>风险评估报告</span>
            </template>
            <el-menu-item-group>
              <router-link to="/fengxianpinggubaogao/fengxianlist">
                <el-menu-item index="3-1">个人列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <!-- <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-zoom-out"></i>
              <span>黑名单管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/blacklistmanage/blacklist">
                <el-menu-item index="4-1">黑名单数据</el-menu-item>
              </router-link>
              <router-link to="/blacklistmanage/blackinput">
                <el-menu-item index="4-2">黑名单批量导入</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu> -->
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

  width: 200px;
  height: 100%;
  transition: all 0.5s;
  font-weight: bold;
  background-color: rgb(18, 38, 61);
}

.el-menu {
  border-color: rgb(18, 38, 61);
}

.side-menu {
  width: 64px;
  transition: all 0.5s;
  /* background-color: rgb(41, 85, 110); */
}

/* 修边 */
.el-menu {
  /* important的意义在于优先于它内部定义的样式 */
  margin: -0.4px !important;
}

/* .el-menu-item-group :hover {
  background-color: black !important;
}
.el-submenu :hover {
  background-color: black !important;
}
.el-submenu__title :hover {
  background-color: black !important;
} */
.el-menu-item-group {
  text-align: center;
}

.menu-img{
  width:100%;
  height: 56px;
  line-height: 55px;
  text-align: center;
  margin: 24px 0;
  cursor: pointer;
}
</style>